import 'dart:collection';
import 'package:matrix/src/cells/cell_base.dart';

void ufbAdd( q, task) {
  q.push( task);
}

/// --- the integrity API ---------

Function withoutCDependency(fn) {
  return (c){
    var sd = spvDepender;
    spvDepender = null;
    try {
      return fn(c);
    } finally {
      spvDepender = sd;
    }
  };
}

void withoutIntegrity (Function fn) {
  var wi = gWithinIntegrity
    , dc = deferChanges;

  try {
    gWithinIntegrity = false;
    deferChanges = false;
    // callstack = new Stack();
    fn();
  } finally {
    gWithinIntegrity = wi;
    deferChanges = dc;
    // callStack = cs;
  }
}

// Key block #1 of Cells data integrity, defined above

String withIntegrity (queue, deferInfo, action) {
  if (gStop) return 'gStopped';
  clg3('withinteg entry', gWithinIntegrity, deferInfo , action);
  if (gWithinIntegrity) {
    if (queue) {
      ufbAdd(queue, [deferInfo, action]);
      /*
			 assignment is supposed to return the value being installed
			 in the place, but if the SETF is deferred we return
			 something that will help someone who tries to use
			 the setf'ed value figure out what is going on:
			 */
      return 'deferred-to-ufb';
    } else {
      /*
			 So by not supplying a queue one can get something
			 executed immediately, potentially breaking data integrity
			 but signifying by having coded with-integrity
			 that one is aware of this. If you have read this comment.
			 */
      action( null, deferInfo);
    }
  } else {
    var wi = gWithinIntegrity
    , dc = deferChanges;

    gWithinIntegrity = true;
    deferChanges = false;
    try {
      if (gpulse()==0 || queue == qChange) {
        dataPulseNext('cwi');
      }
      clg2('calling action', gpulse(), action);
      var result = action(queue, deferInfo);
      clg2('called action', gpulse(), result);
      finBiz(qNotify);
      return result;
    } finally {
      gWithinIntegrity = wi;
      deferChanges = dc;
    }
  }
  return 'OK';
}

void withChg(id, fn) {
  withIntegrity( qChange, id, fn);
}


// Key block #2 of Cells data integrity, define above

void finBiz (Queue q) { // short for "finish (unfinished) business"
  while (q != null) {
    if (q == qNotify) {
      // top-level assignment to an "input" Cell enqueues it for notification
      // and then invokes "finish business", meaning "notify all direct dependents
      // and deal with observer side-effects and cascading changes from recalculation
      // of dependents".

      qDo('notify', q);
      // the notified rules may produce new Model instances
      // within the larger Model universe; we need to bring
      // those into play gracefully and ASAP.

      qDo('awaken', qAwaken);

      // now we check to see if a notified rule produced
      // its own new value of which dependent must be notified.
      if (qNotify.isEmpty) {
        q = qClient;
      } // ...else loop with qNotify still operative}

    } else if (q == qClient) {
      Function qh = (clientQHandler != null) ? clientQHandler : qDo;
      qh('client', q);
      if (qClient.isEmpty){
        q = qEphemReset;
      }
    } else if (q == qEphemReset) {
      // at this point the state change has been fully processed
      // so we are free to silently* revert ephemerals to nil.
      // * Without notifying dependents or observing the change to nil.
      qDo('reset empheral', q);
      q = qChange;

    } else if (q == qChange) {
      // observers (kicked off as part of notify) are free to
      // make changes to the model, but to preserve integrity
      // they must (well, we offer an "all bets off" back door)
      // enqueue those changes for execution after the original
      // change has fully propagated.
      //
      // Here is where we kick those off (one at a time):

      var work = q.isNotEmpty ? q.removeFirst() : null;
      if (work != null) {
        dataPulseNext('change');
        work[1]('change', work[0]);
        q = qNotify;
      } else {
        q = null;
      }
    } else {
      throw 'finBiz sees invalid q: ' + q.toString();
    }
  }
}

void qDo (opcode, q) {
  q.forEach( (taskInfo) {
    taskInfo[1]( opcode, taskInfo[0]);
  });
  q.clear();
}


