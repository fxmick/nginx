
// other libs
// ----------
/* Modernizr 2.8.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-opacity-rgba-canvas-history-audio-video-localstorage-shiv-cssclasses-prefixes
 */
;window.Modernizr=function(a,b,c){function v(a){j.cssText=a}function w(a,b){return v(m.join(a+";")+(b||""))}function x(a,b){return typeof a===b}function y(a,b){return!!~(""+a).indexOf(b)}function z(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:x(f,"function")?f.bind(d||b):f}return!1}var d="2.8.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t={}.hasOwnProperty,u;!x(t,"undefined")&&!x(t.call,"undefined")?u=function(a,b){return t.call(a,b)}:u=function(a,b){return b in a&&x(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},n.history=function(){return!!a.history&&!!history.pushState},n.rgba=function(){return v("background-color:rgba(150,255,150,.5)"),y(j.backgroundColor,"rgba")},n.opacity=function(){return w("opacity:.55"),/^0.55$/.test(j.opacity)},n.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},n.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},n.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}};for(var A in n)u(n,A)&&(s=A.toLowerCase(),e[s]=n[A](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)u(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},v(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document);
//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function() {
  // Baseline setup
  // --------------
  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;
  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;
  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};
  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;
  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;
  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };
  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }
  // Current version.
  _.VERSION = '1.6.0';
  // Collection Functions
  // --------------------
  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return obj;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
    return obj;
  };
  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };
  var reduceError = 'Reduce of empty array with no initial value';
  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };
  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };
  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    any(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };
  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
    each(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) results.push(value);
    });
    return results;
  };
  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, function(value, index, list) {
      return !predicate.call(context, value, index, list);
    }, context);
  };
  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(predicate, context);
    each(obj, function(value, index, list) {
      if (!(result = result && predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };
  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, predicate, context) {
    predicate || (predicate = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
    each(obj, function(value, index, list) {
      if (result || (result = predicate.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };
  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };
  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };
  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };
  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };
  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };
  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    var result = -Infinity, lastComputed = -Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed > lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };
  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    var result = Infinity, lastComputed = Infinity;
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      if (computed < lastComputed) {
        result = value;
        lastComputed = computed;
      }
    });
    return result;
  };
  // Shuffle an array, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };
  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };
  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return value;
    return _.property(value);
  };
  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {
    iterator = lookupIterator(iterator);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };
  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iterator, context) {
      var result = {};
      iterator = lookupIterator(iterator);
      each(obj, function(value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };
  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {
    _.has(result, key) ? result[key].push(value) : result[key] = [value];
  });
  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {
    result[key] = value;
  });
  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });
  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };
  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };
  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };
  // Array Functions
  // ---------------
  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };
  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };
  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };
  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };
  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };
  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    each(input, function(value) {
      if (_.isArray(value) || _.isArguments(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };
  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };
  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };
  // Split an array into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(array, predicate) {
    var pass = [], fail = [];
    each(array, function(elem) {
      (predicate(elem) ? pass : fail).push(elem);
    });
    return [pass, fail];
  };
  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };
  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };
  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.contains(other, item);
      });
    });
  };
  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };
  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, 'length').concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };
  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };
  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };
  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };
  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;
    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);
    while(idx < length) {
      range[idx++] = start;
      start += step;
    }
    return range;
  };
  // Function (ahem) Functions
  // ------------------
  // Reusable constructor function for prototype setting.
  var ctor = function(){};
  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };
  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };
  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error('bindAll must be passed function names');
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };
  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };
  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };
  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };
  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };
  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    var later = function() {
      var last = _.now() - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    };
    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }
      return result;
    };
  };
  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };
  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };
  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };
  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };
  // Object Functions
  // ----------------
  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };
  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };
  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };
  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };
  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };
  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };
  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };
   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };
  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };
  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };
  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };
  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                             _.isFunction(bCtor) && (bCtor instanceof bCtor))
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };
  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };
  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };
  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };
  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };
  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };
  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });
  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }
  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }
  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };
  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };
  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };
  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };
  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };
  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };
  // Utility Functions
  // -----------------
  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };
  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };
  _.constant = function(value) {
    return function () {
      return value;
    };
  };
  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };
  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    return function(obj) {
      if (obj === attrs) return true; //avoid comparing an object to itself.
      for (var key in attrs) {
        if (attrs[key] !== obj[key])
          return false;
      }
      return true;
    }
  };
  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };
  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };
  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() { return new Date().getTime(); };
  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);
  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };
  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });
  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };
  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };
  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };
  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };
  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;
  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };
  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);
    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');
    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });
      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";
    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";
    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }
    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };
    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';
    return template;
  };
  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };
  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.
  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };
  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);
  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });
  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });
  _.extend(_.prototype, {
    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },
    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }
  });
  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}).call(this);
// Released under MIT license
// Copyright (c) 2009-2010 Dominic Baggott
// Copyright (c) 2009-2010 Ash Berlin
// Copyright (c) 2011 Christoph Dorn <christoph@christophdorn.com> (http://www.christophdorn.com)
/*jshint browser:true, devel:true */
(function( expose ) {
/**
 *  class Markdown
 *
 *  Markdown processing in Javascript done right. We have very particular views
 *  on what constitutes 'right' which include:
 *
 *  - produces well-formed HTML (this means that em and strong nesting is
 *    important)
 *
 *  - has an intermediate representation to allow processing of parsed data (We
 *    in fact have two, both as [JsonML]: a markdown tree and an HTML tree).
 *
 *  - is easily extensible to add new dialects without having to rewrite the
 *    entire parsing mechanics
 *
 *  - has a good test suite
 *
 *  This implementation fulfills all of these (except that the test suite could
 *  do with expanding to automatically run all the fixtures from other Markdown
 *  implementations.)
 *
 *  ##### Intermediate Representation
 *
 *  *TODO* Talk about this :) Its JsonML, but document the node names we use.
 *
 *  [JsonML]: http://jsonml.org/ "JSON Markup Language"
 **/
var Markdown = expose.Markdown = function(dialect) {
  switch (typeof dialect) {
    case "undefined":
      this.dialect = Markdown.dialects.Gruber;
      break;
    case "object":
      this.dialect = dialect;
      break;
    default:
      if ( dialect in Markdown.dialects ) {
        this.dialect = Markdown.dialects[dialect];
      }
      else {
        throw new Error("Unknown Markdown dialect '" + String(dialect) + "'");
      }
      break;
  }
  this.em_state = [];
  this.strong_state = [];
  this.debug_indent = "";
};
/**
 *  parse( markdown, [dialect] ) -> JsonML
 *  - markdown (String): markdown string to parse
 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
 *
 *  Parse `markdown` and return a markdown document as a Markdown.JsonML tree.
 **/
expose.parse = function( source, dialect ) {
  // dialect will default if undefined
  var md = new Markdown( dialect );
  return md.toTree( source );
};
/**
 *  toHTML( markdown, [dialect]  ) -> String
 *  toHTML( md_tree ) -> String
 *  - markdown (String): markdown string to parse
 *  - md_tree (Markdown.JsonML): parsed markdown tree
 *
 *  Take markdown (either as a string or as a JsonML tree) and run it through
 *  [[toHTMLTree]] then turn it into a well-formated HTML fragment.
 **/
expose.toHTML = function toHTML( source , dialect , options ) {
  var input = expose.toHTMLTree( source , dialect , options );
  return expose.renderJsonML( input );
};
/**
 *  toHTMLTree( markdown, [dialect] ) -> JsonML
 *  toHTMLTree( md_tree ) -> JsonML
 *  - markdown (String): markdown string to parse
 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
 *  - md_tree (Markdown.JsonML): parsed markdown tree
 *
 *  Turn markdown into HTML, represented as a JsonML tree. If a string is given
 *  to this function, it is first parsed into a markdown tree by calling
 *  [[parse]].
 **/
expose.toHTMLTree = function toHTMLTree( input, dialect , options ) {
  // convert string input to an MD tree
  if ( typeof input ==="string" ) input = this.parse( input, dialect );
  // Now convert the MD tree to an HTML tree
  // remove references from the tree
  var attrs = extract_attr( input ),
      refs = {};
  if ( attrs && attrs.references ) {
    refs = attrs.references;
  }
  var html = convert_tree_to_html( input, refs , options );
  merge_text_nodes( html );
  return html;
};
// For Spidermonkey based engines
function mk_block_toSource() {
  return "Markdown.mk_block( " +
          uneval(this.toString()) +
          ", " +
          uneval(this.trailing) +
          ", " +
          uneval(this.lineNumber) +
          " )";
}
// node
function mk_block_inspect() {
  var util = require("util");
  return "Markdown.mk_block( " +
          util.inspect(this.toString()) +
          ", " +
          util.inspect(this.trailing) +
          ", " +
          util.inspect(this.lineNumber) +
          " )";
}
var mk_block = Markdown.mk_block = function(block, trail, line) {
  // Be helpful for default case in tests.
  if ( arguments.length == 1 ) trail = "\n\n";
  var s = new String(block);
  s.trailing = trail;
  // To make it clear its not just a string
  s.inspect = mk_block_inspect;
  s.toSource = mk_block_toSource;
  if ( line != undefined )
    s.lineNumber = line;
  return s;
};
function count_lines( str ) {
  var n = 0, i = -1;
  while ( ( i = str.indexOf("\n", i + 1) ) !== -1 ) n++;
  return n;
}
// Internal - split source into rough blocks
Markdown.prototype.split_blocks = function splitBlocks( input, startLine ) {
  input = input.replace(/(\r\n|\n|\r)/g, "\n");
  // [\s\S] matches _anything_ (newline or space)
  // [^] is equivalent but doesn't work in IEs.
  var re = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
      blocks = [],
      m;
  var line_no = 1;
  if ( ( m = /^(\s*\n)/.exec(input) ) != null ) {
    // skip (but count) leading blank lines
    line_no += count_lines( m[0] );
    re.lastIndex = m[0].length;
  }
  while ( ( m = re.exec(input) ) !== null ) {
    if (m[2] == "\n#") {
      m[2] = "\n";
      re.lastIndex--;
    }
    blocks.push( mk_block( m[1], m[2], line_no ) );
    line_no += count_lines( m[0] );
  }
  return blocks;
};
/**
 *  Markdown#processBlock( block, next ) -> undefined | [ JsonML, ... ]
 *  - block (String): the block to process
 *  - next (Array): the following blocks
 *
 * Process `block` and return an array of JsonML nodes representing `block`.
 *
 * It does this by asking each block level function in the dialect to process
 * the block until one can. Succesful handling is indicated by returning an
 * array (with zero or more JsonML nodes), failure by a false value.
 *
 * Blocks handlers are responsible for calling [[Markdown#processInline]]
 * themselves as appropriate.
 *
 * If the blocks were split incorrectly or adjacent blocks need collapsing you
 * can adjust `next` in place using shift/splice etc.
 *
 * If any of this default behaviour is not right for the dialect, you can
 * define a `__call__` method on the dialect that will get invoked to handle
 * the block processing.
 */
Markdown.prototype.processBlock = function processBlock( block, next ) {
  var cbs = this.dialect.block,
      ord = cbs.__order__;
  if ( "__call__" in cbs ) {
    return cbs.__call__.call(this, block, next);
  }
  for ( var i = 0; i < ord.length; i++ ) {
    //D:this.debug( "Testing", ord[i] );
    var res = cbs[ ord[i] ].call( this, block, next );
    if ( res ) {
      //D:this.debug("  matched");
      if ( !isArray(res) || ( res.length > 0 && !( isArray(res[0]) ) ) )
        this.debug(ord[i], "didn't return a proper array");
      //D:this.debug( "" );
      return res;
    }
  }
  // Uhoh! no match! Should we throw an error?
  return [];
};
Markdown.prototype.processInline = function processInline( block ) {
  return this.dialect.inline.__call__.call( this, String( block ) );
};
/**
 *  Markdown#toTree( source ) -> JsonML
 *  - source (String): markdown source to parse
 *
 *  Parse `source` into a JsonML tree representing the markdown document.
 **/
// custom_tree means set this.tree to `custom_tree` and restore old value on return
Markdown.prototype.toTree = function toTree( source, custom_root ) {
  var blocks = source instanceof Array ? source : this.split_blocks( source );
  // Make tree a member variable so its easier to mess with in extensions
  var old_tree = this.tree;
  try {
    this.tree = custom_root || this.tree || [ "markdown" ];
    blocks:
    while ( blocks.length ) {
      var b = this.processBlock( blocks.shift(), blocks );
      // Reference blocks and the like won't return any content
      if ( !b.length ) continue blocks;
      this.tree.push.apply( this.tree, b );
    }
    return this.tree;
  }
  finally {
    if ( custom_root ) {
      this.tree = old_tree;
    }
  }
};
// Noop by default
Markdown.prototype.debug = function () {
  var args = Array.prototype.slice.call( arguments);
  args.unshift(this.debug_indent);
  if ( typeof print !== "undefined" )
      print.apply( print, args );
  if ( typeof console !== "undefined" && typeof console.log !== "undefined" )
      console.log.apply( null, args );
}
Markdown.prototype.loop_re_over_block = function( re, block, cb ) {
  // Dont use /g regexps with this
  var m,
      b = block.valueOf();
  while ( b.length && (m = re.exec(b) ) != null ) {
    b = b.substr( m[0].length );
    cb.call(this, m);
  }
  return b;
};
/**
 * Markdown.dialects
 *
 * Namespace of built-in dialects.
 **/
Markdown.dialects = {};
/**
 * Markdown.dialects.Gruber
 *
 * The default dialect that follows the rules set out by John Gruber's
 * markdown.pl as closely as possible. Well actually we follow the behaviour of
 * that script which in some places is not exactly what the syntax web page
 * says.
 **/
Markdown.dialects.Gruber = {
  block: {
    atxHeader: function atxHeader( block, next ) {
      var m = block.match( /^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/ );
      if ( !m ) return undefined;
      var header = [ "header", { level: m[ 1 ].length } ];
      Array.prototype.push.apply(header, this.processInline(m[ 2 ]));
      if ( m[0].length < block.length )
        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );
      return [ header ];
    },
    setextHeader: function setextHeader( block, next ) {
      var m = block.match( /^(.*)\n([-=])\2\2+(?:\n|$)/ );
      if ( !m ) return undefined;
      var level = ( m[ 2 ] === "=" ) ? 1 : 2;
      var header = [ "header", { level : level }, m[ 1 ] ];
      if ( m[0].length < block.length )
        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );
      return [ header ];
    },
    code: function code( block, next ) {
      // |    Foo
      // |bar
      // should be a code block followed by a paragraph. Fun
      //
      // There might also be adjacent code block to merge.
      var ret = [],
          re = /^(?: {0,3}\t| {4})(.*)\n?/,
          lines;
      // 4 spaces + content
      if ( !block.match( re ) ) return undefined;
      block_search:
      do {
        // Now pull out the rest of the lines
        var b = this.loop_re_over_block(
                  re, block.valueOf(), function( m ) { ret.push( m[1] ); } );
        if ( b.length ) {
          // Case alluded to in first comment. push it back on as a new block
          next.unshift( mk_block(b, block.trailing) );
          break block_search;
        }
        else if ( next.length ) {
          // Check the next block - it might be code too
          if ( !next[0].match( re ) ) break block_search;
          // Pull how how many blanks lines follow - minus two to account for .join
          ret.push ( block.trailing.replace(/[^\n]/g, "").substring(2) );
          block = next.shift();
        }
        else {
          break block_search;
        }
      } while ( true );
      return [ [ "code_block", ret.join("\n") ] ];
    },
    horizRule: function horizRule( block, next ) {
      // this needs to find any hr in the block to handle abutting blocks
      var m = block.match( /^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/ );
      if ( !m ) {
        return undefined;
      }
      var jsonml = [ [ "hr" ] ];
      // if there's a leading abutting block, process it
      if ( m[ 1 ] ) {
        jsonml.unshift.apply( jsonml, this.processBlock( m[ 1 ], [] ) );
      }
      // if there's a trailing abutting block, stick it into next
      if ( m[ 3 ] ) {
        next.unshift( mk_block( m[ 3 ] ) );
      }
      return jsonml;
    },
    // There are two types of lists. Tight and loose. Tight lists have no whitespace
    // between the items (and result in text just in the <li>) and loose lists,
    // which have an empty line between list items, resulting in (one or more)
    // paragraphs inside the <li>.
    //
    // There are all sorts weird edge cases about the original markdown.pl's
    // handling of lists:
    //
    // * Nested lists are supposed to be indented by four chars per level. But
    //   if they aren't, you can get a nested list by indenting by less than
    //   four so long as the indent doesn't match an indent of an existing list
    //   item in the 'nest stack'.
    //
    // * The type of the list (bullet or number) is controlled just by the
    //    first item at the indent. Subsequent changes are ignored unless they
    //    are for nested lists
    //
    lists: (function( ) {
      // Use a closure to hide a few variables.
      var any_list = "[*+-]|\\d+\\.",
          bullet_list = /[*+-]/,
          number_list = /\d+\./,
          // Capture leading indent as it matters for determining nested lists.
          is_list_re = new RegExp( "^( {0,3})(" + any_list + ")[ \t]+" ),
          indent_re = "(?: {0,3}\\t| {4})";
      // TODO: Cache this regexp for certain depths.
      // Create a regexp suitable for matching an li for a given stack depth
      function regex_for_depth( depth ) {
        return new RegExp(
          // m[1] = indent, m[2] = list_type
          "(?:^(" + indent_re + "{0," + depth + "} {0,3})(" + any_list + ")\\s+)|" +
          // m[3] = cont
          "(^" + indent_re + "{0," + (depth-1) + "}[ ]{0,4})"
        );
      }
      function expand_tab( input ) {
        return input.replace( / {0,3}\t/g, "    " );
      }
      // Add inline content `inline` to `li`. inline comes from processInline
      // so is an array of content
      function add(li, loose, inline, nl) {
        if ( loose ) {
          li.push( [ "para" ].concat(inline) );
          return;
        }
        // Hmmm, should this be any block level element or just paras?
        var add_to = li[li.length -1] instanceof Array && li[li.length - 1][0] == "para"
                   ? li[li.length -1]
                   : li;
        // If there is already some content in this list, add the new line in
        if ( nl && li.length > 1 ) inline.unshift(nl);
        for ( var i = 0; i < inline.length; i++ ) {
          var what = inline[i],
              is_str = typeof what == "string";
          if ( is_str && add_to.length > 1 && typeof add_to[add_to.length-1] == "string" ) {
            add_to[ add_to.length-1 ] += what;
          }
          else {
            add_to.push( what );
          }
        }
      }
      // contained means have an indent greater than the current one. On
      // *every* line in the block
      function get_contained_blocks( depth, blocks ) {
        var re = new RegExp( "^(" + indent_re + "{" + depth + "}.*?\\n?)*$" ),
            replace = new RegExp("^" + indent_re + "{" + depth + "}", "gm"),
            ret = [];
        while ( blocks.length > 0 ) {
          if ( re.exec( blocks[0] ) ) {
            var b = blocks.shift(),
                // Now remove that indent
                x = b.replace( replace, "");
            ret.push( mk_block( x, b.trailing, b.lineNumber ) );
          }
          else {
            break;
          }
        }
        return ret;
      }
      // passed to stack.forEach to turn list items up the stack into paras
      function paragraphify(s, i, stack) {
        var list = s.list;
        var last_li = list[list.length-1];
        if ( last_li[1] instanceof Array && last_li[1][0] == "para" ) {
          return;
        }
        if ( i + 1 == stack.length ) {
          // Last stack frame
          // Keep the same array, but replace the contents
          last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ) );
        }
        else {
          var sublist = last_li.pop();
          last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ), sublist );
        }
      }
      // The matcher function
      return function( block, next ) {
        var m = block.match( is_list_re );
        if ( !m ) return undefined;
        function make_list( m ) {
          var list = bullet_list.exec( m[2] )
                   ? ["bulletlist"]
                   : ["numberlist"];
          stack.push( { list: list, indent: m[1] } );
          return list;
        }
        var stack = [], // Stack of lists for nesting.
            list = make_list( m ),
            last_li,
            loose = false,
            ret = [ stack[0].list ],
            i;
        // Loop to search over block looking for inner block elements and loose lists
        loose_search:
        while ( true ) {
          // Split into lines preserving new lines at end of line
          var lines = block.split( /(?=\n)/ );
          // We have to grab all lines for a li and call processInline on them
          // once as there are some inline things that can span lines.
          var li_accumulate = "";
          // Loop over the lines in this block looking for tight lists.
          tight_search:
          for ( var line_no = 0; line_no < lines.length; line_no++ ) {
            var nl = "",
                l = lines[line_no].replace(/^\n/, function(n) { nl = n; return ""; });
            // TODO: really should cache this
            var line_re = regex_for_depth( stack.length );
            m = l.match( line_re );
            //print( "line:", uneval(l), "\nline match:", uneval(m) );
            // We have a list item
            if ( m[1] !== undefined ) {
              // Process the previous list item, if any
              if ( li_accumulate.length ) {
                add( last_li, loose, this.processInline( li_accumulate ), nl );
                // Loose mode will have been dealt with. Reset it
                loose = false;
                li_accumulate = "";
              }
              m[1] = expand_tab( m[1] );
              var wanted_depth = Math.floor(m[1].length/4)+1;
              //print( "want:", wanted_depth, "stack:", stack.length);
              if ( wanted_depth > stack.length ) {
                // Deep enough for a nested list outright
                //print ( "new nested list" );
                list = make_list( m );
                last_li.push( list );
                last_li = list[1] = [ "listitem" ];
              }
              else {
                // We aren't deep enough to be strictly a new level. This is
                // where Md.pl goes nuts. If the indent matches a level in the
                // stack, put it there, else put it one deeper then the
                // wanted_depth deserves.
                var found = false;
                for ( i = 0; i < stack.length; i++ ) {
                  if ( stack[ i ].indent != m[1] ) continue;
                  list = stack[ i ].list;
                  stack.splice( i+1, stack.length - (i+1) );
                  found = true;
                  break;
                }
                if (!found) {
                  //print("not found. l:", uneval(l));
                  wanted_depth++;
                  if ( wanted_depth <= stack.length ) {
                    stack.splice(wanted_depth, stack.length - wanted_depth);
                    //print("Desired depth now", wanted_depth, "stack:", stack.length);
                    list = stack[wanted_depth-1].list;
                    //print("list:", uneval(list) );
                  }
                  else {
                    //print ("made new stack for messy indent");
                    list = make_list(m);
                    last_li.push(list);
                  }
                }
                //print( uneval(list), "last", list === stack[stack.length-1].list );
                last_li = [ "listitem" ];
                list.push(last_li);
              } // end depth of shenegains
              nl = "";
            }
            // Add content
            if ( l.length > m[0].length ) {
              li_accumulate += nl + l.substr( m[0].length );
            }
          } // tight_search
          if ( li_accumulate.length ) {
            add( last_li, loose, this.processInline( li_accumulate ), nl );
            // Loose mode will have been dealt with. Reset it
            loose = false;
            li_accumulate = "";
          }
          // Look at the next block - we might have a loose list. Or an extra
          // paragraph for the current li
          var contained = get_contained_blocks( stack.length, next );
          // Deal with code blocks or properly nested lists
          if ( contained.length > 0 ) {
            // Make sure all listitems up the stack are paragraphs
            forEach( stack, paragraphify, this);
            last_li.push.apply( last_li, this.toTree( contained, [] ) );
          }
          var next_block = next[0] && next[0].valueOf() || "";
          if ( next_block.match(is_list_re) || next_block.match( /^ / ) ) {
            block = next.shift();
            // Check for an HR following a list: features/lists/hr_abutting
            var hr = this.dialect.block.horizRule( block, next );
            if ( hr ) {
              ret.push.apply(ret, hr);
              break;
            }
            // Make sure all listitems up the stack are paragraphs
            forEach( stack, paragraphify, this);
            loose = true;
            continue loose_search;
          }
          break;
        } // loose_search
        return ret;
      };
    })(),
    blockquote: function blockquote( block, next ) {
      if ( !block.match( /^>/m ) )
        return undefined;
      var jsonml = [];
      // separate out the leading abutting block, if any. I.e. in this case:
      //
      //  a
      //  > b
      //
      if ( block[ 0 ] != ">" ) {
        var lines = block.split( /\n/ ),
            prev = [],
            line_no = block.lineNumber;
        // keep shifting lines until you find a crotchet
        while ( lines.length && lines[ 0 ][ 0 ] != ">" ) {
            prev.push( lines.shift() );
            line_no++;
        }
        var abutting = mk_block( prev.join( "\n" ), "\n", block.lineNumber );
        jsonml.push.apply( jsonml, this.processBlock( abutting, [] ) );
        // reassemble new block of just block quotes!
        block = mk_block( lines.join( "\n" ), block.trailing, line_no );
      }
      // if the next block is also a blockquote merge it in
      while ( next.length && next[ 0 ][ 0 ] == ">" ) {
        var b = next.shift();
        block = mk_block( block + block.trailing + b, b.trailing, block.lineNumber );
      }
      // Strip off the leading "> " and re-process as a block.
      var input = block.replace( /^> ?/gm, "" ),
          old_tree = this.tree,
          processedBlock = this.toTree( input, [ "blockquote" ] ),
          attr = extract_attr( processedBlock );
      // If any link references were found get rid of them
      if ( attr && attr.references ) {
        delete attr.references;
        // And then remove the attribute object if it's empty
        if ( isEmpty( attr ) ) {
          processedBlock.splice( 1, 1 );
        }
      }
      jsonml.push( processedBlock );
      return jsonml;
    },
    referenceDefn: function referenceDefn( block, next) {
      var re = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
      // interesting matches are [ , ref_id, url, , title, title ]
      if ( !block.match(re) )
        return undefined;
      // make an attribute node if it doesn't exist
      if ( !extract_attr( this.tree ) ) {
        this.tree.splice( 1, 0, {} );
      }
      var attrs = extract_attr( this.tree );
      // make a references hash if it doesn't exist
      if ( attrs.references === undefined ) {
        attrs.references = {};
      }
      var b = this.loop_re_over_block(re, block, function( m ) {
        if ( m[2] && m[2][0] == "<" && m[2][m[2].length-1] == ">" )
          m[2] = m[2].substring( 1, m[2].length - 1 );
        var ref = attrs.references[ m[1].toLowerCase() ] = {
          href: m[2]
        };
        if ( m[4] !== undefined )
          ref.title = m[4];
        else if ( m[5] !== undefined )
          ref.title = m[5];
      } );
      if ( b.length )
        next.unshift( mk_block( b, block.trailing ) );
      return [];
    },
    para: function para( block, next ) {
      // everything's a para!
      return [ ["para"].concat( this.processInline( block ) ) ];
    }
  }
};
Markdown.dialects.Gruber.inline = {
    __oneElement__: function oneElement( text, patterns_or_re, previous_nodes ) {
      var m,
          res,
          lastIndex = 0;
      patterns_or_re = patterns_or_re || this.dialect.inline.__patterns__;
      var re = new RegExp( "([\\s\\S]*?)(" + (patterns_or_re.source || patterns_or_re) + ")" );
      m = re.exec( text );
      if (!m) {
        // Just boring text
        return [ text.length, text ];
      }
      else if ( m[1] ) {
        // Some un-interesting text matched. Return that first
        return [ m[1].length, m[1] ];
      }
      var res;
      if ( m[2] in this.dialect.inline ) {
        res = this.dialect.inline[ m[2] ].call(
                  this,
                  text.substr( m.index ), m, previous_nodes || [] );
      }
      // Default for now to make dev easier. just slurp special and output it.
      res = res || [ m[2].length, m[2] ];
      return res;
    },
    __call__: function inline( text, patterns ) {
      var out = [],
          res;
      function add(x) {
        //D:self.debug("  adding output", uneval(x));
        if ( typeof x == "string" && typeof out[out.length-1] == "string" )
          out[ out.length-1 ] += x;
        else
          out.push(x);
      }
      while ( text.length > 0 ) {
        res = this.dialect.inline.__oneElement__.call(this, text, patterns, out );
        text = text.substr( res.shift() );
        forEach(res, add )
      }
      return out;
    },
    // These characters are intersting elsewhere, so have rules for them so that
    // chunks of plain text blocks don't include them
    "]": function () {},
    "}": function () {},
    __escape__ : /^\\[\\`\*_{}\[\]()#\+.!\-]/,
    "\\": function escaped( text ) {
      // [ length of input processed, node/children to add... ]
      // Only esacape: \ ` * _ { } [ ] ( ) # * + - . !
      if ( this.dialect.inline.__escape__.exec( text ) )
        return [ 2, text.charAt( 1 ) ];
      else
        // Not an esacpe
        return [ 1, "\\" ];
    },
    "![": function image( text ) {
      // Unlike images, alt text is plain text only. no other elements are
      // allowed in there
      // ![Alt text](/path/to/img.jpg "Optional title")
      //      1          2            3       4         <--- captures
      var m = text.match( /^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/ );
      if ( m ) {
        if ( m[2] && m[2][0] == "<" && m[2][m[2].length-1] == ">" )
          m[2] = m[2].substring( 1, m[2].length - 1 );
        m[2] = this.dialect.inline.__call__.call( this, m[2], /\\/ )[0];
        var attrs = { alt: m[1], href: m[2] || "" };
        if ( m[4] !== undefined)
          attrs.title = m[4];
        return [ m[0].length, [ "img", attrs ] ];
      }
      // ![Alt text][id]
      m = text.match( /^!\[(.*?)\][ \t]*\[(.*?)\]/ );
      if ( m ) {
        // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion
        return [ m[0].length, [ "img_ref", { alt: m[1], ref: m[2].toLowerCase(), original: m[0] } ] ];
      }
      // Just consume the '!['
      return [ 2, "![" ];
    },
    "[": function link( text ) {
      var orig = String(text);
      // Inline content is possible inside `link text`
      var res = Markdown.DialectHelpers.inline_until_char.call( this, text.substr(1), "]" );
      // No closing ']' found. Just consume the [
      if ( !res ) return [ 1, "[" ];
      var consumed = 1 + res[ 0 ],
          children = res[ 1 ],
          link,
          attrs;
      // At this point the first [...] has been parsed. See what follows to find
      // out which kind of link we are (reference or direct url)
      text = text.substr( consumed );
      // [link text](/path/to/img.jpg "Optional title")
      //                 1            2       3         <--- captures
      // This will capture up to the last paren in the block. We then pull
      // back based on if there a matching ones in the url
      //    ([here](/url/(test))
      // The parens have to be balanced
      var m = text.match( /^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/ );
      if ( m ) {
        var url = m[1];
        consumed += m[0].length;
        if ( url && url[0] == "<" && url[url.length-1] == ">" )
          url = url.substring( 1, url.length - 1 );
        // If there is a title we don't have to worry about parens in the url
        if ( !m[3] ) {
          var open_parens = 1; // One open that isn't in the capture
          for ( var len = 0; len < url.length; len++ ) {
            switch ( url[len] ) {
            case "(":
              open_parens++;
              break;
            case ")":
              if ( --open_parens == 0) {
                consumed -= url.length - len;
                url = url.substring(0, len);
              }
              break;
            }
          }
        }
        // Process escapes only
        url = this.dialect.inline.__call__.call( this, url, /\\/ )[0];
        attrs = { href: url || "" };
        if ( m[3] !== undefined)
          attrs.title = m[3];
        link = [ "link", attrs ].concat( children );
        return [ consumed, link ];
      }
      // [Alt text][id]
      // [Alt text] [id]
      m = text.match( /^\s*\[(.*?)\]/ );
      if ( m ) {
        consumed += m[ 0 ].length;
        // [links][] uses links as its reference
        attrs = { ref: ( m[ 1 ] || String(children) ).toLowerCase(),  original: orig.substr( 0, consumed ) };
        link = [ "link_ref", attrs ].concat( children );
        // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion.
        // Store the original so that conversion can revert if the ref isn't found.
        return [ consumed, link ];
      }
      // [id]
      // Only if id is plain (no formatting.)
      if ( children.length == 1 && typeof children[0] == "string" ) {
        attrs = { ref: children[0].toLowerCase(),  original: orig.substr( 0, consumed ) };
        link = [ "link_ref", attrs, children[0] ];
        return [ consumed, link ];
      }
      // Just consume the "["
      return [ 1, "[" ];
    },
    "<": function autoLink( text ) {
      var m;
      if ( ( m = text.match( /^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/ ) ) != null ) {
        if ( m[3] ) {
          return [ m[0].length, [ "link", { href: "mailto:" + m[3] }, m[3] ] ];
        }
        else if ( m[2] == "mailto" ) {
          return [ m[0].length, [ "link", { href: m[1] }, m[1].substr("mailto:".length ) ] ];
        }
        else
          return [ m[0].length, [ "link", { href: m[1] }, m[1] ] ];
      }
      return [ 1, "<" ];
    },
    "`": function inlineCode( text ) {
      // Inline code block. as many backticks as you like to start it
      // Always skip over the opening ticks.
      var m = text.match( /(`+)(([\s\S]*?)\1)/ );
      if ( m && m[2] )
        return [ m[1].length + m[2].length, [ "inlinecode", m[3] ] ];
      else {
        // TODO: No matching end code found - warn!
        return [ 1, "`" ];
      }
    },
    "  \n": function lineBreak( text ) {
      return [ 3, [ "linebreak" ] ];
    }
};
// Meta Helper/generator method for em and strong handling
function strong_em( tag, md ) {
  var state_slot = tag + "_state",
      other_slot = tag == "strong" ? "em_state" : "strong_state";
  function CloseTag(len) {
    this.len_after = len;
    this.name = "close_" + md;
  }
  return function ( text, orig_match ) {
    if ( this[state_slot][0] == md ) {
      // Most recent em is of this type
      //D:this.debug("closing", md);
      this[state_slot].shift();
      // "Consume" everything to go back to the recrusion in the else-block below
      return[ text.length, new CloseTag(text.length-md.length) ];
    }
    else {
      // Store a clone of the em/strong states
      var other = this[other_slot].slice(),
          state = this[state_slot].slice();
      this[state_slot].unshift(md);
      //D:this.debug_indent += "  ";
      // Recurse
      var res = this.processInline( text.substr( md.length ) );
      //D:this.debug_indent = this.debug_indent.substr(2);
      var last = res[res.length - 1];
      //D:this.debug("processInline from", tag + ": ", uneval( res ) );
      var check = this[state_slot].shift();
      if ( last instanceof CloseTag ) {
        res.pop();
        // We matched! Huzzah.
        var consumed = text.length - last.len_after;
        return [ consumed, [ tag ].concat(res) ];
      }
      else {
        // Restore the state of the other kind. We might have mistakenly closed it.
        this[other_slot] = other;
        this[state_slot] = state;
        // We can't reuse the processed result as it could have wrong parsing contexts in it.
        return [ md.length, md ];
      }
    }
  }; // End returned function
}
Markdown.dialects.Gruber.inline["**"] = strong_em("strong", "**");
Markdown.dialects.Gruber.inline["__"] = strong_em("strong", "__");
Markdown.dialects.Gruber.inline["*"]  = strong_em("em", "*");
Markdown.dialects.Gruber.inline["_"]  = strong_em("em", "_");
// Build default order from insertion order.
Markdown.buildBlockOrder = function(d) {
  var ord = [];
  for ( var i in d ) {
    if ( i == "__order__" || i == "__call__" ) continue;
    ord.push( i );
  }
  d.__order__ = ord;
};
// Build patterns for inline matcher
Markdown.buildInlinePatterns = function(d) {
  var patterns = [];
  for ( var i in d ) {
    // __foo__ is reserved and not a pattern
    if ( i.match( /^__.*__$/) ) continue;
    var l = i.replace( /([\\.*+?|()\[\]{}])/g, "\\$1" )
             .replace( /\n/, "\\n" );
    patterns.push( i.length == 1 ? l : "(?:" + l + ")" );
  }
  patterns = patterns.join("|");
  d.__patterns__ = patterns;
  //print("patterns:", uneval( patterns ) );
  var fn = d.__call__;
  d.__call__ = function(text, pattern) {
    if ( pattern != undefined ) {
      return fn.call(this, text, pattern);
    }
    else
    {
      return fn.call(this, text, patterns);
    }
  };
};
Markdown.DialectHelpers = {};
Markdown.DialectHelpers.inline_until_char = function( text, want ) {
  var consumed = 0,
      nodes = [];
  while ( true ) {
    if ( text.charAt( consumed ) == want ) {
      // Found the character we were looking for
      consumed++;
      return [ consumed, nodes ];
    }
    if ( consumed >= text.length ) {
      // No closing char found. Abort.
      return null;
    }
    var res = this.dialect.inline.__oneElement__.call(this, text.substr( consumed ) );
    consumed += res[ 0 ];
    // Add any returned nodes.
    nodes.push.apply( nodes, res.slice( 1 ) );
  }
}
// Helper function to make sub-classing a dialect easier
Markdown.subclassDialect = function( d ) {
  function Block() {}
  Block.prototype = d.block;
  function Inline() {}
  Inline.prototype = d.inline;
  return { block: new Block(), inline: new Inline() };
};
Markdown.buildBlockOrder ( Markdown.dialects.Gruber.block );
Markdown.buildInlinePatterns( Markdown.dialects.Gruber.inline );
Markdown.dialects.Maruku = Markdown.subclassDialect( Markdown.dialects.Gruber );
Markdown.dialects.Maruku.processMetaHash = function processMetaHash( meta_string ) {
  var meta = split_meta_hash( meta_string ),
      attr = {};
  for ( var i = 0; i < meta.length; ++i ) {
    // id: #foo
    if ( /^#/.test( meta[ i ] ) ) {
      attr.id = meta[ i ].substring( 1 );
    }
    // class: .foo
    else if ( /^\./.test( meta[ i ] ) ) {
      // if class already exists, append the new one
      if ( attr["class"] ) {
        attr["class"] = attr["class"] + meta[ i ].replace( /./, " " );
      }
      else {
        attr["class"] = meta[ i ].substring( 1 );
      }
    }
    // attribute: foo=bar
    else if ( /\=/.test( meta[ i ] ) ) {
      var s = meta[ i ].split( /\=/ );
      attr[ s[ 0 ] ] = s[ 1 ];
    }
  }
  return attr;
}
function split_meta_hash( meta_string ) {
  var meta = meta_string.split( "" ),
      parts = [ "" ],
      in_quotes = false;
  while ( meta.length ) {
    var letter = meta.shift();
    switch ( letter ) {
      case " " :
        // if we're in a quoted section, keep it
        if ( in_quotes ) {
          parts[ parts.length - 1 ] += letter;
        }
        // otherwise make a new part
        else {
          parts.push( "" );
        }
        break;
      case "'" :
      case '"' :
        // reverse the quotes and move straight on
        in_quotes = !in_quotes;
        break;
      case "\\" :
        // shift off the next letter to be used straight away.
        // it was escaped so we'll keep it whatever it is
        letter = meta.shift();
      default :
        parts[ parts.length - 1 ] += letter;
        break;
    }
  }
  return parts;
}
Markdown.dialects.Maruku.block.document_meta = function document_meta( block, next ) {
  // we're only interested in the first block
  if ( block.lineNumber > 1 ) return undefined;
  // document_meta blocks consist of one or more lines of `Key: Value\n`
  if ( ! block.match( /^(?:\w+:.*\n)*\w+:.*$/ ) ) return undefined;
  // make an attribute node if it doesn't exist
  if ( !extract_attr( this.tree ) ) {
    this.tree.splice( 1, 0, {} );
  }
  var pairs = block.split( /\n/ );
  for ( p in pairs ) {
    var m = pairs[ p ].match( /(\w+):\s*(.*)$/ ),
        key = m[ 1 ].toLowerCase(),
        value = m[ 2 ];
    this.tree[ 1 ][ key ] = value;
  }
  // document_meta produces no content!
  return [];
};
Markdown.dialects.Maruku.block.block_meta = function block_meta( block, next ) {
  // check if the last line of the block is an meta hash
  var m = block.match( /(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/ );
  if ( !m ) return undefined;
  // process the meta hash
  var attr = this.dialect.processMetaHash( m[ 2 ] );
  var hash;
  // if we matched ^ then we need to apply meta to the previous block
  if ( m[ 1 ] === "" ) {
    var node = this.tree[ this.tree.length - 1 ];
    hash = extract_attr( node );
    // if the node is a string (rather than JsonML), bail
    if ( typeof node === "string" ) return undefined;
    // create the attribute hash if it doesn't exist
    if ( !hash ) {
      hash = {};
      node.splice( 1, 0, hash );
    }
    // add the attributes in
    for ( a in attr ) {
      hash[ a ] = attr[ a ];
    }
    // return nothing so the meta hash is removed
    return [];
  }
  // pull the meta hash off the block and process what's left
  var b = block.replace( /\n.*$/, "" ),
      result = this.processBlock( b, [] );
  // get or make the attributes hash
  hash = extract_attr( result[ 0 ] );
  if ( !hash ) {
    hash = {};
    result[ 0 ].splice( 1, 0, hash );
  }
  // attach the attributes to the block
  for ( a in attr ) {
    hash[ a ] = attr[ a ];
  }
  return result;
};
Markdown.dialects.Maruku.block.definition_list = function definition_list( block, next ) {
  // one or more terms followed by one or more definitions, in a single block
  var tight = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
      list = [ "dl" ],
      i, m;
  // see if we're dealing with a tight or loose block
  if ( ( m = block.match( tight ) ) ) {
    // pull subsequent tight DL blocks out of `next`
    var blocks = [ block ];
    while ( next.length && tight.exec( next[ 0 ] ) ) {
      blocks.push( next.shift() );
    }
    for ( var b = 0; b < blocks.length; ++b ) {
      var m = blocks[ b ].match( tight ),
          terms = m[ 1 ].replace( /\n$/, "" ).split( /\n/ ),
          defns = m[ 2 ].split( /\n:\s+/ );
      // print( uneval( m ) );
      for ( i = 0; i < terms.length; ++i ) {
        list.push( [ "dt", terms[ i ] ] );
      }
      for ( i = 0; i < defns.length; ++i ) {
        // run inline processing over the definition
        list.push( [ "dd" ].concat( this.processInline( defns[ i ].replace( /(\n)\s+/, "$1" ) ) ) );
      }
    }
  }
  else {
    return undefined;
  }
  return [ list ];
};
// splits on unescaped instances of @ch. If @ch is not a character the result
// can be unpredictable
Markdown.dialects.Maruku.block.table = function table (block, next) {
    var _split_on_unescaped = function(s, ch) {
        ch = ch || '\\s';
        if (ch.match(/^[\\|\[\]{}?*.+^$]$/)) { ch = '\\' + ch; }
        var res = [ ],
            r = new RegExp('^((?:\\\\.|[^\\\\' + ch + '])*)' + ch + '(.*)'),
            m;
        while(m = s.match(r)) {
            res.push(m[1]);
            s = m[2];
        }
        res.push(s);
        return res;
    }
    var leading_pipe = /^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,
        // find at least an unescaped pipe in each line
        no_leading_pipe = /^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/,
        i, m;
    if (m = block.match(leading_pipe)) {
        // remove leading pipes in contents
        // (header and horizontal rule already have the leading pipe left out)
        m[3] = m[3].replace(/^\s*\|/gm, '');
    } else if (! ( m = block.match(no_leading_pipe))) {
        return undefined;
    }
    var table = [ "table", [ "thead", [ "tr" ] ], [ "tbody" ] ];
    // remove trailing pipes, then split on pipes
    // (no escaped pipes are allowed in horizontal rule)
    m[2] = m[2].replace(/\|\s*$/, '').split('|');
    // process alignment
    var html_attrs = [ ];
    forEach (m[2], function (s) {
        if (s.match(/^\s*-+:\s*$/))       html_attrs.push({align: "right"});
        else if (s.match(/^\s*:-+\s*$/))  html_attrs.push({align: "left"});
        else if (s.match(/^\s*:-+:\s*$/)) html_attrs.push({align: "center"});
        else                              html_attrs.push({});
    });
    // now for the header, avoid escaped pipes
    m[1] = _split_on_unescaped(m[1].replace(/\|\s*$/, ''), '|');
    for (i = 0; i < m[1].length; i++) {
        table[1][1].push(['th', html_attrs[i] || {}].concat(
            this.processInline(m[1][i].trim())));
    }
    // now for body contents
    forEach (m[3].replace(/\|\s*$/mg, '').split('\n'), function (row) {
        var html_row = ['tr'];
        row = _split_on_unescaped(row, '|');
        for (i = 0; i < row.length; i++) {
            html_row.push(['td', html_attrs[i] || {}].concat(this.processInline(row[i].trim())));
        }
        table[2].push(html_row);
    }, this);
    return [table];
}
Markdown.dialects.Maruku.inline[ "{:" ] = function inline_meta( text, matches, out ) {
  if ( !out.length ) {
    return [ 2, "{:" ];
  }
  // get the preceeding element
  var before = out[ out.length - 1 ];
  if ( typeof before === "string" ) {
    return [ 2, "{:" ];
  }
  // match a meta hash
  var m = text.match( /^\{:\s*((?:\\\}|[^\}])*)\s*\}/ );
  // no match, false alarm
  if ( !m ) {
    return [ 2, "{:" ];
  }
  // attach the attributes to the preceeding element
  var meta = this.dialect.processMetaHash( m[ 1 ] ),
      attr = extract_attr( before );
  if ( !attr ) {
    attr = {};
    before.splice( 1, 0, attr );
  }
  for ( var k in meta ) {
    attr[ k ] = meta[ k ];
  }
  // cut out the string and replace it with nothing
  return [ m[ 0 ].length, "" ];
};
Markdown.dialects.Maruku.inline.__escape__ = /^\\[\\`\*_{}\[\]()#\+.!\-|:]/;
Markdown.buildBlockOrder ( Markdown.dialects.Maruku.block );
Markdown.buildInlinePatterns( Markdown.dialects.Maruku.inline );
var isArray = Array.isArray || function(obj) {
  return Object.prototype.toString.call(obj) == "[object Array]";
};
var forEach;
// Don't mess with Array.prototype. Its not friendly
if ( Array.prototype.forEach ) {
  forEach = function( arr, cb, thisp ) {
    return arr.forEach( cb, thisp );
  };
}
else {
  forEach = function(arr, cb, thisp) {
    for (var i = 0; i < arr.length; i++) {
      cb.call(thisp || arr, arr[i], i, arr);
    }
  }
}
var isEmpty = function( obj ) {
  for ( var key in obj ) {
    if ( hasOwnProperty.call( obj, key ) ) {
      return false;
    }
  }
  return true;
}
function extract_attr( jsonml ) {
  return isArray(jsonml)
      && jsonml.length > 1
      && typeof jsonml[ 1 ] === "object"
      && !( isArray(jsonml[ 1 ]) )
      ? jsonml[ 1 ]
      : undefined;
}
/**
 *  renderJsonML( jsonml[, options] ) -> String
 *  - jsonml (Array): JsonML array to render to XML
 *  - options (Object): options
 *
 *  Converts the given JsonML into well-formed XML.
 *
 *  The options currently understood are:
 *
 *  - root (Boolean): wether or not the root node should be included in the
 *    output, or just its children. The default `false` is to not include the
 *    root itself.
 */
expose.renderJsonML = function( jsonml, options ) {
  options = options || {};
  // include the root element in the rendered output?
  options.root = options.root || false;
  var content = [];
  if ( options.root ) {
    content.push( render_tree( jsonml ) );
  }
  else {
    jsonml.shift(); // get rid of the tag
    if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) ) {
      jsonml.shift(); // get rid of the attributes
    }
    while ( jsonml.length ) {
      content.push( render_tree( jsonml.shift() ) );
    }
  }
  return content.join( "\n\n" );
};
function escapeHTML( text ) {
  return text.replace( /&/g, "&amp;" )
             .replace( /</g, "&lt;" )
             .replace( />/g, "&gt;" )
             .replace( /"/g, "&quot;" )
             .replace( /'/g, "&#39;" );
}
function render_tree( jsonml ) {
  // basic case
  if ( typeof jsonml === "string" ) {
    return escapeHTML( jsonml );
  }
  var tag = jsonml.shift(),
      attributes = {},
      content = [];
  if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) ) {
    attributes = jsonml.shift();
  }
  while ( jsonml.length ) {
    content.push( render_tree( jsonml.shift() ) );
  }
  var tag_attrs = "";
  for ( var a in attributes ) {
    tag_attrs += " " + a + '="' + escapeHTML( attributes[ a ] ) + '"';
  }
  // be careful about adding whitespace here for inline elements
  if ( tag == "img" || tag == "br" || tag == "hr" ) {
    return "<"+ tag + tag_attrs + "/>";
  }
  else {
    return "<"+ tag + tag_attrs + ">" + content.join( "" ) + "</" + tag + ">";
  }
}
function convert_tree_to_html( tree, references, options ) {
  var i;
  options = options || {};
  // shallow clone
  var jsonml = tree.slice( 0 );
  if ( typeof options.preprocessTreeNode === "function" ) {
      jsonml = options.preprocessTreeNode(jsonml, references);
  }
  // Clone attributes if they exist
  var attrs = extract_attr( jsonml );
  if ( attrs ) {
    jsonml[ 1 ] = {};
    for ( i in attrs ) {
      jsonml[ 1 ][ i ] = attrs[ i ];
    }
    attrs = jsonml[ 1 ];
  }
  // basic case
  if ( typeof jsonml === "string" ) {
    return jsonml;
  }
  // convert this node
  switch ( jsonml[ 0 ] ) {
    case "header":
      jsonml[ 0 ] = "h" + jsonml[ 1 ].level;
      delete jsonml[ 1 ].level;
      break;
    case "bulletlist":
      jsonml[ 0 ] = "ul";
      break;
    case "numberlist":
      jsonml[ 0 ] = "ol";
      break;
    case "listitem":
      jsonml[ 0 ] = "li";
      break;
    case "para":
      jsonml[ 0 ] = "p";
      break;
    case "markdown":
      jsonml[ 0 ] = "html";
      if ( attrs ) delete attrs.references;
      break;
    case "code_block":
      jsonml[ 0 ] = "pre";
      i = attrs ? 2 : 1;
      var code = [ "code" ];
      code.push.apply( code, jsonml.splice( i, jsonml.length - i ) );
      jsonml[ i ] = code;
      break;
    case "inlinecode":
      jsonml[ 0 ] = "code";
      break;
    case "img":
      jsonml[ 1 ].src = jsonml[ 1 ].href;
      delete jsonml[ 1 ].href;
      break;
    case "linebreak":
      jsonml[ 0 ] = "br";
    break;
    case "link":
      jsonml[ 0 ] = "a";
      break;
    case "link_ref":
      jsonml[ 0 ] = "a";
      // grab this ref and clean up the attribute node
      var ref = references[ attrs.ref ];
      // if the reference exists, make the link
      if ( ref ) {
        delete attrs.ref;
        // add in the href and title, if present
        attrs.href = ref.href;
        if ( ref.title ) {
          attrs.title = ref.title;
        }
        // get rid of the unneeded original text
        delete attrs.original;
      }
      // the reference doesn't exist, so revert to plain text
      else {
        return attrs.original;
      }
      break;
    case "img_ref":
      jsonml[ 0 ] = "img";
      // grab this ref and clean up the attribute node
      var ref = references[ attrs.ref ];
      // if the reference exists, make the link
      if ( ref ) {
        delete attrs.ref;
        // add in the href and title, if present
        attrs.src = ref.href;
        if ( ref.title ) {
          attrs.title = ref.title;
        }
        // get rid of the unneeded original text
        delete attrs.original;
      }
      // the reference doesn't exist, so revert to plain text
      else {
        return attrs.original;
      }
      break;
  }
  // convert all the children
  i = 1;
  // deal with the attribute node, if it exists
  if ( attrs ) {
    // if there are keys, skip over it
    for ( var key in jsonml[ 1 ] ) {
        i = 2;
        break;
    }
    // if there aren't, remove it
    if ( i === 1 ) {
      jsonml.splice( i, 1 );
    }
  }
  for ( ; i < jsonml.length; ++i ) {
    jsonml[ i ] = convert_tree_to_html( jsonml[ i ], references, options );
  }
  return jsonml;
}
// merges adjacent text nodes into a single node
function merge_text_nodes( jsonml ) {
  // skip the tag name and attribute hash
  var i = extract_attr( jsonml ) ? 2 : 1;
  while ( i < jsonml.length ) {
    // if it's a string check the next item too
    if ( typeof jsonml[ i ] === "string" ) {
      if ( i + 1 < jsonml.length && typeof jsonml[ i + 1 ] === "string" ) {
        // merge the second string into the first and remove it
        jsonml[ i ] += jsonml.splice( i + 1, 1 )[ 0 ];
      }
      else {
        ++i;
      }
    }
    // if it's not a string recurse
    else {
      merge_text_nodes( jsonml[ i ] );
      ++i;
    }
  }
}
} )( (function() {
  if ( typeof exports === "undefined" ) {
    window.markdown = {};
    return window.markdown;
  }
  else {
    return exports;
  }
} )() );
/*! modulejs 0.2 - //larsjung.de/modulejs - MIT License */
(function (global, name) {
	'use strict';
	var objProto = Object.prototype,
		arrayForEach = Array.prototype.forEach,
		isType = function (arg, type) {
			return objProto.toString.call(arg) === '[object ' + type + ']';
		},
		isString = function (arg) {
			return isType(arg, 'String');
		},
		isFunction = function (arg) {
			return isType(arg, 'Function');
		},
		isArray = Array.isArray || function (arg) {
			return isType(arg, 'Array');
		},
		isObject = function (arg) {
			return arg === new Object(arg);
		},
		has = function (arg, id) {
			return objProto.hasOwnProperty.call(arg, id);
		},
		each = function (obj, iterator, context) {
			if (arrayForEach && obj.forEach === arrayForEach) {
				obj.forEach(iterator, context);
			} else if (obj.length === +obj.length) {
				for (var i = 0, l = obj.length; i < l; i += 1) {
					iterator.call(context, obj[i], i, obj);
				}
			} else {
				for (var key in obj) {
					if (has(obj, key)) {
						iterator.call(context, obj[key], key, obj);
					}
				}
			}
		},
		contains = function (array, item) {
			for (var i = 0, l = array.length; i < l; i += 1) {
				if (array[i] === item) {
					return true;
				}
			}
			return false;
		},
		uniq = function (array) {
			var elements = {},
				result = [];
			each(array, function (el) {
				if (!has(elements, el)) {
					result.push(el);
					elements[el] = 1;
				}
			});
			return result;
		},
		err = function (condition, code, message) {
			if (condition) {
				throw {
					code: code,
					msg: message,
					toString: function () {
						return name + ' error ' + code + ': ' + message;
					}
				};
			}
		},
		// Module definitions.
		definitions = {},
		// Module instances.
		instances = {},
		resolve = function (id, cold, stack) {
			err(!isString(id), 31, 'id must be a string "' + id + '"');
			if (!cold && has(instances, id)) {
				return instances[id];
			}
			var def = definitions[id];
			err(!def, 32, 'id not defined "' + id + '"');
			stack = (stack || []).slice(0);
			stack.push(id);
			var deps = [];
			each(def.deps, function (depId, idx) {
				err(contains(stack, depId), 33, 'cyclic dependencies: ' + stack + ' & ' + depId);
				if (cold) {
					deps = deps.concat(resolve(depId, cold, stack));
					deps.push(depId);
				} else {
					deps[idx] = resolve(depId, cold, stack);
				}
			});
			if (cold) {
				return uniq(deps);
			}
			var obj = def.fn.apply(global, deps);
			instances[id] = obj;
			return obj;
		},
		// Public methods
		// --------------
		// ### define
		// Defines a module for `id: String`, optional `deps: Array[String]`,
		// `arg: Object/function`.
		define = function (id, deps, arg) {
			// sort arguments
			if (arg === undefined) {
				arg = deps;
				deps = [];
			}
			// check arguments
			err(!isString(id), 11, 'id must be a string "' + id + '"');
			err(definitions[id], 12, 'id already defined "' + id + '"');
			err(!isArray(deps), 13, 'dependencies for "' + id + '" must be an array "' + deps + '"');
			err(!isObject(arg) && !isFunction(arg), 14, 'arg for "' + id + '" must be object or function "' + arg + '"');
			// accept definition
			definitions[id] = {
				id: id,
				deps: deps,
				fn: isFunction(arg) ? arg : function () { return arg; }
			};
		},
		// ### require
		// Returns an instance for `id`.
		require = function (id) {
			return resolve(id);
		},
		// ### state
		// Returns an object that holds infos about the current definitions and dependencies.
		state = function () {
			var res = {};
			each(definitions, function (def, id) {
				res[id] = {
					// direct dependencies
					deps: def.deps.slice(0),
					// transitive dependencies
					reqs: resolve(id, true),
					// already initiated/required
					init: has(instances, id)
				};
			});
			each(definitions, function (def, id) {
				var inv = [];
				each(definitions, function (def2, id2) {
					if (contains(res[id2].reqs, id)) {
						inv.push(id2);
					}
				});
				// all inverse dependencies
				res[id].reqd = inv;
			});
			return res;
		},
		// ### log
		// Returns a string that displays module dependencies.
		log = function (inv) {
			var out = '\n';
			each(state(), function (st, id) {
				var list = inv ? st.reqd : st.reqs;
				out += (st.init ? '* ' : '  ') + id + ' -> [ ' + list.join(', ') + ' ]\n';
			});
			return out;
		};
	// Register Public API
	// -------------------
	global[name] = {
		define: define,
		require: require,
		state: state,
		log: log
	};
	// Uncomment to run internal tests.
	/*
	if (global[name.toUpperCase()] === true) {
		global[name.toUpperCase()] = {
			isString: isString,
			isFunction: isFunction,
			isArray: isArray,
			isObject: isObject,
			has: has,
			each: each,
			contains: contains,
			uniq: uniq,
			err: err,
			definitions: definitions,
			instances: instances,
			resolve: resolve
		};
	} // */
}(this, 'modulejs'));
//! moment.js
//! version : 2.6.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function c(a,b){function c(){ib.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}var d=!0;return i(function(){return d&&(c(),d=!1),b.apply(this,arguments)},b)}function d(a,b){return function(c){return l(a.call(this,c),b)}}function e(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function f(){}function g(a){y(a),i(this,a)}function h(a){var b=r(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._bubble()}function i(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function j(a){var b,c={};for(b in a)a.hasOwnProperty(b)&&wb.hasOwnProperty(b)&&(c[b]=a[b]);return c}function k(a){return 0>a?Math.ceil(a):Math.floor(a)}function l(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function m(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&db(a,"Date",cb(a,"Date")+f*c),g&&bb(a,cb(a,"Month")+g*c),d&&ib.updateOffset(a,f||g)}function n(a){return"[object Array]"===Object.prototype.toString.call(a)}function o(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function p(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&t(a[d])!==t(b[d]))&&g++;return g+f}function q(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=Zb[a]||$b[b]||b}return a}function r(a){var b,c,d={};for(c in a)a.hasOwnProperty(c)&&(b=q(c),b&&(d[b]=a[c]));return d}function s(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}ib[b]=function(e,f){var g,h,i=ib.fn._lang[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=ib().utc().set(d,a);return i.call(ib.fn._lang,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function t(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function u(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function v(a,b,c){return $(ib([a,11,31+b-c]),b,c).week}function w(a){return x(a)?366:365}function x(a){return a%4===0&&a%100!==0||a%400===0}function y(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[pb]<0||a._a[pb]>11?pb:a._a[qb]<1||a._a[qb]>u(a._a[ob],a._a[pb])?qb:a._a[rb]<0||a._a[rb]>23?rb:a._a[sb]<0||a._a[sb]>59?sb:a._a[tb]<0||a._a[tb]>59?tb:a._a[ub]<0||a._a[ub]>999?ub:-1,a._pf._overflowDayOfYear&&(ob>b||b>qb)&&(b=qb),a._pf.overflow=b)}function z(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function A(a){return a?a.toLowerCase().replace("_","-"):a}function B(a,b){return b._isUTC?ib(a).zone(b._offset||0):ib(a).local()}function C(a,b){return b.abbr=a,vb[a]||(vb[a]=new f),vb[a].set(b),vb[a]}function D(a){delete vb[a]}function E(a){var b,c,d,e,f=0,g=function(a){if(!vb[a]&&xb)try{require("./lang/"+a)}catch(b){}return vb[a]};if(!a)return ib.fn._lang;if(!n(a)){if(c=g(a))return c;a=[a]}for(;f<a.length;){for(e=A(a[f]).split("-"),b=e.length,d=A(a[f+1]),d=d?d.split("-"):null;b>0;){if(c=g(e.slice(0,b).join("-")))return c;if(d&&d.length>=b&&p(e,d,!0)>=b-1)break;b--}f++}return ib.fn._lang}function F(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function G(a){var b,c,d=a.match(Bb);for(b=0,c=d.length;c>b;b++)d[b]=cc[d[b]]?cc[d[b]]:F(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function H(a,b){return a.isValid()?(b=I(b,a.lang()),_b[b]||(_b[b]=G(b)),_b[b](a)):a.lang().invalidDate()}function I(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Cb.lastIndex=0;d>=0&&Cb.test(a);)a=a.replace(Cb,c),Cb.lastIndex=0,d-=1;return a}function J(a,b){var c,d=b._strict;switch(a){case"Q":return Nb;case"DDDD":return Pb;case"YYYY":case"GGGG":case"gggg":return d?Qb:Fb;case"Y":case"G":case"g":return Sb;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?Rb:Gb;case"S":if(d)return Nb;case"SS":if(d)return Ob;case"SSS":if(d)return Pb;case"DDD":return Eb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Ib;case"a":case"A":return E(b._l)._meridiemParse;case"X":return Lb;case"Z":case"ZZ":return Jb;case"T":return Kb;case"SSSS":return Hb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?Ob:Db;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Db;case"Do":return Mb;default:return c=new RegExp(R(Q(a.replace("\\","")),"i"))}}function K(a){a=a||"";var b=a.match(Jb)||[],c=b[b.length-1]||[],d=(c+"").match(Xb)||["-",0,0],e=+(60*d[1])+t(d[2]);return"+"===d[0]?-e:e}function L(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[pb]=3*(t(b)-1));break;case"M":case"MM":null!=b&&(e[pb]=t(b)-1);break;case"MMM":case"MMMM":d=E(c._l).monthsParse(b),null!=d?e[pb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[qb]=t(b));break;case"Do":null!=b&&(e[qb]=t(parseInt(b,10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=t(b));break;case"YY":e[ob]=ib.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[ob]=t(b);break;case"a":case"A":c._isPm=E(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[rb]=t(b);break;case"m":case"mm":e[sb]=t(b);break;case"s":case"ss":e[tb]=t(b);break;case"S":case"SS":case"SSS":case"SSSS":e[ub]=t(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=K(b);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a=a.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=b)}}function M(a){var b,c,d,e,f,g,h,i,j,k,l=[];if(!a._d){for(d=O(a),a._w&&null==a._a[qb]&&null==a._a[pb]&&(f=function(b){var c=parseInt(b,10);return b?b.length<3?c>68?1900+c:2e3+c:c:null==a._a[ob]?ib().weekYear():a._a[ob]},g=a._w,null!=g.GG||null!=g.W||null!=g.E?h=_(f(g.GG),g.W||1,g.E,4,1):(i=E(a._l),j=null!=g.d?X(g.d,i):null!=g.e?parseInt(g.e,10)+i._week.dow:0,k=parseInt(g.w,10)||1,null!=g.d&&j<i._week.dow&&k++,h=_(f(g.gg),k,j,i._week.doy,i._week.dow)),a._a[ob]=h.year,a._dayOfYear=h.dayOfYear),a._dayOfYear&&(e=null==a._a[ob]?d[ob]:a._a[ob],a._dayOfYear>w(e)&&(a._pf._overflowDayOfYear=!0),c=W(e,0,a._dayOfYear),a._a[pb]=c.getUTCMonth(),a._a[qb]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=l[b]=d[b];for(;7>b;b++)a._a[b]=l[b]=null==a._a[b]?2===b?1:0:a._a[b];l[rb]+=t((a._tzm||0)/60),l[sb]+=t((a._tzm||0)%60),a._d=(a._useUTC?W:V).apply(null,l)}}function N(a){var b;a._d||(b=r(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],M(a))}function O(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function P(a){a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=E(a._l),h=""+a._i,i=h.length,j=0;for(d=I(a._f,g).match(Bb)||[],b=0;b<d.length;b++)e=d[b],c=(h.match(J(e,a))||[])[0],c&&(f=h.substr(0,h.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),h=h.slice(h.indexOf(c)+c.length),j+=c.length),cc[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),L(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=i-j,h.length>0&&a._pf.unusedInput.push(h),a._isPm&&a._a[rb]<12&&(a._a[rb]+=12),a._isPm===!1&&12===a._a[rb]&&(a._a[rb]=0),M(a),y(a)}function Q(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function R(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function S(a){var c,d,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,c=i({},a),c._pf=b(),c._f=a._f[f],P(c),z(c)&&(g+=c._pf.charsLeftOver,g+=10*c._pf.unusedTokens.length,c._pf.score=g,(null==e||e>g)&&(e=g,d=c));i(a,d||c)}function T(a){var b,c,d=a._i,e=Tb.exec(d);if(e){for(a._pf.iso=!0,b=0,c=Vb.length;c>b;b++)if(Vb[b][1].exec(d)){a._f=Vb[b][0]+(e[6]||" ");break}for(b=0,c=Wb.length;c>b;b++)if(Wb[b][1].exec(d)){a._f+=Wb[b][0];break}d.match(Jb)&&(a._f+="Z"),P(a)}else ib.createFromInputFallback(a)}function U(b){var c=b._i,d=yb.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?T(b):n(c)?(b._a=c.slice(0),M(b)):o(c)?b._d=new Date(+c):"object"==typeof c?N(b):"number"==typeof c?b._d=new Date(c):ib.createFromInputFallback(b)}function V(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function W(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function X(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function Y(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function Z(a,b,c){var d=nb(Math.abs(a)/1e3),e=nb(d/60),f=nb(e/60),g=nb(f/24),h=nb(g/365),i=45>d&&["s",d]||1===e&&["m"]||45>e&&["mm",e]||1===f&&["h"]||22>f&&["hh",f]||1===g&&["d"]||25>=g&&["dd",g]||45>=g&&["M"]||345>g&&["MM",nb(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,Y.apply({},i)}function $(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=ib(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function _(a,b,c,d,e){var f,g,h=W(a,0,1).getUTCDay();return c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:w(a-1)+g}}function ab(b){var c=b._i,d=b._f;return null===c||d===a&&""===c?ib.invalid({nullInput:!0}):("string"==typeof c&&(b._i=c=E().preparse(c)),ib.isMoment(c)?(b=j(c),b._d=new Date(+c._d)):d?n(d)?S(b):P(b):U(b),new g(b))}function bb(a,b){var c;return"string"==typeof b&&(b=a.lang().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),u(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function cb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function db(a,b,c){return"Month"===b?bb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function eb(a,b){return function(c){return null!=c?(db(this,a,c),ib.updateOffset(this,b),this):cb(this,a)}}function fb(a){ib.duration.fn[a]=function(){return this._data[a]}}function gb(a,b){ib.duration.fn["as"+a]=function(){return+this/b}}function hb(a){"undefined"==typeof ender&&(jb=mb.moment,mb.moment=a?c("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",ib):ib)}for(var ib,jb,kb,lb="2.6.0",mb="undefined"!=typeof global?global:this,nb=Math.round,ob=0,pb=1,qb=2,rb=3,sb=4,tb=5,ub=6,vb={},wb={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_isUTC:null,_offset:null,_pf:null,_lang:null},xb="undefined"!=typeof module&&module.exports,yb=/^\/?Date\((\-?\d+)/i,zb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Ab=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Bb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Cb=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Db=/\d\d?/,Eb=/\d{1,3}/,Fb=/\d{1,4}/,Gb=/[+\-]?\d{1,6}/,Hb=/\d+/,Ib=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Jb=/Z|[\+\-]\d\d:?\d\d/gi,Kb=/T/i,Lb=/[\+\-]?\d+(\.\d{1,3})?/,Mb=/\d{1,2}/,Nb=/\d/,Ob=/\d\d/,Pb=/\d{3}/,Qb=/\d{4}/,Rb=/[+-]?\d{6}/,Sb=/[+-]?\d+/,Tb=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ub="YYYY-MM-DDTHH:mm:ssZ",Vb=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],Wb=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Xb=/([\+\-]|\d\d)/gi,Yb=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),Zb={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},$b={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},_b={},ac="DDD w W M D d".split(" "),bc="M D H h m s w W".split(" "),cc={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return l(this.year()%100,2)},YYYY:function(){return l(this.year(),4)},YYYYY:function(){return l(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+l(Math.abs(a),6)},gg:function(){return l(this.weekYear()%100,2)},gggg:function(){return l(this.weekYear(),4)},ggggg:function(){return l(this.weekYear(),5)},GG:function(){return l(this.isoWeekYear()%100,2)},GGGG:function(){return l(this.isoWeekYear(),4)},GGGGG:function(){return l(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return t(this.milliseconds()/100)},SS:function(){return l(t(this.milliseconds()/10),2)},SSS:function(){return l(this.milliseconds(),3)},SSSS:function(){return l(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+l(t(a/60),2)+":"+l(t(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+l(t(a/60),2)+l(t(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},dc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];ac.length;)kb=ac.pop(),cc[kb+"o"]=e(cc[kb],kb);for(;bc.length;)kb=bc.pop(),cc[kb+kb]=d(cc[kb],2);for(cc.DDDD=d(cc.DDD,3),i(f.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=ib.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=ib([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return $(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),ib=function(c,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=c,g._f=d,g._l=e,g._strict=f,g._isUTC=!1,g._pf=b(),ab(g)},ib.suppressDeprecationWarnings=!1,ib.createFromInputFallback=c("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i)}),ib.utc=function(c,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=c,g._f=d,g._strict=f,g._pf=b(),ab(g).utc()},ib.unix=function(a){return ib(1e3*a)},ib.duration=function(a,b){var c,d,e,f=a,g=null;return ib.isDuration(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(g=zb.exec(a))?(c="-"===g[1]?-1:1,f={y:0,d:t(g[qb])*c,h:t(g[rb])*c,m:t(g[sb])*c,s:t(g[tb])*c,ms:t(g[ub])*c}):(g=Ab.exec(a))&&(c="-"===g[1]?-1:1,e=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*c},f={y:e(g[2]),M:e(g[3]),d:e(g[4]),h:e(g[5]),m:e(g[6]),s:e(g[7]),w:e(g[8])}),d=new h(f),ib.isDuration(a)&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},ib.version=lb,ib.defaultFormat=Ub,ib.momentProperties=wb,ib.updateOffset=function(){},ib.lang=function(a,b){var c;return a?(b?C(A(a),b):null===b?(D(a),a="en"):vb[a]||E(a),c=ib.duration.fn._lang=ib.fn._lang=E(a),c._abbr):ib.fn._lang._abbr},ib.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),E(a)},ib.isMoment=function(a){return a instanceof g||null!=a&&a.hasOwnProperty("_isAMomentObject")},ib.isDuration=function(a){return a instanceof h},kb=dc.length-1;kb>=0;--kb)s(dc[kb]);ib.normalizeUnits=function(a){return q(a)},ib.invalid=function(a){var b=ib.utc(0/0);return null!=a?i(b._pf,a):b._pf.userInvalidated=!0,b},ib.parseZone=function(){return ib.apply(null,arguments).parseZone()},ib.parseTwoDigitYear=function(a){return t(a)+(t(a)>68?1900:2e3)},i(ib.fn=g.prototype,{clone:function(){return ib(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=ib(this).utc();return 0<a.year()&&a.year()<=9999?H(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):H(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return z(this)},isDSTShifted:function(){return this._a?this.isValid()&&p(this._a,(this._isUTC?ib.utc(this._a):ib(this._a)).toArray())>0:!1},parsingFlags:function(){return i({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var b=H(this,a||ib.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a?ib.duration(+b,a):ib.duration(a,b),m(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a?ib.duration(+b,a):ib.duration(a,b),m(this,c,-1),this},diff:function(a,b,c){var d,e,f=B(a,this),g=6e4*(this.zone()-f.zone());return b=q(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-ib(this).startOf("month")-(f-ib(f).startOf("month")))/d,e-=6e4*(this.zone()-ib(this).startOf("month").zone()-(f.zone()-ib(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:k(e)},from:function(a,b){return ib.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(ib(),a)},calendar:function(){var a=B(ib(),this).startOf("day"),b=this.diff(a,"days",!0),c=-6>b?"sameElse":-1>b?"lastWeek":0>b?"lastDay":1>b?"sameDay":2>b?"nextDay":7>b?"nextWeek":"sameElse";return this.format(this.lang().calendar(c,this))},isLeapYear:function(){return x(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=X(a,this.lang()),this.add({d:a-b})):b},month:eb("Month",!0),startOf:function(a){switch(a=q(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(a){return a=q(a),this.startOf(a).add("isoWeek"===a?"week":a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+ib(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+ib(a).startOf(b)},isSame:function(a,b){return b=b||"ms",+this.clone().startOf(b)===+B(a,this).startOf(b)},min:function(a){return a=ib.apply(null,arguments),this>a?this:a},max:function(a){return a=ib.apply(null,arguments),a>this?this:a},zone:function(a,b){var c=this._offset||0;return null==a?this._isUTC?c:this._d.getTimezoneOffset():("string"==typeof a&&(a=K(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,c!==a&&(!b||this._changeInProgress?m(this,ib.duration(c-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,ib.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?ib(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return u(this.year(),this.month())},dayOfYear:function(a){var b=nb((ib(this).startOf("day")-ib(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=$(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=$(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=$(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return v(this.year(),1,4)},weeksInYear:function(){var a=this._lang._week;return v(this.year(),a.dow,a.doy)},get:function(a){return a=q(a),this[a]()},set:function(a,b){return a=q(a),"function"==typeof this[a]&&this[a](b),this},lang:function(b){return b===a?this._lang:(this._lang=E(b),this)}}),ib.fn.millisecond=ib.fn.milliseconds=eb("Milliseconds",!1),ib.fn.second=ib.fn.seconds=eb("Seconds",!1),ib.fn.minute=ib.fn.minutes=eb("Minutes",!1),ib.fn.hour=ib.fn.hours=eb("Hours",!0),ib.fn.date=eb("Date",!0),ib.fn.dates=c("dates accessor is deprecated. Use date instead.",eb("Date",!0)),ib.fn.year=eb("FullYear",!0),ib.fn.years=c("years accessor is deprecated. Use year instead.",eb("FullYear",!0)),ib.fn.days=ib.fn.day,ib.fn.months=ib.fn.month,ib.fn.weeks=ib.fn.week,ib.fn.isoWeeks=ib.fn.isoWeek,ib.fn.quarters=ib.fn.quarter,ib.fn.toJSON=ib.fn.toISOString,i(ib.duration.fn=h.prototype,{_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,h=this._data;h.milliseconds=e%1e3,a=k(e/1e3),h.seconds=a%60,b=k(a/60),h.minutes=b%60,c=k(b/60),h.hours=c%24,f+=k(c/24),h.days=f%30,g+=k(f/30),h.months=g%12,d=k(g/12),h.years=d},weeks:function(){return k(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*t(this._months/12)},humanize:function(a){var b=+this,c=Z(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=ib.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=ib.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=q(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=q(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:ib.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}});for(kb in Yb)Yb.hasOwnProperty(kb)&&(gb(kb,Yb[kb]),fb(kb.toLowerCase()));gb("Weeks",6048e5),ib.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},ib.lang("en",{ordinal:function(a){var b=a%10,c=1===t(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),xb?module.exports=ib:"function"==typeof define&&define.amd?(define("moment",function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(mb.moment=jb),ib}),hb(!0)):hb()}).call(this);
/*
    json2.js
    2014-02-04
    Public Domain.
    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
    See http://www.JSON.org/js.html
    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html
    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.
    This file creates a global JSON object containing two methods: stringify
    and parse.
        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.
            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.
            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.
            This method produces a JSON text from a JavaScript value.
            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value
            For example, this would serialize Dates as ISO strings.
                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }
                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };
            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.
            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.
            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.
            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.
            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.
            Example:
            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'
            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'
            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'
        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.
            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.
            Example:
            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.
            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });
            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });
    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/
/*jslint evil: true, regexp: true */
/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/
// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.
if (typeof JSON !== 'object') {
    JSON = {};
}
(function () {
    'use strict';
    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }
    if (typeof Date.prototype.toJSON !== 'function') {
        Date.prototype.toJSON = function () {
            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };
        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function () {
                return this.valueOf();
            };
    }
    var cx,
        escapable,
        gap,
        indent,
        meta,
        rep;
    function quote(string) {
// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }
    function str(key, holder) {
// Produce a string from holder[key].
        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];
// If the value has a toJSON method, call it to obtain a replacement value.
        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }
// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.
        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }
// What happens next depends on the value's type.
        switch (typeof value) {
        case 'string':
            return quote(value);
        case 'number':
// JSON numbers must be finite. Encode non-finite numbers as null.
            return isFinite(value) ? String(value) : 'null';
        case 'boolean':
        case 'null':
// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.
            return String(value);
// If the type is 'object', we might be dealing with an object or an array or
// null.
        case 'object':
// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.
            if (!value) {
                return 'null';
            }
// Make an array to hold the partial results of stringifying this object value.
            gap += indent;
            partial = [];
// Is the value an array?
            if (Object.prototype.toString.apply(value) === '[object Array]') {
// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }
// Join all of the elements together, separated with commas, and wrap them in
// brackets.
                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }
// If the replacer is an array, use it to select the members to be stringified.
            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {
// Otherwise, iterate through all of the keys in the object.
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
// Join all of the member texts together, separated with commas,
// and wrap them in braces.
            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }
// If the JSON object does not yet have a stringify method, give it one.
    if (typeof JSON.stringify !== 'function') {
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        };
        JSON.stringify = function (value, replacer, space) {
// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.
            var i;
            gap = '';
            indent = '';
// If the space parameter is a number, make an indent string containing that
// many spaces.
            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }
// If the space parameter is a string, it will be used as the indent string.
            } else if (typeof space === 'string') {
                indent = space;
            }
// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.
            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }
// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.
            return str('', {'': value});
        };
    }
// If the JSON object does not yet have a parse method, give it one.
    if (typeof JSON.parse !== 'function') {
        cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        JSON.parse = function (text, reviver) {
// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.
            var j;
            function walk(holder, key) {
// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.
                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }
// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }
// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.
// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.
            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.
                j = eval('(' + text + ')');
// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.
                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }
// If the text is not JSON parseable, then a SyntaxError is thrown.
            throw new SyntaxError('JSON.parse');
        };
    }
}());

// jQuery libs
// -----------
/*!
 * jQuery JavaScript Library v2.1.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:11Z
 */
(function( global, factory ) {
	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper window is present,
		// execute the factory and get jQuery
		// For environments that do not inherently posses a window with a document
		// (such as Node.js), expose a jQuery-making factory as module.exports
		// This accentuates the need for the creation of a real window
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}
// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//
var arr = [];
var slice = arr.slice;
var concat = arr.concat;
var push = arr.push;
var indexOf = arr.indexOf;
var class2type = {};
var toString = class2type.toString;
var hasOwn = class2type.hasOwnProperty;
var support = {};
var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,
	version = "2.1.1",
	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},
	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,
	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};
jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,
	constructor: jQuery,
	// Start with an empty selector
	selector: "",
	// The default length of a jQuery object is 0
	length: 0,
	toArray: function() {
		return slice.call( this );
	},
	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?
			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :
			// Return all the elements in a clean array
			slice.call( this );
	},
	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {
		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );
		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;
		// Return the newly-formed element set
		return ret;
	},
	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},
	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},
	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},
	first: function() {
		return this.eq( 0 );
	},
	last: function() {
		return this.eq( -1 );
	},
	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},
	end: function() {
		return this.prevObject || this.constructor(null);
	},
	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};
jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;
	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}
	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}
	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}
	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];
				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}
				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];
					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}
					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );
				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}
	// Return the modified object
	return target;
};
jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	// Assume jQuery is ready without the ready module
	isReady: true,
	error: function( msg ) {
		throw new Error( msg );
	},
	noop: function() {},
	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},
	isArray: Array.isArray,
	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},
	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		return !jQuery.isArray( obj ) && obj - parseFloat( obj ) >= 0;
	},
	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}
		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}
		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},
	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},
	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android < 4.0, iOS < 6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},
	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;
		code = jQuery.trim( code );
		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},
	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},
	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},
	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );
		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );
					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );
					if ( value === false ) {
						break;
					}
				}
			}
		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );
					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );
					if ( value === false ) {
						break;
					}
				}
			}
		}
		return obj;
	},
	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},
	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];
		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}
		return ret;
	},
	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;
		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}
		first.length = i;
		return first;
	},
	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;
		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}
		return matches;
	},
	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];
		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );
				if ( value != null ) {
					ret.push( value );
				}
			}
		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );
				if ( value != null ) {
					ret.push( value );
				}
			}
		}
		// Flatten any nested arrays
		return concat.apply( [], ret );
	},
	// A global GUID counter for objects
	guid: 1,
	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;
		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}
		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}
		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};
		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;
		return proxy;
	},
	now: Date.now,
	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});
// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});
function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );
	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}
	if ( obj.nodeType === 1 && length ) {
		return true;
	}
	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-04-18
 */
(function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,
	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,
	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},
	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,
	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},
	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	// Regular expressions
	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),
	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",
	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",
	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),
	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,
	rnative = /^[^{]+\{\s*\[native \w/,
	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	rsibling = /[+~]/,
	rescape = /'|\\/g,
	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};
// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?
		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :
		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}
function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;
	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}
	context = context || document;
	results = results || [];
	if ( !selector || typeof selector !== "string" ) {
		return results;
	}
	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
		return [];
	}
	if ( documentIsHTML && !seed ) {
		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}
			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;
			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}
		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;
			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );
				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";
				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}
			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}
	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}
/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];
	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}
/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}
/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");
	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}
/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;
	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}
/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );
	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}
	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}
	return a ? 1 : -1;
}
/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}
/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}
/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;
			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}
/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== strundefined && context;
}
// Expose support vars for convenience
support = Sizzle.support = {};
/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};
/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare,
		doc = node ? node.ownerDocument || node : preferredDoc,
		parent = doc.defaultView;
	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}
	// Set our document
	document = doc;
	docElem = doc.documentElement;
	// Support tests
	documentIsHTML = !isXML( doc );
	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", function() {
				setDocument();
			}, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", function() {
				setDocument();
			});
		}
	}
	/* Attributes
	---------------------------------------------------------------------- */
	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});
	/* getElement(s)By*
	---------------------------------------------------------------------- */
	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});
	// Check if getElementsByClassName can be trusted
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName ) && assert(function( div ) {
		div.innerHTML = "<div class='a'></div><div class='a i'></div>";
		// Support: Safari<4
		// Catch class over-caching
		div.firstChild.className = "i";
		// Support: Opera<10
		// Catch gEBCN failure to find non-leading classes
		return div.getElementsByClassName("i").length === 2;
	});
	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});
	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}
	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== strundefined ) {
				return context.getElementsByTagName( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );
			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}
				return tmp;
			}
			return results;
		};
	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};
	/* QSA/matchesSelector
	---------------------------------------------------------------------- */
	// QSA and matchesSelector support
	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];
	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];
	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select msallowclip=''><option selected=''></option></select>";
			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowclip^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}
			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}
			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});
		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );
			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}
			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}
			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}
	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {
		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );
			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}
	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );
	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};
	/* Sorting
	---------------------------------------------------------------------- */
	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {
		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}
		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}
		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :
			// Otherwise we know they are disconnected
			1;
		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}
			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}
		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}
		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];
		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}
		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}
		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}
		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :
			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};
	return doc;
};
Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};
Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}
	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );
	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
		try {
			var ret = matches.call( elem, expr );
			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch(e) {}
	}
	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};
Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};
Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}
	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;
	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};
Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};
/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;
	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );
	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}
	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;
	return results;
};
/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;
	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes
	return ret;
};
Expr = Sizzle.selectors = {
	// Can be adjusted by the user
	cacheLength: 50,
	createPseudo: markFunction,
	match: matchExpr,
	attrHandle: {},
	find: {},
	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},
	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );
			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}
			return match.slice( 0, 4 );
		},
		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();
			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}
				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}
			return match;
		},
		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];
			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}
			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";
			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}
			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},
	filter: {
		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},
		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];
			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
				});
		},
		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );
				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}
				result += "";
				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},
		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";
			return first === 1 && last === 0 ?
				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :
				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;
					if ( parent ) {
						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}
						start = [ forward ? parent.firstChild : parent.lastChild ];
						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {
								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}
						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];
						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {
								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}
									if ( node === elem ) {
										break;
									}
								}
							}
						}
						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},
		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );
			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}
			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}
			return fn;
		}
	},
	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );
			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;
					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),
		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),
		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),
		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),
		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},
		"root": function( elem ) {
			return elem === docElem;
		},
		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},
		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},
		"disabled": function( elem ) {
			return elem.disabled === true;
		},
		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},
		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}
			return elem.selected === true;
		},
		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},
		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},
		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},
		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},
		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},
		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&
				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},
		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),
		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),
		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),
		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),
		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),
		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),
		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};
Expr.pseudos["nth"] = Expr.pseudos["eq"];
// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}
// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();
tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];
	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}
	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;
	while ( soFar ) {
		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}
		matched = false;
		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}
		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}
		if ( !matched ) {
			break;
		}
	}
	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};
function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}
function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;
	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :
		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];
			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;
							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}
function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}
function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}
function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;
	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}
	return newUnmatched;
}
function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,
			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,
			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
					// ...intermediate processing is necessary
					[] :
					// ...otherwise use results directly
					results :
				matcherIn;
		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}
		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );
			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}
		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}
				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {
						seed[temp] = !(results[temp] = elem);
					}
				}
			}
		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}
function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,
		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];
	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}
	return elementMatcher( matchers );
}
function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;
			if ( outermost ) {
				outermostContext = context !== document && context;
			}
			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}
				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}
					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}
			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}
				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}
					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}
				// Add matches to results
				push.apply( results, setMatched );
				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {
					Sizzle.uniqueSort( results );
				}
			}
			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}
			return unmatched;
		};
	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}
compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];
	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}
		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};
/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );
	results = results || [];
	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {
		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {
			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;
			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}
			selector = selector.slice( tokens.shift().value.length );
		}
		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];
			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {
					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}
					break;
				}
			}
		}
	}
	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};
// One-time assignments
// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;
// Initialize against the default document
setDocument();
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});
// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}
return Sizzle;
})( window );
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
var rneedsContext = jQuery.expr.match.needsContext;
var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
var risSimple = /^.[^:#\[\.,]*$/;
// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});
	}
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});
	}
	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}
		qualifier = jQuery.filter( qualifier, elements );
	}
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}
jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];
	if ( not ) {
		expr = ":not(" + expr + ")";
	}
	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};
jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;
		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}
		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}
		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,
			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var rootjQuery,
	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;
		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}
		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];
			} else {
				match = rquickExpr.exec( selector );
			}
			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {
				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;
					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );
					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );
							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}
					return this;
				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}
					this.context = document;
					this.selector = selector;
					return this;
				}
			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );
			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}
		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;
		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}
		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}
		return jQuery.makeArray( selector, this );
	};
// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;
// Initialize central reference
rootjQuery = jQuery( document );
var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};
jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},
	sibling: function( n, elem ) {
		var matched = [];
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
		return matched;
	}
});
jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;
		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},
	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;
		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :
					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {
					matched.push( cur );
					break;
				}
			}
		}
		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},
	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {
		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}
		// index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}
		// Locate the position of the desired element
		return indexOf.call( this,
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},
	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},
	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});
function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}
jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );
		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}
		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}
		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}
			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}
		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);
// String to Object options format cache
var optionsCache = {};
// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}
/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {
	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );
	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};
	return self;
};
jQuery.extend({
	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};
		// Keep pipe for back-compat
		promise.pipe = promise.then;
		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];
			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;
			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;
				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}
			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});
		// Make the deferred a promise
		promise.promise( deferred );
		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}
		// All done!
		return deferred;
	},
	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,
			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},
			progressValues, progressContexts, resolveContexts;
		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}
		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}
		return deferred.promise();
	}
});
// The deferred used on DOM ready
var readyList;
jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );
	return this;
};
jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,
	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,
	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},
	// Handle when the DOM is ready
	ready: function( wait ) {
		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}
		// Remember that the DOM is ready
		jQuery.isReady = true;
		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}
		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});
/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
}
jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {
		readyList = jQuery.Deferred();
		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );
		} else {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );
			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};
// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;
	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}
	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;
		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}
		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;
			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}
		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}
	return chainable ?
		elems :
		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};
/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};
function Data() {
	// Support: Android < 4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});
	this.expando = jQuery.expando + Math.random();
}
Data.uid = 1;
Data.accepts = jQuery.acceptData;
Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}
		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];
		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;
			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );
			// Support: Android < 4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}
		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}
		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];
		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;
		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];
		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {
			stored = this.get( owner, key );
			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}
		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );
		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];
		if ( key === undefined ) {
			this.cache[ unlock ] = {};
		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}
			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();
var data_user = new Data();
/*
	Implementation Summary
	1. Enforce API surface and semantic compatibility with 1.9.x branch
	2. Improve the module's maintainability by reducing the storage
		paths to a single mechanism.
	3. Use the same single mechanism to support "private" and "user" data.
	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	5. Avoid exposing implementation details on user objects (eg. expando properties)
	6. Provide a clear path for implementation upgrade to WeakMap in 2014
*/
var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;
function dataAttr( elem, key, data ) {
	var name;
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );
		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}
			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}
jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},
	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},
	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},
	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},
	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});
jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;
		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );
				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {
						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}
			return data;
		}
		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}
		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );
			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}
				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}
				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}
				// We tried really hard, but the data doesn't exist.
				return;
			}
			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );
				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );
				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},
	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});
jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;
		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );
			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},
	dequeue: function( elem, type ) {
		type = type || "fx";
		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};
		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}
		if ( fn ) {
			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}
			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}
		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},
	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});
jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;
		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}
		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}
		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );
				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );
				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};
		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";
		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};
var rcheckableType = (/^(?:checkbox|radio)$/i);
(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );
	// #11217 - WebKit loses check when the name is after the checked attribute
	// Support: Windows Web Apps (WWA)
	// `name` and `type` need .setAttribute for WWA
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );
	div.appendChild( input );
	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE9-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;
support.focusinBubbles = "onfocusin" in window;
var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
function returnTrue() {
	return true;
}
function returnFalse() {
	return false;
}
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}
/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {
	global: {},
	add: function( elem, types, handler, data, selector ) {
		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );
		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}
		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}
		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}
		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}
		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();
			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}
			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};
			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;
			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};
			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );
			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;
				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}
			if ( special.add ) {
				special.add.call( elem, handleObj );
				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}
			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}
			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}
	},
	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );
		if ( !elemData || !(events = elemData.events) ) {
			return;
		}
		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();
			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}
			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );
			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];
				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );
					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}
			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}
				delete events[ type ];
			}
		}
		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},
	trigger: function( event, data, elem, onlyHandlers ) {
		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];
		cur = tmp = elem = elem || document;
		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}
		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}
		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;
		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );
		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;
		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}
		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );
		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}
		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}
			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}
		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;
			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}
			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;
		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {
			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {
				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];
					if ( tmp ) {
						elem[ ontype ] = null;
					}
					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;
					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}
		return event.result;
	},
	dispatch: function( event ) {
		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );
		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};
		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;
		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}
		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );
		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;
			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {
				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {
					event.handleObj = handleObj;
					event.data = handleObj.data;
					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );
					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}
		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}
		return event.result;
	},
	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {
			for ( ; cur !== this; cur = cur.parentNode || this ) {
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];
						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";
						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}
		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}
		return handlerQueue;
	},
	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
	fixHooks: {},
	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {
			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}
			return event;
		}
	},
	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;
			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;
				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}
			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}
			return event;
		}
	},
	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}
		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];
		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
		event = new jQuery.Event( originalEvent );
		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}
		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}
		// Support: Safari 6.0+, Chrome < 28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}
		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},
	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},
			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},
		beforeunload: {
			postDispatch: function( event ) {
				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},
	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};
jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};
jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}
	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;
		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;
	// Event type
	} else {
		this.type = src;
	}
	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}
	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();
	// Mark it as fixed
	this[ jQuery.expando ] = true;
};
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	preventDefault: function() {
		var e = this.originalEvent;
		this.isDefaultPrevented = returnTrue;
		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;
		this.isPropagationStopped = returnTrue;
		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;
		this.isImmediatePropagationStopped = returnTrue;
		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}
		this.stopPropagation();
	}
};
// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,
		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;
			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});
// Create "bubbling" focus and blur events
// Support: Firefox, Chrome, Safari
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {
		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};
		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );
				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;
				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );
				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}
jQuery.fn.extend({
	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}
		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},
	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});
var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	// We have to close these tags to support XHTML (#13200)
	wrapMap = {
		// Support: IE 9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
		_default: [ 0, "", "" ]
	};
// Support: IE 9
wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;
// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?
		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}
	return elem;
}
// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;
	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}
function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	if ( dest.nodeType !== 1 ) {
		return;
	}
	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;
		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};
			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}
	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );
		data_user.set( dest, udataCur );
	}
}
function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];
	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}
// Support: IE >= 9
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();
	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;
	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}
jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );
		// Support: IE >= 9
		// Fix Cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {
			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );
			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}
		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}
		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}
		// Return the cloned set
		return clone;
	},
	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
			if ( elem || elem === 0 ) {
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit
					// jQuery.merge because push.apply(_, arraylike) throws
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
					// Support: QtWebKit
					// jQuery.merge because push.apply(_, arraylike) throws
					jQuery.merge( nodes, tmp.childNodes );
					// Remember the top-level container
					tmp = fragment.firstChild;
					// Fixes #12346
					// Support: Webkit, IE
					tmp.textContent = "";
				}
			}
		}
		// Remove wrapper from fragment
		fragment.textContent = "";
		i = 0;
		while ( (elem = nodes[ i++ ]) ) {
			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}
			contains = jQuery.contains( elem.ownerDocument, elem );
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
		return fragment;
	},
	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;
		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];
				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );
							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});
jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},
	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},
	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},
	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},
	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},
	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;
		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}
			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}
		return this;
	},
	empty: function() {
		var elem,
			i = 0;
		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {
				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );
				// Remove any remaining nodes
				elem.textContent = "";
			}
		}
		return this;
	},
	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},
	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;
			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}
			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
				value = value.replace( rxhtmlTag, "<$1></$2>" );
				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};
						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}
					elem = 0;
				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}
			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},
	replaceWith: function() {
		var arg = arguments[ 0 ];
		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;
			jQuery.cleanData( getAll( this ) );
			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});
		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},
	detach: function( selector ) {
		return this.remove( selector, true );
	},
	domManip: function( args, callback ) {
		// Flatten any nested arrays
		args = concat.apply( [], args );
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}
		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
					callback.call( this[ i ], node, i );
				}
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {
							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}
		return this;
	}
});
jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;
		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );
			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}
		return this.pushStack( ret );
	};
});
var iframe,
	elemdisplay = {};
/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?
			// Use of this method is a temporary fix (more like optmization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );
	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();
	return display;
}
/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];
	if ( !display ) {
		display = actualDisplay( nodeName, doc );
		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {
			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );
			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;
			// Support: IE
			doc.write();
			doc.close();
			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}
		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}
	return display;
}
var rmargin = (/^margin/);
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
var getStyles = function( elem ) {
		return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
	};
function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;
	computed = computed || getStyles( elem );
	// Support: IE9
	// getPropertyValue is only needed for .css('filter') in IE9, see #12537
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}
	if ( computed ) {
		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}
		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {
			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;
			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;
			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}
	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}
function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due to missing dependency),
				// remove it.
				// Since there are no other hooks for marginRight, remove the whole object.
				delete this.get;
				return;
			}
			// Hook needed; redefine it so that the support test is not executed again.
			return (this.get = hookFn).apply( this, arguments );
		}
	};
}
(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );
	if ( !div.style ) {
		return;
	}
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";
	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );
	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );
		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";
		docElem.removeChild( container );
	}
	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {
				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {
				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );
				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );
				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );
				docElem.removeChild( container );
				return ret;
			}
		});
	}
})();
// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};
	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}
	ret = callback.apply( elem, args || [] );
	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}
	return ret;
};
var
	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},
	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {
	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}
	// check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;
	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}
	return origName;
}
function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}
function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,
		val = 0;
	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}
		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}
			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}
	return val;
}
function getWidthOrHeight( elem, name, extra ) {
	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}
		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}
		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );
		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}
	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}
function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}
			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );
			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}
	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}
	return elements;
}
jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},
	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},
	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": "cssFloat"
	},
	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}
		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );
		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;
			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}
			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}
			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}
			// Fixes #8908, it can be done more correctly by specifying setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}
			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}
		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}
			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},
	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );
		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );
		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}
		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}
		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}
		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});
jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},
		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});
// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// Work around by temporarily setting element display to inline-block
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);
// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},
				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];
			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}
			return expanded;
		}
	};
	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});
jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;
			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;
				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}
				return map;
			}
			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}
		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});
function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;
Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];
		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];
		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;
		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}
		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};
Tween.prototype.init.prototype = Tween.prototype;
Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;
			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}
			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};
// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};
jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};
jQuery.fx = Tween.prototype.init;
// Back Compat <1.8 extension point
jQuery.fx.step = {};
var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;
			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];
				// Make sure we update the tween properties later on
				parts = parts || [];
				// Iteratively approximate from a nonzero starting point
				start = +target || 1;
				do {
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";
					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );
				// Update scale, tolerating zero or NaN from tween.cur()
				// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}
			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}
			return tween;
		} ]
	};
// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}
// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };
	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}
	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}
	return attrs;
}
function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {
			// we're done with this property
			return tween;
		}
	}
}
function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );
	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;
		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}
	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );
		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;
		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}
	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}
	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {
				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}
	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}
		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;
			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}
	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}
function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;
	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}
		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}
		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];
			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}
function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;
			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}
			deferred.notifyWith( elem, [ animation, percent, remaining ]);
			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}
				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;
	propFilter( props, animation.opts.specialEasing );
	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}
	jQuery.map( props, createTween, animation );
	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}
	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);
	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}
jQuery.Animation = jQuery.extend( Animation, {
	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}
		var prop,
			index = 0,
			length = props.length;
		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},
	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});
jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};
	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}
	// Queueing
	opt.old = opt.complete;
	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}
		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};
	return opt;
};
jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {
		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()
			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );
				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;
		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};
		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}
		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );
			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}
			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;
			// enable finishing flag on private data
			data.finish = true;
			// empty the queue first
			jQuery.queue( this, type, [] );
			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}
			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}
			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}
			// turn off finishing flag
			delete data.finish;
		});
	}
});
jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});
// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});
jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;
	fxNow = jQuery.now();
	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}
	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};
jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};
jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};
jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};
jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};
// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";
	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};
(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );
	input.type = "checkbox";
	// Support: iOS 5.1, Android 4.x, Android 2.3
	// Check the default checkbox/radio value ("" on old WebKit; "on" elsewhere)
	support.checkOn = input.value !== "";
	// Must access the parent to make an option select properly
	// Support: IE9, IE10
	support.optSelected = opt.selected;
	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;
	// Check if an input maintains its value after becoming a radio
	// Support: IE9, IE10
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();
var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;
jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},
	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});
jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;
		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}
		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}
		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}
		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;
			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}
		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;
		} else {
			ret = jQuery.find.attr( elem, name );
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},
	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );
		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;
				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}
				elem.removeAttribute( name );
			}
		}
	},
	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});
// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;
	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});
var rfocusable = /^(?:input|select|textarea|button)$/i;
jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},
	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});
jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},
	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;
		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}
		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );
		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}
		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );
		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},
	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});
// Support: IE9+
// Selectedness for an option in an optgroup can be inaccurate
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}
jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});
var rclass = /[\t\r\n\f]/g;
jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;
		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];
			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);
				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}
					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}
		return this;
	},
	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;
		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];
			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);
				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}
					// only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}
		return this;
	},
	toggleClass: function( value, stateVal ) {
		var type = typeof value;
		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}
		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}
		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];
				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}
			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}
				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},
	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}
		return false;
	}
});
var rreturn = /\r/g;
jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];
		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}
				ret = elem.value;
				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}
			return;
		}
		isFunction = jQuery.isFunction( value );
		return this.each(function( i ) {
			var val;
			if ( this.nodeType !== 1 ) {
				return;
			}
			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}
			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}
			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});
jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;
				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];
					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
						// Get the specific value for the option
						value = jQuery( option ).val();
						// We don't need an array for one selects
						if ( one ) {
							return value;
						}
						// Multi-Selects return an array
						values.push( value );
					}
				}
				return values;
			},
			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;
				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}
				// force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});
// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});
// Return jQuery for attributes-only inclusion
jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {
	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});
jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},
	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},
	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});
var nonce = jQuery.now();
var rquery = (/\?/);
// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};
// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}
	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};
var
	// Document location
	ajaxLocParts,
	ajaxLocation,
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},
	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},
	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");
// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}
// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {
	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {
		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}
		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );
				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}
// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	var inspected = {},
		seekingTransport = ( structure === transports );
	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}
	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};
	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}
	return target;
}
/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;
	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}
	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}
	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}
	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}
/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();
	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}
	current = dataTypes.shift();
	// Convert to each sequential dataType
	while ( current ) {
		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}
		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}
		prev = current;
		current = dataTypes.shift();
		if ( current ) {
		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {
				current = prev;
			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {
				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];
				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {
						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {
							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];
								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}
				// Apply converter (if not an equivalence)
				if ( conv !== true ) {
					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}
	return { state: "success", data: response };
}
jQuery.extend({
	// Counter for holding the number of active queries
	active: 0,
	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},
	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},
		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},
		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},
		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {
			// Convert anything to text
			"* text": String,
			// Text to html (true = no transformation)
			"text html": true,
			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,
			// Parse text as xml
			"text xml": jQuery.parseXML
		},
		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},
	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?
			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},
	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),
	// Main method
	ajax: function( url, options ) {
		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}
		// Force options to be an object
		options = options || {};
		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,
				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},
				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},
				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},
				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},
				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},
				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};
		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;
		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );
		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;
		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}
		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}
		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}
		// We can fire global events as of now if asked to
		fireGlobals = s.global;
		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}
		// Uppercase the type
		s.type = s.type.toUpperCase();
		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );
		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;
		// More options handling for requests with no content
		if ( !s.hasContent ) {
			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}
			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?
					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :
					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}
		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}
		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}
		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);
		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}
		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}
		// aborting is no longer a cancellation
		strAbort = "abort";
		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}
		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;
			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}
			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}
		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;
			// Called once
			if ( state === 2 ) {
				return;
			}
			// State is "done" now
			state = 2;
			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}
			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;
			// Cache response headers
			responseHeadersString = headers || "";
			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;
			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;
			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}
			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );
			// If successful, handle type chaining
			if ( isSuccess ) {
				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}
				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";
				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";
				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}
			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";
			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}
			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;
			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}
			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}
		return jqXHR;
	},
	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},
	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});
jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}
		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});
// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});
jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};
jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}
		if ( this[ 0 ] ) {
			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}
			wrap.map(function() {
				var elem = this;
				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}
				return elem;
			}).append( this );
		}
		return this;
	},
	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}
		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();
			if ( contents.length ) {
				contents.wrapAll( html );
			} else {
				self.append( html );
			}
		});
	},
	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );
		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},
	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});
jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};
var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;
function buildParams( prefix, obj, traditional, add ) {
	var name;
	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );
			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});
	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}
	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}
// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};
	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}
	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});
	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}
	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};
jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;
			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();
			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});
jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};
var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();
// Support: IE9
// Open requests must be manually aborted on unload (#5280)
if ( window.ActiveXObject ) {
	jQuery( window ).on( "unload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;
jQuery.ajaxTransport(function( options ) {
	var callback;
	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;
				xhr.open( options.type, options.url, options.async, options.username, options.password );
				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}
				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}
				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}
				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}
				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;
							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};
				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");
				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");
				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});
// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});
// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});
// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});
var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});
// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);
	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;
		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}
		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};
		// force json dataType
		s.dataTypes[ 0 ] = "json";
		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};
		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;
			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;
				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}
			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}
			responseContainer = overwritten = undefined;
		});
		// Delegate to script
		return "script";
	}
});
// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;
	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];
	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}
	parsed = jQuery.buildFragment( [ data ], context, scripts );
	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}
	return jQuery.merge( [], parsed.childNodes );
};
// Keep a copy of the old load method
var _load = jQuery.fn.load;
/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}
	var selector, type, response,
		self = this,
		off = url.indexOf(" ");
	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}
	// If it's a function
	if ( jQuery.isFunction( params ) ) {
		// We assume that it's the callback
		callback = params;
		params = undefined;
	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}
	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,
			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {
			// Save response for use in complete callback
			response = arguments;
			self.html( selector ?
				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :
				// Otherwise use the full result
				responseText );
		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}
	return this;
};
jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};
var docElem = window.document.documentElement;
/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}
jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};
		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}
		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;
		// Need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}
		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}
		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}
		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};
jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}
		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;
		if ( !doc ) {
			return;
		}
		docElem = doc.documentElement;
		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}
		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}
		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };
		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// We assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();
			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}
			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}
		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},
	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;
			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || docElem;
		});
	}
});
// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;
	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );
			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}
			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);
			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
			return access( this, function( elem, type, value ) {
				var doc;
				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}
				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;
					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}
				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :
					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});
// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};
jQuery.fn.andSelf = jQuery.fn.addBack;
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}
var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,
	// Map over the $ in case of overwrite
	_$ = window.$;
jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}
	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}
	return jQuery;
};
// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}
return jQuery;
}));
/*global jQuery:false, alert:false */
/*
 * Default text - jQuery plugin for html5 dragging files from desktop to browser
 *
 * Author: Weixi Yen
 *
 * Email: [Firstname][Lastname]@gmail.com
 *
 * Copyright (c) 2010 Resopollution
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.github.com/weixiyen/jquery-filedrop
 *
 * Version:  0.1.0
 *
 * Features:
 *      Allows sending of extra parameters with file.
 *      Works with Firefox 3.6+
 *      Future-compliant with HTML5 spec (will work with Webkit browsers and IE9)
 * Usage:
 *  See README at project homepage
 *
 */
;(function($) {
  jQuery.event.props.push("dataTransfer");
  var empty = function () {}
  var default_opts = {
      fallback_id: '',
      url: '',
      refresh: 1000,
      paramname: 'userfile',
      allowedfiletypes:[],
      maxfiles: 25,           // Ignored if queuefiles is set > 0
      maxfilesize: 1,         // MB file size limit
      queuefiles: 0,          // Max files before queueing (for large volume uploads)
      queuewait: 200,         // Queue wait time if full
      data: {},
      headers: {},
      drop: empty,
      dragStart: empty,
      dragEnter: empty,
      dragOver: empty,
      dragLeave: empty,
      docEnter: empty,
      docOver: empty,
      docLeave: empty,
      beforeEach: empty,
      afterAll: empty,
      rename: empty,
      error: function(err, file, i, status) {
        alert(err);
      },
      uploadStarted: empty,
      uploadFinished: empty,
      progressUpdated: empty,
      globalProgressUpdated: empty,
      speedUpdated: empty
      },
      errors = ["BrowserNotSupported", "TooManyFiles", "FileTooLarge", "FileTypeNotAllowed", "NotFound", "NotReadable", "AbortError", "ReadError"],
      doc_leave_timer, stop_loop = false,
      files_count = 0,
      files;
  $.fn.filedrop = function(options) {
    var opts = $.extend({}, default_opts, options),
        global_progress = [];
    $('#' + opts.fallback_id).change(function(e) {
      opts.drop(e);
      files = e.target.files;
      files_count = files.length;
      upload();
    });
    var drop = function (e) {
      if( opts.drop.call(this, e) === false ) return false;
      files = e.dataTransfer.files;
      if (files === null || files === undefined || files.length === 0) {
        opts.error(errors[0]);
        return false;
      }
      files_count = files.length;
      upload();
      e.preventDefault();
      return false;
    }
    var getBuilder = function (filename, filedata, mime, boundary) {
      var dashdash = '--',
          crlf = '\r\n',
          builder = '',
          paramname = opts.paramname;
      if (opts.data) {
        var params = $.param(opts.data).replace(/\+/g, '%20').split(/&/);
        $.each(params, function() {
          var pair = this.split("=", 2),
              name = decodeURIComponent(pair[0]),
              val  = decodeURIComponent(pair[1]);
          builder += dashdash;
          builder += boundary;
          builder += crlf;
          builder += 'Content-Disposition: form-data; name="' + name + '"';
          builder += crlf;
          builder += crlf;
          builder += val;
          builder += crlf;
        });
      }
      if (jQuery.isFunction(paramname)){
        paramname = paramname(filename);
      }
      builder += dashdash;
      builder += boundary;
      builder += crlf;
      builder += 'Content-Disposition: form-data; name="' + (paramname||"") + '"';
      builder += '; filename="' + encodeURIComponent(filename) + '"';
      builder += crlf;
      builder += 'Content-Type: ' + mime;
      builder += crlf;
      builder += crlf;
      builder += filedata;
      builder += crlf;
      builder += dashdash;
      builder += boundary;
      builder += dashdash;
      builder += crlf;
      return builder;
    }
    var progress = function (e) {
      if (e.lengthComputable) {
        var percentage = Math.round((e.loaded * 100) / e.total);
        if (this.currentProgress !== percentage) {
          this.currentProgress = percentage;
          opts.progressUpdated(this.index, this.file, this.currentProgress);
          global_progress[this.global_progress_index] = this.currentProgress;
          globalProgress();
          var elapsed = new Date().getTime();
          var diffTime = elapsed - this.currentStart;
          if (diffTime >= opts.refresh) {
            var diffData = e.loaded - this.startData;
            var speed = diffData / diffTime; // KB per second
            opts.speedUpdated(this.index, this.file, speed);
            this.startData = e.loaded;
            this.currentStart = elapsed;
          }
        }
      }
    }
    var globalProgress = function () {
      if (global_progress.length === 0) {
        return;
      }
      var total = 0, index;
      for (index in global_progress) {
        if(global_progress.hasOwnProperty(index)) {
          total = total + global_progress[index];
        }
      }
      opts.globalProgressUpdated(Math.round(total / global_progress.length));
    }
    // Respond to an upload
    var upload = function () {
      stop_loop = false;
      if (!files) {
        opts.error(errors[0]);
        return false;
      }
      if (opts.allowedfiletypes.push && opts.allowedfiletypes.length) {
        for(var fileIndex = files.length;fileIndex--;) {
          if(!files[fileIndex].type || $.inArray(files[fileIndex].type, opts.allowedfiletypes) < 0) {
            opts.error(errors[3], files[fileIndex]);
            return false;
          }
        }
      }
      var filesDone = 0,
          filesRejected = 0;
      if (files_count > opts.maxfiles && opts.queuefiles === 0) {
        opts.error(errors[1]);
        return false;
      }
      // Define queues to manage upload process
      var workQueue = [];
      var processingQueue = [];
      var doneQueue = [];
      // Add everything to the workQueue
      for (var i = 0; i < files_count; i++) {
        workQueue.push(i);
      }
      // Helper function to enable pause of processing to wait
      // for in process queue to complete
      var pause = function (timeout) {
        setTimeout(process, timeout);
        return;
      };
      // Process an upload, recursive
      var process = function () {
        var fileIndex;
        if (stop_loop) {
          return false;
        }
        // Check to see if are in queue mode
        if (opts.queuefiles > 0 && processingQueue.length >= opts.queuefiles) {
          return pause(opts.queuewait);
        } else {
          // Take first thing off work queue
          fileIndex = workQueue[0];
          workQueue.splice(0, 1);
          // Add to processing queue
          processingQueue.push(fileIndex);
        }
        try {
          if (beforeEach(files[fileIndex]) !== false) {
            if (fileIndex === files_count) {
              return;
            }
            var reader = new FileReader(),
                max_file_size = 1048576 * opts.maxfilesize;
            reader.index = fileIndex;
            if (files[fileIndex].size > max_file_size) {
              opts.error(errors[2], files[fileIndex], fileIndex);
              // Remove from queue
              processingQueue.forEach(function(value, key) {
                if (value === fileIndex) {
                  processingQueue.splice(key, 1);
                }
              });
              filesRejected++;
              return true;
            }
            reader.onerror = function(e) {
                switch(e.target.error.code) {
                    case e.target.error.NOT_FOUND_ERR:
                        opts.error(errors[4]);
                        return false;
                    case e.target.error.NOT_READABLE_ERR:
                        opts.error(errors[5]);
                        return false;
                    case e.target.error.ABORT_ERR:
                        opts.error(errors[6]);
                        return false;
                    default:
                        opts.error(errors[7]);
                        return false;
                };
            };
            reader.onloadend = !opts.beforeSend ? send : function (e) {
              opts.beforeSend(files[fileIndex], fileIndex, function () { send(e); });
            };
            reader.readAsBinaryString(files[fileIndex]);
          } else {
            filesRejected++;
          }
        } catch (err) {
          // Remove from queue
          processingQueue.forEach(function(value, key) {
            if (value === fileIndex) {
              processingQueue.splice(key, 1);
            }
          });
          opts.error(errors[0]);
          return false;
        }
        // If we still have work to do,
        if (workQueue.length > 0) {
          process();
        }
      };
      var send = function (e) {
        var fileIndex = ((typeof(e.srcElement) === "undefined") ? e.target : e.srcElement).index;
        // Sometimes the index is not attached to the
        // event object. Find it by size. Hack for sure.
        if (e.target.index === undefined) {
          e.target.index = getIndexBySize(e.total);
        }
        var xhr = new XMLHttpRequest(),
            upload = xhr.upload,
            file = files[e.target.index],
            index = e.target.index,
            start_time = new Date().getTime(),
            boundary = '------multipartformboundary' + (new Date()).getTime(),
            global_progress_index = global_progress.length,
            builder,
            newName = rename(file.name),
            mime = file.type;
        if (opts.withCredentials) {
          xhr.withCredentials = opts.withCredentials;
        }
        if (typeof newName === "string") {
          builder = getBuilder(newName, e.target.result, mime, boundary);
        } else {
          builder = getBuilder(file.name, e.target.result, mime, boundary);
        }
        upload.index = index;
        upload.file = file;
        upload.downloadStartTime = start_time;
        upload.currentStart = start_time;
        upload.currentProgress = 0;
        upload.global_progress_index = global_progress_index;
        upload.startData = 0;
        upload.addEventListener("progress", progress, false);
	// Allow url to be a method
	if (jQuery.isFunction(opts.url)) {
	  xhr.open("POST", opts.url(), true);
	} else {
	  xhr.open("POST", opts.url, true);
	}
        xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
        // Add headers
        $.each(opts.headers, function(k, v) {
          xhr.setRequestHeader(k, v);
        });
        xhr.sendAsBinary(builder);
        global_progress[global_progress_index] = 0;
        globalProgress();
        opts.uploadStarted(index, file, files_count);
        xhr.onload = function() {
          var serverResponse = null;
          if (xhr.responseText) {
            try {
              serverResponse = jQuery.parseJSON(xhr.responseText);
            }
            catch (e) {
              serverResponse = xhr.responseText;
            }
          }
          var now = new Date().getTime(),
              timeDiff = now - start_time,
              result = opts.uploadFinished(index, file, serverResponse, timeDiff, xhr);
          filesDone++;
          // Remove from processing queue
          processingQueue.forEach(function(value, key) {
            if (value === fileIndex) {
              processingQueue.splice(key, 1);
            }
          });
          // Add to donequeue
          doneQueue.push(fileIndex);
          // Make sure the global progress is updated
          global_progress[global_progress_index] = 100;
          globalProgress();
          if (filesDone === (files_count - filesRejected)) {
            afterAll();
          }
          if (result === false) {
            stop_loop = true;
          }
          // Pass any errors to the error option
          if (xhr.status < 200 || xhr.status > 299) {
            opts.error(xhr.statusText, file, fileIndex, xhr.status);
          }
        };
        xhr.onerror = function() { // in order to handle cross-origin server crashes
            xhr.onload();
        };
      };
      // Initiate the processing loop
      process();
    }
    var getIndexBySize = function (size) {
      for (var i = 0; i < files_count; i++) {
        if (files[i].size === size) {
          return i;
        }
      }
      return undefined;
    }
    var rename = function (name) {
      return opts.rename(name);
    }
    var beforeEach = function (file) {
      return opts.beforeEach(file);
    }
    var afterAll = function () {
      return opts.afterAll();
    }
    var dragEnter = function (e) {
      clearTimeout(doc_leave_timer);
      e.preventDefault();
      opts.dragEnter.call(this, e);
    }
    var dragOver = function (e) {
      clearTimeout(doc_leave_timer);
      e.preventDefault();
      opts.docOver.call(this, e);
      opts.dragOver.call(this, e);
    }
    var dragLeave = function (e) {
      var rect = this.getBoundingClientRect();
      var mouseEvt = e.originalEvent;
      // Check the mouseEvent coordinates are outside of the rectangle
      if ((mouseEvt.x === undefined && mouseEvt.y === undefined)
        || mouseEvt.x >= rect.left + rect.width || mouseEvt.x < rect.left
        || mouseEvt.y >= rect.top + rect.height || mouseEvt.y < rect.top) {
        // We are leaving for real!
        clearTimeout(doc_leave_timer);
        opts.dragLeave.call(this, e);
        e.stopPropagation();
      }
    }
    var docDrop = function (e) {
      e.preventDefault();
      opts.docLeave.call(this, e);
      return false;
    }
    var docEnter = function (e) {
      clearTimeout(doc_leave_timer);
      e.preventDefault();
      opts.docEnter.call(this, e);
      return false;
    }
    var docOver = function (e) {
      clearTimeout(doc_leave_timer);
      e.preventDefault();
      opts.docOver.call(this, e);
      return false;
    }
    var docLeave = function (e) {
      doc_leave_timer = setTimeout((function(_this) {
        return function() {
          opts.docLeave.call(_this, e);
        };
      })(this), 200);
    }
    var self = this;
    self.on('drop', drop).on('dragstart', opts.dragStart).on('dragenter', dragEnter).on('dragover', dragOver).on('dragleave', dragLeave);
    $(document).on('drop', docDrop).on('dragenter', docEnter).on('dragover', docOver).on('dragleave', docLeave);
    self.destroy = function() {
      self.off('drop', drop).off('dragstart', opts.dragStart).off('dragenter', dragEnter).off('dragover', dragOver).off('dragleave', dragLeave);
      $(document).off('drop', docDrop).off('dragenter', docEnter).off('dragover', docOver).off('dragleave', docLeave);
    }
    return self;
  };
  try {
    if (XMLHttpRequest.prototype.sendAsBinary) {
        return;
    }
    XMLHttpRequest.prototype.sendAsBinary = function(datastr) {
      function byteValue(x) {
        return x.charCodeAt(0) & 0xff;
      }
      var ords = Array.prototype.map.call(datastr, byteValue);
      var ui8a = new Uint8Array(ords);
      // Not pretty: Chrome 22 deprecated sending ArrayBuffer, moving instead
      // to sending ArrayBufferView.  Sadly, no proper way to detect this
      // functionality has been discovered.  Happily, Chrome 22 also introduced
      // the base ArrayBufferView class, not present in Chrome 21.
      if ('ArrayBufferView' in window)
        this.send(ui8a);
      else
        this.send(ui8a);
    };
  } catch (e) {}
})(jQuery);

/*! jQuery.fracs 0.11 - //larsjung.de/fracs - MIT License */
(function (window, document, $) {
'use strict';
/*jslint browser: true, confusion: true, nomen: true, regexp: true, vars: true, white: true */
/*global jQuery */
		// Some often used references.
	var $window = $(window),
		$document = $(document),
		extend = $.extend,
		isFn = $.isFunction,
		slice = [].slice,
		mathMax = Math.max,
		mathMin = Math.min,
		mathRound = Math.round,
		isTypeOf = function (obj, type) {
			return typeof obj === type;
		},
		isInstanceOf = function (obj, type) {
			return obj instanceof type;
		},
		isHTMLElement = function (obj) {
			return obj && obj.nodeType;
		},
		getHTMLElement = function (obj) {
			return isHTMLElement(obj) ? obj : (isInstanceOf(obj, $) ? obj[0] : undefined);
		},
		reduce = function (elements, fn, current) {
			$.each(elements, function (idx, element) {
				current = fn.call(element, current, idx, element);
			});
			return current;
		},
		getId = (function () {
			var ids = {},
				nextId = 1;
			return function (element) {
				if (!element) {
					return 0;
				}
				if (!ids[element]) {
					ids[element] = nextId;
					nextId += 1;
				}
				return ids[element];
			};
		}()),
		equal = function (obj1, obj2, props) {
			var i, l, prop;
			if (obj1 === obj2) {
				return true;
			}
			if (!obj1 || !obj2 || obj1.constructor !== obj2.constructor) {
				return false;
			}
			for (i = 0, l = props.length; i < l; i += 1) {
				prop = props[i];
				if (obj1[prop] && isFn(obj1[prop].equals) && !obj1[prop].equals(obj2[prop])) {
					return false;
				}
				if (obj1[prop] !== obj2[prop]) {
					return false;
				}
			}
			return true;
		};
	// Objects
	// =======
	// Rect
	// ----
	// Holds the position and dimensions of a rectangle. The position might be
	// relative to document, viewport or element space.
	var Rect = function (left, top, width, height) {
		// Top left corner of the rectangle rounded to integers.
		this.left = mathRound(left);
		this.top = mathRound(top);
		// Dimensions rounded to integers.
		this.width = mathRound(width);
		this.height = mathRound(height);
		// Bottom right corner of the rectangle.
		this.right = this.left + this.width;
		this.bottom = this.top + this.height;
	};
	// ### Prototype
	extend(Rect.prototype, {
		// Checks if this instance equals `that` in position and dimensions.
		equals: function (that) {
			return equal(this, that, ['left', 'top', 'width', 'height']);
		},
		// Returns the area of this rectangle.
		area: function () {
			return this.width * this.height;
		},
		// Returns a new `Rect` representig this rect relative to `rect`.
		relativeTo: function (rect) {
			return new Rect(this.left - rect.left, this.top - rect.top, this.width, this.height);
		},
		// Returns a new rectangle representing the intersection of this
		// instance and `rect`. If there is no intersection the return value
		// is `null`.
		intersection: function (rect) {
			if (!isInstanceOf(rect, Rect)) {
				return null;
			}
			var left = mathMax(this.left, rect.left),
				right = mathMin(this.right, rect.right),
				top = mathMax(this.top, rect.top),
				bottom = mathMin(this.bottom, rect.bottom),
				width = right - left,
				height = bottom - top;
			return (width >= 0 && height >= 0) ? new Rect(left, top, width, height) : null;
		},
		// Returns a new rectangle representing the smallest rectangle
		// containing this instance and `rect`.
		envelope: function (rect) {
			if (!isInstanceOf(rect, Rect)) {
				return this;
			}
			var left = mathMin(this.left, rect.left),
				right = mathMax(this.right, rect.right),
				top = mathMin(this.top, rect.top),
				bottom = mathMax(this.bottom, rect.bottom),
				width = right - left,
				height = bottom - top;
			return new Rect(left, top, width, height);
		}
	});
	// ### Static methods
	extend(Rect, {
		// Returns a new instance of `Rect` representing the content of the
		// specified element. Since the coordinates are in content space the
		// `left` and `top` values are always set to `0`. If `inDocSpace` is
		// `true` the rect gets returned in document space.
		ofContent: function (element, inContentSpace) {
			if (!element || element === document || element === window) {
				return new Rect(0, 0, $document.width(), $document.height());
			}
			if (inContentSpace) {
				return new Rect(0, 0, element.scrollWidth, element.scrollHeight);
			} else {
				return new Rect(element.offsetLeft - element.scrollLeft, element.offsetTop - element.scrollTop, element.scrollWidth, element.scrollHeight);
			}
		},
		// Returns a new instance of `Rect` representing the viewport of the
		// specified element. If `inDocSpace` is `true` the rect gets returned
		// in document space instead of content space.
		ofViewport: function (element, inContentSpace) {
			if (!element || element === document || element === window) {
				return new Rect($window.scrollLeft(), $window.scrollTop(), $window.width(), $window.height());
			}
			if (inContentSpace) {
				return new Rect(element.scrollLeft, element.scrollTop, element.clientWidth, element.clientHeight);
			} else {
				return new Rect(element.offsetLeft, element.offsetTop, element.clientWidth, element.clientHeight);
			}
		},
		// Returns a new instance of `Rect` representing a given
		// `HTMLElement`. The dimensions respect padding and border widths. If
		// the element is invisible (as determined by jQuery) the return value
		// is null.
		ofElement: function (element) {
			var $element = $(element);
			if (!$element.is(':visible')) {
				return null;
			}
			var offset = $element.offset();
			return new Rect(offset.left, offset.top, $element.outerWidth(), $element.outerHeight());
		}
	});
	// Fractions
	// ---------
	// The heart of the library. Creates and holds the
	// fractions data for the two specified rects. `viewport` defaults to
	// `Rect.ofViewport()`.
	var Fractions = function (visible, viewport, possible, rects) {
		this.visible = visible || 0;
		this.viewport = viewport || 0;
		this.possible = possible || 0;
		this.rects = (rects && extend({}, rects)) || null;
	};
	// ### Prototype
	extend(Fractions.prototype, {
		// Checks if this instance equals `that` in all attributes.
		equals: function (that) {
			return this.fracsEqual(that) && this.rectsEqual(that);
		},
		// Checks if this instance equals `that` in all fraction attributes.
		fracsEqual: function (that) {
			return equal(this, that, ['visible', 'viewport', 'possible']);
		},
		// Checks if this instance equals `that` in all rectangle attributes.
		rectsEqual: function (that) {
			return equal(this.rects, that.rects, ['document', 'element', 'viewport']);
		}
	});
	// ### Static methods
	extend(Fractions, {
		of: function (rect, viewport) {
			var intersection, intersectionArea, possibleArea;
			rect = (isHTMLElement(rect) && Rect.ofElement(rect)) || rect;
			viewport = (isHTMLElement(viewport) && Rect.ofViewport(viewport)) || viewport || Rect.ofViewport();
			intersection = rect.intersection(viewport);
			if (!intersection) {
				return new Fractions();
			}
			intersectionArea = intersection.area();
			possibleArea = mathMin(rect.width, viewport.width) * mathMin(rect.height, viewport.height);
			return new Fractions(
				intersectionArea / rect.area(),
				intersectionArea / viewport.area(),
				intersectionArea / possibleArea,
				{
					document: intersection,
					element: intersection.relativeTo(rect),
					viewport: intersection.relativeTo(viewport)
				}
			);
		}
	});
	// Group
	// -----
	var Group = function (elements, viewport) {
		this.els = elements;
		this.viewport = viewport;
	};
	// ### Helpers
		// Accepted values for `property` parameters below.
	var rectProps = ['width', 'height', 'left', 'right', 'top', 'bottom'],
		fracsProps = ['possible', 'visible', 'viewport'],
		// Returns the specified `property` for `HTMLElement element` or `0`
		// if `property` is invalid.
		getValue = function (element, viewport, property) {
			var obj;
			if ($.inArray(property, rectProps) >= 0) {
				obj = Rect.ofElement(element);
			} else if ($.inArray(property, fracsProps) >= 0) {
				obj = Fractions.of(element, viewport);
			}
			return obj ? obj[property] : 0;
		},
		// Sorting functions.
		sortAscending = function (entry1, entry2) {
			return entry1.val - entry2.val;
		},
		sortDescending = function (entry1, entry2) {
			return entry2.val - entry1.val;
		};
	// ### Prototype
	extend(Group.prototype, {
		// Returns a sorted list of objects `{el: HTMLElement, val: Number}`
		// for the specified `property`. `descending` defaults to `false`.
		sorted: function (property, descending) {
			var viewport = this.viewport;
			return $.map(this.els, function (element) {
						return {
							el: element,
							val: getValue(element, viewport, property)
						};
					})
					.sort(descending ? sortDescending : sortAscending);
		},
		// Returns the first element of the sorted list returned by `sorted` above,
		// or `null` if this list is empty.
		best: function (property, descending) {
			return this.els.length ? this.sorted(property, descending)[0] : null;
		}
	});
	// ScrollState
	// -----------
	var ScrollState = function (element) {
		var content = Rect.ofContent(element, true),
			viewport = Rect.ofViewport(element, true),
			w = content.width - viewport.width,
			h = content.height - viewport.height;
		this.content = content;
		this.viewport = viewport;
		this.width = w <= 0 ? null : viewport.left / w;
		this.height = h <= 0 ? null : viewport.top / h;
		this.left = viewport.left;
		this.top = viewport.top;
		this.right = content.right - viewport.right;
		this.bottom = content.bottom - viewport.bottom;
	};
	// ### Prototype
	extend(ScrollState.prototype, {
		// Checks if this instance equals `that`.
		equals: function (that) {
			return equal(this, that, ['width', 'height', 'left', 'top', 'right', 'bottom', 'content', 'viewport']);
		}
	});
	// Viewport
	// --------
	var Viewport = function (element) {
		this.el = element || window;
	};
	// ### Prototype
	extend(Viewport.prototype, {
		// Checks if this instance equals `that`.
		equals: function (that) {
			return equal(this, that, ['el']);
		},
		scrollState: function () {
			return new ScrollState(this.el);
		},
		scrollTo: function (left, top, duration) {
			var $el = this.el === window ? $('html,body') : $(this.el);
			left = left || 0;
			top = top || 0;
			duration = isNaN(duration) ? 1000 : duration;
			$el.stop(true).animate({scrollLeft: left, scrollTop: top}, duration);
		},
		scroll: function (left, top, duration) {
			var $el = this.el === window ? $window : $(this.el);
			left = left || 0;
			top = top || 0;
			this.scrollTo($el.scrollLeft() + left, $el.scrollTop() + top, duration);
		},
		scrollToRect: function (rect, paddingLeft, paddingTop, duration) {
			paddingLeft = paddingLeft || 0;
			paddingTop = paddingTop || 0;
			this.scrollTo(rect.left - paddingLeft, rect.top - paddingTop, duration);
		},
		scrollToElement: function (element, paddingLeft, paddingTop, duration) {
			var rect = Rect.ofElement(element).relativeTo(Rect.ofContent(this.el));
			this.scrollToRect(rect, paddingLeft, paddingTop, duration);
		}
	});
	// Callbacks
	// =========
	// callbacks mix-in
	// ----------------
	// Expects `context: HTMLElement` and `updatedValue: function`.
	var callbacksMixIn = {
		// Initial setup.
		init: function () {
			this.callbacks = $.Callbacks('memory unique');
			this.currVal = null;
			this.prevVal = null;
			// A proxy to make `check` bindable to events.
			this.checkProxy = $.proxy(this.check, this);
			this.autoCheck();
		},
		// Adds a new callback function.
		bind: function (callback) {
			this.callbacks.add(callback);
		},
		// Removes a previously added callback function.
		unbind: function (callback) {
			if (callback) {
				this.callbacks.remove(callback);
			} else {
				this.callbacks.empty();
			}
		},
		// Triggers all callbacks with the current values.
		trigger: function () {
			this.callbacks.fireWith(this.context, [this.currVal, this.prevVal]);
		},
		// Checks if value changed, updates attributes `currVal` and
		// `prevVal` accordingly and triggers the callbacks. Returns
		// `true` if value changed, otherwise `false`.
		check: function (event) {
			var value = this.updatedValue(event);
			if (value === undefined) {
				return false;
			}
			this.prevVal = this.currVal;
			this.currVal = value;
			this.trigger();
			return true;
		},
		// Auto-check configuration.
		$autoTarget: $window,
		autoEvents: 'load resize scroll',
		// Enables/disables automated checking for changes on the specified `window`
		// events.
		autoCheck: function (on) {
			this.$autoTarget[on === false ? 'off' : 'on'](this.autoEvents, this.checkProxy);
		}
	};
	// FracsCallbacks
	// --------------
	var FracsCallbacks = function (element, viewport) {
		this.context = element;
		this.viewport = viewport;
		this.init();
	};
	// ### Prototype
	extend(FracsCallbacks.prototype, callbacksMixIn, {
		updatedValue: function () {
			var value = Fractions.of(this.context, this.viewport);
			if (!this.currVal || !this.currVal.equals(value)) {
				return value;
			}
		}
	});
	// GroupCallbacks
	// --------------
	var GroupCallbacks = function (elements, viewport, property, descending) {
		this.context = new Group(elements, viewport);
		this.property = property;
		this.descending = descending;
		this.init();
	};
	// ### Prototype
	extend(GroupCallbacks.prototype, callbacksMixIn, {
		updatedValue: function () {
			var best = this.context.best(this.property, this.descending);
			if (best) {
				best = best.val > 0 ? best.el : null;
				if (this.currVal !== best) {
					return best;
				}
			}
		}
	});
	// ScrollStateCallbacks
	// --------------------
	var ScrollStateCallbacks = function (element) {
		if (!element || element === window || element === document) {
			this.context = window;
		} else {
			this.context = element;
			this.$autoTarget = $(element);
		}
		this.init();
	};
	// ### Prototype
	extend(ScrollStateCallbacks.prototype, callbacksMixIn, {
		updatedValue: function () {
			var value = new ScrollState(this.context);
			if (!this.currVal || !this.currVal.equals(value)) {
				return value;
			}
		}
	});
	// modplug 0.7
	// ===========
	// Use <http://larsjung.de/modplug> to attach the plug-in to jQuery.
	var modplug = function (namespace, options) {
			// Save the initial settings.
		var settings = extend({}, options),
			// Helper function to apply default methods.
			applyMethod = function (obj, args, methodName, methods) {
				// If `methodName` is a function apply it to get the actual
				// method name.
				methodName = isFn(methodName) ? methodName.apply(obj, args) : methodName;
				// If method exists then apply it and return the result ...
				if (isFn(methods[methodName])) {
					return methods[methodName].apply(obj, args);
				}
				// ... otherwise raise an error.
				$.error('Method "' + methodName + '" does not exist on jQuery.' + namespace);
			},
			// This function gets exposed as `$.<namespace>`.
			statics = function () {
				// Try to apply a default method.
				return applyMethod(this, slice.call(arguments), settings.defaultStatic, statics);
			},
			// This function gets exposed as `$(selector).<namespace>`.
			methods = function (method) {
				// If `method` exists then apply it ...
				if (isFn(methods[method])) {
					return methods[method].apply(this, slice.call(arguments, 1));
				}
				// ... otherwise try to apply a default method.
				return applyMethod(this, slice.call(arguments), settings.defaultMethod, methods);
			},
			// Adds/overwrites plug-in methods. This function gets exposed as
			// `$.<namespace>.modplug` to make the plug-in extendable.
			plug = function (options) {
				if (options) {
					extend(statics, options.statics);
					extend(methods, options.methods);
				}
				// Make sure that `$.<namespace>.modplug` points to this
				// function after adding new methods.
				statics.modplug = plug;
			};
		// Save objects or methods previously registered to the desired
		// namespace. They are available via `$.<namespace>.modplug.prev`.
		plug.prev = {
			statics: $[namespace],
			methods: $.fn[namespace]
		};
		// Init the plug-in by adding the specified statics and methods.
		plug(options);
		// Register the plug-in.
		$[namespace] = statics;
		$.fn[namespace] = methods;
	};
	// Register the plug-in
	// ===================
		// The namespace used to register the plug-in and to attach data to
		// elements.
	var namespace = 'fracs';
	// The methods are sorted in alphabetical order. All methods that do not
	// provide a return value will return `this` to enable method chaining.
	modplug(namespace, {
		// Static methods
		// --------------
		// These methods are accessible via `$.fracs.<methodname>`.
		statics: {
			// Build version.
			version: '0.11',
			// Publish object constructors (for testing).
			Rect: Rect,
			Fractions: Fractions,
			Group: Group,
			ScrollState: ScrollState,
			Viewport: Viewport,
			FracsCallbacks: FracsCallbacks,
			GroupCallbacks: GroupCallbacks,
			ScrollStateCallbacks: ScrollStateCallbacks,
			// ### fracs
			// This is the **default method**. So instead of calling
			// `$.fracs.fracs(...)` simply call `$.fracs(...)`.
			//
			// Returns the fractions for a given `Rect` and `viewport`,
			// viewport defaults to `$.fracs.viewport()`.
			//
			//      $.fracs(rect: Rect, [viewport: Rect]): Fractions
			fracs: function (rect, viewport) {
				return Fractions.of(rect, viewport);
			}
		},
		// Instance methods
		// ----------------
		// These methods are accessible via `$(selector).fracs('<methodname>', ...)`.
		methods: {
			// ### 'content'
			// Returns the content rect of the first selected element in content space.
			// If no element is selected it returns the document rect.
			//
			//      .fracs('content'): Rect
			content: function (inContentSpace) {
				return this.length ? Rect.ofContent(this[0], inContentSpace) : null;
			},
			// ### 'envelope'
			// Returns the smallest rectangle that containes all selected elements.
			//
			//      .fracs('envelope'): Rect
			envelope: function () {
				return reduce(this, function (current) {
					var rect = Rect.ofElement(this);
					return current ? current.envelope(rect) : rect;
				});
			},
			// ### 'fracs'
			// This is the **default method**. So the first parameter `'fracs'`
			// can be omitted.
			//
			// Returns the fractions for the first selected element.
			//
			//      .fracs(): Fractions
			//
			// Binds a callback function that will be invoked if fractions have changed
			// after a `window resize` or `window scroll` event.
			//
			//      .fracs(callback(fracs: Fractions, prevFracs: Fractions)): jQuery
			//
			// Unbinds the specified callback function.
			//
			//      .fracs('unbind', callback): jQuery
			//
			// Unbinds all callback functions.
			//
			//      .fracs('unbind'): jQuery
			//
			// Checks if fractions changed and if so invokes all bound callback functions.
			//
			//      .fracs('check'): jQuery
			fracs: function (action, callback, viewport) {
				if (!isTypeOf(action, 'string')) {
					viewport = callback;
					callback = action;
					action = null;
				}
				if (!isFn(callback)) {
					viewport = callback;
					callback = null;
				}
				viewport = getHTMLElement(viewport);
				var ns = namespace + '.fracs.' + getId(viewport);
				if (action === 'unbind') {
					return this.each(function () {
						var cbs = $(this).data(ns);
						if (cbs) {
							cbs.unbind(callback);
						}
					});
				} else if (action === 'check') {
					return this.each(function () {
						var cbs = $(this).data(ns);
						if (cbs) {
							cbs.check();
						}
					});
				} else if (isFn(callback)) {
					return this.each(function () {
						var $this = $(this),
							cbs = $this.data(ns);
						if (!cbs) {
							cbs = new FracsCallbacks(this, viewport);
							$this.data(ns, cbs);
						}
						cbs.bind(callback);
					});
				}
				return this.length ? Fractions.of(this[0], viewport) : null;
			},
			// ### 'intersection'
			// Returns the greatest rectangle that is contained in all selected elements.
			//
			//      .fracs('intersection'): Rect
			intersection: function () {
				return reduce(this, function (current) {
					var rect = Rect.ofElement(this);
					return current ? current.intersection(rect) : rect;
				});
			},
			// ### 'max'
			// Reduces the set of selected elements to those with the maximum value
			// of the specified property.
			// Valid values for property are `possible`, `visible`, `viewport`,
			// `width`, `height`, `left`, `right`, `top`, `bottom`.
			//
			//      .fracs('max', property: String): jQuery
			//
			// Binds a callback function to the set of selected elements that gets
			// triggert whenever the element with the highest value of the specified
			// property changes.
			//
			//      .fracs('max', property: String, callback(best: Element, prevBest: Element)): jQuery
			max: function (property, callback, viewport) {
				if (!isFn(callback)) {
					viewport = callback;
					callback = null;
				}
				viewport = getHTMLElement(viewport);
				if (callback) {
					new GroupCallbacks(this, viewport, property, true).bind(callback);
					return this;
				}
				return this.pushStack(new Group(this, viewport).best(property, true).el);
			},
			// ### 'min'
			// Reduces the set of selected elements to those with the minimum value
			// of the specified property.
			// Valid values for property are `possible`, `visible`, `viewport`,
			// `width`, `height`, `left`, `right`, `top`, `bottom`.
			//
			//      .fracs('min', property: String): jQuery
			//
			// Binds a callback function to the set of selected elements that gets
			// triggert whenever the element with the lowest value of the specified
			// property changes.
			//
			//      .fracs('min', property: String, callback(best: Element, prevBest: Element)): jQuery
			min: function (property, callback, viewport) {
				if (!isFn(callback)) {
					viewport = callback;
					callback = null;
				}
				viewport = getHTMLElement(viewport);
				if (callback) {
					new GroupCallbacks(this, viewport, property).bind(callback);
					return this;
				}
				return this.pushStack(new Group(this, viewport).best(property).el);
			},
			// ### 'rect'
			// Returns the dimensions for the first selected element in document space.
			//
			//      .fracs('rect'): Rect
			rect: function () {
				return this.length ? Rect.ofElement(this[0]) : null;
			},
			// ### 'scrollState'
			// Returns the current scroll state for the first selected element.
			//
			//      .fracs('scrollState'): ScrollState
			//
			// Binds a callback function that will be invoked if scroll state has changed
			// after a `resize` or `scroll` event.
			//
			//      .fracs('scrollState', callback(scrollState: scrollState, prevScrollState: scrollState)): jQuery
			//
			// Unbinds the specified callback function.
			//
			//      .fracs('scrollState', 'unbind', callback): jQuery
			//
			// Unbinds all callback functions.
			//
			//      .fracs('scrollState', 'unbind'): jQuery
			//
			// Checks if scroll state changed and if so invokes all bound callback functions.
			//
			//      .fracs('scrollState', 'check'): jQuery
			scrollState: function (action, callback) {
				var ns = namespace + '.scrollState';
				if (!isTypeOf(action, 'string')) {
					callback = action;
					action = null;
				}
				if (action === 'unbind') {
					return this.each(function () {
						var cbs = $(this).data(ns);
						if (cbs) {
							cbs.unbind(callback);
						}
					});
				} else if (action === 'check') {
					return this.each(function () {
						var cbs = $(this).data(ns);
						if (cbs) {
							cbs.check();
						}
					});
				} else if (isFn(callback)) {
					return this.each(function () {
						var $this = $(this),
							cbs = $this.data(ns);
						if (!cbs) {
							cbs = new ScrollStateCallbacks(this);
							$this.data(ns, cbs);
						}
						cbs.bind(callback);
					});
				}
				return this.length ? new ScrollState(this[0]) : null;
			},
			// ### 'scroll'
			// Scrolls the selected elements relative to its current position,
			// `padding` defaults to `0`, `duration` to `1000`.
			//
			//      .fracs('scroll', element: HTMLElement/jQuery, [paddingLeft: int,] [paddingTop: int,] [duration: int]): jQuery
			scroll: function (left, top, duration) {
				return this.each(function () {
					new Viewport(this).scroll(left, top, duration);
				});
			},
			// ### 'scrollTo'
			// Scrolls the selected elements to the specified element or an absolute position,
			// `padding` defaults to `0`, `duration` to `1000`.
			//
			//      .fracs('scrollTo', element: HTMLElement/jQuery, [paddingLeft: int,] [paddingTop: int,] [duration: int]): jQuery
			//      .fracs('scrollTo', [left: int,] [top: int,] [duration: int]): jQuery
			scrollTo: function (element, paddingLeft, paddingTop, duration) {
				if ($.isNumeric(element)) {
					duration = paddingTop;
					paddingTop = paddingLeft;
					paddingLeft = element;
					element = null;
				}
				element = getHTMLElement(element);
				return this.each(function () {
					if (element) {
						new Viewport(this).scrollToElement(element, paddingLeft, paddingTop, duration);
					} else {
						new Viewport(this).scrollTo(paddingLeft, paddingTop, duration);
					}
				});
			},
			// ### 'scrollToThis'
			// Scrolls the viewport (window) to the first selected element in the specified time,
			// `padding` defaults to `0`, `duration` to `1000`.
			//
			//      .fracs('scrollToThis', [paddingLeft: int,] [paddingTop: int,] [duration: int,] [viewport: HTMLElement/jQuery]): jQuery
			scrollToThis: function (paddingLeft, paddingTop, duration, viewport) {
				viewport = new Viewport(getHTMLElement(viewport));
				viewport.scrollToElement(this[0], paddingLeft, paddingTop, duration);
				return this;
			},
			// ### 'softLink'
			// Converts all selected page intern links `<a href="#...">` into soft links.
			// Uses `scrollTo` to scroll to the location.
			//
			//      .fracs('softLink', [paddingLeft: int,] [paddingTop: int,] [duration: int,] [viewport: HTMLElement/jQuery]): jQuery
			softLink: function (paddingLeft, paddingTop, duration, viewport) {
				viewport = new Viewport(getHTMLElement(viewport));
				return this.filter('a[href^=#]').each(function () {
					var $a = $(this);
					$a.on('click', function () {
						viewport.scrollToElement($($a.attr('href'))[0], paddingLeft, paddingTop, duration);
					});
				});
			},
			// ### 'sort'
			// Sorts the set of selected elements by the specified property.
			// Valid values for property are `possible`, `visible`, `viewport`,
			// `width`, `height`, `left`, `right`, `top`, `bottom`. The default
			// sort order is descending.
			//
			//      .fracs('sort', property: String, [ascending: boolean]): jQuery
			sort: function (property, ascending, viewport) {
				if (!isTypeOf(ascending, 'boolean')) {
					viewport = ascending;
					ascending = null;
				}
				viewport = getHTMLElement(viewport);
				return this.pushStack($.map(new Group(this, viewport).sorted(property, !ascending), function (entry) {
					return entry.el;
				}));
			},
			// ### 'viewport'
			// Returns the current viewport of the first selected element in content space.
			// If no element is selected it returns the document's viewport.
			//
			//      .fracs('viewport'): Rect
			viewport: function (inContentSpace) {
				return this.length ? Rect.ofViewport(this[0], inContentSpace) : null;
			}
		},
		// Defaults
		// --------
		defaultStatic: 'fracs',
		defaultMethod: 'fracs'
	});
}(window, document, jQuery));

/*! Copyright (c) 2013 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.1.3
 *
 * Requires: 1.2.2+
 */
(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'];
    var toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
    var lowestDelta, lowestDeltaXY;
    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }
    $.event.special.mousewheel = {
        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
        },
        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };
    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },
        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }
    });
    function handler(event) {
        var orgEvent = event || window.event,
            args = [].slice.call(arguments, 1),
            delta = 0,
            deltaX = 0,
            deltaY = 0,
            absDelta = 0,
            absDeltaXY = 0,
            fn;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";
        // Old school scrollwheel delta
        if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta; }
        if ( orgEvent.detail )     { delta = orgEvent.detail * -1; }
        // New school wheel delta (wheel event)
        if ( orgEvent.deltaY ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( orgEvent.deltaX ) {
            deltaX = orgEvent.deltaX;
            delta  = deltaX * -1;
        }
        // Webkit
        if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY; }
        if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = orgEvent.wheelDeltaX * -1; }
        // Look for lowest delta to normalize the delta values
        absDelta = Math.abs(delta);
        if ( !lowestDelta || absDelta < lowestDelta ) { lowestDelta = absDelta; }
        absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if ( !lowestDeltaXY || absDeltaXY < lowestDeltaXY ) { lowestDeltaXY = absDeltaXY; }
        // Get a whole value for the deltas
        fn = delta > 0 ? 'floor' : 'ceil';
        delta  = Math[fn](delta / lowestDelta);
        deltaX = Math[fn](deltaX / lowestDeltaXY);
        deltaY = Math[fn](deltaY / lowestDeltaXY);
        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);
        return ($.event.dispatch || $.event.handle).apply(this, args);
    }
}));

/*! jQuery.qrcode 0.4 - //larsjung.de/qrcode - MIT License */

// Uses [QR Code Generator](http://www.d-project.com/qrcode/index.html) (MIT), appended to the end of this file.
// Kudos to [jquery.qrcode.js](http://github.com/jeromeetienne/jquery-qrcode) (MIT).

(function ($) {
	'use strict';

		// Check if canvas is available in the browser (as Modernizr does)
	var canvasAvailable = (function () {

			var elem = document.createElement('canvas');
			return !!(elem.getContext && elem.getContext('2d'));
		}()),

		// Wrapper for the original QR code generator.
		createQr = function (typeNumber, correctLevel, text) {

			// `qrcode` is the single public function that will be defined by the `QR Code Generator`
			// at the end of the file.
			var qr = qrcode(typeNumber, correctLevel);
			qr.addData(text);
			qr.make();

			return qr;
		},

		// Returns a minimal QR code for the given text. Returns `null` if `text`
		// is to long to be encoded. At the moment it should work with up to 271 characters.
		createBestQr = function (text) {

			for (var type = 2; type <= 40; type += 1) {
				try {
					return createQr(type, 'L', text);
				} catch (err) {}
			}

			return null;
		},

		// Draws QR code to the given `canvas` and returns it.
		drawOnCanvas = function (canvas, settings) {

				// some shortcuts to improve compression
			var settings_text = settings.text,
				settings_left = settings.left,
				settings_top = settings.top,
				settings_width = settings.width,
				settings_height = settings.height,
				settings_color = settings.color,
				settings_bgColor = settings.bgColor,

				qr = createBestQr(settings_text),
				$canvas = $(canvas),
				ctx = $canvas[0].getContext('2d');

			if (settings_bgColor) {
				ctx.fillStyle = settings_bgColor;
				ctx.fillRect(settings_left, settings_top, settings_width, settings_height);
			}

			if (qr) {
				var moduleCount = qr.getModuleCount(),
					moduleWidth = settings_width / moduleCount,
					moduleHeight = settings_height / moduleCount,
					row, col;

				ctx.beginPath();
				for (row = 0; row < moduleCount; row += 1) {
					for (col = 0; col < moduleCount; col += 1) {
						if (qr.isDark(row, col)) {
							ctx.rect(settings_left + col * moduleWidth, settings_top + row * moduleHeight, moduleWidth, moduleHeight);
						}
					}
				}
				ctx.fillStyle = settings_color;
				ctx.fill();
			}

			return $canvas;
		},

		// Returns a `canvas` element representing the QR code for the given settings.
		createCanvas = function (settings) {

			var $canvas = $('<canvas/>').attr('width', settings.width).attr('height', settings.height);

			return drawOnCanvas($canvas, settings);
		},

		// Returns a `div` element representing the QR code for the given settings.
		createDiv = function (settings) {

				// some shortcuts to improve compression
			var settings_text = settings.text,
				settings_width = settings.width,
				settings_height = settings.height,
				settings_color = settings.color,
				settings_bgColor = settings.bgColor,
				math_floor = Math.floor,

				qr = createBestQr(settings_text),
				$div = $('<div/>').css({
										position: 'relative',
										left: 0,
										top: 0,
										padding: 0,
										margin: 0,
										width: settings_width,
										height: settings_height
									});

			if (settings_bgColor) {
				$div.css('background-color', settings_bgColor);
			}

			if (qr) {
				var moduleCount = qr.getModuleCount(),
					moduleWidth = math_floor(settings_width / moduleCount),
					moduleHeight = math_floor(settings_height / moduleCount),
					offsetLeft = math_floor(0.5 * (settings_width - moduleWidth * moduleCount)),
					offsetTop = math_floor(0.5 * (settings_height - moduleHeight * moduleCount)),
					row, col;

				for (row = 0; row < moduleCount; row += 1) {
					for (col = 0; col < moduleCount; col += 1) {
						if (qr.isDark(row, col)) {
							$('<div/>')
								.css({
									left: offsetLeft + col * moduleWidth,
									top: offsetTop + row * moduleHeight
								})
								.appendTo($div);
						}
					}
				}

				$div.children()
							.css({
								position: 'absolute',
								padding: 0,
								margin: 0,
								width: moduleWidth,
								height: moduleHeight,
								'background-color': settings_color
							});
			}

			return $div;
		},

		createHTML = function (settings) {

			return canvasAvailable && settings.render === 'canvas' ? createCanvas(settings) : createDiv(settings);
		},

		// Plugin
		// ======

		// Default settings
		// ----------------
		defaults = {

			// render method: `'canvas'` or `'div'`
			render: 'canvas',

			// left and top in pixel if drawn onto existing canvas
			left: 0,
			top: 0,

			// width and height in pixel
			width: 256,
			height: 256,

			// code color
			color: '#000',

			// background color, `null` for transparent background
			bgColor: null,

			// the encoded text
			text: 'no text'
		};

	// Register the plugin
	// -------------------
	$.fn.qrcode = function(options) {

		var settings = $.extend({}, defaults, options);

		return this.each(function () {

			if (this.nodeName.toLowerCase() === 'canvas') {
				drawOnCanvas(this, settings);
			} else {
				$(this).append(createHTML(settings));
			}
		});
	};

	// jQuery.qrcode plug in code ends here

	// QR Code Generator
	// =================
	//---------------------------------------------------------------------
	//
	// QR Code Generator for JavaScript
	//
	// Copyright (c) 2009 Kazuhiko Arase
	//
	// URL: http://www.d-project.com/
	//
	// Licensed under the MIT license:
	//	http://www.opensource.org/licenses/mit-license.php
	//
	// The word 'QR Code' is registered trademark of
	// DENSO WAVE INCORPORATED
	//	http://www.denso-wave.com/qrcode/faqpatent-e.html
	//
	//---------------------------------------------------------------------
	var qrcode = function() {
		//---------------------------------------------------------------------
		// qrcode
		//---------------------------------------------------------------------
		/**
		 * qrcode
		 * @param typeNumber 1 to 10
		 * @param errorCorrectLevel 'L','M','Q','H'
		 */
		var qrcode = function(typeNumber, errorCorrectLevel) {
			var PAD0 = 0xEC;
			var PAD1 = 0x11;
			var _typeNumber = typeNumber;
			var _errorCorrectLevel = QRErrorCorrectLevel[errorCorrectLevel];
			var _modules = null;
			var _moduleCount = 0;
			var _dataCache = null;
			var _dataList = new Array();
			var _this = {};
			var makeImpl = function(test, maskPattern) {
				_moduleCount = _typeNumber * 4 + 17;
				_modules = function(moduleCount) {
					var modules = new Array(moduleCount);
					for (var row = 0; row < moduleCount; row += 1) {
						modules[row] = new Array(moduleCount);
						for (var col = 0; col < moduleCount; col += 1) {
							modules[row][col] = null;
						}
					}
					return modules;
				}(_moduleCount);
				setupPositionProbePattern(0, 0);
				setupPositionProbePattern(_moduleCount - 7, 0);
				setupPositionProbePattern(0, _moduleCount - 7);
				setupPositionAdjustPattern();
				setupTimingPattern();
				setupTypeInfo(test, maskPattern);
				if (_typeNumber >= 7) {
					setupTypeNumber(test);
				}
				if (_dataCache == null) {
					_dataCache = createData(_typeNumber, _errorCorrectLevel, _dataList);
				}
				mapData(_dataCache, maskPattern);
			};
			var setupPositionProbePattern = function(row, col) {
				for (var r = -1; r <= 7; r += 1) {
					if (row + r <= -1 || _moduleCount <= row + r) continue;
					for (var c = -1; c <= 7; c += 1) {
						if (col + c <= -1 || _moduleCount <= col + c) continue;
						if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
								|| (0 <= c && c <= 6 && (r == 0 || r == 6) )
								|| (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
							_modules[row + r][col + c] = true;
						} else {
							_modules[row + r][col + c] = false;
						}
					}
				}
			};
			var getBestMaskPattern = function() {
				var minLostPoint = 0;
				var pattern = 0;
				for (var i = 0; i < 8; i += 1) {
					makeImpl(true, i);
					var lostPoint = QRUtil.getLostPoint(_this);
					if (i == 0 || minLostPoint > lostPoint) {
						minLostPoint = lostPoint;
						pattern = i;
					}
				}
				return pattern;
			};
			var setupTimingPattern = function() {
				for (var r = 8; r < _moduleCount - 8; r += 1) {
					if (_modules[r][6] != null) {
						continue;
					}
					_modules[r][6] = (r % 2 == 0);
				}
				for (var c = 8; c < _moduleCount - 8; c += 1) {
					if (_modules[6][c] != null) {
						continue;
					}
					_modules[6][c] = (c % 2 == 0);
				}
			};
			var setupPositionAdjustPattern = function() {
				var pos = QRUtil.getPatternPosition(_typeNumber);
				for (var i = 0; i < pos.length; i += 1) {
					for (var j = 0; j < pos.length; j += 1) {
						var row = pos[i];
						var col = pos[j];
						if (_modules[row][col] != null) {
							continue;
						}
						for (var r = -2; r <= 2; r += 1) {
							for (var c = -2; c <= 2; c += 1) {
								if (r == -2 || r == 2 || c == -2 || c == 2
										|| (r == 0 && c == 0) ) {
									_modules[row + r][col + c] = true;
								} else {
									_modules[row + r][col + c] = false;
								}
							}
						}
					}
				}
			};
			var setupTypeNumber = function(test) {
				var bits = QRUtil.getBCHTypeNumber(_typeNumber);
				for (var i = 0; i < 18; i += 1) {
					var mod = (!test && ( (bits >> i) & 1) == 1);
					_modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
				}
				for (var i = 0; i < 18; i += 1) {
					var mod = (!test && ( (bits >> i) & 1) == 1);
					_modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
				}
			};
			var setupTypeInfo = function(test, maskPattern) {
				var data = (_errorCorrectLevel << 3) | maskPattern;
				var bits = QRUtil.getBCHTypeInfo(data);
				// vertical
				for (var i = 0; i < 15; i += 1) {
					var mod = (!test && ( (bits >> i) & 1) == 1);
					if (i < 6) {
						_modules[i][8] = mod;
					} else if (i < 8) {
						_modules[i + 1][8] = mod;
					} else {
						_modules[_moduleCount - 15 + i][8] = mod;
					}
				}
				// horizontal
				for (var i = 0; i < 15; i += 1) {
					var mod = (!test && ( (bits >> i) & 1) == 1);
					if (i < 8) {
						_modules[8][_moduleCount - i - 1] = mod;
					} else if (i < 9) {
						_modules[8][15 - i - 1 + 1] = mod;
					} else {
						_modules[8][15 - i - 1] = mod;
					}
				}
				// fixed module
				_modules[_moduleCount - 8][8] = (!test);
			};
			var mapData = function(data, maskPattern) {
				var inc = -1;
				var row = _moduleCount - 1;
				var bitIndex = 7;
				var byteIndex = 0;
				var maskFunc = QRUtil.getMaskFunction(maskPattern);
				for (var col = _moduleCount - 1; col > 0; col -= 2) {
					if (col == 6) col -= 1;
					while (true) {
						for (var c = 0; c < 2; c += 1) {
							if (_modules[row][col - c] == null) {
								var dark = false;
								if (byteIndex < data.length) {
									dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
								}
								var mask = maskFunc(row, col - c);
								if (mask) {
									dark = !dark;
								}
								_modules[row][col - c] = dark;
								bitIndex -= 1;
								if (bitIndex == -1) {
									byteIndex += 1;
									bitIndex = 7;
								}
							}
						}
						row += inc;
						if (row < 0 || _moduleCount <= row) {
							row -= inc;
							inc = -inc;
							break;
						}
					}
				}
			};
			var createBytes = function(buffer, rsBlocks) {
				var offset = 0;
				var maxDcCount = 0;
				var maxEcCount = 0;
				var dcdata = new Array(rsBlocks.length);
				var ecdata = new Array(rsBlocks.length);
				for (var r = 0; r < rsBlocks.length; r += 1) {
					var dcCount = rsBlocks[r].dataCount;
					var ecCount = rsBlocks[r].totalCount - dcCount;
					maxDcCount = Math.max(maxDcCount, dcCount);
					maxEcCount = Math.max(maxEcCount, ecCount);
					dcdata[r] = new Array(dcCount);
					for (var i = 0; i < dcdata[r].length; i += 1) {
						dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
					}
					offset += dcCount;
					var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
					var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);
					var modPoly = rawPoly.mod(rsPoly);
					ecdata[r] = new Array(rsPoly.getLength() - 1);
					for (var i = 0; i < ecdata[r].length; i += 1) {
						var modIndex = i + modPoly.getLength() - ecdata[r].length;
						ecdata[r][i] = (modIndex >= 0)? modPoly.get(modIndex) : 0;
					}
				}
				var totalCodeCount = 0;
				for (var i = 0; i < rsBlocks.length; i += 1) {
					totalCodeCount += rsBlocks[i].totalCount;
				}
				var data = new Array(totalCodeCount);
				var index = 0;
				for (var i = 0; i < maxDcCount; i += 1) {
					for (var r = 0; r < rsBlocks.length; r += 1) {
						if (i < dcdata[r].length) {
							data[index] = dcdata[r][i];
							index += 1;
						}
					}
				}
				for (var i = 0; i < maxEcCount; i += 1) {
					for (var r = 0; r < rsBlocks.length; r += 1) {
						if (i < ecdata[r].length) {
							data[index] = ecdata[r][i];
							index += 1;
						}
					}
				}
				return data;
			};
			var createData = function(typeNumber, errorCorrectLevel, dataList) {
				var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
				var buffer = qrBitBuffer();
				for (var i = 0; i < dataList.length; i += 1) {
					var data = dataList[i];
					buffer.put(data.getMode(), 4);
					buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
					data.write(buffer);
				}
				// calc num max data.
				var totalDataCount = 0;
				for (var i = 0; i < rsBlocks.length; i += 1) {
					totalDataCount += rsBlocks[i].dataCount;
				}
				if (buffer.getLengthInBits() > totalDataCount * 8) {
					throw new Error('code length overflow. ('
						+ buffer.getLengthInBits()
						+ '>'
						+ totalDataCount * 8
						+ ')');
				}
				// end code
				if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
					buffer.put(0, 4);
				}
				// padding
				while (buffer.getLengthInBits() % 8 != 0) {
					buffer.putBit(false);
				}
				// padding
				while (true) {
					if (buffer.getLengthInBits() >= totalDataCount * 8) {
						break;
					}
					buffer.put(PAD0, 8);
					if (buffer.getLengthInBits() >= totalDataCount * 8) {
						break;
					}
					buffer.put(PAD1, 8);
				}
				return createBytes(buffer, rsBlocks);
			};
			_this.addData = function(data) {
				var newData = qr8BitByte(data);
				_dataList.push(newData);
				_dataCache = null;
			};
			_this.isDark = function(row, col) {
				if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
					throw new Error(row + ',' + col);
				}
				return _modules[row][col];
			};
			_this.getModuleCount = function() {
				return _moduleCount;
			};
			_this.make = function() {
				makeImpl(false, getBestMaskPattern() );
			};
			_this.createTableTag = function(cellSize, margin) {
				cellSize = cellSize || 2;
				margin = (typeof margin == 'undefined')? cellSize * 4 : margin;
				var qrHtml = '';
				qrHtml += '<table style="';
				qrHtml += ' border-width: 0px; border-style: none;';
				qrHtml += ' border-collapse: collapse;';
				qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
				qrHtml += '">';
				qrHtml += '<tbody>';
				for (var r = 0; r < _this.getModuleCount(); r += 1) {
					qrHtml += '<tr>';
					for (var c = 0; c < _this.getModuleCount(); c += 1) {
						qrHtml += '<td style="';
						qrHtml += ' border-width: 0px; border-style: none;';
						qrHtml += ' border-collapse: collapse;';
						qrHtml += ' padding: 0px; margin: 0px;';
						qrHtml += ' width: ' + cellSize + 'px;';
						qrHtml += ' height: ' + cellSize + 'px;';
						qrHtml += ' background-color: ';
						qrHtml += _this.isDark(r, c)? '#000000' : '#ffffff';
						qrHtml += ';';
						qrHtml += '"/>';
					}
					qrHtml += '</tr>';
				}
				qrHtml += '</tbody>';
				qrHtml += '</table>';
				return qrHtml;
			};
			_this.createImgTag = function(cellSize, margin) {
				cellSize = cellSize || 2;
				margin = (typeof margin == 'undefined')? cellSize * 4 : margin;
				var size = _this.getModuleCount() * cellSize + margin * 2;
				var min = margin;
				var max = size - margin;
				return createImgTag(size, size, function(x, y) {
					if (min <= x && x < max && min <= y && y < max) {
						var c = Math.floor( (x - min) / cellSize);
						var r = Math.floor( (y - min) / cellSize);
						return _this.isDark(r, c)? 0 : 1;
					} else {
						return 1;
					}
				} );
			};
			return _this;
		};
		//---------------------------------------------------------------------
		// qrcode.stringToBytes
		//---------------------------------------------------------------------
		qrcode.stringToBytes = function(s) {
			var bytes = new Array();
			for (var i = 0; i < s.length; i += 1) {
				var c = s.charCodeAt(i);
				bytes.push(c & 0xff);
			}
			return bytes;
		};
		//---------------------------------------------------------------------
		// qrcode.createStringToBytes
		//---------------------------------------------------------------------
		/**
		 * @param unicodeData base64 string of byte array.
		 * [16bit Unicode],[16bit Bytes], ...
		 * @param numChars
		 */
		qrcode.createStringToBytes = function(unicodeData, numChars) {
			// create conversion map.
			var unicodeMap = function() {
				var bin = base64DecodeInputStream(unicodeData);
				var read = function() {
					var b = bin.read();
					if (b == -1) throw new Error();
					return b;
				};
				var count = 0;
				var unicodeMap = {};
				while (true) {
					var b0 = bin.read();
					if (b0 == -1) break;
					var b1 = read();
					var b2 = read();
					var b3 = read();
					var k = String.fromCharCode( (b0 << 8) | b1);
					var v = (b2 << 8) | b3;
					unicodeMap[k] = v;
					count += 1;
				}
				if (count != numChars) {
					throw new Error(count + ' != ' + numChars);
				}
				return unicodeMap;
			}();
			var unknownChar = '?'.charCodeAt(0);
			return function(s) {
				var bytes = new Array();
				for (var i = 0; i < s.length; i += 1) {
					var c = s.charCodeAt(i);
					if (c < 128) {
						bytes.push(c);
					} else {
						var b = unicodeMap[s.charAt(i)];
						if (typeof b == 'number') {
							if ( (b & 0xff) == b) {
								// 1byte
								bytes.push(b);
							} else {
								// 2bytes
								bytes.push(b >>> 8);
								bytes.push(b & 0xff);
							}
						} else {
							bytes.push(unknownChar);
						}
					}
				}
				return bytes;
			};
		};
		//---------------------------------------------------------------------
		// QRMode
		//---------------------------------------------------------------------
		var QRMode = {
			MODE_NUMBER :		1 << 0,
			MODE_ALPHA_NUM : 	1 << 1,
			MODE_8BIT_BYTE : 	1 << 2,
			MODE_KANJI :		1 << 3
		};
		//---------------------------------------------------------------------
		// QRErrorCorrectLevel
		//---------------------------------------------------------------------
		var QRErrorCorrectLevel = {
			L : 1,
			M : 0,
			Q : 3,
			H : 2
		};
		//---------------------------------------------------------------------
		// QRMaskPattern
		//---------------------------------------------------------------------
		var QRMaskPattern = {
			PATTERN000 : 0,
			PATTERN001 : 1,
			PATTERN010 : 2,
			PATTERN011 : 3,
			PATTERN100 : 4,
			PATTERN101 : 5,
			PATTERN110 : 6,
			PATTERN111 : 7
		};
		//---------------------------------------------------------------------
		// QRUtil
		//---------------------------------------------------------------------
		var QRUtil = function() {
			var PATTERN_POSITION_TABLE = [
				[],
				[6, 18],
				[6, 22],
				[6, 26],
				[6, 30],
				[6, 34],
				[6, 22, 38],
				[6, 24, 42],
				[6, 26, 46],
				[6, 28, 50],
				[6, 30, 54],
				[6, 32, 58],
				[6, 34, 62],
				[6, 26, 46, 66],
				[6, 26, 48, 70],
				[6, 26, 50, 74],
				[6, 30, 54, 78],
				[6, 30, 56, 82],
				[6, 30, 58, 86],
				[6, 34, 62, 90],
				[6, 28, 50, 72, 94],
				[6, 26, 50, 74, 98],
				[6, 30, 54, 78, 102],
				[6, 28, 54, 80, 106],
				[6, 32, 58, 84, 110],
				[6, 30, 58, 86, 114],
				[6, 34, 62, 90, 118],
				[6, 26, 50, 74, 98, 122],
				[6, 30, 54, 78, 102, 126],
				[6, 26, 52, 78, 104, 130],
				[6, 30, 56, 82, 108, 134],
				[6, 34, 60, 86, 112, 138],
				[6, 30, 58, 86, 114, 142],
				[6, 34, 62, 90, 118, 146],
				[6, 30, 54, 78, 102, 126, 150],
				[6, 24, 50, 76, 102, 128, 154],
				[6, 28, 54, 80, 106, 132, 158],
				[6, 32, 58, 84, 110, 136, 162],
				[6, 26, 54, 82, 110, 138, 166],
				[6, 30, 58, 86, 114, 142, 170]
			];
			var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
			var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
			var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);
			var _this = {};
			var getBCHDigit = function(data) {
				var digit = 0;
				while (data != 0) {
					digit += 1;
					data >>>= 1;
				}
				return digit;
			};
			_this.getBCHTypeInfo = function(data) {
				var d = data << 10;
				while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
					d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15) ) );
				}
				return ( (data << 10) | d) ^ G15_MASK;
			};
			_this.getBCHTypeNumber = function(data) {
				var d = data << 12;
				while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
					d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18) ) );
				}
				return (data << 12) | d;
			};
			_this.getPatternPosition = function(typeNumber) {
				return PATTERN_POSITION_TABLE[typeNumber - 1];
			};
			_this.getMaskFunction = function(maskPattern) {
				switch (maskPattern) {
				case QRMaskPattern.PATTERN000 :
					return function(i, j) { return (i + j) % 2 == 0; };
				case QRMaskPattern.PATTERN001 :
					return function(i, j) { return i % 2 == 0; };
				case QRMaskPattern.PATTERN010 :
					return function(i, j) { return j % 3 == 0; };
				case QRMaskPattern.PATTERN011 :
					return function(i, j) { return (i + j) % 3 == 0; };
				case QRMaskPattern.PATTERN100 :
					return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0; };
				case QRMaskPattern.PATTERN101 :
					return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };
				case QRMaskPattern.PATTERN110 :
					return function(i, j) { return ( (i * j) % 2 + (i * j) % 3) % 2 == 0; };
				case QRMaskPattern.PATTERN111 :
					return function(i, j) { return ( (i * j) % 3 + (i + j) % 2) % 2 == 0; };
				default :
					throw new Error('bad maskPattern:' + maskPattern);
				}
			};
			_this.getErrorCorrectPolynomial = function(errorCorrectLength) {
				var a = qrPolynomial([1], 0);
				for (var i = 0; i < errorCorrectLength; i += 1) {
					a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0) );
				}
				return a;
			};
			_this.getLengthInBits = function(mode, type) {
				if (1 <= type && type < 10) {
					// 1 - 9
					switch(mode) {
					case QRMode.MODE_NUMBER 	: return 10;
					case QRMode.MODE_ALPHA_NUM 	: return 9;
					case QRMode.MODE_8BIT_BYTE	: return 8;
					case QRMode.MODE_KANJI		: return 8;
					default :
						throw new Error('mode:' + mode);
					}
				} else if (type < 27) {
					// 10 - 26
					switch(mode) {
					case QRMode.MODE_NUMBER 	: return 12;
					case QRMode.MODE_ALPHA_NUM 	: return 11;
					case QRMode.MODE_8BIT_BYTE	: return 16;
					case QRMode.MODE_KANJI		: return 10;
					default :
						throw new Error('mode:' + mode);
					}
				} else if (type < 41) {
					// 27 - 40
					switch(mode) {
					case QRMode.MODE_NUMBER 	: return 14;
					case QRMode.MODE_ALPHA_NUM	: return 13;
					case QRMode.MODE_8BIT_BYTE	: return 16;
					case QRMode.MODE_KANJI		: return 12;
					default :
						throw new Error('mode:' + mode);
					}
				} else {
					throw new Error('type:' + type);
				}
			};
			_this.getLostPoint = function(qrcode) {
				var moduleCount = qrcode.getModuleCount();
				var lostPoint = 0;
				// LEVEL1
				for (var row = 0; row < moduleCount; row += 1) {
					for (var col = 0; col < moduleCount; col += 1) {
						var sameCount = 0;
						var dark = qrcode.isDark(row, col);
						for (var r = -1; r <= 1; r += 1) {
							if (row + r < 0 || moduleCount <= row + r) {
								continue;
							}
							for (var c = -1; c <= 1; c += 1) {
								if (col + c < 0 || moduleCount <= col + c) {
									continue;
								}
								if (r == 0 && c == 0) {
									continue;
								}
								if (dark == qrcode.isDark(row + r, col + c) ) {
									sameCount += 1;
								}
							}
						}
						if (sameCount > 5) {
							lostPoint += (3 + sameCount - 5);
						}
					}
				};
				// LEVEL2
				for (var row = 0; row < moduleCount - 1; row += 1) {
					for (var col = 0; col < moduleCount - 1; col += 1) {
						var count = 0;
						if (qrcode.isDark(row, col) ) count += 1;
						if (qrcode.isDark(row + 1, col) ) count += 1;
						if (qrcode.isDark(row, col + 1) ) count += 1;
						if (qrcode.isDark(row + 1, col + 1) ) count += 1;
						if (count == 0 || count == 4) {
							lostPoint += 3;
						}
					}
				}
				// LEVEL3
				for (var row = 0; row < moduleCount; row += 1) {
					for (var col = 0; col < moduleCount - 6; col += 1) {
						if (qrcode.isDark(row, col)
								&& !qrcode.isDark(row, col + 1)
								&&  qrcode.isDark(row, col + 2)
								&&  qrcode.isDark(row, col + 3)
								&&  qrcode.isDark(row, col + 4)
								&& !qrcode.isDark(row, col + 5)
								&&  qrcode.isDark(row, col + 6) ) {
							lostPoint += 40;
						}
					}
				}
				for (var col = 0; col < moduleCount; col += 1) {
					for (var row = 0; row < moduleCount - 6; row += 1) {
						if (qrcode.isDark(row, col)
								&& !qrcode.isDark(row + 1, col)
								&&  qrcode.isDark(row + 2, col)
								&&  qrcode.isDark(row + 3, col)
								&&  qrcode.isDark(row + 4, col)
								&& !qrcode.isDark(row + 5, col)
								&&  qrcode.isDark(row + 6, col) ) {
							lostPoint += 40;
						}
					}
				}
				// LEVEL4
				var darkCount = 0;
				for (var col = 0; col < moduleCount; col += 1) {
					for (var row = 0; row < moduleCount; row += 1) {
						if (qrcode.isDark(row, col) ) {
							darkCount += 1;
						}
					}
				}
				var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
				lostPoint += ratio * 10;
				return lostPoint;
			};
			return _this;
		}();
		//---------------------------------------------------------------------
		// QRMath
		//---------------------------------------------------------------------
		var QRMath = function() {
			var EXP_TABLE = new Array(256);
			var LOG_TABLE = new Array(256);
			// initialize tables
			for (var i = 0; i < 8; i += 1) {
				EXP_TABLE[i] = 1 << i;
			}
			for (var i = 8; i < 256; i += 1) {
				EXP_TABLE[i] = EXP_TABLE[i - 4]
					^ EXP_TABLE[i - 5]
					^ EXP_TABLE[i - 6]
					^ EXP_TABLE[i - 8];
			}
			for (var i = 0; i < 255; i += 1) {
				LOG_TABLE[EXP_TABLE[i] ] = i;
			}
			var _this = {};
			_this.glog = function(n) {
				if (n < 1) {
					throw new Error('glog(' + n + ')');
				}
				return LOG_TABLE[n];
			};
			_this.gexp = function(n) {
				while (n < 0) {
					n += 255;
				}
				while (n >= 256) {
					n -= 255;
				}
				return EXP_TABLE[n];
			};
			return _this;
		}();
		//---------------------------------------------------------------------
		// qrPolynomial
		//---------------------------------------------------------------------
		function qrPolynomial(num, shift) {
			if (typeof num.length == 'undefined') {
				throw new Error(num.length + '/' + shift);
			}
			var _num = function() {
				var offset = 0;
				while (offset < num.length && num[offset] == 0) {
					offset += 1;
				}
				var _num = new Array(num.length - offset + shift);
				for (var i = 0; i < num.length - offset; i += 1) {
					_num[i] = num[i + offset];
				}
				return _num;
			}();
			var _this = {};
			_this.get = function(index) {
				return _num[index];
			};
			_this.getLength = function() {
				return _num.length;
			};
			_this.multiply = function(e) {
				var num = new Array(_this.getLength() + e.getLength() - 1);
				for (var i = 0; i < _this.getLength(); i += 1) {
					for (var j = 0; j < e.getLength(); j += 1) {
						num[i + j] ^= QRMath.gexp(QRMath.glog(_this.get(i) ) + QRMath.glog(e.get(j) ) );
					}
				}
				return qrPolynomial(num, 0);
			};
			_this.mod = function(e) {
				if (_this.getLength() - e.getLength() < 0) {
					return _this;
				}
				var ratio = QRMath.glog(_this.get(0) ) - QRMath.glog(e.get(0) );
				var num = new Array(_this.getLength() );
				for (var i = 0; i < _this.getLength(); i += 1) {
					num[i] = _this.get(i);
				}
				for (var i = 0; i < e.getLength(); i += 1) {
					num[i] ^= QRMath.gexp(QRMath.glog(e.get(i) ) + ratio);
				}
				// recursive call
				return qrPolynomial(num, 0).mod(e);
			};
			return _this;
		};
		//---------------------------------------------------------------------
		// QRRSBlock
		//---------------------------------------------------------------------
		var QRRSBlock = function() {
			var RS_BLOCK_TABLE = [
				// L
				// M
				// Q
				// H
				// 1
				[1, 26, 19],
				[1, 26, 16],
				[1, 26, 13],
				[1, 26, 9],
				// 2
				[1, 44, 34],
				[1, 44, 28],
				[1, 44, 22],
				[1, 44, 16],
				// 3
				[1, 70, 55],
				[1, 70, 44],
				[2, 35, 17],
				[2, 35, 13],
				// 4
				[1, 100, 80],
				[2, 50, 32],
				[2, 50, 24],
				[4, 25, 9],
				// 5
				[1, 134, 108],
				[2, 67, 43],
				[2, 33, 15, 2, 34, 16],
				[2, 33, 11, 2, 34, 12],
				// 6
				[2, 86, 68],
				[4, 43, 27],
				[4, 43, 19],
				[4, 43, 15],
				// 7
				[2, 98, 78],
				[4, 49, 31],
				[2, 32, 14, 4, 33, 15],
				[4, 39, 13, 1, 40, 14],
				// 8
				[2, 121, 97],
				[2, 60, 38, 2, 61, 39],
				[4, 40, 18, 2, 41, 19],
				[4, 40, 14, 2, 41, 15],
				// 9
				[2, 146, 116],
				[3, 58, 36, 2, 59, 37],
				[4, 36, 16, 4, 37, 17],
				[4, 36, 12, 4, 37, 13],
				// 10
				[2, 86, 68, 2, 87, 69],
				[4, 69, 43, 1, 70, 44],
				[6, 43, 19, 2, 44, 20],
				[6, 43, 15, 2, 44, 16],
				// 11
				[4, 101, 81],
				[1, 80, 50, 4, 81, 51],
				[4, 50, 22, 4, 51, 23],
				[3, 36, 12, 8, 37, 13],
				// 12
				[2, 116, 92, 2, 117, 93],
				[6, 58, 36, 2, 59, 37],
				[4, 46, 20, 6, 47, 21],
				[7, 42, 14, 4, 43, 15],
				// 13
				[4, 133, 107],
				[8, 59, 37, 1, 60, 38],
				[8, 44, 20, 4, 45, 21],
				[12, 33, 11, 4, 34, 12],
				// 14
				[3, 145, 115, 1, 146, 116],
				[4, 64, 40, 5, 65, 41],
				[11, 36, 16, 5, 37, 17],
				[11, 36, 12, 5, 37, 13],
				// 15
				[5, 109, 87, 1, 110, 88],
				[5, 65, 41, 5, 66, 42],
				[5, 54, 24, 7, 55, 25],
				[11, 36, 12],
				// 16
				[5, 122, 98, 1, 123, 99],
				[7, 73, 45, 3, 74, 46],
				[15, 43, 19, 2, 44, 20],
				[3, 45, 15, 13, 46, 16],
				// 17
				[1, 135, 107, 5, 136, 108],
				[10, 74, 46, 1, 75, 47],
				[1, 50, 22, 15, 51, 23],
				[2, 42, 14, 17, 43, 15],
				// 18
				[5, 150, 120, 1, 151, 121],
				[9, 69, 43, 4, 70, 44],
				[17, 50, 22, 1, 51, 23],
				[2, 42, 14, 19, 43, 15],
				// 19
				[3, 141, 113, 4, 142, 114],
				[3, 70, 44, 11, 71, 45],
				[17, 47, 21, 4, 48, 22],
				[9, 39, 13, 16, 40, 14],
				// 20
				[3, 135, 107, 5, 136, 108],
				[3, 67, 41, 13, 68, 42],
				[15, 54, 24, 5, 55, 25],
				[15, 43, 15, 10, 44, 16],
				// 21
				[4, 144, 116, 4, 145, 117],
				[17, 68, 42],
				[17, 50, 22, 6, 51, 23],
				[19, 46, 16, 6, 47, 17],
				// 22
				[2, 139, 111, 7, 140, 112],
				[17, 74, 46],
				[7, 54, 24, 16, 55, 25],
				[34, 37, 13],
				// 23
				[4, 151, 121, 5, 152, 122],
				[4, 75, 47, 14, 76, 48],
				[11, 54, 24, 14, 55, 25],
				[16, 45, 15, 14, 46, 16],
				// 24
				[6, 147, 117, 4, 148, 118],
				[6, 73, 45, 14, 74, 46],
				[11, 54, 24, 16, 55, 25],
				[30, 46, 16, 2, 47, 17],
				// 25
				[8, 132, 106, 4, 133, 107],
				[8, 75, 47, 13, 76, 48],
				[7, 54, 24, 22, 55, 25],
				[22, 45, 15, 13, 46, 16],
				// 26
				[10, 142, 114, 2, 143, 115],
				[19, 74, 46, 4, 75, 47],
				[28, 50, 22, 6, 51, 23],
				[33, 46, 16, 4, 47, 17],
				// 27
				[8, 152, 122, 4, 153, 123],
				[22, 73, 45, 3, 74, 46],
				[8, 53, 23, 26, 54, 24],
				[12, 45, 15, 28, 46, 16],
				// 28
				[3, 147, 117, 10, 148, 118],
				[3, 73, 45, 23, 74, 46],
				[4, 54, 24, 31, 55, 25],
				[11, 45, 15, 31, 46, 16],
				// 29
				[7, 146, 116, 7, 147, 117],
				[21, 73, 45, 7, 74, 46],
				[1, 53, 23, 37, 54, 24],
				[19, 45, 15, 26, 46, 16],
				// 30
				[5, 145, 115, 10, 146, 116],
				[19, 75, 47, 10, 76, 48],
				[15, 54, 24, 25, 55, 25],
				[23, 45, 15, 25, 46, 16],
				// 31
				[13, 145, 115, 3, 146, 116],
				[2, 74, 46, 29, 75, 47],
				[42, 54, 24, 1, 55, 25],
				[23, 45, 15, 28, 46, 16],
				// 32
				[17, 145, 115],
				[10, 74, 46, 23, 75, 47],
				[10, 54, 24, 35, 55, 25],
				[19, 45, 15, 35, 46, 16],
				// 33
				[17, 145, 115, 1, 146, 116],
				[14, 74, 46, 21, 75, 47],
				[29, 54, 24, 19, 55, 25],
				[11, 45, 15, 46, 46, 16],
				// 34
				[13, 145, 115, 6, 146, 116],
				[14, 74, 46, 23, 75, 47],
				[44, 54, 24, 7, 55, 25],
				[59, 46, 16, 1, 47, 17],
				// 35
				[12, 151, 121, 7, 152, 122],
				[12, 75, 47, 26, 76, 48],
				[39, 54, 24, 14, 55, 25],
				[22, 45, 15, 41, 46, 16],
				// 36
				[6, 151, 121, 14, 152, 122],
				[6, 75, 47, 34, 76, 48],
				[46, 54, 24, 10, 55, 25],
				[2, 45, 15, 64, 46, 16],
				// 37
				[17, 152, 122, 4, 153, 123],
				[29, 74, 46, 14, 75, 47],
				[49, 54, 24, 10, 55, 25],
				[24, 45, 15, 46, 46, 16],
				// 38
				[4, 152, 122, 18, 153, 123],
				[13, 74, 46, 32, 75, 47],
				[48, 54, 24, 14, 55, 25],
				[42, 45, 15, 32, 46, 16],
				// 39
				[20, 147, 117, 4, 148, 118],
				[40, 75, 47, 7, 76, 48],
				[43, 54, 24, 22, 55, 25],
				[10, 45, 15, 67, 46, 16],
				// 40
				[19, 148, 118, 6, 149, 119],
				[18, 75, 47, 31, 76, 48],
				[34, 54, 24, 34, 55, 25],
				[20, 45, 15, 61, 46, 16]
			];
			var qrRSBlock = function(totalCount, dataCount) {
				var _this = {};
				_this.totalCount = totalCount;
				_this.dataCount = dataCount;
				return _this;
			};
			var _this = {};
			var getRsBlockTable = function(typeNumber, errorCorrectLevel) {
				switch(errorCorrectLevel) {
				case QRErrorCorrectLevel.L :
					return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
				case QRErrorCorrectLevel.M :
					return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
				case QRErrorCorrectLevel.Q :
					return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
				case QRErrorCorrectLevel.H :
					return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
				default :
					return undefined;
				}
			};
			_this.getRSBlocks = function(typeNumber, errorCorrectLevel) {
				var rsBlock = getRsBlockTable(typeNumber, errorCorrectLevel);
				if (typeof rsBlock == 'undefined') {
					throw new Error('bad rs block @ typeNumber:' + typeNumber +
							'/errorCorrectLevel:' + errorCorrectLevel);
				}
				var length = rsBlock.length / 3;
				var list = new Array();
				for (var i = 0; i < length; i += 1) {
					var count = rsBlock[i * 3 + 0];
					var totalCount = rsBlock[i * 3 + 1];
					var dataCount = rsBlock[i * 3 + 2];
					for (var j = 0; j < count; j += 1) {
						list.push(qrRSBlock(totalCount, dataCount) );
					}
				}
				return list;
			};
			return _this;
		}();
		//---------------------------------------------------------------------
		// qrBitBuffer
		//---------------------------------------------------------------------
		var qrBitBuffer = function() {
			var _buffer = new Array();
			var _length = 0;
			var _this = {};
			_this.getBuffer = function() {
				return _buffer;
			};
			_this.get = function(index) {
				var bufIndex = Math.floor(index / 8);
				return ( (_buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
			};
			_this.put = function(num, length) {
				for (var i = 0; i < length; i += 1) {
					_this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
				}
			};
			_this.getLengthInBits = function() {
				return _length;
			};
			_this.putBit = function(bit) {
				var bufIndex = Math.floor(_length / 8);
				if (_buffer.length <= bufIndex) {
					_buffer.push(0);
				}
				if (bit) {
					_buffer[bufIndex] |= (0x80 >>> (_length % 8) );
				}
				_length += 1;
			};
			return _this;
		};
		//---------------------------------------------------------------------
		// qr8BitByte
		//---------------------------------------------------------------------
		var qr8BitByte = function(data) {
			var _mode = QRMode.MODE_8BIT_BYTE;
			var _data = data;
			var _bytes = qrcode.stringToBytes(data);
			var _this = {};
			_this.getMode = function() {
				return _mode;
			};
			_this.getLength = function(buffer) {
				return _bytes.length;
			};
			_this.write = function(buffer) {
				for (var i = 0; i < _bytes.length; i += 1) {
					buffer.put(_bytes[i], 8);
				}
			};
			return _this;
		};
		//=====================================================================
		// GIF Support etc.
		//
		//---------------------------------------------------------------------
		// byteArrayOutputStream
		//---------------------------------------------------------------------
		var byteArrayOutputStream = function() {
			var _bytes = new Array();
			var _this = {};
			_this.writeByte = function(b) {
				_bytes.push(b & 0xff);
			};
			_this.writeShort = function(i) {
				_this.writeByte(i);
				_this.writeByte(i >>> 8);
			};
			_this.writeBytes = function(b, off, len) {
				off = off || 0;
				len = len || b.length;
				for (var i = 0; i < len; i += 1) {
					_this.writeByte(b[i + off]);
				}
			};
			_this.writeString = function(s) {
				for (var i = 0; i < s.length; i += 1) {
					_this.writeByte(s.charCodeAt(i) );
				}
			};
			_this.toByteArray = function() {
				return _bytes;
			};
			_this.toString = function() {
				var s = '';
				s += '[';
				for (var i = 0; i < _bytes.length; i += 1) {
					if (i > 0) {
						s += ',';
					}
					s += _bytes[i];
				}
				s += ']';
				return s;
			};
			return _this;
		};
		//---------------------------------------------------------------------
		// base64EncodeOutputStream
		//---------------------------------------------------------------------
		var base64EncodeOutputStream = function() {
			var _buffer = 0;
			var _buflen = 0;
			var _length = 0;
			var _base64 = '';
			var _this = {};
			var writeEncoded = function(b) {
				_base64 += String.fromCharCode(encode(b & 0x3f) );
			};
			var encode = function(n) {
				if (n < 0) {
					// error.
				} else if (n < 26) {
					return 0x41 + n;
				} else if (n < 52) {
					return 0x61 + (n - 26);
				} else if (n < 62) {
					return 0x30 + (n - 52);
				} else if (n == 62) {
					return 0x2b;
				} else if (n == 63) {
					return 0x2f;
				}
				throw new Error('n:' + n);
			};
			_this.writeByte = function(n) {
				_buffer = (_buffer << 8) | (n & 0xff);
				_buflen += 8;
				_length += 1;
				while (_buflen >= 6) {
					writeEncoded(_buffer >>> (_buflen - 6) );
					_buflen -= 6;
				}
			};
			_this.flush = function() {
				if (_buflen > 0) {
					writeEncoded(_buffer << (6 - _buflen) );
					_buffer = 0;
					_buflen = 0;
				}
				if (_length % 3 != 0) {
					// padding
					var padlen = 3 - _length % 3;
					for (var i = 0; i < padlen; i += 1) {
						_base64 += '=';
					}
				}
			};
			_this.toString = function() {
				return _base64;
			};
			return _this;
		};
		//---------------------------------------------------------------------
		// base64DecodeInputStream
		//---------------------------------------------------------------------
		var base64DecodeInputStream = function(str) {
			var _str = str;
			var _pos = 0;
			var _buffer = 0;
			var _buflen = 0;
			var _this = {};
			_this.read = function() {
				while (_buflen < 8) {
					if (_pos >= _str.length) {
						if (_buflen == 0) {
							return -1;
						}
						throw new Error('unexpected end of file./' + _buflen);
					}
					var c = _str.charAt(_pos);
					_pos += 1;
					if (c == '=') {
						_buflen = 0;
						return -1;
					} else if (c.match(/^\s$/) ) {
						// ignore if whitespace.
						continue;
					}
					_buffer = (_buffer << 6) | decode(c.charCodeAt(0) );
					_buflen += 6;
				}
				var n = (_buffer >>> (_buflen - 8) ) & 0xff;
				_buflen -= 8;
				return n;
			};
			var decode = function(c) {
				if (0x41 <= c && c <= 0x5a) {
					return c - 0x41;
				} else if (0x61 <= c && c <= 0x7a) {
					return c - 0x61 + 26;
				} else if (0x30 <= c && c <= 0x39) {
					return c - 0x30 + 52;
				} else if (c == 0x2b) {
					return 62;
				} else if (c == 0x2f) {
					return 63;
				} else {
					throw new Error('c:' + c);
				}
			};
			return _this;
		};
		//---------------------------------------------------------------------
		// gifImage (B/W)
		//---------------------------------------------------------------------
		var gifImage = function(width, height) {
			var _width = width;
			var _height = height;
			var _data = new Array(width * height);
			var _this = {};
			_this.setPixel = function(x, y, pixel) {
				_data[y * _width + x] = pixel;
			};
			_this.write = function(out) {
				//---------------------------------
				// GIF Signature
				out.writeString('GIF87a');
				//---------------------------------
				// Screen Descriptor
				out.writeShort(_width);
				out.writeShort(_height);
				out.writeByte(0x80); // 2bit
				out.writeByte(0);
				out.writeByte(0);
				//---------------------------------
				// Global Color Map
				// black
				out.writeByte(0x00);
				out.writeByte(0x00);
				out.writeByte(0x00);
				// white
				out.writeByte(0xff);
				out.writeByte(0xff);
				out.writeByte(0xff);
				//---------------------------------
				// Image Descriptor
				out.writeString(',');
				out.writeShort(0);
				out.writeShort(0);
				out.writeShort(_width);
				out.writeShort(_height);
				out.writeByte(0);
				//---------------------------------
				// Local Color Map
				//---------------------------------
				// Raster Data
				var lzwMinCodeSize = 2;
				var raster = getLZWRaster(lzwMinCodeSize);
				out.writeByte(lzwMinCodeSize);
				var offset = 0;
				while (raster.length - offset > 255) {
					out.writeByte(255);
					out.writeBytes(raster, offset, 255);
					offset += 255;
				}
				out.writeByte(raster.length - offset);
				out.writeBytes(raster, offset, raster.length - offset);
				out.writeByte(0x00);
				//---------------------------------
				// GIF Terminator
				out.writeString(';');
			};
			var bitOutputStream = function(out) {
				var _out = out;
				var _bitLength = 0;
				var _bitBuffer = 0;
				var _this = {};
				_this.write = function(data, length) {
					if ( (data >>> length) != 0) {
						throw new Error('length over');
					}
					while (_bitLength + length >= 8) {
						_out.writeByte(0xff & ( (data << _bitLength) | _bitBuffer) );
						length -= (8 - _bitLength);
						data >>>= (8 - _bitLength);
						_bitBuffer = 0;
						_bitLength = 0;
					}
					_bitBuffer = (data << _bitLength) | _bitBuffer;
					_bitLength = _bitLength + length;
				};
				_this.flush = function() {
					if (_bitLength > 0) {
						_out.writeByte(_bitBuffer);
					}
				};
				return _this;
			};
			var getLZWRaster = function(lzwMinCodeSize) {
				var clearCode = 1 << lzwMinCodeSize;
				var endCode = (1 << lzwMinCodeSize) + 1;
				var bitLength = lzwMinCodeSize + 1;
				// Setup LZWTable
				var table = lzwTable();
				for (var i = 0; i < clearCode; i += 1) {
					table.add(String.fromCharCode(i) );
				}
				table.add(String.fromCharCode(clearCode) );
				table.add(String.fromCharCode(endCode) );
				var byteOut = byteArrayOutputStream();
				var bitOut = bitOutputStream(byteOut);
				// clear code
				bitOut.write(clearCode, bitLength);
				var dataIndex = 0;
				var s = String.fromCharCode(_data[dataIndex]);
				dataIndex += 1;
				while (dataIndex < _data.length) {
					var c = String.fromCharCode(_data[dataIndex]);
					dataIndex += 1;
					if (table.contains(s + c) ) {
						s = s + c;
					} else {
						bitOut.write(table.indexOf(s), bitLength);
						if (table.size() < 0xfff) {
							if (table.size() == (1 << bitLength) ) {
								bitLength += 1;
							}
							table.add(s + c);
						}
						s = c;
					}
				}
				bitOut.write(table.indexOf(s), bitLength);
				// end code
				bitOut.write(endCode, bitLength);
				bitOut.flush();
				return byteOut.toByteArray();
			};
			var lzwTable = function() {
				var _map = {};
				var _size = 0;
				var _this = {};
				_this.add = function(key) {
					if (_this.contains(key) ) {
						throw new Error('dup key:' + key);
					}
					_map[key] = _size;
					_size += 1;
				};
				_this.size = function() {
					return _size;
				};
				_this.indexOf = function(key) {
					return _map[key];
				};
				_this.contains = function(key) {
					return typeof _map[key] != 'undefined';
				};
				return _this;
			};
			return _this;
		};
		var createImgTag = function(width, height, getPixel, alt) {
			var gif = gifImage(width, height);
			for (var y = 0; y < height; y += 1) {
				for (var x = 0; x < width; x += 1) {
					gif.setPixel(x, y, getPixel(x, y) );
				}
			}
			var b = byteArrayOutputStream();
			gif.write(b);
			var base64 = base64EncodeOutputStream();
			var bytes = b.toByteArray();
			for (var i = 0; i < bytes.length; i += 1) {
				base64.writeByte(bytes[i]);
			}
			base64.flush();
			var img = '';
			img += '<img';
			img += '\u0020src="';
			img += 'data:image/gif;base64,';
			img += base64;
			img += '"';
			img += '\u0020width="';
			img += width;
			img += '"';
			img += '\u0020height="';
			img += height;
			img += '"';
			if (alt) {
				img += '\u0020alt="';
				img += alt;
				img += '"';
			}
			img += '/>';
			return img;
		};
		//---------------------------------------------------------------------
		// returns qrcode function.
		return qrcode;
	}();
}(jQuery));


/*! jQuery.scrollpanel 0.1 - //larsjung.de/scrollpanel - MIT License */
(function ($) {
	'use strict';
	var $window = $(window),
		name = 'scrollpanel',
		defaults = {
			prefix: 'sp-'
		},
		// Scrollpanel
		// ===========
		ScrollPanel = function (element, options) {
			var self = this;
			// Main reference.
			self.$el = $(element);
			self.settings = $.extend({}, defaults, options);
			var prefix = self.settings.prefix;
			// Mouse offset on drag start.
			self.mouseOffsetY = 0;
			// Interval ID for automatic scrollbar updates.
			self.updateId = 0;
			// Proxy to easily bind and unbind this method.
			self.scrollProxy = $.proxy(self.scroll, self);
			// Make content space relative, if not already.
			if (!self.$el.css('position') || self.$el.css('position') === 'static') {
				self.$el.css('position', 'relative');
			}
			// Create scrollbar.
			self.$scrollbar = $('<div class="' + prefix + 'scrollbar" />');
			self.$thumb = $('<div class="' + prefix + 'thumb" />').appendTo(self.$scrollbar);
			// Wrap element's content and add scrollbar.
			self.$el
				.addClass(prefix + 'host')
				.wrapInner('<div class="' + prefix + 'viewport"><div class="' + prefix + 'container" /></div>')
				.append(self.$scrollbar);
			// // Get references.
			self.$viewport = self.$el.find('> .' + prefix + 'viewport');
			self.$container = self.$viewport.find('> .' + prefix + 'container');
			// Host
			// ----
			self.$el
				// Handle mouse wheel.
				.on('mousewheel', function (event, delta, deltaX, deltaY) {
					self.$viewport.scrollTop(self.$viewport.scrollTop() - 50 * deltaY);
					self.update();
					event.preventDefault();
					event.stopPropagation();
				})
				// Handle scrolling.
				.on('scroll', function () {
					self.update();
				});
			// Viewport
			// --------
			self.$viewport
				// Basic styling.
				.css({
					paddingRight: self.$scrollbar.outerWidth(true),
					height: self.$el.height(),
					overflow: 'hidden'
				});
			// Container
			// ---------
			self.$container
				// Basic styling.
				.css({
					overflow: 'hidden'
				});
			// Srollbar
			// --------
			self.$scrollbar
				// Basic styling.
				.css({
					position: 'absolute',
					top: 0,
					right: 0,
					overflow: 'hidden'
				})
				// Handle mouse buttons.
				.on('mousedown', function (event) {
					self.mouseOffsetY = self.$thumb.outerHeight() / 2;
					self.onMousedown(event);
				})
				// Disable selection.
				.each(function () {
					self.onselectstart = function () {
						return false;
					};
				});
			// Scrollbar Thumb
			// ---------------
			self.$thumb
				// Basic styling.
				.css({
					position: 'absolute',
					left: 0,
					width: '100%'
				})
				// Handle mouse buttons.
				.on('mousedown', function (event) {
					self.mouseOffsetY = event.pageY - self.$thumb.offset().top;
					self.onMousedown(event);
				});
			// Initial update.
			self.update();
		};
		// Scrollpanel methods
		// ===================
		$.extend(ScrollPanel.prototype, {
			// Rerender scrollbar.
			update: function (repeat) {
				var self = this;
				if (self.updateId && !repeat) {
					clearInterval(self.updateId);
					self.updateId = 0;
				} else if (!self.updateId && repeat) {
					self.updateId = setInterval(function() {
						self.update(true);
					}, 50);
				}
				self.$viewport.css('height', self.$el.height());
				var visibleHeight = self.$el.height(),
					contentHeight = self.$container.outerHeight(),
					scrollTop = self.$viewport.scrollTop(),
					scrollTopFrac = scrollTop / contentHeight,
					visVertFrac = Math.min(visibleHeight / contentHeight, 1),
					scrollbarHeight = self.$scrollbar.height();
				if (visVertFrac < 1) {
					self.$scrollbar
						.css({
							height: self.$el.innerHeight() + scrollbarHeight - self.$scrollbar.outerHeight(true)
						})
						.fadeIn(50);
					self.$thumb
						.css({
							top: scrollbarHeight * scrollTopFrac,
							height: scrollbarHeight * visVertFrac
						});
				} else {
					self.$scrollbar.fadeOut(50);
				}
			},
			// Scroll content according to mouse position.
			scroll: function (event) {
				var self = this,
					clickFrac = (event.pageY - self.$scrollbar.offset().top - self.mouseOffsetY) / self.$scrollbar.height();
				self.$viewport.scrollTop(self.$container.outerHeight() * clickFrac);
				self.update();
				event.preventDefault();
				event.stopPropagation();
			},
			// Handle mousedown events on scrollbar.
			onMousedown: function (event) {
				var self = this;
				self.scroll(event);
				self.$scrollbar.addClass('active');
				$window
					.on('mousemove', self.scrollProxy)
					.one('mouseup', function (event) {
						self.$scrollbar.removeClass('active');
						$window.off('mousemove', self.scrollProxy);
						self.scroll(event);
					});
			}
		});
	// Register the plug in
	// --------------------
	$.fn[name] = function (options, options2) {
		return this.each(function () {
			var $this = $(this),
				scrollpanel = $this.data(name);
			if (!scrollpanel) {
				scrollpanel = new ScrollPanel(this, options);
				scrollpanel.update();
				$this.data(name, scrollpanel);
			}
			if (options === 'update') {
				scrollpanel.update(options2);
			}
		});
	};
}(jQuery));

// app
// ---
(function () {
	'use strict';

	/*global jQuery, markdown, Modernizr, moment, _ */
	modulejs.define('$', function () { return jQuery; });
	modulejs.define('markdown', function () { return markdown; });
	modulejs.define('modernizr', function () { return Modernizr; });
	modulejs.define('moment', function () { return moment; });
	modulejs.define('_', function () { return _; });


	modulejs.define('core/event', ['_'], function (_) {
		var slice = Array.prototype.slice,
			subscriptions = {},
			sub = function (topic, callback) {
				if (_.isString(topic) && _.isFunction(callback)) {
					if (!subscriptions[topic]) {
						subscriptions[topic] = [];
					}
					subscriptions[topic].push(callback);
				}
			},
			unsub = function (topic, callback) {
				if (_.isString(topic) && _.isFunction(callback) && subscriptions[topic]) {
					subscriptions[topic] = _.without(subscriptions[topic], callback);
				}
			},
			pub = function (topic, data) {
				var args = slice.call(arguments, 1);
				// console.log('EVENT PUB', topic, args);
				if (_.isString(topic) && subscriptions[topic]) {
					_.each(subscriptions[topic], function (callback) {
						callback.apply(topic, args);
					});
				}
			};
		return {
			sub: sub,
			unsub: unsub,
			pub: pub
		};
	});


	modulejs.define('core/format', ['_', 'moment'], function (_, moment) {
		var decimalMetric = {
				t: 1000.0,
				k: 1000.0,
				u: ['B', 'KB', 'MB', 'GB', 'TB']
			},
			binaryMetric = {
				t: 1024.0,
				k: 1024.0,
				u: ['B', 'KiB', 'MiB', 'GiB', 'TiB']
			},
			defaultMetric = decimalMetric,
			defaultDateFormat = 'YYYY-MM-DD HH:mm',
			setDefaultMetric = function (useBinaryMetric) {
				defaultMetric = useBinaryMetric ? binaryMetric : decimalMetric;
			},
			formatSize = function (size, metric) {
				metric = metric || defaultMetric;
				if (!_.isNumber(size) || size < 0) {
					return '';
				}
				var i = 0,
					maxI = metric.u.length - 1;
				while (size >= metric.t && i < maxI) {
					size /= metric.k;
					i += 1;
				}
				return (i <= 1 ? Math.round(size) : size.toFixed(1)).toString() + ' ' + metric.u[i];
			},
			setDefaultDateFormat = function (dateFormat) {
				defaultDateFormat = dateFormat;
			},
			formatDate = function (millis) {
				return _.isNumber(millis) && millis ? moment(millis).format(defaultDateFormat) : '';
			};
		return {
			setDefaultMetric: setDefaultMetric,
			formatSize: formatSize,
			setDefaultDateFormat: setDefaultDateFormat,
			formatDate: formatDate
		};
	});


	modulejs.define('core/langs', ['config', '_'], function (config, _) {
		return _.extend({}, config.langs);
	});


	modulejs.define('core/location', ['_', 'modernizr', 'core/settings', 'core/event', 'core/notify'], function (_, modernizr, allsettings, event, notify) {
		var settings = _.extend({
				smartBrowsing: true,
				unmanagedInNewWindow: true
			}, allsettings.view),
			doc = document,
			history = settings.smartBrowsing && modernizr.history ? window.history : null,
			forceEncoding = function (href) {
				return href
						.replace(/\/+/g, '/')
						.replace(/ /g, '%20')
						.replace(/!/g, '%21')
						.replace(/#/g, '%23')
						.replace(/\$/g, '%24')
						.replace(/&/g, '%26')
						.replace(/'/g, '%27')
						.replace(/\(/g, '%28')
						.replace(/\)/g, '%29')
						.replace(/\*/g, '%2A')
						.replace(/\+/g, '%2B')
						.replace(/\,/g, '%2C')
						// .replace(/\//g, '%2F')
						.replace(/:/g, '%3A')
						.replace(/;/g, '%3B')
						.replace(/=/g, '%3D')
						.replace(/\?/g, '%3F')
						.replace(/@/g, '%40')
						.replace(/\[/g, '%5B')
						.replace(/\]/g, '%5D');
			},
			reUriToPathname = /^.*:\/\/[^\/]*|[^\/]*$/g,
			uriToPathname = function (uri) {
				return uri.replace(reUriToPathname, '');
			},
			hrefsAreDecoded = (function () {
				var testpathname = '/a b',
					a = doc.createElement('a');
				a.href = testpathname;
				return uriToPathname(a.href) === testpathname;
			}()),
			encodedHref = function (href) {
				var a = doc.createElement('a'),
					location;
				a.href = href;
				location = uriToPathname(a.href);
				if (hrefsAreDecoded) {
					location = encodeURIComponent(location).replace(/%2F/ig, '/');
				}
				return forceEncoding(location);
			};
		var absHref = null,
			getDomain = function () {
				return doc.domain;
			},
			getAbsHref = function () {
				return absHref;
			},
			getItem = function () {
				return modulejs.require('model/item').get(absHref);
			},
			load = function (callback) {
				modulejs.require('core/server').request({action: 'get', items: true, itemsHref: absHref, itemsWhat: 1}, function (json) {
					var Item = modulejs.require('model/item'),
						item = Item.get(absHref);
					if (json) {
						var found = {};
						_.each(json.items, function (jsonItem) {
							var e = Item.get(jsonItem.absHref, jsonItem.time, jsonItem.size, jsonItem.is_managed, jsonItem.content, jsonItem.md5, jsonItem.sha1);
							found[e.absHref] = true;
						});
						_.each(item.content, function (e) {
							if (!found[e.absHref]) {
								Item.remove(e.absHref);
							}
						});
					}
					if (_.isFunction(callback)) {
						callback(item);
					}
				});
			},
			setLocation = function (newAbsHref, keepBrowserUrl) {
				event.pub('location.beforeChange');
				newAbsHref = encodedHref(newAbsHref);
				if (absHref !== newAbsHref) {
					absHref = newAbsHref;
					if (history) {
						if (keepBrowserUrl) {
							history.replaceState({absHref: absHref}, '', absHref);
						} else {
							history.pushState({absHref: absHref}, '', absHref);
						}
					}
				}
				var item = getItem();
				if (item.isLoaded) {
					event.pub('location.changed', item);
					refresh();
				} else {
					notify.set('loading...');
					load(function () {
						item.isLoaded = true;
						notify.set();
						event.pub('location.changed', item);
					});
				}
			},
			refresh = function () {
				var item = getItem(),
					oldItems = _.values(item.content);
				event.pub('location.beforeRefresh');
				load(function () {
					var newItems = _.values(item.content),
						added = _.difference(newItems, oldItems),
						removed = _.difference(oldItems, newItems);
					event.pub('location.refreshed', item, added, removed);
				});
			},
			setLink = function ($el, item) {
				$el.attr('href', item.absHref);
				if (history && item.isFolder() && item.isManaged) {
					$el.on('click', function () {
						setLocation(item.absHref);
						return false;
					});
				}
				if (settings.unmanagedInNewWindow && !item.isManaged) {
					$el.attr('target', '_blank');
				}
			};
		if (history) {
			window.onpopstate = function (e) {
				if (e.state && e.state.absHref) {
					setLocation(e.state.absHref, true);
				}
			};
		}
		event.sub('ready', function () {
			setLocation(document.location.href, true);
		});
		return {
			forceEncoding: forceEncoding,
			getDomain: getDomain,
			getAbsHref: getAbsHref,
			getItem: getItem,
			setLocation: setLocation,
			refresh: refresh,
			setLink: setLink
		};
	});


	modulejs.define('core/notify', ['$'], function ($) {
		var template = '<div id="notify"/>',
			set = function (content) {
				if (content) {
					$('#notify').stop(true, true).html(content).fadeIn(400);
				} else {
					$('#notify').stop(true, true).fadeOut(400);
				}
			},
			init = function () {
				$(template).hide().appendTo('body');
			};
		init();
		return {
			set: set
		};
	});


	modulejs.define('core/resource', ['_', '$', 'config', 'core/settings'], function (_, $, config, settings) {
		var win = window,
			appHref = settings.appHref,
			imagesHref = appHref + 'client/images/',
			fallbackHref = appHref + 'client/images/fallback/',
			themesHref = appHref + 'client/themes/',
			scriptsHref = appHref + 'client/js/',
			fallbacks = ['file', 'folder', 'folder-page', 'folder-parent', 'ar', 'aud', 'bin', 'img', 'txt', 'vid'],
			image = function (id) {
				return imagesHref + id + '.svg';
			},
			icon = function (id) {
				var baseId = id.split('-')[0],
					href = config.theme[id] || config.theme[baseId];
				if (href) {
					return themesHref + href;
				}
				if (_.indexOf(fallbacks, id) >= 0) {
					return fallbackHref + id + '.svg';
				}
				if (_.indexOf(fallbacks, baseId) >= 0) {
					return fallbackHref + baseId + '.svg';
				}
				return fallbackHref + 'file.svg';
			},
			loadScript = function (filename, callback) {
				$.ajax({
						url: scriptsHref + filename,
						dataType: 'script'
					}).done(function () {
						callback();
					});
			},
			loadScriptGlob = function (filename, globalId, callback) {
				if (win[globalId]) {
					callback(win[globalId]);
				} else {
					loadScript(filename, function () { callback(win[globalId]); });
				}
			},
			ensureSH = function (callback) {
				loadScriptGlob('syntaxhighlighter.js', 'SyntaxHighlighter', callback);
			};
		return {
			image: image,
			icon: icon,
			ensureSH: ensureSH
		};
	});


	modulejs.define('core/server', ['$', '_', 'config', 'core/location'], function ($, _, config, location) {
		var server = {
				backend: config.setup.BACKEND,
				api: config.setup.API === true,
				name: config.setup.SERVER_NAME,
				version: config.setup.SERVER_VERSION,
				request: function (data, callback) {
					if (server.api) {
						$.ajax({
								url: location.getAbsHref(),
								data: data,
								type: 'POST',
								dataType: 'json'
							})
							.done(function (json) {
								callback(json);
							})
							.fail(function () {
								callback();
							});
					} else {
						callback();
					}
				},
				formRequest: function (data) {
					if (server.api) {
						var $form = $('<form method="post" style="display:none;"/>')
										.attr('action', location.getAbsHref());
						_.each(data, function (val, key) {
							$('<input type="hidden"/>')
								.attr('name', key)
								.attr('value', val)
								.appendTo($form);
						});
						$form.appendTo('body').submit().remove();
					}
				}
			};
		return server;
	});


	modulejs.define('core/settings', ['config', '_'], function (config, _) {
		return _.extend({}, config.options, {
			appHref: config.setup.APP_HREF,
			rootHref: config.setup.ROOT_HREF,
			currentHref: config.setup.CURRENT_HREF
		});
	});


	modulejs.define('core/store', ['modernizr'], function (modernizr) {
		var store = modernizr.localstorage ? window.localStorage : null,
			key = '_h5ai',
			load = function () {
				if (store) {
					try {
						return JSON.parse(store[key]);
					} catch (e) {}
				}
				return {};
			},
			save = function (obj) {
				if (store) {
					store[key] = JSON.stringify(obj);
				}
			},
			put = function (key, value) {
				var obj = load();
				obj[key] = value;
				return save(obj);
			},
			get = function (key) {
				return load()[key];
			};
		return {
			put: put,
			get: get
		};
	});


	modulejs.define('core/types', ['config', '_'], function (config, _) {
		var reEndsWithSlash = /\/$/,
			regexps = {},
			escapeRegExp = function (sequence) {
				return sequence.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$]/g, "\\$&");
				// return sequence.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
			},
			parse = function (types) {
				_.each(types, function (patterns, type) {
					var pattern = '^(' + _.map(patterns, function (p) { return '(' + escapeRegExp(p).replace(/\*/g, '.*') + ')'; }).join('|') + ')$';
					regexps[type] = new RegExp(pattern, 'i');
				});
			},
			getType = function (sequence) {
				if (reEndsWithSlash.test(sequence)) {
					return 'folder';
				}
				var slashidx = sequence.lastIndexOf('/'),
					name = slashidx >= 0 ? sequence.substr(slashidx + 1) : sequence;
				for (var type in regexps) {
					if (regexps.hasOwnProperty(type)) {
						if (regexps[type].test(name)) {
							return type;
						}
					}
				}
				return 'file';
			};
		parse(_.extend({}, config.types));
		return {
			getType: getType
		};
	});


	modulejs.define('ext/autorefresh', ['_', '$', 'core/settings', 'core/event', 'core/location'], function (_, $, allsettings, event, location) {
		var settings = _.extend({
				enabled: false,
				interval: 5000
			}, allsettings.autorefresh),
			timeoutId = null,
			heartbeat = function () {
				location.refresh();
			},
			before = function () {
				clearTimeout(timeoutId);
			},
			after = function () {
				clearTimeout(timeoutId);
				timeoutId = setTimeout(heartbeat, settings.interval);
			},
			init = function () {
				if (!settings.enabled) {
					return;
				}
				settings.interval = Math.max(1000, settings.interval);
				event.sub('location.beforeChange', before);
				event.sub('location.beforeRefresh', before);
				event.sub('location.changed', after);
				event.sub('location.refreshed', after);
			};
		init();
	});


	modulejs.define('ext/crumb', ['_', '$', 'core/settings', 'core/resource', 'core/event', 'core/location'], function (_, $, allsettings, resource, event, location) {
		var settings = _.extend({
				enabled: false
			}, allsettings.crumb),
			template = '<li class="crumb">' +
							'<a>' +
								'<img src="' + resource.image('crumb') + '" alt=">"/>' +
								'<span/>' +
							'</a>' +
						'</li>',
			pageHintTemplate = '<img class="hint" src="' + resource.image('page') + '" alt="has index page"/>',
			statusHintTemplate = '<span class="hint"/>',
			update = function (item, force) {
				if (!force && item.$crumb) {
					return item.$crumb;
				}
				var $html = $(template),
					$a = $html.find('a');
				$html
					.addClass(item.isFolder() ? 'folder' : 'file')
					.data('item', item);
				location.setLink($a, item);
				$a.find('span').text(item.label).end();
				if (item.isDomain()) {
					$html.addClass('domain');
					$a.find('img').attr('src', resource.image('home'));
				}
				if (item.isRoot()) {
					$html.addClass('root');
					$a.find('img').attr('src', resource.image('home'));
				}
				if (item.isCurrentFolder()) {
					$html.addClass('current');
				}
				if (!item.isManaged) {
					$a.append($(pageHintTemplate));
				}
				if (item.$crumb) {
					item.$crumb.replaceWith($html);
				}
				item.$crumb = $html;
				return $html;
			},
			onLocationChanged = function (item) {
				var crumb = item.getCrumb(),
					$ul = $('#navbar'),
					found = false;
				$ul.find('.crumb').each(function () {
					var $html = $(this);
					if ($html.data('item') === item) {
						found = true;
						$html.addClass('current');
					} else {
						$html.removeClass('current');
					}
				});
				if (!found) {
					$ul.find('.crumb').remove();
					_.each(crumb, function (e) {
						$ul.append(update(e, true));
					});
				}
			},
			init = function () {
				if (!settings.enabled) {
					return;
				}
				event.sub('location.changed', onLocationChanged);
			};
		init();
	});


	modulejs.define('ext/custom', ['_', '$', 'markdown', 'core/settings', 'core/server', 'core/event', 'core/resource'], function (_, $, markdown, allsettings, server, event, resource) {
		var settings = _.extend({
				enabled: false
			}, allsettings.custom),
			$header, $footer,
			duration = 200,
			onLocationChanged = function (item) {
				server.request({action: 'get', custom: true, customHref: item.absHref}, function (response) {
					var has_header, has_footer, data, content;
					if (response) {
						data = response.custom;
						if (data.header) {
							content = data.header;
							if (data.header_type === 'md') {
								content  = markdown.toHTML(content);
							}
							$header.html(content).stop().slideDown(duration);
							has_header = true;
						}
						if (data.footer) {
							content = data.footer;
							if (data.footer_type === 'md') {
								content  = markdown.toHTML(content);
							}
							$footer.html(content).stop().slideDown(duration);
							has_footer = true;
						}
					}
					if (!has_header) {
						$header.stop().slideUp(duration);
					}
					if (!has_footer) {
						$footer.stop().slideUp(duration);
					}
				});
			},
			init = function () {
				if (!settings.enabled) {
					return;
				}
				$header = $('<div id="content-header"/>').hide().prependTo('#content');
				$footer = $('<div id="content-footer"/>').hide().appendTo('#content');
				event.sub('location.changed', onLocationChanged);
			};
		init();
	});

	modulejs.define('ext/delete', ['_', '$', 'core/settings', 'core/event', 'core/resource', 'core/location', 'core/server'], function (_, $, allsettings, event, resource, location, server) {
		var settings = _.extend({
				enabled: false
			}, allsettings['delete']),
			deleteBtnTemplate = '<li id="delete">' +
										'<a href="#">' +
											'<img src="' + resource.image('delete') + '" alt="delete"/>' +
											'<span class="l10n-delete"/>' +
										'</a>' +
									'</li>',
			selectedHrefsStr = '',
			$delete, $img,
			failed = function () {
				$delete.addClass('failed');
				setTimeout(function () {
					$delete.removeClass('failed');
				}, 1000);
			},
			handleResponse = function (json) {
				$delete.removeClass('current');
				//$img.attr('src', resource.image('delete'));
				if (!json || json.code) {
					failed();
				}
				location.refresh();
			},
			requestDeletion = function (hrefsStr) {
				$delete.addClass('current');
				$img.attr('src', resource.image('loading'));
					//server.request({action: 'delete', hrefs: hrefsStr}, handleResponse);
					//console.log(allsettings['security']['CRUD']);
					//console.log('l10n-delete_confirm');
					if(allsettings['security']['CRUD']) {
						if(confirm('Do you really want to delete these files/directories ?'))	//Czy na pewno chcesz usunąc te pliki?
							server.request({action: 'delete', hrefs: hrefsStr}, handleResponse);
					}
					else 
					{	
						var CRUD_pass = allsettings['security']['CRUD_pass'];
						var pass = prompt('Password:', pass);	// Podaj hasło:
						if (pass && md5(pass) == CRUD_pass) {
							if(confirm('Do you really want to delete these files/directories ?')) 	//Czy na pewno chcesz usunąc te pliki?
								server.request({action: 'delete', hrefs: hrefsStr}, handleResponse);
						}
						else 
							alert ('Wrong password');	// Bledne hasło
						//console.log(CRUD_pass, md5(pass));	
					}
					$img.attr('src', resource.image('delete'));
			},
			onSelection = function (items) {
				selectedHrefsStr = '';
				if (items.length) {
					selectedHrefsStr = _.map(items, function (item) {
						return item.absHref;
					}).join('|:|');
					$delete.appendTo('#navbar').show();
				} else {
					$delete.hide();
				}
			},
			init = function () {
				if (!settings.enabled || !server.api) {
					return;
				}
				$delete = $(deleteBtnTemplate)
					.find('a').on('click', function (event) {
						event.preventDefault();
						requestDeletion(selectedHrefsStr);
					}).end()
					.appendTo('#navbar');
				$img = $delete.find('img');
				event.sub('selection', onSelection);
			};
		init();
	});


	modulejs.define('ext/download', ['_', '$', 'core/settings', 'core/resource', 'core/event', 'core/location', 'core/server'], function (_, $, allsettings, resource, event, location, server) {
		var settings = _.extend({
				enabled: false,
				type: 'php-tar',
				packageName: 'package',
				alwaysVisible: false
			}, allsettings.download),
			downloadBtnTemplate =
				'<li id="download">' +
					'<a href="#">' +
						'<img src="' + resource.image('download') + '" alt="download"/>' +
						'<span class="l10n-download"/>' +
					'</a>' +
				'</li>',
			selectedItems = [],
			onSelection = function (items) {
				var $download = $('#download');
				selectedItems = items.slice(0);
				if (selectedItems.length) {
					$download.show();
				} else if (!settings.alwaysVisible) {
					$download.hide();
				}
			},
			onClick = function (event) {
				var type = settings.type,
					extension = (type === 'shell-zip') ? 'zip' : 'tar',
					query = {
						action: 'download',
						as: (settings.packageName || location.getItem().label) + '.' + extension,
						type: type,
						hrefs: _.pluck(selectedItems, 'absHref').join('|:|')
					};
				server.formRequest(query);
			},
			init = function () {
				if (!settings.enabled) {
					return;
				}
				$(downloadBtnTemplate)
					.find('a').on('click', onClick).end()
					.appendTo('#navbar');
				if (settings.alwaysVisible) {
					$('#download').show();
				}
				event.sub('selection', onSelection);
			};
		init();
	});

	modulejs.define('ext/dropbox', ['_', '$', 'core/settings', 'core/location', 'core/server', 'core/event'], function (_, $, allsettings, location, server, event) {
		var settings = _.extend({
				enabled: false,
				maxfiles: 5,
				maxfilesize: 20
			}, allsettings.dropbox),
			template = '<ul id="uploads"/>',
			uploadTemplate = '<li class="upload clearfix">' +
								'<span class="name"/>' +
								'<span class="size"/>' +
								'<div class="progress"><div class="bar"/></div>' +
							'</li>',
			data = {
				action: 'upload',
				href: ''
			},
			init = function () {
				if (!settings.enabled || !server.api) {
					return;
				}
				var $content = $('#content').append(template);
				var uploads = {},
					afterUpload = function (err, file) {
						if (file) {
							if(!uploads[file.name]) {
								uploads[file.name] = $(uploadTemplate).appendTo('#uploads')
								.find('.name').text(file.name).end()
								.find('.size').text(file.size).end()
								.find('.progress .bar').css('width', 0).end();
							}
							uploads[file.name]
								.addClass(err ? 'error' : 'finished')
								.find('.progress').replaceWith(err ? '<span class="error">' + err + '</span>' : '<span class="finished">okay</span>');
							setTimeout(function () {
								uploads[file.name].slideUp(400, function () {
									uploads[file.name].remove();
									delete uploads[file.name];
								});
							}, 5000);
						}
					};
				event.sub('ready', function () {
					// $content.filedrop({
					$('html').filedrop({
						paramname: 'userfile',
						allowedfiletypes: settings.allowedfiletypes,
						allowedfileextensions: settings.allowedfileextensions,
						maxfiles: settings.maxfiles,
						maxfilesize: settings.maxfilesize,
						url: location.getAbsHref(),
						data: data,
						docEnter: function () {
							$content.addClass('hint');
						},
						docLeave: function () {
							$content.removeClass('hint');
						},
						dragOver: function () {
							$content.addClass('match');
						},
						dragLeave: function () {
							$content.removeClass('match');
						},
						drop: function () {
							if(!allsettings['security']['CRUD']) {
								var CRUD_pass = allsettings['security']['CRUD_pass'];
								var pass = prompt('Password:', pass);	// Podaj hasło:
								if (pass && md5(pass) == CRUD_pass) {
									$content.removeClass('hint match');
								}
								else 
									alert ('Wrong password');	// Bledne hasło
							}
							else 
							{	
								$content.removeClass('hint match');
							}					
	/*					
							var password = prompt('Podaj hasło','');
							if( md5(password) != md5('pass') ) {
								alert('Błędne hasło');
								return false;
							}
							else 
								$content.removeClass('hint match');
	*/							
						},
						beforeEach: function (file) {
							uploads[file.name] = $(uploadTemplate).appendTo('#uploads')
								.find('.name').text(file.name).end()
								.find('.size').text(file.size).end()
								.find('.progress .bar').css('width', 0).end();
						},
						progressUpdated: function (i, file, progress) {
							uploads[file.name].find('.progress .bar').css('width', '' + progress + '%');
						},
						uploadFinished: function (i, file, response) {
							afterUpload(response.code && response.msg, file);
						},
						afterAll: function () {
							location.refresh();
						},
						error: function (err, file) {
							afterUpload(err, file);
						}
					});
				});
				event.sub('location.changed', function (item) {
					// $('#uploads').empty();
					data.href = item.absHref;
				});
			};
		init();
	});


	modulejs.define('ext/filter', ['_', '$', 'core/settings', 'core/resource', 'core/event'], function (_, $, allsettings, resource, event) {
		var settings = _.extend({
				enabled: false
			}, allsettings.filter),
			template = '<li id="filter">' +
							'<span class="element">' +
								'<img src="' + resource.image('filter') + '" alt="filter"/>' +
								'<input type="text" value="" placeholder="filter"/>' +
							'</span>' +
						'</li>',
			noMatchTemplate = '<div class="no-match l10n-noMatch"/>',
			$filter, $input, $noMatch,
			filter = function (re) {
				var match = [],
					noMatch = [],
					duration = 200;
				if (re) {
					$('#items .item').not('.folder-parent').each(function () {
						var label = $(this).find('.label').text();
						if (label.match(re)) {
							match.push(this);
						} else {
							noMatch.push(this);
						}
					});
				} else {
					match = $('#items .item').not('.folder-parent');
				}
				if (match.length) {
					$noMatch.hide();
				} else if (noMatch.length) {
					setTimeout(function () { $noMatch.show(); }, duration);
				}
				$(match).fadeIn(duration);
				$(noMatch).fadeOut(duration);
			},
			escapeRegExp = function (sequence) {
				return sequence.replace(/[\-\[\]{}()*+?.,\\$\^|#\s]/g, '\\$&');
			},
			parseFilterSequence = function (sequence) {
				if (sequence.substr(0, 3) === 're:') {
					return new RegExp(sequence.substr(3));
				}
				sequence = $.map($.trim(sequence).split(/\s+/), function (part) {
					return _.map(part.split(''), function (character) {
						return escapeRegExp(character);
					}).join('.*?');
				}).join('|');
				return new RegExp(sequence, 'i');
			},
			reset = function () {
				$input.val('').blur();
			},
			update = function (focus) {
				var val = $input.val();
				if (focus) {
					$input.focus();
				}
				if (val || focus) {
					filter(parseFilterSequence(val));
					$filter.addClass('current');
				} else {
					filter();
					$filter.removeClass('current');
				}
			},
			updt = function () { update(true); },
			updf = function () { update(false); },
			init = function () {
				if (!settings.enabled) {
					return;
				}
				$filter = $(template).appendTo('#navbar');
				$input = $filter.find('input');
				$noMatch = $(noMatchTemplate).appendTo('#view');
				$filter.on('click', updt);
				$input.on('focus blur keyup', updf);
				$(document)
					.on('keydown', function (event) {
						if (event.which === 27) {
							reset();
						}
					})
					.on('keypress', updt);
				event.sub('location.changed', reset);
			};
		init();
	});


	modulejs.define('ext/google-analytics-ga', ['_', 'core/settings'], function (_, allsettings) {
		var settings = _.extend({
				enabled: false,
				gaq: []
			}, allsettings['google-analytics-ga']),
			init = function () {
				if (!settings.enabled) {
					return;
				}
				window._gaq = settings.gaq;
				var scriptLiteral = 'script',
					doc = document,
					newScriptTag = doc.createElement(scriptLiteral),
					firstScriptTag = doc.getElementsByTagName(scriptLiteral)[0];
				newScriptTag.async = true;
				newScriptTag.src = ('https:' === location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
				firstScriptTag.parentNode.insertBefore(newScriptTag, firstScriptTag);
			};
		init();
	});
	modulejs.define('ext/google-analytics-ua', ['_', 'core/settings', 'core/event'], function (_, allsettings, event) {
		var settings = _.extend({
				enabled: false,
				id: 'UA-000000-0'
			}, allsettings['google-analytics-ua']),
			win = window,
			doc = document,
			scriptLiteral = 'script',
			id = 'h5ai-ga',
			init = function () {
				if (!settings.enabled) {
					return;
				}
				var el, firstScriptElement;
				win.GoogleAnalyticsObject = id;
				win[id] = win[id] || function () {
					(win[id].q = win[id].q || []).push(arguments);
				};
				win[id].l = 1 * new Date();
				el = doc.createElement(scriptLiteral);
				el.async = true;
				el.src = '//www.google-analytics.com/analytics.js';
				firstScriptElement = doc.getElementsByTagName(scriptLiteral)[0];
				firstScriptElement.parentNode.insertBefore(el, firstScriptElement);
				win[id]('create', settings.id, 'auto');
				event.sub('location.changed', function (item) {
					var loc = win.location;
					win[id]('send', 'pageview', {
						location: loc.protocol + '//' + loc.host + item.absHref,
						title: _.pluck(item.getCrumb(), 'label').join(' > ')
					});
				});
			};
		init();
	});


	modulejs.define('ext/l10n', ['_', '$', 'core/settings', 'core/langs', 'core/format', 'core/store', 'core/event', 'core/server'], function (_, $, allsettings, langs, format, store, event, server) {
		var settings = _.extend({
				enabled: false,
				lang: 'en',
				useBrowserLang: true
			}, allsettings.l10n),
			defaultTranslations = {
				isoCode: 'en',
				lang: 'english',
				details: 'details',
				list: 'list',
				grid: 'grid',
				icons: 'icons',
				name: 'Name',
				lastModified: 'Last modified',
				size: 'Size',
				parentDirectory: 'Parent Directory',
				empty: 'empty',
				folders: 'folders',
				files: 'files',
				download: 'download',
				noMatch: 'no match',
				dateFormat: 'YYYY-MM-DD HH:mm',
				filter: 'filter',
				rename: 'rename',
				'delete': 'delete',
				'new_folder': 'new directory'
			},
			blockTemplate = '<div class="block"><div class="select"><select id="langs"/></div></div>',
			optionTemplate = '<option/>',
			storekey = 'ext/l10n',
			loaded = {
				en: _.extend({}, defaultTranslations)
			},
			currentLang = loaded.en,
			update = function (lang) {
				if (lang) {
					currentLang = lang;
				}
				$('#langs option')
					.removeAttr('selected').removeProp('selected')
					.filter('.' + currentLang.isoCode)
					.attr('selected', 'selected').prop('selected', 'selected');
				$.each(currentLang, function (key, value) {
					$('.l10n-' + key).text(value);
				});
				format.setDefaultDateFormat(currentLang.dateFormat);
				$('#items .item .date').each(function () {
					var $this = $(this);
					$this.text(format.formatDate($this.data('time')));
				});
				$('#filter input').attr('placeholder', currentLang.filter);
			},
			loadLanguage = function (isoCode, callback) {
				if (loaded[isoCode]) {
					callback(loaded[isoCode]);
				} else {
					server.request({action: 'get', l10n: true, l10nCodes: isoCode}, function (response) {
						var json = response.l10n && response.l10n[isoCode] ? response.l10n[isoCode] : {};
						loaded[isoCode] = _.extend({}, defaultTranslations, json, {isoCode: isoCode});
						callback(loaded[isoCode]);
					});
				}
			},
			localize = function (langs, isoCode, useBrowserLang) {
				var storedIsoCode = store.get(storekey);
				if (langs[storedIsoCode]) {
					isoCode = storedIsoCode;
				} else if (useBrowserLang) {
					var browserLang = navigator.language || navigator.browserLanguage;
					if (browserLang) {
						if (langs[browserLang]) {
							isoCode = browserLang;
						} else if (browserLang.length > 2 && langs[browserLang.substr(0, 2)]) {
							isoCode = browserLang.substr(0, 2);
						}
					}
				}
				if (!langs[isoCode]) {
					isoCode = 'en';
				}
				loadLanguage(isoCode, update);
			},
			initLangSelector = function (langs) {
				var isoCodes = _.keys(langs).sort(),
					$block = $(blockTemplate),
					$select = $block.find('select')
						.on('change', function (event) {
							var isoCode = event.target.value;
							store.put(storekey, isoCode);
							localize(langs, isoCode, false);
						});
				$.each(isoCodes, function (idx, isoCode) {
					$(optionTemplate)
						.attr('value', isoCode)
						.addClass(isoCode)
						.text(isoCode + ' - ' + (_.isString(langs[isoCode]) ? langs[isoCode] : langs[isoCode].lang))
						.appendTo($select);
				});
				$block.appendTo('#settings');
			},
			init = function () {
				if (settings.enabled) {
					initLangSelector(langs);
				}
				event.sub('location.changed', function () {
					localize(langs, settings.lang, settings.useBrowserLang);
				});
			};
		init();
	});


	modulejs.define('ext/link-hover-states', ['_', '$', 'core/settings', 'core/event'], function (_, $, allsettings, event) {
		var settings = _.extend({
				enabled: false
			}, allsettings['link-hover-states']),
			selector = "a[href^='/']",
			selectLinks = function (href) {
				return $(_.filter($(selector), function (el) {
					return $(el).attr('href') === href;
				}));
			},
			onMouseEnter = function () {
				var href = $(this).attr('href');
				selectLinks(href).addClass('hover');
			},
			onMouseLeave = function () {
				var href = $(this).attr('href');
				selectLinks(href).removeClass('hover');
			},
			onLocationChanged = function () {
				$('.hover').removeClass('hover');
			},
			init = function () {
				if (!settings.enabled) {
					return;
				}
				$('body')
					.on('mouseenter', selector, onMouseEnter)
					.on('mouseleave', selector, onMouseLeave);
				event.sub('location.changed', onLocationChanged);
			};
		init();
	});

		    modulejs.define('ext/new_folder', ['_', '$', 'core/settings', 'core/event', 'core/resource', 'core/location', 'core/server'], function (_, $, allsettings, event, resource, location, server) {
			var settings = _.extend({
				enabled: false
			    }, allsettings['new_folder']),
			    new_folderBtnTemplate = '<li id="new_folder">' +
							'<a href="#">' +
							    '<img src="' + resource.image('new_folder') + '" alt="new_folder"/>' +
							    '<span class="l10n-new_folder"/>' +
							'</a>' +
						    '</li>',
			    //selectedHrefsStr = '',
			    $new_folder, $img,
			    failed = function () {
				$new_folder.addClass('failed');
				setTimeout(function () {
				    $new_folder.removeClass('failed');
				}, 1000);
			    },
			    handleResponse = function (json) {
				$new_folder.removeClass('current');
				$img.attr('src', resource.image('new_folder'));
				if (!json || json.code) {
				    failed();
				}
				location.refresh();
			    },
			    requestnew_folder = function () {
				$new_folder.addClass('current');
				$img.attr('src', resource.image('loading'));
				//console.log(location, server, resource);
				//console.log(location.getAbsHref());
	/*			
					var newname = prompt('Nowy folder', ''); 
					if (newname) {
						server.request({action: 'new_folder', href: location.getAbsHref(), name: newname}, handleResponse);
					}	
	*/
					console.log(allsettings['security']['CRUD']);
					var newname = prompt('New directory', ''); 	// Nowy folder
					if(allsettings['security']['CRUD'] && newname && newname != '') {
						server.request({action: 'new_folder', href: location.getAbsHref(), name: newname}, handleResponse);
					}
					else if(!allsettings['security']['CRUD'] && newname && newname != '') {
						var CRUD_pass = allsettings['security']['CRUD_pass'];
						var pass = prompt('Password:', pass);	// Podaj hasło:
						if (pass && md5(pass) == CRUD_pass) {
							server.request({action: 'new_folder', href: location.getAbsHref(), name: newname}, handleResponse);
						}
						else 
							alert('Wrong password');	//Błędne hasło
					}
					else {
						$img.attr('src', resource.image('new_folder'));
						return;					
					}
			    },
			    init = function () {
				if (!settings.enabled || !server.api) {
				    return;
				}
				$new_folder = $(new_folderBtnTemplate)
				    .find('a').on('click', function (event) {
					event.preventDefault();
					requestnew_folder();
				    }).end()
				    .appendTo('#navbar');
				$img = $new_folder.find('img');
				//event.sub('selection', onSelection);
			    };
			init();
		    });


	modulejs.define('ext/piwik-analytics', ['_', '$', 'core/settings'], function (_, $, allsettings) {
		var settings = _.extend({
				enabled: false,
				baseURL: 'not-set',
				idSite: 0
			}, allsettings['piwik-analytics']),
			init = function () {
				if (!settings.enabled) {
					return;
				}
				// reference: http://piwik.org/docs/javascript-tracking/
				var pkBaseURL = (("https:" === document.location.protocol) ? "https://" : "http://") + settings.baseURL + '/';
				$('<script/>').attr('src', pkBaseURL + 'piwik.js').appendTo('body');
				$(window).load(function () {
					/*global Piwik */
					var piwikTracker = Piwik.getTracker(pkBaseURL + 'piwik.php', settings.idSite);
					piwikTracker.trackPageView();
					piwikTracker.enableLinkTracking();
				});
			};
		init();
	});


	modulejs.define('ext/preview-audio', ['_', '$', 'moment', 'core/settings', 'core/event', 'ext/preview'], function (_, $, moment, allsettings, event, preview) {
		var settings = _.extend({
				enabled: false,
				types: []
			}, allsettings['preview-aud']),
			preloadAudio = function (src, callback) {
				var $audio = $('<audio/>')
					.one('loadedmetadata', function () {
						callback($audio);
						// setTimeout(function () { callback($img); }, 1000); // for testing
					})
					.attr('autoplay', 'autoplay')
					.attr('controls', 'controls')
					.attr('src', src);
			},
			onEnter = function (items, idx) {
				var currentItems = items,
					currentIdx = idx,
					currentItem = items[idx],
					onAdjustSize = function () {
						var $content = $('#pv-content'),
							$audio = $('#pv-aud-audio');
						if ($audio.length) {
							$audio.css({
								'left': '' + (($content.width()-$audio.width())*0.5) + 'px',
								'top': '' + (($content.height()-$audio.height())*0.5) + 'px'
							});
							preview.setLabels([
								currentItem.label,
								moment(0).add('seconds', $audio[0].duration).format('m:ss')
							]);
						}
					},
					onIdxChange = function (rel) {
						currentIdx = (currentIdx + rel + currentItems.length) % currentItems.length;
						currentItem = currentItems[currentIdx];
						var spinnerTimeout = setTimeout(function () { preview.showSpinner(true); }, 200);
						if ($('#pv-aud-audio').length) {
							$('#pv-aud-audio')[0].pause();
						}
						preloadAudio(currentItem.absHref, function ($preloaded_audio) {
							clearTimeout(spinnerTimeout);
							preview.showSpinner(false);
							$('#pv-content').fadeOut(100, function () {
								$('#pv-content').empty().append($preloaded_audio.attr('id', 'pv-aud-audio')).fadeIn(200);
								// small timeout, so $preloaded_audio is visible and therefore $preloaded_audio.width is available
								setTimeout(function () {
									onAdjustSize();
									preview.setIndex(currentIdx + 1, currentItems.length);
									preview.setRawLink(currentItem.absHref);
								}, 10);
							});
						});
					};
				onIdxChange(0);
				preview.setOnIndexChange(onIdxChange);
				preview.setOnAdjustSize(onAdjustSize);
				preview.enter();
			},
			initItem = function (item) {
				if (item.$view && _.indexOf(settings.types, item.type) >= 0) {
					item.$view.find('a').on('click', function (event) {
						event.preventDefault();
						var matchedEntries = _.compact(_.map($('#items .item'), function (item) {
							item = $(item).data('item');
							return _.indexOf(settings.types, item.type) >= 0 ? item : null;
						}));
						onEnter(matchedEntries, _.indexOf(matchedEntries, item));
					});
				}
			},
			onLocationChanged = function (item) {
				_.each(item.content, initItem);
			},
			onLocationRefreshed = function (item, added, removed) {
				_.each(added, initItem);
			},
			init = function () {
				if (!settings.enabled) {
					return;
				}
				event.sub('location.changed', onLocationChanged);
				event.sub('location.refreshed', onLocationRefreshed);
			};
		init();
	});


	modulejs.define('ext/preview-img', ['_', '$', 'core/settings', 'core/event', 'ext/preview'], function (_, $, allsettings, event, preview) {
		var settings = _.extend({
				enabled: false,
				types: []
			}, allsettings['preview-img']),
			preloadImg = function (src, callback) {
				var $img = $('<img/>')
					.one('load', function () {
						callback($img);
						// setTimeout(function () { callback($img); }, 1000); // for testing
					})
					.attr('src', src);
			},
			onEnter = function (items, idx) {
				var currentItems = items,
					currentIdx = idx,
					currentItem = items[idx],
					onAdjustSize = function () {
						var $content = $('#pv-content'),
							$img = $('#pv-img-image');
						if ($img.length) {
							$img.css({
								'left': '' + (($content.width()-$img.width())*0.5) + 'px',
								'top': '' + (($content.height()-$img.height())*0.5) + 'px'
							});
							preview.setLabels([
								currentItem.label,
								'' + $img[0].naturalWidth + 'x' + $img[0].naturalHeight,
								'' + (100 * $img.width() / $img[0].naturalWidth).toFixed(0) + '%'
							]);
						}
					},
					onIdxChange = function (rel) {
						currentIdx = (currentIdx + rel + currentItems.length) % currentItems.length;
						currentItem = currentItems[currentIdx];
						var spinnerTimeout = setTimeout(function () { preview.showSpinner(true); }, 200);
						preloadImg(currentItem.absHref, function ($preloaded_img) {
							clearTimeout(spinnerTimeout);
							preview.showSpinner(false);
							$('#pv-content').fadeOut(100, function () {
								$('#pv-content').empty().append($preloaded_img.attr('id', 'pv-img-image')).fadeIn(200);
								// small timeout, so $preloaded_img is visible and therefore $preloaded_img.width is available
								setTimeout(function () {
									onAdjustSize();
									preview.setIndex(currentIdx + 1, currentItems.length);
									preview.setLabels([
										currentItem.label,
										'' + $preloaded_img[0].naturalWidth + 'x' + $preloaded_img[0].naturalHeight,
										'' + (100 * $preloaded_img.width() / $preloaded_img[0].naturalWidth).toFixed(0) + '%'
									]);
									preview.setRawLink(currentItem.absHref);
								}, 10);
							});
						});
					};
				onIdxChange(0);
				preview.setOnIndexChange(onIdxChange);
				preview.setOnAdjustSize(onAdjustSize);
				preview.enter();
			},
			initItem = function (item) {
				if (item.$view && _.indexOf(settings.types, item.type) >= 0) {
					item.$view.find('a').on('click', function (event) {
						event.preventDefault();
						var matchedEntries = _.compact(_.map($('#items .item'), function (item) {
							item = $(item).data('item');
							return _.indexOf(settings.types, item.type) >= 0 ? item : null;
						}));
						onEnter(matchedEntries, _.indexOf(matchedEntries, item));
					});
				}
			},
			onLocationChanged = function (item) {
				_.each(item.content, initItem);
			},
			onLocationRefreshed = function (item, added, removed) {
				_.each(added, initItem);
			},
			init = function () {
				if (!settings.enabled) {
					return;
				}
				event.sub('location.changed', onLocationChanged);
				event.sub('location.refreshed', onLocationRefreshed);
			};
		init();
	});


	modulejs.define('ext/preview-txt', ['_', '$', 'markdown', 'core/settings', 'core/event', 'core/resource', 'ext/preview'], function (_, $, markdown, allsettings, event, resource, preview) {
		var settings = _.extend({
				enabled: false,
				types: {}
			}, allsettings['preview-txt']),
			templateText = '<pre id="pv-txt-text" class="highlighted"/>',
			templateMarkdown = '<div id="pv-txt-text" class="markdown"/>',
			// adapted from SyntaxHighlighter
			getHighlightedLines = function (sh, alias, content) {
				var brushes = sh.vars.discoveredBrushes,
					Brush, brush;
				if (!brushes) {
					brushes = {};
					_.each(sh.brushes, function (info, brush) {
						var aliases = info.aliases;
						if (aliases) {
							info.brushName = brush.toLowerCase();
							for (var i = 0; i < aliases.length; i += 1) {
								brushes[aliases[i]] = brush;
							}
						}
					});
					sh.vars.discoveredBrushes = brushes;
				}
				Brush = sh.brushes[brushes[alias || 'plain']];
				if (!Brush) {
					return $();
				}
				brush = new Brush();
				brush.init({toolbar: false, gutter: false});
				return $(brush.getHtml(content)).find('.line');
			},
			preloadText = function (absHref, callback) {
				$.ajax({
						url: absHref,
						dataType: 'text'
					})
					.done(function (content) {
						callback(content);
						// setTimeout(function () { callback(content); }, 1000); // for testing
					})
					.fail(function (jqXHR, textStatus, errorThrown) {
						callback('[ajax error] ' + textStatus);
					});
			},
			onEnter = function (items, idx) {
				var currentItems = items,
					currentIdx = idx,
					currentItem = items[idx],
					onAdjustSize = function () {
						var $content = $('#pv-content'),
							$text = $('#pv-txt-text');
						if ($text.length) {
							$text.height($content.height() - 16);
						}
					},
					onIdxChange = function (rel) {
						currentIdx = (currentIdx + rel + currentItems.length) % currentItems.length;
						currentItem = currentItems[currentIdx];
						var spinnerTimeout = setTimeout(function () { preview.showSpinner(true); }, 200);
						preloadText(currentItem.absHref, function (textContent) {
							clearTimeout(spinnerTimeout);
							preview.showSpinner(false);
							$('#pv-content').fadeOut(100, function () {
								var $text;
								if (settings.types[currentItem.type] === 'none') {
									$text = $(templateMarkdown).text(textContent);
								} else if (settings.types[currentItem.type] === 'fixed') {
									$text = $(templateText).text(textContent);
								} else if (settings.types[currentItem.type] === 'markdown') {
									$text = $(templateMarkdown).html(markdown.toHTML(textContent));
								} else {
									$text = $(templateText).text(textContent);
									resource.ensureSH(function (sh) {
										if (sh) {
											var $table = $('<table/>');
											getHighlightedLines(sh, settings.types[currentItem.type], textContent).each(function (i) {
												$('<tr/>')
													.append($('<td/>').addClass('nr').append(i + 1))
													.append($('<td/>').addClass('line').append(this))
													.appendTo($table);
											});
											$text.empty().append($table);
										}
									});
								}
								$('#pv-content').empty().append($text).fadeIn(200);
								onAdjustSize();
								preview.setIndex(currentIdx + 1, currentItems.length);
								preview.setLabels([
									currentItem.label,
									'' + currentItem.size + ' bytes'
								]);
								preview.setRawLink(currentItem.absHref);
							});
						});
					};
				onIdxChange(0);
				preview.setOnIndexChange(onIdxChange);
				preview.setOnAdjustSize(onAdjustSize);
				preview.enter();
			},
			initItem = function (item) {
				if (item.$view && _.indexOf(_.keys(settings.types), item.type) >= 0) {
					item.$view.find('a').on('click', function (event) {
						event.preventDefault();
						var matchedEntries = _.compact(_.map($('#items .item'), function (item) {
							item = $(item).data('item');
							return _.indexOf(_.keys(settings.types), item.type) >= 0 ? item : null;
						}));
						onEnter(matchedEntries, _.indexOf(matchedEntries, item));
					});
				}
			},
			onLocationChanged = function (item) {
				_.each(item.content, initItem);
			},
			onLocationRefreshed = function (item, added, removed) {
				_.each(added, initItem);
			},
			init = function () {
				if (!settings.enabled) {
					return;
				}
				event.sub('location.changed', onLocationChanged);
				event.sub('location.refreshed', onLocationRefreshed);
			};
		init();
	});


	modulejs.define('ext/preview-vid', ['_', '$', 'core/settings', 'core/event', 'ext/preview'], function (_, $, allsettings, event, preview) {
		var settings = _.extend({
				enabled: false,
				types: []
			}, allsettings['preview-vid']),
			preloadVid = function (src, callback) {
				var $video = $('<video/>')
					.one('loadedmetadata', function () {
						callback($video);
						// setTimeout(function () { callback($video); }, 1000); // for testing
					})
					.attr('autoplay', 'autoplay')
					.attr('controls', 'controls')
					.attr('src', src);
			},
			onEnter = function (items, idx) {
				var currentItems = items,
					currentIdx = idx,
					currentItem = items[idx],
					onAdjustSize = function () {
						var $content = $('#pv-content'),
							$vid = $('#pv-vid-video');
						if ($vid.length) {
							$vid.css({
								'left': '' + (($content.width()-$vid.width())*0.5) + 'px',
								'top': '' + (($content.height()-$vid.height())*0.5) + 'px'
							});
							preview.setLabels([
								currentItem.label,
								'' + $vid[0].videoWidth + 'x' + $vid[0].videoHeight,
								'' + (100 * $vid.width() / $vid[0].videoWidth).toFixed(0) + '%'
							]);
						}
					},
					onIdxChange = function (rel) {
						currentIdx = (currentIdx + rel + currentItems.length) % currentItems.length;
						currentItem = currentItems[currentIdx];
						var spinnerTimeout = setTimeout(function () { preview.showSpinner(true); }, 200);
						if ($('#pv-vid-video').length) {
							$('#pv-vid-video')[0].pause();
						}
						preloadVid(currentItem.absHref, function ($preloaded_vid) {
							clearTimeout(spinnerTimeout);
							preview.showSpinner(false);
							$('#pv-content').fadeOut(100, function () {
								$('#pv-content').empty().append($preloaded_vid.attr('id', 'pv-vid-video')).fadeIn(200);
								// small timeout, so $preloaded_vid is visible and therefore $preloaded_vid.width is available
								setTimeout(function () {
									onAdjustSize();
									preview.setIndex(currentIdx + 1, currentItems.length);
									preview.setRawLink(currentItem.absHref);
								}, 10);
							});
						});
					};
				onIdxChange(0);
				preview.setOnIndexChange(onIdxChange);
				preview.setOnAdjustSize(onAdjustSize);
				preview.enter();
			},
			initItem = function (item) {
				if (item.$view && _.indexOf(settings.types, item.type) >= 0) {
					item.$view.find('a').on('click', function (event) {
						event.preventDefault();
						var matchedEntries = _.compact(_.map($('#items .item'), function (item) {
							item = $(item).data('item');
							return _.indexOf(settings.types, item.type) >= 0 ? item : null;
						}));
						onEnter(matchedEntries, _.indexOf(matchedEntries, item));
					});
				}
			},
			onLocationChanged = function (item) {
				_.each(item.content, initItem);
			},
			onLocationRefreshed = function (item, added, removed) {
				_.each(added, initItem);
			},
			init = function () {
				if (!settings.enabled) {
					return;
				}
				event.sub('location.changed', onLocationChanged);
				event.sub('location.refreshed', onLocationRefreshed);
			};
		init();
	});


	modulejs.define('ext/preview', ['_', '$', 'core/settings', 'core/resource', 'core/store'], function (_, $, allsettings, resource, store) {
		var settings = _.extend({
				enabled: true
			}, allsettings.preview),
			template = '<div id="pv-overlay" class="noSelection">' +
							'<div id="pv-content"/>' +
							'<div id="pv-spinner"><img src="' + resource.image('spinner') + '"/></div>' +
							'<div id="pv-prev-area" class="hof"><img src="' + resource.image('preview/prev') + '"/></div>' +
							'<div id="pv-next-area" class="hof"><img src="' + resource.image('preview/next') + '"/></div>' +
							'<div id="pv-bottombar" class="clearfix hof">' +
								'<ul id="pv-buttons">' +
									'<li id="pv-bar-close" class="bar-right bar-button"><img src="' + resource.image('preview/close') + '"/></li>' +
									'<li id="pv-bar-raw" class="bar-right"><a class="bar-button" target="_blank"><img src="' + resource.image('preview/raw') + '"/></a></li>' +
									'<li id="pv-bar-fullscreen" class="bar-right bar-button"><img src="' + resource.image('preview/fullscreen') + '"/></li>' +
									'<li id="pv-bar-next" class="bar-right bar-button"><img src="' + resource.image('preview/next') + '"/></li>' +
									'<li id="pv-bar-idx" class="bar-right bar-label"/>' +
									'<li id="pv-bar-prev" class="bar-right bar-button"><img src="' + resource.image('preview/prev') + '"/></li>' +
								'</ul>' +
							'</div>' +
						'</div>',
			storekey = 'ext/preview',
			currentEntries = [],
			currentIdx = 0,
			isFullscreen = store.get(storekey) || false,
			adjustSize = function () {
				var rect = $(window).fracs('viewport'),
					$container = $('#pv-content'),
					$spinner = $('#pv-spinner'),
					margin = isFullscreen ? 0 : 20,
					barheight = isFullscreen ? 0 : 31;
				$container.css({
					width: rect.width - 2 * margin,
					height: rect.height - 2 * margin - barheight,
					left: margin,
					top: margin
				});
				$spinner.css({
					left: rect.width * 0.5,
					top: rect.height * 0.5
				});
				if (isFullscreen) {
					$('#pv-overlay').addClass('fullscreen');
					$('#pv-bar-fullscreen').find('img').attr('src', resource.image('preview/no-fullscreen'));
				} else {
					$('#pv-overlay').removeClass('fullscreen');
					$('#pv-bar-fullscreen').find('img').attr('src', resource.image('preview/fullscreen'));
				}
				if (_.isFunction(onAdjustSize)) {
					onAdjustSize(1);
				}
			},
			onEnter = function () {
				$('#pv-content').empty();
				setLabels([]);
				$('#pv-overlay').stop(true, true).fadeIn(200);
				$(window).on('keydown', onKeydown);
				adjustSize();
			},
			onExit = function () {
				$(window).off('keydown', onKeydown);
				$('#pv-overlay').stop(true, true).fadeOut(200, function () {
					$('#pv-content').empty();
					setLabels([]);
				});
			},
			onNext = function () {
				if (_.isFunction(onIndexChange)) {
					onIndexChange(1);
				}
			},
			onPrevious = function () {
				if (_.isFunction(onIndexChange)) {
					onIndexChange(-1);
				}
			},
			userAliveTimeoutId = null,
			userAlive = function () {
				clearTimeout(userAliveTimeoutId);
				$('#pv-overlay .hof').stop(true, true).fadeIn(200);
				if (isFullscreen) {
					userAliveTimeoutId = setTimeout(function () {
						$('#pv-overlay .hof').stop(true, true).fadeOut(2000);
					}, 2000);
				}
			},
			onFullscreen = function () {
				isFullscreen = !isFullscreen;
				store.put(storekey, isFullscreen);
				userAlive();
				adjustSize();
			},
			onKeydown = function (event) {
				var key = event.which,
					delay = 300;
				if (key === 27) { // esc
					event.preventDefault();
					event.stopImmediatePropagation();
					onExit();
				} else if (key === 8 || key === 37) { // backspace, left
					event.preventDefault();
					event.stopImmediatePropagation();
					$('#pv-bar-prev').addClass('hover');
					setTimeout(function () { $('#pv-bar-prev').removeClass('hover'); }, delay);
					onPrevious();
				} else if (key === 13 || key === 32 || key === 39) { // enter, space, right
					event.preventDefault();
					event.stopImmediatePropagation();
					$('#pv-bar-next').addClass('hover');
					setTimeout(function () { $('#pv-bar-next').removeClass('hover'); }, delay);
					onNext();
				} else if (key === 70) { // f
					event.preventDefault();
					event.stopImmediatePropagation();
					$('#pv-bar-fullscreen').addClass('hover');
					setTimeout(function () { $('#pv-bar-fullscreen').removeClass('hover'); }, delay);
					onFullscreen();
				}
			},
			setIndex = function (idx, total) {
				if (_.isNumber(idx)) {
					$('#pv-bar-idx').text('' + idx + (_.isNumber(total) ? '/' + total : '')).show();
				} else {
					$('#pv-bar-idx').text('').hide();
				}
			},
			setRawLink = function (href) {
				if (href) {
					$('#pv-bar-raw').find('a').attr('href', href).end().show();
				} else {
					$('#pv-bar-raw').find('a').attr('href', '#').end().hide();
				}
			},
			setLabels = function (labels) {
				$('#pv-buttons .bar-left').remove();
				_.each(labels, function (label) {
					$('<li/>')
						.addClass('bar-left bar-label')
						.text(label)
						.appendTo('#pv-buttons');
				});
			},
			onIndexChange = null,
			setOnIndexChange = function (fn) {
				onIndexChange = fn;
			},
			onAdjustSize = null,
			setOnAdjustSize = function (fn) {
				onAdjustSize = fn;
			},
			showSpinner = function (show, millis) {
				if (!_.isNumber(millis)) {
					millis = 400;
				}
				if (show) {
					$('#pv-spinner').stop(true, true).fadeIn(millis);
				} else {
					$('#pv-spinner').stop(true, true).fadeOut(millis);
				}
			},
			init = function () {
				if (!settings.enabled) {
					return;
				}
				$(template).appendTo('body');
				$('#pv-spinner').hide();
				$('#pv-bar-prev, #pv-prev-area').on('click', onPrevious);
				$('#pv-bar-next, #pv-next-area').on('click', onNext);
				$('#pv-bar-close, #pv-close-area').on('click', onExit);
				$('#pv-bar-fullscreen').on('click', onFullscreen);
				$('#pv-overlay')
					.on('keydown', onKeydown)
					.on('mousemove mousedown', userAlive)
					.on('click mousedown mousemove keydown keypress', function (event) {
						if (event.type === 'click') {
							if (event.target.id === 'pv-overlay' || event.target.id === 'pv-content') {
								onExit();
							}
						}
						event.stopImmediatePropagation();
					});
				$(window).on('resize load', adjustSize);
			};
		init();
		return {
			enter: onEnter,
			exit: onExit,
			setIndex: setIndex,
			setRawLink: setRawLink,
			setLabels: setLabels,
			setOnIndexChange: setOnIndexChange,
			setOnAdjustSize: setOnAdjustSize,
			showSpinner: showSpinner
		};
	});


	modulejs.define('ext/qrcode', ['_', '$', 'modernizr', 'core/settings', 'core/event'], function (_, $, modernizr, allsettings, event) {
		var settings = _.extend({
				enabled: false,
				size: 150
			}, allsettings.qrcode),
			template = '<div id="qrcode"/>',
			$qrcode, hideTimeoutId,
			update = function (item) {
				$qrcode.empty().qrcode({
					render: modernizr.canvas ? 'canvas' : 'div',
					width: settings.size,
					height: settings.size,
					color: '#333',
					bgColor: '#fff',
					text: window.location.protocol + '//' + window.location.host + item.absHref
				});
			},
			onMouseenter = function (item) {
				if (!item.isFolder()) {
					update(item);
					clearTimeout(hideTimeoutId);
					$qrcode.stop(true, true).fadeIn(400);
				}
			},
			onMouseleave = function (item) {
				hideTimeoutId = setTimeout(function () {
					$qrcode.stop(true, true).fadeOut(400);
				}, 200);
			},
			init = function () {
				if (!settings.enabled) {
					return;
				}
				$qrcode = $(template).appendTo('body');
				event.sub('item.mouseenter', onMouseenter);
				event.sub('item.mouseleave', onMouseleave);
			};
		init();
	});

		modulejs.define('ext/rename', ['_', '$', 'core/settings', 'core/event', 'core/resource', 'core/location', 'core/server'], function (_, $, allsettings, event, resource, location, server) {
			var settings = _.extend({
					enabled: false
				}, allsettings['rename']),
				renameBtnTemplate = '<li id="rename">' +
											'<a href="#">' +
												'<img src="' + resource.image('rename') + '" alt="rename"/>' +
												'<span class="l10n-rename"/>' +
											'</a>' +
										'</li>',
				selectedHrefsStr = '',
				$rename, $img,
				failed = function () {
					$rename.addClass('failed');
					setTimeout(function () {
						$rename.removeClass('failed');
					}, 1000);
				},
				handleResponse = function (json) {
					$rename.removeClass('current');
					$img.attr('src', resource.image('rename'));
					if (!json || json.code) {
						failed();
					}
					location.refresh();
				},
				requestRename = function (hrefsStr) {
					$rename.addClass('current');
					$img.attr('src', resource.image('loading'));
					//console.log(hrefsStr);
					// http://jsfiddle.net/
					var lastPart = '';
					var parts = hrefsStr.split('/');
					var parts_pop = parts.pop();
					//console.log(parts);
					//console.log(parts_pop);
					lastPart = parts_pop == '' ? parts[parts.length - 1] : parts_pop;
					//console.log("Final: " + lastPart);
					console.log(allsettings['security']['CRUD']);
					var newname = prompt('New name: ', lastPart); 	// Nowa nazwa
					console.log(newname);
					if(allsettings['security']['CRUD'] && newname && newname != lastPart) {
						server.request({action: 'rename', href: hrefsStr, name: newname}, handleResponse);
					}
					else if(!allsettings['security']['CRUD'] && newname && newname != lastPart) {
						var CRUD_pass = allsettings['security']['CRUD_pass'];
						var pass = prompt('Password:', pass);	// Podaj hasło:
						if (pass && md5(pass) == CRUD_pass) {
							server.request({action: 'rename', href: hrefsStr, name: newname}, handleResponse);
						}
						else 
							alert('Wrong password'); 	// Błędne hasło
					}
					else {
						$img.attr('src', resource.image('rename'));
						return;
					}
					/*
					if (newname) {
						server.request({action: 'rename', href: hrefsStr, name: newname}, handleResponse);
					}
					*/
				},
				onSelection = function (items) {
					selectedHrefsStr = '';
					if (items.length == 1) {
						selectedHrefsStr = _.map(items, function (item) {
							return item.absHref;
						}).join('|:|');
						$rename.appendTo('#navbar').show();
					} else {
						$rename.hide();
					}
				},
				init = function () {
					if (!settings.enabled || !server.api) {
						return;
					}
					$rename = $(renameBtnTemplate)
						.find('a').on('click', function (event) {
							event.preventDefault();
							requestRename(selectedHrefsStr);
						}).end()
						.appendTo('#navbar');
					$img = $rename.find('img');
					event.sub('selection', onSelection);
				};
			init();
		});


	modulejs.define('ext/select', ['_', '$', 'core/settings', 'core/resource', 'core/event'], function (_, $, allsettings, resource, event) {
		var settings = _.extend({
				enabled: false,
				checkboxes: false
			}, allsettings.select),
			template = '<span class="selector"><img src="' + resource.image('selected') + '" alt="selected"/></span>',
			x = 0, y = 0,
			l = 0, t = 0, w = 0, h = 0,
			shrink = 1/3,
			$document = $(document),
			$selectionRect = $('<div id="selection-rect"/>'),
			publish = function () {
				var items = _.map($('#items .item.selected'), function (itemElement) {
					return $(itemElement).data('item');
				});
				event.pub('selection', items);
			},
			selectionUpdate = function (event) {
				l = Math.min(x, event.pageX);
				t = Math.min(y, event.pageY);
				w = Math.abs(x - event.pageX);
				h = Math.abs(y - event.pageY);
				event.preventDefault();
				$selectionRect
					.stop(true, true)
					.css({left: l, top: t, width: w, height: h, opacity: 1})
					.show();
				var selRect = $selectionRect.fracs('rect');
				$('#items .item').removeClass('selecting').each(function () {
					var $item = $(this),
						rect = $item.find('a').fracs('rect'),
						inter = selRect.intersection(rect);
					if (inter && !$item.hasClass('folder-parent')) {
						$item.addClass('selecting');
					}
				});
			},
			selectionEnd = function (event) {
				event.preventDefault();
				$document.off('mousemove', selectionUpdate);
				$('#items .item.selecting.selected').removeClass('selecting').removeClass('selected');
				$('#items .item.selecting').removeClass('selecting').addClass('selected');
				publish();
				$selectionRect
					.stop(true, true)
					.animate(
						{
							left: l + w * 0.5 * shrink,
							top: t + h * 0.5 * shrink,
							width: w * (1 - shrink),
							height: h * (1 - shrink),
							opacity: 0
						},
						300,
						function () {
							$selectionRect.hide();
						}
					);
			},
			selectionStart = function (event) {
				var $window = $(window),
					viewRight = $window.scrollLeft() + $window.width(),
					viewBottom = $window.scrollTop() + $window.height();
				x = event.pageX;
				y = event.pageY;
				// only on left button and don't block the scrollbars
				if (event.button !== 0 || x >= viewRight || y >= viewBottom) {
					return;
				}
				$(':focus').blur();
				if (!event.ctrlKey && !event.metaKey) {
					$('#items .item').removeClass('selected');
					publish();
				}
				$document
					.on('mousemove', selectionUpdate)
					.one('mouseup', selectionEnd);
				selectionUpdate(event);
			},
			noSelection = function (event) {
				event.stopImmediatePropagation();
				return false;
			},
			noSelectionUnlessCtrl = function (event) {
				if (!event.ctrlKey && !event.metaKey) {
					noSelection(event);
				}
			},
			initItem = function (item) {
				if (item.$view) {
					$(template)
						.appendTo(item.$view.find('a'))
						.on('click', function (event) {
							event.stopImmediatePropagation();
							event.preventDefault();
							item.$view.toggleClass('selected');
							publish();
						});
				}
			},
			onLocationChanged = function (item) {
				if (settings.checkboxes) {
					_.each(item.content, initItem);
				}
				publish();
			},
			onLocationRefreshed = function (item, added, removed) {
				var selectionChanged = false;
				if (settings.checkboxes) {
					_.each(added, initItem);
				}
				_.each(removed, function (item) {
					if (item.$view && item.$view.hasClass('selected')) {
						item.$view.removeClass('selected');
						selectionChanged = true;
					}
				});
				if (selectionChanged) {
					publish();
				}
			},
			init = function () {
				if (!settings.enabled) {
					return;
				}
				$selectionRect.hide().appendTo('body');
				event.sub('location.changed', onLocationChanged);
				event.sub('location.refreshed', onLocationRefreshed);
				$document
					.on('mousedown', '.noSelection', noSelection)
					.on('mousedown', '.noSelectionUnlessCtrl,input,select,a', noSelectionUnlessCtrl)
					.on('mousedown', selectionStart);
			};
		init();
	});


	modulejs.define('ext/sort', ['_', '$', 'core/settings', 'core/resource', 'core/event', 'core/store'], function (_, $, allsettings, resource, event, store) {
		var settings = _.extend({
				enabled: false,
				column: 0,
				reverse: false,
				ignorecase: true,
				natural: false,
				folders: 0
			}, allsettings.sort),
			storekey = 'ext/sort',
			template = '<img src="' + resource.image('ascending') + '" class="sort ascending" alt="ascending" />' +
						'<img src="' + resource.image('descending') + '" class="sort descending" alt="descending" />',
			getType = function (item) {
				var $item = $(item);
				if ($item.hasClass('folder-parent')) {
					return 0;
				}
				if ($item.hasClass('folder')) {
					if (settings.folders === 1) {
						return 2;
					} else if (settings.folders === 2) {
						return 3;
					}
					return 1;
				}
				return 2;
			},
			getName = function (item) {
				return $(item).find('.label').text();
			},
			getTime = function (item) {
				return $(item).find('.date').data('time');
			},
			getSize = function (item) {
				return $(item).find('.size').data('bytes');
			},
			columnGetters = {
				0: getName,
				1: getTime,
				2: getSize
			},
			columnClasses = {
				0: 'label',
				1: 'date',
				2: 'size'
			},
			// Natural Sort algorithm for Javascript - Version 0.7 - Released under MIT license
			// Author: Jim Palmer (based on chunking idea from Dave Koelle)
			//
			// Modified to make it work with h5ai
			naturalCmpFn = function (val1, val2) {
				var re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
					sre = /(^[ ]*|[ ]*$)/g,
					dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
					hre = /^0x[0-9a-f]+$/i,
					ore = /^0/,
					// convert all to strings strip whitespace
					x = ('' + val1).replace(sre, ''),
					y = ('' + val2).replace(sre, ''),
					// chunk/tokenize
					xN = x.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
					yN = y.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
					// numeric, hex or date detection
					xD = parseInt(x.match(hre), 10) || (xN.length !== 1 && x.match(dre) && Date.parse(x)),
					yD = parseInt(y.match(hre), 10) || xD && y.match(dre) && Date.parse(y) || null,
					oFxNcL, oFyNcL;
				// first try and sort Hex codes or Dates
				if (yD) {
					if (xD < yD) {
						return -1;
					} else if (xD > yD) {
						return 1;
					}
				}
				// natural sorting through split numeric strings and default strings
				for(var cLoc=0, numS=Math.max(xN.length, yN.length); cLoc < numS; cLoc += 1) {
					// find floats not starting with '0', string or 0 if not defined (Clint Priest)
					oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
					oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
					// handle numeric vs string comparison - number < string - (Kyle Adams)
					if (isNaN(oFxNcL) !== isNaN(oFyNcL)) { return (isNaN(oFxNcL)) ? 1 : -1; }
					// rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
					else if (typeof oFxNcL !== typeof oFyNcL) {
						oFxNcL += '';
						oFyNcL += '';
					}
					if (oFxNcL < oFyNcL) {
						return -1;
					}
					if (oFxNcL > oFyNcL) {
						return 1;
					}
				}
				return 0;
			},
			cmpFn = function (getValue, reverse, ignorecase, natural) {
				return function (item1, item2) {
					var res, val1, val2;
					res = getType(item1) - getType(item2);
					if (res !== 0) {
						return res;
					}
					val1 = getValue(item1);
					val2 = getValue(item2);
					if (isNaN(val1) || isNaN(val2)) {
						val1 = '' + val1;
						val2 = '' + val2;
						if (ignorecase) {
							val1 = val1.toLowerCase();
							val2 = val2.toLowerCase();
						}
					}
					if (natural) {
						res = naturalCmpFn(val1, val2);
					} else {
						res = val1 < val2 ? -1 : (val1 > val2 ? 1 : 0);
					}
					return reverse ? -res : res;
				};
			},
			sortItems = function (column, reverse) {
				var headers = $('#items li.header a'),
					header = $('#items li.header a.' + columnClasses[column]),
					fn = cmpFn(columnGetters[column], reverse, settings.ignorecase, column === 0 && settings.natural),
					current = $('#items .item'),
					sorted = $('#items .item').sort(fn);
				store.put(storekey, {column: column, reverse: reverse});
				headers.removeClass('ascending descending');
				header.addClass(reverse ? 'descending' : 'ascending');
				for (var i = 0, l = current.length; i < l; i += 1) {
					if (current[i] !== sorted[i]) {
						sorted.detach().sort(fn).appendTo('#items');
						break;
					}
				}
			},
			onContentChanged = function (item) {
				var order = store.get(storekey),
					column = order && order.column || settings.column,
					reverse = order && order.reverse || settings.reverse;
				sortItems(column, reverse);
			},
			init = function () {
				if (!settings.enabled) {
					return;
				}
				$('#items li.header')
					.find('a.label')
						.append(template)
						.click(function (event) {
							sortItems(0, $(this).hasClass('ascending'));
							event.preventDefault();
						})
					.end()
					.find('a.date')
						.prepend(template)
						.click(function (event) {
							sortItems(1, $(this).hasClass('ascending'));
							event.preventDefault();
						})
					.end()
					.find('a.size')
						.prepend(template)
						.click(function (event) {
							sortItems(2, $(this).hasClass('ascending'));
							event.preventDefault();
						})
					.end();
				event.sub('location.changed', onContentChanged);
				event.sub('location.refreshed', onContentChanged);
			};
		init();
	});


	modulejs.define('ext/statusbar', ['_', '$', 'core/settings', 'core/format', 'core/event'], function (_, $, allsettings, format, event) {
		var settings = _.extend({
				enabled: false
			}, allsettings.statusbar),
			template = '<span class="statusbar">' +
							'<span class="status default">' +
								'<span class="folderTotal"/> <span class="l10n-folders"/>' +
								'<span class="sep"/>' +
								'<span class="fileTotal"/> <span class="l10n-files"/>' +
							'</span>' +
							'<span class="status dynamic"/>' +
						'</span>',
			sepTemplate = '<span class="sep"/>',
			$statusDynamic,
			$statusDefault,
			update = function (html) {
				if (html) {
					$statusDefault.hide();
					$statusDynamic.empty().append(html).show();
				} else {
					$statusDynamic.empty().hide();
					$statusDefault.show();
				}
			},
			init = function () {
				if (!settings.enabled) {
					return;
				}
				var $statusbar = $(template),
					$folderTotal = $statusbar.find('.folderTotal'),
					$fileTotal = $statusbar.find('.fileTotal'),
					onLocationChanged = function (item) {
						var stats = item.getStats();
						$folderTotal.text(stats.folders);
						$fileTotal.text(stats.files);
					};
				$statusDefault = $statusbar.find('.status.default');
				$statusDynamic = $statusbar.find('.status.dynamic');
				$('#bottombar > .center').append($statusbar);
				event.sub('statusbar', update);
				event.sub('location.changed', onLocationChanged);
				event.sub('location.refreshed', onLocationChanged);
				event.sub('item.mouseenter', function (item) {
					if (item.isCurrentParentFolder()) {
						return;
					}
					var $span = $('<span/>').append(item.label);
					if (_.isNumber(item.time)) {
						$span.append(sepTemplate).append(format.formatDate(item.time));
					}
					if (_.isNumber(item.size)) {
						$span.append(sepTemplate).append(format.formatSize(item.size));
					}
					update($span);
				});
				event.sub('item.mouseleave', function (item) {
					update();
				});
			};
		init();
	});


	modulejs.define('ext/thumbnails', ['_', 'core/settings', 'core/event', 'core/server'], function (_, allsettings, event, server) {
		var settings = _.extend({
				enabled: false,
				img: ['bmp', 'gif', 'ico', 'image', 'jpg', 'png'],
				mov: ['video'],
				doc: ['pdf', 'ps'],
				delay: 1000,
				size: 256
			}, allsettings.thumbnails),
			requestThumb = function (type, href, mode, ratio, callback) {
				server.request({
					action: 'getThumbHref',
					type: type,
					href: href,
					mode: mode,
					width: settings.size * ratio,
					height: settings.size
				}, function (json) {
					callback(json && json.code === 0 ? json.absHref : null);
				});
			},
			checkItem = function (item) {
				var type = null;
				if (_.contains(settings.img, item.type)) {
					type = 'img';
				} else if (_.contains(settings.mov, item.type)) {
					type = 'mov';
				} else if (_.contains(settings.doc, item.type)) {
					type = 'doc';
				}
				if (type) {
					if (item.thumbSquare) {
						item.$view.find('.icon.square img').addClass('thumb').attr('src', item.thumbSquare);
					} else {
						requestThumb(type, item.absHref, 'square', 1, function (src) {
							if (src && item.$view) {
								item.thumbSquare = src;
								item.$view.find('.icon.square img').addClass('thumb').attr('src', src);
							}
						});
					}
					if (item.thumbRational) {
						item.$view.find('.icon.rational img').addClass('thumb').attr('src', item.thumbRational);
					} else {
						requestThumb(type, item.absHref, 'rational', 2, function (src) {
							if (src && item.$view) {
								item.thumbRational = src;
								item.$view.find('.icon.rational img').addClass('thumb').attr('src', src);
							}
						});
					}
				}
			},
			onLocationChanged = function (item) {
				setTimeout(function () {
					_.each(item.content, checkItem);
				}, settings.delay);
			},
			onLocationRefreshed = function (item, added, removed) {
				_.each(added, checkItem);
			},
			init = function () {
				if (!settings.enabled || !server.api) {
					return;
				}
				event.sub('location.changed', onLocationChanged);
				event.sub('location.refreshed', onLocationRefreshed);
			};
		init();
	});


	modulejs.define('ext/title', ['_', 'core/settings', 'core/event'], function (_, allsettings, event) {
		var settings = _.extend({
				enabled: false
			}, allsettings.title),
			onLocationChanged = function (item) {
				var labels = _.pluck(item.getCrumb(), 'label'),
					title = labels.join(' > ');
				if (labels.length > 1) {
					title = labels[labels.length - 1] + ' - ' + title;
				}
				document.title = title;
			},
			init = function () {
				if (!settings.enabled) {
					return;
				}
				event.sub('location.changed', onLocationChanged);
			};
		init();
	});


	modulejs.define('ext/tree', ['_', '$', 'core/settings', 'core/resource', 'core/event', 'core/location'], function (_, $, allsettings, resource, event, location) {
		var settings = _.extend({
				enabled: false,
				slide: true,
				maxSubfolders: 50
			}, allsettings.tree),
			template = '<div class="item">' +
							'<span class="indicator none">' +
								'<img src="' + resource.image('tree') + '"/>' +
							'</span>' +
							'<a>' +
								'<span class="icon"><img/></span>' +
								'<span class="label"/>' +
							'</a>' +
						'</span>',
			statusHintTemplate = '<span class="hint"/>',
			update = function (item) {
				var $html = $(template),
					$indicator = $html.find('.indicator'),
					$a = $html.find('a'),
					$img = $html.find('.icon img'),
					$label = $html.find('.label');
				$html
					.addClass(item.isFolder() ? 'folder' : 'file')
					.data('item', item);
				location.setLink($a, item);
				$img.attr('src', resource.image('folder'));
				$label.text(item.label);
				if (item.isFolder()) {
					var subfolders = item.getSubfolders();
					// indicator
					if ((item.isManaged && !item.isContentFetched) || subfolders.length) {
						$indicator.removeClass('none');
						if ((item.isManaged && !item.isContentFetched)) {
							$indicator.addClass('unknown');
						} else if (item.isContentVisible) {
							$indicator.addClass('open');
						} else {
							$indicator.addClass('close');
						}
					}
					// is it the domain?
					if (item.isDomain()) {
						$html.addClass('domain');
						$img.attr('src', resource.image('home'));
					}
					// is it the root?
					if (item.isRoot()) {
						$html.addClass('root');
						$img.attr('src', resource.image('home'));
					}
					// is it the current folder?
					if (item.isCurrentFolder()) {
						$html.addClass('current');
						// $img.attr('src', resource.image('folder-open'));
					}
					// does it have subfolders?
					if (subfolders.length) {
						var $ul = $('<ul class="content"/>').appendTo($html),
							counter = 0;
						_.each(subfolders, function (e) {
							counter += 1;
							if (counter <= settings.maxSubfolders) {
								$('<li/>').append(update(e)).appendTo($ul);
							}
						});
						if (subfolders.length > settings.maxSubfolders) {
							$('<li class="summary">… ' + (subfolders.length - settings.maxSubfolders) + ' more subfolders</li>').appendTo($ul);
						}
						if (!item.isContentVisible) {
							$ul.hide();
						}
					}
					// reflect folder status
					if (!item.isManaged) {
						$img.attr('src', resource.image('folder-page'));
					}
				}
				if (item.$tree) {
					item.$tree.replaceWith($html);
				}
				item.$tree = $html;
				return $html;
			},
			createOnIndicatorClick = function () {
				var $tree = $('#tree'),
					slide = function (item, $indicator, $content, down) {
						item.isContentVisible = down;
						$indicator.removeClass('open close').addClass(down ? 'open' : 'close');
						$tree.scrollpanel('update', true);
						$content[down ? 'slideDown' : 'slideUp'](function () {
							$tree.scrollpanel('update');
						});
					};
				return function () {
					var $indicator = $(this),
						$item = $indicator.closest('.item'),
						item = $item.data('item'),
						$content = $item.find('> ul.content');
					if ($indicator.hasClass('unknown')) {
						item.fetchContent(function (item) {
							item.isContentVisible = false;
							var $item = update(item),
								$indicator = $item.find('> .indicator'),
								$content = $item.find('> ul.content');
							if (!$indicator.hasClass('none')) {
								slide(item, $indicator, $content, true);
							}
						});
					} else if ($indicator.hasClass('open')) {
						slide(item, $indicator, $content, false);
					} else if ($indicator.hasClass('close'))  {
						slide(item, $indicator, $content, true);
					}
				};
			},
			shiftTree = function (forceVisible, dontAnimate) {
				var $tree = $("#tree"),
					$view = $("#view"),
					left = ((settings.slide && $tree.outerWidth() < $view.offset().left) || forceVisible || !$view.is(':visible')) ? 0 : 18 - $tree.outerWidth();
				if (dontAnimate) {
					$tree.stop().css({ left: left });
				} else {
					$tree.stop().animate({ left: left });
				}
			},
			fetchTree = function (item, callback) {
				item.isContentVisible = true;
				item.fetchContent(function (item) {
					if (item.parent) {
						fetchTree(item.parent, callback);
					} else {
						callback(item);
					}
				});
			},
			adjustSpacing = function () {
				var $tree = $('#tree'),
					winHeight = $(window).height(),
					navHeight = $('#topbar').outerHeight(),
					footerHeight = $('#bottombar').outerHeight();
				$tree.css({
					top: navHeight,
					height: winHeight - navHeight - footerHeight - 16
				});
				$tree.scrollpanel('update');
			},
			onLocationChanged = function (item) {
				fetchTree(item, function (root) {
					$('#tree')
						.find('.sp-container').append(update(root)).end()
						.show();
					adjustSpacing();
					shiftTree(false, true);
				});
			},
			init = function () {
				if (!settings.enabled) {
					return;
				}
				var $tree = $('<div id="tree"/>')
					.appendTo('body')
					.scrollpanel()
					.on('click', '.indicator', createOnIndicatorClick())
					.on('mouseenter', function () {
						shiftTree(true);
					})
					.on('mouseleave', function () {
						shiftTree();
					});
				event.sub('ready', adjustSpacing);
				event.sub('location.changed', onLocationChanged);
				$(window).on('resize', function () {
					adjustSpacing();
					shiftTree();
				});
			};
		init();
	});


	modulejs.define('info', ['$', 'config'], function ($, config) {
		var testsTemp =
				'<div id="tests-wrapper">' +
					'<ul id="tests">' +
				'</div>',
			testTemp =
				'<li class="test">' +
					'<span class="label"></span>' +
					'<span class="result"></span>' +
					'<div class="info"></div>' +
				'</li>',
			loginTemp =
				'<div id="login-wrapper">' +
					'<input id="pass" type="text" placeholder="password"/>' +
					'<span id="login">login</span>' +
					'<span id="logout">logout</span>' +
					'<div id="hint">' +
						'The preset password is the empty string, so just hit login. ' +
						'You might change it in the index file to keep this information private.' +
					'</div>' +
				'</div>',
			setup = config.setup,
			addTests = function () {
				var addTest = function (label, info, passed, result) {
						$(testTemp)
							.find('.label')
								.text(label)
							.end()
							.find('.result')
								.addClass(passed ? 'passed' : 'failed')
								.text(result ? result : (passed ? 'yes' : 'no'))
							.end()
							.find('.info')
								.html(info)
							.end()
							.appendTo('#tests');
					};
				$(testsTemp).appendTo('body');
				addTest(
					'Server software', 'Server is one of apache, lighttpd, nginx or cherokee',
					setup.HAS_SERVER, setup.SERVER_NAME + ' ' + setup.SERVER_VERSION
				);
				addTest(
					'PHP version', 'PHP version &gt;= ' + setup.MIN_PHP_VERSION,
					setup.HAS_PHP_VERSION, setup.PHP_VERSION
				);
				addTest(
					'Cache directory', 'Web server has write access',
					setup.HAS_WRITABLE_CACHE
				);
				addTest(
					'Image thumbs', 'PHP GD extension with JPEG support available',
					setup.HAS_PHP_JPG
				);
				addTest(
					'Use EXIF thumbs', 'PHP EXIF extension available',
					setup.HAS_PHP_EXIF
				);
				addTest(
					'Movie thumbs', 'Command line program <code>avconv</code> or <code>ffmpeg</code> available',
					setup.HAS_CMD_AVCONV || setup.HAS_CMD_FFMPEG
				);
				addTest(
					'PDF thumbs', 'Command line program <code>convert</code> available',
					setup.HAS_CMD_CONVERT
				);
				addTest(
					'Shell tar', 'Command line program <code>tar</code> available',
					setup.HAS_CMD_TAR
				);
				addTest(
					'Shell zip', 'Command line program <code>zip</code> available',
					setup.HAS_CMD_ZIP
				);
				addTest(
					'Shell du', 'Command line program <code>du</code> available',
					setup.HAS_CMD_DU
				);
			},
			addLogin = function () {
				var request = function (data) {
						$.ajax({
								url: 'server/php/index.php',
								type: 'POST',
								dataType: 'JSON',
								data: data
							})
							.always(function () {
								window.location.reload();
							});
					},
					onLogin = function () {
						request({
							'action': 'login',
							'pass': $('#pass').val()
						});
					},
					onLogout = function () {
						request({
							'action': 'logout'
						});
					},
					onKeydown = function (event) {
						if (event.which === 13) {
							onLogin();
						}
					};
				$(loginTemp).appendTo('body');
				if (setup.AS_ADMIN) {
					$('#pass').remove();
					$('#login').remove();
					$('#logout').on('click', onLogout);
				} else {
					$('#pass').on('keydown', onKeydown).focus();
					$('#login').on('click', onLogin);
					$('#logout').remove();
				}
				if (setup.HAS_CUSTOM_PASSHASH) {
					$('#hint').remove();
				}
			},
			init = function () {
				$('<span class="idx-file">Index: <code class="value"></code></span>')
					.appendTo('body')
					.find('.value').text(setup.INDEX_HREF);
				if (setup.AS_ADMIN) {
					addTests();
				}
				addLogin();
			};
		init();
	});


	modulejs.define('main', ['_', 'core/event'], function (_, event) {
		modulejs.require('view/ensure');
		modulejs.require('view/items');
		modulejs.require('view/spacing');
		modulejs.require('view/viewmode');
		_.each(modulejs.state(), function (state, id) {
			if (/^ext\/.+/.test(id)) {
				modulejs.require(id);
			}
		});
		event.pub('ready');
	});


	modulejs.define('model/item', ['_', 'core/types', 'core/event', 'core/settings', 'core/server', 'core/location'], function (_, types, event, settings, server, location) {
		var reEndsWithSlash = /\/$/,
			startsWith = function (sequence, part) {
				return sequence.slice && part.length && sequence.slice(0, part.length) === part;
			},
			createLabel = function (sequence) {
				sequence = sequence.replace(reEndsWithSlash, '');
				try { sequence = decodeURIComponent(sequence); } catch (e) {}
				return sequence;
			},
			reSplitPath = /^(.*\/)([^\/]+\/?)$/,
			splitPath = function (sequence) {
				if (sequence === '/') {
					return { parent: null, name: '/' };
				}
				var match = reSplitPath.exec(sequence);
				if (match) {
					var split = { parent: match[1], name: match[2] };
					if (split.parent && !startsWith(split.parent, settings.rootHref)) {
						split.parent = null;
					}
					return split;
				}
			},
			cache = {},
			getItem = function (absHref, time, size, isManaged, isContentFetched, md5, sha1) {
				absHref = location.forceEncoding(absHref);
				if (!startsWith(absHref, settings.rootHref)) {
					return null;
				}
				var self = cache[absHref] || new Item(absHref);
				if (_.isNumber(time)) {
					self.time = time;
				}
				if (_.isNumber(size)) {
					self.size = size;
				}
				if (isManaged) {
					self.isManaged = true;
				}
				if (isContentFetched) {
					self.isContentFetched = true;
				}
				if (md5) {
					self.md5 = md5;
				}
				if (sha1) {
					self.sha1 = sha1;
				}
				return self;
			},
			removeItem = function (absHref) {
				absHref = location.forceEncoding(absHref);
				var self = cache[absHref];
				if (self) {
					delete cache[absHref];
					if (self.parent) {
						delete self.parent.content[self.absHref];
					}
					_.each(self.content, function (item) {
						removeItem(item.absHref);
					});
				}
			},
			fetchContent = function (absHref, callback) {
				var self = getItem(absHref);
				if (!_.isFunction(callback)) {
					callback = function () {};
				}
				if (self.isContentFetched) {
					callback(self);
				} else {
					server.request({action: 'get', items: true, itemsHref: self.absHref, itemsWhat: 1}, function (response) {
						if (response.items) {
							_.each(response.items, function (item) {
								getItem(item.absHref, item.time, item.size, item.is_managed, item.content, item.md5, item.sha1);
							});
						}
						callback(self);
					});
				}
			};
		var Item = function (absHref) {
			var split = splitPath(absHref);
			cache[absHref] = this;
			this.absHref = absHref;
			this.type = types.getType(absHref);
			this.label = createLabel(absHref === '/' ? location.getDomain() : split.name);
			this.time = null;
			this.size = null;
			this.parent = null;
			this.isManaged = null;
			this.content = {};
			if (split.parent) {
				this.parent = getItem(split.parent);
				this.parent.content[this.absHref] = this;
				if (_.keys(this.parent.content).length > 1) {
					this.parent.isContentFetched = true;
				}
			}
		};
		_.extend(Item.prototype, {
			isFolder: function () {
				return reEndsWithSlash.test(this.absHref);
			},
			isCurrentFolder: function () {
				return this.absHref === location.getAbsHref();
			},
			isInCurrentFolder: function () {
				return !!this.parent && this.parent.isCurrentFolder();
			},
			isCurrentParentFolder: function () {
				return this === getItem(location.getAbsHref()).parent;
			},
			isDomain: function () {
				return this.absHref === '/';
			},
			isRoot: function () {
				return this.absHref === settings.rootHref;
			},
			isH5ai: function () {
				return this.absHref === settings.appHref;
			},
			isEmpty: function () {
				return _.keys(this.content).length === 0;
			},
			fetchContent: function (callback) {
				return fetchContent(this.absHref, callback);
			},
			getCrumb: function () {
				var item = this,
					crumb = [item];
				while (item.parent) {
					item = item.parent;
					crumb.unshift(item);
				}
				return crumb;
			},
			getSubfolders: function () {
				return _.sortBy(_.filter(this.content, function (item) {
					return item.isFolder();
				}), function (item) {
					return item.label.toLowerCase();
				});
			},
			getStats: function () {
				var folders = 0,
					files = 0;
				_.each(this.content, function (item) {
					if (item.isFolder()) {
						folders += 1;
					} else {
						files += 1;
					}
				});
				var depth = 0,
					item = this;
				while (item.parent) {
					depth += 1;
					item = item.parent;
				}
				return {
					folders: folders,
					files: files,
					depth: depth
				};
			}
		});
		return {
			get: getItem,
			remove: removeItem
		};
	});


	modulejs.define('view/ensure', ['$', 'config', 'core/event'], function ($, config, event) {
		var selb = '#bottombar',
			selr = selb + ' .right',
			sela = selr + ' a',
			sequence = 'powered by h5ai + mod by jezikk ' + config.setup.VERSION,
			url = 'http://larsjung.de/h5ai/',
			isVisible = ':visible',
			styleKey = 'style',
			styleVal = 'display: inline !important',
			ensure = function () {
				if (
					$(selr).text() !== sequence ||
					$(sela).filter(isVisible).length !== 1 ||
					$(selr).filter(isVisible).length !== 1 ||
					$(selb).filter(isVisible).length !== 1
				) {
					if ($(selb).filter(isVisible).length !== 1) {
						$(selb).remove();
						$('<div id="bottombar"/>').attr(styleKey, styleVal).appendTo('body');
					}
					$(selr).remove();
					$('<span><a/></span>')
						.addClass('right')
						.attr(styleKey, styleVal)
						.find('a')
							.attr('href', url)
							.attr('title', sequence)
							.text(sequence)
							.attr(styleKey, styleVal)
						.end()
						.prependTo(selb);
				}
			},
			init = function () {
				event.sub('ready', function () {
					ensure();
					setInterval(ensure, 60000);
				});
			};
		init();
	});


	modulejs.define('view/items', ['_', '$', 'core/settings', 'core/resource', 'core/format', 'core/event', 'core/location'], function (_, $, allsettings, resource, format, event, location) {
		var settings = _.extend({
				binaryPrefix: false,
				hideFolders: false,
				hideParentFolder: false,
				setParentFolderLabels: false
			}, allsettings.view),
			itemTemplate = '<li class="item">' +
							'<a>' +
								( !settings.suppressicon ? '<span class="icon square"><img/></span>' : '' ) +
								( !settings.suppressicon ? '<span class="icon rational"><img/></span>' : '' ) +
								'<span class="label"/>' +
								( !settings.suppresslastmodified ? '<span class="date"/>' : '' ) +
								( !settings.suppresssize ? '<span class="size"/>' : '' ) +
							'</a>' +
						'</li>',
			hintTemplate = '<span class="hint"/>',
			contentTemplate = '<div id="content">' +
								'<div id="view">' +
									'<ul id="items" class="clearfix">' +
										'<li class="header">' +
											( !settings.suppressicon ? '<a class="icon"/>' +
											'<a class="label" href="#"><span class="l10n-name"/></a>' : '' ) +
											( !settings.suppresslastmodified ? '<a class="date" href="#"><span class="l10n-lastModified"/></a>' : '' ) +
											( !settings.suppresssize ? '<a class="size" href="#"><span class="l10n-size"/></a>' : '' ) +
										'</li>' +
									'</ul>' +
									'<div class="empty l10n-empty"/>' +
								'</div>' +
							'</div>',
			update = function (item, force) {
				if (!force && item.$view) {
					return item.$view;
				}
				var $html = $(itemTemplate),
					$a = $html.find('a'),
					$iconImg = $html.find('.icon img'),
					$label = $html.find('.label'),
					$date = $html.find('.date'),
					$size = $html.find('.size');
				$html
					.addClass(item.isFolder() ? 'folder' : 'file')
					.data('item', item);
				location.setLink($a, item);
				$iconImg.attr('src', resource.icon(item.type)).attr('alt', item.type);
				$label.text(item.label);
				$date.data('time', item.time).text(format.formatDate(item.time));
				$size.data('bytes', item.size).text(format.formatSize(item.size));
				if (item.isFolder() && !item.isManaged) {
					$html.addClass('page');
					$iconImg.attr('src', resource.icon('folder-page'));
				}
				if (item.isCurrentParentFolder()) {
					$iconImg.attr('src', resource.icon('folder-parent'));
					if (!settings.setParentFolderLabels) {
						$label.addClass('l10n-parentDirectory');
					}
					$html.addClass('folder-parent');
				}
				if (item.$view) {
					item.$view.replaceWith($html);
				}
				item.$view = $html;
				return $html;
			},
			onMouseenter = function () {
				var item = $(this).closest('.item').data('item');
				event.pub('item.mouseenter', item);
			},
			onMouseleave = function () {
				var item = $(this).closest('.item').data('item');
				event.pub('item.mouseleave', item);
			},
			onLocationChanged = function (item) {
				var $items = $('#items'),
					$empty = $('#view').find('.empty');
				$items.find('.item').remove();
				if (item.parent && !settings.hideParentFolder) {
					$items.append(update(item.parent, true));
				}
				_.each(item.content, function (e) {
					if (!(e.isFolder() && settings.hideFolders)) {
						$items.append(update(e, true));
					}
				});
				if (item.isEmpty()) {
					$empty.show();
				} else {
					$empty.hide();
				}
				$('html,body').scrollLeft(0).scrollTop(0);
			},
			onLocationRefreshed = function (item, added, removed) {
				var $items = $('#items'),
					$empty = $('#view').find('.empty');
				_.each(added, function (item) {
					if (!(item.isFolder() && settings.hideFolders)) {
						update(item, true).hide().appendTo($items).fadeIn(400);
					}
				});
				_.each(removed, function (item) {
					item.$view.fadeOut(400, function () {
						item.$view.remove();
					});
				});
				if (item.isEmpty()) {
					setTimeout(function () { $empty.show(); }, 400);
				} else {
					$empty.hide();
				}
			},
			init = function () {
				var $content = $(contentTemplate),
					$view = $content.find('#view'),
					$items = $view.find('#items'),
					$emtpy = $view.find('.empty').hide();
				format.setDefaultMetric(settings.binaryPrefix);
				$items
					.on('mouseenter', '.item a', onMouseenter)
					.on('mouseleave', '.item a', onMouseleave);
				event.sub('location.changed', onLocationChanged);
				event.sub('location.refreshed', onLocationRefreshed);
				$content.appendTo('body');
			};
		init();
	});


	modulejs.define('view/spacing', ['_', '$', 'core/settings', 'core/event'], function (_, $, allsettings, event) {
		var settings = _.extend({
				maxWidth: 960,
				top: 50,
				right: 'auto',
				bottom: 50,
				left: 'auto'
			}, allsettings.spacing),
			adjustSpacing = function () {
				$('#content').css({
					'margin-top': settings.top + $('#topbar').outerHeight(),
					'margin-bottom': settings.bottom + $('#bottombar').outerHeight()
				});
			},
			init = function () {
				$('#content').css({
					'max-width': settings.maxWidth,
					'margin-right': settings.right,
					'margin-left': settings.left
				});
				event.sub('ready', adjustSpacing);
				$(window).on('resize', adjustSpacing);
			};
		init();
	});


	modulejs.define('view/viewmode', ['_', '$', 'core/settings', 'core/resource', 'core/store', 'core/event'], function (_, $, allsettings, resource, store, event) {
		var modes = ['details', 'grid', 'icons'],
			sizes = [16, 24, 32, 48, 64, 96, 128, 192, 256, 384],
			settings = _.extend({}, {
				modes: modes,
				sizes: sizes
			}, allsettings.view),
			storekey = 'viewmode',
			menuIsVisible = false,
			sidebarToggleTemplate =
				'<li id="menu-toggle" class="view">' +
					'<a href="#">' +
						'<img src="' + resource.image('settings') + '" alt="settings"/>' +
					'</a>' +
				'</li>',
			modeTemplate =
				'<div id="view-[MODE]" class="view">' +
					'<a href="#">' +
						'<img src="' + resource.image('view-[MODE]') + '" alt="view-[MODE]"/>' +
					'</a>' +
				'</div>',
			sizeTemplate =
				'<input id="view-size" type="range" min="0" max="0" value="0">',
			adjustSpacing = function () {
				var contentWidth = $('#content').width(),
					$view = $('#view'),
					itemWidth = ($view.hasClass('view-icons') || $view.hasClass('view-grid')) ? ($view.find('.item').eq(0).outerWidth(true) || 1) : 1;
				$view.width(Math.floor(contentWidth / itemWidth) * itemWidth);
			},
			update = function (mode, size) {
				var $view = $('#view'),
					stored = store.get(storekey);
				mode = mode || stored && stored.mode;
				size = size || stored && stored.size;
				mode = _.contains(settings.modes, mode) ? mode : settings.modes[0];
				size = _.contains(settings.sizes, size) ? size : settings.sizes[0];
				store.put(storekey, {mode: mode, size: size});
				_.each(modes, function (m) {
					if (m === mode) {
						$('#view-' + m).addClass('current');
						$view.addClass('view-' + m).show();
					} else {
						$('#view-' + m).removeClass('current');
						$view.removeClass('view-' + m);
					}
				});
				_.each(sizes, function (s) {
					if (s === size) {
						$view.addClass('size-' + s).show();
					} else {
						$view.removeClass('size-' + s);
					}
				});
				$('#view-size').val(_.indexOf(_.intersection(sizes, settings.sizes), size));
				adjustSpacing();
			},
			init = function () {
				var $sidebar = $('#sidebar'),
					$settings = $('#settings'),
					$viewBlock = $('<div class="block"/>'),
					max;
				$(sidebarToggleTemplate)
					.on('click', 'a', function (event) {
						menuIsVisible = !menuIsVisible;
						$sidebar.stop().animate({
							right: menuIsVisible ? 0 : -$sidebar.outerWidth()-1
						});
						event.preventDefault();
					})
					.appendTo('#navbar');
				settings.modes = _.intersection(settings.modes, modes);
				if (settings.modes.length > 1) {
					_.each(modes, function (mode) {
						if (_.contains(settings.modes, mode)) {
							$(modeTemplate.replace(/\[MODE\]/g, mode))
								.appendTo($viewBlock)
								.on('click', 'a', function (event) {
									update(mode);
									event.preventDefault();
								});
						}
					});
				}
				if (settings.sizes.length > 1) {
					max = settings.sizes.length-1;
					$(sizeTemplate)
						.prop('max', max).attr('max', max)
						.on('input change', function (event) {
							update(null, settings.sizes[parseInt(event.target.value, 10)]);
						})
						.appendTo($viewBlock);
				}
				$viewBlock.appendTo($settings);
				update();
				event.sub('location.changed', adjustSpacing);
				$(window).on('resize', adjustSpacing);
			};
		init();
	});

	var	$ = jQuery,
		module = $('script[data-module]').data('module'),
		url;

	if ($('html').hasClass('no-browser')) {
		return;
	}

	if (module === 'main') {
		url = '.';
	} else if (module === 'info') {
		url = 'server/php/index.php';
	} else {
		return;
	}

	$.ajax({
		url: url,
		data: {action: 'get', setup: true, options: true, types: true, theme: true, langs: true},
		type: 'POST',
		dataType: 'json'
	}).done(function (config) {

		modulejs.define('config', config);
		$(function () { modulejs.require(module); });
	});

}());

var md5=(function(){function e(e,t){var o=e[0],u=e[1],a=e[2],f=e[3];o=n(o,u,a,f,t[0],7,-680876936);f=n(f,o,u,a,t[1],
12,-389564586);a=n(a,f,o,u,t[2],17,606105819);u=n(u,a,f,o,t[3],22,-1044525330);o=n(o,u,a,f,t[4],7,-176418897);f=n(f,o,u,a,t[5],
12,1200080426);a=n(a,f,o,u,t[6],17,-1473231341);u=n(u,a,f,o,t[7],22,-45705983);o=n(o,u,a,f,t[8],7,1770035416);f=n(f,o,u,a,t[9],
12,-1958414417);a=n(a,f,o,u,t[10],17,-42063);u=n(u,a,f,o,t[11],22,-1990404162);o=n(o,u,a,f,t[12],7,1804603682);f=n(f,o,u,a,t[13],
12,-40341101);a=n(a,f,o,u,t[14],17,-1502002290);u=n(u,a,f,o,t[15],22,1236535329);o=r(o,u,a,f,t[1],5,-165796510);f=r(f,o,u,a,t[6],
9,-1069501632);a=r(a,f,o,u,t[11],14,643717713);u=r(u,a,f,o,t[0],20,-373897302);o=r(o,u,a,f,t[5],5,-701558691);f=r(f,o,u,a,t[10],
9,38016083);a=r(a,f,o,u,t[15],14,-660478335);u=r(u,a,f,o,t[4],20,-405537848);o=r(o,u,a,f,t[9],5,568446438);f=r(f,o,u,a,t[14],
9,-1019803690);a=r(a,f,o,u,t[3],14,-187363961);u=r(u,a,f,o,t[8],20,1163531501);o=r(o,u,a,f,t[13],5,-1444681467);f=r(f,o,u,a,t[2],
9,-51403784);a=r(a,f,o,u,t[7],14,1735328473);u=r(u,a,f,o,t[12],20,-1926607734);o=i(o,u,a,f,t[5],4,-378558);f=i(f,o,u,a,t[8],
11,-2022574463);a=i(a,f,o,u,t[11],16,1839030562);u=i(u,a,f,o,t[14],23,-35309556);o=i(o,u,a,f,t[1],4,-1530992060);f=i(f,o,u,a,t[4],
11,1272893353);a=i(a,f,o,u,t[7],16,-155497632);u=i(u,a,f,o,t[10],23,-1094730640);o=i(o,u,a,f,t[13],4,681279174);f=i(f,o,u,a,t[0],
11,-358537222);a=i(a,f,o,u,t[3],16,-722521979);u=i(u,a,f,o,t[6],23,76029189);o=i(o,u,a,f,t[9],4,-640364487);f=i(f,o,u,a,t[12],
11,-421815835);a=i(a,f,o,u,t[15],16,530742520);u=i(u,a,f,o,t[2],23,-995338651);o=s(o,u,a,f,t[0],6,-198630844);f=s(f,o,u,a,t[7],
10,1126891415);a=s(a,f,o,u,t[14],15,-1416354905);u=s(u,a,f,o,t[5],21,-57434055);o=s(o,u,a,f,t[12],6,1700485571);f=s(f,o,u,a,t[3],
10,-1894986606);a=s(a,f,o,u,t[10],15,-1051523);u=s(u,a,f,o,t[1],21,-2054922799);o=s(o,u,a,f,t[8],6,1873313359);f=s(f,o,u,a,t[15],
10,-30611744);a=s(a,f,o,u,t[6],15,-1560198380);u=s(u,a,f,o,t[13],21,1309151649);o=s(o,u,a,f,t[4],6,-145523070);f=s(f,o,u,a,t[11],
10,-1120210379);a=s(a,f,o,u,t[2],15,718787259);u=s(u,a,f,o,t[9],21,-343485551);e[0]=m(o,e[0]);e[1]=m(u,e[1]);e[2]=m(a,e[2]);e[3]=m(f,e[3])}
function t(e,t,n,r,i,s){t=m(m(t,e),m(r,s));return m(t<<i|t>>>32-i,n)}function n(e,n,r,i,s,o,u){return t(n&r|~n&i,e,n,s,o,u)}
function r(e,n,r,i,s,o,u){return t(n&i|r&~i,e,n,s,o,u)}function i(e,n,r,i,s,o,u){return t(n^r^i,e,n,s,o,u)}
function s(e,n,r,i,s,o,u){return t(r^(n|~i),e,n,s,o,u)}function o(t){var n=t.length,r=[1732584193,-271733879,-1732584194,271733878],i;
for(i=64;i<=t.length;i+=64){e(r,u(t.substring(i-64,i)))}t=t.substring(i-64);var s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for(i=0;i<t.length;i++)s[i>>2]|=t.charCodeAt(i)<<(i%4<<3);s[i>>2]|=128<<(i%4<<3);if(i>55){e(r,s);for(i=0;i<16;i++)s[i]=0}s[14]=n*8;e(r,s);return r}
function u(e){var t=[],n;for(n=0;n<64;n+=4){t[n>>2]=e.charCodeAt(n)+(e.charCodeAt(n+1)<<8)+(e.charCodeAt(n+2)<<16)+(e.charCodeAt(n+3)<<24)}return t}
function c(e){var t="",n=0;for(;n<4;n++)t+=a[e>>n*8+4&15]+a[e>>n*8&15];return t}
function h(e){for(var t=0;t<e.length;t++)e[t]=c(e[t]);return e.join("")}
function d(e){return h(o(unescape(encodeURIComponent(e))))}
function m(e,t){return e+t&4294967295}var a="0123456789abcdef".split("");return d})();
