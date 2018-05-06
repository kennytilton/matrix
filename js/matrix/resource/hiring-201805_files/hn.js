function $(id) { return document.getElementById(id); }
function byClass (el, cl) { return el ? el.getElementsByClassName(cl) : [] }
function byTag (el, tg) { return el ? el.getElementsByTagName(tg) : [] }
function allof (cl) { return byClass(document, cl) }
function hasClass (el, cl) { var a = el.className.split(' '); return afind(cl, a) }
function addClass (el, cl) { if (el) { var a = el.className.split(' '); if (!afind(cl, a)) { a.unshift(cl); el.className = a.join(' ')}} }
function remClass (el, cl) { if (el) { var a = el.className.split(' '); arem(a, cl); el.className = a.join(' ') } }
function html (el) { return el ? el.innerHTML : null; }
function attr (el, name) { return el.getAttribute(name) }
function tonum (x) { var n = parseFloat(x); return isNaN(n) ? null : n }
function remEl (el) { el.parentNode.removeChild(el) }
function posf (f, a) { for (var i=0; i < a.length; i++) { if (f(a[i])) return i; } return -1; }
function apos (x, a) { return (typeof x == 'function') ? posf(x,a) : Array.prototype.indexOf.call(a,x) }
function afind (x, a) { var i = apos(x, a); return (i >= 0) ? a[i] : null; }
function acut (a, m, n) { return Array.prototype.slice.call(a, m, n) }
function aeach (fn, a) { return Array.prototype.forEach.call(a, fn) }
function arem (a, x) { var i = apos(x, a); if (i >= 0) { a.splice(i, 1); } return a; }
function alast (a) { return a[a.length - 1] }
function vis(el, on) { if (el) { on ? remClass(el, 'nosee') : addClass(el, 'nosee') } }
function noshow (el) { addClass(el, 'noshow') }
function elShow (el) { remClass(el, 'noshow') }
function ind (el) { return (byTag(el, 'img')[0] || {}).width }

function vote(ev, el, how) {
  var id = el.id.split(/_/)[1];
  var up = $('up_' + id);
  vis(up, how == 'un');
  vis($('down_' + id), how == 'un');
  var unv = '';
  if (how != 'un') {
    unv = " | <a id='un_" + id
      + "' onclick='return vote(event, this,\"un\")' href='"
      + up.href.replace('how=up','how=un')
      + "'>" + (how == 'up' ? 'unvote' : 'undown') + "</a>"
  }
  $('unv_' + id).innerHTML = unv;
  new Image().src = el.href;
  ev.stopPropagation();
  return false;
}

function comments () { return allof('comtr') }
function collapsed () { return allof('coll') }

function kidsOf (id) {
  var ks = [];
  var trs = comments();
  var i = apos($(id), trs);
  if (i >= 0) {
    ks = acut(trs, i + 1);
    var n = ind($(id));
    var j = apos(function(tr) {return ind(tr) <= n}, ks);
    if (j >= 0) { ks = acut(ks, 0, j) }
  }
  return ks;
}

function toggle (ev, id) {
  var on = !afind($(id), collapsed());
  (on ? addClass : remClass)($(id), 'coll');
  recoll();
  if ($('logout')) {
    new Image().src = 'collapse?id=' + id + (on ? '' : '&un=true');
  }
  ev.stopPropagation();
  return false;
}

function expand (tr) {
  elShow(tr);
  elShow(byClass(tr, 'comment')[0]);
  vis(byClass(tr, 'votelinks')[0], true);
  byClass(tr, 'togg')[0].innerHTML = '[-]';
}

function squish (tr) {
  if (hasClass(tr, 'noshow')) return;
  aeach(noshow, kidsOf(tr.id));
  var el = byClass(tr, 'togg')[0];
  el.innerHTML = '[+' + el.getAttribute('n') + ']';
  noshow(byClass(tr, 'comment')[0]);
  vis(byClass(tr, 'votelinks')[0], false);
}

function recoll() {
  aeach(expand, comments());
  aeach(squish, collapsed());
}

function onready () {
  if (!localStorage.getItem('collapsingnewfeatures')) {
    elShow($('newfeatures'));
  }
  recoll();
}

document.addEventListener("DOMContentLoaded", onready);

function ajax (fn, url) {
  var req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      fn(req.responseText)
    }
  }
  return req.send();
}

function onop () { return attr(byTag(document,'html')[0],'op') }

function ranknum (el) {
  var s = html(el) || "";
  var a = s.match(/[0-9]+/);
  if (a) {
    return tonum(a[0]);
  }
}

var n1 = ranknum(allof('rank')[0]) || 1;

function newstory (json) {
  if (json) {
    var pair = JSON.parse(json);
    var sp = alast(allof('spacer'));
    sp.insertAdjacentHTML('afterend', pair[0] + sp.outerHTML);
    fixranks();
    if (onop() == 'newest') {
      var n = ranknum(alast(allof('rank')));
      allof('morelink')[0].href = 'newest?next=' + pair[1] + '&n=' + (n + 1);
    }
  }
}

function fixranks () {
  var rks = allof('rank');
  aeach(function (rk) { rk.innerHTML = (apos(rk,rks) + n1) + '.' }, rks);
}

function moreurl() { return allof('morelink')[0].href }
function morenext () { return tonum(moreurl().split('next=')[1]) }

function hidestory (ev, el, id) {
  for (var i=0; i < 3; i++) { remEl($(id).nextSibling) }
  remEl($(id));
  fixranks();
  var next = (onop() == 'newest' && morenext()) ? ('&next=' + morenext()) : ''
  var url = el.href.replace('hide', 'snip-story').replace('goto', 'onop')
  ajax(newstory, url + next);
  ev.stopPropagation();
  return false;
}

function closefeat (ev) {
  noshow($('newfeatures'));
  localStorage.setItem('collapsingnewfeatures', 'seen');
  ev.stopPropagation();
}
