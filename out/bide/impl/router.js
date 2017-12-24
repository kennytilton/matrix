/**
 * router
 *
 * @author Andrey Antukh <niwi@niwi.nz>, 2016
 * @license BSD License <https://opensource.org/licenses/BSD-2-Clause>
 */

goog.provide("bide.impl.router");

goog.require("bide.impl.path");
goog.require("bide.impl.helpers");

goog.require("goog.object");

goog.scope(function() {
  var _path = bide.impl.path;
  var isArray = bide.impl.helpers.isArray;

  /**
   * Main router class.
   *
   * @constructor
   * @struct
   */
  function Router() {
    this.items = [];
    this.map = {};
  }

  /**
   * Routing Item class
   *
   * @constructor
   * @struct
   */
  function Route() {
    this.re = null;
    this.name = null;
    this.keys = null;
    this.format = null;
  }

  /**
   * Insert a new route entry to the router.
   * If router is `null` a new router is created.
   *
   * @param {?Router} router
   * @param {string} path
   * @param {!Object} name
   * @param {*} options
   * @return {Router}
   */
  function insert(router, path, name, options) {
    var route = new Route();

    route.re = _path.parse(path, options);
    route.keys = route.re._keys;
    route.format = _path.compileTokens(route.re._tokens);
    route.name = name;

    if (!goog.isDefAndNotNull(router)) {
      router = new Router();
    }

    router.items.push(route);
    name = name.toString();

    if (router.map[name] === undefined) {
      router.map[name] = [route];
    } else {
      router.map[name].push(route);
    }

    return router;
  }

  /**
   * Encode query params.
   *
   * @param {!Object<string,*} query
   * @return {string}
   */
  function encodeQueryParams(params) {
    var encode = encodeURIComponent;
    var keys = goog.object.getKeys(params);

    var result = [];

    for (var i=0; i<keys.length; i++) {
      var key = keys[i];
      var val = params[key];

      if (val === undefined) {
        // Do nothing
      } else if (val === null) {
        result.push(encode(key));
      } else if (isArray(val)) {
        var _result = [];

        for (var y=0; y<val.length; y++) {
          var _val = val[y];

          if (_val === undefined) {
            // do nothing
          } else if (_val === null) {
            _result.push(encode(key));
          } else {
            _result.push(encode(key) + "=" + encode(_val));
          }
        }

        result.push(_result.join("&"));
      } else {
        result.push(encode(key) + "=" + encode(val));
      }
    }

    return result.join("&");
  }

  /**
   * Parses the query string to javascript object.
   *
   * @param {!string} query
   * @return {Object<string,*>}
   */
  function parseQuery(query) {
    var result = {};

    if (! goog.isString(query)) {
      return result;
    }

    query = query.trim().replace(/^(\?|#|&)/, '');

    if (!query) {
      return result;
    }

    var params = query.split("&");

    for (var i=0; i<params.length; i++) {
      var parts = params[i].replace(/\+/g, ' ').split('=');

      var key = parts.shift();
      var val = parts.length > 0 ? parts.join('=') : undefined;
      key = decodeURIComponent(key);

      if (val === undefined) {
        val = null;
      } else {
        val = decodeURIComponent(val);
      }

      if (result[key] === undefined) {
        result[key] = val;
      } else if (isArray(result[key])) {
        result[key].push(val);
      } else {
        result[key] = [result[key], val];
      }
    }

    return result;
  }

  /**
   * Match a path in the router.
   *
   * @param {!Router} router
   * @param {!string} path
   * @return {Array<*>}
   */
  function match(router, path) {
    var path, query;

    if (path.indexOf("?") !== -1) {
      var parts = path.split("?");
      path = parts[0];
      query = parseQuery(parts[1]);
    } else {
      path = path;
      query = null;
    }

    var items = router.items;
    var result = null;
    var item = null;


    for (var i=0; i<items.length; i++) {
      item = items[i];
      result = item.re.exec(path);

      if (!goog.isNull(result)) {
        break;
      }
    }

    if (goog.isNull(result)) {
      return null;
    }

    var params = {};
    for (var i=0; i<item.keys.length; i++) {
      var key = item.keys[i];
      var res = result[(i + 1)];
      if (goog.isDefAndNotNull(res)) {
        params[key.name] = res;
      }
    }

    if (isEmpty(params)) {
      params = null;
    }

    return [item.name, params, query];
  }

  /**
   * Perform a resolve operation on router.
   *
   * @param {!Router} router
   * @param {*} name
   * @param {Object<string,*>} params
   * @param {Object<string,*>} query
   * @return {Array<?>}
   */
  function resolve(router, name, params, query) {
    var routes = router.map[name.toString()] || null;

    if (!goog.isDefAndNotNull(routes)) {
      return null;
    }

    var result = null;

    // If params is empty just check all possible
    // options and return the first one that matches
    // in case contrary check only routes with params
    // because route without params does not raise
    // exceptions causing that they are always elected
    // independently if params are passed or not.
    if (isEmpty(params)) {
      for (var i=0; i<routes.length; i++) {
        try {
          result = routes[i].format(params);
          break;
        } catch (e) {}
      }
    } else {
      for (var i=0; i<routes.length; i++) {
        if (routes[i].keys.length === 0) {
          continue;
        }

        try {
          result = routes[i].format(params);
          break;
        } catch (e) {}
      }
    }

    if (goog.isDefAndNotNull(query) && goog.isDefAndNotNull(result)) {
      result = result + "?" + encodeQueryParams(query);
    }

    return result;
  }

  /**
   * Check if provided value is an instance of Router
   *
   * @param {*} v
   * @return {boolean}
   */
  function isRouter(v) {
    return v instanceof Router;
  }

  /**
   * Create an empty Router instance.
   *
   * @return {Router}
   */
  function empty() {
    return new Router();
  }

  /**
   * Check if provided obj is empty.
   *
   * @param {Object} obj
   * @return {boolean}
   */
  function isEmpty(obj) {
    for (var x in obj) { return false; }
    return true;
  }

  var module = bide.impl.router;
  module.insert = insert;
  module.match = match;
  module.resolve = resolve;
  module.isRouter = isRouter;
  module.empty = empty;
  module.parseQuery = parseQuery;
  module.encodeQueryParams = encodeQueryParams;
});
