// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8uBhv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "0b7c8afcb31310b1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4aleK":[function(require,module,exports) {
var _text = require("./components/text");
var _button = require("./components/button");
var _options = require("./components/options");
var _countDown = require("./components/countDown");
var _start = require("./components/start");
var _router = require("./router");
function main() {
    const root = document.querySelector(".root");
    _router.initRouter(root);
}
main(); //let counter = 0;
 //const intervalId = setInterval(() => {
 //  counter++;
 //  console.log(Math.random());
 // if (counter > 2) {
 //   clearInterval(intervalId);
 // }
 // }, 1000);

},{"./components/text":"8YEyP","./components/button":"3uBrB","./components/options":"iM5Mp","./components/countDown":"iJCQv","./components/start":"dk3s0","./router":"b2iia"}],"8YEyP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Text", ()=>Text1
);
class Text1 extends HTMLElement {
    constructor(){
        super();
        this.tags = [
            "h1",
            "h2",
            "h3",
            "p"
        ];
        this.tag = "p";
        this.shadow = this.attachShadow({
            mode: "open"
        });
        if (this.tags.includes(this.getAttribute("tag"))) this.tag = this.getAttribute("tag") || this.tag;
        this.render();
    }
    render() {
        const style = document.createElement("style");
        style.innerHTML = `\n    h1{\n      font-family: 'Anton', sans-serif;\n      font-size: 80px;\n      line-height: 61px;\n      font-weight: bold;\n      padding: 0px 30px;\n    }\n    h2{\n     font-size: 55px;\n     line-height: 61px;\n     margin: 0px;\n    }\n    h3{\n     font-family: 'Noto Sans JP', sans-serif;\n     font-weight: 600;\n     font-size: 40px;\n     line-height: 100%;\n    }\n    p{\n      font-family: 'Noto Sans JP', sans-serif;\n      font-size: 18px;\n      text-align: right;\n    }\n    `;
        const rootEl = document.createElement(this.tag);
        rootEl.textContent = this.textContent;
        this.shadow.appendChild(style);
        this.shadow.appendChild(rootEl);
    }
}
customElements.define("my-text", Text1);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3uBrB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Button", ()=>Button
);
class Button extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render() {
        const shadow = this.attachShadow({
            mode: "open"
        });
        const button = document.createElement("button");
        button.className = "root";
        const style = document.createElement("style");
        style.innerHTML = `\n            .root{\n                min-width: 322px; \n                line-height: 55px;\n                margin: 12px 0px;\n                border-radius: 20px;\n                font-size: 22px;\n                text-align: center;\n                font-family: 'Anton', sans-serif;\n            }\n            @media (min-width: 899px){\n                .root{\n                  margin-left: 10px;\n                  \n                }\n              }\n        `;
        button.textContent = this.textContent;
        shadow.appendChild(button);
        shadow.appendChild(style);
    }
}
customElements.define("my-button", Button);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"iM5Mp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Options", ()=>Options
);
class Options extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        const style = document.createElement("style");
        style.innerText = `\n        .root{\n          display: flex;\n          flex-direction: row; \n          justify-content: space-between;\n          width: 322px;\n        }\n        .option{\n          background: #456BD9;\n          border: 0.1875em solid #0F1C3F;\n          border-radius: 50%;\n          box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);\n          height: 100px;\n          width: 100px;\n          text-align: center;\n          }\n        .option:hover {\n          background: green;\n          height: 110px;\n          width: 110px;\n        }\n        .tijera,\n        .piedra,\n        .papel{\n          height: 60px;\n          width: 60px;\n          padding: 15%;\n        }\n        \n        \n            `;
        this.shadow.appendChild(style);
        this.render();
    }
    addListeners() {
        const options = this.shadow.querySelectorAll(".option");
        for (const option of options)option.addEventListener("click", (e)=>{
            const param = option.id;
            const event = new CustomEvent("optionEvent", {
                detail: {
                    type: param
                }
            });
            this.dispatchEvent(event);
        });
    }
    render() {
        const tijeraURL = require("url:../../img/tijeraImg.svg");
        const piedraURL = require("url:../../img/piedraImg.svg");
        const papelURL = require("url:../../img/papelImg.svg");
        const divEl = document.createElement("div");
        divEl.className = "root";
        divEl.innerHTML = `\n    <button class="option" id= "tijera"><img class="tijera" src=${tijeraURL}></button>\n    <button class="option" id= "piedra"><img class="piedra" src=${piedraURL}></button>\n    <button class="option" id= "papel"><img class="papel" src=${papelURL}></button>\n        `;
        this.shadow.appendChild(divEl);
        if (location.pathname.includes("game")) this.addListeners();
    }
}
customElements.define("options-comp", Options);

},{"url:../../img/tijeraImg.svg":"3qr5s","url:../../img/piedraImg.svg":"7Fctl","url:../../img/papelImg.svg":"4rAyU","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3qr5s":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "tijeraImg.867dca08.svg";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"7Fctl":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "piedraImg.9194d82c.svg";

},{"./helpers/bundle-url":"8YnfL"}],"4rAyU":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "papelImg.954c9108.svg";

},{"./helpers/bundle-url":"8YnfL"}],"iJCQv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CountDown", ()=>CountDown
);
class CountDown extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render() {
        const shadow = this.attachShadow({
            mode: "open"
        });
        const FULL_DASH_ARRAY = 283;
        const WARNING_THRESHOLD = 10;
        const ALERT_THRESHOLD = 5;
        const COLOR_CODES = {
            info: {
                color: "green"
            },
            warning: {
                color: "orange",
                threshold: WARNING_THRESHOLD
            },
            alert: {
                color: "red",
                threshold: ALERT_THRESHOLD
            }
        };
        const TIME_LIMIT = 3;
        let timePassed = 0;
        let timeLeft = TIME_LIMIT;
        let timerInterval = null;
        let remainingPathColor = COLOR_CODES.info.color;
        const divCountDown = document.createElement("div");
        divCountDown.innerHTML = `\n    <div class="base-timer">\n      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n        <g class="base-timer__circle">\n          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>\n          <path\n            id="base-timer-path-remaining"\n            stroke-dasharray="283"\n            class="base-timer__path-remaining ${remainingPathColor}"\n            d="\n              M 50, 50\n              m -45, 0\n              a 45,45 0 1,0 90,0\n              a 45,45 0 1,0 -90,0\n            "\n          ></path>\n        </g>\n      </svg>\n      <span id="base-timer-label" class="base-timer__label">\n      ${formatTime(timeLeft)}\n      </span>\n    </div>\n    `;
        console.log();
        startTimer();
        function onTimesUp() {
            clearInterval(timerInterval);
            divCountDown.innerHTML = `\n      <div class="root">\n      <my-text tag="h2"> Se acabó tu tiempo</my-text>\n      <my-button class="reinit-button"> Reiniciar<my-button>\n      </div>\n      `;
            const button = divCountDown.querySelector(".reinit-button");
            button.addEventListener("click", ()=>{
                location.reload();
            });
        }
        function startTimer() {
            timerInterval = setInterval(()=>{
                timePassed = timePassed += 1;
                timeLeft = TIME_LIMIT - timePassed;
                shadow.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
                setCircleDasharray();
                setRemainingPathColor(timeLeft);
                if (timeLeft === 0) onTimesUp();
            }, 1000);
        }
        function formatTime(time) {
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;
            if (seconds < 10) seconds = `${seconds}`;
            return `${seconds}`;
        }
        function setRemainingPathColor(timeLeft1) {
            const { alert , warning , info  } = COLOR_CODES;
            if (timeLeft1 <= alert.threshold) {
                shadow.getElementById("base-timer-path-remaining").classList.remove(warning.color);
                shadow.getElementById("base-timer-path-remaining").classList.add(alert.color);
            } else if (timeLeft1 <= warning.threshold) {
                shadow.getElementById("base-timer-path-remaining").classList.remove(info.color);
                shadow.getElementById("base-timer-path-remaining").classList.add(warning.color);
            }
        }
        function calculateTimeFraction() {
            const rawTimeFraction = timeLeft / TIME_LIMIT;
            return rawTimeFraction - 1 / TIME_LIMIT * (1 - rawTimeFraction);
        }
        function setCircleDasharray() {
            const circleDasharray = `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`;
            shadow.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray);
        }
        const style = document.createElement("style");
        style.innerHTML = `\n    .root{ \n      display: flex;\n      flex-direction: column; \n      align-items: center;\n      justify-content: space-around;\n      \n  \n    }\n    .base-timer {\n        position: relative;\n        width: 300px;\n        height: 300px;\n      }\n      \n      .base-timer__svg {\n        transform: scaleX(-1);\n      }\n      \n      .base-timer__circle {\n        fill: none;\n        stroke: none;\n      }\n      \n      .base-timer__path-elapsed {\n        stroke-width: 7px;\n        stroke: grey;\n      }\n      \n      .base-timer__path-remaining {\n        stroke-width: 7px;\n        stroke-linecap: round;\n        transform: rotate(90deg);\n        transform-origin: center;\n        transition: 1s linear all;\n        fill-rule: nonzero;\n        stroke: currentColor;\n      }\n      \n      .base-timer__path-remaining.green {\n        color: rgb(65, 184, 131);\n      }\n      \n      .base-timer__path-remaining.orange {\n        color: orange;\n      }\n      \n      .base-timer__path-remaining.red {\n        color: red;\n      }\n      \n      .base-timer__label {\n        position: absolute;\n        width: 300px;\n        height: 300px;\n        top: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 48px;\n      }\n    `;
        shadow.appendChild(style);
        shadow.appendChild(divCountDown);
    }
}
customElements.define("count-down", CountDown);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dk3s0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Star", ()=>Star
);
class Star extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render() {
        const shadow = this.attachShadow({
            mode: "open"
        });
        const startWinURL = require("url:../../img/starWin.svg");
        const startLoseURL = require("url:../../img/starLose.svg");
        const divEl = document.createElement("div");
        divEl.className = "root";
        divEl.innerHTML = `\n    <img class="star"  src=${startWinURL}>\n    <my-text tag="h3" class="centered">Perdiste</my-text>\n    </img>\n    <!---img class="star"  src=${startLoseURL}--->\n      `;
        const style = document.createElement("style");
        style.innerHTML = `\n      .root{\n        text-align: center;\n        position: relative;\n      }\n      .star{\n        width: 259px;\n        height: 259px;\n      }\n      .centered {\n        position: absolute;\n        top: 48%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n      }\n          `;
        shadow.appendChild(divEl);
        shadow.appendChild(style);
    }
}
customElements.define("star-comp", Star);

},{"url:../../img/starWin.svg":"3JBR6","url:../../img/starLose.svg":"iILg3","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3JBR6":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "starWin.7428fa67.svg";

},{"./helpers/bundle-url":"8YnfL"}],"iILg3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "starLose.d55bde77.svg";

},{"./helpers/bundle-url":"8YnfL"}],"b2iia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _welcome = require("./pages/welcome");
var _instrucciones = require("./pages/instrucciones");
var _game = require("./pages/game");
var _results = require("./pages/results");
const routes = [
    {
        path: /\/welcome/,
        component: _welcome.initWelcomePage
    },
    {
        path: /\/instrucciones/,
        component: _instrucciones.initPlayPage
    },
    {
        path: /\/game/,
        component: _game.initGamePage
    },
    {
        path: /\/results/,
        component: _results.initResultsPage
    }, 
];
function initRouter(conteiner) {
    function goTo(path) {
        history.pushState({
        }, "", path);
        console.log("hola");
        handleRoute(path);
    }
    function handleRoute(route) {
        console.log("El handleRoute recibió una nueva ruta", route);
        for (const r of routes)if (r.path.test(route)) {
            const el = r.component({
                goTo: goTo
            });
            if (conteiner.firstChild) conteiner.firstChild.remove(el);
        //conteiner.appendChild(el);
        }
    }
    if (location.pathname == "/") goTo("/welcome");
    else handleRoute(location.pathname);
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"./pages/welcome":"bFh5y","./pages/game":"d7f6n","./pages/results":"8GXDd","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./pages/instrucciones":"aBQh9"}],"bFh5y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcomePage", ()=>initWelcomePage
);
function initWelcomePage(conteiner) {
    const divEl = document.querySelector(".root");
    divEl.innerHTML = `\n  <div class="title-conteiner">\n  <my-text tag="h1">Piedra, papel o tijera</my-text>\n  </div>\n  <my-button class="start-button">Empezar</my-button>\n  <options-comp></options-comp>\n  `;
    const style = document.createElement("style");
    style.innerText = `\n  .root{\n    display: flex;\n    flex-direction: column; \n    align-items: center;\n    justify-content: space-around;\n    min-width: 375px;\n    min-height: 672px;\n    background-color: pink;\n  }\n  .title-conteiner{\n    width: 284px;\n    height: 204px;\n  }\ns  `;
    divEl.appendChild(style);
    const buttonEl = divEl.querySelector(".start-button");
    buttonEl.addEventListener("click", ()=>{
        conteiner.goTo("/instrucciones");
    });
    return divEl;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"d7f6n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initGamePage", ()=>initGamePage
);
var _state = require("../../state");
function initGamePage(conteiner) {
    const divEl = document.querySelector(".root");
    divEl.innerHTML = `\n    <count-down></count-down>\n    <div class="options"> \n    <options-comp></options-comp>\n    </div> \n  `;
    console.log(_state.state.data.currentGame);
    const options = divEl.querySelector(".options").children;
    for (const option of options)option.addEventListener("optionEvent", (e)=>{
        const typeSelected = e.detail.type;
        _state.state.setMove(typeSelected);
        _state.state.computerMove();
        _state.state.saveData();
        conteiner.goTo("/results");
    });
    const style = document.createElement("style");
    style.innerText = `\n  .root{\n    display: flex;\n    flex-direction: column; \n    align-items: center;\n    justify-content: space-around;\n    min-width: 375px;\n    min-height: 672px;\n    background-color: pink;\n  }\n  \n  `;
    divEl.appendChild(style);
    return divEl;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","../../state":"28XHA"}],"28XHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: ""
        },
        history: []
    },
    getState () {
        if (localStorage.getItem("data")) this.data = JSON.parse(localStorage.getItem("data"));
        return this.data;
    },
    setMove (move) {
        this.data.currentGame.myPlay = move;
        this.saveData();
    },
    PushToHistory (winner) {
        this.data.history.push(winner);
    },
    whoWins () {
        const computerPlay = this.data.currentGame.computerPlay;
        const myPlay = this.data.currentGame.myPlay;
        const game = [
            myPlay === "tijera" && computerPlay === "papel",
            myPlay === "papel" && computerPlay === "piedra",
            myPlay === "piedra" && computerPlay === "tijera", 
        ];
        if (game.includes(true)) {
            this.PushToHistory(true);
            return true;
        } else {
            this.PushToHistory(false);
            return false;
        }
    },
    computerMove () {
        const options = [
            "tijera",
            "papel",
            "piedra"
        ];
        const index = Math.floor(Math.random() * 3) + 0;
        let computerPlay = options[index];
        if (computerPlay === this.data.currentGame.myPlay) {
            const newIndex = Math.floor(Math.random() * 3) + 0;
            computerPlay = options[newIndex];
        }
        this.saveData();
        this.data.currentGame.computerPlay = computerPlay;
        return computerPlay;
    },
    getScore () {
        let win = 0;
        let loose = 0;
        for (const game of this.data.history){
            if (game === true) win += 1;
            if (game === false) loose += 1;
        }
        return {
            win: win,
            loose: loose
        };
    },
    saveData () {
        localStorage.setItem("data", JSON.stringify(this.data));
    },
    cleanData () {
        localStorage.setItem("data", JSON.stringify({
            currentGame: {
                computerPlay: "",
                myPlay: "",
                winner: true
            },
            history: []
        }));
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8GXDd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResultsPage", ()=>initResultsPage
);
var _state = require("../../state");
function initResultsPage(conteiner) {
    const divEl = document.querySelector(".root");
    const style = document.createElement("style");
    style.innerText = `\n    .root{\n      display: flex;\n      flex-direction: column; \n      align-items: center;\n      justify-content: space-around;\n      min-width: 375px;\n      min-height: 672px;\n      background-color: pink;\n    }\n    .score-conteiner{\n      display: flex;\n      flex-direction: column;\n      width: 259px;\n      height: 217px;\n      padding: 15px 30px;\n      background-color: #FFFFFF;\n      border: 10px solid #000000;\n      border-radius: 10px;\n    }\n    `;
    let result;
    if (_state.state.whoWins()) result = "win";
    else result = "loose";
    divEl.innerHTML = `\n    <star-comp></star-comp>\n    <div class="score-conteiner"> \n    <my-text tag="h2">Puntaje</my-text>\n    <my-text tag="p" id="your-scrore">Vos:${_state.state.getScore().loose}</my-text>\n    <my-text tag="p" id="computer-scrore">Máquina:${_state.state.getScore().win}</my-text>\n    </div>\n    <my-button class="re-starButton">Volver a jugar</my-button>\n    `;
    const buttonReStartEl = divEl.querySelector(".re-starButton");
    buttonReStartEl.addEventListener("click", ()=>{
        conteiner.goTo("/welcome");
    });
    divEl.appendChild(style);
    _state.state.saveData;
    return divEl;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","../../state":"28XHA"}],"aBQh9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPlayPage", ()=>initPlayPage
);
function initPlayPage(conteiner) {
    const divEl = document.querySelector(".root");
    divEl.innerHTML = `\n  <div class="title-conteiner">\n  <my-text tag="h3">Presioná jugar\n  y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>\n  </div>\n  <my-button class="start-button">Jugar</my-button>\n  <options-comp></options-comp>\n  `;
    const style = document.createElement("style");
    style.innerText = `\n  .root{\n    display: flex;\n    flex-direction: column; \n    align-items: center;\n    justify-content: space-around;\n    min-width: 375px;\n    min-height: 672px;\n    background-color: pink;\n  }\n  .title-conteiner{\n    width: 284px;\n    height: 204px;\n    text-align: center;\n  }\n  .options-conteiner{ \n  }\n  `;
    divEl.appendChild(style);
    const buttonEl = divEl.querySelector(".start-button");
    buttonEl.addEventListener("click", ()=>{
        conteiner.goTo("/game");
    });
    return divEl;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["8uBhv","4aleK"], "4aleK", "parcelRequiref4be")

//# sourceMappingURL=index.b31310b1.js.map
