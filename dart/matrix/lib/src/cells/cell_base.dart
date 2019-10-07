import 'dart:collection';
import 'integrity.dart';

// --- the keys to dependency identification
final Queue causation = Queue();
Queue callStack = Queue();
cell spvDepender;

// todo Is this next ever used?
bool gNotToBe = false; // am I in the process of leaving the model?

// --- debug stuff ----------------
int gCPropDepth = 0;
bool gCDebug = false;
bool gStop = false; // emergency brake

// --- pulse, the clock behind integrity ------
int ppulse = 0;
int gpulse() {
  return ppulse;
}

Object gPar; // set up by cKids for use in Model constructor

bool onePulsep = false;
bool dpLogp = false;

void clg( String msg) {
  print( 'clg> $msg');
}
void clg1( String msg, x) {
  print( 'clg> $msg $x');
}
void clg2( String msg, x, y) {
	print( 'clg> $msg: $x | $y');
}

void clg3( String msg, x, y, z) {
	print( 'clg> $msg: $x | $y | $z');
}

void clg4( String msg, w, x, y, z) {
	print( 'clg> $msg: $w | $x | $y | $z');
}

int dataPulseNext([who = 'anon']) {
  //clg('datapulsenext entry', who, ppulse);
  if ( !onePulsep ) {
    if ( dpLogp ) {
      clg1('dpnext', who);
    }
    ppulse++;
    //clg(`ppulse now ${ppulse}`);
  }
  //clg(`pulseNext exits ${ppulse}`);
  return ppulse;
}

// --- library init/re-init during development

void cellsReset({options = const {}}) {
  gCDebug = options.debug;
  clientQHandler = options.clientQHandler;
  cellsInit();
}
void cellsInit () {
  //clg('initcells');
  ppulse = 0;
}

// --- data integrity mechanics in which state change is
// carefully choreographed

bool deferChanges = false;
Function clientQHandler;
var gCustomPropagator;
bool gWithinIntegrity = false;
var gSlotObserver = HashMap<String, Function>(); //keys will be slot (aka property) names

void gSlotObserverDef (slot, obs) {
  var xo = gSlotObserver[slot];
  if (xo != null) {
    clg('gSlotObserverDef overwriting $slot observer');
  }
  gSlotObserver[slot] = obs;
}

final qNotify = Queue();
final qAwaken = Queue();
final qClient = Queue();
final qEphemReset = Queue();
final qChange = Queue();


// --- internal Cell states
final kUnboundValue = Symbol.empty;
final kUncurrentValue = Symbol("uncurrent");
enum cState {
	kUnboundState, // new. Possibly not needed since code checks for pv==kUnboundValue
  kUncurrentState,
  kValid,
  kAwake,
  kQuiesced,
  kNascent,
  kOptimizedAwayp
}

enum cOptimizeWhen {
	kAlways,
	kNever,
	kValued // allows a formula to survive until it produces a value
}

// lazy options
enum cLazy {
  kOnceAsked,
  kUntilAsked,
  kAlways
}

// other k's
const kObserverUnresolved = 'kObserverUnresolved';

// --- Cells ----------------------

class cell {
  String name = 'anon';
  dynamic md;
  int pulse = -1;
  int pulseLastChanged = -1;
  int pulseObserved = -1;
  Symbol lazy; // not a predicate (can hold, inter alia, :until-asked)
  Set callers = Set();
  Set useds = Set(); // formulaic Cells only
  Set others = Set(); // other models (of used cells) found and consulted by rule/formula
  bool ephemeralp;
  bool synapticp;
  dynamic observer;
	cOptimizeWhen optimize;
  Function quiesceWith; // todo vestigial? FNYI?
  bool slotOwning = false; // todo
  Function rule; // the formula for this Cell
  dynamic pv = kUnboundValue; // "prior value"
  cState state = cState.kNascent;
  Map options;

	cell(value, Function formula, Map options) {
	  this.md = null; //when we get to Model, this will be the model of which I am an attribute
		this.pulse = -1;
		this.pulseLastChanged = -1;
		this.pulseObserved = -1;
		this.lazy = null; // not a predicate (can hold, inter alia, :until-asked)
		this.callers = Set();
		this.useds = Set(); // formulas only
		clg1("options in!", options);

		this.options = Map.from({
			"name" : "anon",
			"inputp" : false,
			"ephemeralp": false,
			"observer": null,
			"optimize": cOptimizeWhen.kAlways,
			"quiesceWith": null,
			"slotOwningp": false,
			"synapticp": false,
			"unchangedTest": (a, b) {
				return a == b;
			}
		});

		if ( options != null) {
			this.options.addAll(options);
		}
		if (formula != null) {
			this.rule = formula;
		} else {
			this.pv = value; // todo is this right?! How does observer know it's new?
			this.state = cState.kValid;
		}
	}

	bool get inputp {
		return this.options["inputp"];
	}
	dynamic get v {
		return this.slotValue();
  }
  set v( dynamic newValue) {
    this.slotValueSet( newValue);
  }
  mx() {
	  return this.md;
	}

	bool optimizedAwayp() {return this.state == cState.kOptimizedAwayp;}
	bool unboundp() { return this.pv == kUnboundValue;}
	bool uncurrentp() { return this.pv == kUncurrentValue;}
	validp() { return !(this.unboundp() || this.uncurrentp());}
	cState valueState() {
		return this.unboundp() ?
			cState.kUnboundState :
		(this.uncurrentp() ? cState.kUncurrentState : cState.kValid);
	}
	bool valueChangedp (newv, oldv) {
		return !this.options["unchangedTest"]( newv, oldv);
	}
	currentp() {
		//clg(`currentp this pulse ${this.pulse} vs pulse ${gpulse()}`);
		return this.pulse >= gpulse();
	}
	pulseUpdate([key='anon']) {
		if (!this.optimizedAwayp()) {
			assert(gpulse() >= this.pulse, "gpulse ${gpulse()} not GE c.pulse ${this.pulse}");
			this.pulse = gpulse();
		}
	}
	awaken() {
		if (this.rule != null) {
			if (!this.currentp()) {
				//clg(`calcnset ${this.name} of ${this.md.name}`);
				this.calcNSet('c-awaken');
			}
		} else {
			//clg('awk pulses', gpulse(),this.pulseObserved);
			if (gpulse() > this.pulseObserved) {
				//clg('awakenin obs!!!',this.name);
				this.observe(kUnboundValue,'awaken');
				this.ephemeralReset();
			}
		}
	} // --- coming to life JIT or forced

	// Key block #4 of data integrity defined above. Reading and
	// writing properties ("slot" reflects the Lisp genetics") gets
	// fed into the Cells machinery. Both these functions are reached
	// transparently thanks to Object.define_property custom getters
	// and setters in the Model class.
	//
	// --- the offical slot access API -----------
	//
	slotValue() {
		dynamic rv = kUnboundValue;

		clg1('slotval entry', this);

		withIntegrity( null, null, (q, di) {
			var self = this, vPrior = self.pv;
			rv = self.ensureValueIsCurrent( 'c-read', null);
			clg1('evic said',rv.toString());
			if ( self.md !=null
					&& self.state == cState.kNascent
					&& gpulse() > self.pulseObserved) {
				self.state = cState.kAwake;
				self.observe(vPrior, 'cget');
				self.ephemeralReset();
			}
		});
		if (spvDepender != null) {
			spvDepender.recordDependency(this);
		}
		clg1("slotvale returns", rv);
		return rv;
	}
	slotValueSet(newv) {
		assert (!deferChanges,
			"Assign to ${this.name} must be deferred by wrapping it in WITH-INTEGRITY");

		if ( [cLazy.kOnceAsked, cLazy.kAlways, true].contains( this.lazy)) {
			this.valueAssume(newv, null);
		} else {
	        //clg('svset', this.name, newv);
			withChg(this.name, () {
				this.valueAssume( newv, null);
			});
		}
	}

	// --- dependency graph maintenance ----
	recordDependency(used) {
		if (!used.optimizedAwayp()) {
			//clg(`recdep ${this.name} usedby ${used.name}`);
			this.useds.add(used);
			assert(this.useds.isNotEmpty);
			used.callerEnsure(this);
		}
	}
	callerEnsure(caller) {
		//clg('addcaller', this.name, this.md? this.md.dbg():'nomd', caller.name, caller.md? caller.md.dbg():'nomd');
		this.callers.add(caller);
	}
	callerDrop(caller) {
		//clg(`dropping!! caller ${caller.name} of ${this.name}`);
		this.callers.remove(caller);
	}

	ensureValueIsCurrent(tag, ensurer) {
		clg1('evic entry ', this);
		if (gNotToBe) {
			//clg('not2be');
			return this.validp() ? this.pv : null;
		} else if (this.currentp()) {
			//clg('currentp',this.pulse,gpulse());
			return this.pv;
		} else if (this.inputp
							&& this.validp()
							&& !(this.rule != null
								   && this.optimize == cOptimizeWhen.kValued
								   && this.pv == null)) {
			//clg('inputp', this.name);
			return this.pv;
		} else if (this.md && this.md.mDeadp()) {
			throw "evic: read of dead ${this.name} of ${this.md.name}";
		} else {
			bool recalc = false;
			if (!this.validp()) {
				//clg('evic not validp');
				recalc = true;
			} else {
				this.useds.forEach( (used) {
					if ( !recalc ) { // we must have decided to recalc, so check no more
						used.ensureValueIsCurrent('nested', this);
						if (used.pulseLastChanged > this.pulse) {
							recalc = true;
						}
					}
				});
			}
			if (recalc) {
				if (!this.currentp()) {
					// possible if a used's observer queried me
					//clg('calcnset!!', this.name);
					this.calcNSet('evic', ensurer);
					//clg('cnset left', this.pv.toString())
				} //else clg('late currentp');
				return this.pv;
			} else {
				//clg('valid uninfluenced', this.name);
				this.pulseUpdate('valid-uninfluence');
				return this.pv;
			}
		}
	}
	calcNSet(dbgId, [dbgData]) {
		//  Calculate, link, record, and propagate.
		if (callStack.contains(this)) {
			clg("cyclic dependency: about to calculate ${this.name} which is already calculating");
			callStack.forEach( (c) {
				clg("stack c ${c.name} of md ${c.md != null? c.md.name : 'null'}");
			});
			assert(false, 'cyclic dependency detected. see console for deets');
		}
		var rawValue = this.calcNLink();
		//clbug(this,'rawval', rawValue);

		if (!this.optimizedAwayp()) {
			/*
			 this check for optimized-away? arose because a rule using without-c-dependency
			 can be re-entered unnoticed since that clears *call-stack*. If re-entered, a subsequent
			 re-exit will be of an optimized away cell, which will have been assumed
			 as part of the opti-away processing.
			 */
			// clbug(this,'assuming ', rawValue, this.useds.size);
			return this.valueAssume(rawValue, null);
		}
	}
	calcNLink() {
		/* The name is accurate: we do no more than invoke the
		 rule of a formula and return its value, but along the
		 way the links between dependencies and dependents get
		 determined anew. */
		var dp = spvDepender
			, dc = deferChanges;

		spvDepender = this;
		deferChanges = true;

		try {
			callStack.addFirst(this);
			this.unlinkFromUsed('pre-rule-clear');
			//clg(`calling ${this.name} rule with md ${this.md} `+this.rule.toString());
			return this.rule(this);
		} finally {
			callStack.removeFirst();
			spvDepender = dp;
			deferChanges = dc;
		}
	}

	// --- state changes, from external assign or recalculation
	valueAssume( newValue, propCode) {
		var self = this;

		withoutCDependency(() {
			var priorValue = self.pv
			, priorState = self.valueState();

			self.pv = newValue;
			self.state = cState.kAwake;
			self.pulseUpdate('sv-assume');

			if (propCode=='propagate'
					|| ![cState.kValid, cState.kUncurrentState].contains(priorState)
					|| self.valueChangedp( newValue, priorValue)) {
				var optimize = self.rule != null ? self.optimize : null;
				if (optimize == cOptimizeWhen.kValued) {
					if (self.pv) {
						self.unlinkFromUsed('opti-when');
						this.optimizeAwayMaybe(priorValue);
					}
				} else if (optimize != cOptimizeWhen.kNever) { // todo can this be inside the maybe fun?
					self.optimizeAwayMaybe(priorValue);
				}

				if (!(propCode == 'no-propagate'
						|| self.optimizedAwayp())) {
					self.propagate(priorValue, self.callers);
				}
			}
		})();
		return newValue;
	}
	propagate(vPrior, callers) {
		// might not need to pass in callers
		if (onePulsep) {
			if (gCustomPropagator) {
				gCustomPropagator(this, vPrior);
			}
		} else {
			this.pulseLastChanged = gpulse();
			var dp = spvDepender
				, cs = callStack
				, pd = gCPropDepth
				, dc = deferChanges;
			try {
				/*if (vPrior && this.slotOwning) {
					// todo OMG call not-to-be on those lost
				}*/
				this.propagateToCallers( callers);
				if (gpulse() > this.pulseObserved
					|| [cLazy.kOnceAsked, cLazy.kAlways].contains(this.lazy)) {
					this.observe(vPrior,'propagate');
				}
				this.ephemeralReset();
			} finally {
				spvDepender = dp;
				callStack = cs;
				gCPropDepth = pd;
				deferChanges = dc;
			}
		}
	}
	propagateToCallers(callers) {
		if (callers.size) {
			var c = this;
			withIntegrity(qNotify, c, () {
				causation.addFirst(c); // this was (kinda) outside withIntegrity
				try {
					callers.forEach( (caller) {
						if (!(caller.state == cState.kQuiesced
									|| caller.currentp()
									|| [cLazy.kAlways, cLazy.kOnceAsked].contains(caller.lazy )
									|| !caller.useds.contains(c))) {
							// clg('calcing eager ', c.name, caller.name);
							caller.calcNSet('propagate');
						}
					});
				} finally {
					causation.removeFirst();
				}
		});
		}
	}

	// --- the model alters the outside world (or itself, if necessary) ---
	observerResolve () {
		if (this.observer == null && this.md) { // The Model class
			this.observer = this.md.slotObserverResolve(this.name);
		}
		return this.observer == kObserverUnresolved ? null : this.observer;
	}
	observe( vPrior, tag) {
		//clg('observe entry', this.name, vPrior.toString());
		var obs = this.observerResolve();

		if (obs) {
			obs(this.name, this.md, this.pv, vPrior, this);
		}
	}

	// --- ephemerals are for event "state" ----
	ephemeralReset() {
		if (this.ephemeralp) { // tolerate calls on non-ephp
			/*
			 we defer resetting ephemerals because everything
			 else gets deferred and we must not in fact reset it until
			 within finBiz we are sure all callers have been recalculated
			 and all observers completed (which happens with recalc).
			 */
			var self = this;
			withIntegrity( qEphemReset, this, () {
				self.pv = null;
			});
		}
	}

	// --- housekeeping
	unlinkFromUsed(why) {
		this.useds.forEach( (used) {
			//clg(`${this.name} unlinks fromused dueto ${why}`);
			used.callerDrop(this);
		});
		this.useds.clear();
	}
	mdCellFlush(){
		// todo are we doing this?
		//        if (this.md) {
		//            this.md.cellsFlushed.push([this.name, this.pulseObserved]);
		//        }
	}

	optimizeAwayMaybe(vPrior) {
		if (this.rule != null
			&& this.useds.isEmpty
			&& this.optimize != cOptimizeWhen.kNever
			&& !this.optimizedAwayp()
			&& this.validp()
			&& !this.synapticp
			&& !this.inputp) {
			//clg(`opti-away!!! ${this.name}`);
			this.state = cState.kOptimizedAwayp;
			this.observe( vPrior, 'optimized-away');
			if (this.md != null) {
				this.mdCellFlush();
				// todo install value as constant
			}
			this.callers.forEach( (caller) {
				this.callerDrop(caller);
				// ouch: next seems like a category error
				caller.ensureValueIsCurrent( 'opti-used', this); // todo really?
			});
		}
	}

	// todo test not-to-be, quiesce, opti-away, etc
	quiesce() {
		if (this.quiesceWith != null) {
			clg('quiescing!');
			this.quiesceWith(this);
		}
		this.unlinkFromCallers();
		this.unlinkFromUsed('quiesce');
	}

	unlinkFromCallers() {
	    this.state = cState.kUncurrentState;
	    this.callers.forEach( (caller) {
	    	//clg(`${this.name} unlinks fromused dueto ${why}`);
				this.callerDrop(caller);
	    });
	    this.callers.clear();
	}

	// ---------- next we offer support for the ever important Family concept -------------------

	kidValuesKids( ) {
		var c = this,
				xKids = c.unboundp() ? Set() : c.pv; // pv = "prior value", ie prior formula calculation (to-do items)

		var newkids = Set();
		c.md.kidValues.forEach( (kidValue) {
			var kvk = c.md.kidValueToKey(kidValue),
					xmatch;
			xmatch = xKids.firstWhere((xkid) {
				var kk = c.md.kidKey(xkid);
				//clg('comparing', kk, kvk, kk == kvk)
				return kk == kvk;
			});
			if (xmatch != null) {
				newkids.add(xmatch);
			} else {
				newkids.add(c.md.kidFactory(c, kidValue));
			}
		});
		return newkids;
	}

	Object fm (what, how, key) { // short for "find model"
		if (!what) return null;
		assert(this.md!=null, "fm> Family search attempted from Cell ${this} lacking md (s/b a Model)");
		return this.md.fm( what, how, key);
	}
	fmUp (what,how,key) {
		assert(this.md!=null, "fmUp> Family search attempted from Cell ${this} lacking md (s/b a Model)");
		return this.md.fmUp( what, how, key);
	}
	fmDown (what, key, how) {
		assert(this.md!=null, "fmDown> Family search attempted from Cell ${this} lacking md (s/b a Model)");
		return this.md.fmDown( what, how, key);
	}
}

// --- some handy cell factories -------------------
Map cNetOptions( m1, m2) {
	Map net = Map();
	if (m1 != null) {
		net.addAll(m1);
	}
	if (m2 != null) {
		net.addAll(m2);
	}
	return net;
}

