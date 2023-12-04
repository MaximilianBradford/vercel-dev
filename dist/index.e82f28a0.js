// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4FFYD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "207a8fdfe82f28a0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"dV6cC":[function(require,module,exports) {
var _radash = require("radash");
const fish = [
    {
        name: "Marlin",
        weight: 105
    },
    {
        name: "Bass",
        weight: 8
    },
    {
        name: "Trout",
        weight: 13
    }
];
const arr = (0, _radash.sort)(fish, (f)=>f.weight) // => [bass, trout, marlin]
;
console.log(arr);

},{"radash":"c2UA1"}],"c2UA1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "alphabetical", ()=>(0, _arrayMjs.alphabetical));
parcelHelpers.export(exports, "boil", ()=>(0, _arrayMjs.boil));
parcelHelpers.export(exports, "cluster", ()=>(0, _arrayMjs.cluster));
parcelHelpers.export(exports, "counting", ()=>(0, _arrayMjs.counting));
parcelHelpers.export(exports, "diff", ()=>(0, _arrayMjs.diff));
parcelHelpers.export(exports, "first", ()=>(0, _arrayMjs.first));
parcelHelpers.export(exports, "flat", ()=>(0, _arrayMjs.flat));
parcelHelpers.export(exports, "fork", ()=>(0, _arrayMjs.fork));
parcelHelpers.export(exports, "group", ()=>(0, _arrayMjs.group));
parcelHelpers.export(exports, "intersects", ()=>(0, _arrayMjs.intersects));
parcelHelpers.export(exports, "iterate", ()=>(0, _arrayMjs.iterate));
parcelHelpers.export(exports, "last", ()=>(0, _arrayMjs.last));
parcelHelpers.export(exports, "list", ()=>(0, _arrayMjs.list));
parcelHelpers.export(exports, "max", ()=>(0, _arrayMjs.max));
parcelHelpers.export(exports, "merge", ()=>(0, _arrayMjs.merge));
parcelHelpers.export(exports, "min", ()=>(0, _arrayMjs.min));
parcelHelpers.export(exports, "objectify", ()=>(0, _arrayMjs.objectify));
parcelHelpers.export(exports, "range", ()=>(0, _arrayMjs.range));
parcelHelpers.export(exports, "replace", ()=>(0, _arrayMjs.replace));
parcelHelpers.export(exports, "replaceOrAppend", ()=>(0, _arrayMjs.replaceOrAppend));
parcelHelpers.export(exports, "select", ()=>(0, _arrayMjs.select));
parcelHelpers.export(exports, "shift", ()=>(0, _arrayMjs.shift));
parcelHelpers.export(exports, "sift", ()=>(0, _arrayMjs.sift));
parcelHelpers.export(exports, "sort", ()=>(0, _arrayMjs.sort));
parcelHelpers.export(exports, "sum", ()=>(0, _arrayMjs.sum));
parcelHelpers.export(exports, "toggle", ()=>(0, _arrayMjs.toggle));
parcelHelpers.export(exports, "unique", ()=>(0, _arrayMjs.unique));
parcelHelpers.export(exports, "zip", ()=>(0, _arrayMjs.zip));
parcelHelpers.export(exports, "zipToObject", ()=>(0, _arrayMjs.zipToObject));
parcelHelpers.export(exports, "all", ()=>(0, _asyncMjs.all));
parcelHelpers.export(exports, "defer", ()=>(0, _asyncMjs.defer));
parcelHelpers.export(exports, "guard", ()=>(0, _asyncMjs.guard));
parcelHelpers.export(exports, "map", ()=>(0, _asyncMjs.map));
parcelHelpers.export(exports, "parallel", ()=>(0, _asyncMjs.parallel));
parcelHelpers.export(exports, "reduce", ()=>(0, _asyncMjs.reduce));
parcelHelpers.export(exports, "retry", ()=>(0, _asyncMjs.retry));
parcelHelpers.export(exports, "sleep", ()=>(0, _asyncMjs.sleep));
parcelHelpers.export(exports, "try", ()=>(0, _asyncMjs.tryit));
parcelHelpers.export(exports, "tryit", ()=>(0, _asyncMjs.tryit));
parcelHelpers.export(exports, "callable", ()=>(0, _curryMjs.callable));
parcelHelpers.export(exports, "chain", ()=>(0, _curryMjs.chain));
parcelHelpers.export(exports, "compose", ()=>(0, _curryMjs.compose));
parcelHelpers.export(exports, "debounce", ()=>(0, _curryMjs.debounce));
parcelHelpers.export(exports, "memo", ()=>(0, _curryMjs.memo));
parcelHelpers.export(exports, "partial", ()=>(0, _curryMjs.partial));
parcelHelpers.export(exports, "partob", ()=>(0, _curryMjs.partob));
parcelHelpers.export(exports, "proxied", ()=>(0, _curryMjs.proxied));
parcelHelpers.export(exports, "throttle", ()=>(0, _curryMjs.throttle));
parcelHelpers.export(exports, "toFloat", ()=>(0, _numberMjs.toFloat));
parcelHelpers.export(exports, "toInt", ()=>(0, _numberMjs.toInt));
parcelHelpers.export(exports, "assign", ()=>(0, _objectMjs.assign));
parcelHelpers.export(exports, "clone", ()=>(0, _objectMjs.clone));
parcelHelpers.export(exports, "construct", ()=>(0, _objectMjs.construct));
parcelHelpers.export(exports, "crush", ()=>(0, _objectMjs.crush));
parcelHelpers.export(exports, "get", ()=>(0, _objectMjs.get));
parcelHelpers.export(exports, "invert", ()=>(0, _objectMjs.invert));
parcelHelpers.export(exports, "keys", ()=>(0, _objectMjs.keys));
parcelHelpers.export(exports, "listify", ()=>(0, _objectMjs.listify));
parcelHelpers.export(exports, "lowerize", ()=>(0, _objectMjs.lowerize));
parcelHelpers.export(exports, "mapEntries", ()=>(0, _objectMjs.mapEntries));
parcelHelpers.export(exports, "mapKeys", ()=>(0, _objectMjs.mapKeys));
parcelHelpers.export(exports, "mapValues", ()=>(0, _objectMjs.mapValues));
parcelHelpers.export(exports, "omit", ()=>(0, _objectMjs.omit));
parcelHelpers.export(exports, "pick", ()=>(0, _objectMjs.pick));
parcelHelpers.export(exports, "set", ()=>(0, _objectMjs.set));
parcelHelpers.export(exports, "shake", ()=>(0, _objectMjs.shake));
parcelHelpers.export(exports, "upperize", ()=>(0, _objectMjs.upperize));
parcelHelpers.export(exports, "draw", ()=>(0, _randomMjs.draw));
parcelHelpers.export(exports, "random", ()=>(0, _randomMjs.random));
parcelHelpers.export(exports, "shuffle", ()=>(0, _randomMjs.shuffle));
parcelHelpers.export(exports, "uid", ()=>(0, _randomMjs.uid));
parcelHelpers.export(exports, "series", ()=>(0, _seriesMjs.series));
parcelHelpers.export(exports, "camel", ()=>(0, _stringMjs.camel));
parcelHelpers.export(exports, "capitalize", ()=>(0, _stringMjs.capitalize));
parcelHelpers.export(exports, "dash", ()=>(0, _stringMjs.dash));
parcelHelpers.export(exports, "pascal", ()=>(0, _stringMjs.pascal));
parcelHelpers.export(exports, "snake", ()=>(0, _stringMjs.snake));
parcelHelpers.export(exports, "template", ()=>(0, _stringMjs.template));
parcelHelpers.export(exports, "title", ()=>(0, _stringMjs.title));
parcelHelpers.export(exports, "trim", ()=>(0, _stringMjs.trim));
parcelHelpers.export(exports, "isArray", ()=>(0, _typedMjs.isArray));
parcelHelpers.export(exports, "isDate", ()=>(0, _typedMjs.isDate));
parcelHelpers.export(exports, "isEmpty", ()=>(0, _typedMjs.isEmpty));
parcelHelpers.export(exports, "isEqual", ()=>(0, _typedMjs.isEqual));
parcelHelpers.export(exports, "isFloat", ()=>(0, _typedMjs.isFloat));
parcelHelpers.export(exports, "isFunction", ()=>(0, _typedMjs.isFunction));
parcelHelpers.export(exports, "isInt", ()=>(0, _typedMjs.isInt));
parcelHelpers.export(exports, "isNumber", ()=>(0, _typedMjs.isNumber));
parcelHelpers.export(exports, "isObject", ()=>(0, _typedMjs.isObject));
parcelHelpers.export(exports, "isPrimitive", ()=>(0, _typedMjs.isPrimitive));
parcelHelpers.export(exports, "isPromise", ()=>(0, _typedMjs.isPromise));
parcelHelpers.export(exports, "isString", ()=>(0, _typedMjs.isString));
parcelHelpers.export(exports, "isSymbol", ()=>(0, _typedMjs.isSymbol));
var _arrayMjs = require("./array.mjs");
var _asyncMjs = require("./async.mjs");
var _curryMjs = require("./curry.mjs");
var _numberMjs = require("./number.mjs");
var _objectMjs = require("./object.mjs");
var _randomMjs = require("./random.mjs");
var _seriesMjs = require("./series.mjs");
var _stringMjs = require("./string.mjs");
var _typedMjs = require("./typed.mjs");

},{"./array.mjs":"3RRXn","./async.mjs":false,"./curry.mjs":false,"./number.mjs":false,"./object.mjs":false,"./random.mjs":false,"./series.mjs":false,"./string.mjs":false,"./typed.mjs":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3RRXn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "alphabetical", ()=>alphabetical);
parcelHelpers.export(exports, "boil", ()=>boil);
parcelHelpers.export(exports, "cluster", ()=>cluster);
parcelHelpers.export(exports, "counting", ()=>counting);
parcelHelpers.export(exports, "diff", ()=>diff);
parcelHelpers.export(exports, "first", ()=>first);
parcelHelpers.export(exports, "flat", ()=>flat);
parcelHelpers.export(exports, "fork", ()=>fork);
parcelHelpers.export(exports, "group", ()=>group);
parcelHelpers.export(exports, "intersects", ()=>intersects);
parcelHelpers.export(exports, "iterate", ()=>iterate);
parcelHelpers.export(exports, "last", ()=>last);
parcelHelpers.export(exports, "list", ()=>list);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "merge", ()=>merge);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "objectify", ()=>objectify);
parcelHelpers.export(exports, "range", ()=>range);
parcelHelpers.export(exports, "replace", ()=>replace);
parcelHelpers.export(exports, "replaceOrAppend", ()=>replaceOrAppend);
parcelHelpers.export(exports, "select", ()=>select);
parcelHelpers.export(exports, "shift", ()=>shift);
parcelHelpers.export(exports, "sift", ()=>sift);
parcelHelpers.export(exports, "sort", ()=>sort);
parcelHelpers.export(exports, "sum", ()=>sum);
parcelHelpers.export(exports, "toggle", ()=>toggle);
parcelHelpers.export(exports, "unique", ()=>unique);
parcelHelpers.export(exports, "zip", ()=>zip);
parcelHelpers.export(exports, "zipToObject", ()=>zipToObject);
var _typedMjs = require("./typed.mjs");
const group = (array, getGroupId)=>{
    return array.reduce((acc, item)=>{
        const groupId = getGroupId(item);
        if (!acc[groupId]) acc[groupId] = [];
        acc[groupId].push(item);
        return acc;
    }, {});
};
function zip(...arrays) {
    if (!arrays || !arrays.length) return [];
    return new Array(Math.max(...arrays.map(({ length })=>length))).fill([]).map((_, idx)=>arrays.map((array)=>array[idx]));
}
function zipToObject(keys, values) {
    if (!keys || !keys.length) return {};
    const getValue = (0, _typedMjs.isFunction)(values) ? values : (0, _typedMjs.isArray)(values) ? (_k, i)=>values[i] : (_k, _i)=>values;
    return keys.reduce((acc, key, idx)=>{
        acc[key] = getValue(key, idx);
        return acc;
    }, {});
}
const boil = (array, compareFunc)=>{
    if (!array || (array.length ?? 0) === 0) return null;
    return array.reduce(compareFunc);
};
const sum = (array, fn)=>{
    return (array || []).reduce((acc, item)=>acc + (fn ? fn(item) : item), 0);
};
const first = (array, defaultValue)=>{
    return array?.length > 0 ? array[0] : defaultValue;
};
const last = (array, defaultValue)=>{
    return array?.length > 0 ? array[array.length - 1] : defaultValue;
};
const sort = (array, getter, desc = false)=>{
    if (!array) return [];
    const asc = (a, b)=>getter(a) - getter(b);
    const dsc = (a, b)=>getter(b) - getter(a);
    return array.slice().sort(desc === true ? dsc : asc);
};
const alphabetical = (array, getter, dir = "asc")=>{
    if (!array) return [];
    const asc = (a, b)=>`${getter(a)}`.localeCompare(getter(b));
    const dsc = (a, b)=>`${getter(b)}`.localeCompare(getter(a));
    return array.slice().sort(dir === "desc" ? dsc : asc);
};
const counting = (list2, identity)=>{
    if (!list2) return {};
    return list2.reduce((acc, item)=>{
        const id = identity(item);
        acc[id] = (acc[id] ?? 0) + 1;
        return acc;
    }, {});
};
const replace = (list2, newItem, match)=>{
    if (!list2) return [];
    if (newItem === void 0) return [
        ...list2
    ];
    for(let idx = 0; idx < list2.length; idx++){
        const item = list2[idx];
        if (match(item, idx)) return [
            ...list2.slice(0, idx),
            newItem,
            ...list2.slice(idx + 1, list2.length)
        ];
    }
    return [
        ...list2
    ];
};
const objectify = (array, getKey, getValue = (item)=>item)=>{
    return array.reduce((acc, item)=>{
        acc[getKey(item)] = getValue(item);
        return acc;
    }, {});
};
const select = (array, mapper, condition)=>{
    if (!array) return [];
    return array.reduce((acc, item, index)=>{
        if (!condition(item, index)) return acc;
        acc.push(mapper(item, index));
        return acc;
    }, []);
};
function max(array, getter) {
    const get = getter ?? ((v)=>v);
    return boil(array, (a, b)=>get(a) > get(b) ? a : b);
}
function min(array, getter) {
    const get = getter ?? ((v)=>v);
    return boil(array, (a, b)=>get(a) < get(b) ? a : b);
}
const cluster = (list2, size = 2)=>{
    const clusterCount = Math.ceil(list2.length / size);
    return new Array(clusterCount).fill(null).map((_c, i)=>{
        return list2.slice(i * size, i * size + size);
    });
};
const unique = (array, toKey)=>{
    const valueMap = array.reduce((acc, item)=>{
        const key = toKey ? toKey(item) : item;
        if (acc[key]) return acc;
        acc[key] = item;
        return acc;
    }, {});
    return Object.values(valueMap);
};
function* range(startOrLength, end, valueOrMapper = (i)=>i, step = 1) {
    const mapper = (0, _typedMjs.isFunction)(valueOrMapper) ? valueOrMapper : ()=>valueOrMapper;
    const start = end ? startOrLength : 0;
    const final = end ?? startOrLength;
    for(let i = start; i <= final; i += step){
        yield mapper(i);
        if (i + step > final) break;
    }
}
const list = (startOrLength, end, valueOrMapper, step)=>{
    return Array.from(range(startOrLength, end, valueOrMapper, step));
};
const flat = (lists)=>{
    return lists.reduce((acc, list2)=>{
        acc.push(...list2);
        return acc;
    }, []);
};
const intersects = (listA, listB, identity)=>{
    if (!listA || !listB) return false;
    const ident = identity ?? ((x)=>x);
    const dictB = listB.reduce((acc, item)=>{
        acc[ident(item)] = true;
        return acc;
    }, {});
    return listA.some((value)=>dictB[ident(value)]);
};
const fork = (list2, condition)=>{
    if (!list2) return [
        [],
        []
    ];
    return list2.reduce((acc, item)=>{
        const [a, b] = acc;
        if (condition(item)) return [
            [
                ...a,
                item
            ],
            b
        ];
        else return [
            a,
            [
                ...b,
                item
            ]
        ];
    }, [
        [],
        []
    ]);
};
const merge = (root, others, matcher)=>{
    if (!others && !root) return [];
    if (!others) return root;
    if (!root) return [];
    if (!matcher) return root;
    return root.reduce((acc, r)=>{
        const matched = others.find((o)=>matcher(r) === matcher(o));
        if (matched) acc.push(matched);
        else acc.push(r);
        return acc;
    }, []);
};
const replaceOrAppend = (list2, newItem, match)=>{
    if (!list2 && !newItem) return [];
    if (!newItem) return [
        ...list2
    ];
    if (!list2) return [
        newItem
    ];
    for(let idx = 0; idx < list2.length; idx++){
        const item = list2[idx];
        if (match(item, idx)) return [
            ...list2.slice(0, idx),
            newItem,
            ...list2.slice(idx + 1, list2.length)
        ];
    }
    return [
        ...list2,
        newItem
    ];
};
const toggle = (list2, item, toKey, options)=>{
    if (!list2 && !item) return [];
    if (!list2) return [
        item
    ];
    if (!item) return [
        ...list2
    ];
    const matcher = toKey ? (x, idx)=>toKey(x, idx) === toKey(item, idx) : (x)=>x === item;
    const existing = list2.find(matcher);
    if (existing) return list2.filter((x, idx)=>!matcher(x, idx));
    const strategy = options?.strategy ?? "append";
    if (strategy === "append") return [
        ...list2,
        item
    ];
    return [
        item,
        ...list2
    ];
};
const sift = (list2)=>{
    return list2?.filter((x)=>!!x) ?? [];
};
const iterate = (count, func, initValue)=>{
    let value = initValue;
    for(let i = 1; i <= count; i++)value = func(value, i);
    return value;
};
const diff = (root, other, identity = (t)=>t)=>{
    if (!root?.length && !other?.length) return [];
    if (root?.length === void 0) return [
        ...other
    ];
    if (!other?.length) return [
        ...root
    ];
    const bKeys = other.reduce((acc, item)=>{
        acc[identity(item)] = true;
        return acc;
    }, {});
    return root.filter((a)=>!bKeys[identity(a)]);
};
function shift(arr, n) {
    if (arr.length === 0) return arr;
    const shiftNumber = n % arr.length;
    if (shiftNumber === 0) return arr;
    return [
        ...arr.slice(-shiftNumber, arr.length),
        ...arr.slice(0, -shiftNumber)
    ];
}

},{"./typed.mjs":"cevdx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cevdx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArray", ()=>isArray);
parcelHelpers.export(exports, "isDate", ()=>isDate);
parcelHelpers.export(exports, "isEmpty", ()=>isEmpty);
parcelHelpers.export(exports, "isEqual", ()=>isEqual);
parcelHelpers.export(exports, "isFloat", ()=>isFloat);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "isInt", ()=>isInt);
parcelHelpers.export(exports, "isNumber", ()=>isNumber);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isPrimitive", ()=>isPrimitive);
parcelHelpers.export(exports, "isPromise", ()=>isPromise);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "isSymbol", ()=>isSymbol);
const isSymbol = (value)=>{
    return !!value && value.constructor === Symbol;
};
const isArray = Array.isArray;
const isObject = (value)=>{
    return !!value && value.constructor === Object;
};
const isPrimitive = (value)=>{
    return value === void 0 || value === null || typeof value !== "object" && typeof value !== "function";
};
const isFunction = (value)=>{
    return !!(value && value.constructor && value.call && value.apply);
};
const isString = (value)=>{
    return typeof value === "string" || value instanceof String;
};
const isInt = (value)=>{
    return isNumber(value) && value % 1 === 0;
};
const isFloat = (value)=>{
    return isNumber(value) && value % 1 !== 0;
};
const isNumber = (value)=>{
    try {
        return Number(value) === value;
    } catch  {
        return false;
    }
};
const isDate = (value)=>{
    return Object.prototype.toString.call(value) === "[object Date]";
};
const isPromise = (value)=>{
    if (!value) return false;
    if (!value.then) return false;
    if (!isFunction(value.then)) return false;
    return true;
};
const isEmpty = (value)=>{
    if (value === true || value === false) return true;
    if (value === null || value === void 0) return true;
    if (isNumber(value)) return value === 0;
    if (isDate(value)) return isNaN(value.getTime());
    if (isFunction(value)) return false;
    if (isSymbol(value)) return false;
    const length = value.length;
    if (isNumber(length)) return length === 0;
    const size = value.size;
    if (isNumber(size)) return size === 0;
    const keys = Object.keys(value).length;
    return keys === 0;
};
const isEqual = (x, y)=>{
    if (Object.is(x, y)) return true;
    if (x instanceof Date && y instanceof Date) return x.getTime() === y.getTime();
    if (x instanceof RegExp && y instanceof RegExp) return x.toString() === y.toString();
    if (typeof x !== "object" || x === null || typeof y !== "object" || y === null) return false;
    const keysX = Reflect.ownKeys(x);
    const keysY = Reflect.ownKeys(y);
    if (keysX.length !== keysY.length) return false;
    for(let i = 0; i < keysX.length; i++){
        if (!Reflect.has(y, keysX[i])) return false;
        if (!isEqual(x[keysX[i]], y[keysX[i]])) return false;
    }
    return true;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}]},["4FFYD","dV6cC"], "dV6cC", "parcelRequireb428")

//# sourceMappingURL=index.e82f28a0.js.map
