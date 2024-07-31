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
})({"dZI1r":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "7dd44675b7a05eb9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_USE_SSE: boolean;
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
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
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
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
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

},{}],"jeorp":[function(require,module,exports) {
var _indexJs = require("esptool-js/lib/index.js");
var _webSerialPolyfill = require("web-serial-polyfill");
var _xterm = require("@xterm/xterm");
var _addonFit = require("@xterm/addon-fit");
const consoleBaudrates = document.getElementById("baud");
const clearButton = document.getElementById("botLimpar");
const connectButton = document.getElementById("botConectar");
const resetButton = document.getElementById("botReset");
const eraseButton = document.getElementById("botApagar");
const consoleStartButton = document.getElementById("botStartTerminal");
const programButton = document.getElementById("botUpload");
const comando = document.getElementById("entradaComando");
const terminal = document.getElementById("monitor");
const chipID = document.getElementById("chipID");
const table = document.getElementById("fileTable");
if (!navigator.serial && navigator.usb) navigator.serial = (0, _webSerialPolyfill.serial);
const term = new (0, _xterm.Terminal)();
const fitAddon = new (0, _addonFit.FitAddon)();
term.loadAddon(fitAddon);
term.options = {
    fontSize: 11,
    fontFamily: "Nanum Gothic",
    letterSpacing: -4,
    lineHeight: 1.4
};
term.open(terminal);
fitAddon.fit();
mLog("Terminal iniciado...");
term.writeln("");
let device = null;
let transport;
let chip = null;
let esploader;
/**
 * The built in Event object.
 * @external Event
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event}
 */ /**
 * File reader handler to read given local file.
 * @param {Event} evt File Select event
 */ function mLog(text) {
    term.writeln(text);
}
function handleFileSelect(evt) {
    const file = evt.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev)=>{
        evt.target.data = ev.target.result;
    };
    reader.readAsBinaryString(file);
}
const espLoaderTerminal = {
    clean () {
        term.clear();
    },
    writeLine (data) {
        term.writeln(data);
    },
    write (data) {
        term.write(data);
    }
};
connectButton.onclick = async ()=>{
    if (device === null) {
        device = await navigator.serial.requestPort({});
        transport = new (0, _indexJs.Transport)(device, true);
        try {
            const flashOptions = {
                transport,
                baudrate: parseInt(consoleBaudrates.value),
                terminal: espLoaderTerminal
            };
            esploader = new (0, _indexJs.ESPLoader)(flashOptions);
            chip = await esploader.main();
        // Temporarily broken
        // await esploader.flashId();
        } catch (e) {
            mLog("Erro: " + e);
        }
        connectButton.value = "Desconectar";
        mLog("Configura\xe7\xf5es finalizadas em " + chip);
        chipID.innerHTML = "Conectado a " + chip;
    } else {
        if (transport) await transport.disconnect();
        connectButton.value = "Conectar ESP";
        cleanUp();
        mLog("Desconectado do ESP...");
    }
};
resetButton.onclick = async ()=>{
    if (device === null) mLog("***Sem conex\xe3o***");
    else {
        (0, _indexJs.classicReset)(transport);
        mLog("Resetando ESP...");
    }
};
eraseButton.onclick = async ()=>{
    if (device === null) mLog("***Sem conex\xe3o***");
    else {
        eraseButton.disabled = true;
        try {
            await esploader.eraseFlash();
        } catch (e) {
            mLog("Erro: " + e);
        } finally{
            eraseButton.disabled = false;
        }
    }
};
clearButton.onclick = async ()=>{
    term.reset();
};
/*
addFileButton.onclick = () => {
    const rowCount = table.rows.length;
    const row = table.insertRow(rowCount);

    //Column 1 - Offset
    const cell1 = row.insertCell(0);
    const element1 = document.createElement("input");
    element1.type = "text";
    element1.id = "offset" + rowCount;
    element1.value = "0x1000";
    cell1.appendChild(element1);

    // Column 2 - File selector
    const cell2 = row.insertCell(1);
    const element2 = document.createElement("input");
    element2.type = "file";
    element2.id = "selectFile" + rowCount;
    element2.name = "selected_File" + rowCount;
    element2.addEventListener("change", handleFileSelect, false);
    cell2.appendChild(element2);

    // Column 3  - Progress
    const cell3 = row.insertCell(2);
    cell3.classList.add("progress-cell");
    cell3.innerHTML = `<progress value="0" max="100"></progress>`;

    // Column 4  - Remove File
    const cell4 = row.insertCell(3);
    cell4.classList.add("action-cell");
    if (rowCount > 1) {
        const element4 = document.createElement("input");
        element4.type = "button";
        const btnName = "button" + rowCount;
        element4.name = btnName;
        element4.setAttribute("class", "btn");
        element4.setAttribute("value", "Remove"); // or element1.value = "button";
        element4.onclick = function () {
            removeRow(row);
        };
        cell4.appendChild(element4);
    }
};
*/ /**
 * The built in HTMLTableRowElement object.
 * @external HTMLTableRowElement
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement}
 */ /**
 * Remove file row from HTML Table
 * @param {HTMLTableRowElement} row Table row element to remove
 */ /*
function removeRow(row: HTMLTableRowElement) {
    const rowIndex = Array.from(table.rows).indexOf(row);
    table.deleteRow(rowIndex);
}
*/ /**
 * Clean devices variables on chip disconnect. Remove stale references if any.
 */ function cleanUp() {
    device = null;
    transport = null;
    chip = null;
}
let isConsoleClosed = false;
consoleStartButton.onclick = async ()=>{
    if (transport) log("007");
    if (device === null) {
        device = await navigator.serial.requestPort({});
        transport = new (0, _indexJs.Transport)(device, false);
    }
    await transport.connect(parseInt(consoleBaudrates.value));
    isConsoleClosed = false;
    mLog("Conectado");
    while(!isConsoleClosed){
        connectButton.value = "Desconectar";
        const val = await transport.rawRead();
        if (typeof val !== "undefined") term.write(val);
        else break;
    }
    if (device === null) {
        mLog("Desconectado");
        connectButton.value = "Conectar ESP";
    }
    console.log("quitting console");
};
//consoleStopButton.onclick = async () => {
//    isConsoleClosed = true;
//    if (transport) {
//      await transport.disconnect();
//      await transport.waitForUnlock(1500);
//    }
//    term.reset();
//    cleanUp();
//  };
/**
 * Validate the provided files images and offset to see if they're valid.
 * @returns {string} Program input validation result
 */ function validateProgramInputs() {
    const offsetArr = [];
    const rowCount = table.rows.length;
    let row;
    let offset = 0;
    let fileData = null;
    // check for mandatory fields
    for(let index = 1; index < rowCount; index++){
        row = table.rows[index];
        //offset fields checks
        const offSetObj = row.cells[0].childNodes[0];
        offset = parseInt(offSetObj.value);
        // Non-numeric or blank offset
        if (Number.isNaN(offset)) return "Offset field in row " + index + " is not a valid address!";
        else if (offsetArr.includes(offset)) return "Offset field in row " + index + " is already in use!";
        else offsetArr.push(offset);
        const fileObj = row.cells[1].childNodes[0];
        fileData = fileObj.data;
        if (fileData == null) return "No file selected for row " + index + "!";
    }
    return "success";
}
programButton.onclick = async ()=>{
    const err = validateProgramInputs();
    if (err != "success") {
        const alertMsg = "<strong>" + err + "</strong>";
        errorMsg(alertMsg);
        return;
    }
    const fileArray = [];
    const progressBars = [];
    for(let index = 1; index < table.rows.length; index++){
        const row = table.rows[index];
        const offSetObj = row.cells[0].childNodes[0];
        const offset = parseInt(offSetObj.value);
        const fileObj = row.cells[1].childNodes[0];
        const progressBar = row.cells[2].childNodes[0];
        progressBar.textContent = "0";
        progressBars.push(progressBar);
        fileArray.push({
            data: fileObj.data,
            address: offset
        });
    }
    try {
        const flashOptions = {
            fileArray: fileArray,
            flashSize: "keep",
            eraseAll: false,
            compress: true,
            reportProgress: (fileIndex, written, total)=>{
                progressBars[fileIndex].value = written / total * 100;
            },
            calculateMD5Hash: (image)=>CryptoJS.MD5(CryptoJS.enc.Latin1.parse(image))
        };
        await esploader.writeFlash(flashOptions);
    } catch (e) {
        mLog("ERRO:" + e);
    } finally{
        // Hide progress bars and show erase buttons
        for(let index = 1; index < table.rows.length; index++);
    }
};
//addFileButton.onclick(this);
comando.onchange = async ()=>{
    if (device === null) mLog("***Sem conex\xe3o***");
    else {
        mLog(comando.value);
        comando.value = "";
    }
};

},{"esptool-js/lib/index.js":"GDPH2","web-serial-polyfill":"aEnuJ","@xterm/xterm":"3W9vH","@xterm/addon-fit":"bDe1j"}],"GDPH2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ESPLoader", ()=>(0, _esploaderJs.ESPLoader));
parcelHelpers.export(exports, "classicReset", ()=>(0, _resetJs.classicReset));
parcelHelpers.export(exports, "customReset", ()=>(0, _resetJs.customReset));
parcelHelpers.export(exports, "hardReset", ()=>(0, _resetJs.hardReset));
parcelHelpers.export(exports, "usbJTAGSerialReset", ()=>(0, _resetJs.usbJTAGSerialReset));
parcelHelpers.export(exports, "validateCustomResetStringSequence", ()=>(0, _resetJs.validateCustomResetStringSequence));
parcelHelpers.export(exports, "ROM", ()=>(0, _romJs.ROM));
parcelHelpers.export(exports, "Transport", ()=>(0, _webserialJs.Transport));
var _esploaderJs = require("./esploader.js");
var _resetJs = require("./reset.js");
var _romJs = require("./targets/rom.js");
var _webserialJs = require("./webserial.js");

},{"./esploader.js":"b1nCC","./reset.js":"dTpzL","./targets/rom.js":"4kWLt","./webserial.js":"a9SMd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b1nCC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ESPLoader", ()=>ESPLoader);
var _errorJs = require("./error.js");
var _pako = require("pako");
var _webserialJs = require("./webserial.js");
var _resetJs = require("./reset.js");
var _atobLite = require("atob-lite");
var _atobLiteDefault = parcelHelpers.interopDefault(_atobLite);
/**
 * Return the chip ROM based on the given magic number
 * @param {number} magic - magic hex number to select ROM.
 * @returns {ROM} The chip ROM class related to given magic hex number.
 */ async function magic2Chip(magic) {
    switch(magic){
        case 0x00f01d83:
            {
                const { ESP32ROM } = await require("7d854fd681e53ea1");
                return new ESP32ROM();
            }
        case 0x6f51306f:
        case 0x7c41a06f:
            {
                const { ESP32C2ROM } = await require("3a69be2577d95e1a");
                return new ESP32C2ROM();
            }
        case 0x6921506f:
        case 0x1b31506f:
        case 0x4881606f:
        case 0x4361606f:
            {
                const { ESP32C3ROM } = await require("e208800c594a27e1");
                return new ESP32C3ROM();
            }
        case 0x2ce0806f:
            {
                const { ESP32C6ROM } = await require("cc6aa934aa85cab5");
                return new ESP32C6ROM();
            }
        case 0xd7b73e80:
            {
                const { ESP32H2ROM } = await require("f9efa6d42cb01a29");
                return new ESP32H2ROM();
            }
        case 0x09:
            {
                const { ESP32S3ROM } = await require("8ce93f3522686c43");
                return new ESP32S3ROM();
            }
        case 0x000007c6:
            {
                const { ESP32S2ROM } = await require("3e6797086e0d1b6b");
                return new ESP32S2ROM();
            }
        case 0xfff0c101:
            {
                const { ESP8266ROM } = await require("658c9eb0653f38f1");
                return new ESP8266ROM();
            }
        case 0x0:
        case 0x0addbad0:
        case 0x7039ad9:
            {
                const { ESP32P4ROM } = await require("c66508533b15d24e");
                return new ESP32P4ROM();
            }
        default:
            return null;
    }
}
class ESPLoader {
    /**
     * Create a new ESPLoader to perform serial communication
     * such as read/write flash memory and registers using a LoaderOptions object.
     * @param {LoaderOptions} options - LoaderOptions object argument for ESPLoader.
     * ```
     * const myLoader = new ESPLoader({ transport: Transport, baudrate: number, terminal?: IEspLoaderTerminal });
     * ```
     */ constructor(options){
        this.ESP_RAM_BLOCK = 0x1800;
        this.ESP_FLASH_BEGIN = 0x02;
        this.ESP_FLASH_DATA = 0x03;
        this.ESP_FLASH_END = 0x04;
        this.ESP_MEM_BEGIN = 0x05;
        this.ESP_MEM_END = 0x06;
        this.ESP_MEM_DATA = 0x07;
        this.ESP_WRITE_REG = 0x09;
        this.ESP_READ_REG = 0x0a;
        this.ESP_SPI_ATTACH = 0x0d;
        this.ESP_CHANGE_BAUDRATE = 0x0f;
        this.ESP_FLASH_DEFL_BEGIN = 0x10;
        this.ESP_FLASH_DEFL_DATA = 0x11;
        this.ESP_FLASH_DEFL_END = 0x12;
        this.ESP_SPI_FLASH_MD5 = 0x13;
        // Only Stub supported commands
        this.ESP_ERASE_FLASH = 0xd0;
        this.ESP_ERASE_REGION = 0xd1;
        this.ESP_READ_FLASH = 0xd2;
        this.ESP_RUN_USER_CODE = 0xd3;
        this.ESP_IMAGE_MAGIC = 0xe9;
        this.ESP_CHECKSUM_MAGIC = 0xef;
        // Response code(s) sent by ROM
        this.ROM_INVALID_RECV_MSG = 0x05; // response if an invalid message is received
        this.ERASE_REGION_TIMEOUT_PER_MB = 30000;
        this.ERASE_WRITE_TIMEOUT_PER_MB = 40000;
        this.MD5_TIMEOUT_PER_MB = 8000;
        this.CHIP_ERASE_TIMEOUT = 120000;
        this.FLASH_READ_TIMEOUT = 100000;
        this.MAX_TIMEOUT = this.CHIP_ERASE_TIMEOUT * 2;
        this.CHIP_DETECT_MAGIC_REG_ADDR = 0x40001000;
        this.DETECTED_FLASH_SIZES = {
            0x12: "256KB",
            0x13: "512KB",
            0x14: "1MB",
            0x15: "2MB",
            0x16: "4MB",
            0x17: "8MB",
            0x18: "16MB"
        };
        this.DETECTED_FLASH_SIZES_NUM = {
            0x12: 256,
            0x13: 512,
            0x14: 1024,
            0x15: 2048,
            0x16: 4096,
            0x17: 8192,
            0x18: 16384
        };
        this.USB_JTAG_SERIAL_PID = 0x1001;
        this.romBaudrate = 115200;
        this.debugLogging = false;
        this.syncStubDetected = false;
        /**
         * Get the checksum for given unsigned 8-bit array
         * @param {Uint8Array} data Unsigned 8-bit integer array
         * @returns {number} - Array checksum
         */ this.checksum = function(data) {
            let i;
            let chk = 0xef;
            for(i = 0; i < data.length; i++)chk ^= data[i];
            return chk;
        };
        /**
         * Scale timeouts which are size-specific.
         * @param {number} secondsPerMb Seconds per megabytes as number
         * @param {number} sizeBytes Size bytes number
         * @returns {number} - Scaled timeout for specified size.
         */ this.timeoutPerMb = function(secondsPerMb, sizeBytes) {
            const result = secondsPerMb * (sizeBytes / 1000000);
            if (result < 3000) return 3000;
            else return result;
        };
        /**
         * Get flash size bytes from flash size string.
         * @param {string} flashSize Flash Size string
         * @returns {number} Flash size bytes
         */ this.flashSizeBytes = function(flashSize) {
            let flashSizeB = -1;
            if (flashSize.indexOf("KB") !== -1) flashSizeB = parseInt(flashSize.slice(0, flashSize.indexOf("KB"))) * 1024;
            else if (flashSize.indexOf("MB") !== -1) flashSizeB = parseInt(flashSize.slice(0, flashSize.indexOf("MB"))) * 1048576;
            return flashSizeB;
        };
        this.IS_STUB = false;
        this.FLASH_WRITE_SIZE = 0x4000;
        this.transport = options.transport;
        this.baudrate = options.baudrate;
        if (options.serialOptions) this.serialOptions = options.serialOptions;
        if (options.romBaudrate) this.romBaudrate = options.romBaudrate;
        if (options.terminal) {
            this.terminal = options.terminal;
            this.terminal.clean();
        }
        if (typeof options.debugLogging !== "undefined") this.debugLogging = options.debugLogging;
        if (options.port) this.transport = new (0, _webserialJs.Transport)(options.port);
        if (typeof options.enableTracing !== "undefined") this.transport.tracing = options.enableTracing;
        this.info("esptool.js");
        this.info("Serial port " + this.transport.getInfo());
    }
    _sleep(ms) {
        return new Promise((resolve)=>setTimeout(resolve, ms));
    }
    /**
     * Write to ESP Loader constructor's terminal with or without new line.
     * @param {string} str - String to write.
     * @param {boolean} withNewline - Add new line at the end ?
     */ write(str, withNewline = true) {
        if (this.terminal) {
            if (withNewline) this.terminal.writeLine(str);
            else this.terminal.write(str);
        } else // eslint-disable-next-line no-console
        console.log(str);
    }
    /**
     * Write error message to ESP Loader constructor's terminal with or without new line.
     * @param {string} str - String to write.
     * @param {boolean} withNewline - Add new line at the end ?
     */ error(str, withNewline = true) {
        this.write(`Error: ${str}`, withNewline);
    }
    /**
     * Write information message to ESP Loader constructor's terminal with or without new line.
     * @param {string} str - String to write.
     * @param {boolean} withNewline - Add new line at the end ?
     */ info(str, withNewline = true) {
        this.write(str, withNewline);
    }
    /**
     * Write debug message to ESP Loader constructor's terminal with or without new line.
     * @param {string} str - String to write.
     * @param {boolean} withNewline - Add new line at the end ?
     */ debug(str, withNewline = true) {
        if (this.debugLogging) this.write(`Debug: ${str}`, withNewline);
    }
    /**
     * Convert short integer to byte array
     * @param {number} i - Number to convert.
     * @returns {Uint8Array} Byte array.
     */ _shortToBytearray(i) {
        return new Uint8Array([
            i & 0xff,
            i >> 8 & 0xff
        ]);
    }
    /**
     * Convert an integer to byte array
     * @param {number} i - Number to convert.
     * @returns {ROM} The chip ROM class related to given magic hex number.
     */ _intToByteArray(i) {
        return new Uint8Array([
            i & 0xff,
            i >> 8 & 0xff,
            i >> 16 & 0xff,
            i >> 24 & 0xff
        ]);
    }
    /**
     * Convert a byte array to short integer.
     * @param {number} i - Number to convert.
     * @param {number} j - Number to convert.
     * @returns {number} Return a short integer number.
     */ _byteArrayToShort(i, j) {
        return i | j >> 8;
    }
    /**
     * Convert a byte array to integer.
     * @param {number} i - Number to convert.
     * @param {number} j - Number to convert.
     * @param {number} k - Number to convert.
     * @param {number} l - Number to convert.
     * @returns {number} Return a integer number.
     */ _byteArrayToInt(i, j, k, l) {
        return i | j << 8 | k << 16 | l << 24;
    }
    /**
     * Append a buffer array after another buffer array
     * @param {ArrayBuffer} buffer1 - First array buffer.
     * @param {ArrayBuffer} buffer2 - magic hex number to select ROM.
     * @returns {ArrayBufferLike} Return an array buffer.
     */ _appendBuffer(buffer1, buffer2) {
        const tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
        tmp.set(new Uint8Array(buffer1), 0);
        tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
        return tmp.buffer;
    }
    /**
     * Append a buffer array after another buffer array
     * @param {Uint8Array} arr1 - First array buffer.
     * @param {Uint8Array} arr2 - magic hex number to select ROM.
     * @returns {Uint8Array} Return a 8 bit unsigned array.
     */ _appendArray(arr1, arr2) {
        const c = new Uint8Array(arr1.length + arr2.length);
        c.set(arr1, 0);
        c.set(arr2, arr1.length);
        return c;
    }
    /**
     * Convert a unsigned 8 bit integer array to byte string.
     * @param {Uint8Array} u8Array - magic hex number to select ROM.
     * @returns {string} Return the equivalent string.
     */ ui8ToBstr(u8Array) {
        let bStr = "";
        for(let i = 0; i < u8Array.length; i++)bStr += String.fromCharCode(u8Array[i]);
        return bStr;
    }
    /**
     * Convert a byte string to unsigned 8 bit integer array.
     * @param {string} bStr - binary string input
     * @returns {Uint8Array} Return a 8 bit unsigned integer array.
     */ bstrToUi8(bStr) {
        const u8Array = new Uint8Array(bStr.length);
        for(let i = 0; i < bStr.length; i++)u8Array[i] = bStr.charCodeAt(i);
        return u8Array;
    }
    /**
     * Flush the serial input by raw read with 200 ms timeout.
     */ async flushInput() {
        try {
            await this.transport.rawRead(200);
        } catch (e) {
            this.error(e.message);
        }
    }
    /**
     * Use the device serial port read function with given timeout to create a valid packet.
     * @param {number} op Operation number
     * @param {number} timeout timeout number in milliseconds
     * @returns {[number, Uint8Array]} valid response packet.
     */ async readPacket(op = null, timeout = 3000) {
        // Check up-to next 100 packets for valid response packet
        for(let i = 0; i < 100; i++){
            const p = await this.transport.read(timeout);
            const resp = p[0];
            const opRet = p[1];
            const val = this._byteArrayToInt(p[4], p[5], p[6], p[7]);
            const data = p.slice(8);
            if (resp == 1) {
                if (op == null || opRet == op) return [
                    val,
                    data
                ];
                else if (data[0] != 0 && data[1] == this.ROM_INVALID_RECV_MSG) {
                    await this.flushInput();
                    throw new (0, _errorJs.ESPError)("unsupported command error");
                }
            }
        }
        throw new (0, _errorJs.ESPError)("invalid response");
    }
    /**
     * Write a serial command to the chip
     * @param {number} op - Operation number
     * @param {Uint8Array} data - Unsigned 8 bit array
     * @param {number} chk - channel number
     * @param {boolean} waitResponse - wait for response ?
     * @param {number} timeout - timeout number in milliseconds
     * @returns {Promise<[number, Uint8Array]>} Return a number and a 8 bit unsigned integer array.
     */ async command(op = null, data = new Uint8Array(0), chk = 0, waitResponse = true, timeout = 3000) {
        if (op != null) {
            if (this.transport.tracing) this.transport.trace(`command op:0x${op.toString(16).padStart(2, "0")} data len=${data.length} wait_response=${waitResponse ? 1 : 0} timeout=${(timeout / 1000).toFixed(3)} data=${this.transport.hexConvert(data)}`);
            const pkt = new Uint8Array(8 + data.length);
            pkt[0] = 0x00;
            pkt[1] = op;
            pkt[2] = this._shortToBytearray(data.length)[0];
            pkt[3] = this._shortToBytearray(data.length)[1];
            pkt[4] = this._intToByteArray(chk)[0];
            pkt[5] = this._intToByteArray(chk)[1];
            pkt[6] = this._intToByteArray(chk)[2];
            pkt[7] = this._intToByteArray(chk)[3];
            let i;
            for(i = 0; i < data.length; i++)pkt[8 + i] = data[i];
            await this.transport.write(pkt);
        }
        if (!waitResponse) return [
            0,
            new Uint8Array(0)
        ];
        return this.readPacket(op, timeout);
    }
    /**
     * Read a register from chip.
     * @param {number} addr - Register address number
     * @param {number} timeout - Timeout in milliseconds (Default: 3000ms)
     * @returns {number} - Command number value
     */ async readReg(addr, timeout = 3000) {
        const pkt = this._intToByteArray(addr);
        const val = await this.command(this.ESP_READ_REG, pkt, undefined, undefined, timeout);
        return val[0];
    }
    /**
     * Write a number value to register address in chip.
     * @param {number} addr - Register address number
     * @param {number} value - Number value to write in register
     * @param {number} mask - Hex number for mask
     * @param {number} delayUs Delay number
     * @param {number} delayAfterUs Delay after previous delay
     */ async writeReg(addr, value, mask = 0xffffffff, delayUs = 0, delayAfterUs = 0) {
        let pkt = this._appendArray(this._intToByteArray(addr), this._intToByteArray(value));
        pkt = this._appendArray(pkt, this._intToByteArray(mask));
        pkt = this._appendArray(pkt, this._intToByteArray(delayUs));
        if (delayAfterUs > 0) {
            pkt = this._appendArray(pkt, this._intToByteArray(this.chip.UART_DATE_REG_ADDR));
            pkt = this._appendArray(pkt, this._intToByteArray(0));
            pkt = this._appendArray(pkt, this._intToByteArray(0));
            pkt = this._appendArray(pkt, this._intToByteArray(delayAfterUs));
        }
        await this.checkCommand("write target memory", this.ESP_WRITE_REG, pkt);
    }
    /**
     * Sync chip by sending sync command.
     * @returns {[number, Uint8Array]} Command result
     */ async sync() {
        this.debug("Sync");
        const cmd = new Uint8Array(36);
        let i;
        cmd[0] = 0x07;
        cmd[1] = 0x07;
        cmd[2] = 0x12;
        cmd[3] = 0x20;
        for(i = 0; i < 32; i++)cmd[4 + i] = 0x55;
        try {
            const resp = await this.command(0x08, cmd, undefined, undefined, 100);
            // ROM bootloaders send some non-zero "val" response. The flasher stub sends 0.
            // If we receive 0 then it probably indicates that the chip wasn't or couldn't be
            // reset properly and esptool is talking to the flasher stub.
            this.syncStubDetected = this.syncStubDetected && resp[0] === 0;
            return resp;
        } catch (e) {
            this.debug("Sync err " + e);
            throw e;
        }
    }
    /**
     * Attempt to connect to the chip by sending a reset sequence and later a sync command.
     * @param {string} mode - Reset mode to use
     * @param {boolean} esp32r0Delay - Enable delay for ESP32 R0
     * @returns {string} - Returns 'success' or 'error' message.
     */ async _connectAttempt(mode = "default_reset", esp32r0Delay = false) {
        this.debug("_connect_attempt " + mode + " " + esp32r0Delay);
        if (mode !== "no_reset") {
            if (this.transport.getPid() === this.USB_JTAG_SERIAL_PID) // Custom reset sequence, which is required when the device
            // is connecting via its USB-JTAG-Serial peripheral
            await (0, _resetJs.usbJTAGSerialReset)(this.transport);
            else {
                const strSequence = esp32r0Delay ? "D0|R1|W100|W2000|D1|R0|W50|D0" : "D0|R1|W100|D1|R0|W50|D0";
                await (0, _resetJs.customReset)(this.transport, strSequence);
            }
        }
        let i = 0;
        let keepReading = true;
        while(keepReading){
            try {
                const res = await this.transport.read(1000);
                i += res.length;
            } catch (e) {
                this.debug(e.message);
                if (e instanceof Error) {
                    keepReading = false;
                    break;
                }
            }
            await this._sleep(50);
        }
        this.transport.slipReaderEnabled = true;
        this.syncStubDetected = true;
        i = 7;
        while(i--){
            try {
                const resp = await this.sync();
                this.debug(resp[0].toString());
                return "success";
            } catch (error) {
                if (error instanceof Error) {
                    if (esp32r0Delay) this.info("_", false);
                    else this.info(".", false);
                }
            }
            await this._sleep(50);
        }
        return "error";
    }
    /**
     * Perform a connection to chip.
     * @param {string} mode - Reset mode to use. Example: 'default_reset' | 'no_reset'
     * @param {number} attempts - Number of connection attempts
     * @param {boolean} detecting - Detect the connected chip
     */ async connect(mode = "default_reset", attempts = 7, detecting = false) {
        let i;
        let resp;
        this.info("Connecting...", false);
        await this.transport.connect(this.romBaudrate, this.serialOptions);
        for(i = 0; i < attempts; i++){
            resp = await this._connectAttempt(mode, false);
            if (resp === "success") break;
            resp = await this._connectAttempt(mode, true);
            if (resp === "success") break;
        }
        if (resp !== "success") throw new (0, _errorJs.ESPError)("Failed to connect with the device");
        this.info("\n\r", false);
        if (!detecting) {
            const chipMagicValue = await this.readReg(0x40001000) >>> 0;
            this.debug("Chip Magic " + chipMagicValue.toString(16));
            const chip = await magic2Chip(chipMagicValue);
            if (this.chip === null) throw new (0, _errorJs.ESPError)(`Unexpected CHIP magic value ${chipMagicValue}. Failed to autodetect chip type.`);
            else this.chip = chip;
        }
    }
    /**
     * Connect and detect the existing chip.
     * @param {string} mode Reset mode to use for connection.
     */ async detectChip(mode = "default_reset") {
        await this.connect(mode);
        this.info("Detecting chip type... ", false);
        if (this.chip != null) this.info(this.chip.CHIP_NAME);
        else this.info("unknown!");
    }
    /**
     * Execute the command and check the command response.
     * @param {string} opDescription Command operation description.
     * @param {number} op Command operation number
     * @param {Uint8Array} data Command value
     * @param {number} chk Checksum to use
     * @param {number} timeout TImeout number in milliseconds (ms)
     * @returns {number} Command result
     */ async checkCommand(opDescription = "", op = null, data = new Uint8Array(0), chk = 0, timeout = 3000) {
        this.debug("check_command " + opDescription);
        const resp = await this.command(op, data, chk, undefined, timeout);
        if (resp[1].length > 4) return resp[1];
        else return resp[0];
    }
    /**
     * Start downloading an application image to RAM
     * @param {number} size Image size number
     * @param {number} blocks Number of data blocks
     * @param {number} blocksize Size of each data block
     * @param {number} offset Image offset number
     */ async memBegin(size, blocks, blocksize, offset) {
        /* XXX: Add check to ensure that STUB is not getting overwritten */ this.debug("mem_begin " + size + " " + blocks + " " + blocksize + " " + offset.toString(16));
        let pkt = this._appendArray(this._intToByteArray(size), this._intToByteArray(blocks));
        pkt = this._appendArray(pkt, this._intToByteArray(blocksize));
        pkt = this._appendArray(pkt, this._intToByteArray(offset));
        await this.checkCommand("enter RAM download mode", this.ESP_MEM_BEGIN, pkt);
    }
    /**
     * Send a block of image to RAM
     * @param {Uint8Array} buffer Unsigned 8-bit array
     * @param {number} seq Sequence number
     */ async memBlock(buffer, seq) {
        let pkt = this._appendArray(this._intToByteArray(buffer.length), this._intToByteArray(seq));
        pkt = this._appendArray(pkt, this._intToByteArray(0));
        pkt = this._appendArray(pkt, this._intToByteArray(0));
        pkt = this._appendArray(pkt, buffer);
        const checksum = this.checksum(buffer);
        await this.checkCommand("write to target RAM", this.ESP_MEM_DATA, pkt, checksum);
    }
    /**
     * Leave RAM download mode and run application
     * @param {number} entrypoint - Entrypoint number
     */ async memFinish(entrypoint) {
        const isEntry = entrypoint === 0 ? 1 : 0;
        const pkt = this._appendArray(this._intToByteArray(isEntry), this._intToByteArray(entrypoint));
        await this.checkCommand("leave RAM download mode", this.ESP_MEM_END, pkt, undefined, 50); // XXX: handle non-stub with diff timeout
    }
    /**
     * Configure SPI flash pins
     * @param {number} hspiArg -  Argument for SPI attachment
     */ async flashSpiAttach(hspiArg) {
        const pkt = this._intToByteArray(hspiArg);
        await this.checkCommand("configure SPI flash pins", this.ESP_SPI_ATTACH, pkt);
    }
    /**
     * Start downloading to Flash (performs an erase)
     * @param {number} size Size to erase
     * @param {number} offset Offset to erase
     * @returns {number} Number of blocks (of size self.FLASH_WRITE_SIZE) to write.
     */ async flashBegin(size, offset) {
        const numBlocks = Math.floor((size + this.FLASH_WRITE_SIZE - 1) / this.FLASH_WRITE_SIZE);
        const eraseSize = this.chip.getEraseSize(offset, size);
        const d = new Date();
        const t1 = d.getTime();
        let timeout = 3000;
        if (this.IS_STUB == false) timeout = this.timeoutPerMb(this.ERASE_REGION_TIMEOUT_PER_MB, size);
        this.debug("flash begin " + eraseSize + " " + numBlocks + " " + this.FLASH_WRITE_SIZE + " " + offset + " " + size);
        let pkt = this._appendArray(this._intToByteArray(eraseSize), this._intToByteArray(numBlocks));
        pkt = this._appendArray(pkt, this._intToByteArray(this.FLASH_WRITE_SIZE));
        pkt = this._appendArray(pkt, this._intToByteArray(offset));
        if (this.IS_STUB == false) pkt = this._appendArray(pkt, this._intToByteArray(0)); // XXX: Support encrypted
        await this.checkCommand("enter Flash download mode", this.ESP_FLASH_BEGIN, pkt, undefined, timeout);
        const t2 = d.getTime();
        if (size != 0 && this.IS_STUB == false) this.info("Took " + (t2 - t1) / 1000 + "." + (t2 - t1) % 1000 + "s to erase flash block");
        return numBlocks;
    }
    /**
     * Start downloading compressed data to Flash (performs an erase)
     * @param {number} size Write size
     * @param {number} compsize Compressed size
     * @param {number} offset Offset for write
     * @returns {number} Returns number of blocks (size self.FLASH_WRITE_SIZE) to write.
     */ async flashDeflBegin(size, compsize, offset) {
        const numBlocks = Math.floor((compsize + this.FLASH_WRITE_SIZE - 1) / this.FLASH_WRITE_SIZE);
        const eraseBlocks = Math.floor((size + this.FLASH_WRITE_SIZE - 1) / this.FLASH_WRITE_SIZE);
        const d = new Date();
        const t1 = d.getTime();
        let writeSize, timeout;
        if (this.IS_STUB) {
            writeSize = size;
            timeout = 3000;
        } else {
            writeSize = eraseBlocks * this.FLASH_WRITE_SIZE;
            timeout = this.timeoutPerMb(this.ERASE_REGION_TIMEOUT_PER_MB, writeSize);
        }
        this.info("Compressed " + size + " bytes to " + compsize + "...");
        let pkt = this._appendArray(this._intToByteArray(writeSize), this._intToByteArray(numBlocks));
        pkt = this._appendArray(pkt, this._intToByteArray(this.FLASH_WRITE_SIZE));
        pkt = this._appendArray(pkt, this._intToByteArray(offset));
        if ((this.chip.CHIP_NAME === "ESP32-S2" || this.chip.CHIP_NAME === "ESP32-S3" || this.chip.CHIP_NAME === "ESP32-C3" || this.chip.CHIP_NAME === "ESP32-C2") && this.IS_STUB === false) pkt = this._appendArray(pkt, this._intToByteArray(0));
        await this.checkCommand("enter compressed flash mode", this.ESP_FLASH_DEFL_BEGIN, pkt, undefined, timeout);
        const t2 = d.getTime();
        if (size != 0 && this.IS_STUB === false) this.info("Took " + (t2 - t1) / 1000 + "." + (t2 - t1) % 1000 + "s to erase flash block");
        return numBlocks;
    }
    /**
     * Write block to flash, retry if fail
     * @param {Uint8Array} data Unsigned 8-bit array data.
     * @param {number} seq Sequence number
     * @param {number} timeout Timeout in milliseconds (ms)
     */ async flashBlock(data, seq, timeout) {
        let pkt = this._appendArray(this._intToByteArray(data.length), this._intToByteArray(seq));
        pkt = this._appendArray(pkt, this._intToByteArray(0));
        pkt = this._appendArray(pkt, this._intToByteArray(0));
        pkt = this._appendArray(pkt, data);
        const checksum = this.checksum(data);
        await this.checkCommand("write to target Flash after seq " + seq, this.ESP_FLASH_DATA, pkt, checksum, timeout);
    }
    /**
     * Write block to flash, send compressed, retry if fail
     * @param {Uint8Array} data Unsigned int 8-bit array data to write
     * @param {number} seq Sequence number
     * @param {number} timeout Timeout in milliseconds (ms)
     */ async flashDeflBlock(data, seq, timeout) {
        let pkt = this._appendArray(this._intToByteArray(data.length), this._intToByteArray(seq));
        pkt = this._appendArray(pkt, this._intToByteArray(0));
        pkt = this._appendArray(pkt, this._intToByteArray(0));
        pkt = this._appendArray(pkt, data);
        const checksum = this.checksum(data);
        this.debug("flash_defl_block " + data[0].toString(16) + " " + data[1].toString(16));
        await this.checkCommand("write compressed data to flash after seq " + seq, this.ESP_FLASH_DEFL_DATA, pkt, checksum, timeout);
    }
    /**
     * Leave flash mode and run/reboot
     * @param {boolean} reboot Reboot after leaving flash mode ?
     */ async flashFinish(reboot = false) {
        const val = reboot ? 0 : 1;
        const pkt = this._intToByteArray(val);
        await this.checkCommand("leave Flash mode", this.ESP_FLASH_END, pkt);
    }
    /**
     * Leave compressed flash mode and run/reboot
     * @param {boolean} reboot Reboot after leaving flash mode ?
     */ async flashDeflFinish(reboot = false) {
        const val = reboot ? 0 : 1;
        const pkt = this._intToByteArray(val);
        await this.checkCommand("leave compressed flash mode", this.ESP_FLASH_DEFL_END, pkt);
    }
    /**
     * Run an arbitrary SPI flash command.
     *
     * This function uses the "USR_COMMAND" functionality in the ESP
     * SPI hardware, rather than the precanned commands supported by
     * hardware. So the value of spiflashCommand is an actual command
     * byte, sent over the wire.
     *
     * After writing command byte, writes 'data' to MOSI and then
     * reads back 'readBits' of reply on MISO. Result is a number.
     * @param {number} spiflashCommand Command to execute in SPI
     * @param {Uint8Array} data Data to send
     * @param {number} readBits Number of bits to read
     * @returns {number} Register SPI_W0_REG value
     */ async runSpiflashCommand(spiflashCommand, data, readBits) {
        // SPI_USR register flags
        const SPI_USR_COMMAND = -2147483648;
        const SPI_USR_MISO = 268435456;
        const SPI_USR_MOSI = 134217728;
        // SPI registers, base address differs ESP32* vs 8266
        const base = this.chip.SPI_REG_BASE;
        const SPI_CMD_REG = base + 0x00;
        const SPI_USR_REG = base + this.chip.SPI_USR_OFFS;
        const SPI_USR1_REG = base + this.chip.SPI_USR1_OFFS;
        const SPI_USR2_REG = base + this.chip.SPI_USR2_OFFS;
        const SPI_W0_REG = base + this.chip.SPI_W0_OFFS;
        let setDataLengths;
        if (this.chip.SPI_MOSI_DLEN_OFFS != null) setDataLengths = async (mosiBits, misoBits)=>{
            const SPI_MOSI_DLEN_REG = base + this.chip.SPI_MOSI_DLEN_OFFS;
            const SPI_MISO_DLEN_REG = base + this.chip.SPI_MISO_DLEN_OFFS;
            if (mosiBits > 0) await this.writeReg(SPI_MOSI_DLEN_REG, mosiBits - 1);
            if (misoBits > 0) await this.writeReg(SPI_MISO_DLEN_REG, misoBits - 1);
        };
        else setDataLengths = async (mosiBits, misoBits)=>{
            const SPI_DATA_LEN_REG = SPI_USR1_REG;
            const SPI_MOSI_BITLEN_S = 17;
            const SPI_MISO_BITLEN_S = 8;
            const mosiMask = mosiBits === 0 ? 0 : mosiBits - 1;
            const misoMask = misoBits === 0 ? 0 : misoBits - 1;
            const val = misoMask << SPI_MISO_BITLEN_S | mosiMask << SPI_MOSI_BITLEN_S;
            await this.writeReg(SPI_DATA_LEN_REG, val);
        };
        const SPI_CMD_USR = 262144;
        const SPI_USR2_COMMAND_LEN_SHIFT = 28;
        if (readBits > 32) throw new (0, _errorJs.ESPError)("Reading more than 32 bits back from a SPI flash operation is unsupported");
        if (data.length > 64) throw new (0, _errorJs.ESPError)("Writing more than 64 bytes of data with one SPI command is unsupported");
        const dataBits = data.length * 8;
        const oldSpiUsr = await this.readReg(SPI_USR_REG);
        const oldSpiUsr2 = await this.readReg(SPI_USR2_REG);
        let flags = SPI_USR_COMMAND;
        let i;
        if (readBits > 0) flags |= SPI_USR_MISO;
        if (dataBits > 0) flags |= SPI_USR_MOSI;
        await setDataLengths(dataBits, readBits);
        await this.writeReg(SPI_USR_REG, flags);
        let val = 7 << SPI_USR2_COMMAND_LEN_SHIFT | spiflashCommand;
        await this.writeReg(SPI_USR2_REG, val);
        if (dataBits == 0) await this.writeReg(SPI_W0_REG, 0);
        else {
            if (data.length % 4 != 0) {
                const padding = new Uint8Array(data.length % 4);
                data = this._appendArray(data, padding);
            }
            let nextReg = SPI_W0_REG;
            for(i = 0; i < data.length - 4; i += 4){
                val = this._byteArrayToInt(data[i], data[i + 1], data[i + 2], data[i + 3]);
                await this.writeReg(nextReg, val);
                nextReg += 4;
            }
        }
        await this.writeReg(SPI_CMD_REG, SPI_CMD_USR);
        for(i = 0; i < 10; i++){
            val = await this.readReg(SPI_CMD_REG) & SPI_CMD_USR;
            if (val == 0) break;
        }
        if (i === 10) throw new (0, _errorJs.ESPError)("SPI command did not complete in time");
        const stat = await this.readReg(SPI_W0_REG);
        await this.writeReg(SPI_USR_REG, oldSpiUsr);
        await this.writeReg(SPI_USR2_REG, oldSpiUsr2);
        return stat;
    }
    /**
     * Read flash id by executing the SPIFLASH_RDID flash command.
     * @returns {Promise<number>} Register SPI_W0_REG value
     */ async readFlashId() {
        const SPIFLASH_RDID = 0x9f;
        const pkt = new Uint8Array(0);
        return await this.runSpiflashCommand(SPIFLASH_RDID, pkt, 24);
    }
    /**
     * Execute the erase flash command
     * @returns {Promise<number | Uint8Array>} Erase flash command result
     */ async eraseFlash() {
        this.info("Erasing flash (this may take a while)...");
        let d = new Date();
        const t1 = d.getTime();
        const ret = await this.checkCommand("erase flash", this.ESP_ERASE_FLASH, undefined, undefined, this.CHIP_ERASE_TIMEOUT);
        d = new Date();
        const t2 = d.getTime();
        this.info("Chip erase completed successfully in " + (t2 - t1) / 1000 + "s");
        return ret;
    }
    /**
     * Convert a number or unsigned 8-bit array to hex string
     * @param {number | Uint8Array } buffer Data to convert to hex string.
     * @returns {string} A hex string
     */ toHex(buffer) {
        return Array.prototype.map.call(buffer, (x)=>("00" + x.toString(16)).slice(-2)).join("");
    }
    /**
     * Calculate the MD5 Checksum command
     * @param {number} addr Address number
     * @param {number} size Package size
     * @returns {string} MD5 Checksum string
     */ async flashMd5sum(addr, size) {
        const timeout = this.timeoutPerMb(this.MD5_TIMEOUT_PER_MB, size);
        let pkt = this._appendArray(this._intToByteArray(addr), this._intToByteArray(size));
        pkt = this._appendArray(pkt, this._intToByteArray(0));
        pkt = this._appendArray(pkt, this._intToByteArray(0));
        let res = await this.checkCommand("calculate md5sum", this.ESP_SPI_FLASH_MD5, pkt, undefined, timeout);
        if (res instanceof Uint8Array && res.length > 16) res = res.slice(0, 16);
        const strmd5 = this.toHex(res);
        return strmd5;
    }
    async readFlash(addr, size, onPacketReceived = null) {
        let pkt = this._appendArray(this._intToByteArray(addr), this._intToByteArray(size));
        pkt = this._appendArray(pkt, this._intToByteArray(0x1000));
        pkt = this._appendArray(pkt, this._intToByteArray(1024));
        const res = await this.checkCommand("read flash", this.ESP_READ_FLASH, pkt);
        if (res != 0) throw new (0, _errorJs.ESPError)("Failed to read memory: " + res);
        let resp = new Uint8Array(0);
        while(resp.length < size){
            const packet = await this.transport.read(this.FLASH_READ_TIMEOUT);
            if (packet instanceof Uint8Array) {
                if (packet.length > 0) {
                    resp = this._appendArray(resp, packet);
                    await this.transport.write(this._intToByteArray(resp.length));
                    if (onPacketReceived) onPacketReceived(packet, resp.length, size);
                }
            } else throw new (0, _errorJs.ESPError)("Failed to read memory: " + packet);
        }
        return resp;
    }
    /**
     * Upload the flasher ROM bootloader (flasher stub) to the chip.
     * @returns {ROM} The Chip ROM
     */ async runStub() {
        if (this.syncStubDetected) {
            this.info("Stub is already running. No upload is necessary.");
            return this.chip;
        }
        this.info("Uploading stub...");
        let decoded = (0, _atobLiteDefault.default)(this.chip.ROM_TEXT);
        let chardata = decoded.split("").map(function(x) {
            return x.charCodeAt(0);
        });
        const text = new Uint8Array(chardata);
        decoded = (0, _atobLiteDefault.default)(this.chip.ROM_DATA);
        chardata = decoded.split("").map(function(x) {
            return x.charCodeAt(0);
        });
        const data = new Uint8Array(chardata);
        let blocks = Math.floor((text.length + this.ESP_RAM_BLOCK - 1) / this.ESP_RAM_BLOCK);
        let i;
        await this.memBegin(text.length, blocks, this.ESP_RAM_BLOCK, this.chip.TEXT_START);
        for(i = 0; i < blocks; i++){
            const fromOffs = i * this.ESP_RAM_BLOCK;
            const toOffs = fromOffs + this.ESP_RAM_BLOCK;
            await this.memBlock(text.slice(fromOffs, toOffs), i);
        }
        blocks = Math.floor((data.length + this.ESP_RAM_BLOCK - 1) / this.ESP_RAM_BLOCK);
        await this.memBegin(data.length, blocks, this.ESP_RAM_BLOCK, this.chip.DATA_START);
        for(i = 0; i < blocks; i++){
            const fromOffs = i * this.ESP_RAM_BLOCK;
            const toOffs = fromOffs + this.ESP_RAM_BLOCK;
            await this.memBlock(data.slice(fromOffs, toOffs), i);
        }
        this.info("Running stub...");
        await this.memFinish(this.chip.ENTRY);
        // Check up-to next 100 packets to see if stub is running
        for(let i = 0; i < 100; i++){
            const res = await this.transport.read(1000, 6);
            if (res[0] === 79 && res[1] === 72 && res[2] === 65 && res[3] === 73) {
                this.info("Stub running...");
                this.IS_STUB = true;
                this.FLASH_WRITE_SIZE = 0x4000;
                return this.chip;
            }
        }
        throw new (0, _errorJs.ESPError)("Failed to start stub. Unexpected response");
    }
    /**
     * Change the chip baudrate.
     */ async changeBaud() {
        this.info("Changing baudrate to " + this.baudrate);
        const secondArg = this.IS_STUB ? this.transport.baudrate : 0;
        const pkt = this._appendArray(this._intToByteArray(this.baudrate), this._intToByteArray(secondArg));
        const resp = await this.command(this.ESP_CHANGE_BAUDRATE, pkt);
        this.debug(resp[0].toString());
        this.info("Changed");
        await this.transport.disconnect();
        await this._sleep(50);
        await this.transport.connect(this.baudrate, this.serialOptions);
        /* original code seemed absolutely unreliable. use retries and less sleep */ try {
            let i = 64;
            while(i--){
                try {
                    await this.sync();
                    break;
                } catch (error) {
                    this.debug(error.message);
                }
                await this._sleep(10);
            }
        } catch (e) {
            this.debug(e.message);
        }
    }
    /**
     * Execute the main function of ESPLoader.
     * @param {string} mode Reset mode to use
     * @returns {string} chip ROM
     */ async main(mode = "default_reset") {
        await this.detectChip(mode);
        const chip = await this.chip.getChipDescription(this);
        this.info("Chip is " + chip);
        this.info("Features: " + await this.chip.getChipFeatures(this));
        this.info("Crystal is " + await this.chip.getCrystalFreq(this) + "MHz");
        this.info("MAC: " + await this.chip.readMac(this));
        await this.chip.readMac(this);
        if (typeof this.chip.postConnect != "undefined") await this.chip.postConnect(this);
        await this.runStub();
        if (this.romBaudrate !== this.baudrate) await this.changeBaud();
        return chip;
    }
    /**
     * Parse a given flash size string to a number
     * @param {string} flsz Flash size to request
     * @returns {number} Flash size number
     */ parseFlashSizeArg(flsz) {
        if (typeof this.chip.FLASH_SIZES[flsz] === "undefined") throw new (0, _errorJs.ESPError)("Flash size " + flsz + " is not supported by this chip type. Supported sizes: " + this.chip.FLASH_SIZES);
        return this.chip.FLASH_SIZES[flsz];
    }
    /**
     * Update the image flash parameters with given arguments.
     * @param {string} image binary image as string
     * @param {number} address flash address number
     * @param {string} flashSize Flash size string
     * @param {string} flashMode Flash mode string
     * @param {string} flashFreq Flash frequency string
     * @returns {string} modified image string
     */ _updateImageFlashParams(image, address, flashSize, flashMode, flashFreq) {
        this.debug("_update_image_flash_params " + flashSize + " " + flashMode + " " + flashFreq);
        if (image.length < 8) return image;
        if (address != this.chip.BOOTLOADER_FLASH_OFFSET) return image;
        if (flashSize === "keep" && flashMode === "keep" && flashFreq === "keep") {
            this.info("Not changing the image");
            return image;
        }
        const magic = parseInt(image[0]);
        let aFlashMode = parseInt(image[2]);
        const flashSizeFreq = parseInt(image[3]);
        if (magic !== this.ESP_IMAGE_MAGIC) {
            this.info("Warning: Image file at 0x" + address.toString(16) + " doesn't look like an image file, so not changing any flash settings.");
            return image;
        }
        /* XXX: Yet to implement actual image verification */ if (flashMode !== "keep") {
            const flashModes = {
                qio: 0,
                qout: 1,
                dio: 2,
                dout: 3
            };
            aFlashMode = flashModes[flashMode];
        }
        let aFlashFreq = flashSizeFreq & 0x0f;
        if (flashFreq !== "keep") {
            const flashFreqs = {
                "40m": 0,
                "26m": 1,
                "20m": 2,
                "80m": 0xf
            };
            aFlashFreq = flashFreqs[flashFreq];
        }
        let aFlashSize = flashSizeFreq & 0xf0;
        if (flashSize !== "keep") aFlashSize = this.parseFlashSizeArg(flashSize);
        const flashParams = aFlashMode << 8 | aFlashFreq + aFlashSize;
        this.info("Flash params set to " + flashParams.toString(16));
        if (parseInt(image[2]) !== aFlashMode << 8) image = image.substring(0, 2) + (aFlashMode << 8).toString() + image.substring(3);
        if (parseInt(image[3]) !== aFlashFreq + aFlashSize) image = image.substring(0, 3) + (aFlashFreq + aFlashSize).toString() + image.substring(4);
        return image;
    }
    /**
     * Write set of file images into given address based on given FlashOptions object.
     * @param {FlashOptions} options FlashOptions to configure how and what to write into flash.
     */ async writeFlash(options) {
        this.debug("EspLoader program");
        if (options.flashSize !== "keep") {
            const flashEnd = this.flashSizeBytes(options.flashSize);
            for(let i = 0; i < options.fileArray.length; i++){
                if (options.fileArray[i].data.length + options.fileArray[i].address > flashEnd) throw new (0, _errorJs.ESPError)(`File ${i + 1} doesn't fit in the available flash`);
            }
        }
        if (this.IS_STUB === true && options.eraseAll === true) await this.eraseFlash();
        let image, address;
        for(let i = 0; i < options.fileArray.length; i++){
            this.debug("Data Length " + options.fileArray[i].data.length);
            image = options.fileArray[i].data;
            const reminder = options.fileArray[i].data.length % 4;
            if (reminder > 0) image += "\xff\xff\xff\xff".substring(4 - reminder);
            address = options.fileArray[i].address;
            this.debug("Image Length " + image.length);
            if (image.length === 0) {
                this.debug("Warning: File is empty");
                continue;
            }
            image = this._updateImageFlashParams(image, address, options.flashSize, options.flashMode, options.flashFreq);
            let calcmd5 = null;
            if (options.calculateMD5Hash) {
                calcmd5 = options.calculateMD5Hash(image);
                this.debug("Image MD5 " + calcmd5);
            }
            const uncsize = image.length;
            let blocks;
            if (options.compress) {
                const uncimage = this.bstrToUi8(image);
                image = this.ui8ToBstr((0, _pako.deflate)(uncimage, {
                    level: 9
                }));
                blocks = await this.flashDeflBegin(uncsize, image.length, address);
            } else blocks = await this.flashBegin(uncsize, address);
            let seq = 0;
            let bytesSent = 0;
            const totalBytes = image.length;
            if (options.reportProgress) options.reportProgress(i, 0, totalBytes);
            let d = new Date();
            const t1 = d.getTime();
            let timeout = 5000;
            // Create a decompressor to keep track of the size of uncompressed data
            // to be written in each chunk.
            const inflate = new (0, _pako.Inflate)({
                chunkSize: 1
            });
            let totalLenUncompressed = 0;
            inflate.onData = function(chunk) {
                totalLenUncompressed += chunk.byteLength;
            };
            while(image.length > 0){
                this.debug("Write loop " + address + " " + seq + " " + blocks);
                this.info("Writing at 0x" + (address + totalLenUncompressed).toString(16) + "... (" + Math.floor(100 * (seq + 1) / blocks) + "%)");
                const block = this.bstrToUi8(image.slice(0, this.FLASH_WRITE_SIZE));
                if (options.compress) {
                    const lenUncompressedPrevious = totalLenUncompressed;
                    inflate.push(block, false);
                    const blockUncompressed = totalLenUncompressed - lenUncompressedPrevious;
                    let blockTimeout = 3000;
                    if (this.timeoutPerMb(this.ERASE_WRITE_TIMEOUT_PER_MB, blockUncompressed) > 3000) blockTimeout = this.timeoutPerMb(this.ERASE_WRITE_TIMEOUT_PER_MB, blockUncompressed);
                    if (this.IS_STUB === false) // ROM code writes block to flash before ACKing
                    timeout = blockTimeout;
                    await this.flashDeflBlock(block, seq, timeout);
                    if (this.IS_STUB) // Stub ACKs when block is received, then writes to flash while receiving the block after it
                    timeout = blockTimeout;
                } else throw new (0, _errorJs.ESPError)("Yet to handle Non Compressed writes");
                bytesSent += block.length;
                image = image.slice(this.FLASH_WRITE_SIZE, image.length);
                seq++;
                if (options.reportProgress) options.reportProgress(i, bytesSent, totalBytes);
            }
            if (this.IS_STUB) await this.readReg(this.CHIP_DETECT_MAGIC_REG_ADDR, timeout);
            d = new Date();
            const t = d.getTime() - t1;
            if (options.compress) this.info("Wrote " + uncsize + " bytes (" + bytesSent + " compressed) at 0x" + address.toString(16) + " in " + t / 1000 + " seconds.");
            if (calcmd5) {
                const res = await this.flashMd5sum(address, uncsize);
                if (new String(res).valueOf() != new String(calcmd5).valueOf()) {
                    this.info("File  md5: " + calcmd5);
                    this.info("Flash md5: " + res);
                    throw new (0, _errorJs.ESPError)("MD5 of file does not match data in flash!");
                } else this.info("Hash of data verified.");
            }
        }
        this.info("Leaving...");
        if (this.IS_STUB) {
            await this.flashBegin(0, 0);
            if (options.compress) await this.flashDeflFinish();
            else await this.flashFinish();
        }
    }
    /**
     * Read SPI flash manufacturer and device id.
     */ async flashId() {
        this.debug("flash_id");
        const flashid = await this.readFlashId();
        this.info("Manufacturer: " + (flashid & 0xff).toString(16));
        const flidLowbyte = flashid >> 16 & 0xff;
        this.info("Device: " + (flashid >> 8 & 0xff).toString(16) + flidLowbyte.toString(16));
        this.info("Detected flash size: " + this.DETECTED_FLASH_SIZES[flidLowbyte]);
    }
    async getFlashSize() {
        this.debug("flash_id");
        const flashid = await this.readFlashId();
        const flidLowbyte = flashid >> 16 & 0xff;
        return this.DETECTED_FLASH_SIZES_NUM[flidLowbyte];
    }
    /**
     * Perform a chip hard reset by setting RTS to LOW and then HIGH.
     */ async hardReset() {
        await this.transport.setRTS(true); // EN->LOW
        await this._sleep(100);
        await this.transport.setRTS(false);
    }
    /**
     * Soft reset the device chip. Soft reset with run user code is the closest.
     */ async softReset() {
        if (!this.IS_STUB) {
            // "run user code" is as close to a soft reset as we can do
            await this.flashBegin(0, 0);
            await this.flashFinish(false);
        } else if (this.chip.CHIP_NAME != "ESP8266") throw new (0, _errorJs.ESPError)("Soft resetting is currently only supported on ESP8266");
        else // running user code from stub loader requires some hacks
        // in the stub loader
        await this.command(this.ESP_RUN_USER_CODE, undefined, undefined, false);
    }
}

},{"./error.js":"e1ozd","pako":"afBDp","./webserial.js":"a9SMd","./reset.js":"dTpzL","atob-lite":"94aIk","7d854fd681e53ea1":"93pWb","3a69be2577d95e1a":"j2WuY","e208800c594a27e1":"58YQi","cc6aa934aa85cab5":"l62eG","f9efa6d42cb01a29":"21ZLP","8ce93f3522686c43":"28eFl","3e6797086e0d1b6b":"a1KTL","658c9eb0653f38f1":"6VKeT","c66508533b15d24e":"kk0za","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e1ozd":[function(require,module,exports) {
/**
 * Represents a Espressif chip error.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ESPError", ()=>ESPError);
parcelHelpers.export(exports, "TimeoutError", ()=>TimeoutError);
class ESPError extends Error {
}
/**
 * Represents a Espressif timeout chip error.
 */ class TimeoutError extends ESPError {
}

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

},{}],"afBDp":[function(require,module,exports) {
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */ // (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
/* eslint-disable space-unary-ops */ /* Public constants ==========================================================*/ /* ===========================================================================*/ //const Z_FILTERED          = 1;
//const Z_HUFFMAN_ONLY      = 2;
//const Z_RLE               = 3;
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Deflate", ()=>Deflate_1);
parcelHelpers.export(exports, "Inflate", ()=>Inflate_1);
parcelHelpers.export(exports, "constants", ()=>constants_1);
parcelHelpers.export(exports, "default", ()=>pako);
parcelHelpers.export(exports, "deflate", ()=>deflate_1);
parcelHelpers.export(exports, "deflateRaw", ()=>deflateRaw_1);
parcelHelpers.export(exports, "gzip", ()=>gzip_1);
parcelHelpers.export(exports, "inflate", ()=>inflate_1);
parcelHelpers.export(exports, "inflateRaw", ()=>inflateRaw_1);
parcelHelpers.export(exports, "ungzip", ()=>ungzip_1);
const Z_FIXED$1 = 4;
//const Z_DEFAULT_STRATEGY  = 0;
/* Possible values of the data_type field (though see inflate()) */ const Z_BINARY = 0;
const Z_TEXT = 1;
//const Z_ASCII             = 1; // = Z_TEXT
const Z_UNKNOWN$1 = 2;
/*============================================================================*/ function zero$1(buf) {
    let len = buf.length;
    while(--len >= 0)buf[len] = 0;
}
// From zutil.h
const STORED_BLOCK = 0;
const STATIC_TREES = 1;
const DYN_TREES = 2;
/* The three kinds of block type */ const MIN_MATCH$1 = 3;
const MAX_MATCH$1 = 258;
/* The minimum and maximum match lengths */ // From deflate.h
/* ===========================================================================
 * Internal compression state.
 */ const LENGTH_CODES$1 = 29;
/* number of length codes, not counting the special END_BLOCK code */ const LITERALS$1 = 256;
/* number of literal bytes 0..255 */ const L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1;
/* number of Literal or Length codes, including the END_BLOCK code */ const D_CODES$1 = 30;
/* number of distance codes */ const BL_CODES$1 = 19;
/* number of codes used to transfer the bit lengths */ const HEAP_SIZE$1 = 2 * L_CODES$1 + 1;
/* maximum heap size */ const MAX_BITS$1 = 15;
/* All codes must not exceed MAX_BITS bits */ const Buf_size = 16;
/* size of bit buffer in bi_buf */ /* ===========================================================================
 * Constants
 */ const MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */ const END_BLOCK = 256;
/* end of block literal code */ const REP_3_6 = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */ const REPZ_3_10 = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */ const REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */ /* eslint-disable comma-spacing,array-bracket-spacing */ const extra_lbits = /* extra bits for each length code */ new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0
]);
const extra_dbits = /* extra bits for each distance code */ new Uint8Array([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13
]);
const extra_blbits = /* extra bits for each bit length code */ new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    3,
    7
]);
const bl_order = new Uint8Array([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
]);
/* eslint-enable comma-spacing,array-bracket-spacing */ /* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */ /* ===========================================================================
 * Local data. These are initialized only once.
 */ // We pre-fill arrays with 0 to avoid uninitialized gaps
const DIST_CODE_LEN = 512; /* see definition of array dist_code below */ 
// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
const static_ltree = new Array((L_CODES$1 + 2) * 2);
zero$1(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */ const static_dtree = new Array(D_CODES$1 * 2);
zero$1(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */ const _dist_code = new Array(DIST_CODE_LEN);
zero$1(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */ const _length_code = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
zero$1(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */ const base_length = new Array(LENGTH_CODES$1);
zero$1(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */ const base_dist = new Array(D_CODES$1);
zero$1(base_dist);
/* First normalized distance for each code (0 = distance of 1) */ function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
    this.static_tree = static_tree; /* static tree or NULL */ 
    this.extra_bits = extra_bits; /* extra bits for each code or NULL */ 
    this.extra_base = extra_base; /* base index for extra_bits */ 
    this.elems = elems; /* max number of elements in the tree */ 
    this.max_length = max_length; /* max bit length for the codes */ 
    // show if `static_tree` has data or dummy - needed for monomorphic objects
    this.has_stree = static_tree && static_tree.length;
}
let static_l_desc;
let static_d_desc;
let static_bl_desc;
function TreeDesc(dyn_tree, stat_desc) {
    this.dyn_tree = dyn_tree; /* the dynamic tree */ 
    this.max_code = 0; /* largest code with non zero frequency */ 
    this.stat_desc = stat_desc; /* the corresponding static tree */ 
}
const d_code = (dist)=>{
    return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
};
/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */ const put_short = (s, w)=>{
    //    put_byte(s, (uch)((w) & 0xff));
    //    put_byte(s, (uch)((ush)(w) >> 8));
    s.pending_buf[s.pending++] = w & 0xff;
    s.pending_buf[s.pending++] = w >>> 8 & 0xff;
};
/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */ const send_bits = (s, value, length)=>{
    if (s.bi_valid > Buf_size - length) {
        s.bi_buf |= value << s.bi_valid & 0xffff;
        put_short(s, s.bi_buf);
        s.bi_buf = value >> Buf_size - s.bi_valid;
        s.bi_valid += length - Buf_size;
    } else {
        s.bi_buf |= value << s.bi_valid & 0xffff;
        s.bi_valid += length;
    }
};
const send_code = (s, c, tree)=>{
    send_bits(s, tree[c * 2], tree[c * 2 + 1]);
};
/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */ const bi_reverse = (code, len)=>{
    let res = 0;
    do {
        res |= code & 1;
        code >>>= 1;
        res <<= 1;
    }while (--len > 0);
    return res >>> 1;
};
/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */ const bi_flush = (s)=>{
    if (s.bi_valid === 16) {
        put_short(s, s.bi_buf);
        s.bi_buf = 0;
        s.bi_valid = 0;
    } else if (s.bi_valid >= 8) {
        s.pending_buf[s.pending++] = s.bi_buf & 0xff;
        s.bi_buf >>= 8;
        s.bi_valid -= 8;
    }
};
/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */ const gen_bitlen = (s, desc)=>{
    //    deflate_state *s;
    //    tree_desc *desc;    /* the tree descriptor */
    const tree = desc.dyn_tree;
    const max_code = desc.max_code;
    const stree = desc.stat_desc.static_tree;
    const has_stree = desc.stat_desc.has_stree;
    const extra = desc.stat_desc.extra_bits;
    const base = desc.stat_desc.extra_base;
    const max_length = desc.stat_desc.max_length;
    let h; /* heap index */ 
    let n, m; /* iterate over the tree elements */ 
    let bits; /* bit length */ 
    let xbits; /* extra bits */ 
    let f; /* frequency */ 
    let overflow = 0; /* number of elements with bit length too large */ 
    for(bits = 0; bits <= MAX_BITS$1; bits++)s.bl_count[bits] = 0;
    /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */ tree[s.heap[s.heap_max] * 2 + 1] = 0; /* root of the heap */ 
    for(h = s.heap_max + 1; h < HEAP_SIZE$1; h++){
        n = s.heap[h];
        bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
        if (bits > max_length) {
            bits = max_length;
            overflow++;
        }
        tree[n * 2 + 1] = bits;
        /* We overwrite tree[n].Dad which is no longer needed */ if (n > max_code) continue;
         /* not a leaf node */ 
        s.bl_count[bits]++;
        xbits = 0;
        if (n >= base) xbits = extra[n - base];
        f = tree[n * 2] /*.Freq*/ ;
        s.opt_len += f * (bits + xbits);
        if (has_stree) s.static_len += f * (stree[n * 2 + 1] + xbits);
    }
    if (overflow === 0) return;
    // Tracev((stderr,"\nbit length overflow\n"));
    /* This happens for example on obj2 and pic of the Calgary corpus */ /* Find the first bit length which could increase: */ do {
        bits = max_length - 1;
        while(s.bl_count[bits] === 0)bits--;
        s.bl_count[bits]--; /* move one leaf down the tree */ 
        s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */ 
        s.bl_count[max_length]--;
        /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */ overflow -= 2;
    }while (overflow > 0);
    /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */ for(bits = max_length; bits !== 0; bits--){
        n = s.bl_count[bits];
        while(n !== 0){
            m = s.heap[--h];
            if (m > max_code) continue;
            if (tree[m * 2 + 1] !== bits) {
                // Tracev((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
                s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2] /*.Freq*/ ;
                tree[m * 2 + 1] = bits;
            }
            n--;
        }
    }
};
/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */ const gen_codes = (tree, max_code, bl_count)=>{
    //    ct_data *tree;             /* the tree to decorate */
    //    int max_code;              /* largest code with non zero frequency */
    //    ushf *bl_count;            /* number of codes at each bit length */
    const next_code = new Array(MAX_BITS$1 + 1); /* next code value for each bit length */ 
    let code = 0; /* running code value */ 
    let bits; /* bit index */ 
    let n; /* code index */ 
    /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */ for(bits = 1; bits <= MAX_BITS$1; bits++){
        code = code + bl_count[bits - 1] << 1;
        next_code[bits] = code;
    }
    /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */ //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
    //        "inconsistent bit counts");
    //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));
    for(n = 0; n <= max_code; n++){
        let len = tree[n * 2 + 1] /*.Len*/ ;
        if (len === 0) continue;
        /* Now reverse the bits */ tree[n * 2] = bi_reverse(next_code[len]++, len);
    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
    }
};
/* ===========================================================================
 * Initialize the various 'constant' tables.
 */ const tr_static_init = ()=>{
    let n; /* iterates over tree elements */ 
    let bits; /* bit counter */ 
    let length; /* length value */ 
    let code; /* code value */ 
    let dist; /* distance index */ 
    const bl_count = new Array(MAX_BITS$1 + 1);
    /* number of codes at each bit length for an optimal tree */ // do check in _tr_init()
    //if (static_init_done) return;
    /* For some embedded targets, global variables are not initialized: */ /*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/ /* Initialize the mapping length (0..255) -> length code (0..28) */ length = 0;
    for(code = 0; code < LENGTH_CODES$1 - 1; code++){
        base_length[code] = length;
        for(n = 0; n < 1 << extra_lbits[code]; n++)_length_code[length++] = code;
    }
    //Assert (length == 256, "tr_static_init: length != 256");
    /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */ _length_code[length - 1] = code;
    /* Initialize the mapping dist (0..32K) -> dist code (0..29) */ dist = 0;
    for(code = 0; code < 16; code++){
        base_dist[code] = dist;
        for(n = 0; n < 1 << extra_dbits[code]; n++)_dist_code[dist++] = code;
    }
    //Assert (dist == 256, "tr_static_init: dist != 256");
    dist >>= 7; /* from now on, all distances are divided by 128 */ 
    for(; code < D_CODES$1; code++){
        base_dist[code] = dist << 7;
        for(n = 0; n < 1 << extra_dbits[code] - 7; n++)_dist_code[256 + dist++] = code;
    }
    //Assert (dist == 256, "tr_static_init: 256+dist != 512");
    /* Construct the codes of the static literal tree */ for(bits = 0; bits <= MAX_BITS$1; bits++)bl_count[bits] = 0;
    n = 0;
    while(n <= 143){
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
    }
    while(n <= 255){
        static_ltree[n * 2 + 1] = 9;
        n++;
        bl_count[9]++;
    }
    while(n <= 279){
        static_ltree[n * 2 + 1] = 7;
        n++;
        bl_count[7]++;
    }
    while(n <= 287){
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
    }
    /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */ gen_codes(static_ltree, L_CODES$1 + 1, bl_count);
    /* The static distance tree is trivial: */ for(n = 0; n < D_CODES$1; n++){
        static_dtree[n * 2 + 1] = 5;
        static_dtree[n * 2] = bi_reverse(n, 5);
    }
    // Now data ready and we can init static trees
    static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1);
    static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES$1, MAX_BITS$1);
    static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES$1, MAX_BL_BITS);
//static_init_done = true;
};
/* ===========================================================================
 * Initialize a new block.
 */ const init_block = (s)=>{
    let n; /* iterates over tree elements */ 
    /* Initialize the trees. */ for(n = 0; n < L_CODES$1; n++)s.dyn_ltree[n * 2] = 0;
    for(n = 0; n < D_CODES$1; n++)s.dyn_dtree[n * 2] = 0;
    for(n = 0; n < BL_CODES$1; n++)s.bl_tree[n * 2] = 0;
    s.dyn_ltree[END_BLOCK * 2] = 1;
    s.opt_len = s.static_len = 0;
    s.sym_next = s.matches = 0;
};
/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */ const bi_windup = (s)=>{
    if (s.bi_valid > 8) put_short(s, s.bi_buf);
    else if (s.bi_valid > 0) //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
    s.bi_buf = 0;
    s.bi_valid = 0;
};
/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */ const smaller = (tree, n, m, depth)=>{
    const _n2 = n * 2;
    const _m2 = m * 2;
    return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
};
/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */ const pqdownheap = (s, tree, k)=>{
    //    deflate_state *s;
    //    ct_data *tree;  /* the tree to restore */
    //    int k;               /* node to move down */
    const v = s.heap[k];
    let j = k << 1; /* left son of k */ 
    while(j <= s.heap_len){
        /* Set j to the smallest of the two sons: */ if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) j++;
        /* Exit if v is smaller than both sons */ if (smaller(tree, v, s.heap[j], s.depth)) break;
        /* Exchange v with the smallest son */ s.heap[k] = s.heap[j];
        k = j;
        /* And continue down the tree, setting j to the left son of k */ j <<= 1;
    }
    s.heap[k] = v;
};
// inlined manually
// const SMALLEST = 1;
/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */ const compress_block = (s, ltree, dtree)=>{
    //    deflate_state *s;
    //    const ct_data *ltree; /* literal tree */
    //    const ct_data *dtree; /* distance tree */
    let dist; /* distance of matched string */ 
    let lc; /* match length or unmatched char (if dist == 0) */ 
    let sx = 0; /* running index in sym_buf */ 
    let code; /* the code to send */ 
    let extra; /* number of extra bits to send */ 
    if (s.sym_next !== 0) do {
        dist = s.pending_buf[s.sym_buf + sx++] & 0xff;
        dist += (s.pending_buf[s.sym_buf + sx++] & 0xff) << 8;
        lc = s.pending_buf[s.sym_buf + sx++];
        if (dist === 0) send_code(s, lc, ltree); /* send a literal byte */ 
        else {
            /* Here, lc is the match length - MIN_MATCH */ code = _length_code[lc];
            send_code(s, code + LITERALS$1 + 1, ltree); /* send the length code */ 
            extra = extra_lbits[code];
            if (extra !== 0) {
                lc -= base_length[code];
                send_bits(s, lc, extra); /* send the extra length bits */ 
            }
            dist--; /* dist is now the match distance - 1 */ 
            code = d_code(dist);
            //Assert (code < D_CODES, "bad d_code");
            send_code(s, code, dtree); /* send the distance code */ 
            extra = extra_dbits[code];
            if (extra !== 0) {
                dist -= base_dist[code];
                send_bits(s, dist, extra); /* send the extra distance bits */ 
            }
        } /* literal or match pair ? */ 
    /* Check that the overlay between pending_buf and sym_buf is ok: */ //Assert(s->pending < s->lit_bufsize + sx, "pendingBuf overflow");
    }while (sx < s.sym_next);
    send_code(s, END_BLOCK, ltree);
};
/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */ const build_tree = (s, desc)=>{
    //    deflate_state *s;
    //    tree_desc *desc; /* the tree descriptor */
    const tree = desc.dyn_tree;
    const stree = desc.stat_desc.static_tree;
    const has_stree = desc.stat_desc.has_stree;
    const elems = desc.stat_desc.elems;
    let n, m; /* iterate over heap elements */ 
    let max_code = -1; /* largest code with non zero frequency */ 
    let node; /* new node being created */ 
    /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */ s.heap_len = 0;
    s.heap_max = HEAP_SIZE$1;
    for(n = 0; n < elems; n++)if (tree[n * 2] !== 0) {
        s.heap[++s.heap_len] = max_code = n;
        s.depth[n] = 0;
    } else tree[n * 2 + 1] = 0;
    /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */ while(s.heap_len < 2){
        node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
        tree[node * 2] = 1;
        s.depth[node] = 0;
        s.opt_len--;
        if (has_stree) s.static_len -= stree[node * 2 + 1] /*.Len*/ ;
    /* node is 0 or 1 so it does not have extra bits */ }
    desc.max_code = max_code;
    /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */ for(n = s.heap_len >> 1 /*int /2*/ ; n >= 1; n--)pqdownheap(s, tree, n);
    /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */ node = elems; /* next internal node of the tree */ 
    do {
        //pqremove(s, tree, n);  /* n = node of least frequency */
        /*** pqremove ***/ n = s.heap[1 /*SMALLEST*/ ];
        s.heap[1 /*SMALLEST*/ ] = s.heap[s.heap_len--];
        pqdownheap(s, tree, 1 /*SMALLEST*/ );
        /***/ m = s.heap[1 /*SMALLEST*/ ]; /* m = node of next least frequency */ 
        s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */ 
        s.heap[--s.heap_max] = m;
        /* Create a new node father of n and m */ tree[node * 2] = tree[n * 2] + tree[m * 2] /*.Freq*/ ;
        s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
        tree[n * 2 + 1] = tree[m * 2 + 1] = node;
        /* and insert the new node in the heap */ s.heap[1 /*SMALLEST*/ ] = node++;
        pqdownheap(s, tree, 1 /*SMALLEST*/ );
    }while (s.heap_len >= 2);
    s.heap[--s.heap_max] = s.heap[1 /*SMALLEST*/ ];
    /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */ gen_bitlen(s, desc);
    /* The field len is now set, we can generate the bit codes */ gen_codes(tree, max_code, s.bl_count);
};
/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */ const scan_tree = (s, tree, max_code)=>{
    //    deflate_state *s;
    //    ct_data *tree;   /* the tree to be scanned */
    //    int max_code;    /* and its largest code of non zero frequency */
    let n; /* iterates over all tree elements */ 
    let prevlen = -1; /* last emitted length */ 
    let curlen; /* length of current code */ 
    let nextlen = tree[1] /*.Len*/ ; /* length of next code */ 
    let count = 0; /* repeat count of the current code */ 
    let max_count = 7; /* max repeat count */ 
    let min_count = 4; /* min repeat count */ 
    if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
    }
    tree[(max_code + 1) * 2 + 1] = 0xffff; /* guard */ 
    for(n = 0; n <= max_code; n++){
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1] /*.Len*/ ;
        if (++count < max_count && curlen === nextlen) continue;
        else if (count < min_count) s.bl_tree[curlen * 2] += count;
        else if (curlen !== 0) {
            if (curlen !== prevlen) s.bl_tree[curlen * 2]++;
            s.bl_tree[REP_3_6 * 2]++;
        } else if (count <= 10) s.bl_tree[REPZ_3_10 * 2]++;
        else s.bl_tree[REPZ_11_138 * 2]++;
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
        } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
        } else {
            max_count = 7;
            min_count = 4;
        }
    }
};
/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */ const send_tree = (s, tree, max_code)=>{
    //    deflate_state *s;
    //    ct_data *tree; /* the tree to be scanned */
    //    int max_code;       /* and its largest code of non zero frequency */
    let n; /* iterates over all tree elements */ 
    let prevlen = -1; /* last emitted length */ 
    let curlen; /* length of current code */ 
    let nextlen = tree[1] /*.Len*/ ; /* length of next code */ 
    let count = 0; /* repeat count of the current code */ 
    let max_count = 7; /* max repeat count */ 
    let min_count = 4; /* min repeat count */ 
    /* tree[max_code+1].Len = -1; */ /* guard already set */ if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
    }
    for(n = 0; n <= max_code; n++){
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1] /*.Len*/ ;
        if (++count < max_count && curlen === nextlen) continue;
        else if (count < min_count) do send_code(s, curlen, s.bl_tree);
        while (--count !== 0);
        else if (curlen !== 0) {
            if (curlen !== prevlen) {
                send_code(s, curlen, s.bl_tree);
                count--;
            }
            //Assert(count >= 3 && count <= 6, " 3_6?");
            send_code(s, REP_3_6, s.bl_tree);
            send_bits(s, count - 3, 2);
        } else if (count <= 10) {
            send_code(s, REPZ_3_10, s.bl_tree);
            send_bits(s, count - 3, 3);
        } else {
            send_code(s, REPZ_11_138, s.bl_tree);
            send_bits(s, count - 11, 7);
        }
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
        } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
        } else {
            max_count = 7;
            min_count = 4;
        }
    }
};
/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */ const build_bl_tree = (s)=>{
    let max_blindex; /* index of last bit length code of non zero freq */ 
    /* Determine the bit length frequencies for literal and distance trees */ scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
    scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
    /* Build the bit length tree: */ build_tree(s, s.bl_desc);
    /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */ /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */ for(max_blindex = BL_CODES$1 - 1; max_blindex >= 3; max_blindex--){
        if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) break;
    }
    /* Update opt_len to include the bit length tree and counts */ s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
    //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
    //        s->opt_len, s->static_len));
    return max_blindex;
};
/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */ const send_all_trees = (s, lcodes, dcodes, blcodes)=>{
    //    deflate_state *s;
    //    int lcodes, dcodes, blcodes; /* number of codes for each tree */
    let rank; /* index in bl_order */ 
    //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
    //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
    //        "too many codes");
    //Tracev((stderr, "\nbl counts: "));
    send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */ 
    send_bits(s, dcodes - 1, 5);
    send_bits(s, blcodes - 4, 4); /* not -3 as stated in appnote.txt */ 
    for(rank = 0; rank < blcodes; rank++)//Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
    //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));
    send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */ 
    //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));
    send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */ 
//Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
};
/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "block list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "allow list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */ const detect_data_type = (s)=>{
    /* block_mask is the bit mask of block-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */ let block_mask = 0xf3ffc07f;
    let n;
    /* Check for non-textual ("block-listed") bytes. */ for(n = 0; n <= 31; n++, block_mask >>>= 1){
        if (block_mask & 1 && s.dyn_ltree[n * 2] !== 0) return Z_BINARY;
    }
    /* Check for textual ("allow-listed") bytes. */ if (s.dyn_ltree[18] !== 0 || s.dyn_ltree[20] !== 0 || s.dyn_ltree[26] !== 0) return Z_TEXT;
    for(n = 32; n < LITERALS$1; n++){
        if (s.dyn_ltree[n * 2] !== 0) return Z_TEXT;
    }
    /* There are no "block-listed" or "allow-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */ return Z_BINARY;
};
let static_init_done = false;
/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */ const _tr_init$1 = (s)=>{
    if (!static_init_done) {
        tr_static_init();
        static_init_done = true;
    }
    s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
    s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
    s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
    s.bi_buf = 0;
    s.bi_valid = 0;
    /* Initialize the first block of the first file: */ init_block(s);
};
/* ===========================================================================
 * Send a stored block
 */ const _tr_stored_block$1 = (s, buf, stored_len, last)=>{
    //DeflateState *s;
    //charf *buf;       /* input block */
    //ulg stored_len;   /* length of input block */
    //int last;         /* one if this is the last block for a file */
    send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3); /* send block type */ 
    bi_windup(s); /* align on byte boundary */ 
    put_short(s, stored_len);
    put_short(s, ~stored_len);
    if (stored_len) s.pending_buf.set(s.window.subarray(buf, buf + stored_len), s.pending);
    s.pending += stored_len;
};
/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */ const _tr_align$1 = (s)=>{
    send_bits(s, STATIC_TREES << 1, 3);
    send_code(s, END_BLOCK, static_ltree);
    bi_flush(s);
};
/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and write out the encoded block.
 */ const _tr_flush_block$1 = (s, buf, stored_len, last)=>{
    //DeflateState *s;
    //charf *buf;       /* input block, or NULL if too old */
    //ulg stored_len;   /* length of input block */
    //int last;         /* one if this is the last block for a file */
    let opt_lenb, static_lenb; /* opt_len and static_len in bytes */ 
    let max_blindex = 0; /* index of last bit length code of non zero freq */ 
    /* Build the Huffman trees unless a stored block is forced */ if (s.level > 0) {
        /* Check if the file is binary or text */ if (s.strm.data_type === Z_UNKNOWN$1) s.strm.data_type = detect_data_type(s);
        /* Construct the literal and distance trees */ build_tree(s, s.l_desc);
        // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
        //        s->static_len));
        build_tree(s, s.d_desc);
        // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
        //        s->static_len));
        /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */ /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */ max_blindex = build_bl_tree(s);
        /* Determine the best encoding. Compute the block lengths in bytes. */ opt_lenb = s.opt_len + 3 + 7 >>> 3;
        static_lenb = s.static_len + 3 + 7 >>> 3;
        // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
        //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
        //        s->sym_next / 3));
        if (static_lenb <= opt_lenb) opt_lenb = static_lenb;
    } else // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */ 
    if (stored_len + 4 <= opt_lenb && buf !== -1) /* 4: two words for the lengths */ /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */ _tr_stored_block$1(s, buf, stored_len, last);
    else if (s.strategy === Z_FIXED$1 || static_lenb === opt_lenb) {
        send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
        compress_block(s, static_ltree, static_dtree);
    } else {
        send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
        send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
        compress_block(s, s.dyn_ltree, s.dyn_dtree);
    }
    // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
    /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */ init_block(s);
    if (last) bi_windup(s);
// Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
//       s->compressed_len-7*last));
};
/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */ const _tr_tally$1 = (s, dist, lc)=>{
    //    deflate_state *s;
    //    unsigned dist;  /* distance of matched string */
    //    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
    s.pending_buf[s.sym_buf + s.sym_next++] = dist;
    s.pending_buf[s.sym_buf + s.sym_next++] = dist >> 8;
    s.pending_buf[s.sym_buf + s.sym_next++] = lc;
    if (dist === 0) /* lc is the unmatched char */ s.dyn_ltree[lc * 2]++;
    else {
        s.matches++;
        /* Here, lc is the match length - MIN_MATCH */ dist--; /* dist = match distance - 1 */ 
        //Assert((ush)dist < (ush)MAX_DIST(s) &&
        //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
        //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");
        s.dyn_ltree[(_length_code[lc] + LITERALS$1 + 1) * 2]++;
        s.dyn_dtree[d_code(dist) * 2]++;
    }
    return s.sym_next === s.sym_end;
};
var _tr_init_1 = _tr_init$1;
var _tr_stored_block_1 = _tr_stored_block$1;
var _tr_flush_block_1 = _tr_flush_block$1;
var _tr_tally_1 = _tr_tally$1;
var _tr_align_1 = _tr_align$1;
var trees = {
    _tr_init: _tr_init_1,
    _tr_stored_block: _tr_stored_block_1,
    _tr_flush_block: _tr_flush_block_1,
    _tr_tally: _tr_tally_1,
    _tr_align: _tr_align_1
};
// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const adler32 = (adler, buf, len, pos)=>{
    let s1 = adler & 0xffff | 0, s2 = adler >>> 16 & 0xffff | 0, n = 0;
    while(len !== 0){
        // Set limit ~ twice less than 5552, to keep
        // s2 in 31-bits, because we force signed ints.
        // in other case %= will fail.
        n = len > 2000 ? 2000 : len;
        len -= n;
        do {
            s1 = s1 + buf[pos++] | 0;
            s2 = s2 + s1 | 0;
        }while (--n);
        s1 %= 65521;
        s2 %= 65521;
    }
    return s1 | s2 << 16 | 0;
};
var adler32_1 = adler32;
// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
// Use ordinary array, since untyped makes no boost here
const makeTable = ()=>{
    let c, table = [];
    for(var n = 0; n < 256; n++){
        c = n;
        for(var k = 0; k < 8; k++)c = c & 1 ? 0xEDB88320 ^ c >>> 1 : c >>> 1;
        table[n] = c;
    }
    return table;
};
// Create table on load. Just 255 signed longs. Not a problem.
const crcTable = new Uint32Array(makeTable());
const crc32 = (crc, buf, len, pos)=>{
    const t = crcTable;
    const end = pos + len;
    crc ^= -1;
    for(let i = pos; i < end; i++)crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 0xFF];
    return crc ^ -1; // >>> 0;
};
var crc32_1 = crc32;
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
var messages = {
    2: "need dictionary",
    /* Z_NEED_DICT       2  */ 1: "stream end",
    /* Z_STREAM_END      1  */ 0: "",
    /* Z_OK              0  */ "-1": "file error",
    /* Z_ERRNO         (-1) */ "-2": "stream error",
    /* Z_STREAM_ERROR  (-2) */ "-3": "data error",
    /* Z_DATA_ERROR    (-3) */ "-4": "insufficient memory",
    /* Z_MEM_ERROR     (-4) */ "-5": "buffer error",
    /* Z_BUF_ERROR     (-5) */ "-6": "incompatible version" /* Z_VERSION_ERROR (-6) */ 
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
var constants$2 = {
    /* Allowed flush values; see deflate() and inflate() below for details */ Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */ Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_MEM_ERROR: -4,
    Z_BUF_ERROR: -5,
    //Z_VERSION_ERROR: -6,
    /* compression levels */ Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    /* Possible values of the data_type field (though see inflate()) */ Z_BINARY: 0,
    Z_TEXT: 1,
    //Z_ASCII:                1, // = Z_TEXT (deprecated)
    Z_UNKNOWN: 2,
    /* The deflate compression method */ Z_DEFLATED: 8
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = trees;
/* Public constants ==========================================================*/ /* ===========================================================================*/ const { Z_NO_FLUSH: Z_NO_FLUSH$2, Z_PARTIAL_FLUSH, Z_FULL_FLUSH: Z_FULL_FLUSH$1, Z_FINISH: Z_FINISH$3, Z_BLOCK: Z_BLOCK$1, Z_OK: Z_OK$3, Z_STREAM_END: Z_STREAM_END$3, Z_STREAM_ERROR: Z_STREAM_ERROR$2, Z_DATA_ERROR: Z_DATA_ERROR$2, Z_BUF_ERROR: Z_BUF_ERROR$1, Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1, Z_FILTERED, Z_HUFFMAN_ONLY, Z_RLE, Z_FIXED, Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1, Z_UNKNOWN, Z_DEFLATED: Z_DEFLATED$2 } = constants$2;
/*============================================================================*/ const MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */ const MAX_WBITS$1 = 15;
/* 32K LZ77 window */ const DEF_MEM_LEVEL = 8;
const LENGTH_CODES = 29;
/* number of length codes, not counting the special END_BLOCK code */ const LITERALS = 256;
/* number of literal bytes 0..255 */ const L_CODES = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */ const D_CODES = 30;
/* number of distance codes */ const BL_CODES = 19;
/* number of codes used to transfer the bit lengths */ const HEAP_SIZE = 2 * L_CODES + 1;
/* maximum heap size */ const MAX_BITS = 15;
/* All codes must not exceed MAX_BITS bits */ const MIN_MATCH = 3;
const MAX_MATCH = 258;
const MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
const PRESET_DICT = 0x20;
const INIT_STATE = 42; /* zlib header -> BUSY_STATE */ 
//#ifdef GZIP
const GZIP_STATE = 57; /* gzip header -> BUSY_STATE | EXTRA_STATE */ 
//#endif
const EXTRA_STATE = 69; /* gzip extra block -> NAME_STATE */ 
const NAME_STATE = 73; /* gzip file name -> COMMENT_STATE */ 
const COMMENT_STATE = 91; /* gzip comment -> HCRC_STATE */ 
const HCRC_STATE = 103; /* gzip header CRC -> BUSY_STATE */ 
const BUSY_STATE = 113; /* deflate -> FINISH_STATE */ 
const FINISH_STATE = 666; /* stream complete */ 
const BS_NEED_MORE = 1; /* block not completed, need more input or more output */ 
const BS_BLOCK_DONE = 2; /* block flush performed */ 
const BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */ 
const BS_FINISH_DONE = 4; /* finish done, accept no more input or output */ 
const OS_CODE = 0x03; // Unix :) . Don't detect, use this default.
const err = (strm, errorCode)=>{
    strm.msg = messages[errorCode];
    return errorCode;
};
const rank = (f)=>{
    return f * 2 - (f > 4 ? 9 : 0);
};
const zero = (buf)=>{
    let len = buf.length;
    while(--len >= 0)buf[len] = 0;
};
/* ===========================================================================
 * Slide the hash table when sliding the window down (could be avoided with 32
 * bit values at the expense of memory usage). We slide even when level == 0 to
 * keep the hash table consistent if we switch back to level > 0 later.
 */ const slide_hash = (s)=>{
    let n, m;
    let p;
    let wsize = s.w_size;
    n = s.hash_size;
    p = n;
    do {
        m = s.head[--p];
        s.head[p] = m >= wsize ? m - wsize : 0;
    }while (--n);
    n = wsize;
    //#ifndef FASTEST
    p = n;
    do {
        m = s.prev[--p];
        s.prev[p] = m >= wsize ? m - wsize : 0;
    /* If n is not on any hash chain, prev[n] is garbage but
     * its value will never be used.
     */ }while (--n);
//#endif
};
/* eslint-disable new-cap */ let HASH_ZLIB = (s, prev, data)=>(prev << s.hash_shift ^ data) & s.hash_mask;
// This hash causes less collisions, https://github.com/nodeca/pako/issues/135
// But breaks binary compatibility
//let HASH_FAST = (s, prev, data) => ((prev << 8) + (prev >> 8) + (data << 4)) & s.hash_mask;
let HASH = HASH_ZLIB;
/* =========================================================================
 * Flush as much pending output as possible. All deflate() output, except for
 * some deflate_stored() output, goes through this function so some
 * applications may wish to modify it to avoid allocating a large
 * strm->next_out buffer and copying into it. (See also read_buf()).
 */ const flush_pending = (strm)=>{
    const s = strm.state;
    //_tr_flush_bits(s);
    let len = s.pending;
    if (len > strm.avail_out) len = strm.avail_out;
    if (len === 0) return;
    strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
    strm.next_out += len;
    s.pending_out += len;
    strm.total_out += len;
    strm.avail_out -= len;
    s.pending -= len;
    if (s.pending === 0) s.pending_out = 0;
};
const flush_block_only = (s, last)=>{
    _tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
    s.block_start = s.strstart;
    flush_pending(s.strm);
};
const put_byte = (s, b)=>{
    s.pending_buf[s.pending++] = b;
};
/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */ const putShortMSB = (s, b)=>{
    //  put_byte(s, (Byte)(b >> 8));
    //  put_byte(s, (Byte)(b & 0xff));
    s.pending_buf[s.pending++] = b >>> 8 & 0xff;
    s.pending_buf[s.pending++] = b & 0xff;
};
/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */ const read_buf = (strm, buf, start, size)=>{
    let len = strm.avail_in;
    if (len > size) len = size;
    if (len === 0) return 0;
    strm.avail_in -= len;
    // zmemcpy(buf, strm->next_in, len);
    buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
    if (strm.state.wrap === 1) strm.adler = adler32_1(strm.adler, buf, len, start);
    else if (strm.state.wrap === 2) strm.adler = crc32_1(strm.adler, buf, len, start);
    strm.next_in += len;
    strm.total_in += len;
    return len;
};
/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */ const longest_match = (s, cur_match)=>{
    let chain_length = s.max_chain_length; /* max hash chain length */ 
    let scan = s.strstart; /* current string */ 
    let match; /* matched string */ 
    let len; /* length of current match */ 
    let best_len = s.prev_length; /* best match length so far */ 
    let nice_match = s.nice_match; /* stop if match long enough */ 
    const limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0 /*NIL*/ ;
    const _win = s.window; // shortcut
    const wmask = s.w_mask;
    const prev = s.prev;
    /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */ const strend = s.strstart + MAX_MATCH;
    let scan_end1 = _win[scan + best_len - 1];
    let scan_end = _win[scan + best_len];
    /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */ // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");
    /* Do not waste too much time if we already have a good match: */ if (s.prev_length >= s.good_match) chain_length >>= 2;
    /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */ if (nice_match > s.lookahead) nice_match = s.lookahead;
    // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");
    do {
        // Assert(cur_match < s->strstart, "no future");
        match = cur_match;
        /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */ if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) continue;
        /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */ scan += 2;
        match++;
        // Assert(*scan == *match, "match[2]?");
        /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */ do ;
        while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
        // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");
        len = MAX_MATCH - (strend - scan);
        scan = strend - MAX_MATCH;
        if (len > best_len) {
            s.match_start = cur_match;
            best_len = len;
            if (len >= nice_match) break;
            scan_end1 = _win[scan + best_len - 1];
            scan_end = _win[scan + best_len];
        }
    }while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
    if (best_len <= s.lookahead) return best_len;
    return s.lookahead;
};
/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */ const fill_window = (s)=>{
    const _w_size = s.w_size;
    let n, more, str;
    //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");
    do {
        more = s.window_size - s.lookahead - s.strstart;
        // JS ints have 32 bit, block below not needed
        /* Deal with !@#$% 64K limit: */ //if (sizeof(int) <= 2) {
        //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
        //        more = wsize;
        //
        //  } else if (more == (unsigned)(-1)) {
        //        /* Very unlikely, but possible on 16 bit machine if
        //         * strstart == 0 && lookahead == 1 (input done a byte at time)
        //         */
        //        more--;
        //    }
        //}
        /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */ if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
            s.window.set(s.window.subarray(_w_size, _w_size + _w_size - more), 0);
            s.match_start -= _w_size;
            s.strstart -= _w_size;
            /* we now have strstart >= MAX_DIST */ s.block_start -= _w_size;
            if (s.insert > s.strstart) s.insert = s.strstart;
            slide_hash(s);
            more += _w_size;
        }
        if (s.strm.avail_in === 0) break;
        /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */ //Assert(more >= 2, "more < 2");
        n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
        s.lookahead += n;
        /* Initialize the hash value now that we have some input: */ if (s.lookahead + s.insert >= MIN_MATCH) {
            str = s.strstart - s.insert;
            s.ins_h = s.window[str];
            /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */ s.ins_h = HASH(s, s.ins_h, s.window[str + 1]);
            //#if MIN_MATCH != 3
            //        Call update_hash() MIN_MATCH-3 more times
            //#endif
            while(s.insert){
                /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */ s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
                s.prev[str & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = str;
                str++;
                s.insert--;
                if (s.lookahead + s.insert < MIN_MATCH) break;
            }
        }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */ }while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
/* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */ //  if (s.high_water < s.window_size) {
//    const curr = s.strstart + s.lookahead;
//    let init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
};
/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 *
 * In case deflateParams() is used to later switch to a non-zero compression
 * level, s->matches (otherwise unused when storing) keeps track of the number
 * of hash table slides to perform. If s->matches is 1, then one hash table
 * slide will be done when switching. If s->matches is 2, the maximum value
 * allowed here, then the hash table will be cleared, since two or more slides
 * is the same as a clear.
 *
 * deflate_stored() is written to minimize the number of times an input byte is
 * copied. It is most efficient with large input and output buffers, which
 * maximizes the opportunites to have a single copy from next_in to next_out.
 */ const deflate_stored = (s, flush)=>{
    /* Smallest worthy block size when not flushing or finishing. By default
   * this is 32K. This can be as small as 507 bytes for memLevel == 1. For
   * large input and output buffers, the stored block size will be larger.
   */ let min_block = s.pending_buf_size - 5 > s.w_size ? s.w_size : s.pending_buf_size - 5;
    /* Copy as many min_block or larger stored blocks directly to next_out as
   * possible. If flushing, copy the remaining available input to next_out as
   * stored blocks, if there is enough space.
   */ let len, left, have, last = 0;
    let used = s.strm.avail_in;
    do {
        /* Set len to the maximum size block that we can copy directly with the
     * available input data and output space. Set left to how much of that
     * would be copied from what's left in the window.
     */ len = 65535 /* MAX_STORED */ ; /* maximum deflate stored block length */ 
        have = s.bi_valid + 42 >> 3; /* number of header bytes */ 
        if (s.strm.avail_out < have) break;
        /* maximum stored block length that will fit in avail_out: */ have = s.strm.avail_out - have;
        left = s.strstart - s.block_start; /* bytes left in window */ 
        if (len > left + s.strm.avail_in) len = left + s.strm.avail_in; /* limit len to the input */ 
        if (len > have) len = have; /* limit len to the output */ 
        /* If the stored block would be less than min_block in length, or if
     * unable to copy all of the available input when flushing, then try
     * copying to the window and the pending buffer instead. Also don't
     * write an empty block when flushing -- deflate() does that.
     */ if (len < min_block && (len === 0 && flush !== Z_FINISH$3 || flush === Z_NO_FLUSH$2 || len !== left + s.strm.avail_in)) break;
        /* Make a dummy stored block in pending to get the header bytes,
     * including any pending bits. This also updates the debugging counts.
     */ last = flush === Z_FINISH$3 && len === left + s.strm.avail_in ? 1 : 0;
        _tr_stored_block(s, 0, 0, last);
        /* Replace the lengths in the dummy stored block with len. */ s.pending_buf[s.pending - 4] = len;
        s.pending_buf[s.pending - 3] = len >> 8;
        s.pending_buf[s.pending - 2] = ~len;
        s.pending_buf[s.pending - 1] = ~len >> 8;
        /* Write the stored block header bytes. */ flush_pending(s.strm);
        //#ifdef ZLIB_DEBUG
        //    /* Update debugging counts for the data about to be copied. */
        //    s->compressed_len += len << 3;
        //    s->bits_sent += len << 3;
        //#endif
        /* Copy uncompressed bytes from the window to next_out. */ if (left) {
            if (left > len) left = len;
            //zmemcpy(s->strm->next_out, s->window + s->block_start, left);
            s.strm.output.set(s.window.subarray(s.block_start, s.block_start + left), s.strm.next_out);
            s.strm.next_out += left;
            s.strm.avail_out -= left;
            s.strm.total_out += left;
            s.block_start += left;
            len -= left;
        }
        /* Copy uncompressed bytes directly from next_in to next_out, updating
     * the check value.
     */ if (len) {
            read_buf(s.strm, s.strm.output, s.strm.next_out, len);
            s.strm.next_out += len;
            s.strm.avail_out -= len;
            s.strm.total_out += len;
        }
    }while (last === 0);
    /* Update the sliding window with the last s->w_size bytes of the copied
   * data, or append all of the copied data to the existing window if less
   * than s->w_size bytes were copied. Also update the number of bytes to
   * insert in the hash tables, in the event that deflateParams() switches to
   * a non-zero compression level.
   */ used -= s.strm.avail_in; /* number of input bytes directly copied */ 
    if (used) {
        /* If any input was used, then no unused input remains in the window,
     * therefore s->block_start == s->strstart.
     */ if (used >= s.w_size) {
            s.matches = 2; /* clear hash */ 
            //zmemcpy(s->window, s->strm->next_in - s->w_size, s->w_size);
            s.window.set(s.strm.input.subarray(s.strm.next_in - s.w_size, s.strm.next_in), 0);
            s.strstart = s.w_size;
            s.insert = s.strstart;
        } else {
            if (s.window_size - s.strstart <= used) {
                /* Slide the window down. */ s.strstart -= s.w_size;
                //zmemcpy(s->window, s->window + s->w_size, s->strstart);
                s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
                if (s.matches < 2) s.matches++; /* add a pending slide_hash() */ 
                if (s.insert > s.strstart) s.insert = s.strstart;
            }
            //zmemcpy(s->window + s->strstart, s->strm->next_in - used, used);
            s.window.set(s.strm.input.subarray(s.strm.next_in - used, s.strm.next_in), s.strstart);
            s.strstart += used;
            s.insert += used > s.w_size - s.insert ? s.w_size - s.insert : used;
        }
        s.block_start = s.strstart;
    }
    if (s.high_water < s.strstart) s.high_water = s.strstart;
    /* If the last block was written to next_out, then done. */ if (last) return BS_FINISH_DONE;
    /* If flushing and all input has been consumed, then done. */ if (flush !== Z_NO_FLUSH$2 && flush !== Z_FINISH$3 && s.strm.avail_in === 0 && s.strstart === s.block_start) return BS_BLOCK_DONE;
    /* Fill the window with any remaining input. */ have = s.window_size - s.strstart;
    if (s.strm.avail_in > have && s.block_start >= s.w_size) {
        /* Slide the window down. */ s.block_start -= s.w_size;
        s.strstart -= s.w_size;
        //zmemcpy(s->window, s->window + s->w_size, s->strstart);
        s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
        if (s.matches < 2) s.matches++; /* add a pending slide_hash() */ 
        have += s.w_size; /* more space now */ 
        if (s.insert > s.strstart) s.insert = s.strstart;
    }
    if (have > s.strm.avail_in) have = s.strm.avail_in;
    if (have) {
        read_buf(s.strm, s.window, s.strstart, have);
        s.strstart += have;
        s.insert += have > s.w_size - s.insert ? s.w_size - s.insert : have;
    }
    if (s.high_water < s.strstart) s.high_water = s.strstart;
    /* There was not enough avail_out to write a complete worthy or flushed
   * stored block to next_out. Write a stored block to pending instead, if we
   * have enough input for a worthy block, or if flushing and there is enough
   * room for the remaining input as a stored block in the pending buffer.
   */ have = s.bi_valid + 42 >> 3; /* number of header bytes */ 
    /* maximum stored block length that will fit in pending: */ have = s.pending_buf_size - have > 65535 /* MAX_STORED */  ? 65535 /* MAX_STORED */  : s.pending_buf_size - have;
    min_block = have > s.w_size ? s.w_size : have;
    left = s.strstart - s.block_start;
    if (left >= min_block || (left || flush === Z_FINISH$3) && flush !== Z_NO_FLUSH$2 && s.strm.avail_in === 0 && left <= have) {
        len = left > have ? have : left;
        last = flush === Z_FINISH$3 && s.strm.avail_in === 0 && len === left ? 1 : 0;
        _tr_stored_block(s, s.block_start, len, last);
        s.block_start += len;
        flush_pending(s.strm);
    }
    /* We've done all we can with the available input and output. */ return last ? BS_FINISH_STARTED : BS_NEED_MORE;
};
/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */ const deflate_fast = (s, flush)=>{
    let hash_head; /* head of the hash chain */ 
    let bflush; /* set if current block must be flushed */ 
    for(;;){
        /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */ if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);
            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
            if (s.lookahead === 0) break; /* flush the current block */ 
        }
        /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */ hash_head = 0 /*NIL*/ ;
        if (s.lookahead >= MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
        /***/ }
        /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */ if (hash_head !== 0 /*NIL*/  && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */ s.match_length = longest_match(s, hash_head);
        if (s.match_length >= MIN_MATCH) {
            // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only
            /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/ bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
            s.lookahead -= s.match_length;
            /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */ if (s.match_length <= s.max_lazy_match /*max_insert_length*/  && s.lookahead >= MIN_MATCH) {
                s.match_length--; /* string at strstart already in table */ 
                do {
                    s.strstart++;
                    /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
                    hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                    s.head[s.ins_h] = s.strstart;
                /***/ /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */ }while (--s.match_length !== 0);
                s.strstart++;
            } else {
                s.strstart += s.match_length;
                s.match_length = 0;
                s.ins_h = s.window[s.strstart];
                /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */ s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]);
            //#if MIN_MATCH != 3
            //                Call UPDATE_HASH() MIN_MATCH-3 more times
            //#endif
            /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */ }
        } else {
            /* No match, output a literal byte */ //Tracevv((stderr,"%c", s.window[s.strstart]));
            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/ bflush = _tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
        }
        if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        /***/ }
    }
    s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH$3) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.sym_next) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
};
/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */ const deflate_slow = (s, flush)=>{
    let hash_head; /* head of hash chain */ 
    let bflush; /* set if current block must be flushed */ 
    let max_insert;
    /* Process the input block. */ for(;;){
        /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */ if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);
            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
            if (s.lookahead === 0) break;
             /* flush the current block */ 
        }
        /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */ hash_head = 0 /*NIL*/ ;
        if (s.lookahead >= MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
        /***/ }
        /* Find the longest match, discarding those <= prev_length.
     */ s.prev_length = s.match_length;
        s.prev_match = s.match_start;
        s.match_length = MIN_MATCH - 1;
        if (hash_head !== 0 /*NIL*/  && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
            /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */ s.match_length = longest_match(s, hash_head);
            /* longest_match() sets match_start */ if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096 /*TOO_FAR*/ )) /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */ s.match_length = MIN_MATCH - 1;
        }
        /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */ if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
            max_insert = s.strstart + s.lookahead - MIN_MATCH;
            /* Do not insert strings in hash table beyond this. */ //check_match(s, s.strstart-1, s.prev_match, s.prev_length);
            /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/ bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
            /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */ s.lookahead -= s.prev_length - 1;
            s.prev_length -= 2;
            do if (++s.strstart <= max_insert) {
                /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
                hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = s.strstart;
            /***/ }
            while (--s.prev_length !== 0);
            s.match_available = 0;
            s.match_length = MIN_MATCH - 1;
            s.strstart++;
            if (bflush) {
                /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
                if (s.strm.avail_out === 0) return BS_NEED_MORE;
            /***/ }
        } else if (s.match_available) {
            /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */ //Tracevv((stderr,"%c", s->window[s->strstart-1]));
            /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/ bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
            if (bflush) /*** FLUSH_BLOCK_ONLY(s, 0) ***/ flush_block_only(s, false);
            s.strstart++;
            s.lookahead--;
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        } else {
            /* There is no previous match to compare with, wait for
       * the next step to decide.
       */ s.match_available = 1;
            s.strstart++;
            s.lookahead--;
        }
    }
    //Assert (flush != Z_NO_FLUSH, "no flush?");
    if (s.match_available) {
        //Tracevv((stderr,"%c", s->window[s->strstart-1]));
        /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/ bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
        s.match_available = 0;
    }
    s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH$3) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.sym_next) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
};
/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */ const deflate_rle = (s, flush)=>{
    let bflush; /* set if current block must be flushed */ 
    let prev; /* byte at distance one to match */ 
    let scan, strend; /* scan goes up to strend for length of run */ 
    const _win = s.window;
    for(;;){
        /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */ if (s.lookahead <= MAX_MATCH) {
            fill_window(s);
            if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
            if (s.lookahead === 0) break;
             /* flush the current block */ 
        }
        /* See how many times the previous byte repeats */ s.match_length = 0;
        if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
            scan = s.strstart - 1;
            prev = _win[scan];
            if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
                strend = s.strstart + MAX_MATCH;
                do ;
                while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
                s.match_length = MAX_MATCH - (strend - scan);
                if (s.match_length > s.lookahead) s.match_length = s.lookahead;
            }
        //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
        }
        /* Emit match if have run of MIN_MATCH or longer, else emit literal */ if (s.match_length >= MIN_MATCH) {
            //check_match(s, s.strstart, s.strstart - 1, s.match_length);
            /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/ bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH);
            s.lookahead -= s.match_length;
            s.strstart += s.match_length;
            s.match_length = 0;
        } else {
            /* No match, output a literal byte */ //Tracevv((stderr,"%c", s->window[s->strstart]));
            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/ bflush = _tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
        }
        if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        /***/ }
    }
    s.insert = 0;
    if (flush === Z_FINISH$3) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.sym_next) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
};
/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */ const deflate_huff = (s, flush)=>{
    let bflush; /* set if current block must be flushed */ 
    for(;;){
        /* Make sure that we have a literal to write. */ if (s.lookahead === 0) {
            fill_window(s);
            if (s.lookahead === 0) {
                if (flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
                break; /* flush the current block */ 
            }
        }
        /* Output a literal byte */ s.match_length = 0;
        //Tracevv((stderr,"%c", s->window[s->strstart]));
        /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/ bflush = _tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
        if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        /***/ }
    }
    s.insert = 0;
    if (flush === Z_FINISH$3) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.sym_next) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
};
/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */ function Config(good_length, max_lazy, nice_length, max_chain, func) {
    this.good_length = good_length;
    this.max_lazy = max_lazy;
    this.nice_length = nice_length;
    this.max_chain = max_chain;
    this.func = func;
}
const configuration_table = [
    /*      good lazy nice chain */ new Config(0, 0, 0, 0, deflate_stored),
    /* 0 store only */ new Config(4, 4, 8, 4, deflate_fast),
    /* 1 max speed, no lazy matches */ new Config(4, 5, 16, 8, deflate_fast),
    /* 2 */ new Config(4, 6, 32, 32, deflate_fast),
    /* 3 */ new Config(4, 4, 16, 16, deflate_slow),
    /* 4 lazy matches */ new Config(8, 16, 32, 32, deflate_slow),
    /* 5 */ new Config(8, 16, 128, 128, deflate_slow),
    /* 6 */ new Config(8, 32, 128, 256, deflate_slow),
    /* 7 */ new Config(32, 128, 258, 1024, deflate_slow),
    /* 8 */ new Config(32, 258, 258, 4096, deflate_slow)
];
/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */ const lm_init = (s)=>{
    s.window_size = 2 * s.w_size;
    /*** CLEAR_HASH(s); ***/ zero(s.head); // Fill with NIL (= 0);
    /* Set the default configuration parameters:
   */ s.max_lazy_match = configuration_table[s.level].max_lazy;
    s.good_match = configuration_table[s.level].good_length;
    s.nice_match = configuration_table[s.level].nice_length;
    s.max_chain_length = configuration_table[s.level].max_chain;
    s.strstart = 0;
    s.block_start = 0;
    s.lookahead = 0;
    s.insert = 0;
    s.match_length = s.prev_length = MIN_MATCH - 1;
    s.match_available = 0;
    s.ins_h = 0;
};
function DeflateState() {
    this.strm = null; /* pointer back to this zlib stream */ 
    this.status = 0; /* as the name implies */ 
    this.pending_buf = null; /* output still pending */ 
    this.pending_buf_size = 0; /* size of pending_buf */ 
    this.pending_out = 0; /* next pending byte to output to the stream */ 
    this.pending = 0; /* nb of bytes in the pending buffer */ 
    this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip */ 
    this.gzhead = null; /* gzip header information to write */ 
    this.gzindex = 0; /* where in extra, name, or comment */ 
    this.method = Z_DEFLATED$2; /* can only be DEFLATED */ 
    this.last_flush = -1; /* value of flush param for previous deflate call */ 
    this.w_size = 0; /* LZ77 window size (32K by default) */ 
    this.w_bits = 0; /* log2(w_size)  (8..16) */ 
    this.w_mask = 0; /* w_size - 1 */ 
    this.window = null;
    /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */ this.window_size = 0;
    /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */ this.prev = null;
    /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */ this.head = null; /* Heads of the hash chains or NIL. */ 
    this.ins_h = 0; /* hash index of string to be inserted */ 
    this.hash_size = 0; /* number of elements in hash table */ 
    this.hash_bits = 0; /* log2(hash_size) */ 
    this.hash_mask = 0; /* hash_size-1 */ 
    this.hash_shift = 0;
    /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */ this.block_start = 0;
    /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */ this.match_length = 0; /* length of best match */ 
    this.prev_match = 0; /* previous match */ 
    this.match_available = 0; /* set if previous match exists */ 
    this.strstart = 0; /* start of string to insert */ 
    this.match_start = 0; /* start of matching string */ 
    this.lookahead = 0; /* number of valid bytes ahead in window */ 
    this.prev_length = 0;
    /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */ this.max_chain_length = 0;
    /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */ this.max_lazy_match = 0;
    /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */ // That's alias to max_lazy_match, don't use directly
    //this.max_insert_length = 0;
    /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */ this.level = 0; /* compression level (1..9) */ 
    this.strategy = 0; /* favor or force Huffman coding*/ 
    this.good_match = 0;
    /* Use a faster search when the previous match is longer than this */ this.nice_match = 0; /* Stop searching when current match exceeds this */ 
    /* used by trees.c: */ /* Didn't use ct_data typedef below to suppress compiler warning */ // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
    // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
    // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */
    // Use flat array of DOUBLE size, with interleaved fata,
    // because JS does not support effective
    this.dyn_ltree = new Uint16Array(HEAP_SIZE * 2);
    this.dyn_dtree = new Uint16Array((2 * D_CODES + 1) * 2);
    this.bl_tree = new Uint16Array((2 * BL_CODES + 1) * 2);
    zero(this.dyn_ltree);
    zero(this.dyn_dtree);
    zero(this.bl_tree);
    this.l_desc = null; /* desc. for literal tree */ 
    this.d_desc = null; /* desc. for distance tree */ 
    this.bl_desc = null; /* desc. for bit length tree */ 
    //ush bl_count[MAX_BITS+1];
    this.bl_count = new Uint16Array(MAX_BITS + 1);
    /* number of codes at each bit length for an optimal tree */ //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
    this.heap = new Uint16Array(2 * L_CODES + 1); /* heap used to build the Huffman trees */ 
    zero(this.heap);
    this.heap_len = 0; /* number of elements in the heap */ 
    this.heap_max = 0; /* element of largest frequency */ 
    /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */ this.depth = new Uint16Array(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
    zero(this.depth);
    /* Depth of each subtree used as tie breaker for trees of equal frequency
   */ this.sym_buf = 0; /* buffer for distances and literals/lengths */ 
    this.lit_bufsize = 0;
    /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */ this.sym_next = 0; /* running index in sym_buf */ 
    this.sym_end = 0; /* symbol table full when sym_next reaches this */ 
    this.opt_len = 0; /* bit length of current block with optimal trees */ 
    this.static_len = 0; /* bit length of current block with static trees */ 
    this.matches = 0; /* number of string matches in current block */ 
    this.insert = 0; /* bytes at end of window left to insert */ 
    this.bi_buf = 0;
    /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */ this.bi_valid = 0;
/* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */ // Used for window memory init. We safely ignore it for JS. That makes
// sense only for pointers and memory check tools.
//this.high_water = 0;
/* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */ }
/* =========================================================================
 * Check for a valid deflate stream state. Return 0 if ok, 1 if not.
 */ const deflateStateCheck = (strm)=>{
    if (!strm) return 1;
    const s = strm.state;
    if (!s || s.strm !== strm || s.status !== INIT_STATE && //#ifdef GZIP
    s.status !== GZIP_STATE && //#endif
    s.status !== EXTRA_STATE && s.status !== NAME_STATE && s.status !== COMMENT_STATE && s.status !== HCRC_STATE && s.status !== BUSY_STATE && s.status !== FINISH_STATE) return 1;
    return 0;
};
const deflateResetKeep = (strm)=>{
    if (deflateStateCheck(strm)) return err(strm, Z_STREAM_ERROR$2);
    strm.total_in = strm.total_out = 0;
    strm.data_type = Z_UNKNOWN;
    const s = strm.state;
    s.pending = 0;
    s.pending_out = 0;
    if (s.wrap < 0) s.wrap = -s.wrap;
    s.status = //#ifdef GZIP
    s.wrap === 2 ? GZIP_STATE : //#endif
    s.wrap ? INIT_STATE : BUSY_STATE;
    strm.adler = s.wrap === 2 ? 0 // crc32(0, Z_NULL, 0)
     : 1; // adler32(0, Z_NULL, 0)
    s.last_flush = -2;
    _tr_init(s);
    return Z_OK$3;
};
const deflateReset = (strm)=>{
    const ret = deflateResetKeep(strm);
    if (ret === Z_OK$3) lm_init(strm.state);
    return ret;
};
const deflateSetHeader = (strm, head)=>{
    if (deflateStateCheck(strm) || strm.state.wrap !== 2) return Z_STREAM_ERROR$2;
    strm.state.gzhead = head;
    return Z_OK$3;
};
const deflateInit2 = (strm, level, method, windowBits, memLevel, strategy)=>{
    if (!strm) return Z_STREAM_ERROR$2;
    let wrap = 1;
    if (level === Z_DEFAULT_COMPRESSION$1) level = 6;
    if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
    } else if (windowBits > 15) {
        wrap = 2; /* write gzip wrapper instead */ 
        windowBits -= 16;
    }
    if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED$2 || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED || windowBits === 8 && wrap !== 1) return err(strm, Z_STREAM_ERROR$2);
    if (windowBits === 8) windowBits = 9;
    /* until 256-byte window bug fixed */ const s = new DeflateState();
    strm.state = s;
    s.strm = strm;
    s.status = INIT_STATE; /* to pass state test in deflateReset() */ 
    s.wrap = wrap;
    s.gzhead = null;
    s.w_bits = windowBits;
    s.w_size = 1 << s.w_bits;
    s.w_mask = s.w_size - 1;
    s.hash_bits = memLevel + 7;
    s.hash_size = 1 << s.hash_bits;
    s.hash_mask = s.hash_size - 1;
    s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
    s.window = new Uint8Array(s.w_size * 2);
    s.head = new Uint16Array(s.hash_size);
    s.prev = new Uint16Array(s.w_size);
    // Don't need mem init magic for JS.
    //s.high_water = 0;  /* nothing written to s->window yet */
    s.lit_bufsize = 1 << memLevel + 6; /* 16K elements by default */ 
    /* We overlay pending_buf and sym_buf. This works since the average size
   * for length/distance pairs over any compressed block is assured to be 31
   * bits or less.
   *
   * Analysis: The longest fixed codes are a length code of 8 bits plus 5
   * extra bits, for lengths 131 to 257. The longest fixed distance codes are
   * 5 bits plus 13 extra bits, for distances 16385 to 32768. The longest
   * possible fixed-codes length/distance pair is then 31 bits total.
   *
   * sym_buf starts one-fourth of the way into pending_buf. So there are
   * three bytes in sym_buf for every four bytes in pending_buf. Each symbol
   * in sym_buf is three bytes -- two for the distance and one for the
   * literal/length. As each symbol is consumed, the pointer to the next
   * sym_buf value to read moves forward three bytes. From that symbol, up to
   * 31 bits are written to pending_buf. The closest the written pending_buf
   * bits gets to the next sym_buf symbol to read is just before the last
   * code is written. At that time, 31*(n-2) bits have been written, just
   * after 24*(n-2) bits have been consumed from sym_buf. sym_buf starts at
   * 8*n bits into pending_buf. (Note that the symbol buffer fills when n-1
   * symbols are written.) The closest the writing gets to what is unread is
   * then n+14 bits. Here n is lit_bufsize, which is 16384 by default, and
   * can range from 128 to 32768.
   *
   * Therefore, at a minimum, there are 142 bits of space between what is
   * written and what is read in the overlain buffers, so the symbols cannot
   * be overwritten by the compressed data. That space is actually 139 bits,
   * due to the three-bit fixed-code block header.
   *
   * That covers the case where either Z_FIXED is specified, forcing fixed
   * codes, or when the use of fixed codes is chosen, because that choice
   * results in a smaller compressed block than dynamic codes. That latter
   * condition then assures that the above analysis also covers all dynamic
   * blocks. A dynamic-code block will only be chosen to be emitted if it has
   * fewer bits than a fixed-code block would for the same set of symbols.
   * Therefore its average symbol length is assured to be less than 31. So
   * the compressed data for a dynamic block also cannot overwrite the
   * symbols from which it is being constructed.
   */ s.pending_buf_size = s.lit_bufsize * 4;
    s.pending_buf = new Uint8Array(s.pending_buf_size);
    // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
    //s->sym_buf = s->pending_buf + s->lit_bufsize;
    s.sym_buf = s.lit_bufsize;
    //s->sym_end = (s->lit_bufsize - 1) * 3;
    s.sym_end = (s.lit_bufsize - 1) * 3;
    /* We avoid equality with lit_bufsize*3 because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */ s.level = level;
    s.strategy = strategy;
    s.method = method;
    return deflateReset(strm);
};
const deflateInit = (strm, level)=>{
    return deflateInit2(strm, level, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1);
};
/* ========================================================================= */ const deflate$2 = (strm, flush)=>{
    if (deflateStateCheck(strm) || flush > Z_BLOCK$1 || flush < 0) return strm ? err(strm, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
    const s = strm.state;
    if (!strm.output || strm.avail_in !== 0 && !strm.input || s.status === FINISH_STATE && flush !== Z_FINISH$3) return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR$1 : Z_STREAM_ERROR$2);
    const old_flush = s.last_flush;
    s.last_flush = flush;
    /* Flush as much pending output as possible */ if (s.pending !== 0) {
        flush_pending(strm);
        if (strm.avail_out === 0) {
            /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */ s.last_flush = -1;
            return Z_OK$3;
        }
    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */ } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH$3) return err(strm, Z_BUF_ERROR$1);
    /* User must not provide more input after the first FINISH: */ if (s.status === FINISH_STATE && strm.avail_in !== 0) return err(strm, Z_BUF_ERROR$1);
    /* Write the header */ if (s.status === INIT_STATE && s.wrap === 0) s.status = BUSY_STATE;
    if (s.status === INIT_STATE) {
        /* zlib header */ let header = Z_DEFLATED$2 + (s.w_bits - 8 << 4) << 8;
        let level_flags = -1;
        if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) level_flags = 0;
        else if (s.level < 6) level_flags = 1;
        else if (s.level === 6) level_flags = 2;
        else level_flags = 3;
        header |= level_flags << 6;
        if (s.strstart !== 0) header |= PRESET_DICT;
        header += 31 - header % 31;
        putShortMSB(s, header);
        /* Save the adler32 of the preset dictionary: */ if (s.strstart !== 0) {
            putShortMSB(s, strm.adler >>> 16);
            putShortMSB(s, strm.adler & 0xffff);
        }
        strm.adler = 1; // adler32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
        /* Compression must start with an empty pending buffer */ flush_pending(strm);
        if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
        }
    }
    //#ifdef GZIP
    if (s.status === GZIP_STATE) {
        /* gzip header */ strm.adler = 0; //crc32(0L, Z_NULL, 0);
        put_byte(s, 31);
        put_byte(s, 139);
        put_byte(s, 8);
        if (!s.gzhead) {
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
            put_byte(s, OS_CODE);
            s.status = BUSY_STATE;
            /* Compression must start with an empty pending buffer */ flush_pending(strm);
            if (s.pending !== 0) {
                s.last_flush = -1;
                return Z_OK$3;
            }
        } else {
            put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
            put_byte(s, s.gzhead.time & 0xff);
            put_byte(s, s.gzhead.time >> 8 & 0xff);
            put_byte(s, s.gzhead.time >> 16 & 0xff);
            put_byte(s, s.gzhead.time >> 24 & 0xff);
            put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
            put_byte(s, s.gzhead.os & 0xff);
            if (s.gzhead.extra && s.gzhead.extra.length) {
                put_byte(s, s.gzhead.extra.length & 0xff);
                put_byte(s, s.gzhead.extra.length >> 8 & 0xff);
            }
            if (s.gzhead.hcrc) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0);
            s.gzindex = 0;
            s.status = EXTRA_STATE;
        }
    }
    if (s.status === EXTRA_STATE) {
        if (s.gzhead.extra /* != Z_NULL*/ ) {
            let beg = s.pending; /* start of bytes to update crc */ 
            let left = (s.gzhead.extra.length & 0xffff) - s.gzindex;
            while(s.pending + left > s.pending_buf_size){
                let copy = s.pending_buf_size - s.pending;
                // zmemcpy(s.pending_buf + s.pending,
                //    s.gzhead.extra + s.gzindex, copy);
                s.pending_buf.set(s.gzhead.extra.subarray(s.gzindex, s.gzindex + copy), s.pending);
                s.pending = s.pending_buf_size;
                //--- HCRC_UPDATE(beg) ---//
                if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
                //---//
                s.gzindex += copy;
                flush_pending(strm);
                if (s.pending !== 0) {
                    s.last_flush = -1;
                    return Z_OK$3;
                }
                beg = 0;
                left -= copy;
            }
            // JS specific: s.gzhead.extra may be TypedArray or Array for backward compatibility
            //              TypedArray.slice and TypedArray.from don't exist in IE10-IE11
            let gzhead_extra = new Uint8Array(s.gzhead.extra);
            // zmemcpy(s->pending_buf + s->pending,
            //     s->gzhead->extra + s->gzindex, left);
            s.pending_buf.set(gzhead_extra.subarray(s.gzindex, s.gzindex + left), s.pending);
            s.pending += left;
            //--- HCRC_UPDATE(beg) ---//
            if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
            //---//
            s.gzindex = 0;
        }
        s.status = NAME_STATE;
    }
    if (s.status === NAME_STATE) {
        if (s.gzhead.name /* != Z_NULL*/ ) {
            let beg = s.pending; /* start of bytes to update crc */ 
            let val;
            do {
                if (s.pending === s.pending_buf_size) {
                    //--- HCRC_UPDATE(beg) ---//
                    if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
                    //---//
                    flush_pending(strm);
                    if (s.pending !== 0) {
                        s.last_flush = -1;
                        return Z_OK$3;
                    }
                    beg = 0;
                }
                // JS specific: little magic to add zero terminator to end of string
                if (s.gzindex < s.gzhead.name.length) val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
                else val = 0;
                put_byte(s, val);
            }while (val !== 0);
            //--- HCRC_UPDATE(beg) ---//
            if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
            //---//
            s.gzindex = 0;
        }
        s.status = COMMENT_STATE;
    }
    if (s.status === COMMENT_STATE) {
        if (s.gzhead.comment /* != Z_NULL*/ ) {
            let beg = s.pending; /* start of bytes to update crc */ 
            let val;
            do {
                if (s.pending === s.pending_buf_size) {
                    //--- HCRC_UPDATE(beg) ---//
                    if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
                    //---//
                    flush_pending(strm);
                    if (s.pending !== 0) {
                        s.last_flush = -1;
                        return Z_OK$3;
                    }
                    beg = 0;
                }
                // JS specific: little magic to add zero terminator to end of string
                if (s.gzindex < s.gzhead.comment.length) val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
                else val = 0;
                put_byte(s, val);
            }while (val !== 0);
            //--- HCRC_UPDATE(beg) ---//
            if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
        //---//
        }
        s.status = HCRC_STATE;
    }
    if (s.status === HCRC_STATE) {
        if (s.gzhead.hcrc) {
            if (s.pending + 2 > s.pending_buf_size) {
                flush_pending(strm);
                if (s.pending !== 0) {
                    s.last_flush = -1;
                    return Z_OK$3;
                }
            }
            put_byte(s, strm.adler & 0xff);
            put_byte(s, strm.adler >> 8 & 0xff);
            strm.adler = 0; //crc32(0L, Z_NULL, 0);
        }
        s.status = BUSY_STATE;
        /* Compression must start with an empty pending buffer */ flush_pending(strm);
        if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
        }
    }
    //#endif
    /* Start a new block or continue the current one.
   */ if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH$2 && s.status !== FINISH_STATE) {
        let bstate = s.level === 0 ? deflate_stored(s, flush) : s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
        if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) s.status = FINISH_STATE;
        if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
            if (strm.avail_out === 0) s.last_flush = -1;
            return Z_OK$3;
        /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */ }
        if (bstate === BS_BLOCK_DONE) {
            if (flush === Z_PARTIAL_FLUSH) _tr_align(s);
            else if (flush !== Z_BLOCK$1) {
                _tr_stored_block(s, 0, 0, false);
                /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */ if (flush === Z_FULL_FLUSH$1) {
                    /*** CLEAR_HASH(s); ***/ /* forget history */ zero(s.head); // Fill with NIL (= 0);
                    if (s.lookahead === 0) {
                        s.strstart = 0;
                        s.block_start = 0;
                        s.insert = 0;
                    }
                }
            }
            flush_pending(strm);
            if (strm.avail_out === 0) {
                s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */ 
                return Z_OK$3;
            }
        }
    }
    if (flush !== Z_FINISH$3) return Z_OK$3;
    if (s.wrap <= 0) return Z_STREAM_END$3;
    /* Write the trailer */ if (s.wrap === 2) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, strm.adler >> 8 & 0xff);
        put_byte(s, strm.adler >> 16 & 0xff);
        put_byte(s, strm.adler >> 24 & 0xff);
        put_byte(s, strm.total_in & 0xff);
        put_byte(s, strm.total_in >> 8 & 0xff);
        put_byte(s, strm.total_in >> 16 & 0xff);
        put_byte(s, strm.total_in >> 24 & 0xff);
    } else {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
    }
    flush_pending(strm);
    /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */ if (s.wrap > 0) s.wrap = -s.wrap;
    /* write the trailer only once! */ return s.pending !== 0 ? Z_OK$3 : Z_STREAM_END$3;
};
const deflateEnd = (strm)=>{
    if (deflateStateCheck(strm)) return Z_STREAM_ERROR$2;
    const status = strm.state.status;
    strm.state = null;
    return status === BUSY_STATE ? err(strm, Z_DATA_ERROR$2) : Z_OK$3;
};
/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */ const deflateSetDictionary = (strm, dictionary)=>{
    let dictLength = dictionary.length;
    if (deflateStateCheck(strm)) return Z_STREAM_ERROR$2;
    const s = strm.state;
    const wrap = s.wrap;
    if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) return Z_STREAM_ERROR$2;
    /* when using zlib wrappers, compute Adler-32 for provided dictionary */ if (wrap === 1) /* adler32(strm->adler, dictionary, dictLength); */ strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
    s.wrap = 0; /* avoid computing Adler-32 in read_buf */ 
    /* if dictionary would fill window, just replace the history */ if (dictLength >= s.w_size) {
        if (wrap === 0) {
            /*** CLEAR_HASH(s); ***/ zero(s.head); // Fill with NIL (= 0);
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
        }
        /* use the tail */ // dictionary = dictionary.slice(dictLength - s.w_size);
        let tmpDict = new Uint8Array(s.w_size);
        tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
        dictionary = tmpDict;
        dictLength = s.w_size;
    }
    /* insert dictionary into window and hash */ const avail = strm.avail_in;
    const next = strm.next_in;
    const input = strm.input;
    strm.avail_in = dictLength;
    strm.next_in = 0;
    strm.input = dictionary;
    fill_window(s);
    while(s.lookahead >= MIN_MATCH){
        let str = s.strstart;
        let n = s.lookahead - (MIN_MATCH - 1);
        do {
            /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */ s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
            s.prev[str & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = str;
            str++;
        }while (--n);
        s.strstart = str;
        s.lookahead = MIN_MATCH - 1;
        fill_window(s);
    }
    s.strstart += s.lookahead;
    s.block_start = s.strstart;
    s.insert = s.lookahead;
    s.lookahead = 0;
    s.match_length = s.prev_length = MIN_MATCH - 1;
    s.match_available = 0;
    strm.next_in = next;
    strm.input = input;
    strm.avail_in = avail;
    s.wrap = wrap;
    return Z_OK$3;
};
var deflateInit_1 = deflateInit;
var deflateInit2_1 = deflateInit2;
var deflateReset_1 = deflateReset;
var deflateResetKeep_1 = deflateResetKeep;
var deflateSetHeader_1 = deflateSetHeader;
var deflate_2$1 = deflate$2;
var deflateEnd_1 = deflateEnd;
var deflateSetDictionary_1 = deflateSetDictionary;
var deflateInfo = "pako deflate (from Nodeca project)";
/* Not implemented
module.exports.deflateBound = deflateBound;
module.exports.deflateCopy = deflateCopy;
module.exports.deflateGetDictionary = deflateGetDictionary;
module.exports.deflateParams = deflateParams;
module.exports.deflatePending = deflatePending;
module.exports.deflatePrime = deflatePrime;
module.exports.deflateTune = deflateTune;
*/ var deflate_1$2 = {
    deflateInit: deflateInit_1,
    deflateInit2: deflateInit2_1,
    deflateReset: deflateReset_1,
    deflateResetKeep: deflateResetKeep_1,
    deflateSetHeader: deflateSetHeader_1,
    deflate: deflate_2$1,
    deflateEnd: deflateEnd_1,
    deflateSetDictionary: deflateSetDictionary_1,
    deflateInfo: deflateInfo
};
const _has = (obj, key)=>{
    return Object.prototype.hasOwnProperty.call(obj, key);
};
var assign = function(obj /*from1, from2, from3, ...*/ ) {
    const sources = Array.prototype.slice.call(arguments, 1);
    while(sources.length){
        const source = sources.shift();
        if (!source) continue;
        if (typeof source !== "object") throw new TypeError(source + "must be non-object");
        for(const p in source)if (_has(source, p)) obj[p] = source[p];
    }
    return obj;
};
// Join array of chunks to single array.
var flattenChunks = (chunks)=>{
    // calculate data length
    let len = 0;
    for(let i = 0, l = chunks.length; i < l; i++)len += chunks[i].length;
    // join chunks
    const result = new Uint8Array(len);
    for(let i = 0, pos = 0, l = chunks.length; i < l; i++){
        let chunk = chunks[i];
        result.set(chunk, pos);
        pos += chunk.length;
    }
    return result;
};
var common = {
    assign: assign,
    flattenChunks: flattenChunks
};
// String encode/decode helpers
// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
let STR_APPLY_UIA_OK = true;
try {
    String.fromCharCode.apply(null, new Uint8Array(1));
} catch (__) {
    STR_APPLY_UIA_OK = false;
}
// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
const _utf8len = new Uint8Array(256);
for(let q = 0; q < 256; q++)_utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start
// convert string to array (typed, when possible)
var string2buf = (str)=>{
    if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) return new TextEncoder().encode(str);
    let buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
    // count binary size
    for(m_pos = 0; m_pos < str_len; m_pos++){
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
    }
    // allocate buffer
    buf = new Uint8Array(buf_len);
    // convert
    for(i = 0, m_pos = 0; i < buf_len; m_pos++){
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        if (c < 0x80) /* one byte */ buf[i++] = c;
        else if (c < 0x800) {
            /* two bytes */ buf[i++] = 0xC0 | c >>> 6;
            buf[i++] = 0x80 | c & 0x3f;
        } else if (c < 0x10000) {
            /* three bytes */ buf[i++] = 0xE0 | c >>> 12;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
        } else {
            /* four bytes */ buf[i++] = 0xf0 | c >>> 18;
            buf[i++] = 0x80 | c >>> 12 & 0x3f;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
        }
    }
    return buf;
};
// Helper
const buf2binstring = (buf, len)=>{
    // On Chrome, the arguments in a function call that are allowed is `65534`.
    // If the length of the buffer is smaller than that, we can use this optimization,
    // otherwise we will take a slower path.
    if (len < 65534) {
        if (buf.subarray && STR_APPLY_UIA_OK) return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
    }
    let result = "";
    for(let i = 0; i < len; i++)result += String.fromCharCode(buf[i]);
    return result;
};
// convert array to string
var buf2string = (buf, max)=>{
    const len = max || buf.length;
    if (typeof TextDecoder === "function" && TextDecoder.prototype.decode) return new TextDecoder().decode(buf.subarray(0, max));
    let i, out;
    // Reserve max possible length (2 words per char)
    // NB: by unknown reasons, Array is significantly faster for
    //     String.fromCharCode.apply than Uint16Array.
    const utf16buf = new Array(len * 2);
    for(out = 0, i = 0; i < len;){
        let c = buf[i++];
        // quick process ascii
        if (c < 0x80) {
            utf16buf[out++] = c;
            continue;
        }
        let c_len = _utf8len[c];
        // skip 5 & 6 byte codes
        if (c_len > 4) {
            utf16buf[out++] = 0xfffd;
            i += c_len - 1;
            continue;
        }
        // apply mask on first byte
        c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
        // join the rest
        while(c_len > 1 && i < len){
            c = c << 6 | buf[i++] & 0x3f;
            c_len--;
        }
        // terminated by end of string?
        if (c_len > 1) {
            utf16buf[out++] = 0xfffd;
            continue;
        }
        if (c < 0x10000) utf16buf[out++] = c;
        else {
            c -= 0x10000;
            utf16buf[out++] = 0xd800 | c >> 10 & 0x3ff;
            utf16buf[out++] = 0xdc00 | c & 0x3ff;
        }
    }
    return buf2binstring(utf16buf, out);
};
// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
var utf8border = (buf, max)=>{
    max = max || buf.length;
    if (max > buf.length) max = buf.length;
    // go back from last position, until start of sequence found
    let pos = max - 1;
    while(pos >= 0 && (buf[pos] & 0xC0) === 0x80)pos--;
    // Very small and broken sequence,
    // return max, because we should return something anyway.
    if (pos < 0) return max;
    // If we came to start of buffer - that means buffer is too small,
    // return max too.
    if (pos === 0) return max;
    return pos + _utf8len[buf[pos]] > max ? pos : max;
};
var strings = {
    string2buf: string2buf,
    buf2string: buf2string,
    utf8border: utf8border
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function ZStream() {
    /* next input byte */ this.input = null; // JS specific, because we have no pointers
    this.next_in = 0;
    /* number of bytes available at input */ this.avail_in = 0;
    /* total number of input bytes read so far */ this.total_in = 0;
    /* next output byte should be put there */ this.output = null; // JS specific, because we have no pointers
    this.next_out = 0;
    /* remaining free space at output */ this.avail_out = 0;
    /* total number of bytes output so far */ this.total_out = 0;
    /* last error message, NULL if no error */ this.msg = "" /*Z_NULL*/ ;
    /* not visible by applications */ this.state = null;
    /* best guess about the data type: binary or text */ this.data_type = 2 /*Z_UNKNOWN*/ ;
    /* adler32 value of the uncompressed data */ this.adler = 0;
}
var zstream = ZStream;
const toString$1 = Object.prototype.toString;
/* Public constants ==========================================================*/ /* ===========================================================================*/ const { Z_NO_FLUSH: Z_NO_FLUSH$1, Z_SYNC_FLUSH, Z_FULL_FLUSH, Z_FINISH: Z_FINISH$2, Z_OK: Z_OK$2, Z_STREAM_END: Z_STREAM_END$2, Z_DEFAULT_COMPRESSION, Z_DEFAULT_STRATEGY, Z_DEFLATED: Z_DEFLATED$1 } = constants$2;
/* ===========================================================================*/ /**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/ /* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/ /**
 * Deflate.result -> Uint8Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
 **/ /**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/ /**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/ /**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 *   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/ function Deflate$1(options) {
    this.options = common.assign({
        level: Z_DEFAULT_COMPRESSION,
        method: Z_DEFLATED$1,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: Z_DEFAULT_STRATEGY
    }, options || {});
    let opt = this.options;
    if (opt.raw && opt.windowBits > 0) opt.windowBits = -opt.windowBits;
    else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) opt.windowBits += 16;
    this.err = 0; // error code, if happens (0 = Z_OK)
    this.msg = ""; // error message
    this.ended = false; // used to avoid multiple onEnd() calls
    this.chunks = []; // chunks of compressed data
    this.strm = new zstream();
    this.strm.avail_out = 0;
    let status = deflate_1$2.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);
    if (status !== Z_OK$2) throw new Error(messages[status]);
    if (opt.header) deflate_1$2.deflateSetHeader(this.strm, opt.header);
    if (opt.dictionary) {
        let dict;
        // Convert data if needed
        if (typeof opt.dictionary === "string") // If we need to compress text, change encoding to utf8.
        dict = strings.string2buf(opt.dictionary);
        else if (toString$1.call(opt.dictionary) === "[object ArrayBuffer]") dict = new Uint8Array(opt.dictionary);
        else dict = opt.dictionary;
        status = deflate_1$2.deflateSetDictionary(this.strm, dict);
        if (status !== Z_OK$2) throw new Error(messages[status]);
        this._dict_set = true;
    }
}
/**
 * Deflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must
 * have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
 * buffers and call [[Deflate#onEnd]].
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/ Deflate$1.prototype.push = function(data, flush_mode) {
    const strm = this.strm;
    const chunkSize = this.options.chunkSize;
    let status, _flush_mode;
    if (this.ended) return false;
    if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
    else _flush_mode = flush_mode === true ? Z_FINISH$2 : Z_NO_FLUSH$1;
    // Convert data if needed
    if (typeof data === "string") // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
    else if (toString$1.call(data) === "[object ArrayBuffer]") strm.input = new Uint8Array(data);
    else strm.input = data;
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    for(;;){
        if (strm.avail_out === 0) {
            strm.output = new Uint8Array(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
        }
        // Make sure avail_out > 6 to avoid repeating markers
        if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
            this.onData(strm.output.subarray(0, strm.next_out));
            strm.avail_out = 0;
            continue;
        }
        status = deflate_1$2.deflate(strm, _flush_mode);
        // Ended => flush and finish
        if (status === Z_STREAM_END$2) {
            if (strm.next_out > 0) this.onData(strm.output.subarray(0, strm.next_out));
            status = deflate_1$2.deflateEnd(this.strm);
            this.onEnd(status);
            this.ended = true;
            return status === Z_OK$2;
        }
        // Flush if out buffer full
        if (strm.avail_out === 0) {
            this.onData(strm.output);
            continue;
        }
        // Flush if requested and has data
        if (_flush_mode > 0 && strm.next_out > 0) {
            this.onData(strm.output.subarray(0, strm.next_out));
            strm.avail_out = 0;
            continue;
        }
        if (strm.avail_in === 0) break;
    }
    return true;
};
/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array): output data.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/ Deflate$1.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
};
/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/ Deflate$1.prototype.onEnd = function(status) {
    // On success - join
    if (status === Z_OK$2) this.result = common.flattenChunks(this.chunks);
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
};
/**
 * deflate(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const data = new Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/ function deflate$1(input, options) {
    const deflator = new Deflate$1(options);
    deflator.push(input, true);
    // That will never happens, if you don't cheat with options :)
    if (deflator.err) throw deflator.msg || messages[deflator.err];
    return deflator.result;
}
/**
 * deflateRaw(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/ function deflateRaw$1(input, options) {
    options = options || {};
    options.raw = true;
    return deflate$1(input, options);
}
/**
 * gzip(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/ function gzip$1(input, options) {
    options = options || {};
    options.gzip = true;
    return deflate$1(input, options);
}
var Deflate_1$1 = Deflate$1;
var deflate_2 = deflate$1;
var deflateRaw_1$1 = deflateRaw$1;
var gzip_1$1 = gzip$1;
var constants$1 = constants$2;
var deflate_1$1 = {
    Deflate: Deflate_1$1,
    deflate: deflate_2,
    deflateRaw: deflateRaw_1$1,
    gzip: gzip_1$1,
    constants: constants$1
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
// See state defs from inflate.js
const BAD$1 = 16209; /* got a data error -- remain here until reset */ 
const TYPE$1 = 16191; /* i: waiting for type bits, including last-flag bit */ 
/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */ var inffast = function inflate_fast(strm, start) {
    let _in; /* local strm.input */ 
    let last; /* have enough input while in < last */ 
    let _out; /* local strm.output */ 
    let beg; /* inflate()'s initial strm.output */ 
    let end; /* while out < end, enough space available */ 
    //#ifdef INFLATE_STRICT
    let dmax; /* maximum distance from zlib header */ 
    //#endif
    let wsize; /* window size or zero if not using window */ 
    let whave; /* valid bytes in the window */ 
    let wnext; /* window write index */ 
    // Use `s_window` instead `window`, avoid conflict with instrumentation tools
    let s_window; /* allocated sliding window, if wsize != 0 */ 
    let hold; /* local strm.hold */ 
    let bits; /* local strm.bits */ 
    let lcode; /* local strm.lencode */ 
    let dcode; /* local strm.distcode */ 
    let lmask; /* mask for first level of length codes */ 
    let dmask; /* mask for first level of distance codes */ 
    let here; /* retrieved table entry */ 
    let op; /* code bits, operation, extra bits, or */ 
    /*  window position, window bytes to copy */ let len; /* match length, unused bytes */ 
    let dist; /* match distance */ 
    let from; /* where to copy match from */ 
    let from_source;
    let input, output; // JS specific, because we have no pointers
    /* copy state to local variables */ const state = strm.state;
    //here = state.here;
    _in = strm.next_in;
    input = strm.input;
    last = _in + (strm.avail_in - 5);
    _out = strm.next_out;
    output = strm.output;
    beg = _out - (start - strm.avail_out);
    end = _out + (strm.avail_out - 257);
    //#ifdef INFLATE_STRICT
    dmax = state.dmax;
    //#endif
    wsize = state.wsize;
    whave = state.whave;
    wnext = state.wnext;
    s_window = state.window;
    hold = state.hold;
    bits = state.bits;
    lcode = state.lencode;
    dcode = state.distcode;
    lmask = (1 << state.lenbits) - 1;
    dmask = (1 << state.distbits) - 1;
    /* decode literals and length/distances until end-of-block or not enough
     input data or output space */ top: do {
        if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
        }
        here = lcode[hold & lmask];
        dolen: for(;;){
            op = here >>> 24 /*here.bits*/ ;
            hold >>>= op;
            bits -= op;
            op = here >>> 16 & 0xff /*here.op*/ ;
            if (op === 0) //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
            //        "inflate:         literal '%c'\n" :
            //        "inflate:         literal 0x%02x\n", here.val));
            output[_out++] = here & 0xffff /*here.val*/ ;
            else if (op & 16) {
                len = here & 0xffff /*here.val*/ ;
                op &= 15; /* number of extra bits */ 
                if (op) {
                    if (bits < op) {
                        hold += input[_in++] << bits;
                        bits += 8;
                    }
                    len += hold & (1 << op) - 1;
                    hold >>>= op;
                    bits -= op;
                }
                //Tracevv((stderr, "inflate:         length %u\n", len));
                if (bits < 15) {
                    hold += input[_in++] << bits;
                    bits += 8;
                    hold += input[_in++] << bits;
                    bits += 8;
                }
                here = dcode[hold & dmask];
                dodist: for(;;){
                    op = here >>> 24 /*here.bits*/ ;
                    hold >>>= op;
                    bits -= op;
                    op = here >>> 16 & 0xff /*here.op*/ ;
                    if (op & 16) {
                        dist = here & 0xffff /*here.val*/ ;
                        op &= 15; /* number of extra bits */ 
                        if (bits < op) {
                            hold += input[_in++] << bits;
                            bits += 8;
                            if (bits < op) {
                                hold += input[_in++] << bits;
                                bits += 8;
                            }
                        }
                        dist += hold & (1 << op) - 1;
                        //#ifdef INFLATE_STRICT
                        if (dist > dmax) {
                            strm.msg = "invalid distance too far back";
                            state.mode = BAD$1;
                            break top;
                        }
                        //#endif
                        hold >>>= op;
                        bits -= op;
                        //Tracevv((stderr, "inflate:         distance %u\n", dist));
                        op = _out - beg; /* max distance in output */ 
                        if (dist > op) {
                            op = dist - op; /* distance back in window */ 
                            if (op > whave) {
                                if (state.sane) {
                                    strm.msg = "invalid distance too far back";
                                    state.mode = BAD$1;
                                    break top;
                                }
                            }
                            from = 0; // window index
                            from_source = s_window;
                            if (wnext === 0) {
                                from += wsize - op;
                                if (op < len) {
                                    len -= op;
                                    do output[_out++] = s_window[from++];
                                    while (--op);
                                    from = _out - dist; /* rest from output */ 
                                    from_source = output;
                                }
                            } else if (wnext < op) {
                                from += wsize + wnext - op;
                                op -= wnext;
                                if (op < len) {
                                    len -= op;
                                    do output[_out++] = s_window[from++];
                                    while (--op);
                                    from = 0;
                                    if (wnext < len) {
                                        op = wnext;
                                        len -= op;
                                        do output[_out++] = s_window[from++];
                                        while (--op);
                                        from = _out - dist; /* rest from output */ 
                                        from_source = output;
                                    }
                                }
                            } else {
                                from += wnext - op;
                                if (op < len) {
                                    len -= op;
                                    do output[_out++] = s_window[from++];
                                    while (--op);
                                    from = _out - dist; /* rest from output */ 
                                    from_source = output;
                                }
                            }
                            while(len > 2){
                                output[_out++] = from_source[from++];
                                output[_out++] = from_source[from++];
                                output[_out++] = from_source[from++];
                                len -= 3;
                            }
                            if (len) {
                                output[_out++] = from_source[from++];
                                if (len > 1) output[_out++] = from_source[from++];
                            }
                        } else {
                            from = _out - dist; /* copy direct from output */ 
                            do {
                                output[_out++] = output[from++];
                                output[_out++] = output[from++];
                                output[_out++] = output[from++];
                                len -= 3;
                            }while (len > 2);
                            if (len) {
                                output[_out++] = output[from++];
                                if (len > 1) output[_out++] = output[from++];
                            }
                        }
                    } else if ((op & 64) === 0) {
                        here = dcode[(here & 0xffff) + (hold & (1 << op) - 1)];
                        continue dodist;
                    } else {
                        strm.msg = "invalid distance code";
                        state.mode = BAD$1;
                        break top;
                    }
                    break; // need to emulate goto via "continue"
                }
            } else if ((op & 64) === 0) {
                here = lcode[(here & 0xffff) + (hold & (1 << op) - 1)];
                continue dolen;
            } else if (op & 32) {
                //Tracevv((stderr, "inflate:         end of block\n"));
                state.mode = TYPE$1;
                break top;
            } else {
                strm.msg = "invalid literal/length code";
                state.mode = BAD$1;
                break top;
            }
            break; // need to emulate goto via "continue"
        }
    }while (_in < last && _out < end);
    /* return unused bytes (on entry, bits < 8, so in won't go too far back) */ len = bits >> 3;
    _in -= len;
    bits -= len << 3;
    hold &= (1 << bits) - 1;
    /* update state and return */ strm.next_in = _in;
    strm.next_out = _out;
    strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
    strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
    state.hold = hold;
    state.bits = bits;
    return;
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const MAXBITS = 15;
const ENOUGH_LENS$1 = 852;
const ENOUGH_DISTS$1 = 592;
//const ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);
const CODES$1 = 0;
const LENS$1 = 1;
const DISTS$1 = 2;
const lbase = new Uint16Array([
    /* Length codes 257..285 base */ 3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
]);
const lext = new Uint8Array([
    /* Length codes 257..285 extra */ 16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    16,
    72,
    78
]);
const dbase = new Uint16Array([
    /* Distance codes 0..29 base */ 1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577,
    0,
    0
]);
const dext = new Uint8Array([
    /* Distance codes 0..29 extra */ 16,
    16,
    16,
    16,
    17,
    17,
    18,
    18,
    19,
    19,
    20,
    20,
    21,
    21,
    22,
    22,
    23,
    23,
    24,
    24,
    25,
    25,
    26,
    26,
    27,
    27,
    28,
    28,
    29,
    29,
    64,
    64
]);
const inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts)=>{
    const bits = opts.bits;
    //here = opts.here; /* table entry for duplication */
    let len = 0; /* a code's length in bits */ 
    let sym = 0; /* index of code symbols */ 
    let min = 0, max = 0; /* minimum and maximum code lengths */ 
    let root = 0; /* number of index bits for root table */ 
    let curr = 0; /* number of index bits for current table */ 
    let drop = 0; /* code bits to drop for sub-table */ 
    let left = 0; /* number of prefix codes available */ 
    let used = 0; /* code entries in table used */ 
    let huff = 0; /* Huffman code */ 
    let incr; /* for incrementing code, index */ 
    let fill; /* index for replicating entries */ 
    let low; /* low bits for current root entry */ 
    let mask; /* mask for low root bits */ 
    let next; /* next available space in table */ 
    let base = null; /* base value table to use */ 
    //  let shoextra;    /* extra bits table to use */
    let match; /* use base and extra for symbol >= match */ 
    const count = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
    const offs = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
    let extra = null;
    let here_bits, here_op, here_val;
    /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */ /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */ for(len = 0; len <= MAXBITS; len++)count[len] = 0;
    for(sym = 0; sym < codes; sym++)count[lens[lens_index + sym]]++;
    /* bound code lengths, force root to be within code lengths */ root = bits;
    for(max = MAXBITS; max >= 1; max--){
        if (count[max] !== 0) break;
    }
    if (root > max) root = max;
    if (max === 0) {
        //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
        //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
        //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
        table[table_index++] = 20971520;
        //table.op[opts.table_index] = 64;
        //table.bits[opts.table_index] = 1;
        //table.val[opts.table_index++] = 0;
        table[table_index++] = 20971520;
        opts.bits = 1;
        return 0; /* no symbols, but wait for decoding to report error */ 
    }
    for(min = 1; min < max; min++){
        if (count[min] !== 0) break;
    }
    if (root < min) root = min;
    /* check for an over-subscribed or incomplete set of lengths */ left = 1;
    for(len = 1; len <= MAXBITS; len++){
        left <<= 1;
        left -= count[len];
        if (left < 0) return -1;
         /* over-subscribed */ 
    }
    if (left > 0 && (type === CODES$1 || max !== 1)) return -1; /* incomplete set */ 
    /* generate offsets into symbol table for each length for sorting */ offs[1] = 0;
    for(len = 1; len < MAXBITS; len++)offs[len + 1] = offs[len] + count[len];
    /* sort symbols by length, by symbol order within each length */ for(sym = 0; sym < codes; sym++)if (lens[lens_index + sym] !== 0) work[offs[lens[lens_index + sym]]++] = sym;
    /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */ /* set up for code type */ // poor man optimization - use if-else instead of switch,
    // to avoid deopts in old v8
    if (type === CODES$1) {
        base = extra = work; /* dummy value--not used */ 
        match = 20;
    } else if (type === LENS$1) {
        base = lbase;
        extra = lext;
        match = 257;
    } else {
        base = dbase;
        extra = dext;
        match = 0;
    }
    /* initialize opts for loop */ huff = 0; /* starting code */ 
    sym = 0; /* starting code symbol */ 
    len = min; /* starting code length */ 
    next = table_index; /* current table to fill in */ 
    curr = root; /* current table index bits */ 
    drop = 0; /* current bits to drop from code for index */ 
    low = -1; /* trigger new sub-table when len > root */ 
    used = 1 << root; /* use root table entries */ 
    mask = used - 1; /* mask for comparing low */ 
    /* check available table space */ if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) return 1;
    /* process all codes and make table entries */ for(;;){
        /* create table entry */ here_bits = len - drop;
        if (work[sym] + 1 < match) {
            here_op = 0;
            here_val = work[sym];
        } else if (work[sym] >= match) {
            here_op = extra[work[sym] - match];
            here_val = base[work[sym] - match];
        } else {
            here_op = 96; /* end of block */ 
            here_val = 0;
        }
        /* replicate for those indices with low len bits equal to huff */ incr = 1 << len - drop;
        fill = 1 << curr;
        min = fill; /* save offset to next table */ 
        do {
            fill -= incr;
            table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
        }while (fill !== 0);
        /* backwards increment the len-bit code huff */ incr = 1 << len - 1;
        while(huff & incr)incr >>= 1;
        if (incr !== 0) {
            huff &= incr - 1;
            huff += incr;
        } else huff = 0;
        /* go to next symbol, update count, len */ sym++;
        if (--count[len] === 0) {
            if (len === max) break;
            len = lens[lens_index + work[sym]];
        }
        /* create new sub-table if needed */ if (len > root && (huff & mask) !== low) {
            /* if first time, transition to sub-tables */ if (drop === 0) drop = root;
            /* increment past last table */ next += min; /* here min is 1 << curr */ 
            /* determine length of next table */ curr = len - drop;
            left = 1 << curr;
            while(curr + drop < max){
                left -= count[curr + drop];
                if (left <= 0) break;
                curr++;
                left <<= 1;
            }
            /* check for enough space */ used += 1 << curr;
            if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) return 1;
            /* point entry in root table to sub-table */ low = huff & mask;
            /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/ table[low] = root << 24 | curr << 16 | next - table_index | 0;
        }
    }
    /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */ if (huff !== 0) //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = len - drop << 24 | 4194304;
    /* set return parameters */ //opts.table_index += used;
    opts.bits = root;
    return 0;
};
var inftrees = inflate_table;
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const CODES = 0;
const LENS = 1;
const DISTS = 2;
/* Public constants ==========================================================*/ /* ===========================================================================*/ const { Z_FINISH: Z_FINISH$1, Z_BLOCK, Z_TREES, Z_OK: Z_OK$1, Z_STREAM_END: Z_STREAM_END$1, Z_NEED_DICT: Z_NEED_DICT$1, Z_STREAM_ERROR: Z_STREAM_ERROR$1, Z_DATA_ERROR: Z_DATA_ERROR$1, Z_MEM_ERROR: Z_MEM_ERROR$1, Z_BUF_ERROR, Z_DEFLATED } = constants$2;
/* STATES ====================================================================*/ /* ===========================================================================*/ const HEAD = 16180; /* i: waiting for magic header */ 
const FLAGS = 16181; /* i: waiting for method and flags (gzip) */ 
const TIME = 16182; /* i: waiting for modification time (gzip) */ 
const OS = 16183; /* i: waiting for extra flags and operating system (gzip) */ 
const EXLEN = 16184; /* i: waiting for extra length (gzip) */ 
const EXTRA = 16185; /* i: waiting for extra bytes (gzip) */ 
const NAME = 16186; /* i: waiting for end of file name (gzip) */ 
const COMMENT = 16187; /* i: waiting for end of comment (gzip) */ 
const HCRC = 16188; /* i: waiting for header crc (gzip) */ 
const DICTID = 16189; /* i: waiting for dictionary check value */ 
const DICT = 16190; /* waiting for inflateSetDictionary() call */ 
const TYPE = 16191; /* i: waiting for type bits, including last-flag bit */ 
const TYPEDO = 16192; /* i: same, but skip check to exit inflate on new block */ 
const STORED = 16193; /* i: waiting for stored size (length and complement) */ 
const COPY_ = 16194; /* i/o: same as COPY below, but only first time in */ 
const COPY = 16195; /* i/o: waiting for input or output to copy stored block */ 
const TABLE = 16196; /* i: waiting for dynamic block table lengths */ 
const LENLENS = 16197; /* i: waiting for code length code lengths */ 
const CODELENS = 16198; /* i: waiting for length/lit and distance code lengths */ 
const LEN_ = 16199; /* i: same as LEN below, but only first time in */ 
const LEN = 16200; /* i: waiting for length/lit/eob code */ 
const LENEXT = 16201; /* i: waiting for length extra bits */ 
const DIST = 16202; /* i: waiting for distance code */ 
const DISTEXT = 16203; /* i: waiting for distance extra bits */ 
const MATCH = 16204; /* o: waiting for output space to copy string */ 
const LIT = 16205; /* o: waiting for output space to write literal */ 
const CHECK = 16206; /* i: waiting for 32-bit check value */ 
const LENGTH = 16207; /* i: waiting for 32-bit length (gzip) */ 
const DONE = 16208; /* finished check, done -- remain here until reset */ 
const BAD = 16209; /* got a data error -- remain here until reset */ 
const MEM = 16210; /* got an inflate() memory error -- remain here until reset */ 
const SYNC = 16211; /* looking for synchronization bytes to restart inflate() */ 
/* ===========================================================================*/ const ENOUGH_LENS = 852;
const ENOUGH_DISTS = 592;
//const ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);
const MAX_WBITS = 15;
/* 32K LZ77 window */ const DEF_WBITS = MAX_WBITS;
const zswap32 = (q)=>{
    return (q >>> 24 & 0xff) + (q >>> 8 & 0xff00) + ((q & 0xff00) << 8) + ((q & 0xff) << 24);
};
function InflateState() {
    this.strm = null; /* pointer back to this zlib stream */ 
    this.mode = 0; /* current inflate mode */ 
    this.last = false; /* true if processing last block */ 
    this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip,
                                 bit 2 true to validate check value */ 
    this.havedict = false; /* true if dictionary provided */ 
    this.flags = 0; /* gzip header method and flags (0 if zlib), or
                                 -1 if raw or no header yet */ 
    this.dmax = 0; /* zlib header max distance (INFLATE_STRICT) */ 
    this.check = 0; /* protected copy of check value */ 
    this.total = 0; /* protected copy of output count */ 
    // TODO: may be {}
    this.head = null; /* where to save gzip header information */ 
    /* sliding window */ this.wbits = 0; /* log base 2 of requested window size */ 
    this.wsize = 0; /* window size or zero if not using window */ 
    this.whave = 0; /* valid bytes in the window */ 
    this.wnext = 0; /* window write index */ 
    this.window = null; /* allocated sliding window, if needed */ 
    /* bit accumulator */ this.hold = 0; /* input bit accumulator */ 
    this.bits = 0; /* number of bits in "in" */ 
    /* for string and stored block copying */ this.length = 0; /* literal or length of data to copy */ 
    this.offset = 0; /* distance back to copy string from */ 
    /* for table and code decoding */ this.extra = 0; /* extra bits needed */ 
    /* fixed and dynamic code tables */ this.lencode = null; /* starting table for length/literal codes */ 
    this.distcode = null; /* starting table for distance codes */ 
    this.lenbits = 0; /* index bits for lencode */ 
    this.distbits = 0; /* index bits for distcode */ 
    /* dynamic table building */ this.ncode = 0; /* number of code length code lengths */ 
    this.nlen = 0; /* number of length code lengths */ 
    this.ndist = 0; /* number of distance code lengths */ 
    this.have = 0; /* number of code lengths in lens[] */ 
    this.next = null; /* next available space in codes[] */ 
    this.lens = new Uint16Array(320); /* temporary storage for code lengths */ 
    this.work = new Uint16Array(288); /* work area for code table building */ 
    /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */ //this.codes = new Int32Array(ENOUGH);       /* space for code tables */
    this.lendyn = null; /* dynamic table for length/literal codes (JS specific) */ 
    this.distdyn = null; /* dynamic table for distance codes (JS specific) */ 
    this.sane = 0; /* if false, allow invalid distance too far */ 
    this.back = 0; /* bits back of last unprocessed length/lit */ 
    this.was = 0; /* initial length of match */ 
}
const inflateStateCheck = (strm)=>{
    if (!strm) return 1;
    const state = strm.state;
    if (!state || state.strm !== strm || state.mode < HEAD || state.mode > SYNC) return 1;
    return 0;
};
const inflateResetKeep = (strm)=>{
    if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
    const state = strm.state;
    strm.total_in = strm.total_out = state.total = 0;
    strm.msg = ""; /*Z_NULL*/ 
    if (state.wrap) strm.adler = state.wrap & 1;
    state.mode = HEAD;
    state.last = 0;
    state.havedict = 0;
    state.flags = -1;
    state.dmax = 32768;
    state.head = null /*Z_NULL*/ ;
    state.hold = 0;
    state.bits = 0;
    //state.lencode = state.distcode = state.next = state.codes;
    state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
    state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);
    state.sane = 1;
    state.back = -1;
    //Tracev((stderr, "inflate: reset\n"));
    return Z_OK$1;
};
const inflateReset = (strm)=>{
    if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
    const state = strm.state;
    state.wsize = 0;
    state.whave = 0;
    state.wnext = 0;
    return inflateResetKeep(strm);
};
const inflateReset2 = (strm, windowBits)=>{
    let wrap;
    /* get the state */ if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
    const state = strm.state;
    /* extract wrap request from windowBits parameter */ if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
    } else {
        wrap = (windowBits >> 4) + 5;
        if (windowBits < 48) windowBits &= 15;
    }
    /* set number of window bits, free window if different */ if (windowBits && (windowBits < 8 || windowBits > 15)) return Z_STREAM_ERROR$1;
    if (state.window !== null && state.wbits !== windowBits) state.window = null;
    /* update state and reset the rest of it */ state.wrap = wrap;
    state.wbits = windowBits;
    return inflateReset(strm);
};
const inflateInit2 = (strm, windowBits)=>{
    if (!strm) return Z_STREAM_ERROR$1;
    //strm.msg = Z_NULL;                 /* in case we return an error */
    const state = new InflateState();
    //if (state === Z_NULL) return Z_MEM_ERROR;
    //Tracev((stderr, "inflate: allocated\n"));
    strm.state = state;
    state.strm = strm;
    state.window = null /*Z_NULL*/ ;
    state.mode = HEAD; /* to pass state test in inflateReset2() */ 
    const ret = inflateReset2(strm, windowBits);
    if (ret !== Z_OK$1) strm.state = null /*Z_NULL*/ ;
    return ret;
};
const inflateInit = (strm)=>{
    return inflateInit2(strm, DEF_WBITS);
};
/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */ let virgin = true;
let lenfix, distfix; // We have no pointers in JS, so keep tables separate
const fixedtables = (state)=>{
    /* build fixed huffman tables if first call (may not be thread safe) */ if (virgin) {
        lenfix = new Int32Array(512);
        distfix = new Int32Array(32);
        /* literal/length table */ let sym = 0;
        while(sym < 144)state.lens[sym++] = 8;
        while(sym < 256)state.lens[sym++] = 9;
        while(sym < 280)state.lens[sym++] = 7;
        while(sym < 288)state.lens[sym++] = 8;
        inftrees(LENS, state.lens, 0, 288, lenfix, 0, state.work, {
            bits: 9
        });
        /* distance table */ sym = 0;
        while(sym < 32)state.lens[sym++] = 5;
        inftrees(DISTS, state.lens, 0, 32, distfix, 0, state.work, {
            bits: 5
        });
        /* do this just once */ virgin = false;
    }
    state.lencode = lenfix;
    state.lenbits = 9;
    state.distcode = distfix;
    state.distbits = 5;
};
/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */ const updatewindow = (strm, src, end, copy)=>{
    let dist;
    const state = strm.state;
    /* if it hasn't been done already, allocate space for the window */ if (state.window === null) {
        state.wsize = 1 << state.wbits;
        state.wnext = 0;
        state.whave = 0;
        state.window = new Uint8Array(state.wsize);
    }
    /* copy state->wsize or less output bytes into the circular window */ if (copy >= state.wsize) {
        state.window.set(src.subarray(end - state.wsize, end), 0);
        state.wnext = 0;
        state.whave = state.wsize;
    } else {
        dist = state.wsize - state.wnext;
        if (dist > copy) dist = copy;
        //zmemcpy(state->window + state->wnext, end - copy, dist);
        state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
        copy -= dist;
        if (copy) {
            //zmemcpy(state->window, end - copy, copy);
            state.window.set(src.subarray(end - copy, end), 0);
            state.wnext = copy;
            state.whave = state.wsize;
        } else {
            state.wnext += dist;
            if (state.wnext === state.wsize) state.wnext = 0;
            if (state.whave < state.wsize) state.whave += dist;
        }
    }
    return 0;
};
const inflate$2 = (strm, flush)=>{
    let state;
    let input, output; // input/output buffers
    let next; /* next input INDEX */ 
    let put; /* next output INDEX */ 
    let have, left; /* available input and output */ 
    let hold; /* bit buffer */ 
    let bits; /* bits in bit buffer */ 
    let _in, _out; /* save starting available input and output */ 
    let copy; /* number of stored or match bytes to copy */ 
    let from; /* where to copy match bytes from */ 
    let from_source;
    let here = 0; /* current decoding table entry */ 
    let here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
    //let last;                   /* parent table entry */
    let last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
    let len; /* length to copy for repeats, bits to drop */ 
    let ret; /* return code */ 
    const hbuf = new Uint8Array(4); /* buffer for gzip header crc calculation */ 
    let opts;
    let n; // temporary variable for NEED_BITS
    const order = /* permutation of code lengths */ new Uint8Array([
        16,
        17,
        18,
        0,
        8,
        7,
        9,
        6,
        10,
        5,
        11,
        4,
        12,
        3,
        13,
        2,
        14,
        1,
        15
    ]);
    if (inflateStateCheck(strm) || !strm.output || !strm.input && strm.avail_in !== 0) return Z_STREAM_ERROR$1;
    state = strm.state;
    if (state.mode === TYPE) state.mode = TYPEDO;
     /* skip check */ 
    //--- LOAD() ---
    put = strm.next_out;
    output = strm.output;
    left = strm.avail_out;
    next = strm.next_in;
    input = strm.input;
    have = strm.avail_in;
    hold = state.hold;
    bits = state.bits;
    //---
    _in = have;
    _out = left;
    ret = Z_OK$1;
    inf_leave: for(;;)switch(state.mode){
        case HEAD:
            if (state.wrap === 0) {
                state.mode = TYPEDO;
                break;
            }
            //=== NEEDBITS(16);
            while(bits < 16){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if (state.wrap & 2 && hold === 0x8b1f) {
                if (state.wbits === 0) state.wbits = 15;
                state.check = 0 /*crc32(0L, Z_NULL, 0)*/ ;
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32_1(state.check, hbuf, 2, 0);
                //===//
                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
                state.mode = FLAGS;
                break;
            }
            if (state.head) state.head.done = false;
            if (!(state.wrap & 1) || /* check if zlib header allowed */ (((hold & 0xff) << 8) + (hold >> 8)) % 31) {
                strm.msg = "incorrect header check";
                state.mode = BAD;
                break;
            }
            if ((hold & 0x0f) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
            }
            //--- DROPBITS(4) ---//
            hold >>>= 4;
            bits -= 4;
            //---//
            len = (hold & 0x0f) + 8;
            if (state.wbits === 0) state.wbits = len;
            if (len > 15 || len > state.wbits) {
                strm.msg = "invalid window size";
                state.mode = BAD;
                break;
            }
            // !!! pako patch. Force use `options.windowBits` if passed.
            // Required to always use max window size by default.
            state.dmax = 1 << state.wbits;
            //state.dmax = 1 << len;
            state.flags = 0; /* indicate zlib header */ 
            //Tracev((stderr, "inflate:   zlib header ok\n"));
            strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/ ;
            state.mode = hold & 0x200 ? DICTID : TYPE;
            //=== INITBITS();
            hold = 0;
            bits = 0;
            break;
        case FLAGS:
            //=== NEEDBITS(16); */
            while(bits < 16){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            state.flags = hold;
            if ((state.flags & 0xff) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
            }
            if (state.flags & 0xe000) {
                strm.msg = "unknown header flags set";
                state.mode = BAD;
                break;
            }
            if (state.head) state.head.text = hold >> 8 & 1;
            if (state.flags & 0x0200 && state.wrap & 4) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32_1(state.check, hbuf, 2, 0);
            //===//
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = TIME;
        /* falls through */ case TIME:
            //=== NEEDBITS(32); */
            while(bits < 32){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if (state.head) state.head.time = hold;
            if (state.flags & 0x0200 && state.wrap & 4) {
                //=== CRC4(state.check, hold)
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                hbuf[2] = hold >>> 16 & 0xff;
                hbuf[3] = hold >>> 24 & 0xff;
                state.check = crc32_1(state.check, hbuf, 4, 0);
            //===
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = OS;
        /* falls through */ case OS:
            //=== NEEDBITS(16); */
            while(bits < 16){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if (state.head) {
                state.head.xflags = hold & 0xff;
                state.head.os = hold >> 8;
            }
            if (state.flags & 0x0200 && state.wrap & 4) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32_1(state.check, hbuf, 2, 0);
            //===//
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = EXLEN;
        /* falls through */ case EXLEN:
            if (state.flags & 0x0400) {
                //=== NEEDBITS(16); */
                while(bits < 16){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.length = hold;
                if (state.head) state.head.extra_len = hold;
                if (state.flags & 0x0200 && state.wrap & 4) {
                    //=== CRC2(state.check, hold);
                    hbuf[0] = hold & 0xff;
                    hbuf[1] = hold >>> 8 & 0xff;
                    state.check = crc32_1(state.check, hbuf, 2, 0);
                //===//
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            } else if (state.head) state.head.extra = null /*Z_NULL*/ ;
            state.mode = EXTRA;
        /* falls through */ case EXTRA:
            if (state.flags & 0x0400) {
                copy = state.length;
                if (copy > have) copy = have;
                if (copy) {
                    if (state.head) {
                        len = state.head.extra_len - state.length;
                        if (!state.head.extra) // Use untyped array for more convenient processing later
                        state.head.extra = new Uint8Array(state.head.extra_len);
                        state.head.extra.set(input.subarray(next, // extra field is limited to 65536 bytes
                        // - no need for additional size check
                        next + copy), /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/ len);
                    //zmemcpy(state.head.extra + len, next,
                    //        len + copy > state.head.extra_max ?
                    //        state.head.extra_max - len : copy);
                    }
                    if (state.flags & 0x0200 && state.wrap & 4) state.check = crc32_1(state.check, input, copy, next);
                    have -= copy;
                    next += copy;
                    state.length -= copy;
                }
                if (state.length) break inf_leave;
            }
            state.length = 0;
            state.mode = NAME;
        /* falls through */ case NAME:
            if (state.flags & 0x0800) {
                if (have === 0) break inf_leave;
                copy = 0;
                do {
                    // TODO: 2 or 1 bytes?
                    len = input[next + copy++];
                    /* use constant limit because in js we should not preallocate memory */ if (state.head && len && state.length < 65536 /*state.head.name_max*/ ) state.head.name += String.fromCharCode(len);
                }while (len && copy < have);
                if (state.flags & 0x0200 && state.wrap & 4) state.check = crc32_1(state.check, input, copy, next);
                have -= copy;
                next += copy;
                if (len) break inf_leave;
            } else if (state.head) state.head.name = null;
            state.length = 0;
            state.mode = COMMENT;
        /* falls through */ case COMMENT:
            if (state.flags & 0x1000) {
                if (have === 0) break inf_leave;
                copy = 0;
                do {
                    len = input[next + copy++];
                    /* use constant limit because in js we should not preallocate memory */ if (state.head && len && state.length < 65536 /*state.head.comm_max*/ ) state.head.comment += String.fromCharCode(len);
                }while (len && copy < have);
                if (state.flags & 0x0200 && state.wrap & 4) state.check = crc32_1(state.check, input, copy, next);
                have -= copy;
                next += copy;
                if (len) break inf_leave;
            } else if (state.head) state.head.comment = null;
            state.mode = HCRC;
        /* falls through */ case HCRC:
            if (state.flags & 0x0200) {
                //=== NEEDBITS(16); */
                while(bits < 16){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                if (state.wrap & 4 && hold !== (state.check & 0xffff)) {
                    strm.msg = "header crc mismatch";
                    state.mode = BAD;
                    break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            }
            if (state.head) {
                state.head.hcrc = state.flags >> 9 & 1;
                state.head.done = true;
            }
            strm.adler = state.check = 0;
            state.mode = TYPE;
            break;
        case DICTID:
            //=== NEEDBITS(32); */
            while(bits < 32){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            strm.adler = state.check = zswap32(hold);
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = DICT;
        /* falls through */ case DICT:
            if (state.havedict === 0) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                //---
                return Z_NEED_DICT$1;
            }
            strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/ ;
            state.mode = TYPE;
        /* falls through */ case TYPE:
            if (flush === Z_BLOCK || flush === Z_TREES) break inf_leave;
        /* falls through */ case TYPEDO:
            if (state.last) {
                //--- BYTEBITS() ---//
                hold >>>= bits & 7;
                bits -= bits & 7;
                //---//
                state.mode = CHECK;
                break;
            }
            //=== NEEDBITS(3); */
            while(bits < 3){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            state.last = hold & 0x01 /*BITS(1)*/ ;
            //--- DROPBITS(1) ---//
            hold >>>= 1;
            bits -= 1;
            //---//
            switch(hold & 0x03){
                case 0:
                    /* stored block */ //Tracev((stderr, "inflate:     stored block%s\n",
                    //        state.last ? " (last)" : ""));
                    state.mode = STORED;
                    break;
                case 1:
                    /* fixed block */ fixedtables(state);
                    //Tracev((stderr, "inflate:     fixed codes block%s\n",
                    //        state.last ? " (last)" : ""));
                    state.mode = LEN_; /* decode codes */ 
                    if (flush === Z_TREES) {
                        //--- DROPBITS(2) ---//
                        hold >>>= 2;
                        bits -= 2;
                        break inf_leave;
                    }
                    break;
                case 2:
                    /* dynamic block */ //Tracev((stderr, "inflate:     dynamic codes block%s\n",
                    //        state.last ? " (last)" : ""));
                    state.mode = TABLE;
                    break;
                case 3:
                    strm.msg = "invalid block type";
                    state.mode = BAD;
            }
            //--- DROPBITS(2) ---//
            hold >>>= 2;
            bits -= 2;
            break;
        case STORED:
            //--- BYTEBITS() ---// /* go to byte boundary */
            hold >>>= bits & 7;
            bits -= bits & 7;
            //---//
            //=== NEEDBITS(32); */
            while(bits < 32){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if ((hold & 0xffff) !== (hold >>> 16 ^ 0xffff)) {
                strm.msg = "invalid stored block lengths";
                state.mode = BAD;
                break;
            }
            state.length = hold & 0xffff;
            //Tracev((stderr, "inflate:       stored length %u\n",
            //        state.length));
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = COPY_;
            if (flush === Z_TREES) break inf_leave;
        /* falls through */ case COPY_:
            state.mode = COPY;
        /* falls through */ case COPY:
            copy = state.length;
            if (copy) {
                if (copy > have) copy = have;
                if (copy > left) copy = left;
                if (copy === 0) break inf_leave;
                //--- zmemcpy(put, next, copy); ---
                output.set(input.subarray(next, next + copy), put);
                //---//
                have -= copy;
                next += copy;
                left -= copy;
                put += copy;
                state.length -= copy;
                break;
            }
            //Tracev((stderr, "inflate:       stored end\n"));
            state.mode = TYPE;
            break;
        case TABLE:
            //=== NEEDBITS(14); */
            while(bits < 14){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            state.nlen = (hold & 0x1f) + 257;
            //--- DROPBITS(5) ---//
            hold >>>= 5;
            bits -= 5;
            //---//
            state.ndist = (hold & 0x1f) + 1;
            //--- DROPBITS(5) ---//
            hold >>>= 5;
            bits -= 5;
            //---//
            state.ncode = (hold & 0x0f) + 4;
            //--- DROPBITS(4) ---//
            hold >>>= 4;
            bits -= 4;
            //---//
            //#ifndef PKZIP_BUG_WORKAROUND
            if (state.nlen > 286 || state.ndist > 30) {
                strm.msg = "too many length or distance symbols";
                state.mode = BAD;
                break;
            }
            //#endif
            //Tracev((stderr, "inflate:       table sizes ok\n"));
            state.have = 0;
            state.mode = LENLENS;
        /* falls through */ case LENLENS:
            while(state.have < state.ncode){
                //=== NEEDBITS(3);
                while(bits < 3){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.lens[order[state.have++]] = hold & 0x07; //BITS(3);
                //--- DROPBITS(3) ---//
                hold >>>= 3;
                bits -= 3;
            //---//
            }
            while(state.have < 19)state.lens[order[state.have++]] = 0;
            // We have separate tables & no pointers. 2 commented lines below not needed.
            //state.next = state.codes;
            //state.lencode = state.next;
            // Switch to use dynamic table
            state.lencode = state.lendyn;
            state.lenbits = 7;
            opts = {
                bits: state.lenbits
            };
            ret = inftrees(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
            state.lenbits = opts.bits;
            if (ret) {
                strm.msg = "invalid code lengths set";
                state.mode = BAD;
                break;
            }
            //Tracev((stderr, "inflate:       code lengths ok\n"));
            state.have = 0;
            state.mode = CODELENS;
        /* falls through */ case CODELENS:
            while(state.have < state.nlen + state.ndist){
                for(;;){
                    here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/ 
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 0xff;
                    here_val = here & 0xffff;
                    if (here_bits <= bits) break;
                    //--- PULLBYTE() ---//
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                //---//
                }
                if (here_val < 16) {
                    //--- DROPBITS(here.bits) ---//
                    hold >>>= here_bits;
                    bits -= here_bits;
                    //---//
                    state.lens[state.have++] = here_val;
                } else {
                    if (here_val === 16) {
                        //=== NEEDBITS(here.bits + 2);
                        n = here_bits + 2;
                        while(bits < n){
                            if (have === 0) break inf_leave;
                            have--;
                            hold += input[next++] << bits;
                            bits += 8;
                        }
                        //===//
                        //--- DROPBITS(here.bits) ---//
                        hold >>>= here_bits;
                        bits -= here_bits;
                        //---//
                        if (state.have === 0) {
                            strm.msg = "invalid bit length repeat";
                            state.mode = BAD;
                            break;
                        }
                        len = state.lens[state.have - 1];
                        copy = 3 + (hold & 0x03); //BITS(2);
                        //--- DROPBITS(2) ---//
                        hold >>>= 2;
                        bits -= 2;
                    //---//
                    } else if (here_val === 17) {
                        //=== NEEDBITS(here.bits + 3);
                        n = here_bits + 3;
                        while(bits < n){
                            if (have === 0) break inf_leave;
                            have--;
                            hold += input[next++] << bits;
                            bits += 8;
                        }
                        //===//
                        //--- DROPBITS(here.bits) ---//
                        hold >>>= here_bits;
                        bits -= here_bits;
                        //---//
                        len = 0;
                        copy = 3 + (hold & 0x07); //BITS(3);
                        //--- DROPBITS(3) ---//
                        hold >>>= 3;
                        bits -= 3;
                    //---//
                    } else {
                        //=== NEEDBITS(here.bits + 7);
                        n = here_bits + 7;
                        while(bits < n){
                            if (have === 0) break inf_leave;
                            have--;
                            hold += input[next++] << bits;
                            bits += 8;
                        }
                        //===//
                        //--- DROPBITS(here.bits) ---//
                        hold >>>= here_bits;
                        bits -= here_bits;
                        //---//
                        len = 0;
                        copy = 11 + (hold & 0x7f); //BITS(7);
                        //--- DROPBITS(7) ---//
                        hold >>>= 7;
                        bits -= 7;
                    //---//
                    }
                    if (state.have + copy > state.nlen + state.ndist) {
                        strm.msg = "invalid bit length repeat";
                        state.mode = BAD;
                        break;
                    }
                    while(copy--)state.lens[state.have++] = len;
                }
            }
            /* handle error breaks in while */ if (state.mode === BAD) break;
            /* check for end-of-block code (better have one) */ if (state.lens[256] === 0) {
                strm.msg = "invalid code -- missing end-of-block";
                state.mode = BAD;
                break;
            }
            /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */ state.lenbits = 9;
            opts = {
                bits: state.lenbits
            };
            ret = inftrees(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
            // We have separate tables & no pointers. 2 commented lines below not needed.
            // state.next_index = opts.table_index;
            state.lenbits = opts.bits;
            // state.lencode = state.next;
            if (ret) {
                strm.msg = "invalid literal/lengths set";
                state.mode = BAD;
                break;
            }
            state.distbits = 6;
            //state.distcode.copy(state.codes);
            // Switch to use dynamic table
            state.distcode = state.distdyn;
            opts = {
                bits: state.distbits
            };
            ret = inftrees(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
            // We have separate tables & no pointers. 2 commented lines below not needed.
            // state.next_index = opts.table_index;
            state.distbits = opts.bits;
            // state.distcode = state.next;
            if (ret) {
                strm.msg = "invalid distances set";
                state.mode = BAD;
                break;
            }
            //Tracev((stderr, 'inflate:       codes ok\n'));
            state.mode = LEN_;
            if (flush === Z_TREES) break inf_leave;
        /* falls through */ case LEN_:
            state.mode = LEN;
        /* falls through */ case LEN:
            if (have >= 6 && left >= 258) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                //---
                inffast(strm, _out);
                //--- LOAD() ---
                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state.hold;
                bits = state.bits;
                //---
                if (state.mode === TYPE) state.back = -1;
                break;
            }
            state.back = 0;
            for(;;){
                here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/ 
                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;
                if (here_bits <= bits) break;
                //--- PULLBYTE() ---//
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            //---//
            }
            if (here_op && (here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for(;;){
                    here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 0xff;
                    here_val = here & 0xffff;
                    if (last_bits + here_bits <= bits) break;
                    //--- PULLBYTE() ---//
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                //---//
                }
                //--- DROPBITS(last.bits) ---//
                hold >>>= last_bits;
                bits -= last_bits;
                //---//
                state.back += last_bits;
            }
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.back += here_bits;
            state.length = here_val;
            if (here_op === 0) {
                //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
                //        "inflate:         literal '%c'\n" :
                //        "inflate:         literal 0x%02x\n", here.val));
                state.mode = LIT;
                break;
            }
            if (here_op & 32) {
                //Tracevv((stderr, "inflate:         end of block\n"));
                state.back = -1;
                state.mode = TYPE;
                break;
            }
            if (here_op & 64) {
                strm.msg = "invalid literal/length code";
                state.mode = BAD;
                break;
            }
            state.extra = here_op & 15;
            state.mode = LENEXT;
        /* falls through */ case LENEXT:
            if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;
                while(bits < n){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.length += hold & (1 << state.extra) - 1 /*BITS(state.extra)*/ ;
                //--- DROPBITS(state.extra) ---//
                hold >>>= state.extra;
                bits -= state.extra;
                //---//
                state.back += state.extra;
            }
            //Tracevv((stderr, "inflate:         length %u\n", state.length));
            state.was = state.length;
            state.mode = DIST;
        /* falls through */ case DIST:
            for(;;){
                here = state.distcode[hold & (1 << state.distbits) - 1]; /*BITS(state.distbits)*/ 
                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;
                if (here_bits <= bits) break;
                //--- PULLBYTE() ---//
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            //---//
            }
            if ((here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for(;;){
                    here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 0xff;
                    here_val = here & 0xffff;
                    if (last_bits + here_bits <= bits) break;
                    //--- PULLBYTE() ---//
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                //---//
                }
                //--- DROPBITS(last.bits) ---//
                hold >>>= last_bits;
                bits -= last_bits;
                //---//
                state.back += last_bits;
            }
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.back += here_bits;
            if (here_op & 64) {
                strm.msg = "invalid distance code";
                state.mode = BAD;
                break;
            }
            state.offset = here_val;
            state.extra = here_op & 15;
            state.mode = DISTEXT;
        /* falls through */ case DISTEXT:
            if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;
                while(bits < n){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.offset += hold & (1 << state.extra) - 1 /*BITS(state.extra)*/ ;
                //--- DROPBITS(state.extra) ---//
                hold >>>= state.extra;
                bits -= state.extra;
                //---//
                state.back += state.extra;
            }
            //#ifdef INFLATE_STRICT
            if (state.offset > state.dmax) {
                strm.msg = "invalid distance too far back";
                state.mode = BAD;
                break;
            }
            //#endif
            //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
            state.mode = MATCH;
        /* falls through */ case MATCH:
            if (left === 0) break inf_leave;
            copy = _out - left;
            if (state.offset > copy) {
                copy = state.offset - copy;
                if (copy > state.whave) {
                    if (state.sane) {
                        strm.msg = "invalid distance too far back";
                        state.mode = BAD;
                        break;
                    }
                }
                if (copy > state.wnext) {
                    copy -= state.wnext;
                    from = state.wsize - copy;
                } else from = state.wnext - copy;
                if (copy > state.length) copy = state.length;
                from_source = state.window;
            } else {
                from_source = output;
                from = put - state.offset;
                copy = state.length;
            }
            if (copy > left) copy = left;
            left -= copy;
            state.length -= copy;
            do output[put++] = from_source[from++];
            while (--copy);
            if (state.length === 0) state.mode = LEN;
            break;
        case LIT:
            if (left === 0) break inf_leave;
            output[put++] = state.length;
            left--;
            state.mode = LEN;
            break;
        case CHECK:
            if (state.wrap) {
                //=== NEEDBITS(32);
                while(bits < 32){
                    if (have === 0) break inf_leave;
                    have--;
                    // Use '|' instead of '+' to make sure that result is signed
                    hold |= input[next++] << bits;
                    bits += 8;
                }
                //===//
                _out -= left;
                strm.total_out += _out;
                state.total += _out;
                if (state.wrap & 4 && _out) strm.adler = state.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/ state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out);
                _out = left;
                // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
                if (state.wrap & 4 && (state.flags ? hold : zswap32(hold)) !== state.check) {
                    strm.msg = "incorrect data check";
                    state.mode = BAD;
                    break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            //Tracev((stderr, "inflate:   check matches trailer\n"));
            }
            state.mode = LENGTH;
        /* falls through */ case LENGTH:
            if (state.wrap && state.flags) {
                //=== NEEDBITS(32);
                while(bits < 32){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                if (state.wrap & 4 && hold !== (state.total & 0xffffffff)) {
                    strm.msg = "incorrect length check";
                    state.mode = BAD;
                    break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            //Tracev((stderr, "inflate:   length matches trailer\n"));
            }
            state.mode = DONE;
        /* falls through */ case DONE:
            ret = Z_STREAM_END$1;
            break inf_leave;
        case BAD:
            ret = Z_DATA_ERROR$1;
            break inf_leave;
        case MEM:
            return Z_MEM_ERROR$1;
        case SYNC:
        /* falls through */ default:
            return Z_STREAM_ERROR$1;
    }
    // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"
    /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */ //--- RESTORE() ---
    strm.next_out = put;
    strm.avail_out = left;
    strm.next_in = next;
    strm.avail_in = have;
    state.hold = hold;
    state.bits = bits;
    //---
    if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH$1)) updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out);
    _in -= strm.avail_in;
    _out -= strm.avail_out;
    strm.total_in += _in;
    strm.total_out += _out;
    state.total += _out;
    if (state.wrap & 4 && _out) strm.adler = state.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/ state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out);
    strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
    if ((_in === 0 && _out === 0 || flush === Z_FINISH$1) && ret === Z_OK$1) ret = Z_BUF_ERROR;
    return ret;
};
const inflateEnd = (strm)=>{
    if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
    let state = strm.state;
    if (state.window) state.window = null;
    strm.state = null;
    return Z_OK$1;
};
const inflateGetHeader = (strm, head)=>{
    /* check state */ if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
    const state = strm.state;
    if ((state.wrap & 2) === 0) return Z_STREAM_ERROR$1;
    /* save header structure */ state.head = head;
    head.done = false;
    return Z_OK$1;
};
const inflateSetDictionary = (strm, dictionary)=>{
    const dictLength = dictionary.length;
    let state;
    let dictid;
    let ret;
    /* check state */ if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
    state = strm.state;
    if (state.wrap !== 0 && state.mode !== DICT) return Z_STREAM_ERROR$1;
    /* check for correct dictionary identifier */ if (state.mode === DICT) {
        dictid = 1; /* adler32(0, null, 0)*/ 
        /* dictid = adler32(dictid, dictionary, dictLength); */ dictid = adler32_1(dictid, dictionary, dictLength, 0);
        if (dictid !== state.check) return Z_DATA_ERROR$1;
    }
    /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */ ret = updatewindow(strm, dictionary, dictLength, dictLength);
    if (ret) {
        state.mode = MEM;
        return Z_MEM_ERROR$1;
    }
    state.havedict = 1;
    // Tracev((stderr, "inflate:   dictionary set\n"));
    return Z_OK$1;
};
var inflateReset_1 = inflateReset;
var inflateReset2_1 = inflateReset2;
var inflateResetKeep_1 = inflateResetKeep;
var inflateInit_1 = inflateInit;
var inflateInit2_1 = inflateInit2;
var inflate_2$1 = inflate$2;
var inflateEnd_1 = inflateEnd;
var inflateGetHeader_1 = inflateGetHeader;
var inflateSetDictionary_1 = inflateSetDictionary;
var inflateInfo = "pako inflate (from Nodeca project)";
/* Not implemented
module.exports.inflateCodesUsed = inflateCodesUsed;
module.exports.inflateCopy = inflateCopy;
module.exports.inflateGetDictionary = inflateGetDictionary;
module.exports.inflateMark = inflateMark;
module.exports.inflatePrime = inflatePrime;
module.exports.inflateSync = inflateSync;
module.exports.inflateSyncPoint = inflateSyncPoint;
module.exports.inflateUndermine = inflateUndermine;
module.exports.inflateValidate = inflateValidate;
*/ var inflate_1$2 = {
    inflateReset: inflateReset_1,
    inflateReset2: inflateReset2_1,
    inflateResetKeep: inflateResetKeep_1,
    inflateInit: inflateInit_1,
    inflateInit2: inflateInit2_1,
    inflate: inflate_2$1,
    inflateEnd: inflateEnd_1,
    inflateGetHeader: inflateGetHeader_1,
    inflateSetDictionary: inflateSetDictionary_1,
    inflateInfo: inflateInfo
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function GZheader() {
    /* true if compressed data believed to be text */ this.text = 0;
    /* modification time */ this.time = 0;
    /* extra flags (not used when writing a gzip file) */ this.xflags = 0;
    /* operating system */ this.os = 0;
    /* pointer to extra field or Z_NULL if none */ this.extra = null;
    /* extra field length (valid if extra != Z_NULL) */ this.extra_len = 0; // Actually, we don't need it in JS,
    // but leave for few code modifications
    //
    // Setup limits is not necessary because in js we should not preallocate memory
    // for inflate use constant limit in 65536 bytes
    //
    /* space at extra (only when reading header) */ // this.extra_max  = 0;
    /* pointer to zero-terminated file name or Z_NULL */ this.name = "";
    /* space at name (only when reading header) */ // this.name_max   = 0;
    /* pointer to zero-terminated comment or Z_NULL */ this.comment = "";
    /* space at comment (only when reading header) */ // this.comm_max   = 0;
    /* true if there was or will be a header crc */ this.hcrc = 0;
    /* true when done reading gzip header (not used when writing a gzip file) */ this.done = false;
}
var gzheader = GZheader;
const toString = Object.prototype.toString;
/* Public constants ==========================================================*/ /* ===========================================================================*/ const { Z_NO_FLUSH, Z_FINISH, Z_OK, Z_STREAM_END, Z_NEED_DICT, Z_STREAM_ERROR, Z_DATA_ERROR, Z_MEM_ERROR } = constants$2;
/* ===========================================================================*/ /**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/ /* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/ /**
 * Inflate.result -> Uint8Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
 **/ /**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/ /**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/ /**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 * const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/ function Inflate$1(options) {
    this.options = common.assign({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
    }, options || {});
    const opt = this.options;
    // Force window size for `raw` data, if not set directly,
    // because we have no header for autodetect.
    if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
        opt.windowBits = -opt.windowBits;
        if (opt.windowBits === 0) opt.windowBits = -15;
    }
    // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
    if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) opt.windowBits += 32;
    // Gzip header has no info about windows size, we can do autodetect only
    // for deflate. So, if window size not set, force it to max when gzip possible
    if (opt.windowBits > 15 && opt.windowBits < 48) // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    {
        if ((opt.windowBits & 15) === 0) opt.windowBits |= 15;
    }
    this.err = 0; // error code, if happens (0 = Z_OK)
    this.msg = ""; // error message
    this.ended = false; // used to avoid multiple onEnd() calls
    this.chunks = []; // chunks of compressed data
    this.strm = new zstream();
    this.strm.avail_out = 0;
    let status = inflate_1$2.inflateInit2(this.strm, opt.windowBits);
    if (status !== Z_OK) throw new Error(messages[status]);
    this.header = new gzheader();
    inflate_1$2.inflateGetHeader(this.strm, this.header);
    // Setup dictionary
    if (opt.dictionary) {
        // Convert data if needed
        if (typeof opt.dictionary === "string") opt.dictionary = strings.string2buf(opt.dictionary);
        else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") opt.dictionary = new Uint8Array(opt.dictionary);
        if (opt.raw) {
            status = inflate_1$2.inflateSetDictionary(this.strm, opt.dictionary);
            if (status !== Z_OK) throw new Error(messages[status]);
        }
    }
}
/**
 * Inflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer): input data
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
 *   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
 *   `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. If end of stream detected,
 * [[Inflate#onEnd]] will be called.
 *
 * `flush_mode` is not needed for normal operation, because end of stream
 * detected automatically. You may try to use it for advanced things, but
 * this functionality was not tested.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/ Inflate$1.prototype.push = function(data, flush_mode) {
    const strm = this.strm;
    const chunkSize = this.options.chunkSize;
    const dictionary = this.options.dictionary;
    let status, _flush_mode, last_avail_out;
    if (this.ended) return false;
    if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
    else _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;
    // Convert data if needed
    if (toString.call(data) === "[object ArrayBuffer]") strm.input = new Uint8Array(data);
    else strm.input = data;
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    for(;;){
        if (strm.avail_out === 0) {
            strm.output = new Uint8Array(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
        }
        status = inflate_1$2.inflate(strm, _flush_mode);
        if (status === Z_NEED_DICT && dictionary) {
            status = inflate_1$2.inflateSetDictionary(strm, dictionary);
            if (status === Z_OK) status = inflate_1$2.inflate(strm, _flush_mode);
            else if (status === Z_DATA_ERROR) // Replace code with more verbose
            status = Z_NEED_DICT;
        }
        // Skip snyc markers if more data follows and not raw mode
        while(strm.avail_in > 0 && status === Z_STREAM_END && strm.state.wrap > 0 && data[strm.next_in] !== 0){
            inflate_1$2.inflateReset(strm);
            status = inflate_1$2.inflate(strm, _flush_mode);
        }
        switch(status){
            case Z_STREAM_ERROR:
            case Z_DATA_ERROR:
            case Z_NEED_DICT:
            case Z_MEM_ERROR:
                this.onEnd(status);
                this.ended = true;
                return false;
        }
        // Remember real `avail_out` value, because we may patch out buffer content
        // to align utf8 strings boundaries.
        last_avail_out = strm.avail_out;
        if (strm.next_out) {
            if (strm.avail_out === 0 || status === Z_STREAM_END) {
                if (this.options.to === "string") {
                    let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
                    let tail = strm.next_out - next_out_utf8;
                    let utf8str = strings.buf2string(strm.output, next_out_utf8);
                    // move tail & realign counters
                    strm.next_out = tail;
                    strm.avail_out = chunkSize - tail;
                    if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);
                    this.onData(utf8str);
                } else this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
            }
        }
        // Must repeat iteration if out buffer is full
        if (status === Z_OK && last_avail_out === 0) continue;
        // Finalize if end of stream reached.
        if (status === Z_STREAM_END) {
            status = inflate_1$2.inflateEnd(this.strm);
            this.onEnd(status);
            this.ended = true;
            return true;
        }
        if (strm.avail_in === 0) break;
    }
    return true;
};
/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|String): output data. When string output requested,
 *   each chunk will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/ Inflate$1.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
};
/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/ Inflate$1.prototype.onEnd = function(status) {
    // On success - join
    if (status === Z_OK) {
        if (this.options.to === "string") this.result = this.chunks.join("");
        else this.result = common.flattenChunks(this.chunks);
    }
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
};
/**
 * inflate(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako');
 * const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
 * let output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err) {
 *   console.log(err);
 * }
 * ```
 **/ function inflate$1(input, options) {
    const inflator = new Inflate$1(options);
    inflator.push(input);
    // That will never happens, if you don't cheat with options :)
    if (inflator.err) throw inflator.msg || messages[inflator.err];
    return inflator.result;
}
/**
 * inflateRaw(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/ function inflateRaw$1(input, options) {
    options = options || {};
    options.raw = true;
    return inflate$1(input, options);
}
/**
 * ungzip(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/ var Inflate_1$1 = Inflate$1;
var inflate_2 = inflate$1;
var inflateRaw_1$1 = inflateRaw$1;
var ungzip$1 = inflate$1;
var constants = constants$2;
var inflate_1$1 = {
    Inflate: Inflate_1$1,
    inflate: inflate_2,
    inflateRaw: inflateRaw_1$1,
    ungzip: ungzip$1,
    constants: constants
};
const { Deflate, deflate, deflateRaw, gzip } = deflate_1$1;
const { Inflate, inflate, inflateRaw, ungzip } = inflate_1$1;
var Deflate_1 = Deflate;
var deflate_1 = deflate;
var deflateRaw_1 = deflateRaw;
var gzip_1 = gzip;
var Inflate_1 = Inflate;
var inflate_1 = inflate;
var inflateRaw_1 = inflateRaw;
var ungzip_1 = ungzip;
var constants_1 = constants$2;
var pako = {
    Deflate: Deflate_1,
    deflate: deflate_1,
    deflateRaw: deflateRaw_1,
    gzip: gzip_1,
    Inflate: Inflate_1,
    inflate: inflate_1,
    inflateRaw: inflateRaw_1,
    ungzip: ungzip_1,
    constants: constants_1
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a9SMd":[function(require,module,exports) {
/* global SerialPort, ParityType, FlowControlType */ /**
 * Wrapper class around Webserial API to communicate with the serial device.
 * @param {typeof import("w3c-web-serial").SerialPort} device - Requested device prompted by the browser.
 *
 * ```
 * const port = await navigator.serial.requestPort();
 * ```
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transport", ()=>Transport);
class Transport {
    constructor(device, tracing = false, enableSlipReader = true){
        this.device = device;
        this.tracing = tracing;
        this.slipReaderEnabled = false;
        this.leftOver = new Uint8Array(0);
        this.baudrate = 0;
        this.traceLog = "";
        this.lastTraceTime = Date.now();
        this._DTR_state = false;
        this.slipReaderEnabled = enableSlipReader;
    }
    /**
     * Request the serial device vendor ID and Product ID as string.
     * @returns {string} Return the device VendorID and ProductID from SerialPortInfo as formatted string.
     */ getInfo() {
        const info = this.device.getInfo();
        return info.usbVendorId && info.usbProductId ? `WebSerial VendorID 0x${info.usbVendorId.toString(16)} ProductID 0x${info.usbProductId.toString(16)}` : "";
    }
    /**
     * Request the serial device product id from SerialPortInfo.
     * @returns {number | undefined} Return the product ID.
     */ getPid() {
        return this.device.getInfo().usbProductId;
    }
    /**
     * Format received or sent data for tracing output.
     * @param {string} message Message to format as trace line.
     */ trace(message) {
        const delta = Date.now() - this.lastTraceTime;
        const prefix = `TRACE ${delta.toFixed(3)}`;
        const traceMessage = `${prefix} ${message}`;
        console.log(traceMessage);
        this.traceLog += traceMessage + "\n";
    }
    async returnTrace() {
        try {
            await navigator.clipboard.writeText(this.traceLog);
            console.log("Text copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    }
    hexify(s) {
        return Array.from(s).map((byte)=>byte.toString(16).padStart(2, "0")).join("").padEnd(16, " ");
    }
    hexConvert(uint8Array, autoSplit = true) {
        if (autoSplit && uint8Array.length > 16) {
            let result = "";
            let s = uint8Array;
            while(s.length > 0){
                const line = s.slice(0, 16);
                const asciiLine = String.fromCharCode(...line).split("").map((c)=>c === " " || c >= " " && c <= "~" && c !== "  " ? c : ".").join("");
                s = s.slice(16);
                result += `\n    ${this.hexify(line.slice(0, 8))} ${this.hexify(line.slice(8))} | ${asciiLine}`;
            }
            return result;
        } else return this.hexify(uint8Array);
    }
    /**
     * Format data packet using the Serial Line Internet Protocol (SLIP).
     * @param {Uint8Array} data Binary unsigned 8 bit array data to format.
     * @returns {Uint8Array} Formatted unsigned 8 bit data array.
     */ slipWriter(data) {
        const outData = [];
        outData.push(0xc0);
        for(let i = 0; i < data.length; i++){
            if (data[i] === 0xdb) outData.push(0xdb, 0xdd);
            else if (data[i] === 0xc0) outData.push(0xdb, 0xdc);
            else outData.push(data[i]);
        }
        outData.push(0xc0);
        return new Uint8Array(outData);
    }
    /**
     * Write binary data to device using the WebSerial device writable stream.
     * @param {Uint8Array} data 8 bit unsigned data array to write to device.
     */ async write(data) {
        const outData = this.slipWriter(data);
        if (this.device.writable) {
            const writer = this.device.writable.getWriter();
            if (this.tracing) {
                console.log("Write bytes");
                this.trace(`Write ${outData.length} bytes: ${this.hexConvert(outData)}`);
            }
            await writer.write(outData);
            writer.releaseLock();
        }
    }
    /**
     * Concatenate buffer2 to buffer1 and return the resulting ArrayBuffer.
     * @param {ArrayBuffer} buffer1 First buffer to concatenate.
     * @param {ArrayBuffer} buffer2 Second buffer to concatenate.
     * @returns {ArrayBuffer} Result Array buffer.
     */ _appendBuffer(buffer1, buffer2) {
        const tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
        tmp.set(new Uint8Array(buffer1), 0);
        tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
        return tmp.buffer;
    }
    /**
     * Take a data array and return the first well formed packet after
     * replacing the escape sequence. Reads at least 8 bytes.
     * @param {Uint8Array} data Unsigned 8 bit array from the device read stream.
     * @returns {Uint8Array} Formatted packet using SLIP escape sequences.
     */ slipReader(data) {
        let i = 0;
        let dataStart = 0, dataEnd = 0;
        let state = "init";
        while(i < data.length){
            if (state === "init" && data[i] == 0xc0) {
                dataStart = i + 1;
                state = "valid_data";
                i++;
                continue;
            }
            if (state === "valid_data" && data[i] == 0xc0) {
                dataEnd = i - 1;
                state = "packet_complete";
                break;
            }
            i++;
        }
        if (state !== "packet_complete") {
            this.leftOver = data;
            return new Uint8Array(0);
        }
        this.leftOver = data.slice(dataEnd + 2);
        const tempPkt = new Uint8Array(dataEnd - dataStart + 1);
        let j = 0;
        for(i = dataStart; i <= dataEnd; i++, j++){
            if (data[i] === 0xdb && data[i + 1] === 0xdc) {
                tempPkt[j] = 0xc0;
                i++;
                continue;
            }
            if (data[i] === 0xdb && data[i + 1] === 0xdd) {
                tempPkt[j] = 0xdb;
                i++;
                continue;
            }
            tempPkt[j] = data[i];
        }
        const packet = tempPkt.slice(0, j); /* Remove unused bytes due to escape seq */ 
        return packet;
    }
    /**
     * Read from serial device using the device ReadableStream.
     * @param {number} timeout Read timeout number
     * @param {number} minData Minimum packet array length
     * @returns {Uint8Array} 8 bit unsigned data array read from device.
     */ async read(timeout = 0, minData = 12) {
        let t;
        let packet = this.leftOver;
        this.leftOver = new Uint8Array(0);
        if (this.slipReaderEnabled) {
            const valFinal = this.slipReader(packet);
            if (valFinal.length > 0) return valFinal;
            packet = this.leftOver;
            this.leftOver = new Uint8Array(0);
        }
        if (this.device.readable == null) return this.leftOver;
        this.reader = this.device.readable.getReader();
        try {
            if (timeout > 0) t = setTimeout(()=>{
                if (this.reader) this.reader.cancel();
            }, timeout);
            do {
                const { value, done } = await this.reader.read();
                if (done) {
                    this.leftOver = packet;
                    throw new Error("Timeout");
                }
                const p = new Uint8Array(this._appendBuffer(packet.buffer, value.buffer));
                packet = p;
            }while (packet.length < minData);
        } finally{
            if (timeout > 0) clearTimeout(t);
            this.reader.releaseLock();
        }
        if (this.tracing) {
            console.log("Read bytes");
            this.trace(`Read ${packet.length} bytes: ${this.hexConvert(packet)}`);
        }
        if (this.slipReaderEnabled) {
            const slipReaderResult = this.slipReader(packet);
            if (this.tracing) {
                console.log("Slip reader results");
                this.trace(`Read ${slipReaderResult.length} bytes: ${this.hexConvert(slipReaderResult)}`);
            }
            return slipReaderResult;
        }
        return packet;
    }
    /**
     * Read from serial device without slip formatting.
     * @param {number} timeout Read timeout in milliseconds (ms)
     * @returns {Uint8Array} 8 bit unsigned data array read from device.
     */ async rawRead(timeout = 0) {
        if (this.leftOver.length != 0) {
            const p = this.leftOver;
            this.leftOver = new Uint8Array(0);
            return p;
        }
        if (!this.device.readable) return this.leftOver;
        this.reader = this.device.readable.getReader();
        let t;
        try {
            if (timeout > 0) t = setTimeout(()=>{
                if (this.reader) this.reader.cancel();
            }, timeout);
            const { value, done } = await this.reader.read();
            if (done) return value;
            if (this.tracing) {
                console.log("Raw Read bytes");
                this.trace(`Read ${value.length} bytes: ${this.hexConvert(value)}`);
            }
            return value;
        } finally{
            if (timeout > 0) clearTimeout(t);
            this.reader.releaseLock();
        }
    }
    /**
     * Send the RequestToSend (RTS) signal to given state
     * # True for EN=LOW, chip in reset and False EN=HIGH, chip out of reset
     * @param {boolean} state Boolean state to set the signal
     */ async setRTS(state) {
        await this.device.setSignals({
            requestToSend: state
        });
        // # Work-around for adapters on Windows using the usbser.sys driver:
        // # generate a dummy change to DTR so that the set-control-line-state
        // # request is sent with the updated RTS state and the same DTR state
        // Referenced to esptool.py
        await this.setDTR(this._DTR_state);
    }
    /**
     * Send the dataTerminalReady (DTS) signal to given state
     * # True for IO0=LOW, chip in reset and False IO0=HIGH
     * @param {boolean} state Boolean state to set the signal
     */ async setDTR(state) {
        this._DTR_state = state;
        await this.device.setSignals({
            dataTerminalReady: state
        });
    }
    /**
     * Connect to serial device using the Webserial open method.
     * @param {number} baud Number baud rate for serial connection.
     * @param {typeof import("w3c-web-serial").SerialOptions} serialOptions Serial Options for WebUSB SerialPort class.
     */ async connect(baud = 115200, serialOptions = {}) {
        await this.device.open({
            baudRate: baud,
            dataBits: serialOptions === null || serialOptions === void 0 ? void 0 : serialOptions.dataBits,
            stopBits: serialOptions === null || serialOptions === void 0 ? void 0 : serialOptions.stopBits,
            bufferSize: serialOptions === null || serialOptions === void 0 ? void 0 : serialOptions.bufferSize,
            parity: serialOptions === null || serialOptions === void 0 ? void 0 : serialOptions.parity,
            flowControl: serialOptions === null || serialOptions === void 0 ? void 0 : serialOptions.flowControl
        });
        this.baudrate = baud;
        this.leftOver = new Uint8Array(0);
    }
    async sleep(ms) {
        return new Promise((resolve)=>setTimeout(resolve, ms));
    }
    /**
     * Wait for a given timeout ms for serial device unlock.
     * @param {number} timeout Timeout time in milliseconds (ms) to sleep
     */ async waitForUnlock(timeout) {
        while(this.device.readable && this.device.readable.locked || this.device.writable && this.device.writable.locked)await this.sleep(timeout);
    }
    /**
     * Disconnect from serial device by running SerialPort.close() after streams unlock.
     */ async disconnect() {
        var _a, _b;
        if ((_a = this.device.readable) === null || _a === void 0 ? void 0 : _a.locked) await ((_b = this.reader) === null || _b === void 0 ? void 0 : _b.cancel());
        await this.waitForUnlock(400);
        this.reader = undefined;
        await this.device.close();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dTpzL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Execute a classic set of commands that will reset the chip.
 *
 * Commands (e.g. R0) are defined by a code (R) and an argument (0).
 *
 * The commands are:
 *
 * D: setDTR - 1=True / 0=False
 *
 * R: setRTS - 1=True / 0=False
 *
 * W: Wait (time delay) - positive integer number (miliseconds)
 *
 * "D0|R1|W100|D1|R0|W50|D0" represents the classic reset strategy
 * @param {Transport} transport Transport class to perform serial communication.
 * @param {number} resetDelay Delay in milliseconds for reset.
 */ parcelHelpers.export(exports, "classicReset", ()=>classicReset);
/**
 * Execute a set of commands for USB JTAG serial reset.
 *
 * Commands (e.g. R0) are defined by a code (R) and an argument (0).
 *
 * The commands are:
 *
 * D: setDTR - 1=True / 0=False
 *
 * R: setRTS - 1=True / 0=False
 *
 * W: Wait (time delay) - positive integer number (miliseconds)
 * @param {Transport} transport Transport class to perform serial communication.
 */ parcelHelpers.export(exports, "usbJTAGSerialReset", ()=>usbJTAGSerialReset);
/**
 * Execute a set of commands that will hard reset the chip.
 *
 * Commands (e.g. R0) are defined by a code (R) and an argument (0).
 *
 * The commands are:
 *
 * D: setDTR - 1=True / 0=False
 *
 * R: setRTS - 1=True / 0=False
 *
 * W: Wait (time delay) - positive integer number (miliseconds)
 * @param {Transport} transport Transport class to perform serial communication.
 * @param {boolean} usingUsbOtg is it using USB-OTG ?
 */ parcelHelpers.export(exports, "hardReset", ()=>hardReset);
/**
 * Validate a sequence string based on the following format:
 *
 * Commands (e.g. R0) are defined by a code (R) and an argument (0).
 *
 * The commands are:
 *
 * D: setDTR - 1=True / 0=False
 *
 * R: setRTS - 1=True / 0=False
 *
 * W: Wait (time delay) - positive integer number (miliseconds)
 * @param {string} seqStr Sequence string to validate
 * @returns {boolean} Is the sequence string valid ?
 */ parcelHelpers.export(exports, "validateCustomResetStringSequence", ()=>validateCustomResetStringSequence);
/**
 * Custom reset strategy defined with a string.
 *
 * The sequenceString input string consists of individual commands divided by "|".
 *
 * Commands (e.g. R0) are defined by a code (R) and an argument (0).
 *
 * The commands are:
 *
 * D: setDTR - 1=True / 0=False
 *
 * R: setRTS - 1=True / 0=False
 *
 * W: Wait (time delay) - positive integer number (miliseconds)
 *
 * "D0|R1|W100|D1|R0|W50|D0" represents the classic reset strategy
 * @param {Transport} transport Transport class to perform serial communication.
 * @param {string} sequenceString Custom string sequence for reset strategy
 */ parcelHelpers.export(exports, "customReset", ()=>customReset);
const DEFAULT_RESET_DELAY = 50;
/**
 * Sleep for ms milliseconds
 * @param {number} ms Milliseconds to wait
 * @returns {Promise<void>}
 */ function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
async function classicReset(transport, resetDelay = DEFAULT_RESET_DELAY) {
    await transport.setDTR(false);
    await transport.setRTS(true);
    await sleep(100);
    await transport.setDTR(true);
    await transport.setRTS(false);
    await sleep(resetDelay);
    await transport.setDTR(false);
}
async function usbJTAGSerialReset(transport) {
    await transport.setRTS(false);
    await transport.setDTR(false);
    await sleep(100);
    await transport.setDTR(true);
    await transport.setRTS(false);
    await sleep(100);
    await transport.setRTS(true);
    await transport.setDTR(false);
    await transport.setRTS(true);
    await sleep(100);
    await transport.setRTS(false);
    await transport.setDTR(false);
}
async function hardReset(transport, usingUsbOtg = false) {
    if (usingUsbOtg) {
        await sleep(200);
        await transport.setRTS(false);
        await sleep(200);
    } else {
        await sleep(100);
        await transport.setRTS(false);
    }
}
function validateCustomResetStringSequence(seqStr) {
    const commands = [
        "D",
        "R",
        "W"
    ];
    const commandsList = seqStr.split("|");
    for (const cmd of commandsList){
        const code = cmd[0];
        const arg = cmd.slice(1);
        if (!commands.includes(code)) return false; // Invalid command code
        if (code === "D" || code === "R") {
            if (arg !== "0" && arg !== "1") return false; // Invalid argument for D and R commands
        } else if (code === "W") {
            const delay = parseInt(arg);
            if (isNaN(delay) || delay <= 0) return false; // Invalid argument for W command
        }
    }
    return true; // All commands are valid
}
async function customReset(transport, sequenceString) {
    const resetDictionary = {
        D: async (arg)=>await transport.setDTR(arg),
        R: async (arg)=>await transport.setRTS(arg),
        W: async (delay)=>await sleep(delay)
    };
    try {
        const isValidSequence = validateCustomResetStringSequence(sequenceString);
        if (!isValidSequence) return;
        const cmds = sequenceString.split("|");
        for (const cmd of cmds){
            const cmdKey = cmd[0];
            const cmdVal = cmd.slice(1);
            if (cmdKey === "W") await resetDictionary["W"](Number(cmdVal));
            else if (cmdKey === "D" || cmdKey === "R") await resetDictionary[cmdKey](cmdVal === "1");
        }
    } catch (error) {
        throw new Error("Invalid custom reset sequence");
    }
}
exports.default = {
    classicReset,
    customReset,
    hardReset,
    usbJTAGSerialReset,
    validateCustomResetStringSequence
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"94aIk":[function(require,module,exports) {
module.exports = function _atob(str) {
    return atob(str);
};

},{}],"93pWb":[function(require,module,exports) {
module.exports = require("3b211680cf3f1aa7")(require("8bc56d3f58072a15").getBundleURL("aNMIV") + "esp32.ba3be255.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("coo9C"));

},{"3b211680cf3f1aa7":"61B45","8bc56d3f58072a15":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
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
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"j2WuY":[function(require,module,exports) {
module.exports = Promise.all([
    require("23eb48efe57d73e9")(require("64cb87d52af59120").getBundleURL("aNMIV") + "esp32c3.0aeb83f1.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("23eb48efe57d73e9")(require("64cb87d52af59120").getBundleURL("aNMIV") + "esp32c2.a3cbe05b.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("ht3PZ"));

},{"23eb48efe57d73e9":"61B45","64cb87d52af59120":"lgJ39"}],"58YQi":[function(require,module,exports) {
module.exports = require("104e74ab7029027f")(require("47edf85126bce0f0").getBundleURL("aNMIV") + "esp32c3.0aeb83f1.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("jWOGH"));

},{"104e74ab7029027f":"61B45","47edf85126bce0f0":"lgJ39"}],"l62eG":[function(require,module,exports) {
module.exports = require("627956f4e62bb270")(require("c39284e852b2eb19").getBundleURL("aNMIV") + "esp32c6.72de65fb.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("8cEFT"));

},{"627956f4e62bb270":"61B45","c39284e852b2eb19":"lgJ39"}],"21ZLP":[function(require,module,exports) {
module.exports = require("60f89bbbff2714d0")(require("97eadfa202af8202").getBundleURL("aNMIV") + "esp32h2.af01b695.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("9rs4m"));

},{"60f89bbbff2714d0":"61B45","97eadfa202af8202":"lgJ39"}],"28eFl":[function(require,module,exports) {
module.exports = require("b7029afad508a1bf")(require("49aed48ef346c9b2").getBundleURL("aNMIV") + "esp32s3.5633c986.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("67QB9"));

},{"b7029afad508a1bf":"61B45","49aed48ef346c9b2":"lgJ39"}],"a1KTL":[function(require,module,exports) {
module.exports = require("b16cd77ebb3fb786")(require("bd400dde33341c34").getBundleURL("aNMIV") + "esp32s2.0e31b7e6.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("h7mqr"));

},{"b16cd77ebb3fb786":"61B45","bd400dde33341c34":"lgJ39"}],"6VKeT":[function(require,module,exports) {
module.exports = require("fbae1bdc5a69dcb4")(require("afdddacb04c120b5").getBundleURL("aNMIV") + "esp8266.235a2426.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("bK7XU"));

},{"fbae1bdc5a69dcb4":"61B45","afdddacb04c120b5":"lgJ39"}],"kk0za":[function(require,module,exports) {
module.exports = Promise.all([
    require("6b3f7073484cfe60")(require("1a0adbebe7da17c7").getBundleURL("aNMIV") + "esp32.ba3be255.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("6b3f7073484cfe60")(require("1a0adbebe7da17c7").getBundleURL("aNMIV") + "esp32p4.b24b4853.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("2HT9g"));

},{"6b3f7073484cfe60":"61B45","1a0adbebe7da17c7":"lgJ39"}],"4kWLt":[function(require,module,exports) {
/**
 * Represents a chip ROM with basic registers field and abstract functions.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ROM", ()=>ROM);
class ROM {
    /**
     * Get the chip erase size.
     * @param {number} offset - Offset to start erase.
     * @param {number} size - Size to erase.
     * @returns {number} The erase size of the chip as number.
     */ getEraseSize(offset, size) {
        return size;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aEnuJ":[function(require,module,exports) {
/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of
 * the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in
 * writing, software distributed under the License is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
 * OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing
 * permissions and limitations under the License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SerialPolyfillProtocol", ()=>SerialPolyfillProtocol);
/** a class used to control serial devices over WebUSB */ parcelHelpers.export(exports, "SerialPort", ()=>SerialPort);
parcelHelpers.export(exports, "serial", ()=>serial);
"use strict";
var SerialPolyfillProtocol;
(function(SerialPolyfillProtocol) {
    SerialPolyfillProtocol[SerialPolyfillProtocol["UsbCdcAcm"] = 0] = "UsbCdcAcm";
})(SerialPolyfillProtocol || (SerialPolyfillProtocol = {}));
const kSetLineCoding = 0x20;
const kSetControlLineState = 0x22;
const kSendBreak = 0x23;
const kDefaultBufferSize = 255;
const kDefaultDataBits = 8;
const kDefaultParity = "none";
const kDefaultStopBits = 1;
const kAcceptableDataBits = [
    16,
    8,
    7,
    6,
    5
];
const kAcceptableStopBits = [
    1,
    2
];
const kAcceptableParity = [
    "none",
    "even",
    "odd"
];
const kParityIndexMapping = [
    "none",
    "odd",
    "even"
];
const kStopBitsIndexMapping = [
    1,
    1.5,
    2
];
const kDefaultPolyfillOptions = {
    protocol: SerialPolyfillProtocol.UsbCdcAcm,
    usbControlInterfaceClass: 2,
    usbTransferInterfaceClass: 10
};
/**
 * Utility function to get the interface implementing a desired class.
 * @param {USBDevice} device The USB device.
 * @param {number} classCode The desired interface class.
 * @return {USBInterface} The first interface found that implements the desired
 * class.
 * @throws TypeError if no interface is found.
 */ function findInterface(device, classCode) {
    const configuration = device.configurations[0];
    for (const iface of configuration.interfaces){
        const alternate = iface.alternates[0];
        if (alternate.interfaceClass === classCode) return iface;
    }
    throw new TypeError(`Unable to find interface with class ${classCode}.`);
}
/**
 * Utility function to get an endpoint with a particular direction.
 * @param {USBInterface} iface The interface to search.
 * @param {USBDirection} direction The desired transfer direction.
 * @return {USBEndpoint} The first endpoint with the desired transfer direction.
 * @throws TypeError if no endpoint is found.
 */ function findEndpoint(iface, direction) {
    const alternate = iface.alternates[0];
    for (const endpoint of alternate.endpoints){
        if (endpoint.direction == direction) return endpoint;
    }
    throw new TypeError(`Interface ${iface.interfaceNumber} does not have an ` + `${direction} endpoint.`);
}
/**
 * Implementation of the underlying source API[1] which reads data from a USB
 * endpoint. This can be used to construct a ReadableStream.
 *
 * [1]: https://streams.spec.whatwg.org/#underlying-source-api
 */ class UsbEndpointUnderlyingSource {
    /**
     * Constructs a new UnderlyingSource that will pull data from the specified
     * endpoint on the given USB device.
     *
     * @param {USBDevice} device
     * @param {USBEndpoint} endpoint
     * @param {function} onError function to be called on error
     */ constructor(device, endpoint, onError){
        this.type = "bytes";
        this.device_ = device;
        this.endpoint_ = endpoint;
        this.onError_ = onError;
    }
    /**
     * Reads a chunk of data from the device.
     *
     * @param {ReadableByteStreamController} controller
     */ pull(controller) {
        (async ()=>{
            var _a;
            let chunkSize;
            if (controller.desiredSize) {
                const d = controller.desiredSize / this.endpoint_.packetSize;
                chunkSize = Math.ceil(d) * this.endpoint_.packetSize;
            } else chunkSize = this.endpoint_.packetSize;
            try {
                const result = await this.device_.transferIn(this.endpoint_.endpointNumber, chunkSize);
                if (result.status != "ok") {
                    controller.error(`USB error: ${result.status}`);
                    this.onError_();
                }
                if ((_a = result.data) === null || _a === void 0 ? void 0 : _a.buffer) {
                    const chunk = new Uint8Array(result.data.buffer, result.data.byteOffset, result.data.byteLength);
                    controller.enqueue(chunk);
                }
            } catch (error) {
                controller.error(error.toString());
                this.onError_();
            }
        })();
    }
}
/**
 * Implementation of the underlying sink API[2] which writes data to a USB
 * endpoint. This can be used to construct a WritableStream.
 *
 * [2]: https://streams.spec.whatwg.org/#underlying-sink-api
 */ class UsbEndpointUnderlyingSink {
    /**
     * Constructs a new UnderlyingSink that will write data to the specified
     * endpoint on the given USB device.
     *
     * @param {USBDevice} device
     * @param {USBEndpoint} endpoint
     * @param {function} onError function to be called on error
     */ constructor(device, endpoint, onError){
        this.device_ = device;
        this.endpoint_ = endpoint;
        this.onError_ = onError;
    }
    /**
     * Writes a chunk to the device.
     *
     * @param {Uint8Array} chunk
     * @param {WritableStreamDefaultController} controller
     */ async write(chunk, controller) {
        try {
            const result = await this.device_.transferOut(this.endpoint_.endpointNumber, chunk);
            if (result.status != "ok") {
                controller.error(result.status);
                this.onError_();
            }
        } catch (error) {
            controller.error(error.toString());
            this.onError_();
        }
    }
}
class SerialPort {
    /**
     * constructor taking a WebUSB device that creates a SerialPort instance.
     * @param {USBDevice} device A device acquired from the WebUSB API
     * @param {SerialPolyfillOptions} polyfillOptions Optional options to
     * configure the polyfill.
     */ constructor(device, polyfillOptions){
        this.polyfillOptions_ = Object.assign(Object.assign({}, kDefaultPolyfillOptions), polyfillOptions);
        this.outputSignals_ = {
            dataTerminalReady: false,
            requestToSend: false,
            break: false
        };
        this.device_ = device;
        this.controlInterface_ = findInterface(this.device_, this.polyfillOptions_.usbControlInterfaceClass);
        this.transferInterface_ = findInterface(this.device_, this.polyfillOptions_.usbTransferInterfaceClass);
        this.inEndpoint_ = findEndpoint(this.transferInterface_, "in");
        this.outEndpoint_ = findEndpoint(this.transferInterface_, "out");
    }
    /**
     * Getter for the readable attribute. Constructs a new ReadableStream as
     * necessary.
     * @return {ReadableStream} the current readable stream
     */ get readable() {
        var _a;
        if (!this.readable_ && this.device_.opened) this.readable_ = new ReadableStream(new UsbEndpointUnderlyingSource(this.device_, this.inEndpoint_, ()=>{
            this.readable_ = null;
        }), {
            highWaterMark: (_a = this.serialOptions_.bufferSize) !== null && _a !== void 0 ? _a : kDefaultBufferSize
        });
        return this.readable_;
    }
    /**
     * Getter for the writable attribute. Constructs a new WritableStream as
     * necessary.
     * @return {WritableStream} the current writable stream
     */ get writable() {
        var _a;
        if (!this.writable_ && this.device_.opened) this.writable_ = new WritableStream(new UsbEndpointUnderlyingSink(this.device_, this.outEndpoint_, ()=>{
            this.writable_ = null;
        }), new ByteLengthQueuingStrategy({
            highWaterMark: (_a = this.serialOptions_.bufferSize) !== null && _a !== void 0 ? _a : kDefaultBufferSize
        }));
        return this.writable_;
    }
    /**
     * a function that opens the device and claims all interfaces needed to
     * control and communicate to and from the serial device
     * @param {SerialOptions} options Object containing serial options
     * @return {Promise<void>} A promise that will resolve when device is ready
     * for communication
     */ async open(options) {
        this.serialOptions_ = options;
        this.validateOptions();
        try {
            await this.device_.open();
            if (this.device_.configuration === null) await this.device_.selectConfiguration(1);
            await this.device_.claimInterface(this.controlInterface_.interfaceNumber);
            if (this.controlInterface_ !== this.transferInterface_) await this.device_.claimInterface(this.transferInterface_.interfaceNumber);
            await this.setLineCoding();
            await this.setSignals({
                dataTerminalReady: true
            });
        } catch (error) {
            if (this.device_.opened) await this.device_.close();
            throw new Error("Error setting up device: " + error.toString());
        }
    }
    /**
     * Closes the port.
     *
     * @return {Promise<void>} A promise that will resolve when the port is
     * closed.
     */ async close() {
        const promises = [];
        if (this.readable_) promises.push(this.readable_.cancel());
        if (this.writable_) promises.push(this.writable_.abort());
        await Promise.all(promises);
        this.readable_ = null;
        this.writable_ = null;
        if (this.device_.opened) {
            await this.setSignals({
                dataTerminalReady: false,
                requestToSend: false
            });
            await this.device_.close();
        }
    }
    /**
     * Forgets the port.
     *
     * @return {Promise<void>} A promise that will resolve when the port is
     * forgotten.
     */ async forget() {
        return this.device_.forget();
    }
    /**
     * A function that returns properties of the device.
     * @return {SerialPortInfo} Device properties.
     */ getInfo() {
        return {
            usbVendorId: this.device_.vendorId,
            usbProductId: this.device_.productId
        };
    }
    /**
     * A function used to change the serial settings of the device
     * @param {object} options the object which carries serial settings data
     * @return {Promise<void>} A promise that will resolve when the options are
     * set
     */ reconfigure(options) {
        this.serialOptions_ = Object.assign(Object.assign({}, this.serialOptions_), options);
        this.validateOptions();
        return this.setLineCoding();
    }
    /**
     * Sets control signal state for the port.
     * @param {SerialOutputSignals} signals The signals to enable or disable.
     * @return {Promise<void>} a promise that is resolved when the signal state
     * has been changed.
     */ async setSignals(signals) {
        this.outputSignals_ = Object.assign(Object.assign({}, this.outputSignals_), signals);
        if (signals.dataTerminalReady !== undefined || signals.requestToSend !== undefined) {
            // The Set_Control_Line_State command expects a bitmap containing the
            // values of all output signals that should be enabled or disabled.
            //
            // Ref: USB CDC specification version 1.1 §6.2.14.
            const value = (this.outputSignals_.dataTerminalReady ? 1 : 0) | (this.outputSignals_.requestToSend ? 2 : 0);
            await this.device_.controlTransferOut({
                "requestType": "class",
                "recipient": "interface",
                "request": kSetControlLineState,
                "value": value,
                "index": this.controlInterface_.interfaceNumber
            });
        }
        if (signals.break !== undefined) {
            // The SendBreak command expects to be given a duration for how long the
            // break signal should be asserted. Passing 0xFFFF enables the signal
            // until 0x0000 is send.
            //
            // Ref: USB CDC specification version 1.1 §6.2.15.
            const value = this.outputSignals_.break ? 0xFFFF : 0x0000;
            await this.device_.controlTransferOut({
                "requestType": "class",
                "recipient": "interface",
                "request": kSendBreak,
                "value": value,
                "index": this.controlInterface_.interfaceNumber
            });
        }
    }
    /**
     * Checks the serial options for validity and throws an error if it is
     * not valid
     */ validateOptions() {
        if (!this.isValidBaudRate(this.serialOptions_.baudRate)) throw new RangeError("invalid Baud Rate " + this.serialOptions_.baudRate);
        if (!this.isValidDataBits(this.serialOptions_.dataBits)) throw new RangeError("invalid dataBits " + this.serialOptions_.dataBits);
        if (!this.isValidStopBits(this.serialOptions_.stopBits)) throw new RangeError("invalid stopBits " + this.serialOptions_.stopBits);
        if (!this.isValidParity(this.serialOptions_.parity)) throw new RangeError("invalid parity " + this.serialOptions_.parity);
    }
    /**
     * Checks the baud rate for validity
     * @param {number} baudRate the baud rate to check
     * @return {boolean} A boolean that reflects whether the baud rate is valid
     */ isValidBaudRate(baudRate) {
        return baudRate % 1 === 0;
    }
    /**
     * Checks the data bits for validity
     * @param {number} dataBits the data bits to check
     * @return {boolean} A boolean that reflects whether the data bits setting is
     * valid
     */ isValidDataBits(dataBits) {
        if (typeof dataBits === "undefined") return true;
        return kAcceptableDataBits.includes(dataBits);
    }
    /**
     * Checks the stop bits for validity
     * @param {number} stopBits the stop bits to check
     * @return {boolean} A boolean that reflects whether the stop bits setting is
     * valid
     */ isValidStopBits(stopBits) {
        if (typeof stopBits === "undefined") return true;
        return kAcceptableStopBits.includes(stopBits);
    }
    /**
     * Checks the parity for validity
     * @param {string} parity the parity to check
     * @return {boolean} A boolean that reflects whether the parity is valid
     */ isValidParity(parity) {
        if (typeof parity === "undefined") return true;
        return kAcceptableParity.includes(parity);
    }
    /**
     * sends the options alog the control interface to set them on the device
     * @return {Promise} a promise that will resolve when the options are set
     */ async setLineCoding() {
        var _a, _b, _c;
        // Ref: USB CDC specification version 1.1 §6.2.12.
        const buffer = new ArrayBuffer(7);
        const view = new DataView(buffer);
        view.setUint32(0, this.serialOptions_.baudRate, true);
        view.setUint8(4, kStopBitsIndexMapping.indexOf((_a = this.serialOptions_.stopBits) !== null && _a !== void 0 ? _a : kDefaultStopBits));
        view.setUint8(5, kParityIndexMapping.indexOf((_b = this.serialOptions_.parity) !== null && _b !== void 0 ? _b : kDefaultParity));
        view.setUint8(6, (_c = this.serialOptions_.dataBits) !== null && _c !== void 0 ? _c : kDefaultDataBits);
        const result = await this.device_.controlTransferOut({
            "requestType": "class",
            "recipient": "interface",
            "request": kSetLineCoding,
            "value": 0x00,
            "index": this.controlInterface_.interfaceNumber
        }, buffer);
        if (result.status != "ok") throw new DOMException("NetworkError", "Failed to set line coding.");
    }
}
/** implementation of the global navigator.serial object */ class Serial {
    /**
     * Requests permission to access a new port.
     *
     * @param {SerialPortRequestOptions} options
     * @param {SerialPolyfillOptions} polyfillOptions
     * @return {Promise<SerialPort>}
     */ async requestPort(options, polyfillOptions) {
        polyfillOptions = Object.assign(Object.assign({}, kDefaultPolyfillOptions), polyfillOptions);
        const usbFilters = [];
        if (options && options.filters) for (const filter of options.filters){
            const usbFilter = {
                classCode: polyfillOptions.usbControlInterfaceClass
            };
            if (filter.usbVendorId !== undefined) usbFilter.vendorId = filter.usbVendorId;
            if (filter.usbProductId !== undefined) usbFilter.productId = filter.usbProductId;
            usbFilters.push(usbFilter);
        }
        if (usbFilters.length === 0) usbFilters.push({
            classCode: polyfillOptions.usbControlInterfaceClass
        });
        const device = await navigator.usb.requestDevice({
            "filters": usbFilters
        });
        const port = new SerialPort(device, polyfillOptions);
        return port;
    }
    /**
     * Get the set of currently available ports.
     *
     * @param {SerialPolyfillOptions} polyfillOptions Polyfill configuration that
     * should be applied to these ports.
     * @return {Promise<SerialPort[]>} a promise that is resolved with a list of
     * ports.
     */ async getPorts(polyfillOptions) {
        polyfillOptions = Object.assign(Object.assign({}, kDefaultPolyfillOptions), polyfillOptions);
        const devices = await navigator.usb.getDevices();
        const ports = [];
        devices.forEach((device)=>{
            try {
                const port = new SerialPort(device, polyfillOptions);
                ports.push(port);
            } catch (e) {
            // Skip unrecognized port.
            }
        });
        return ports;
    }
}
const serial = new Serial();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3W9vH":[function(require,module,exports) {
var process = require("4ff5810b0c3ba18e");
!function(e, t) {
    var i, s;
    module.exports = t();
}(globalThis, ()=>(()=>{
        "use strict";
        var e = {
            4567: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.AccessibilityManager = void 0;
                const n = i(9042), o = i(9924), a = i(844), h = i(4725), c = i(2585), l = i(3656);
                let d = t.AccessibilityManager = class extends a.Disposable {
                    constructor(e, t, i, s){
                        super(), this._terminal = e, this._coreBrowserService = i, this._renderService = s, this._rowColumns = new WeakMap, this._liveRegionLineCount = 0, this._charsToConsume = [], this._charsToAnnounce = "", this._accessibilityContainer = this._coreBrowserService.mainDocument.createElement("div"), this._accessibilityContainer.classList.add("xterm-accessibility"), this._rowContainer = this._coreBrowserService.mainDocument.createElement("div"), this._rowContainer.setAttribute("role", "list"), this._rowContainer.classList.add("xterm-accessibility-tree"), this._rowElements = [];
                        for(let e = 0; e < this._terminal.rows; e++)this._rowElements[e] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[e]);
                        if (this._topBoundaryFocusListener = (e)=>this._handleBoundaryFocus(e, 0), this._bottomBoundaryFocusListener = (e)=>this._handleBoundaryFocus(e, 1), this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions(), this._accessibilityContainer.appendChild(this._rowContainer), this._liveRegion = this._coreBrowserService.mainDocument.createElement("div"), this._liveRegion.classList.add("live-region"), this._liveRegion.setAttribute("aria-live", "assertive"), this._accessibilityContainer.appendChild(this._liveRegion), this._liveRegionDebouncer = this.register(new o.TimeBasedDebouncer(this._renderRows.bind(this))), !this._terminal.element) throw new Error("Cannot enable accessibility before Terminal.open");
                        this._terminal.element.insertAdjacentElement("afterbegin", this._accessibilityContainer), this.register(this._terminal.onResize((e)=>this._handleResize(e.rows))), this.register(this._terminal.onRender((e)=>this._refreshRows(e.start, e.end))), this.register(this._terminal.onScroll(()=>this._refreshRows())), this.register(this._terminal.onA11yChar((e)=>this._handleChar(e))), this.register(this._terminal.onLineFeed(()=>this._handleChar("\n"))), this.register(this._terminal.onA11yTab((e)=>this._handleTab(e))), this.register(this._terminal.onKey((e)=>this._handleKey(e.key))), this.register(this._terminal.onBlur(()=>this._clearLiveRegion())), this.register(this._renderService.onDimensionsChange(()=>this._refreshRowsDimensions())), this.register((0, l.addDisposableDomListener)(document, "selectionchange", ()=>this._handleSelectionChange())), this.register(this._coreBrowserService.onDprChange(()=>this._refreshRowsDimensions())), this._refreshRows(), this.register((0, a.toDisposable)(()=>{
                            this._accessibilityContainer.remove(), this._rowElements.length = 0;
                        }));
                    }
                    _handleTab(e) {
                        for(let t = 0; t < e; t++)this._handleChar(" ");
                    }
                    _handleChar(e) {
                        this._liveRegionLineCount < 21 && (this._charsToConsume.length > 0 ? this._charsToConsume.shift() !== e && (this._charsToAnnounce += e) : this._charsToAnnounce += e, "\n" === e && (this._liveRegionLineCount++, 21 === this._liveRegionLineCount && (this._liveRegion.textContent += n.tooMuchOutput)));
                    }
                    _clearLiveRegion() {
                        this._liveRegion.textContent = "", this._liveRegionLineCount = 0;
                    }
                    _handleKey(e) {
                        this._clearLiveRegion(), /\p{Control}/u.test(e) || this._charsToConsume.push(e);
                    }
                    _refreshRows(e, t) {
                        this._liveRegionDebouncer.refresh(e, t, this._terminal.rows);
                    }
                    _renderRows(e, t) {
                        const i = this._terminal.buffer, s = i.lines.length.toString();
                        for(let r = e; r <= t; r++){
                            const e = i.lines.get(i.ydisp + r), t = [], n = e?.translateToString(!0, void 0, void 0, t) || "", o = (i.ydisp + r + 1).toString(), a = this._rowElements[r];
                            a && (0 === n.length ? (a.innerText = "\xa0", this._rowColumns.set(a, [
                                0,
                                1
                            ])) : (a.textContent = n, this._rowColumns.set(a, t)), a.setAttribute("aria-posinset", o), a.setAttribute("aria-setsize", s));
                        }
                        this._announceCharacters();
                    }
                    _announceCharacters() {
                        0 !== this._charsToAnnounce.length && (this._liveRegion.textContent += this._charsToAnnounce, this._charsToAnnounce = "");
                    }
                    _handleBoundaryFocus(e, t) {
                        const i = e.target, s = this._rowElements[0 === t ? 1 : this._rowElements.length - 2];
                        if (i.getAttribute("aria-posinset") === (0 === t ? "1" : `${this._terminal.buffer.lines.length}`)) return;
                        if (e.relatedTarget !== s) return;
                        let r, n;
                        if (0 === t ? (r = i, n = this._rowElements.pop(), this._rowContainer.removeChild(n)) : (r = this._rowElements.shift(), n = i, this._rowContainer.removeChild(r)), r.removeEventListener("focus", this._topBoundaryFocusListener), n.removeEventListener("focus", this._bottomBoundaryFocusListener), 0 === t) {
                            const e = this._createAccessibilityTreeNode();
                            this._rowElements.unshift(e), this._rowContainer.insertAdjacentElement("afterbegin", e);
                        } else {
                            const e = this._createAccessibilityTreeNode();
                            this._rowElements.push(e), this._rowContainer.appendChild(e);
                        }
                        this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._terminal.scrollLines(0 === t ? -1 : 1), this._rowElements[0 === t ? 1 : this._rowElements.length - 2].focus(), e.preventDefault(), e.stopImmediatePropagation();
                    }
                    _handleSelectionChange() {
                        if (0 === this._rowElements.length) return;
                        const e = document.getSelection();
                        if (!e) return;
                        if (e.isCollapsed) return void (this._rowContainer.contains(e.anchorNode) && this._terminal.clearSelection());
                        if (!e.anchorNode || !e.focusNode) return void console.error("anchorNode and/or focusNode are null");
                        let t = {
                            node: e.anchorNode,
                            offset: e.anchorOffset
                        }, i = {
                            node: e.focusNode,
                            offset: e.focusOffset
                        };
                        if ((t.node.compareDocumentPosition(i.node) & Node.DOCUMENT_POSITION_PRECEDING || t.node === i.node && t.offset > i.offset) && ([t, i] = [
                            i,
                            t
                        ]), t.node.compareDocumentPosition(this._rowElements[0]) & (Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING) && (t = {
                            node: this._rowElements[0].childNodes[0],
                            offset: 0
                        }), !this._rowContainer.contains(t.node)) return;
                        const s = this._rowElements.slice(-1)[0];
                        if (i.node.compareDocumentPosition(s) & (Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_PRECEDING) && (i = {
                            node: s,
                            offset: s.textContent?.length ?? 0
                        }), !this._rowContainer.contains(i.node)) return;
                        const r = ({ node: e, offset: t })=>{
                            const i = e instanceof Text ? e.parentNode : e;
                            let s = parseInt(i?.getAttribute("aria-posinset"), 10) - 1;
                            if (isNaN(s)) return console.warn("row is invalid. Race condition?"), null;
                            const r = this._rowColumns.get(i);
                            if (!r) return console.warn("columns is null. Race condition?"), null;
                            let n = t < r.length ? r[t] : r.slice(-1)[0] + 1;
                            return n >= this._terminal.cols && (++s, n = 0), {
                                row: s,
                                column: n
                            };
                        }, n = r(t), o = r(i);
                        if (n && o) {
                            if (n.row > o.row || n.row === o.row && n.column >= o.column) throw new Error("invalid range");
                            this._terminal.select(n.column, n.row, (o.row - n.row) * this._terminal.cols - n.column + o.column);
                        }
                    }
                    _handleResize(e) {
                        this._rowElements[this._rowElements.length - 1].removeEventListener("focus", this._bottomBoundaryFocusListener);
                        for(let e = this._rowContainer.children.length; e < this._terminal.rows; e++)this._rowElements[e] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[e]);
                        for(; this._rowElements.length > e;)this._rowContainer.removeChild(this._rowElements.pop());
                        this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions();
                    }
                    _createAccessibilityTreeNode() {
                        const e = this._coreBrowserService.mainDocument.createElement("div");
                        return e.setAttribute("role", "listitem"), e.tabIndex = -1, this._refreshRowDimensions(e), e;
                    }
                    _refreshRowsDimensions() {
                        if (this._renderService.dimensions.css.cell.height) {
                            this._accessibilityContainer.style.width = `${this._renderService.dimensions.css.canvas.width}px`, this._rowElements.length !== this._terminal.rows && this._handleResize(this._terminal.rows);
                            for(let e = 0; e < this._terminal.rows; e++)this._refreshRowDimensions(this._rowElements[e]);
                        }
                    }
                    _refreshRowDimensions(e) {
                        e.style.height = `${this._renderService.dimensions.css.cell.height}px`;
                    }
                };
                t.AccessibilityManager = d = s([
                    r(1, c.IInstantiationService),
                    r(2, h.ICoreBrowserService),
                    r(3, h.IRenderService)
                ], d);
            },
            3614: (e, t)=>{
                function i(e) {
                    return e.replace(/\r?\n/g, "\r");
                }
                function s(e, t) {
                    return t ? "\x1b[200~" + e + "\x1b[201~" : e;
                }
                function r(e, t, r, n) {
                    e = s(e = i(e), r.decPrivateModes.bracketedPasteMode && !0 !== n.rawOptions.ignoreBracketedPasteMode), r.triggerDataEvent(e, !0), t.value = "";
                }
                function n(e, t, i) {
                    const s = i.getBoundingClientRect(), r = e.clientX - s.left - 10, n = e.clientY - s.top - 10;
                    t.style.width = "20px", t.style.height = "20px", t.style.left = `${r}px`, t.style.top = `${n}px`, t.style.zIndex = "1000", t.focus();
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.rightClickHandler = t.moveTextAreaUnderMouseCursor = t.paste = t.handlePasteEvent = t.copyHandler = t.bracketTextForPaste = t.prepareTextForTerminal = void 0, t.prepareTextForTerminal = i, t.bracketTextForPaste = s, t.copyHandler = function(e, t) {
                    e.clipboardData && e.clipboardData.setData("text/plain", t.selectionText), e.preventDefault();
                }, t.handlePasteEvent = function(e, t, i, s) {
                    e.stopPropagation(), e.clipboardData && r(e.clipboardData.getData("text/plain"), t, i, s);
                }, t.paste = r, t.moveTextAreaUnderMouseCursor = n, t.rightClickHandler = function(e, t, i, s, r) {
                    n(e, t, i), r && s.rightClickSelect(e), t.value = s.selectionText, t.select();
                };
            },
            7239: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ColorContrastCache = void 0;
                const s = i(1505);
                t.ColorContrastCache = class {
                    constructor(){
                        this._color = new s.TwoKeyMap, this._css = new s.TwoKeyMap;
                    }
                    setCss(e, t, i) {
                        this._css.set(e, t, i);
                    }
                    getCss(e, t) {
                        return this._css.get(e, t);
                    }
                    setColor(e, t, i) {
                        this._color.set(e, t, i);
                    }
                    getColor(e, t) {
                        return this._color.get(e, t);
                    }
                    clear() {
                        this._color.clear(), this._css.clear();
                    }
                };
            },
            3656: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.addDisposableDomListener = void 0, t.addDisposableDomListener = function(e, t, i, s) {
                    e.addEventListener(t, i, s);
                    let r = !1;
                    return {
                        dispose: ()=>{
                            r || (r = !0, e.removeEventListener(t, i, s));
                        }
                    };
                };
            },
            3551: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Linkifier = void 0;
                const n = i(3656), o = i(8460), a = i(844), h = i(2585), c = i(4725);
                let l = t.Linkifier = class extends a.Disposable {
                    get currentLink() {
                        return this._currentLink;
                    }
                    constructor(e, t, i, s, r){
                        super(), this._element = e, this._mouseService = t, this._renderService = i, this._bufferService = s, this._linkProviderService = r, this._linkCacheDisposables = [], this._isMouseOut = !0, this._wasResized = !1, this._activeLine = -1, this._onShowLinkUnderline = this.register(new o.EventEmitter), this.onShowLinkUnderline = this._onShowLinkUnderline.event, this._onHideLinkUnderline = this.register(new o.EventEmitter), this.onHideLinkUnderline = this._onHideLinkUnderline.event, this.register((0, a.getDisposeArrayDisposable)(this._linkCacheDisposables)), this.register((0, a.toDisposable)(()=>{
                            this._lastMouseEvent = void 0, this._activeProviderReplies?.clear();
                        })), this.register(this._bufferService.onResize(()=>{
                            this._clearCurrentLink(), this._wasResized = !0;
                        })), this.register((0, n.addDisposableDomListener)(this._element, "mouseleave", ()=>{
                            this._isMouseOut = !0, this._clearCurrentLink();
                        })), this.register((0, n.addDisposableDomListener)(this._element, "mousemove", this._handleMouseMove.bind(this))), this.register((0, n.addDisposableDomListener)(this._element, "mousedown", this._handleMouseDown.bind(this))), this.register((0, n.addDisposableDomListener)(this._element, "mouseup", this._handleMouseUp.bind(this)));
                    }
                    _handleMouseMove(e) {
                        this._lastMouseEvent = e;
                        const t = this._positionFromMouseEvent(e, this._element, this._mouseService);
                        if (!t) return;
                        this._isMouseOut = !1;
                        const i = e.composedPath();
                        for(let e = 0; e < i.length; e++){
                            const t = i[e];
                            if (t.classList.contains("xterm")) break;
                            if (t.classList.contains("xterm-hover")) return;
                        }
                        this._lastBufferCell && t.x === this._lastBufferCell.x && t.y === this._lastBufferCell.y || (this._handleHover(t), this._lastBufferCell = t);
                    }
                    _handleHover(e) {
                        if (this._activeLine !== e.y || this._wasResized) return this._clearCurrentLink(), this._askForLink(e, !1), void (this._wasResized = !1);
                        this._currentLink && this._linkAtPosition(this._currentLink.link, e) || (this._clearCurrentLink(), this._askForLink(e, !0));
                    }
                    _askForLink(e, t) {
                        this._activeProviderReplies && t || (this._activeProviderReplies?.forEach((e)=>{
                            e?.forEach((e)=>{
                                e.link.dispose && e.link.dispose();
                            });
                        }), this._activeProviderReplies = new Map, this._activeLine = e.y);
                        let i = !1;
                        for (const [s, r] of this._linkProviderService.linkProviders.entries())if (t) {
                            const t = this._activeProviderReplies?.get(s);
                            t && (i = this._checkLinkProviderResult(s, e, i));
                        } else r.provideLinks(e.y, (t)=>{
                            if (this._isMouseOut) return;
                            const r = t?.map((e)=>({
                                    link: e
                                }));
                            this._activeProviderReplies?.set(s, r), i = this._checkLinkProviderResult(s, e, i), this._activeProviderReplies?.size === this._linkProviderService.linkProviders.length && this._removeIntersectingLinks(e.y, this._activeProviderReplies);
                        });
                    }
                    _removeIntersectingLinks(e, t) {
                        const i = new Set;
                        for(let s = 0; s < t.size; s++){
                            const r = t.get(s);
                            if (r) for(let t = 0; t < r.length; t++){
                                const s = r[t], n = s.link.range.start.y < e ? 0 : s.link.range.start.x, o = s.link.range.end.y > e ? this._bufferService.cols : s.link.range.end.x;
                                for(let e = n; e <= o; e++){
                                    if (i.has(e)) {
                                        r.splice(t--, 1);
                                        break;
                                    }
                                    i.add(e);
                                }
                            }
                        }
                    }
                    _checkLinkProviderResult(e, t, i) {
                        if (!this._activeProviderReplies) return i;
                        const s = this._activeProviderReplies.get(e);
                        let r = !1;
                        for(let t = 0; t < e; t++)this._activeProviderReplies.has(t) && !this._activeProviderReplies.get(t) || (r = !0);
                        if (!r && s) {
                            const e = s.find((e)=>this._linkAtPosition(e.link, t));
                            e && (i = !0, this._handleNewLink(e));
                        }
                        if (this._activeProviderReplies.size === this._linkProviderService.linkProviders.length && !i) for(let e = 0; e < this._activeProviderReplies.size; e++){
                            const s = this._activeProviderReplies.get(e)?.find((e)=>this._linkAtPosition(e.link, t));
                            if (s) {
                                i = !0, this._handleNewLink(s);
                                break;
                            }
                        }
                        return i;
                    }
                    _handleMouseDown() {
                        this._mouseDownLink = this._currentLink;
                    }
                    _handleMouseUp(e) {
                        if (!this._currentLink) return;
                        const t = this._positionFromMouseEvent(e, this._element, this._mouseService);
                        t && this._mouseDownLink === this._currentLink && this._linkAtPosition(this._currentLink.link, t) && this._currentLink.link.activate(e, this._currentLink.link.text);
                    }
                    _clearCurrentLink(e, t) {
                        this._currentLink && this._lastMouseEvent && (!e || !t || this._currentLink.link.range.start.y >= e && this._currentLink.link.range.end.y <= t) && (this._linkLeave(this._element, this._currentLink.link, this._lastMouseEvent), this._currentLink = void 0, (0, a.disposeArray)(this._linkCacheDisposables));
                    }
                    _handleNewLink(e) {
                        if (!this._lastMouseEvent) return;
                        const t = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
                        t && this._linkAtPosition(e.link, t) && (this._currentLink = e, this._currentLink.state = {
                            decorations: {
                                underline: void 0 === e.link.decorations || e.link.decorations.underline,
                                pointerCursor: void 0 === e.link.decorations || e.link.decorations.pointerCursor
                            },
                            isHovered: !0
                        }, this._linkHover(this._element, e.link, this._lastMouseEvent), e.link.decorations = {}, Object.defineProperties(e.link.decorations, {
                            pointerCursor: {
                                get: ()=>this._currentLink?.state?.decorations.pointerCursor,
                                set: (e)=>{
                                    this._currentLink?.state && this._currentLink.state.decorations.pointerCursor !== e && (this._currentLink.state.decorations.pointerCursor = e, this._currentLink.state.isHovered && this._element.classList.toggle("xterm-cursor-pointer", e));
                                }
                            },
                            underline: {
                                get: ()=>this._currentLink?.state?.decorations.underline,
                                set: (t)=>{
                                    this._currentLink?.state && this._currentLink?.state?.decorations.underline !== t && (this._currentLink.state.decorations.underline = t, this._currentLink.state.isHovered && this._fireUnderlineEvent(e.link, t));
                                }
                            }
                        }), this._linkCacheDisposables.push(this._renderService.onRenderedViewportChange((e)=>{
                            if (!this._currentLink) return;
                            const t = 0 === e.start ? 0 : e.start + 1 + this._bufferService.buffer.ydisp, i = this._bufferService.buffer.ydisp + 1 + e.end;
                            if (this._currentLink.link.range.start.y >= t && this._currentLink.link.range.end.y <= i && (this._clearCurrentLink(t, i), this._lastMouseEvent)) {
                                const e = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
                                e && this._askForLink(e, !1);
                            }
                        })));
                    }
                    _linkHover(e, t, i) {
                        this._currentLink?.state && (this._currentLink.state.isHovered = !0, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t, !0), this._currentLink.state.decorations.pointerCursor && e.classList.add("xterm-cursor-pointer")), t.hover && t.hover(i, t.text);
                    }
                    _fireUnderlineEvent(e, t) {
                        const i = e.range, s = this._bufferService.buffer.ydisp, r = this._createLinkUnderlineEvent(i.start.x - 1, i.start.y - s - 1, i.end.x, i.end.y - s - 1, void 0);
                        (t ? this._onShowLinkUnderline : this._onHideLinkUnderline).fire(r);
                    }
                    _linkLeave(e, t, i) {
                        this._currentLink?.state && (this._currentLink.state.isHovered = !1, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t, !1), this._currentLink.state.decorations.pointerCursor && e.classList.remove("xterm-cursor-pointer")), t.leave && t.leave(i, t.text);
                    }
                    _linkAtPosition(e, t) {
                        const i = e.range.start.y * this._bufferService.cols + e.range.start.x, s = e.range.end.y * this._bufferService.cols + e.range.end.x, r = t.y * this._bufferService.cols + t.x;
                        return i <= r && r <= s;
                    }
                    _positionFromMouseEvent(e, t, i) {
                        const s = i.getCoords(e, t, this._bufferService.cols, this._bufferService.rows);
                        if (s) return {
                            x: s[0],
                            y: s[1] + this._bufferService.buffer.ydisp
                        };
                    }
                    _createLinkUnderlineEvent(e, t, i, s, r) {
                        return {
                            x1: e,
                            y1: t,
                            x2: i,
                            y2: s,
                            cols: this._bufferService.cols,
                            fg: r
                        };
                    }
                };
                t.Linkifier = l = s([
                    r(1, c.IMouseService),
                    r(2, c.IRenderService),
                    r(3, h.IBufferService),
                    r(4, c.ILinkProviderService)
                ], l);
            },
            9042: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.tooMuchOutput = t.promptLabel = void 0, t.promptLabel = "Terminal input", t.tooMuchOutput = "Too much output to announce, navigate to rows manually to read";
            },
            3730: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.OscLinkProvider = void 0;
                const n = i(511), o = i(2585);
                let a = t.OscLinkProvider = class {
                    constructor(e, t, i){
                        this._bufferService = e, this._optionsService = t, this._oscLinkService = i;
                    }
                    provideLinks(e, t) {
                        const i = this._bufferService.buffer.lines.get(e - 1);
                        if (!i) return void t(void 0);
                        const s = [], r = this._optionsService.rawOptions.linkHandler, o = new n.CellData, a = i.getTrimmedLength();
                        let c = -1, l = -1, d = !1;
                        for(let t = 0; t < a; t++)if (-1 !== l || i.hasContent(t)) {
                            if (i.loadCell(t, o), o.hasExtendedAttrs() && o.extended.urlId) {
                                if (-1 === l) {
                                    l = t, c = o.extended.urlId;
                                    continue;
                                }
                                d = o.extended.urlId !== c;
                            } else -1 !== l && (d = !0);
                            if (d || -1 !== l && t === a - 1) {
                                const i = this._oscLinkService.getLinkData(c)?.uri;
                                if (i) {
                                    const n = {
                                        start: {
                                            x: l + 1,
                                            y: e
                                        },
                                        end: {
                                            x: t + (d || t !== a - 1 ? 0 : 1),
                                            y: e
                                        }
                                    };
                                    let o = !1;
                                    if (!r?.allowNonHttpProtocols) try {
                                        const e = new URL(i);
                                        [
                                            "http:",
                                            "https:"
                                        ].includes(e.protocol) || (o = !0);
                                    } catch (e) {
                                        o = !0;
                                    }
                                    o || s.push({
                                        text: i,
                                        range: n,
                                        activate: (e, t)=>r ? r.activate(e, t, n) : h(0, t),
                                        hover: (e, t)=>r?.hover?.(e, t, n),
                                        leave: (e, t)=>r?.leave?.(e, t, n)
                                    });
                                }
                                d = !1, o.hasExtendedAttrs() && o.extended.urlId ? (l = t, c = o.extended.urlId) : (l = -1, c = -1);
                            }
                        }
                        t(s);
                    }
                };
                function h(e, t) {
                    if (confirm(`Do you want to navigate to ${t}?\n\nWARNING: This link could potentially be dangerous`)) {
                        const e = window.open();
                        if (e) {
                            try {
                                e.opener = null;
                            } catch  {}
                            e.location.href = t;
                        } else console.warn("Opening link blocked as opener could not be cleared");
                    }
                }
                t.OscLinkProvider = a = s([
                    r(0, o.IBufferService),
                    r(1, o.IOptionsService),
                    r(2, o.IOscLinkService)
                ], a);
            },
            6193: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.RenderDebouncer = void 0, t.RenderDebouncer = class {
                    constructor(e, t){
                        this._renderCallback = e, this._coreBrowserService = t, this._refreshCallbacks = [];
                    }
                    dispose() {
                        this._animationFrame && (this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
                    }
                    addRefreshCallback(e) {
                        return this._refreshCallbacks.push(e), this._animationFrame || (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(()=>this._innerRefresh())), this._animationFrame;
                    }
                    refresh(e, t, i) {
                        this._rowCount = i, e = void 0 !== e ? e : 0, t = void 0 !== t ? t : this._rowCount - 1, this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, e) : e, this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, t) : t, this._animationFrame || (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(()=>this._innerRefresh()));
                    }
                    _innerRefresh() {
                        if (this._animationFrame = void 0, void 0 === this._rowStart || void 0 === this._rowEnd || void 0 === this._rowCount) return void this._runRefreshCallbacks();
                        const e = Math.max(this._rowStart, 0), t = Math.min(this._rowEnd, this._rowCount - 1);
                        this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(e, t), this._runRefreshCallbacks();
                    }
                    _runRefreshCallbacks() {
                        for (const e of this._refreshCallbacks)e(0);
                        this._refreshCallbacks = [];
                    }
                };
            },
            3236: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Terminal = void 0;
                const s = i(3614), r = i(3656), n = i(3551), o = i(9042), a = i(3730), h = i(1680), c = i(3107), l = i(5744), d = i(2950), _ = i(1296), u = i(428), f = i(4269), v = i(5114), p = i(8934), g = i(3230), m = i(9312), S = i(4725), C = i(6731), b = i(8055), w = i(8969), y = i(8460), E = i(844), k = i(6114), L = i(8437), D = i(2584), R = i(7399), x = i(5941), A = i(9074), B = i(2585), T = i(5435), M = i(4567), O = i(779);
                class P extends w.CoreTerminal {
                    get onFocus() {
                        return this._onFocus.event;
                    }
                    get onBlur() {
                        return this._onBlur.event;
                    }
                    get onA11yChar() {
                        return this._onA11yCharEmitter.event;
                    }
                    get onA11yTab() {
                        return this._onA11yTabEmitter.event;
                    }
                    get onWillOpen() {
                        return this._onWillOpen.event;
                    }
                    constructor(e = {}){
                        super(e), this.browser = k, this._keyDownHandled = !1, this._keyDownSeen = !1, this._keyPressHandled = !1, this._unprocessedDeadKey = !1, this._accessibilityManager = this.register(new E.MutableDisposable), this._onCursorMove = this.register(new y.EventEmitter), this.onCursorMove = this._onCursorMove.event, this._onKey = this.register(new y.EventEmitter), this.onKey = this._onKey.event, this._onRender = this.register(new y.EventEmitter), this.onRender = this._onRender.event, this._onSelectionChange = this.register(new y.EventEmitter), this.onSelectionChange = this._onSelectionChange.event, this._onTitleChange = this.register(new y.EventEmitter), this.onTitleChange = this._onTitleChange.event, this._onBell = this.register(new y.EventEmitter), this.onBell = this._onBell.event, this._onFocus = this.register(new y.EventEmitter), this._onBlur = this.register(new y.EventEmitter), this._onA11yCharEmitter = this.register(new y.EventEmitter), this._onA11yTabEmitter = this.register(new y.EventEmitter), this._onWillOpen = this.register(new y.EventEmitter), this._setup(), this._decorationService = this._instantiationService.createInstance(A.DecorationService), this._instantiationService.setService(B.IDecorationService, this._decorationService), this._linkProviderService = this._instantiationService.createInstance(O.LinkProviderService), this._instantiationService.setService(S.ILinkProviderService, this._linkProviderService), this._linkProviderService.registerLinkProvider(this._instantiationService.createInstance(a.OscLinkProvider)), this.register(this._inputHandler.onRequestBell(()=>this._onBell.fire())), this.register(this._inputHandler.onRequestRefreshRows((e, t)=>this.refresh(e, t))), this.register(this._inputHandler.onRequestSendFocus(()=>this._reportFocus())), this.register(this._inputHandler.onRequestReset(()=>this.reset())), this.register(this._inputHandler.onRequestWindowsOptionsReport((e)=>this._reportWindowsOptions(e))), this.register(this._inputHandler.onColor((e)=>this._handleColorEvent(e))), this.register((0, y.forwardEvent)(this._inputHandler.onCursorMove, this._onCursorMove)), this.register((0, y.forwardEvent)(this._inputHandler.onTitleChange, this._onTitleChange)), this.register((0, y.forwardEvent)(this._inputHandler.onA11yChar, this._onA11yCharEmitter)), this.register((0, y.forwardEvent)(this._inputHandler.onA11yTab, this._onA11yTabEmitter)), this.register(this._bufferService.onResize((e)=>this._afterResize(e.cols, e.rows))), this.register((0, E.toDisposable)(()=>{
                            this._customKeyEventHandler = void 0, this.element?.parentNode?.removeChild(this.element);
                        }));
                    }
                    _handleColorEvent(e) {
                        if (this._themeService) for (const t of e){
                            let e, i = "";
                            switch(t.index){
                                case 256:
                                    e = "foreground", i = "10";
                                    break;
                                case 257:
                                    e = "background", i = "11";
                                    break;
                                case 258:
                                    e = "cursor", i = "12";
                                    break;
                                default:
                                    e = "ansi", i = "4;" + t.index;
                            }
                            switch(t.type){
                                case 0:
                                    const s = b.color.toColorRGB("ansi" === e ? this._themeService.colors.ansi[t.index] : this._themeService.colors[e]);
                                    this.coreService.triggerDataEvent(`${D.C0.ESC}]${i};${(0, x.toRgbString)(s)}${D.C1_ESCAPED.ST}`);
                                    break;
                                case 1:
                                    if ("ansi" === e) this._themeService.modifyColors((e)=>e.ansi[t.index] = b.channels.toColor(...t.color));
                                    else {
                                        const i = e;
                                        this._themeService.modifyColors((e)=>e[i] = b.channels.toColor(...t.color));
                                    }
                                    break;
                                case 2:
                                    this._themeService.restoreColor(t.index);
                            }
                        }
                    }
                    _setup() {
                        super._setup(), this._customKeyEventHandler = void 0;
                    }
                    get buffer() {
                        return this.buffers.active;
                    }
                    focus() {
                        this.textarea && this.textarea.focus({
                            preventScroll: !0
                        });
                    }
                    _handleScreenReaderModeOptionChange(e) {
                        e ? !this._accessibilityManager.value && this._renderService && (this._accessibilityManager.value = this._instantiationService.createInstance(M.AccessibilityManager, this)) : this._accessibilityManager.clear();
                    }
                    _handleTextAreaFocus(e) {
                        this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(D.C0.ESC + "[I"), this.element.classList.add("focus"), this._showCursor(), this._onFocus.fire();
                    }
                    blur() {
                        return this.textarea?.blur();
                    }
                    _handleTextAreaBlur() {
                        this.textarea.value = "", this.refresh(this.buffer.y, this.buffer.y), this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(D.C0.ESC + "[O"), this.element.classList.remove("focus"), this._onBlur.fire();
                    }
                    _syncTextArea() {
                        if (!this.textarea || !this.buffer.isCursorInViewport || this._compositionHelper.isComposing || !this._renderService) return;
                        const e = this.buffer.ybase + this.buffer.y, t = this.buffer.lines.get(e);
                        if (!t) return;
                        const i = Math.min(this.buffer.x, this.cols - 1), s = this._renderService.dimensions.css.cell.height, r = t.getWidth(i), n = this._renderService.dimensions.css.cell.width * r, o = this.buffer.y * this._renderService.dimensions.css.cell.height, a = i * this._renderService.dimensions.css.cell.width;
                        this.textarea.style.left = a + "px", this.textarea.style.top = o + "px", this.textarea.style.width = n + "px", this.textarea.style.height = s + "px", this.textarea.style.lineHeight = s + "px", this.textarea.style.zIndex = "-5";
                    }
                    _initGlobal() {
                        this._bindKeys(), this.register((0, r.addDisposableDomListener)(this.element, "copy", (e)=>{
                            this.hasSelection() && (0, s.copyHandler)(e, this._selectionService);
                        }));
                        const e = (e)=>(0, s.handlePasteEvent)(e, this.textarea, this.coreService, this.optionsService);
                        this.register((0, r.addDisposableDomListener)(this.textarea, "paste", e)), this.register((0, r.addDisposableDomListener)(this.element, "paste", e)), k.isFirefox ? this.register((0, r.addDisposableDomListener)(this.element, "mousedown", (e)=>{
                            2 === e.button && (0, s.rightClickHandler)(e, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
                        })) : this.register((0, r.addDisposableDomListener)(this.element, "contextmenu", (e)=>{
                            (0, s.rightClickHandler)(e, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
                        })), k.isLinux && this.register((0, r.addDisposableDomListener)(this.element, "auxclick", (e)=>{
                            1 === e.button && (0, s.moveTextAreaUnderMouseCursor)(e, this.textarea, this.screenElement);
                        }));
                    }
                    _bindKeys() {
                        this.register((0, r.addDisposableDomListener)(this.textarea, "keyup", (e)=>this._keyUp(e), !0)), this.register((0, r.addDisposableDomListener)(this.textarea, "keydown", (e)=>this._keyDown(e), !0)), this.register((0, r.addDisposableDomListener)(this.textarea, "keypress", (e)=>this._keyPress(e), !0)), this.register((0, r.addDisposableDomListener)(this.textarea, "compositionstart", ()=>this._compositionHelper.compositionstart())), this.register((0, r.addDisposableDomListener)(this.textarea, "compositionupdate", (e)=>this._compositionHelper.compositionupdate(e))), this.register((0, r.addDisposableDomListener)(this.textarea, "compositionend", ()=>this._compositionHelper.compositionend())), this.register((0, r.addDisposableDomListener)(this.textarea, "input", (e)=>this._inputEvent(e), !0)), this.register(this.onRender(()=>this._compositionHelper.updateCompositionElements()));
                    }
                    open(e) {
                        if (!e) throw new Error("Terminal requires a parent element.");
                        if (e.isConnected || this._logService.debug("Terminal.open was called on an element that was not attached to the DOM"), this.element?.ownerDocument.defaultView && this._coreBrowserService) return void (this.element.ownerDocument.defaultView !== this._coreBrowserService.window && (this._coreBrowserService.window = this.element.ownerDocument.defaultView));
                        this._document = e.ownerDocument, this.options.documentOverride && this.options.documentOverride instanceof Document && (this._document = this.optionsService.rawOptions.documentOverride), this.element = this._document.createElement("div"), this.element.dir = "ltr", this.element.classList.add("terminal"), this.element.classList.add("xterm"), e.appendChild(this.element);
                        const t = this._document.createDocumentFragment();
                        this._viewportElement = this._document.createElement("div"), this._viewportElement.classList.add("xterm-viewport"), t.appendChild(this._viewportElement), this._viewportScrollArea = this._document.createElement("div"), this._viewportScrollArea.classList.add("xterm-scroll-area"), this._viewportElement.appendChild(this._viewportScrollArea), this.screenElement = this._document.createElement("div"), this.screenElement.classList.add("xterm-screen"), this.register((0, r.addDisposableDomListener)(this.screenElement, "mousemove", (e)=>this.updateCursorStyle(e))), this._helperContainer = this._document.createElement("div"), this._helperContainer.classList.add("xterm-helpers"), this.screenElement.appendChild(this._helperContainer), t.appendChild(this.screenElement), this.textarea = this._document.createElement("textarea"), this.textarea.classList.add("xterm-helper-textarea"), this.textarea.setAttribute("aria-label", o.promptLabel), k.isChromeOS || this.textarea.setAttribute("aria-multiline", "false"), this.textarea.setAttribute("autocorrect", "off"), this.textarea.setAttribute("autocapitalize", "off"), this.textarea.setAttribute("spellcheck", "false"), this.textarea.tabIndex = 0, this._coreBrowserService = this.register(this._instantiationService.createInstance(v.CoreBrowserService, this.textarea, e.ownerDocument.defaultView ?? window, this._document ?? "undefined" != typeof window ? window.document : null)), this._instantiationService.setService(S.ICoreBrowserService, this._coreBrowserService), this.register((0, r.addDisposableDomListener)(this.textarea, "focus", (e)=>this._handleTextAreaFocus(e))), this.register((0, r.addDisposableDomListener)(this.textarea, "blur", ()=>this._handleTextAreaBlur())), this._helperContainer.appendChild(this.textarea), this._charSizeService = this._instantiationService.createInstance(u.CharSizeService, this._document, this._helperContainer), this._instantiationService.setService(S.ICharSizeService, this._charSizeService), this._themeService = this._instantiationService.createInstance(C.ThemeService), this._instantiationService.setService(S.IThemeService, this._themeService), this._characterJoinerService = this._instantiationService.createInstance(f.CharacterJoinerService), this._instantiationService.setService(S.ICharacterJoinerService, this._characterJoinerService), this._renderService = this.register(this._instantiationService.createInstance(g.RenderService, this.rows, this.screenElement)), this._instantiationService.setService(S.IRenderService, this._renderService), this.register(this._renderService.onRenderedViewportChange((e)=>this._onRender.fire(e))), this.onResize((e)=>this._renderService.resize(e.cols, e.rows)), this._compositionView = this._document.createElement("div"), this._compositionView.classList.add("composition-view"), this._compositionHelper = this._instantiationService.createInstance(d.CompositionHelper, this.textarea, this._compositionView), this._helperContainer.appendChild(this._compositionView), this._mouseService = this._instantiationService.createInstance(p.MouseService), this._instantiationService.setService(S.IMouseService, this._mouseService), this.linkifier = this.register(this._instantiationService.createInstance(n.Linkifier, this.screenElement)), this.element.appendChild(t);
                        try {
                            this._onWillOpen.fire(this.element);
                        } catch  {}
                        this._renderService.hasRenderer() || this._renderService.setRenderer(this._createRenderer()), this.viewport = this._instantiationService.createInstance(h.Viewport, this._viewportElement, this._viewportScrollArea), this.viewport.onRequestScrollLines((e)=>this.scrollLines(e.amount, e.suppressScrollEvent, 1)), this.register(this._inputHandler.onRequestSyncScrollBar(()=>this.viewport.syncScrollArea())), this.register(this.viewport), this.register(this.onCursorMove(()=>{
                            this._renderService.handleCursorMove(), this._syncTextArea();
                        })), this.register(this.onResize(()=>this._renderService.handleResize(this.cols, this.rows))), this.register(this.onBlur(()=>this._renderService.handleBlur())), this.register(this.onFocus(()=>this._renderService.handleFocus())), this.register(this._renderService.onDimensionsChange(()=>this.viewport.syncScrollArea())), this._selectionService = this.register(this._instantiationService.createInstance(m.SelectionService, this.element, this.screenElement, this.linkifier)), this._instantiationService.setService(S.ISelectionService, this._selectionService), this.register(this._selectionService.onRequestScrollLines((e)=>this.scrollLines(e.amount, e.suppressScrollEvent))), this.register(this._selectionService.onSelectionChange(()=>this._onSelectionChange.fire())), this.register(this._selectionService.onRequestRedraw((e)=>this._renderService.handleSelectionChanged(e.start, e.end, e.columnSelectMode))), this.register(this._selectionService.onLinuxMouseSelection((e)=>{
                            this.textarea.value = e, this.textarea.focus(), this.textarea.select();
                        })), this.register(this._onScroll.event((e)=>{
                            this.viewport.syncScrollArea(), this._selectionService.refresh();
                        })), this.register((0, r.addDisposableDomListener)(this._viewportElement, "scroll", ()=>this._selectionService.refresh())), this.register(this._instantiationService.createInstance(c.BufferDecorationRenderer, this.screenElement)), this.register((0, r.addDisposableDomListener)(this.element, "mousedown", (e)=>this._selectionService.handleMouseDown(e))), this.coreMouseService.areMouseEventsActive ? (this._selectionService.disable(), this.element.classList.add("enable-mouse-events")) : this._selectionService.enable(), this.options.screenReaderMode && (this._accessibilityManager.value = this._instantiationService.createInstance(M.AccessibilityManager, this)), this.register(this.optionsService.onSpecificOptionChange("screenReaderMode", (e)=>this._handleScreenReaderModeOptionChange(e))), this.options.overviewRulerWidth && (this._overviewRulerRenderer = this.register(this._instantiationService.createInstance(l.OverviewRulerRenderer, this._viewportElement, this.screenElement))), this.optionsService.onSpecificOptionChange("overviewRulerWidth", (e)=>{
                            !this._overviewRulerRenderer && e && this._viewportElement && this.screenElement && (this._overviewRulerRenderer = this.register(this._instantiationService.createInstance(l.OverviewRulerRenderer, this._viewportElement, this.screenElement)));
                        }), this._charSizeService.measure(), this.refresh(0, this.rows - 1), this._initGlobal(), this.bindMouse();
                    }
                    _createRenderer() {
                        return this._instantiationService.createInstance(_.DomRenderer, this, this._document, this.element, this.screenElement, this._viewportElement, this._helperContainer, this.linkifier);
                    }
                    bindMouse() {
                        const e = this, t = this.element;
                        function i(t) {
                            const i = e._mouseService.getMouseReportCoords(t, e.screenElement);
                            if (!i) return !1;
                            let s, r;
                            switch(t.overrideType || t.type){
                                case "mousemove":
                                    r = 32, void 0 === t.buttons ? (s = 3, void 0 !== t.button && (s = t.button < 3 ? t.button : 3)) : s = 1 & t.buttons ? 0 : 4 & t.buttons ? 1 : 2 & t.buttons ? 2 : 3;
                                    break;
                                case "mouseup":
                                    r = 0, s = t.button < 3 ? t.button : 3;
                                    break;
                                case "mousedown":
                                    r = 1, s = t.button < 3 ? t.button : 3;
                                    break;
                                case "wheel":
                                    if (e._customWheelEventHandler && !1 === e._customWheelEventHandler(t)) return !1;
                                    if (0 === e.viewport.getLinesScrolled(t)) return !1;
                                    r = t.deltaY < 0 ? 0 : 1, s = 4;
                                    break;
                                default:
                                    return !1;
                            }
                            return !(void 0 === r || void 0 === s || s > 4) && e.coreMouseService.triggerMouseEvent({
                                col: i.col,
                                row: i.row,
                                x: i.x,
                                y: i.y,
                                button: s,
                                action: r,
                                ctrl: t.ctrlKey,
                                alt: t.altKey,
                                shift: t.shiftKey
                            });
                        }
                        const s = {
                            mouseup: null,
                            wheel: null,
                            mousedrag: null,
                            mousemove: null
                        }, n = {
                            mouseup: (e)=>(i(e), e.buttons || (this._document.removeEventListener("mouseup", s.mouseup), s.mousedrag && this._document.removeEventListener("mousemove", s.mousedrag)), this.cancel(e)),
                            wheel: (e)=>(i(e), this.cancel(e, !0)),
                            mousedrag: (e)=>{
                                e.buttons && i(e);
                            },
                            mousemove: (e)=>{
                                e.buttons || i(e);
                            }
                        };
                        this.register(this.coreMouseService.onProtocolChange((e)=>{
                            e ? ("debug" === this.optionsService.rawOptions.logLevel && this._logService.debug("Binding to mouse events:", this.coreMouseService.explainEvents(e)), this.element.classList.add("enable-mouse-events"), this._selectionService.disable()) : (this._logService.debug("Unbinding from mouse events."), this.element.classList.remove("enable-mouse-events"), this._selectionService.enable()), 8 & e ? s.mousemove || (t.addEventListener("mousemove", n.mousemove), s.mousemove = n.mousemove) : (t.removeEventListener("mousemove", s.mousemove), s.mousemove = null), 16 & e ? s.wheel || (t.addEventListener("wheel", n.wheel, {
                                passive: !1
                            }), s.wheel = n.wheel) : (t.removeEventListener("wheel", s.wheel), s.wheel = null), 2 & e ? s.mouseup || (s.mouseup = n.mouseup) : (this._document.removeEventListener("mouseup", s.mouseup), s.mouseup = null), 4 & e ? s.mousedrag || (s.mousedrag = n.mousedrag) : (this._document.removeEventListener("mousemove", s.mousedrag), s.mousedrag = null);
                        })), this.coreMouseService.activeProtocol = this.coreMouseService.activeProtocol, this.register((0, r.addDisposableDomListener)(t, "mousedown", (e)=>{
                            if (e.preventDefault(), this.focus(), this.coreMouseService.areMouseEventsActive && !this._selectionService.shouldForceSelection(e)) return i(e), s.mouseup && this._document.addEventListener("mouseup", s.mouseup), s.mousedrag && this._document.addEventListener("mousemove", s.mousedrag), this.cancel(e);
                        })), this.register((0, r.addDisposableDomListener)(t, "wheel", (e)=>{
                            if (!s.wheel) {
                                if (this._customWheelEventHandler && !1 === this._customWheelEventHandler(e)) return !1;
                                if (!this.buffer.hasScrollback) {
                                    const t = this.viewport.getLinesScrolled(e);
                                    if (0 === t) return;
                                    const i = D.C0.ESC + (this.coreService.decPrivateModes.applicationCursorKeys ? "O" : "[") + (e.deltaY < 0 ? "A" : "B");
                                    let s = "";
                                    for(let e = 0; e < Math.abs(t); e++)s += i;
                                    return this.coreService.triggerDataEvent(s, !0), this.cancel(e, !0);
                                }
                                return this.viewport.handleWheel(e) ? this.cancel(e) : void 0;
                            }
                        }, {
                            passive: !1
                        })), this.register((0, r.addDisposableDomListener)(t, "touchstart", (e)=>{
                            if (!this.coreMouseService.areMouseEventsActive) return this.viewport.handleTouchStart(e), this.cancel(e);
                        }, {
                            passive: !0
                        })), this.register((0, r.addDisposableDomListener)(t, "touchmove", (e)=>{
                            if (!this.coreMouseService.areMouseEventsActive) return this.viewport.handleTouchMove(e) ? void 0 : this.cancel(e);
                        }, {
                            passive: !1
                        }));
                    }
                    refresh(e, t) {
                        this._renderService?.refreshRows(e, t);
                    }
                    updateCursorStyle(e) {
                        this._selectionService?.shouldColumnSelect(e) ? this.element.classList.add("column-select") : this.element.classList.remove("column-select");
                    }
                    _showCursor() {
                        this.coreService.isCursorInitialized || (this.coreService.isCursorInitialized = !0, this.refresh(this.buffer.y, this.buffer.y));
                    }
                    scrollLines(e, t, i = 0) {
                        1 === i ? (super.scrollLines(e, t, i), this.refresh(0, this.rows - 1)) : this.viewport?.scrollLines(e);
                    }
                    paste(e) {
                        (0, s.paste)(e, this.textarea, this.coreService, this.optionsService);
                    }
                    attachCustomKeyEventHandler(e) {
                        this._customKeyEventHandler = e;
                    }
                    attachCustomWheelEventHandler(e) {
                        this._customWheelEventHandler = e;
                    }
                    registerLinkProvider(e) {
                        return this._linkProviderService.registerLinkProvider(e);
                    }
                    registerCharacterJoiner(e) {
                        if (!this._characterJoinerService) throw new Error("Terminal must be opened first");
                        const t = this._characterJoinerService.register(e);
                        return this.refresh(0, this.rows - 1), t;
                    }
                    deregisterCharacterJoiner(e) {
                        if (!this._characterJoinerService) throw new Error("Terminal must be opened first");
                        this._characterJoinerService.deregister(e) && this.refresh(0, this.rows - 1);
                    }
                    get markers() {
                        return this.buffer.markers;
                    }
                    registerMarker(e) {
                        return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + e);
                    }
                    registerDecoration(e) {
                        return this._decorationService.registerDecoration(e);
                    }
                    hasSelection() {
                        return !!this._selectionService && this._selectionService.hasSelection;
                    }
                    select(e, t, i) {
                        this._selectionService.setSelection(e, t, i);
                    }
                    getSelection() {
                        return this._selectionService ? this._selectionService.selectionText : "";
                    }
                    getSelectionPosition() {
                        if (this._selectionService && this._selectionService.hasSelection) return {
                            start: {
                                x: this._selectionService.selectionStart[0],
                                y: this._selectionService.selectionStart[1]
                            },
                            end: {
                                x: this._selectionService.selectionEnd[0],
                                y: this._selectionService.selectionEnd[1]
                            }
                        };
                    }
                    clearSelection() {
                        this._selectionService?.clearSelection();
                    }
                    selectAll() {
                        this._selectionService?.selectAll();
                    }
                    selectLines(e, t) {
                        this._selectionService?.selectLines(e, t);
                    }
                    _keyDown(e) {
                        if (this._keyDownHandled = !1, this._keyDownSeen = !0, this._customKeyEventHandler && !1 === this._customKeyEventHandler(e)) return !1;
                        const t = this.browser.isMac && this.options.macOptionIsMeta && e.altKey;
                        if (!t && !this._compositionHelper.keydown(e)) return this.options.scrollOnUserInput && this.buffer.ybase !== this.buffer.ydisp && this.scrollToBottom(), !1;
                        t || "Dead" !== e.key && "AltGraph" !== e.key || (this._unprocessedDeadKey = !0);
                        const i = (0, R.evaluateKeyboardEvent)(e, this.coreService.decPrivateModes.applicationCursorKeys, this.browser.isMac, this.options.macOptionIsMeta);
                        if (this.updateCursorStyle(e), 3 === i.type || 2 === i.type) {
                            const t = this.rows - 1;
                            return this.scrollLines(2 === i.type ? -t : t), this.cancel(e, !0);
                        }
                        return 1 === i.type && this.selectAll(), !!this._isThirdLevelShift(this.browser, e) || (i.cancel && this.cancel(e, !0), !i.key || !!(e.key && !e.ctrlKey && !e.altKey && !e.metaKey && 1 === e.key.length && e.key.charCodeAt(0) >= 65 && e.key.charCodeAt(0) <= 90) || (this._unprocessedDeadKey ? (this._unprocessedDeadKey = !1, !0) : (i.key !== D.C0.ETX && i.key !== D.C0.CR || (this.textarea.value = ""), this._onKey.fire({
                            key: i.key,
                            domEvent: e
                        }), this._showCursor(), this.coreService.triggerDataEvent(i.key, !0), !this.optionsService.rawOptions.screenReaderMode || e.altKey || e.ctrlKey ? this.cancel(e, !0) : void (this._keyDownHandled = !0))));
                    }
                    _isThirdLevelShift(e, t) {
                        const i = e.isMac && !this.options.macOptionIsMeta && t.altKey && !t.ctrlKey && !t.metaKey || e.isWindows && t.altKey && t.ctrlKey && !t.metaKey || e.isWindows && t.getModifierState("AltGraph");
                        return "keypress" === t.type ? i : i && (!t.keyCode || t.keyCode > 47);
                    }
                    _keyUp(e) {
                        this._keyDownSeen = !1, this._customKeyEventHandler && !1 === this._customKeyEventHandler(e) || (function(e) {
                            return 16 === e.keyCode || 17 === e.keyCode || 18 === e.keyCode;
                        }(e) || this.focus(), this.updateCursorStyle(e), this._keyPressHandled = !1);
                    }
                    _keyPress(e) {
                        let t;
                        if (this._keyPressHandled = !1, this._keyDownHandled) return !1;
                        if (this._customKeyEventHandler && !1 === this._customKeyEventHandler(e)) return !1;
                        if (this.cancel(e), e.charCode) t = e.charCode;
                        else if (null === e.which || void 0 === e.which) t = e.keyCode;
                        else {
                            if (0 === e.which || 0 === e.charCode) return !1;
                            t = e.which;
                        }
                        return !(!t || (e.altKey || e.ctrlKey || e.metaKey) && !this._isThirdLevelShift(this.browser, e) || (t = String.fromCharCode(t), this._onKey.fire({
                            key: t,
                            domEvent: e
                        }), this._showCursor(), this.coreService.triggerDataEvent(t, !0), this._keyPressHandled = !0, this._unprocessedDeadKey = !1, 0));
                    }
                    _inputEvent(e) {
                        if (e.data && "insertText" === e.inputType && (!e.composed || !this._keyDownSeen) && !this.optionsService.rawOptions.screenReaderMode) {
                            if (this._keyPressHandled) return !1;
                            this._unprocessedDeadKey = !1;
                            const t = e.data;
                            return this.coreService.triggerDataEvent(t, !0), this.cancel(e), !0;
                        }
                        return !1;
                    }
                    resize(e, t) {
                        e !== this.cols || t !== this.rows ? super.resize(e, t) : this._charSizeService && !this._charSizeService.hasValidSize && this._charSizeService.measure();
                    }
                    _afterResize(e, t) {
                        this._charSizeService?.measure(), this.viewport?.syncScrollArea(!0);
                    }
                    clear() {
                        if (0 !== this.buffer.ybase || 0 !== this.buffer.y) {
                            this.buffer.clearAllMarkers(), this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)), this.buffer.lines.length = 1, this.buffer.ydisp = 0, this.buffer.ybase = 0, this.buffer.y = 0;
                            for(let e = 1; e < this.rows; e++)this.buffer.lines.push(this.buffer.getBlankLine(L.DEFAULT_ATTR_DATA));
                            this._onScroll.fire({
                                position: this.buffer.ydisp,
                                source: 0
                            }), this.viewport?.reset(), this.refresh(0, this.rows - 1);
                        }
                    }
                    reset() {
                        this.options.rows = this.rows, this.options.cols = this.cols;
                        const e = this._customKeyEventHandler;
                        this._setup(), super.reset(), this._selectionService?.reset(), this._decorationService.reset(), this.viewport?.reset(), this._customKeyEventHandler = e, this.refresh(0, this.rows - 1);
                    }
                    clearTextureAtlas() {
                        this._renderService?.clearTextureAtlas();
                    }
                    _reportFocus() {
                        this.element?.classList.contains("focus") ? this.coreService.triggerDataEvent(D.C0.ESC + "[I") : this.coreService.triggerDataEvent(D.C0.ESC + "[O");
                    }
                    _reportWindowsOptions(e) {
                        if (this._renderService) switch(e){
                            case T.WindowsOptionsReportType.GET_WIN_SIZE_PIXELS:
                                const e1 = this._renderService.dimensions.css.canvas.width.toFixed(0), t = this._renderService.dimensions.css.canvas.height.toFixed(0);
                                this.coreService.triggerDataEvent(`${D.C0.ESC}[4;${t};${e1}t`);
                                break;
                            case T.WindowsOptionsReportType.GET_CELL_SIZE_PIXELS:
                                const i = this._renderService.dimensions.css.cell.width.toFixed(0), s = this._renderService.dimensions.css.cell.height.toFixed(0);
                                this.coreService.triggerDataEvent(`${D.C0.ESC}[6;${s};${i}t`);
                        }
                    }
                    cancel(e, t) {
                        if (this.options.cancelEvents || t) return e.preventDefault(), e.stopPropagation(), !1;
                    }
                }
                t.Terminal = P;
            },
            9924: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.TimeBasedDebouncer = void 0, t.TimeBasedDebouncer = class {
                    constructor(e, t = 1e3){
                        this._renderCallback = e, this._debounceThresholdMS = t, this._lastRefreshMs = 0, this._additionalRefreshRequested = !1;
                    }
                    dispose() {
                        this._refreshTimeoutID && clearTimeout(this._refreshTimeoutID);
                    }
                    refresh(e, t, i) {
                        this._rowCount = i, e = void 0 !== e ? e : 0, t = void 0 !== t ? t : this._rowCount - 1, this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, e) : e, this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, t) : t;
                        const s = Date.now();
                        if (s - this._lastRefreshMs >= this._debounceThresholdMS) this._lastRefreshMs = s, this._innerRefresh();
                        else if (!this._additionalRefreshRequested) {
                            const e = s - this._lastRefreshMs, t = this._debounceThresholdMS - e;
                            this._additionalRefreshRequested = !0, this._refreshTimeoutID = window.setTimeout(()=>{
                                this._lastRefreshMs = Date.now(), this._innerRefresh(), this._additionalRefreshRequested = !1, this._refreshTimeoutID = void 0;
                            }, t);
                        }
                    }
                    _innerRefresh() {
                        if (void 0 === this._rowStart || void 0 === this._rowEnd || void 0 === this._rowCount) return;
                        const e = Math.max(this._rowStart, 0), t = Math.min(this._rowEnd, this._rowCount - 1);
                        this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(e, t);
                    }
                };
            },
            1680: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Viewport = void 0;
                const n = i(3656), o = i(4725), a = i(8460), h = i(844), c = i(2585);
                let l = t.Viewport = class extends h.Disposable {
                    constructor(e, t, i, s, r, o, h, c){
                        super(), this._viewportElement = e, this._scrollArea = t, this._bufferService = i, this._optionsService = s, this._charSizeService = r, this._renderService = o, this._coreBrowserService = h, this.scrollBarWidth = 0, this._currentRowHeight = 0, this._currentDeviceCellHeight = 0, this._lastRecordedBufferLength = 0, this._lastRecordedViewportHeight = 0, this._lastRecordedBufferHeight = 0, this._lastTouchY = 0, this._lastScrollTop = 0, this._wheelPartialScroll = 0, this._refreshAnimationFrame = null, this._ignoreNextScrollEvent = !1, this._smoothScrollState = {
                            startTime: 0,
                            origin: -1,
                            target: -1
                        }, this._onRequestScrollLines = this.register(new a.EventEmitter), this.onRequestScrollLines = this._onRequestScrollLines.event, this.scrollBarWidth = this._viewportElement.offsetWidth - this._scrollArea.offsetWidth || 15, this.register((0, n.addDisposableDomListener)(this._viewportElement, "scroll", this._handleScroll.bind(this))), this._activeBuffer = this._bufferService.buffer, this.register(this._bufferService.buffers.onBufferActivate((e)=>this._activeBuffer = e.activeBuffer)), this._renderDimensions = this._renderService.dimensions, this.register(this._renderService.onDimensionsChange((e)=>this._renderDimensions = e)), this._handleThemeChange(c.colors), this.register(c.onChangeColors((e)=>this._handleThemeChange(e))), this.register(this._optionsService.onSpecificOptionChange("scrollback", ()=>this.syncScrollArea())), setTimeout(()=>this.syncScrollArea());
                    }
                    _handleThemeChange(e) {
                        this._viewportElement.style.backgroundColor = e.background.css;
                    }
                    reset() {
                        this._currentRowHeight = 0, this._currentDeviceCellHeight = 0, this._lastRecordedBufferLength = 0, this._lastRecordedViewportHeight = 0, this._lastRecordedBufferHeight = 0, this._lastTouchY = 0, this._lastScrollTop = 0, this._coreBrowserService.window.requestAnimationFrame(()=>this.syncScrollArea());
                    }
                    _refresh(e) {
                        if (e) return this._innerRefresh(), void (null !== this._refreshAnimationFrame && this._coreBrowserService.window.cancelAnimationFrame(this._refreshAnimationFrame));
                        null === this._refreshAnimationFrame && (this._refreshAnimationFrame = this._coreBrowserService.window.requestAnimationFrame(()=>this._innerRefresh()));
                    }
                    _innerRefresh() {
                        if (this._charSizeService.height > 0) {
                            this._currentRowHeight = this._renderDimensions.device.cell.height / this._coreBrowserService.dpr, this._currentDeviceCellHeight = this._renderDimensions.device.cell.height, this._lastRecordedViewportHeight = this._viewportElement.offsetHeight;
                            const e = Math.round(this._currentRowHeight * this._lastRecordedBufferLength) + (this._lastRecordedViewportHeight - this._renderDimensions.css.canvas.height);
                            this._lastRecordedBufferHeight !== e && (this._lastRecordedBufferHeight = e, this._scrollArea.style.height = this._lastRecordedBufferHeight + "px");
                        }
                        const e = this._bufferService.buffer.ydisp * this._currentRowHeight;
                        this._viewportElement.scrollTop !== e && (this._ignoreNextScrollEvent = !0, this._viewportElement.scrollTop = e), this._refreshAnimationFrame = null;
                    }
                    syncScrollArea(e = !1) {
                        if (this._lastRecordedBufferLength !== this._bufferService.buffer.lines.length) return this._lastRecordedBufferLength = this._bufferService.buffer.lines.length, void this._refresh(e);
                        this._lastRecordedViewportHeight === this._renderService.dimensions.css.canvas.height && this._lastScrollTop === this._activeBuffer.ydisp * this._currentRowHeight && this._renderDimensions.device.cell.height === this._currentDeviceCellHeight || this._refresh(e);
                    }
                    _handleScroll(e) {
                        if (this._lastScrollTop = this._viewportElement.scrollTop, !this._viewportElement.offsetParent) return;
                        if (this._ignoreNextScrollEvent) return this._ignoreNextScrollEvent = !1, void this._onRequestScrollLines.fire({
                            amount: 0,
                            suppressScrollEvent: !0
                        });
                        const t = Math.round(this._lastScrollTop / this._currentRowHeight) - this._bufferService.buffer.ydisp;
                        this._onRequestScrollLines.fire({
                            amount: t,
                            suppressScrollEvent: !0
                        });
                    }
                    _smoothScroll() {
                        if (this._isDisposed || -1 === this._smoothScrollState.origin || -1 === this._smoothScrollState.target) return;
                        const e = this._smoothScrollPercent();
                        this._viewportElement.scrollTop = this._smoothScrollState.origin + Math.round(e * (this._smoothScrollState.target - this._smoothScrollState.origin)), e < 1 ? this._coreBrowserService.window.requestAnimationFrame(()=>this._smoothScroll()) : this._clearSmoothScrollState();
                    }
                    _smoothScrollPercent() {
                        return this._optionsService.rawOptions.smoothScrollDuration && this._smoothScrollState.startTime ? Math.max(Math.min((Date.now() - this._smoothScrollState.startTime) / this._optionsService.rawOptions.smoothScrollDuration, 1), 0) : 1;
                    }
                    _clearSmoothScrollState() {
                        this._smoothScrollState.startTime = 0, this._smoothScrollState.origin = -1, this._smoothScrollState.target = -1;
                    }
                    _bubbleScroll(e, t) {
                        const i = this._viewportElement.scrollTop + this._lastRecordedViewportHeight;
                        return !(t < 0 && 0 !== this._viewportElement.scrollTop || t > 0 && i < this._lastRecordedBufferHeight) || (e.cancelable && e.preventDefault(), !1);
                    }
                    handleWheel(e) {
                        const t = this._getPixelsScrolled(e);
                        return 0 !== t && (this._optionsService.rawOptions.smoothScrollDuration ? (this._smoothScrollState.startTime = Date.now(), this._smoothScrollPercent() < 1 ? (this._smoothScrollState.origin = this._viewportElement.scrollTop, -1 === this._smoothScrollState.target ? this._smoothScrollState.target = this._viewportElement.scrollTop + t : this._smoothScrollState.target += t, this._smoothScrollState.target = Math.max(Math.min(this._smoothScrollState.target, this._viewportElement.scrollHeight), 0), this._smoothScroll()) : this._clearSmoothScrollState()) : this._viewportElement.scrollTop += t, this._bubbleScroll(e, t));
                    }
                    scrollLines(e) {
                        if (0 !== e) {
                            if (this._optionsService.rawOptions.smoothScrollDuration) {
                                const t = e * this._currentRowHeight;
                                this._smoothScrollState.startTime = Date.now(), this._smoothScrollPercent() < 1 ? (this._smoothScrollState.origin = this._viewportElement.scrollTop, this._smoothScrollState.target = this._smoothScrollState.origin + t, this._smoothScrollState.target = Math.max(Math.min(this._smoothScrollState.target, this._viewportElement.scrollHeight), 0), this._smoothScroll()) : this._clearSmoothScrollState();
                            } else this._onRequestScrollLines.fire({
                                amount: e,
                                suppressScrollEvent: !1
                            });
                        }
                    }
                    _getPixelsScrolled(e) {
                        if (0 === e.deltaY || e.shiftKey) return 0;
                        let t = this._applyScrollModifier(e.deltaY, e);
                        return e.deltaMode === WheelEvent.DOM_DELTA_LINE ? t *= this._currentRowHeight : e.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t *= this._currentRowHeight * this._bufferService.rows), t;
                    }
                    getBufferElements(e, t) {
                        let i, s = "";
                        const r = [], n = t ?? this._bufferService.buffer.lines.length, o = this._bufferService.buffer.lines;
                        for(let t = e; t < n; t++){
                            const e = o.get(t);
                            if (!e) continue;
                            const n = o.get(t + 1)?.isWrapped;
                            if (s += e.translateToString(!n), !n || t === o.length - 1) {
                                const e = document.createElement("div");
                                e.textContent = s, r.push(e), s.length > 0 && (i = e), s = "";
                            }
                        }
                        return {
                            bufferElements: r,
                            cursorElement: i
                        };
                    }
                    getLinesScrolled(e) {
                        if (0 === e.deltaY || e.shiftKey) return 0;
                        let t = this._applyScrollModifier(e.deltaY, e);
                        return e.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? (t /= this._currentRowHeight + 0, this._wheelPartialScroll += t, t = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1), this._wheelPartialScroll %= 1) : e.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t *= this._bufferService.rows), t;
                    }
                    _applyScrollModifier(e, t) {
                        const i = this._optionsService.rawOptions.fastScrollModifier;
                        return "alt" === i && t.altKey || "ctrl" === i && t.ctrlKey || "shift" === i && t.shiftKey ? e * this._optionsService.rawOptions.fastScrollSensitivity * this._optionsService.rawOptions.scrollSensitivity : e * this._optionsService.rawOptions.scrollSensitivity;
                    }
                    handleTouchStart(e) {
                        this._lastTouchY = e.touches[0].pageY;
                    }
                    handleTouchMove(e) {
                        const t = this._lastTouchY - e.touches[0].pageY;
                        return this._lastTouchY = e.touches[0].pageY, 0 !== t && (this._viewportElement.scrollTop += t, this._bubbleScroll(e, t));
                    }
                };
                t.Viewport = l = s([
                    r(2, c.IBufferService),
                    r(3, c.IOptionsService),
                    r(4, o.ICharSizeService),
                    r(5, o.IRenderService),
                    r(6, o.ICoreBrowserService),
                    r(7, o.IThemeService)
                ], l);
            },
            3107: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BufferDecorationRenderer = void 0;
                const n = i(4725), o = i(844), a = i(2585);
                let h = t.BufferDecorationRenderer = class extends o.Disposable {
                    constructor(e, t, i, s, r){
                        super(), this._screenElement = e, this._bufferService = t, this._coreBrowserService = i, this._decorationService = s, this._renderService = r, this._decorationElements = new Map, this._altBufferIsActive = !1, this._dimensionsChanged = !1, this._container = document.createElement("div"), this._container.classList.add("xterm-decoration-container"), this._screenElement.appendChild(this._container), this.register(this._renderService.onRenderedViewportChange(()=>this._doRefreshDecorations())), this.register(this._renderService.onDimensionsChange(()=>{
                            this._dimensionsChanged = !0, this._queueRefresh();
                        })), this.register(this._coreBrowserService.onDprChange(()=>this._queueRefresh())), this.register(this._bufferService.buffers.onBufferActivate(()=>{
                            this._altBufferIsActive = this._bufferService.buffer === this._bufferService.buffers.alt;
                        })), this.register(this._decorationService.onDecorationRegistered(()=>this._queueRefresh())), this.register(this._decorationService.onDecorationRemoved((e)=>this._removeDecoration(e))), this.register((0, o.toDisposable)(()=>{
                            this._container.remove(), this._decorationElements.clear();
                        }));
                    }
                    _queueRefresh() {
                        void 0 === this._animationFrame && (this._animationFrame = this._renderService.addRefreshCallback(()=>{
                            this._doRefreshDecorations(), this._animationFrame = void 0;
                        }));
                    }
                    _doRefreshDecorations() {
                        for (const e of this._decorationService.decorations)this._renderDecoration(e);
                        this._dimensionsChanged = !1;
                    }
                    _renderDecoration(e) {
                        this._refreshStyle(e), this._dimensionsChanged && this._refreshXPosition(e);
                    }
                    _createElement(e) {
                        const t = this._coreBrowserService.mainDocument.createElement("div");
                        t.classList.add("xterm-decoration"), t.classList.toggle("xterm-decoration-top-layer", "top" === e?.options?.layer), t.style.width = `${Math.round((e.options.width || 1) * this._renderService.dimensions.css.cell.width)}px`, t.style.height = (e.options.height || 1) * this._renderService.dimensions.css.cell.height + "px", t.style.top = (e.marker.line - this._bufferService.buffers.active.ydisp) * this._renderService.dimensions.css.cell.height + "px", t.style.lineHeight = `${this._renderService.dimensions.css.cell.height}px`;
                        const i = e.options.x ?? 0;
                        return i && i > this._bufferService.cols && (t.style.display = "none"), this._refreshXPosition(e, t), t;
                    }
                    _refreshStyle(e) {
                        const t = e.marker.line - this._bufferService.buffers.active.ydisp;
                        if (t < 0 || t >= this._bufferService.rows) e.element && (e.element.style.display = "none", e.onRenderEmitter.fire(e.element));
                        else {
                            let i = this._decorationElements.get(e);
                            i || (i = this._createElement(e), e.element = i, this._decorationElements.set(e, i), this._container.appendChild(i), e.onDispose(()=>{
                                this._decorationElements.delete(e), i.remove();
                            })), i.style.top = t * this._renderService.dimensions.css.cell.height + "px", i.style.display = this._altBufferIsActive ? "none" : "block", e.onRenderEmitter.fire(i);
                        }
                    }
                    _refreshXPosition(e, t = e.element) {
                        if (!t) return;
                        const i = e.options.x ?? 0;
                        "right" === (e.options.anchor || "left") ? t.style.right = i ? i * this._renderService.dimensions.css.cell.width + "px" : "" : t.style.left = i ? i * this._renderService.dimensions.css.cell.width + "px" : "";
                    }
                    _removeDecoration(e) {
                        this._decorationElements.get(e)?.remove(), this._decorationElements.delete(e), e.dispose();
                    }
                };
                t.BufferDecorationRenderer = h = s([
                    r(1, a.IBufferService),
                    r(2, n.ICoreBrowserService),
                    r(3, a.IDecorationService),
                    r(4, n.IRenderService)
                ], h);
            },
            5871: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ColorZoneStore = void 0, t.ColorZoneStore = class {
                    constructor(){
                        this._zones = [], this._zonePool = [], this._zonePoolIndex = 0, this._linePadding = {
                            full: 0,
                            left: 0,
                            center: 0,
                            right: 0
                        };
                    }
                    get zones() {
                        return this._zonePool.length = Math.min(this._zonePool.length, this._zones.length), this._zones;
                    }
                    clear() {
                        this._zones.length = 0, this._zonePoolIndex = 0;
                    }
                    addDecoration(e) {
                        if (e.options.overviewRulerOptions) {
                            for (const t of this._zones)if (t.color === e.options.overviewRulerOptions.color && t.position === e.options.overviewRulerOptions.position) {
                                if (this._lineIntersectsZone(t, e.marker.line)) return;
                                if (this._lineAdjacentToZone(t, e.marker.line, e.options.overviewRulerOptions.position)) return void this._addLineToZone(t, e.marker.line);
                            }
                            if (this._zonePoolIndex < this._zonePool.length) return this._zonePool[this._zonePoolIndex].color = e.options.overviewRulerOptions.color, this._zonePool[this._zonePoolIndex].position = e.options.overviewRulerOptions.position, this._zonePool[this._zonePoolIndex].startBufferLine = e.marker.line, this._zonePool[this._zonePoolIndex].endBufferLine = e.marker.line, void this._zones.push(this._zonePool[this._zonePoolIndex++]);
                            this._zones.push({
                                color: e.options.overviewRulerOptions.color,
                                position: e.options.overviewRulerOptions.position,
                                startBufferLine: e.marker.line,
                                endBufferLine: e.marker.line
                            }), this._zonePool.push(this._zones[this._zones.length - 1]), this._zonePoolIndex++;
                        }
                    }
                    setPadding(e) {
                        this._linePadding = e;
                    }
                    _lineIntersectsZone(e, t) {
                        return t >= e.startBufferLine && t <= e.endBufferLine;
                    }
                    _lineAdjacentToZone(e, t, i) {
                        return t >= e.startBufferLine - this._linePadding[i || "full"] && t <= e.endBufferLine + this._linePadding[i || "full"];
                    }
                    _addLineToZone(e, t) {
                        e.startBufferLine = Math.min(e.startBufferLine, t), e.endBufferLine = Math.max(e.endBufferLine, t);
                    }
                };
            },
            5744: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.OverviewRulerRenderer = void 0;
                const n = i(5871), o = i(4725), a = i(844), h = i(2585), c = {
                    full: 0,
                    left: 0,
                    center: 0,
                    right: 0
                }, l = {
                    full: 0,
                    left: 0,
                    center: 0,
                    right: 0
                }, d = {
                    full: 0,
                    left: 0,
                    center: 0,
                    right: 0
                };
                let _ = t.OverviewRulerRenderer = class extends a.Disposable {
                    get _width() {
                        return this._optionsService.options.overviewRulerWidth || 0;
                    }
                    constructor(e, t, i, s, r, o, h){
                        super(), this._viewportElement = e, this._screenElement = t, this._bufferService = i, this._decorationService = s, this._renderService = r, this._optionsService = o, this._coreBrowserService = h, this._colorZoneStore = new n.ColorZoneStore, this._shouldUpdateDimensions = !0, this._shouldUpdateAnchor = !0, this._lastKnownBufferLength = 0, this._canvas = this._coreBrowserService.mainDocument.createElement("canvas"), this._canvas.classList.add("xterm-decoration-overview-ruler"), this._refreshCanvasDimensions(), this._viewportElement.parentElement?.insertBefore(this._canvas, this._viewportElement);
                        const c = this._canvas.getContext("2d");
                        if (!c) throw new Error("Ctx cannot be null");
                        this._ctx = c, this._registerDecorationListeners(), this._registerBufferChangeListeners(), this._registerDimensionChangeListeners(), this.register((0, a.toDisposable)(()=>{
                            this._canvas?.remove();
                        }));
                    }
                    _registerDecorationListeners() {
                        this.register(this._decorationService.onDecorationRegistered(()=>this._queueRefresh(void 0, !0))), this.register(this._decorationService.onDecorationRemoved(()=>this._queueRefresh(void 0, !0)));
                    }
                    _registerBufferChangeListeners() {
                        this.register(this._renderService.onRenderedViewportChange(()=>this._queueRefresh())), this.register(this._bufferService.buffers.onBufferActivate(()=>{
                            this._canvas.style.display = this._bufferService.buffer === this._bufferService.buffers.alt ? "none" : "block";
                        })), this.register(this._bufferService.onScroll(()=>{
                            this._lastKnownBufferLength !== this._bufferService.buffers.normal.lines.length && (this._refreshDrawHeightConstants(), this._refreshColorZonePadding());
                        }));
                    }
                    _registerDimensionChangeListeners() {
                        this.register(this._renderService.onRender(()=>{
                            this._containerHeight && this._containerHeight === this._screenElement.clientHeight || (this._queueRefresh(!0), this._containerHeight = this._screenElement.clientHeight);
                        })), this.register(this._optionsService.onSpecificOptionChange("overviewRulerWidth", ()=>this._queueRefresh(!0))), this.register(this._coreBrowserService.onDprChange(()=>this._queueRefresh(!0))), this._queueRefresh(!0);
                    }
                    _refreshDrawConstants() {
                        const e = Math.floor(this._canvas.width / 3), t = Math.ceil(this._canvas.width / 3);
                        l.full = this._canvas.width, l.left = e, l.center = t, l.right = e, this._refreshDrawHeightConstants(), d.full = 0, d.left = 0, d.center = l.left, d.right = l.left + l.center;
                    }
                    _refreshDrawHeightConstants() {
                        c.full = Math.round(2 * this._coreBrowserService.dpr);
                        const e = this._canvas.height / this._bufferService.buffer.lines.length, t = Math.round(Math.max(Math.min(e, 12), 6) * this._coreBrowserService.dpr);
                        c.left = t, c.center = t, c.right = t;
                    }
                    _refreshColorZonePadding() {
                        this._colorZoneStore.setPadding({
                            full: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * c.full),
                            left: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * c.left),
                            center: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * c.center),
                            right: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * c.right)
                        }), this._lastKnownBufferLength = this._bufferService.buffers.normal.lines.length;
                    }
                    _refreshCanvasDimensions() {
                        this._canvas.style.width = `${this._width}px`, this._canvas.width = Math.round(this._width * this._coreBrowserService.dpr), this._canvas.style.height = `${this._screenElement.clientHeight}px`, this._canvas.height = Math.round(this._screenElement.clientHeight * this._coreBrowserService.dpr), this._refreshDrawConstants(), this._refreshColorZonePadding();
                    }
                    _refreshDecorations() {
                        this._shouldUpdateDimensions && this._refreshCanvasDimensions(), this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height), this._colorZoneStore.clear();
                        for (const e of this._decorationService.decorations)this._colorZoneStore.addDecoration(e);
                        this._ctx.lineWidth = 1;
                        const e = this._colorZoneStore.zones;
                        for (const t of e)"full" !== t.position && this._renderColorZone(t);
                        for (const t of e)"full" === t.position && this._renderColorZone(t);
                        this._shouldUpdateDimensions = !1, this._shouldUpdateAnchor = !1;
                    }
                    _renderColorZone(e) {
                        this._ctx.fillStyle = e.color, this._ctx.fillRect(d[e.position || "full"], Math.round((this._canvas.height - 1) * (e.startBufferLine / this._bufferService.buffers.active.lines.length) - c[e.position || "full"] / 2), l[e.position || "full"], Math.round((this._canvas.height - 1) * ((e.endBufferLine - e.startBufferLine) / this._bufferService.buffers.active.lines.length) + c[e.position || "full"]));
                    }
                    _queueRefresh(e, t) {
                        this._shouldUpdateDimensions = e || this._shouldUpdateDimensions, this._shouldUpdateAnchor = t || this._shouldUpdateAnchor, void 0 === this._animationFrame && (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(()=>{
                            this._refreshDecorations(), this._animationFrame = void 0;
                        }));
                    }
                };
                t.OverviewRulerRenderer = _ = s([
                    r(2, h.IBufferService),
                    r(3, h.IDecorationService),
                    r(4, o.IRenderService),
                    r(5, h.IOptionsService),
                    r(6, o.ICoreBrowserService)
                ], _);
            },
            2950: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.CompositionHelper = void 0;
                const n = i(4725), o = i(2585), a = i(2584);
                let h = t.CompositionHelper = class {
                    get isComposing() {
                        return this._isComposing;
                    }
                    constructor(e, t, i, s, r, n){
                        this._textarea = e, this._compositionView = t, this._bufferService = i, this._optionsService = s, this._coreService = r, this._renderService = n, this._isComposing = !1, this._isSendingComposition = !1, this._compositionPosition = {
                            start: 0,
                            end: 0
                        }, this._dataAlreadySent = "";
                    }
                    compositionstart() {
                        this._isComposing = !0, this._compositionPosition.start = this._textarea.value.length, this._compositionView.textContent = "", this._dataAlreadySent = "", this._compositionView.classList.add("active");
                    }
                    compositionupdate(e) {
                        this._compositionView.textContent = e.data, this.updateCompositionElements(), setTimeout(()=>{
                            this._compositionPosition.end = this._textarea.value.length;
                        }, 0);
                    }
                    compositionend() {
                        this._finalizeComposition(!0);
                    }
                    keydown(e) {
                        if (this._isComposing || this._isSendingComposition) {
                            if (229 === e.keyCode) return !1;
                            if (16 === e.keyCode || 17 === e.keyCode || 18 === e.keyCode) return !1;
                            this._finalizeComposition(!1);
                        }
                        return 229 !== e.keyCode || (this._handleAnyTextareaChanges(), !1);
                    }
                    _finalizeComposition(e) {
                        if (this._compositionView.classList.remove("active"), this._isComposing = !1, e) {
                            const e = {
                                start: this._compositionPosition.start,
                                end: this._compositionPosition.end
                            };
                            this._isSendingComposition = !0, setTimeout(()=>{
                                if (this._isSendingComposition) {
                                    let t;
                                    this._isSendingComposition = !1, e.start += this._dataAlreadySent.length, t = this._isComposing ? this._textarea.value.substring(e.start, e.end) : this._textarea.value.substring(e.start), t.length > 0 && this._coreService.triggerDataEvent(t, !0);
                                }
                            }, 0);
                        } else {
                            this._isSendingComposition = !1;
                            const e = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
                            this._coreService.triggerDataEvent(e, !0);
                        }
                    }
                    _handleAnyTextareaChanges() {
                        const e = this._textarea.value;
                        setTimeout(()=>{
                            if (!this._isComposing) {
                                const t = this._textarea.value, i = t.replace(e, "");
                                this._dataAlreadySent = i, t.length > e.length ? this._coreService.triggerDataEvent(i, !0) : t.length < e.length ? this._coreService.triggerDataEvent(`${a.C0.DEL}`, !0) : t.length === e.length && t !== e && this._coreService.triggerDataEvent(t, !0);
                            }
                        }, 0);
                    }
                    updateCompositionElements(e) {
                        if (this._isComposing) {
                            if (this._bufferService.buffer.isCursorInViewport) {
                                const e = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1), t = this._renderService.dimensions.css.cell.height, i = this._bufferService.buffer.y * this._renderService.dimensions.css.cell.height, s = e * this._renderService.dimensions.css.cell.width;
                                this._compositionView.style.left = s + "px", this._compositionView.style.top = i + "px", this._compositionView.style.height = t + "px", this._compositionView.style.lineHeight = t + "px", this._compositionView.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._compositionView.style.fontSize = this._optionsService.rawOptions.fontSize + "px";
                                const r = this._compositionView.getBoundingClientRect();
                                this._textarea.style.left = s + "px", this._textarea.style.top = i + "px", this._textarea.style.width = Math.max(r.width, 1) + "px", this._textarea.style.height = Math.max(r.height, 1) + "px", this._textarea.style.lineHeight = r.height + "px";
                            }
                            e || setTimeout(()=>this.updateCompositionElements(!0), 0);
                        }
                    }
                };
                t.CompositionHelper = h = s([
                    r(2, o.IBufferService),
                    r(3, o.IOptionsService),
                    r(4, o.ICoreService),
                    r(5, n.IRenderService)
                ], h);
            },
            9806: (e, t)=>{
                function i(e, t, i) {
                    const s = i.getBoundingClientRect(), r = e.getComputedStyle(i), n = parseInt(r.getPropertyValue("padding-left")), o = parseInt(r.getPropertyValue("padding-top"));
                    return [
                        t.clientX - s.left - n,
                        t.clientY - s.top - o
                    ];
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getCoords = t.getCoordsRelativeToElement = void 0, t.getCoordsRelativeToElement = i, t.getCoords = function(e, t, s, r, n, o, a, h, c) {
                    if (!o) return;
                    const l = i(e, t, s);
                    return l ? (l[0] = Math.ceil((l[0] + (c ? a / 2 : 0)) / a), l[1] = Math.ceil(l[1] / h), l[0] = Math.min(Math.max(l[0], 1), r + (c ? 1 : 0)), l[1] = Math.min(Math.max(l[1], 1), n), l) : void 0;
                };
            },
            9504: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.moveToCellSequence = void 0;
                const s = i(2584);
                function r(e, t, i, s) {
                    const r = e - n(e, i), a = t - n(t, i), l = Math.abs(r - a) - function(e, t, i) {
                        let s = 0;
                        const r = e - n(e, i), a = t - n(t, i);
                        for(let n = 0; n < Math.abs(r - a); n++){
                            const a = "A" === o(e, t) ? -1 : 1, h = i.buffer.lines.get(r + a * n);
                            h?.isWrapped && s++;
                        }
                        return s;
                    }(e, t, i);
                    return c(l, h(o(e, t), s));
                }
                function n(e, t) {
                    let i = 0, s = t.buffer.lines.get(e), r = s?.isWrapped;
                    for(; r && e >= 0 && e < t.rows;)i++, s = t.buffer.lines.get(--e), r = s?.isWrapped;
                    return i;
                }
                function o(e, t) {
                    return e > t ? "A" : "B";
                }
                function a(e, t, i, s, r, n) {
                    let o = e, a = t, h = "";
                    for(; o !== i || a !== s;)o += r ? 1 : -1, r && o > n.cols - 1 ? (h += n.buffer.translateBufferLineToString(a, !1, e, o), o = 0, e = 0, a++) : !r && o < 0 && (h += n.buffer.translateBufferLineToString(a, !1, 0, e + 1), o = n.cols - 1, e = o, a--);
                    return h + n.buffer.translateBufferLineToString(a, !1, e, o);
                }
                function h(e, t) {
                    const i = t ? "O" : "[";
                    return s.C0.ESC + i + e;
                }
                function c(e, t) {
                    e = Math.floor(e);
                    let i = "";
                    for(let s = 0; s < e; s++)i += t;
                    return i;
                }
                t.moveToCellSequence = function(e, t, i, s) {
                    const o = i.buffer.x, l = i.buffer.y;
                    if (!i.buffer.hasScrollback) return function(e, t, i, s, o, l) {
                        return 0 === r(t, s, o, l).length ? "" : c(a(e, t, e, t - n(t, o), !1, o).length, h("D", l));
                    }(o, l, 0, t, i, s) + r(l, t, i, s) + function(e, t, i, s, o, l) {
                        let d;
                        d = r(t, s, o, l).length > 0 ? s - n(s, o) : t;
                        const _ = s, u = function(e, t, i, s, o, a) {
                            let h;
                            return h = r(i, s, o, a).length > 0 ? s - n(s, o) : t, e < i && h <= s || e >= i && h < s ? "C" : "D";
                        }(e, t, i, s, o, l);
                        return c(a(e, d, i, _, "C" === u, o).length, h(u, l));
                    }(o, l, e, t, i, s);
                    let d;
                    if (l === t) return d = o > e ? "D" : "C", c(Math.abs(o - e), h(d, s));
                    d = l > t ? "D" : "C";
                    const _ = Math.abs(l - t);
                    return c(function(e, t) {
                        return t.cols - e;
                    }(l > t ? e : o, i) + (_ - 1) * i.cols + 1 + ((l > t ? o : e) - 1), h(d, s));
                };
            },
            1296: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DomRenderer = void 0;
                const n = i(3787), o = i(2550), a = i(2223), h = i(6171), c = i(6052), l = i(4725), d = i(8055), _ = i(8460), u = i(844), f = i(2585), v = "xterm-dom-renderer-owner-", p = "xterm-rows", g = "xterm-fg-", m = "xterm-bg-", S = "xterm-focus", C = "xterm-selection";
                let b = 1, w = t.DomRenderer = class extends u.Disposable {
                    constructor(e, t, i, s, r, a, l, d, f, g, m, S, w){
                        super(), this._terminal = e, this._document = t, this._element = i, this._screenElement = s, this._viewportElement = r, this._helperContainer = a, this._linkifier2 = l, this._charSizeService = f, this._optionsService = g, this._bufferService = m, this._coreBrowserService = S, this._themeService = w, this._terminalClass = b++, this._rowElements = [], this._selectionRenderModel = (0, c.createSelectionRenderModel)(), this.onRequestRedraw = this.register(new _.EventEmitter).event, this._rowContainer = this._document.createElement("div"), this._rowContainer.classList.add(p), this._rowContainer.style.lineHeight = "normal", this._rowContainer.setAttribute("aria-hidden", "true"), this._refreshRowElements(this._bufferService.cols, this._bufferService.rows), this._selectionContainer = this._document.createElement("div"), this._selectionContainer.classList.add(C), this._selectionContainer.setAttribute("aria-hidden", "true"), this.dimensions = (0, h.createRenderDimensions)(), this._updateDimensions(), this.register(this._optionsService.onOptionChange(()=>this._handleOptionsChanged())), this.register(this._themeService.onChangeColors((e)=>this._injectCss(e))), this._injectCss(this._themeService.colors), this._rowFactory = d.createInstance(n.DomRendererRowFactory, document), this._element.classList.add(v + this._terminalClass), this._screenElement.appendChild(this._rowContainer), this._screenElement.appendChild(this._selectionContainer), this.register(this._linkifier2.onShowLinkUnderline((e)=>this._handleLinkHover(e))), this.register(this._linkifier2.onHideLinkUnderline((e)=>this._handleLinkLeave(e))), this.register((0, u.toDisposable)(()=>{
                            this._element.classList.remove(v + this._terminalClass), this._rowContainer.remove(), this._selectionContainer.remove(), this._widthCache.dispose(), this._themeStyleElement.remove(), this._dimensionsStyleElement.remove();
                        })), this._widthCache = new o.WidthCache(this._document, this._helperContainer), this._widthCache.setFont(this._optionsService.rawOptions.fontFamily, this._optionsService.rawOptions.fontSize, this._optionsService.rawOptions.fontWeight, this._optionsService.rawOptions.fontWeightBold), this._setDefaultSpacing();
                    }
                    _updateDimensions() {
                        const e = this._coreBrowserService.dpr;
                        this.dimensions.device.char.width = this._charSizeService.width * e, this.dimensions.device.char.height = Math.ceil(this._charSizeService.height * e), this.dimensions.device.cell.width = this.dimensions.device.char.width + Math.round(this._optionsService.rawOptions.letterSpacing), this.dimensions.device.cell.height = Math.floor(this.dimensions.device.char.height * this._optionsService.rawOptions.lineHeight), this.dimensions.device.char.left = 0, this.dimensions.device.char.top = 0, this.dimensions.device.canvas.width = this.dimensions.device.cell.width * this._bufferService.cols, this.dimensions.device.canvas.height = this.dimensions.device.cell.height * this._bufferService.rows, this.dimensions.css.canvas.width = Math.round(this.dimensions.device.canvas.width / e), this.dimensions.css.canvas.height = Math.round(this.dimensions.device.canvas.height / e), this.dimensions.css.cell.width = this.dimensions.css.canvas.width / this._bufferService.cols, this.dimensions.css.cell.height = this.dimensions.css.canvas.height / this._bufferService.rows;
                        for (const e of this._rowElements)e.style.width = `${this.dimensions.css.canvas.width}px`, e.style.height = `${this.dimensions.css.cell.height}px`, e.style.lineHeight = `${this.dimensions.css.cell.height}px`, e.style.overflow = "hidden";
                        this._dimensionsStyleElement || (this._dimensionsStyleElement = this._document.createElement("style"), this._screenElement.appendChild(this._dimensionsStyleElement));
                        const t = `${this._terminalSelector} .${p} span { display: inline-block; height: 100%; vertical-align: top;}`;
                        this._dimensionsStyleElement.textContent = t, this._selectionContainer.style.height = this._viewportElement.style.height, this._screenElement.style.width = `${this.dimensions.css.canvas.width}px`, this._screenElement.style.height = `${this.dimensions.css.canvas.height}px`;
                    }
                    _injectCss(e) {
                        this._themeStyleElement || (this._themeStyleElement = this._document.createElement("style"), this._screenElement.appendChild(this._themeStyleElement));
                        let t = `${this._terminalSelector} .${p} { color: ${e.foreground.css}; font-family: ${this._optionsService.rawOptions.fontFamily}; font-size: ${this._optionsService.rawOptions.fontSize}px; font-kerning: none; white-space: pre}`;
                        t += `${this._terminalSelector} .${p} .xterm-dim { color: ${d.color.multiplyOpacity(e.foreground, .5).css};}`, t += `${this._terminalSelector} span:not(.xterm-bold) { font-weight: ${this._optionsService.rawOptions.fontWeight};}${this._terminalSelector} span.xterm-bold { font-weight: ${this._optionsService.rawOptions.fontWeightBold};}${this._terminalSelector} span.xterm-italic { font-style: italic;}`;
                        const i = `blink_underline_${this._terminalClass}`, s = `blink_bar_${this._terminalClass}`, r = `blink_block_${this._terminalClass}`;
                        t += `@keyframes ${i} { 50% {  border-bottom-style: hidden; }}`, t += `@keyframes ${s} { 50% {  box-shadow: none; }}`, t += `@keyframes ${r} { 0% {  background-color: ${e.cursor.css};  color: ${e.cursorAccent.css}; } 50% {  background-color: inherit;  color: ${e.cursor.css}; }}`, t += `${this._terminalSelector} .${p}.${S} .xterm-cursor.xterm-cursor-blink.xterm-cursor-underline { animation: ${i} 1s step-end infinite;}${this._terminalSelector} .${p}.${S} .xterm-cursor.xterm-cursor-blink.xterm-cursor-bar { animation: ${s} 1s step-end infinite;}${this._terminalSelector} .${p}.${S} .xterm-cursor.xterm-cursor-blink.xterm-cursor-block { animation: ${r} 1s step-end infinite;}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-block { background-color: ${e.cursor.css}; color: ${e.cursorAccent.css};}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-block:not(.xterm-cursor-blink) { background-color: ${e.cursor.css} !important; color: ${e.cursorAccent.css} !important;}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-outline { outline: 1px solid ${e.cursor.css}; outline-offset: -1px;}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-bar { box-shadow: ${this._optionsService.rawOptions.cursorWidth}px 0 0 ${e.cursor.css} inset;}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-underline { border-bottom: 1px ${e.cursor.css}; border-bottom-style: solid; height: calc(100% - 1px);}`, t += `${this._terminalSelector} .${C} { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}${this._terminalSelector}.focus .${C} div { position: absolute; background-color: ${e.selectionBackgroundOpaque.css};}${this._terminalSelector} .${C} div { position: absolute; background-color: ${e.selectionInactiveBackgroundOpaque.css};}`;
                        for (const [i, s] of e.ansi.entries())t += `${this._terminalSelector} .${g}${i} { color: ${s.css}; }${this._terminalSelector} .${g}${i}.xterm-dim { color: ${d.color.multiplyOpacity(s, .5).css}; }${this._terminalSelector} .${m}${i} { background-color: ${s.css}; }`;
                        t += `${this._terminalSelector} .${g}${a.INVERTED_DEFAULT_COLOR} { color: ${d.color.opaque(e.background).css}; }${this._terminalSelector} .${g}${a.INVERTED_DEFAULT_COLOR}.xterm-dim { color: ${d.color.multiplyOpacity(d.color.opaque(e.background), .5).css}; }${this._terminalSelector} .${m}${a.INVERTED_DEFAULT_COLOR} { background-color: ${e.foreground.css}; }`, this._themeStyleElement.textContent = t;
                    }
                    _setDefaultSpacing() {
                        const e = this.dimensions.css.cell.width - this._widthCache.get("W", !1, !1);
                        this._rowContainer.style.letterSpacing = `${e}px`, this._rowFactory.defaultSpacing = e;
                    }
                    handleDevicePixelRatioChange() {
                        this._updateDimensions(), this._widthCache.clear(), this._setDefaultSpacing();
                    }
                    _refreshRowElements(e, t) {
                        for(let e = this._rowElements.length; e <= t; e++){
                            const e = this._document.createElement("div");
                            this._rowContainer.appendChild(e), this._rowElements.push(e);
                        }
                        for(; this._rowElements.length > t;)this._rowContainer.removeChild(this._rowElements.pop());
                    }
                    handleResize(e, t) {
                        this._refreshRowElements(e, t), this._updateDimensions(), this.handleSelectionChanged(this._selectionRenderModel.selectionStart, this._selectionRenderModel.selectionEnd, this._selectionRenderModel.columnSelectMode);
                    }
                    handleCharSizeChanged() {
                        this._updateDimensions(), this._widthCache.clear(), this._setDefaultSpacing();
                    }
                    handleBlur() {
                        this._rowContainer.classList.remove(S), this.renderRows(0, this._bufferService.rows - 1);
                    }
                    handleFocus() {
                        this._rowContainer.classList.add(S), this.renderRows(this._bufferService.buffer.y, this._bufferService.buffer.y);
                    }
                    handleSelectionChanged(e, t, i) {
                        if (this._selectionContainer.replaceChildren(), this._rowFactory.handleSelectionChanged(e, t, i), this.renderRows(0, this._bufferService.rows - 1), !e || !t) return;
                        this._selectionRenderModel.update(this._terminal, e, t, i);
                        const s = this._selectionRenderModel.viewportStartRow, r = this._selectionRenderModel.viewportEndRow, n = this._selectionRenderModel.viewportCappedStartRow, o = this._selectionRenderModel.viewportCappedEndRow;
                        if (n >= this._bufferService.rows || o < 0) return;
                        const a = this._document.createDocumentFragment();
                        if (i) {
                            const i = e[0] > t[0];
                            a.appendChild(this._createSelectionElement(n, i ? t[0] : e[0], i ? e[0] : t[0], o - n + 1));
                        } else {
                            const i = s === n ? e[0] : 0, h = n === r ? t[0] : this._bufferService.cols;
                            a.appendChild(this._createSelectionElement(n, i, h));
                            const c = o - n - 1;
                            if (a.appendChild(this._createSelectionElement(n + 1, 0, this._bufferService.cols, c)), n !== o) {
                                const e = r === o ? t[0] : this._bufferService.cols;
                                a.appendChild(this._createSelectionElement(o, 0, e));
                            }
                        }
                        this._selectionContainer.appendChild(a);
                    }
                    _createSelectionElement(e, t, i, s = 1) {
                        const r = this._document.createElement("div"), n = t * this.dimensions.css.cell.width;
                        let o = this.dimensions.css.cell.width * (i - t);
                        return n + o > this.dimensions.css.canvas.width && (o = this.dimensions.css.canvas.width - n), r.style.height = s * this.dimensions.css.cell.height + "px", r.style.top = e * this.dimensions.css.cell.height + "px", r.style.left = `${n}px`, r.style.width = `${o}px`, r;
                    }
                    handleCursorMove() {}
                    _handleOptionsChanged() {
                        this._updateDimensions(), this._injectCss(this._themeService.colors), this._widthCache.setFont(this._optionsService.rawOptions.fontFamily, this._optionsService.rawOptions.fontSize, this._optionsService.rawOptions.fontWeight, this._optionsService.rawOptions.fontWeightBold), this._setDefaultSpacing();
                    }
                    clear() {
                        for (const e of this._rowElements)e.replaceChildren();
                    }
                    renderRows(e, t) {
                        const i = this._bufferService.buffer, s = i.ybase + i.y, r = Math.min(i.x, this._bufferService.cols - 1), n = this._optionsService.rawOptions.cursorBlink, o = this._optionsService.rawOptions.cursorStyle, a = this._optionsService.rawOptions.cursorInactiveStyle;
                        for(let h = e; h <= t; h++){
                            const e = h + i.ydisp, t = this._rowElements[h], c = i.lines.get(e);
                            if (!t || !c) break;
                            t.replaceChildren(...this._rowFactory.createRow(c, e, e === s, o, a, r, n, this.dimensions.css.cell.width, this._widthCache, -1, -1));
                        }
                    }
                    get _terminalSelector() {
                        return `.${v}${this._terminalClass}`;
                    }
                    _handleLinkHover(e) {
                        this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, !0);
                    }
                    _handleLinkLeave(e) {
                        this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, !1);
                    }
                    _setCellUnderline(e, t, i, s, r, n) {
                        i < 0 && (e = 0), s < 0 && (t = 0);
                        const o = this._bufferService.rows - 1;
                        i = Math.max(Math.min(i, o), 0), s = Math.max(Math.min(s, o), 0), r = Math.min(r, this._bufferService.cols);
                        const a = this._bufferService.buffer, h = a.ybase + a.y, c = Math.min(a.x, r - 1), l = this._optionsService.rawOptions.cursorBlink, d = this._optionsService.rawOptions.cursorStyle, _ = this._optionsService.rawOptions.cursorInactiveStyle;
                        for(let o = i; o <= s; ++o){
                            const u = o + a.ydisp, f = this._rowElements[o], v = a.lines.get(u);
                            if (!f || !v) break;
                            f.replaceChildren(...this._rowFactory.createRow(v, u, u === h, d, _, c, l, this.dimensions.css.cell.width, this._widthCache, n ? o === i ? e : 0 : -1, n ? (o === s ? t : r) - 1 : -1));
                        }
                    }
                };
                t.DomRenderer = w = s([
                    r(7, f.IInstantiationService),
                    r(8, l.ICharSizeService),
                    r(9, f.IOptionsService),
                    r(10, f.IBufferService),
                    r(11, l.ICoreBrowserService),
                    r(12, l.IThemeService)
                ], w);
            },
            3787: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DomRendererRowFactory = void 0;
                const n = i(2223), o = i(643), a = i(511), h = i(2585), c = i(8055), l = i(4725), d = i(4269), _ = i(6171), u = i(3734);
                let f = t.DomRendererRowFactory = class {
                    constructor(e, t, i, s, r, n, o){
                        this._document = e, this._characterJoinerService = t, this._optionsService = i, this._coreBrowserService = s, this._coreService = r, this._decorationService = n, this._themeService = o, this._workCell = new a.CellData, this._columnSelectMode = !1, this.defaultSpacing = 0;
                    }
                    handleSelectionChanged(e, t, i) {
                        this._selectionStart = e, this._selectionEnd = t, this._columnSelectMode = i;
                    }
                    createRow(e, t, i, s, r, a, h, l, _, f, p) {
                        const g = [], m = this._characterJoinerService.getJoinedCharacters(t), S = this._themeService.colors;
                        let C, b = e.getNoBgTrimmedLength();
                        i && b < a + 1 && (b = a + 1);
                        let w = 0, y = "", E = 0, k = 0, L = 0, D = !1, R = 0, x = !1, A = 0;
                        const B = [], T = -1 !== f && -1 !== p;
                        for(let M = 0; M < b; M++){
                            e.loadCell(M, this._workCell);
                            let b = this._workCell.getWidth();
                            if (0 === b) continue;
                            let O = !1, P = M, I = this._workCell;
                            if (m.length > 0 && M === m[0][0]) {
                                O = !0;
                                const t = m.shift();
                                I = new d.JoinedCellData(this._workCell, e.translateToString(!0, t[0], t[1]), t[1] - t[0]), P = t[1] - 1, b = I.getWidth();
                            }
                            const H = this._isCellInSelection(M, t), F = i && M === a, W = T && M >= f && M <= p;
                            let U = !1;
                            this._decorationService.forEachDecorationAtCell(M, t, void 0, (e)=>{
                                U = !0;
                            });
                            let N = I.getChars() || o.WHITESPACE_CELL_CHAR;
                            if (" " === N && (I.isUnderline() || I.isOverline()) && (N = "\xa0"), A = b * l - _.get(N, I.isBold(), I.isItalic()), C) {
                                if (w && (H && x || !H && !x && I.bg === E) && (H && x && S.selectionForeground || I.fg === k) && I.extended.ext === L && W === D && A === R && !F && !O && !U) {
                                    I.isInvisible() ? y += o.WHITESPACE_CELL_CHAR : y += N, w++;
                                    continue;
                                }
                                w && (C.textContent = y), C = this._document.createElement("span"), w = 0, y = "";
                            } else C = this._document.createElement("span");
                            if (E = I.bg, k = I.fg, L = I.extended.ext, D = W, R = A, x = H, O && a >= M && a <= P && (a = M), !this._coreService.isCursorHidden && F && this._coreService.isCursorInitialized) {
                                if (B.push("xterm-cursor"), this._coreBrowserService.isFocused) h && B.push("xterm-cursor-blink"), B.push("bar" === s ? "xterm-cursor-bar" : "underline" === s ? "xterm-cursor-underline" : "xterm-cursor-block");
                                else if (r) switch(r){
                                    case "outline":
                                        B.push("xterm-cursor-outline");
                                        break;
                                    case "block":
                                        B.push("xterm-cursor-block");
                                        break;
                                    case "bar":
                                        B.push("xterm-cursor-bar");
                                        break;
                                    case "underline":
                                        B.push("xterm-cursor-underline");
                                }
                            }
                            if (I.isBold() && B.push("xterm-bold"), I.isItalic() && B.push("xterm-italic"), I.isDim() && B.push("xterm-dim"), y = I.isInvisible() ? o.WHITESPACE_CELL_CHAR : I.getChars() || o.WHITESPACE_CELL_CHAR, I.isUnderline() && (B.push(`xterm-underline-${I.extended.underlineStyle}`), " " === y && (y = "\xa0"), !I.isUnderlineColorDefault())) {
                                if (I.isUnderlineColorRGB()) C.style.textDecorationColor = `rgb(${u.AttributeData.toColorRGB(I.getUnderlineColor()).join(",")})`;
                                else {
                                    let e = I.getUnderlineColor();
                                    this._optionsService.rawOptions.drawBoldTextInBrightColors && I.isBold() && e < 8 && (e += 8), C.style.textDecorationColor = S.ansi[e].css;
                                }
                            }
                            I.isOverline() && (B.push("xterm-overline"), " " === y && (y = "\xa0")), I.isStrikethrough() && B.push("xterm-strikethrough"), W && (C.style.textDecoration = "underline");
                            let $ = I.getFgColor(), j = I.getFgColorMode(), z = I.getBgColor(), K = I.getBgColorMode();
                            const q = !!I.isInverse();
                            if (q) {
                                const e = $;
                                $ = z, z = e;
                                const t = j;
                                j = K, K = t;
                            }
                            let V, G, X, J = !1;
                            switch(this._decorationService.forEachDecorationAtCell(M, t, void 0, (e)=>{
                                "top" !== e.options.layer && J || (e.backgroundColorRGB && (K = 50331648, z = e.backgroundColorRGB.rgba >> 8 & 16777215, V = e.backgroundColorRGB), e.foregroundColorRGB && (j = 50331648, $ = e.foregroundColorRGB.rgba >> 8 & 16777215, G = e.foregroundColorRGB), J = "top" === e.options.layer);
                            }), !J && H && (V = this._coreBrowserService.isFocused ? S.selectionBackgroundOpaque : S.selectionInactiveBackgroundOpaque, z = V.rgba >> 8 & 16777215, K = 50331648, J = !0, S.selectionForeground && (j = 50331648, $ = S.selectionForeground.rgba >> 8 & 16777215, G = S.selectionForeground)), J && B.push("xterm-decoration-top"), K){
                                case 16777216:
                                case 33554432:
                                    X = S.ansi[z], B.push(`xterm-bg-${z}`);
                                    break;
                                case 50331648:
                                    X = c.channels.toColor(z >> 16, z >> 8 & 255, 255 & z), this._addStyle(C, `background-color:#${v((z >>> 0).toString(16), "0", 6)}`);
                                    break;
                                default:
                                    q ? (X = S.foreground, B.push(`xterm-bg-${n.INVERTED_DEFAULT_COLOR}`)) : X = S.background;
                            }
                            switch(V || I.isDim() && (V = c.color.multiplyOpacity(X, .5)), j){
                                case 16777216:
                                case 33554432:
                                    I.isBold() && $ < 8 && this._optionsService.rawOptions.drawBoldTextInBrightColors && ($ += 8), this._applyMinimumContrast(C, X, S.ansi[$], I, V, void 0) || B.push(`xterm-fg-${$}`);
                                    break;
                                case 50331648:
                                    const e1 = c.channels.toColor($ >> 16 & 255, $ >> 8 & 255, 255 & $);
                                    this._applyMinimumContrast(C, X, e1, I, V, G) || this._addStyle(C, `color:#${v($.toString(16), "0", 6)}`);
                                    break;
                                default:
                                    this._applyMinimumContrast(C, X, S.foreground, I, V, G) || q && B.push(`xterm-fg-${n.INVERTED_DEFAULT_COLOR}`);
                            }
                            B.length && (C.className = B.join(" "), B.length = 0), F || O || U ? C.textContent = y : w++, A !== this.defaultSpacing && (C.style.letterSpacing = `${A}px`), g.push(C), M = P;
                        }
                        return C && w && (C.textContent = y), g;
                    }
                    _applyMinimumContrast(e, t, i, s, r, n) {
                        if (1 === this._optionsService.rawOptions.minimumContrastRatio || (0, _.treatGlyphAsBackgroundColor)(s.getCode())) return !1;
                        const o = this._getContrastCache(s);
                        let a;
                        if (r || n || (a = o.getColor(t.rgba, i.rgba)), void 0 === a) {
                            const e = this._optionsService.rawOptions.minimumContrastRatio / (s.isDim() ? 2 : 1);
                            a = c.color.ensureContrastRatio(r || t, n || i, e), o.setColor((r || t).rgba, (n || i).rgba, a ?? null);
                        }
                        return !!a && (this._addStyle(e, `color:${a.css}`), !0);
                    }
                    _getContrastCache(e) {
                        return e.isDim() ? this._themeService.colors.halfContrastCache : this._themeService.colors.contrastCache;
                    }
                    _addStyle(e, t) {
                        e.setAttribute("style", `${e.getAttribute("style") || ""}${t};`);
                    }
                    _isCellInSelection(e, t) {
                        const i = this._selectionStart, s = this._selectionEnd;
                        return !(!i || !s) && (this._columnSelectMode ? i[0] <= s[0] ? e >= i[0] && t >= i[1] && e < s[0] && t <= s[1] : e < i[0] && t >= i[1] && e >= s[0] && t <= s[1] : t > i[1] && t < s[1] || i[1] === s[1] && t === i[1] && e >= i[0] && e < s[0] || i[1] < s[1] && t === s[1] && e < s[0] || i[1] < s[1] && t === i[1] && e >= i[0]);
                    }
                };
                function v(e, t, i) {
                    for(; e.length < i;)e = t + e;
                    return e;
                }
                t.DomRendererRowFactory = f = s([
                    r(1, l.ICharacterJoinerService),
                    r(2, h.IOptionsService),
                    r(3, l.ICoreBrowserService),
                    r(4, h.ICoreService),
                    r(5, h.IDecorationService),
                    r(6, l.IThemeService)
                ], f);
            },
            2550: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.WidthCache = void 0, t.WidthCache = class {
                    constructor(e, t){
                        this._flat = new Float32Array(256), this._font = "", this._fontSize = 0, this._weight = "normal", this._weightBold = "bold", this._measureElements = [], this._container = e.createElement("div"), this._container.classList.add("xterm-width-cache-measure-container"), this._container.setAttribute("aria-hidden", "true"), this._container.style.whiteSpace = "pre", this._container.style.fontKerning = "none";
                        const i = e.createElement("span");
                        i.classList.add("xterm-char-measure-element");
                        const s = e.createElement("span");
                        s.classList.add("xterm-char-measure-element"), s.style.fontWeight = "bold";
                        const r = e.createElement("span");
                        r.classList.add("xterm-char-measure-element"), r.style.fontStyle = "italic";
                        const n = e.createElement("span");
                        n.classList.add("xterm-char-measure-element"), n.style.fontWeight = "bold", n.style.fontStyle = "italic", this._measureElements = [
                            i,
                            s,
                            r,
                            n
                        ], this._container.appendChild(i), this._container.appendChild(s), this._container.appendChild(r), this._container.appendChild(n), t.appendChild(this._container), this.clear();
                    }
                    dispose() {
                        this._container.remove(), this._measureElements.length = 0, this._holey = void 0;
                    }
                    clear() {
                        this._flat.fill(-9999), this._holey = new Map;
                    }
                    setFont(e, t, i, s) {
                        e === this._font && t === this._fontSize && i === this._weight && s === this._weightBold || (this._font = e, this._fontSize = t, this._weight = i, this._weightBold = s, this._container.style.fontFamily = this._font, this._container.style.fontSize = `${this._fontSize}px`, this._measureElements[0].style.fontWeight = `${i}`, this._measureElements[1].style.fontWeight = `${s}`, this._measureElements[2].style.fontWeight = `${i}`, this._measureElements[3].style.fontWeight = `${s}`, this.clear());
                    }
                    get(e, t, i) {
                        let s = 0;
                        if (!t && !i && 1 === e.length && (s = e.charCodeAt(0)) < 256) {
                            if (-9999 !== this._flat[s]) return this._flat[s];
                            const t = this._measure(e, 0);
                            return t > 0 && (this._flat[s] = t), t;
                        }
                        let r = e;
                        t && (r += "B"), i && (r += "I");
                        let n = this._holey.get(r);
                        if (void 0 === n) {
                            let s = 0;
                            t && (s |= 1), i && (s |= 2), n = this._measure(e, s), n > 0 && this._holey.set(r, n);
                        }
                        return n;
                    }
                    _measure(e, t) {
                        const i = this._measureElements[t];
                        return i.textContent = e.repeat(32), i.offsetWidth / 32;
                    }
                };
            },
            2223: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.TEXT_BASELINE = t.DIM_OPACITY = t.INVERTED_DEFAULT_COLOR = void 0;
                const s = i(6114);
                t.INVERTED_DEFAULT_COLOR = 257, t.DIM_OPACITY = .5, t.TEXT_BASELINE = s.isFirefox || s.isLegacyEdge ? "bottom" : "ideographic";
            },
            6171: (e, t)=>{
                function i(e) {
                    return 57508 <= e && e <= 57558;
                }
                function s(e) {
                    return e >= 128512 && e <= 128591 || e >= 127744 && e <= 128511 || e >= 128640 && e <= 128767 || e >= 9728 && e <= 9983 || e >= 9984 && e <= 10175 || e >= 65024 && e <= 65039 || e >= 129280 && e <= 129535 || e >= 127462 && e <= 127487;
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.computeNextVariantOffset = t.createRenderDimensions = t.treatGlyphAsBackgroundColor = t.allowRescaling = t.isEmoji = t.isRestrictedPowerlineGlyph = t.isPowerlineGlyph = t.throwIfFalsy = void 0, t.throwIfFalsy = function(e) {
                    if (!e) throw new Error("value must not be falsy");
                    return e;
                }, t.isPowerlineGlyph = i, t.isRestrictedPowerlineGlyph = function(e) {
                    return 57520 <= e && e <= 57527;
                }, t.isEmoji = s, t.allowRescaling = function(e, t, r, n) {
                    return 1 === t && r > Math.ceil(1.5 * n) && void 0 !== e && e > 255 && !s(e) && !i(e) && !function(e) {
                        return 57344 <= e && e <= 63743;
                    }(e);
                }, t.treatGlyphAsBackgroundColor = function(e) {
                    return i(e) || function(e) {
                        return 9472 <= e && e <= 9631;
                    }(e);
                }, t.createRenderDimensions = function() {
                    return {
                        css: {
                            canvas: {
                                width: 0,
                                height: 0
                            },
                            cell: {
                                width: 0,
                                height: 0
                            }
                        },
                        device: {
                            canvas: {
                                width: 0,
                                height: 0
                            },
                            cell: {
                                width: 0,
                                height: 0
                            },
                            char: {
                                width: 0,
                                height: 0,
                                left: 0,
                                top: 0
                            }
                        }
                    };
                }, t.computeNextVariantOffset = function(e, t, i = 0) {
                    return (e - (2 * Math.round(t) - i)) % (2 * Math.round(t));
                };
            },
            6052: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createSelectionRenderModel = void 0;
                class i {
                    constructor(){
                        this.clear();
                    }
                    clear() {
                        this.hasSelection = !1, this.columnSelectMode = !1, this.viewportStartRow = 0, this.viewportEndRow = 0, this.viewportCappedStartRow = 0, this.viewportCappedEndRow = 0, this.startCol = 0, this.endCol = 0, this.selectionStart = void 0, this.selectionEnd = void 0;
                    }
                    update(e, t, i, s = !1) {
                        if (this.selectionStart = t, this.selectionEnd = i, !t || !i || t[0] === i[0] && t[1] === i[1]) return void this.clear();
                        const r = e.buffers.active.ydisp, n = t[1] - r, o = i[1] - r, a = Math.max(n, 0), h = Math.min(o, e.rows - 1);
                        a >= e.rows || h < 0 ? this.clear() : (this.hasSelection = !0, this.columnSelectMode = s, this.viewportStartRow = n, this.viewportEndRow = o, this.viewportCappedStartRow = a, this.viewportCappedEndRow = h, this.startCol = t[0], this.endCol = i[0]);
                    }
                    isCellSelected(e, t, i) {
                        return !!this.hasSelection && (i -= e.buffer.active.viewportY, this.columnSelectMode ? this.startCol <= this.endCol ? t >= this.startCol && i >= this.viewportCappedStartRow && t < this.endCol && i <= this.viewportCappedEndRow : t < this.startCol && i >= this.viewportCappedStartRow && t >= this.endCol && i <= this.viewportCappedEndRow : i > this.viewportStartRow && i < this.viewportEndRow || this.viewportStartRow === this.viewportEndRow && i === this.viewportStartRow && t >= this.startCol && t < this.endCol || this.viewportStartRow < this.viewportEndRow && i === this.viewportEndRow && t < this.endCol || this.viewportStartRow < this.viewportEndRow && i === this.viewportStartRow && t >= this.startCol);
                    }
                }
                t.createSelectionRenderModel = function() {
                    return new i;
                };
            },
            456: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.SelectionModel = void 0, t.SelectionModel = class {
                    constructor(e){
                        this._bufferService = e, this.isSelectAllActive = !1, this.selectionStartLength = 0;
                    }
                    clearSelection() {
                        this.selectionStart = void 0, this.selectionEnd = void 0, this.isSelectAllActive = !1, this.selectionStartLength = 0;
                    }
                    get finalSelectionStart() {
                        return this.isSelectAllActive ? [
                            0,
                            0
                        ] : this.selectionEnd && this.selectionStart && this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart;
                    }
                    get finalSelectionEnd() {
                        if (this.isSelectAllActive) return [
                            this._bufferService.cols,
                            this._bufferService.buffer.ybase + this._bufferService.rows - 1
                        ];
                        if (this.selectionStart) {
                            if (!this.selectionEnd || this.areSelectionValuesReversed()) {
                                const e = this.selectionStart[0] + this.selectionStartLength;
                                return e > this._bufferService.cols ? e % this._bufferService.cols == 0 ? [
                                    this._bufferService.cols,
                                    this.selectionStart[1] + Math.floor(e / this._bufferService.cols) - 1
                                ] : [
                                    e % this._bufferService.cols,
                                    this.selectionStart[1] + Math.floor(e / this._bufferService.cols)
                                ] : [
                                    e,
                                    this.selectionStart[1]
                                ];
                            }
                            if (this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1]) {
                                const e = this.selectionStart[0] + this.selectionStartLength;
                                return e > this._bufferService.cols ? [
                                    e % this._bufferService.cols,
                                    this.selectionStart[1] + Math.floor(e / this._bufferService.cols)
                                ] : [
                                    Math.max(e, this.selectionEnd[0]),
                                    this.selectionEnd[1]
                                ];
                            }
                            return this.selectionEnd;
                        }
                    }
                    areSelectionValuesReversed() {
                        const e = this.selectionStart, t = this.selectionEnd;
                        return !(!e || !t) && (e[1] > t[1] || e[1] === t[1] && e[0] > t[0]);
                    }
                    handleTrim(e) {
                        return this.selectionStart && (this.selectionStart[1] -= e), this.selectionEnd && (this.selectionEnd[1] -= e), this.selectionEnd && this.selectionEnd[1] < 0 ? (this.clearSelection(), !0) : (this.selectionStart && this.selectionStart[1] < 0 && (this.selectionStart[1] = 0), !1);
                    }
                };
            },
            428: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.CharSizeService = void 0;
                const n = i(2585), o = i(8460), a = i(844);
                let h = t.CharSizeService = class extends a.Disposable {
                    get hasValidSize() {
                        return this.width > 0 && this.height > 0;
                    }
                    constructor(e, t, i){
                        super(), this._optionsService = i, this.width = 0, this.height = 0, this._onCharSizeChange = this.register(new o.EventEmitter), this.onCharSizeChange = this._onCharSizeChange.event;
                        try {
                            this._measureStrategy = this.register(new d(this._optionsService));
                        } catch  {
                            this._measureStrategy = this.register(new l(e, t, this._optionsService));
                        }
                        this.register(this._optionsService.onMultipleOptionChange([
                            "fontFamily",
                            "fontSize"
                        ], ()=>this.measure()));
                    }
                    measure() {
                        const e = this._measureStrategy.measure();
                        e.width === this.width && e.height === this.height || (this.width = e.width, this.height = e.height, this._onCharSizeChange.fire());
                    }
                };
                t.CharSizeService = h = s([
                    r(2, n.IOptionsService)
                ], h);
                class c extends a.Disposable {
                    constructor(){
                        super(...arguments), this._result = {
                            width: 0,
                            height: 0
                        };
                    }
                    _validateAndSet(e, t) {
                        void 0 !== e && e > 0 && void 0 !== t && t > 0 && (this._result.width = e, this._result.height = t);
                    }
                }
                class l extends c {
                    constructor(e, t, i){
                        super(), this._document = e, this._parentElement = t, this._optionsService = i, this._measureElement = this._document.createElement("span"), this._measureElement.classList.add("xterm-char-measure-element"), this._measureElement.textContent = "W".repeat(32), this._measureElement.setAttribute("aria-hidden", "true"), this._measureElement.style.whiteSpace = "pre", this._measureElement.style.fontKerning = "none", this._parentElement.appendChild(this._measureElement);
                    }
                    measure() {
                        return this._measureElement.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._measureElement.style.fontSize = `${this._optionsService.rawOptions.fontSize}px`, this._validateAndSet(Number(this._measureElement.offsetWidth) / 32, Number(this._measureElement.offsetHeight)), this._result;
                    }
                }
                class d extends c {
                    constructor(e){
                        super(), this._optionsService = e, this._canvas = new OffscreenCanvas(100, 100), this._ctx = this._canvas.getContext("2d");
                        const t = this._ctx.measureText("W");
                        if (!("width" in t && "fontBoundingBoxAscent" in t && "fontBoundingBoxDescent" in t)) throw new Error("Required font metrics not supported");
                    }
                    measure() {
                        this._ctx.font = `${this._optionsService.rawOptions.fontSize}px ${this._optionsService.rawOptions.fontFamily}`;
                        const e = this._ctx.measureText("W");
                        return this._validateAndSet(e.width, e.fontBoundingBoxAscent + e.fontBoundingBoxDescent), this._result;
                    }
                }
            },
            4269: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.CharacterJoinerService = t.JoinedCellData = void 0;
                const n = i(3734), o = i(643), a = i(511), h = i(2585);
                class c extends n.AttributeData {
                    constructor(e, t, i){
                        super(), this.content = 0, this.combinedData = "", this.fg = e.fg, this.bg = e.bg, this.combinedData = t, this._width = i;
                    }
                    isCombined() {
                        return 2097152;
                    }
                    getWidth() {
                        return this._width;
                    }
                    getChars() {
                        return this.combinedData;
                    }
                    getCode() {
                        return 2097151;
                    }
                    setFromCharData(e) {
                        throw new Error("not implemented");
                    }
                    getAsCharData() {
                        return [
                            this.fg,
                            this.getChars(),
                            this.getWidth(),
                            this.getCode()
                        ];
                    }
                }
                t.JoinedCellData = c;
                let l = t.CharacterJoinerService = class e {
                    constructor(e){
                        this._bufferService = e, this._characterJoiners = [], this._nextCharacterJoinerId = 0, this._workCell = new a.CellData;
                    }
                    register(e) {
                        const t = {
                            id: this._nextCharacterJoinerId++,
                            handler: e
                        };
                        return this._characterJoiners.push(t), t.id;
                    }
                    deregister(e) {
                        for(let t = 0; t < this._characterJoiners.length; t++)if (this._characterJoiners[t].id === e) return this._characterJoiners.splice(t, 1), !0;
                        return !1;
                    }
                    getJoinedCharacters(e) {
                        if (0 === this._characterJoiners.length) return [];
                        const t = this._bufferService.buffer.lines.get(e);
                        if (!t || 0 === t.length) return [];
                        const i = [], s = t.translateToString(!0);
                        let r = 0, n = 0, a = 0, h = t.getFg(0), c = t.getBg(0);
                        for(let e = 0; e < t.getTrimmedLength(); e++)if (t.loadCell(e, this._workCell), 0 !== this._workCell.getWidth()) {
                            if (this._workCell.fg !== h || this._workCell.bg !== c) {
                                if (e - r > 1) {
                                    const e = this._getJoinedRanges(s, a, n, t, r);
                                    for(let t = 0; t < e.length; t++)i.push(e[t]);
                                }
                                r = e, a = n, h = this._workCell.fg, c = this._workCell.bg;
                            }
                            n += this._workCell.getChars().length || o.WHITESPACE_CELL_CHAR.length;
                        }
                        if (this._bufferService.cols - r > 1) {
                            const e = this._getJoinedRanges(s, a, n, t, r);
                            for(let t = 0; t < e.length; t++)i.push(e[t]);
                        }
                        return i;
                    }
                    _getJoinedRanges(t, i, s, r, n) {
                        const o = t.substring(i, s);
                        let a = [];
                        try {
                            a = this._characterJoiners[0].handler(o);
                        } catch (e) {
                            console.error(e);
                        }
                        for(let t = 1; t < this._characterJoiners.length; t++)try {
                            const i = this._characterJoiners[t].handler(o);
                            for(let t = 0; t < i.length; t++)e._mergeRanges(a, i[t]);
                        } catch (e) {
                            console.error(e);
                        }
                        return this._stringRangesToCellRanges(a, r, n), a;
                    }
                    _stringRangesToCellRanges(e, t, i) {
                        let s = 0, r = !1, n = 0, a = e[s];
                        if (a) {
                            for(let h = i; h < this._bufferService.cols; h++){
                                const i = t.getWidth(h), c = t.getString(h).length || o.WHITESPACE_CELL_CHAR.length;
                                if (0 !== i) {
                                    if (!r && a[0] <= n && (a[0] = h, r = !0), a[1] <= n) {
                                        if (a[1] = h, a = e[++s], !a) break;
                                        a[0] <= n ? (a[0] = h, r = !0) : r = !1;
                                    }
                                    n += c;
                                }
                            }
                            a && (a[1] = this._bufferService.cols);
                        }
                    }
                    static _mergeRanges(e, t) {
                        let i = !1;
                        for(let s = 0; s < e.length; s++){
                            const r = e[s];
                            if (i) {
                                if (t[1] <= r[0]) return e[s - 1][1] = t[1], e;
                                if (t[1] <= r[1]) return e[s - 1][1] = Math.max(t[1], r[1]), e.splice(s, 1), e;
                                e.splice(s, 1), s--;
                            } else {
                                if (t[1] <= r[0]) return e.splice(s, 0, t), e;
                                if (t[1] <= r[1]) return r[0] = Math.min(t[0], r[0]), e;
                                t[0] < r[1] && (r[0] = Math.min(t[0], r[0]), i = !0);
                            }
                        }
                        return i ? e[e.length - 1][1] = t[1] : e.push(t), e;
                    }
                };
                t.CharacterJoinerService = l = s([
                    r(0, h.IBufferService)
                ], l);
            },
            5114: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.CoreBrowserService = void 0;
                const s = i(844), r = i(8460), n = i(3656);
                class o extends s.Disposable {
                    constructor(e, t, i){
                        super(), this._textarea = e, this._window = t, this.mainDocument = i, this._isFocused = !1, this._cachedIsFocused = void 0, this._screenDprMonitor = new a(this._window), this._onDprChange = this.register(new r.EventEmitter), this.onDprChange = this._onDprChange.event, this._onWindowChange = this.register(new r.EventEmitter), this.onWindowChange = this._onWindowChange.event, this.register(this.onWindowChange((e)=>this._screenDprMonitor.setWindow(e))), this.register((0, r.forwardEvent)(this._screenDprMonitor.onDprChange, this._onDprChange)), this._textarea.addEventListener("focus", ()=>this._isFocused = !0), this._textarea.addEventListener("blur", ()=>this._isFocused = !1);
                    }
                    get window() {
                        return this._window;
                    }
                    set window(e) {
                        this._window !== e && (this._window = e, this._onWindowChange.fire(this._window));
                    }
                    get dpr() {
                        return this.window.devicePixelRatio;
                    }
                    get isFocused() {
                        return void 0 === this._cachedIsFocused && (this._cachedIsFocused = this._isFocused && this._textarea.ownerDocument.hasFocus(), queueMicrotask(()=>this._cachedIsFocused = void 0)), this._cachedIsFocused;
                    }
                }
                t.CoreBrowserService = o;
                class a extends s.Disposable {
                    constructor(e){
                        super(), this._parentWindow = e, this._windowResizeListener = this.register(new s.MutableDisposable), this._onDprChange = this.register(new r.EventEmitter), this.onDprChange = this._onDprChange.event, this._outerListener = ()=>this._setDprAndFireIfDiffers(), this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio, this._updateDpr(), this._setWindowResizeListener(), this.register((0, s.toDisposable)(()=>this.clearListener()));
                    }
                    setWindow(e) {
                        this._parentWindow = e, this._setWindowResizeListener(), this._setDprAndFireIfDiffers();
                    }
                    _setWindowResizeListener() {
                        this._windowResizeListener.value = (0, n.addDisposableDomListener)(this._parentWindow, "resize", ()=>this._setDprAndFireIfDiffers());
                    }
                    _setDprAndFireIfDiffers() {
                        this._parentWindow.devicePixelRatio !== this._currentDevicePixelRatio && this._onDprChange.fire(this._parentWindow.devicePixelRatio), this._updateDpr();
                    }
                    _updateDpr() {
                        this._outerListener && (this._resolutionMediaMatchList?.removeListener(this._outerListener), this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio, this._resolutionMediaMatchList = this._parentWindow.matchMedia(`screen and (resolution: ${this._parentWindow.devicePixelRatio}dppx)`), this._resolutionMediaMatchList.addListener(this._outerListener));
                    }
                    clearListener() {
                        this._resolutionMediaMatchList && this._outerListener && (this._resolutionMediaMatchList.removeListener(this._outerListener), this._resolutionMediaMatchList = void 0, this._outerListener = void 0);
                    }
                }
            },
            779: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.LinkProviderService = void 0;
                const s = i(844);
                class r extends s.Disposable {
                    constructor(){
                        super(), this.linkProviders = [], this.register((0, s.toDisposable)(()=>this.linkProviders.length = 0));
                    }
                    registerLinkProvider(e) {
                        return this.linkProviders.push(e), {
                            dispose: ()=>{
                                const t = this.linkProviders.indexOf(e);
                                -1 !== t && this.linkProviders.splice(t, 1);
                            }
                        };
                    }
                }
                t.LinkProviderService = r;
            },
            8934: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.MouseService = void 0;
                const n = i(4725), o = i(9806);
                let a = t.MouseService = class {
                    constructor(e, t){
                        this._renderService = e, this._charSizeService = t;
                    }
                    getCoords(e, t, i, s, r) {
                        return (0, o.getCoords)(window, e, t, i, s, this._charSizeService.hasValidSize, this._renderService.dimensions.css.cell.width, this._renderService.dimensions.css.cell.height, r);
                    }
                    getMouseReportCoords(e, t) {
                        const i = (0, o.getCoordsRelativeToElement)(window, e, t);
                        if (this._charSizeService.hasValidSize) return i[0] = Math.min(Math.max(i[0], 0), this._renderService.dimensions.css.canvas.width - 1), i[1] = Math.min(Math.max(i[1], 0), this._renderService.dimensions.css.canvas.height - 1), {
                            col: Math.floor(i[0] / this._renderService.dimensions.css.cell.width),
                            row: Math.floor(i[1] / this._renderService.dimensions.css.cell.height),
                            x: Math.floor(i[0]),
                            y: Math.floor(i[1])
                        };
                    }
                };
                t.MouseService = a = s([
                    r(0, n.IRenderService),
                    r(1, n.ICharSizeService)
                ], a);
            },
            3230: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.RenderService = void 0;
                const n = i(6193), o = i(4725), a = i(8460), h = i(844), c = i(7226), l = i(2585);
                let d = t.RenderService = class extends h.Disposable {
                    get dimensions() {
                        return this._renderer.value.dimensions;
                    }
                    constructor(e, t, i, s, r, o, l, d){
                        super(), this._rowCount = e, this._charSizeService = s, this._renderer = this.register(new h.MutableDisposable), this._pausedResizeTask = new c.DebouncedIdleTask, this._observerDisposable = this.register(new h.MutableDisposable), this._isPaused = !1, this._needsFullRefresh = !1, this._isNextRenderRedrawOnly = !0, this._needsSelectionRefresh = !1, this._canvasWidth = 0, this._canvasHeight = 0, this._selectionState = {
                            start: void 0,
                            end: void 0,
                            columnSelectMode: !1
                        }, this._onDimensionsChange = this.register(new a.EventEmitter), this.onDimensionsChange = this._onDimensionsChange.event, this._onRenderedViewportChange = this.register(new a.EventEmitter), this.onRenderedViewportChange = this._onRenderedViewportChange.event, this._onRender = this.register(new a.EventEmitter), this.onRender = this._onRender.event, this._onRefreshRequest = this.register(new a.EventEmitter), this.onRefreshRequest = this._onRefreshRequest.event, this._renderDebouncer = new n.RenderDebouncer((e, t)=>this._renderRows(e, t), l), this.register(this._renderDebouncer), this.register(l.onDprChange(()=>this.handleDevicePixelRatioChange())), this.register(o.onResize(()=>this._fullRefresh())), this.register(o.buffers.onBufferActivate(()=>this._renderer.value?.clear())), this.register(i.onOptionChange(()=>this._handleOptionsChanged())), this.register(this._charSizeService.onCharSizeChange(()=>this.handleCharSizeChanged())), this.register(r.onDecorationRegistered(()=>this._fullRefresh())), this.register(r.onDecorationRemoved(()=>this._fullRefresh())), this.register(i.onMultipleOptionChange([
                            "customGlyphs",
                            "drawBoldTextInBrightColors",
                            "letterSpacing",
                            "lineHeight",
                            "fontFamily",
                            "fontSize",
                            "fontWeight",
                            "fontWeightBold",
                            "minimumContrastRatio",
                            "rescaleOverlappingGlyphs"
                        ], ()=>{
                            this.clear(), this.handleResize(o.cols, o.rows), this._fullRefresh();
                        })), this.register(i.onMultipleOptionChange([
                            "cursorBlink",
                            "cursorStyle"
                        ], ()=>this.refreshRows(o.buffer.y, o.buffer.y, !0))), this.register(d.onChangeColors(()=>this._fullRefresh())), this._registerIntersectionObserver(l.window, t), this.register(l.onWindowChange((e)=>this._registerIntersectionObserver(e, t)));
                    }
                    _registerIntersectionObserver(e, t) {
                        if ("IntersectionObserver" in e) {
                            const i = new e.IntersectionObserver((e)=>this._handleIntersectionChange(e[e.length - 1]), {
                                threshold: 0
                            });
                            i.observe(t), this._observerDisposable.value = (0, h.toDisposable)(()=>i.disconnect());
                        }
                    }
                    _handleIntersectionChange(e) {
                        this._isPaused = void 0 === e.isIntersecting ? 0 === e.intersectionRatio : !e.isIntersecting, this._isPaused || this._charSizeService.hasValidSize || this._charSizeService.measure(), !this._isPaused && this._needsFullRefresh && (this._pausedResizeTask.flush(), this.refreshRows(0, this._rowCount - 1), this._needsFullRefresh = !1);
                    }
                    refreshRows(e, t, i = !1) {
                        this._isPaused ? this._needsFullRefresh = !0 : (i || (this._isNextRenderRedrawOnly = !1), this._renderDebouncer.refresh(e, t, this._rowCount));
                    }
                    _renderRows(e, t) {
                        this._renderer.value && (e = Math.min(e, this._rowCount - 1), t = Math.min(t, this._rowCount - 1), this._renderer.value.renderRows(e, t), this._needsSelectionRefresh && (this._renderer.value.handleSelectionChanged(this._selectionState.start, this._selectionState.end, this._selectionState.columnSelectMode), this._needsSelectionRefresh = !1), this._isNextRenderRedrawOnly || this._onRenderedViewportChange.fire({
                            start: e,
                            end: t
                        }), this._onRender.fire({
                            start: e,
                            end: t
                        }), this._isNextRenderRedrawOnly = !0);
                    }
                    resize(e, t) {
                        this._rowCount = t, this._fireOnCanvasResize();
                    }
                    _handleOptionsChanged() {
                        this._renderer.value && (this.refreshRows(0, this._rowCount - 1), this._fireOnCanvasResize());
                    }
                    _fireOnCanvasResize() {
                        this._renderer.value && (this._renderer.value.dimensions.css.canvas.width === this._canvasWidth && this._renderer.value.dimensions.css.canvas.height === this._canvasHeight || this._onDimensionsChange.fire(this._renderer.value.dimensions));
                    }
                    hasRenderer() {
                        return !!this._renderer.value;
                    }
                    setRenderer(e) {
                        this._renderer.value = e, this._renderer.value && (this._renderer.value.onRequestRedraw((e)=>this.refreshRows(e.start, e.end, !0)), this._needsSelectionRefresh = !0, this._fullRefresh());
                    }
                    addRefreshCallback(e) {
                        return this._renderDebouncer.addRefreshCallback(e);
                    }
                    _fullRefresh() {
                        this._isPaused ? this._needsFullRefresh = !0 : this.refreshRows(0, this._rowCount - 1);
                    }
                    clearTextureAtlas() {
                        this._renderer.value && (this._renderer.value.clearTextureAtlas?.(), this._fullRefresh());
                    }
                    handleDevicePixelRatioChange() {
                        this._charSizeService.measure(), this._renderer.value && (this._renderer.value.handleDevicePixelRatioChange(), this.refreshRows(0, this._rowCount - 1));
                    }
                    handleResize(e, t) {
                        this._renderer.value && (this._isPaused ? this._pausedResizeTask.set(()=>this._renderer.value?.handleResize(e, t)) : this._renderer.value.handleResize(e, t), this._fullRefresh());
                    }
                    handleCharSizeChanged() {
                        this._renderer.value?.handleCharSizeChanged();
                    }
                    handleBlur() {
                        this._renderer.value?.handleBlur();
                    }
                    handleFocus() {
                        this._renderer.value?.handleFocus();
                    }
                    handleSelectionChanged(e, t, i) {
                        this._selectionState.start = e, this._selectionState.end = t, this._selectionState.columnSelectMode = i, this._renderer.value?.handleSelectionChanged(e, t, i);
                    }
                    handleCursorMove() {
                        this._renderer.value?.handleCursorMove();
                    }
                    clear() {
                        this._renderer.value?.clear();
                    }
                };
                t.RenderService = d = s([
                    r(2, l.IOptionsService),
                    r(3, o.ICharSizeService),
                    r(4, l.IDecorationService),
                    r(5, l.IBufferService),
                    r(6, o.ICoreBrowserService),
                    r(7, o.IThemeService)
                ], d);
            },
            9312: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.SelectionService = void 0;
                const n = i(9806), o = i(9504), a = i(456), h = i(4725), c = i(8460), l = i(844), d = i(6114), _ = i(4841), u = i(511), f = i(2585), v = String.fromCharCode(160), p = new RegExp(v, "g");
                let g = t.SelectionService = class extends l.Disposable {
                    constructor(e, t, i, s, r, n, o, h, d){
                        super(), this._element = e, this._screenElement = t, this._linkifier = i, this._bufferService = s, this._coreService = r, this._mouseService = n, this._optionsService = o, this._renderService = h, this._coreBrowserService = d, this._dragScrollAmount = 0, this._enabled = !0, this._workCell = new u.CellData, this._mouseDownTimeStamp = 0, this._oldHasSelection = !1, this._oldSelectionStart = void 0, this._oldSelectionEnd = void 0, this._onLinuxMouseSelection = this.register(new c.EventEmitter), this.onLinuxMouseSelection = this._onLinuxMouseSelection.event, this._onRedrawRequest = this.register(new c.EventEmitter), this.onRequestRedraw = this._onRedrawRequest.event, this._onSelectionChange = this.register(new c.EventEmitter), this.onSelectionChange = this._onSelectionChange.event, this._onRequestScrollLines = this.register(new c.EventEmitter), this.onRequestScrollLines = this._onRequestScrollLines.event, this._mouseMoveListener = (e)=>this._handleMouseMove(e), this._mouseUpListener = (e)=>this._handleMouseUp(e), this._coreService.onUserInput(()=>{
                            this.hasSelection && this.clearSelection();
                        }), this._trimListener = this._bufferService.buffer.lines.onTrim((e)=>this._handleTrim(e)), this.register(this._bufferService.buffers.onBufferActivate((e)=>this._handleBufferActivate(e))), this.enable(), this._model = new a.SelectionModel(this._bufferService), this._activeSelectionMode = 0, this.register((0, l.toDisposable)(()=>{
                            this._removeMouseDownListeners();
                        }));
                    }
                    reset() {
                        this.clearSelection();
                    }
                    disable() {
                        this.clearSelection(), this._enabled = !1;
                    }
                    enable() {
                        this._enabled = !0;
                    }
                    get selectionStart() {
                        return this._model.finalSelectionStart;
                    }
                    get selectionEnd() {
                        return this._model.finalSelectionEnd;
                    }
                    get hasSelection() {
                        const e = this._model.finalSelectionStart, t = this._model.finalSelectionEnd;
                        return !(!e || !t || e[0] === t[0] && e[1] === t[1]);
                    }
                    get selectionText() {
                        const e = this._model.finalSelectionStart, t = this._model.finalSelectionEnd;
                        if (!e || !t) return "";
                        const i = this._bufferService.buffer, s = [];
                        if (3 === this._activeSelectionMode) {
                            if (e[0] === t[0]) return "";
                            const r = e[0] < t[0] ? e[0] : t[0], n = e[0] < t[0] ? t[0] : e[0];
                            for(let o = e[1]; o <= t[1]; o++){
                                const e = i.translateBufferLineToString(o, !0, r, n);
                                s.push(e);
                            }
                        } else {
                            const r = e[1] === t[1] ? t[0] : void 0;
                            s.push(i.translateBufferLineToString(e[1], !0, e[0], r));
                            for(let r = e[1] + 1; r <= t[1] - 1; r++){
                                const e = i.lines.get(r), t = i.translateBufferLineToString(r, !0);
                                e?.isWrapped ? s[s.length - 1] += t : s.push(t);
                            }
                            if (e[1] !== t[1]) {
                                const e = i.lines.get(t[1]), r = i.translateBufferLineToString(t[1], !0, 0, t[0]);
                                e && e.isWrapped ? s[s.length - 1] += r : s.push(r);
                            }
                        }
                        return s.map((e)=>e.replace(p, " ")).join(d.isWindows ? "\r\n" : "\n");
                    }
                    clearSelection() {
                        this._model.clearSelection(), this._removeMouseDownListeners(), this.refresh(), this._onSelectionChange.fire();
                    }
                    refresh(e) {
                        this._refreshAnimationFrame || (this._refreshAnimationFrame = this._coreBrowserService.window.requestAnimationFrame(()=>this._refresh())), d.isLinux && e && this.selectionText.length && this._onLinuxMouseSelection.fire(this.selectionText);
                    }
                    _refresh() {
                        this._refreshAnimationFrame = void 0, this._onRedrawRequest.fire({
                            start: this._model.finalSelectionStart,
                            end: this._model.finalSelectionEnd,
                            columnSelectMode: 3 === this._activeSelectionMode
                        });
                    }
                    _isClickInSelection(e) {
                        const t = this._getMouseBufferCoords(e), i = this._model.finalSelectionStart, s = this._model.finalSelectionEnd;
                        return !!(i && s && t) && this._areCoordsInSelection(t, i, s);
                    }
                    isCellInSelection(e, t) {
                        const i = this._model.finalSelectionStart, s = this._model.finalSelectionEnd;
                        return !(!i || !s) && this._areCoordsInSelection([
                            e,
                            t
                        ], i, s);
                    }
                    _areCoordsInSelection(e, t, i) {
                        return e[1] > t[1] && e[1] < i[1] || t[1] === i[1] && e[1] === t[1] && e[0] >= t[0] && e[0] < i[0] || t[1] < i[1] && e[1] === i[1] && e[0] < i[0] || t[1] < i[1] && e[1] === t[1] && e[0] >= t[0];
                    }
                    _selectWordAtCursor(e, t) {
                        const i = this._linkifier.currentLink?.link?.range;
                        if (i) return this._model.selectionStart = [
                            i.start.x - 1,
                            i.start.y - 1
                        ], this._model.selectionStartLength = (0, _.getRangeLength)(i, this._bufferService.cols), this._model.selectionEnd = void 0, !0;
                        const s = this._getMouseBufferCoords(e);
                        return !!s && (this._selectWordAt(s, t), this._model.selectionEnd = void 0, !0);
                    }
                    selectAll() {
                        this._model.isSelectAllActive = !0, this.refresh(), this._onSelectionChange.fire();
                    }
                    selectLines(e, t) {
                        this._model.clearSelection(), e = Math.max(e, 0), t = Math.min(t, this._bufferService.buffer.lines.length - 1), this._model.selectionStart = [
                            0,
                            e
                        ], this._model.selectionEnd = [
                            this._bufferService.cols,
                            t
                        ], this.refresh(), this._onSelectionChange.fire();
                    }
                    _handleTrim(e) {
                        this._model.handleTrim(e) && this.refresh();
                    }
                    _getMouseBufferCoords(e) {
                        const t = this._mouseService.getCoords(e, this._screenElement, this._bufferService.cols, this._bufferService.rows, !0);
                        if (t) return t[0]--, t[1]--, t[1] += this._bufferService.buffer.ydisp, t;
                    }
                    _getMouseEventScrollAmount(e) {
                        let t = (0, n.getCoordsRelativeToElement)(this._coreBrowserService.window, e, this._screenElement)[1];
                        const i = this._renderService.dimensions.css.canvas.height;
                        return t >= 0 && t <= i ? 0 : (t > i && (t -= i), t = Math.min(Math.max(t, -50), 50), t /= 50, t / Math.abs(t) + Math.round(14 * t));
                    }
                    shouldForceSelection(e) {
                        return d.isMac ? e.altKey && this._optionsService.rawOptions.macOptionClickForcesSelection : e.shiftKey;
                    }
                    handleMouseDown(e) {
                        if (this._mouseDownTimeStamp = e.timeStamp, (2 !== e.button || !this.hasSelection) && 0 === e.button) {
                            if (!this._enabled) {
                                if (!this.shouldForceSelection(e)) return;
                                e.stopPropagation();
                            }
                            e.preventDefault(), this._dragScrollAmount = 0, this._enabled && e.shiftKey ? this._handleIncrementalClick(e) : 1 === e.detail ? this._handleSingleClick(e) : 2 === e.detail ? this._handleDoubleClick(e) : 3 === e.detail && this._handleTripleClick(e), this._addMouseDownListeners(), this.refresh(!0);
                        }
                    }
                    _addMouseDownListeners() {
                        this._screenElement.ownerDocument && (this._screenElement.ownerDocument.addEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.addEventListener("mouseup", this._mouseUpListener)), this._dragScrollIntervalTimer = this._coreBrowserService.window.setInterval(()=>this._dragScroll(), 50);
                    }
                    _removeMouseDownListeners() {
                        this._screenElement.ownerDocument && (this._screenElement.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.removeEventListener("mouseup", this._mouseUpListener)), this._coreBrowserService.window.clearInterval(this._dragScrollIntervalTimer), this._dragScrollIntervalTimer = void 0;
                    }
                    _handleIncrementalClick(e) {
                        this._model.selectionStart && (this._model.selectionEnd = this._getMouseBufferCoords(e));
                    }
                    _handleSingleClick(e) {
                        if (this._model.selectionStartLength = 0, this._model.isSelectAllActive = !1, this._activeSelectionMode = this.shouldColumnSelect(e) ? 3 : 0, this._model.selectionStart = this._getMouseBufferCoords(e), !this._model.selectionStart) return;
                        this._model.selectionEnd = void 0;
                        const t = this._bufferService.buffer.lines.get(this._model.selectionStart[1]);
                        t && t.length !== this._model.selectionStart[0] && 0 === t.hasWidth(this._model.selectionStart[0]) && this._model.selectionStart[0]++;
                    }
                    _handleDoubleClick(e) {
                        this._selectWordAtCursor(e, !0) && (this._activeSelectionMode = 1);
                    }
                    _handleTripleClick(e) {
                        const t = this._getMouseBufferCoords(e);
                        t && (this._activeSelectionMode = 2, this._selectLineAt(t[1]));
                    }
                    shouldColumnSelect(e) {
                        return e.altKey && !(d.isMac && this._optionsService.rawOptions.macOptionClickForcesSelection);
                    }
                    _handleMouseMove(e) {
                        if (e.stopImmediatePropagation(), !this._model.selectionStart) return;
                        const t = this._model.selectionEnd ? [
                            this._model.selectionEnd[0],
                            this._model.selectionEnd[1]
                        ] : null;
                        if (this._model.selectionEnd = this._getMouseBufferCoords(e), !this._model.selectionEnd) return void this.refresh(!0);
                        2 === this._activeSelectionMode ? this._model.selectionEnd[1] < this._model.selectionStart[1] ? this._model.selectionEnd[0] = 0 : this._model.selectionEnd[0] = this._bufferService.cols : 1 === this._activeSelectionMode && this._selectToWordAt(this._model.selectionEnd), this._dragScrollAmount = this._getMouseEventScrollAmount(e), 3 !== this._activeSelectionMode && (this._dragScrollAmount > 0 ? this._model.selectionEnd[0] = this._bufferService.cols : this._dragScrollAmount < 0 && (this._model.selectionEnd[0] = 0));
                        const i = this._bufferService.buffer;
                        if (this._model.selectionEnd[1] < i.lines.length) {
                            const e = i.lines.get(this._model.selectionEnd[1]);
                            e && 0 === e.hasWidth(this._model.selectionEnd[0]) && this._model.selectionEnd[0] < this._bufferService.cols && this._model.selectionEnd[0]++;
                        }
                        t && t[0] === this._model.selectionEnd[0] && t[1] === this._model.selectionEnd[1] || this.refresh(!0);
                    }
                    _dragScroll() {
                        if (this._model.selectionEnd && this._model.selectionStart && this._dragScrollAmount) {
                            this._onRequestScrollLines.fire({
                                amount: this._dragScrollAmount,
                                suppressScrollEvent: !1
                            });
                            const e = this._bufferService.buffer;
                            this._dragScrollAmount > 0 ? (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = this._bufferService.cols), this._model.selectionEnd[1] = Math.min(e.ydisp + this._bufferService.rows, e.lines.length - 1)) : (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = 0), this._model.selectionEnd[1] = e.ydisp), this.refresh();
                        }
                    }
                    _handleMouseUp(e) {
                        const t = e.timeStamp - this._mouseDownTimeStamp;
                        if (this._removeMouseDownListeners(), this.selectionText.length <= 1 && t < 500 && e.altKey && this._optionsService.rawOptions.altClickMovesCursor) {
                            if (this._bufferService.buffer.ybase === this._bufferService.buffer.ydisp) {
                                const t = this._mouseService.getCoords(e, this._element, this._bufferService.cols, this._bufferService.rows, !1);
                                if (t && void 0 !== t[0] && void 0 !== t[1]) {
                                    const e = (0, o.moveToCellSequence)(t[0] - 1, t[1] - 1, this._bufferService, this._coreService.decPrivateModes.applicationCursorKeys);
                                    this._coreService.triggerDataEvent(e, !0);
                                }
                            }
                        } else this._fireEventIfSelectionChanged();
                    }
                    _fireEventIfSelectionChanged() {
                        const e = this._model.finalSelectionStart, t = this._model.finalSelectionEnd, i = !(!e || !t || e[0] === t[0] && e[1] === t[1]);
                        i ? e && t && (this._oldSelectionStart && this._oldSelectionEnd && e[0] === this._oldSelectionStart[0] && e[1] === this._oldSelectionStart[1] && t[0] === this._oldSelectionEnd[0] && t[1] === this._oldSelectionEnd[1] || this._fireOnSelectionChange(e, t, i)) : this._oldHasSelection && this._fireOnSelectionChange(e, t, i);
                    }
                    _fireOnSelectionChange(e, t, i) {
                        this._oldSelectionStart = e, this._oldSelectionEnd = t, this._oldHasSelection = i, this._onSelectionChange.fire();
                    }
                    _handleBufferActivate(e) {
                        this.clearSelection(), this._trimListener.dispose(), this._trimListener = e.activeBuffer.lines.onTrim((e)=>this._handleTrim(e));
                    }
                    _convertViewportColToCharacterIndex(e, t) {
                        let i = t;
                        for(let s = 0; t >= s; s++){
                            const r = e.loadCell(s, this._workCell).getChars().length;
                            0 === this._workCell.getWidth() ? i-- : r > 1 && t !== s && (i += r - 1);
                        }
                        return i;
                    }
                    setSelection(e, t, i) {
                        this._model.clearSelection(), this._removeMouseDownListeners(), this._model.selectionStart = [
                            e,
                            t
                        ], this._model.selectionStartLength = i, this.refresh(), this._fireEventIfSelectionChanged();
                    }
                    rightClickSelect(e) {
                        this._isClickInSelection(e) || (this._selectWordAtCursor(e, !1) && this.refresh(!0), this._fireEventIfSelectionChanged());
                    }
                    _getWordAt(e, t, i = !0, s = !0) {
                        if (e[0] >= this._bufferService.cols) return;
                        const r = this._bufferService.buffer, n = r.lines.get(e[1]);
                        if (!n) return;
                        const o = r.translateBufferLineToString(e[1], !1);
                        let a = this._convertViewportColToCharacterIndex(n, e[0]), h = a;
                        const c = e[0] - a;
                        let l = 0, d = 0, _ = 0, u = 0;
                        if (" " === o.charAt(a)) {
                            for(; a > 0 && " " === o.charAt(a - 1);)a--;
                            for(; h < o.length && " " === o.charAt(h + 1);)h++;
                        } else {
                            let t = e[0], i = e[0];
                            0 === n.getWidth(t) && (l++, t--), 2 === n.getWidth(i) && (d++, i++);
                            const s = n.getString(i).length;
                            for(s > 1 && (u += s - 1, h += s - 1); t > 0 && a > 0 && !this._isCharWordSeparator(n.loadCell(t - 1, this._workCell));){
                                n.loadCell(t - 1, this._workCell);
                                const e = this._workCell.getChars().length;
                                0 === this._workCell.getWidth() ? (l++, t--) : e > 1 && (_ += e - 1, a -= e - 1), a--, t--;
                            }
                            for(; i < n.length && h + 1 < o.length && !this._isCharWordSeparator(n.loadCell(i + 1, this._workCell));){
                                n.loadCell(i + 1, this._workCell);
                                const e = this._workCell.getChars().length;
                                2 === this._workCell.getWidth() ? (d++, i++) : e > 1 && (u += e - 1, h += e - 1), h++, i++;
                            }
                        }
                        h++;
                        let f = a + c - l + _, v = Math.min(this._bufferService.cols, h - a + l + d - _ - u);
                        if (t || "" !== o.slice(a, h).trim()) {
                            if (i && 0 === f && 32 !== n.getCodePoint(0)) {
                                const t = r.lines.get(e[1] - 1);
                                if (t && n.isWrapped && 32 !== t.getCodePoint(this._bufferService.cols - 1)) {
                                    const t = this._getWordAt([
                                        this._bufferService.cols - 1,
                                        e[1] - 1
                                    ], !1, !0, !1);
                                    if (t) {
                                        const e = this._bufferService.cols - t.start;
                                        f -= e, v += e;
                                    }
                                }
                            }
                            if (s && f + v === this._bufferService.cols && 32 !== n.getCodePoint(this._bufferService.cols - 1)) {
                                const t = r.lines.get(e[1] + 1);
                                if (t?.isWrapped && 32 !== t.getCodePoint(0)) {
                                    const t = this._getWordAt([
                                        0,
                                        e[1] + 1
                                    ], !1, !1, !0);
                                    t && (v += t.length);
                                }
                            }
                            return {
                                start: f,
                                length: v
                            };
                        }
                    }
                    _selectWordAt(e, t) {
                        const i = this._getWordAt(e, t);
                        if (i) {
                            for(; i.start < 0;)i.start += this._bufferService.cols, e[1]--;
                            this._model.selectionStart = [
                                i.start,
                                e[1]
                            ], this._model.selectionStartLength = i.length;
                        }
                    }
                    _selectToWordAt(e) {
                        const t = this._getWordAt(e, !0);
                        if (t) {
                            let i = e[1];
                            for(; t.start < 0;)t.start += this._bufferService.cols, i--;
                            if (!this._model.areSelectionValuesReversed()) for(; t.start + t.length > this._bufferService.cols;)t.length -= this._bufferService.cols, i++;
                            this._model.selectionEnd = [
                                this._model.areSelectionValuesReversed() ? t.start : t.start + t.length,
                                i
                            ];
                        }
                    }
                    _isCharWordSeparator(e) {
                        return 0 !== e.getWidth() && this._optionsService.rawOptions.wordSeparator.indexOf(e.getChars()) >= 0;
                    }
                    _selectLineAt(e) {
                        const t = this._bufferService.buffer.getWrappedRangeForLine(e), i = {
                            start: {
                                x: 0,
                                y: t.first
                            },
                            end: {
                                x: this._bufferService.cols - 1,
                                y: t.last
                            }
                        };
                        this._model.selectionStart = [
                            0,
                            t.first
                        ], this._model.selectionEnd = void 0, this._model.selectionStartLength = (0, _.getRangeLength)(i, this._bufferService.cols);
                    }
                };
                t.SelectionService = g = s([
                    r(3, f.IBufferService),
                    r(4, f.ICoreService),
                    r(5, h.IMouseService),
                    r(6, f.IOptionsService),
                    r(7, h.IRenderService),
                    r(8, h.ICoreBrowserService)
                ], g);
            },
            4725: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ILinkProviderService = t.IThemeService = t.ICharacterJoinerService = t.ISelectionService = t.IRenderService = t.IMouseService = t.ICoreBrowserService = t.ICharSizeService = void 0;
                const s = i(8343);
                t.ICharSizeService = (0, s.createDecorator)("CharSizeService"), t.ICoreBrowserService = (0, s.createDecorator)("CoreBrowserService"), t.IMouseService = (0, s.createDecorator)("MouseService"), t.IRenderService = (0, s.createDecorator)("RenderService"), t.ISelectionService = (0, s.createDecorator)("SelectionService"), t.ICharacterJoinerService = (0, s.createDecorator)("CharacterJoinerService"), t.IThemeService = (0, s.createDecorator)("ThemeService"), t.ILinkProviderService = (0, s.createDecorator)("LinkProviderService");
            },
            6731: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ThemeService = t.DEFAULT_ANSI_COLORS = void 0;
                const n = i(7239), o = i(8055), a = i(8460), h = i(844), c = i(2585), l = o.css.toColor("#ffffff"), d = o.css.toColor("#000000"), _ = o.css.toColor("#ffffff"), u = o.css.toColor("#000000"), f = {
                    css: "rgba(255, 255, 255, 0.3)",
                    rgba: 4294967117
                };
                t.DEFAULT_ANSI_COLORS = Object.freeze((()=>{
                    const e = [
                        o.css.toColor("#2e3436"),
                        o.css.toColor("#cc0000"),
                        o.css.toColor("#4e9a06"),
                        o.css.toColor("#c4a000"),
                        o.css.toColor("#3465a4"),
                        o.css.toColor("#75507b"),
                        o.css.toColor("#06989a"),
                        o.css.toColor("#d3d7cf"),
                        o.css.toColor("#555753"),
                        o.css.toColor("#ef2929"),
                        o.css.toColor("#8ae234"),
                        o.css.toColor("#fce94f"),
                        o.css.toColor("#729fcf"),
                        o.css.toColor("#ad7fa8"),
                        o.css.toColor("#34e2e2"),
                        o.css.toColor("#eeeeec")
                    ], t = [
                        0,
                        95,
                        135,
                        175,
                        215,
                        255
                    ];
                    for(let i = 0; i < 216; i++){
                        const s = t[i / 36 % 6 | 0], r = t[i / 6 % 6 | 0], n = t[i % 6];
                        e.push({
                            css: o.channels.toCss(s, r, n),
                            rgba: o.channels.toRgba(s, r, n)
                        });
                    }
                    for(let t = 0; t < 24; t++){
                        const i = 8 + 10 * t;
                        e.push({
                            css: o.channels.toCss(i, i, i),
                            rgba: o.channels.toRgba(i, i, i)
                        });
                    }
                    return e;
                })());
                let v = t.ThemeService = class extends h.Disposable {
                    get colors() {
                        return this._colors;
                    }
                    constructor(e){
                        super(), this._optionsService = e, this._contrastCache = new n.ColorContrastCache, this._halfContrastCache = new n.ColorContrastCache, this._onChangeColors = this.register(new a.EventEmitter), this.onChangeColors = this._onChangeColors.event, this._colors = {
                            foreground: l,
                            background: d,
                            cursor: _,
                            cursorAccent: u,
                            selectionForeground: void 0,
                            selectionBackgroundTransparent: f,
                            selectionBackgroundOpaque: o.color.blend(d, f),
                            selectionInactiveBackgroundTransparent: f,
                            selectionInactiveBackgroundOpaque: o.color.blend(d, f),
                            ansi: t.DEFAULT_ANSI_COLORS.slice(),
                            contrastCache: this._contrastCache,
                            halfContrastCache: this._halfContrastCache
                        }, this._updateRestoreColors(), this._setTheme(this._optionsService.rawOptions.theme), this.register(this._optionsService.onSpecificOptionChange("minimumContrastRatio", ()=>this._contrastCache.clear())), this.register(this._optionsService.onSpecificOptionChange("theme", ()=>this._setTheme(this._optionsService.rawOptions.theme)));
                    }
                    _setTheme(e = {}) {
                        const i = this._colors;
                        if (i.foreground = p(e.foreground, l), i.background = p(e.background, d), i.cursor = p(e.cursor, _), i.cursorAccent = p(e.cursorAccent, u), i.selectionBackgroundTransparent = p(e.selectionBackground, f), i.selectionBackgroundOpaque = o.color.blend(i.background, i.selectionBackgroundTransparent), i.selectionInactiveBackgroundTransparent = p(e.selectionInactiveBackground, i.selectionBackgroundTransparent), i.selectionInactiveBackgroundOpaque = o.color.blend(i.background, i.selectionInactiveBackgroundTransparent), i.selectionForeground = e.selectionForeground ? p(e.selectionForeground, o.NULL_COLOR) : void 0, i.selectionForeground === o.NULL_COLOR && (i.selectionForeground = void 0), o.color.isOpaque(i.selectionBackgroundTransparent)) {
                            const e = .3;
                            i.selectionBackgroundTransparent = o.color.opacity(i.selectionBackgroundTransparent, e);
                        }
                        if (o.color.isOpaque(i.selectionInactiveBackgroundTransparent)) {
                            const e = .3;
                            i.selectionInactiveBackgroundTransparent = o.color.opacity(i.selectionInactiveBackgroundTransparent, e);
                        }
                        if (i.ansi = t.DEFAULT_ANSI_COLORS.slice(), i.ansi[0] = p(e.black, t.DEFAULT_ANSI_COLORS[0]), i.ansi[1] = p(e.red, t.DEFAULT_ANSI_COLORS[1]), i.ansi[2] = p(e.green, t.DEFAULT_ANSI_COLORS[2]), i.ansi[3] = p(e.yellow, t.DEFAULT_ANSI_COLORS[3]), i.ansi[4] = p(e.blue, t.DEFAULT_ANSI_COLORS[4]), i.ansi[5] = p(e.magenta, t.DEFAULT_ANSI_COLORS[5]), i.ansi[6] = p(e.cyan, t.DEFAULT_ANSI_COLORS[6]), i.ansi[7] = p(e.white, t.DEFAULT_ANSI_COLORS[7]), i.ansi[8] = p(e.brightBlack, t.DEFAULT_ANSI_COLORS[8]), i.ansi[9] = p(e.brightRed, t.DEFAULT_ANSI_COLORS[9]), i.ansi[10] = p(e.brightGreen, t.DEFAULT_ANSI_COLORS[10]), i.ansi[11] = p(e.brightYellow, t.DEFAULT_ANSI_COLORS[11]), i.ansi[12] = p(e.brightBlue, t.DEFAULT_ANSI_COLORS[12]), i.ansi[13] = p(e.brightMagenta, t.DEFAULT_ANSI_COLORS[13]), i.ansi[14] = p(e.brightCyan, t.DEFAULT_ANSI_COLORS[14]), i.ansi[15] = p(e.brightWhite, t.DEFAULT_ANSI_COLORS[15]), e.extendedAnsi) {
                            const s = Math.min(i.ansi.length - 16, e.extendedAnsi.length);
                            for(let r = 0; r < s; r++)i.ansi[r + 16] = p(e.extendedAnsi[r], t.DEFAULT_ANSI_COLORS[r + 16]);
                        }
                        this._contrastCache.clear(), this._halfContrastCache.clear(), this._updateRestoreColors(), this._onChangeColors.fire(this.colors);
                    }
                    restoreColor(e) {
                        this._restoreColor(e), this._onChangeColors.fire(this.colors);
                    }
                    _restoreColor(e) {
                        if (void 0 !== e) switch(e){
                            case 256:
                                this._colors.foreground = this._restoreColors.foreground;
                                break;
                            case 257:
                                this._colors.background = this._restoreColors.background;
                                break;
                            case 258:
                                this._colors.cursor = this._restoreColors.cursor;
                                break;
                            default:
                                this._colors.ansi[e] = this._restoreColors.ansi[e];
                        }
                        else for(let e = 0; e < this._restoreColors.ansi.length; ++e)this._colors.ansi[e] = this._restoreColors.ansi[e];
                    }
                    modifyColors(e) {
                        e(this._colors), this._onChangeColors.fire(this.colors);
                    }
                    _updateRestoreColors() {
                        this._restoreColors = {
                            foreground: this._colors.foreground,
                            background: this._colors.background,
                            cursor: this._colors.cursor,
                            ansi: this._colors.ansi.slice()
                        };
                    }
                };
                function p(e, t) {
                    if (void 0 !== e) try {
                        return o.css.toColor(e);
                    } catch  {}
                    return t;
                }
                t.ThemeService = v = s([
                    r(0, c.IOptionsService)
                ], v);
            },
            6349: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.CircularList = void 0;
                const s = i(8460), r = i(844);
                class n extends r.Disposable {
                    constructor(e){
                        super(), this._maxLength = e, this.onDeleteEmitter = this.register(new s.EventEmitter), this.onDelete = this.onDeleteEmitter.event, this.onInsertEmitter = this.register(new s.EventEmitter), this.onInsert = this.onInsertEmitter.event, this.onTrimEmitter = this.register(new s.EventEmitter), this.onTrim = this.onTrimEmitter.event, this._array = new Array(this._maxLength), this._startIndex = 0, this._length = 0;
                    }
                    get maxLength() {
                        return this._maxLength;
                    }
                    set maxLength(e) {
                        if (this._maxLength === e) return;
                        const t = new Array(e);
                        for(let i = 0; i < Math.min(e, this.length); i++)t[i] = this._array[this._getCyclicIndex(i)];
                        this._array = t, this._maxLength = e, this._startIndex = 0;
                    }
                    get length() {
                        return this._length;
                    }
                    set length(e) {
                        if (e > this._length) for(let t = this._length; t < e; t++)this._array[t] = void 0;
                        this._length = e;
                    }
                    get(e) {
                        return this._array[this._getCyclicIndex(e)];
                    }
                    set(e, t) {
                        this._array[this._getCyclicIndex(e)] = t;
                    }
                    push(e) {
                        this._array[this._getCyclicIndex(this._length)] = e, this._length === this._maxLength ? (this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1)) : this._length++;
                    }
                    recycle() {
                        if (this._length !== this._maxLength) throw new Error("Can only recycle when the buffer is full");
                        return this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1), this._array[this._getCyclicIndex(this._length - 1)];
                    }
                    get isFull() {
                        return this._length === this._maxLength;
                    }
                    pop() {
                        return this._array[this._getCyclicIndex(this._length-- - 1)];
                    }
                    splice(e, t, ...i) {
                        if (t) {
                            for(let i = e; i < this._length - t; i++)this._array[this._getCyclicIndex(i)] = this._array[this._getCyclicIndex(i + t)];
                            this._length -= t, this.onDeleteEmitter.fire({
                                index: e,
                                amount: t
                            });
                        }
                        for(let t = this._length - 1; t >= e; t--)this._array[this._getCyclicIndex(t + i.length)] = this._array[this._getCyclicIndex(t)];
                        for(let t = 0; t < i.length; t++)this._array[this._getCyclicIndex(e + t)] = i[t];
                        if (i.length && this.onInsertEmitter.fire({
                            index: e,
                            amount: i.length
                        }), this._length + i.length > this._maxLength) {
                            const e = this._length + i.length - this._maxLength;
                            this._startIndex += e, this._length = this._maxLength, this.onTrimEmitter.fire(e);
                        } else this._length += i.length;
                    }
                    trimStart(e) {
                        e > this._length && (e = this._length), this._startIndex += e, this._length -= e, this.onTrimEmitter.fire(e);
                    }
                    shiftElements(e, t, i) {
                        if (!(t <= 0)) {
                            if (e < 0 || e >= this._length) throw new Error("start argument out of range");
                            if (e + i < 0) throw new Error("Cannot shift elements in list beyond index 0");
                            if (i > 0) {
                                for(let s = t - 1; s >= 0; s--)this.set(e + s + i, this.get(e + s));
                                const s = e + t + i - this._length;
                                if (s > 0) for(this._length += s; this._length > this._maxLength;)this._length--, this._startIndex++, this.onTrimEmitter.fire(1);
                            } else for(let s = 0; s < t; s++)this.set(e + s + i, this.get(e + s));
                        }
                    }
                    _getCyclicIndex(e) {
                        return (this._startIndex + e) % this._maxLength;
                    }
                }
                t.CircularList = n;
            },
            1439: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.clone = void 0, t.clone = function e(t, i = 5) {
                    if ("object" != typeof t) return t;
                    const s = Array.isArray(t) ? [] : {};
                    for(const r in t)s[r] = i <= 1 ? t[r] : t[r] && e(t[r], i - 1);
                    return s;
                };
            },
            8055: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.contrastRatio = t.toPaddedHex = t.rgba = t.rgb = t.css = t.color = t.channels = t.NULL_COLOR = void 0;
                let i = 0, s = 0, r = 0, n = 0;
                var o, a, h, c, l;
                function d(e) {
                    const t = e.toString(16);
                    return t.length < 2 ? "0" + t : t;
                }
                function _(e, t) {
                    return e < t ? (t + .05) / (e + .05) : (e + .05) / (t + .05);
                }
                t.NULL_COLOR = {
                    css: "#00000000",
                    rgba: 0
                }, function(e) {
                    e.toCss = function(e, t, i, s) {
                        return void 0 !== s ? `#${d(e)}${d(t)}${d(i)}${d(s)}` : `#${d(e)}${d(t)}${d(i)}`;
                    }, e.toRgba = function(e, t, i, s = 255) {
                        return (e << 24 | t << 16 | i << 8 | s) >>> 0;
                    }, e.toColor = function(t, i, s, r) {
                        return {
                            css: e.toCss(t, i, s, r),
                            rgba: e.toRgba(t, i, s, r)
                        };
                    };
                }(o || (t.channels = o = {})), function(e) {
                    function t(e, t) {
                        return n = Math.round(255 * t), [i, s, r] = l.toChannels(e.rgba), {
                            css: o.toCss(i, s, r, n),
                            rgba: o.toRgba(i, s, r, n)
                        };
                    }
                    e.blend = function(e, t) {
                        if (n = (255 & t.rgba) / 255, 1 === n) return {
                            css: t.css,
                            rgba: t.rgba
                        };
                        const a = t.rgba >> 24 & 255, h = t.rgba >> 16 & 255, c = t.rgba >> 8 & 255, l = e.rgba >> 24 & 255, d = e.rgba >> 16 & 255, _ = e.rgba >> 8 & 255;
                        return i = l + Math.round((a - l) * n), s = d + Math.round((h - d) * n), r = _ + Math.round((c - _) * n), {
                            css: o.toCss(i, s, r),
                            rgba: o.toRgba(i, s, r)
                        };
                    }, e.isOpaque = function(e) {
                        return 255 == (255 & e.rgba);
                    }, e.ensureContrastRatio = function(e, t, i) {
                        const s = l.ensureContrastRatio(e.rgba, t.rgba, i);
                        if (s) return o.toColor(s >> 24 & 255, s >> 16 & 255, s >> 8 & 255);
                    }, e.opaque = function(e) {
                        const t = (255 | e.rgba) >>> 0;
                        return [i, s, r] = l.toChannels(t), {
                            css: o.toCss(i, s, r),
                            rgba: t
                        };
                    }, e.opacity = t, e.multiplyOpacity = function(e, i) {
                        return n = 255 & e.rgba, t(e, n * i / 255);
                    }, e.toColorRGB = function(e) {
                        return [
                            e.rgba >> 24 & 255,
                            e.rgba >> 16 & 255,
                            e.rgba >> 8 & 255
                        ];
                    };
                }(a || (t.color = a = {})), function(e) {
                    let t, a;
                    try {
                        const e = document.createElement("canvas");
                        e.width = 1, e.height = 1;
                        const i = e.getContext("2d", {
                            willReadFrequently: !0
                        });
                        i && (t = i, t.globalCompositeOperation = "copy", a = t.createLinearGradient(0, 0, 1, 1));
                    } catch  {}
                    e.toColor = function(e) {
                        if (e.match(/#[\da-f]{3,8}/i)) switch(e.length){
                            case 4:
                                return i = parseInt(e.slice(1, 2).repeat(2), 16), s = parseInt(e.slice(2, 3).repeat(2), 16), r = parseInt(e.slice(3, 4).repeat(2), 16), o.toColor(i, s, r);
                            case 5:
                                return i = parseInt(e.slice(1, 2).repeat(2), 16), s = parseInt(e.slice(2, 3).repeat(2), 16), r = parseInt(e.slice(3, 4).repeat(2), 16), n = parseInt(e.slice(4, 5).repeat(2), 16), o.toColor(i, s, r, n);
                            case 7:
                                return {
                                    css: e,
                                    rgba: (parseInt(e.slice(1), 16) << 8 | 255) >>> 0
                                };
                            case 9:
                                return {
                                    css: e,
                                    rgba: parseInt(e.slice(1), 16) >>> 0
                                };
                        }
                        const h = e.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);
                        if (h) return i = parseInt(h[1]), s = parseInt(h[2]), r = parseInt(h[3]), n = Math.round(255 * (void 0 === h[5] ? 1 : parseFloat(h[5]))), o.toColor(i, s, r, n);
                        if (!t || !a) throw new Error("css.toColor: Unsupported css format");
                        if (t.fillStyle = a, t.fillStyle = e, "string" != typeof t.fillStyle) throw new Error("css.toColor: Unsupported css format");
                        if (t.fillRect(0, 0, 1, 1), [i, s, r, n] = t.getImageData(0, 0, 1, 1).data, 255 !== n) throw new Error("css.toColor: Unsupported css format");
                        return {
                            rgba: o.toRgba(i, s, r, n),
                            css: e
                        };
                    };
                }(h || (t.css = h = {})), function(e) {
                    function t(e, t, i) {
                        const s = e / 255, r = t / 255, n = i / 255;
                        return .2126 * (s <= .03928 ? s / 12.92 : Math.pow((s + .055) / 1.055, 2.4)) + .7152 * (r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4));
                    }
                    e.relativeLuminance = function(e) {
                        return t(e >> 16 & 255, e >> 8 & 255, 255 & e);
                    }, e.relativeLuminance2 = t;
                }(c || (t.rgb = c = {})), function(e) {
                    function t(e, t, i) {
                        const s = e >> 24 & 255, r = e >> 16 & 255, n = e >> 8 & 255;
                        let o = t >> 24 & 255, a = t >> 16 & 255, h = t >> 8 & 255, l = _(c.relativeLuminance2(o, a, h), c.relativeLuminance2(s, r, n));
                        for(; l < i && (o > 0 || a > 0 || h > 0);)o -= Math.max(0, Math.ceil(.1 * o)), a -= Math.max(0, Math.ceil(.1 * a)), h -= Math.max(0, Math.ceil(.1 * h)), l = _(c.relativeLuminance2(o, a, h), c.relativeLuminance2(s, r, n));
                        return (o << 24 | a << 16 | h << 8 | 255) >>> 0;
                    }
                    function a(e, t, i) {
                        const s = e >> 24 & 255, r = e >> 16 & 255, n = e >> 8 & 255;
                        let o = t >> 24 & 255, a = t >> 16 & 255, h = t >> 8 & 255, l = _(c.relativeLuminance2(o, a, h), c.relativeLuminance2(s, r, n));
                        for(; l < i && (o < 255 || a < 255 || h < 255);)o = Math.min(255, o + Math.ceil(.1 * (255 - o))), a = Math.min(255, a + Math.ceil(.1 * (255 - a))), h = Math.min(255, h + Math.ceil(.1 * (255 - h))), l = _(c.relativeLuminance2(o, a, h), c.relativeLuminance2(s, r, n));
                        return (o << 24 | a << 16 | h << 8 | 255) >>> 0;
                    }
                    e.blend = function(e, t) {
                        if (n = (255 & t) / 255, 1 === n) return t;
                        const a = t >> 24 & 255, h = t >> 16 & 255, c = t >> 8 & 255, l = e >> 24 & 255, d = e >> 16 & 255, _ = e >> 8 & 255;
                        return i = l + Math.round((a - l) * n), s = d + Math.round((h - d) * n), r = _ + Math.round((c - _) * n), o.toRgba(i, s, r);
                    }, e.ensureContrastRatio = function(e, i, s) {
                        const r = c.relativeLuminance(e >> 8), n = c.relativeLuminance(i >> 8);
                        if (_(r, n) < s) {
                            if (n < r) {
                                const n = t(e, i, s), o = _(r, c.relativeLuminance(n >> 8));
                                if (o < s) {
                                    const t = a(e, i, s);
                                    return o > _(r, c.relativeLuminance(t >> 8)) ? n : t;
                                }
                                return n;
                            }
                            const o = a(e, i, s), h = _(r, c.relativeLuminance(o >> 8));
                            if (h < s) {
                                const n = t(e, i, s);
                                return h > _(r, c.relativeLuminance(n >> 8)) ? o : n;
                            }
                            return o;
                        }
                    }, e.reduceLuminance = t, e.increaseLuminance = a, e.toChannels = function(e) {
                        return [
                            e >> 24 & 255,
                            e >> 16 & 255,
                            e >> 8 & 255,
                            255 & e
                        ];
                    };
                }(l || (t.rgba = l = {})), t.toPaddedHex = d, t.contrastRatio = _;
            },
            8969: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.CoreTerminal = void 0;
                const s = i(844), r = i(2585), n = i(4348), o = i(7866), a = i(744), h = i(7302), c = i(6975), l = i(8460), d = i(1753), _ = i(1480), u = i(7994), f = i(9282), v = i(5435), p = i(5981), g = i(2660);
                let m = !1;
                class S extends s.Disposable {
                    get onScroll() {
                        return this._onScrollApi || (this._onScrollApi = this.register(new l.EventEmitter), this._onScroll.event((e)=>{
                            this._onScrollApi?.fire(e.position);
                        })), this._onScrollApi.event;
                    }
                    get cols() {
                        return this._bufferService.cols;
                    }
                    get rows() {
                        return this._bufferService.rows;
                    }
                    get buffers() {
                        return this._bufferService.buffers;
                    }
                    get options() {
                        return this.optionsService.options;
                    }
                    set options(e) {
                        for(const t in e)this.optionsService.options[t] = e[t];
                    }
                    constructor(e){
                        super(), this._windowsWrappingHeuristics = this.register(new s.MutableDisposable), this._onBinary = this.register(new l.EventEmitter), this.onBinary = this._onBinary.event, this._onData = this.register(new l.EventEmitter), this.onData = this._onData.event, this._onLineFeed = this.register(new l.EventEmitter), this.onLineFeed = this._onLineFeed.event, this._onResize = this.register(new l.EventEmitter), this.onResize = this._onResize.event, this._onWriteParsed = this.register(new l.EventEmitter), this.onWriteParsed = this._onWriteParsed.event, this._onScroll = this.register(new l.EventEmitter), this._instantiationService = new n.InstantiationService, this.optionsService = this.register(new h.OptionsService(e)), this._instantiationService.setService(r.IOptionsService, this.optionsService), this._bufferService = this.register(this._instantiationService.createInstance(a.BufferService)), this._instantiationService.setService(r.IBufferService, this._bufferService), this._logService = this.register(this._instantiationService.createInstance(o.LogService)), this._instantiationService.setService(r.ILogService, this._logService), this.coreService = this.register(this._instantiationService.createInstance(c.CoreService)), this._instantiationService.setService(r.ICoreService, this.coreService), this.coreMouseService = this.register(this._instantiationService.createInstance(d.CoreMouseService)), this._instantiationService.setService(r.ICoreMouseService, this.coreMouseService), this.unicodeService = this.register(this._instantiationService.createInstance(_.UnicodeService)), this._instantiationService.setService(r.IUnicodeService, this.unicodeService), this._charsetService = this._instantiationService.createInstance(u.CharsetService), this._instantiationService.setService(r.ICharsetService, this._charsetService), this._oscLinkService = this._instantiationService.createInstance(g.OscLinkService), this._instantiationService.setService(r.IOscLinkService, this._oscLinkService), this._inputHandler = this.register(new v.InputHandler(this._bufferService, this._charsetService, this.coreService, this._logService, this.optionsService, this._oscLinkService, this.coreMouseService, this.unicodeService)), this.register((0, l.forwardEvent)(this._inputHandler.onLineFeed, this._onLineFeed)), this.register(this._inputHandler), this.register((0, l.forwardEvent)(this._bufferService.onResize, this._onResize)), this.register((0, l.forwardEvent)(this.coreService.onData, this._onData)), this.register((0, l.forwardEvent)(this.coreService.onBinary, this._onBinary)), this.register(this.coreService.onRequestScrollToBottom(()=>this.scrollToBottom())), this.register(this.coreService.onUserInput(()=>this._writeBuffer.handleUserInput())), this.register(this.optionsService.onMultipleOptionChange([
                            "windowsMode",
                            "windowsPty"
                        ], ()=>this._handleWindowsPtyOptionChange())), this.register(this._bufferService.onScroll((e)=>{
                            this._onScroll.fire({
                                position: this._bufferService.buffer.ydisp,
                                source: 0
                            }), this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop, this._bufferService.buffer.scrollBottom);
                        })), this.register(this._inputHandler.onScroll((e)=>{
                            this._onScroll.fire({
                                position: this._bufferService.buffer.ydisp,
                                source: 0
                            }), this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop, this._bufferService.buffer.scrollBottom);
                        })), this._writeBuffer = this.register(new p.WriteBuffer((e, t)=>this._inputHandler.parse(e, t))), this.register((0, l.forwardEvent)(this._writeBuffer.onWriteParsed, this._onWriteParsed));
                    }
                    write(e, t) {
                        this._writeBuffer.write(e, t);
                    }
                    writeSync(e, t) {
                        this._logService.logLevel <= r.LogLevelEnum.WARN && !m && (this._logService.warn("writeSync is unreliable and will be removed soon."), m = !0), this._writeBuffer.writeSync(e, t);
                    }
                    input(e, t = !0) {
                        this.coreService.triggerDataEvent(e, t);
                    }
                    resize(e, t) {
                        isNaN(e) || isNaN(t) || (e = Math.max(e, a.MINIMUM_COLS), t = Math.max(t, a.MINIMUM_ROWS), this._bufferService.resize(e, t));
                    }
                    scroll(e, t = !1) {
                        this._bufferService.scroll(e, t);
                    }
                    scrollLines(e, t, i) {
                        this._bufferService.scrollLines(e, t, i);
                    }
                    scrollPages(e) {
                        this.scrollLines(e * (this.rows - 1));
                    }
                    scrollToTop() {
                        this.scrollLines(-this._bufferService.buffer.ydisp);
                    }
                    scrollToBottom() {
                        this.scrollLines(this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
                    }
                    scrollToLine(e) {
                        const t = e - this._bufferService.buffer.ydisp;
                        0 !== t && this.scrollLines(t);
                    }
                    registerEscHandler(e, t) {
                        return this._inputHandler.registerEscHandler(e, t);
                    }
                    registerDcsHandler(e, t) {
                        return this._inputHandler.registerDcsHandler(e, t);
                    }
                    registerCsiHandler(e, t) {
                        return this._inputHandler.registerCsiHandler(e, t);
                    }
                    registerOscHandler(e, t) {
                        return this._inputHandler.registerOscHandler(e, t);
                    }
                    _setup() {
                        this._handleWindowsPtyOptionChange();
                    }
                    reset() {
                        this._inputHandler.reset(), this._bufferService.reset(), this._charsetService.reset(), this.coreService.reset(), this.coreMouseService.reset();
                    }
                    _handleWindowsPtyOptionChange() {
                        let e = !1;
                        const t = this.optionsService.rawOptions.windowsPty;
                        t && void 0 !== t.buildNumber && void 0 !== t.buildNumber ? e = !!("conpty" === t.backend && t.buildNumber < 21376) : this.optionsService.rawOptions.windowsMode && (e = !0), e ? this._enableWindowsWrappingHeuristics() : this._windowsWrappingHeuristics.clear();
                    }
                    _enableWindowsWrappingHeuristics() {
                        if (!this._windowsWrappingHeuristics.value) {
                            const e = [];
                            e.push(this.onLineFeed(f.updateWindowsModeWrappedState.bind(null, this._bufferService))), e.push(this.registerCsiHandler({
                                final: "H"
                            }, ()=>((0, f.updateWindowsModeWrappedState)(this._bufferService), !1))), this._windowsWrappingHeuristics.value = (0, s.toDisposable)(()=>{
                                for (const t of e)t.dispose();
                            });
                        }
                    }
                }
                t.CoreTerminal = S;
            },
            8460: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.runAndSubscribe = t.forwardEvent = t.EventEmitter = void 0, t.EventEmitter = class {
                    constructor(){
                        this._listeners = [], this._disposed = !1;
                    }
                    get event() {
                        return this._event || (this._event = (e)=>(this._listeners.push(e), {
                                dispose: ()=>{
                                    if (!this._disposed) {
                                        for(let t = 0; t < this._listeners.length; t++)if (this._listeners[t] === e) return void this._listeners.splice(t, 1);
                                    }
                                }
                            })), this._event;
                    }
                    fire(e, t) {
                        const i = [];
                        for(let e = 0; e < this._listeners.length; e++)i.push(this._listeners[e]);
                        for(let s = 0; s < i.length; s++)i[s].call(void 0, e, t);
                    }
                    dispose() {
                        this.clearListeners(), this._disposed = !0;
                    }
                    clearListeners() {
                        this._listeners && (this._listeners.length = 0);
                    }
                }, t.forwardEvent = function(e, t) {
                    return e((e)=>t.fire(e));
                }, t.runAndSubscribe = function(e, t) {
                    return t(void 0), e((e)=>t(e));
                };
            },
            5435: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.InputHandler = t.WindowsOptionsReportType = void 0;
                const n = i(2584), o = i(7116), a = i(2015), h = i(844), c = i(482), l = i(8437), d = i(8460), _ = i(643), u = i(511), f = i(3734), v = i(2585), p = i(1480), g = i(6242), m = i(6351), S = i(5941), C = {
                    "(": 0,
                    ")": 1,
                    "*": 2,
                    "+": 3,
                    "-": 1,
                    ".": 2
                }, b = 131072;
                function w(e, t) {
                    if (e > 24) return t.setWinLines || !1;
                    switch(e){
                        case 1:
                            return !!t.restoreWin;
                        case 2:
                            return !!t.minimizeWin;
                        case 3:
                            return !!t.setWinPosition;
                        case 4:
                            return !!t.setWinSizePixels;
                        case 5:
                            return !!t.raiseWin;
                        case 6:
                            return !!t.lowerWin;
                        case 7:
                            return !!t.refreshWin;
                        case 8:
                            return !!t.setWinSizeChars;
                        case 9:
                            return !!t.maximizeWin;
                        case 10:
                            return !!t.fullscreenWin;
                        case 11:
                            return !!t.getWinState;
                        case 13:
                            return !!t.getWinPosition;
                        case 14:
                            return !!t.getWinSizePixels;
                        case 15:
                            return !!t.getScreenSizePixels;
                        case 16:
                            return !!t.getCellSizePixels;
                        case 18:
                            return !!t.getWinSizeChars;
                        case 19:
                            return !!t.getScreenSizeChars;
                        case 20:
                            return !!t.getIconTitle;
                        case 21:
                            return !!t.getWinTitle;
                        case 22:
                            return !!t.pushTitle;
                        case 23:
                            return !!t.popTitle;
                        case 24:
                            return !!t.setWinLines;
                    }
                    return !1;
                }
                var y;
                !function(e) {
                    e[e.GET_WIN_SIZE_PIXELS = 0] = "GET_WIN_SIZE_PIXELS", e[e.GET_CELL_SIZE_PIXELS = 1] = "GET_CELL_SIZE_PIXELS";
                }(y || (t.WindowsOptionsReportType = y = {}));
                let E = 0;
                class k extends h.Disposable {
                    getAttrData() {
                        return this._curAttrData;
                    }
                    constructor(e, t, i, s, r, h, _, f, v = new a.EscapeSequenceParser){
                        super(), this._bufferService = e, this._charsetService = t, this._coreService = i, this._logService = s, this._optionsService = r, this._oscLinkService = h, this._coreMouseService = _, this._unicodeService = f, this._parser = v, this._parseBuffer = new Uint32Array(4096), this._stringDecoder = new c.StringToUtf32, this._utf8Decoder = new c.Utf8ToUtf32, this._workCell = new u.CellData, this._windowTitle = "", this._iconName = "", this._windowTitleStack = [], this._iconNameStack = [], this._curAttrData = l.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = l.DEFAULT_ATTR_DATA.clone(), this._onRequestBell = this.register(new d.EventEmitter), this.onRequestBell = this._onRequestBell.event, this._onRequestRefreshRows = this.register(new d.EventEmitter), this.onRequestRefreshRows = this._onRequestRefreshRows.event, this._onRequestReset = this.register(new d.EventEmitter), this.onRequestReset = this._onRequestReset.event, this._onRequestSendFocus = this.register(new d.EventEmitter), this.onRequestSendFocus = this._onRequestSendFocus.event, this._onRequestSyncScrollBar = this.register(new d.EventEmitter), this.onRequestSyncScrollBar = this._onRequestSyncScrollBar.event, this._onRequestWindowsOptionsReport = this.register(new d.EventEmitter), this.onRequestWindowsOptionsReport = this._onRequestWindowsOptionsReport.event, this._onA11yChar = this.register(new d.EventEmitter), this.onA11yChar = this._onA11yChar.event, this._onA11yTab = this.register(new d.EventEmitter), this.onA11yTab = this._onA11yTab.event, this._onCursorMove = this.register(new d.EventEmitter), this.onCursorMove = this._onCursorMove.event, this._onLineFeed = this.register(new d.EventEmitter), this.onLineFeed = this._onLineFeed.event, this._onScroll = this.register(new d.EventEmitter), this.onScroll = this._onScroll.event, this._onTitleChange = this.register(new d.EventEmitter), this.onTitleChange = this._onTitleChange.event, this._onColor = this.register(new d.EventEmitter), this.onColor = this._onColor.event, this._parseStack = {
                            paused: !1,
                            cursorStartX: 0,
                            cursorStartY: 0,
                            decodedLength: 0,
                            position: 0
                        }, this._specialColors = [
                            256,
                            257,
                            258
                        ], this.register(this._parser), this._dirtyRowTracker = new L(this._bufferService), this._activeBuffer = this._bufferService.buffer, this.register(this._bufferService.buffers.onBufferActivate((e)=>this._activeBuffer = e.activeBuffer)), this._parser.setCsiHandlerFallback((e, t)=>{
                            this._logService.debug("Unknown CSI code: ", {
                                identifier: this._parser.identToString(e),
                                params: t.toArray()
                            });
                        }), this._parser.setEscHandlerFallback((e)=>{
                            this._logService.debug("Unknown ESC code: ", {
                                identifier: this._parser.identToString(e)
                            });
                        }), this._parser.setExecuteHandlerFallback((e)=>{
                            this._logService.debug("Unknown EXECUTE code: ", {
                                code: e
                            });
                        }), this._parser.setOscHandlerFallback((e, t, i)=>{
                            this._logService.debug("Unknown OSC code: ", {
                                identifier: e,
                                action: t,
                                data: i
                            });
                        }), this._parser.setDcsHandlerFallback((e, t, i)=>{
                            "HOOK" === t && (i = i.toArray()), this._logService.debug("Unknown DCS code: ", {
                                identifier: this._parser.identToString(e),
                                action: t,
                                payload: i
                            });
                        }), this._parser.setPrintHandler((e, t, i)=>this.print(e, t, i)), this._parser.registerCsiHandler({
                            final: "@"
                        }, (e)=>this.insertChars(e)), this._parser.registerCsiHandler({
                            intermediates: " ",
                            final: "@"
                        }, (e)=>this.scrollLeft(e)), this._parser.registerCsiHandler({
                            final: "A"
                        }, (e)=>this.cursorUp(e)), this._parser.registerCsiHandler({
                            intermediates: " ",
                            final: "A"
                        }, (e)=>this.scrollRight(e)), this._parser.registerCsiHandler({
                            final: "B"
                        }, (e)=>this.cursorDown(e)), this._parser.registerCsiHandler({
                            final: "C"
                        }, (e)=>this.cursorForward(e)), this._parser.registerCsiHandler({
                            final: "D"
                        }, (e)=>this.cursorBackward(e)), this._parser.registerCsiHandler({
                            final: "E"
                        }, (e)=>this.cursorNextLine(e)), this._parser.registerCsiHandler({
                            final: "F"
                        }, (e)=>this.cursorPrecedingLine(e)), this._parser.registerCsiHandler({
                            final: "G"
                        }, (e)=>this.cursorCharAbsolute(e)), this._parser.registerCsiHandler({
                            final: "H"
                        }, (e)=>this.cursorPosition(e)), this._parser.registerCsiHandler({
                            final: "I"
                        }, (e)=>this.cursorForwardTab(e)), this._parser.registerCsiHandler({
                            final: "J"
                        }, (e)=>this.eraseInDisplay(e, !1)), this._parser.registerCsiHandler({
                            prefix: "?",
                            final: "J"
                        }, (e)=>this.eraseInDisplay(e, !0)), this._parser.registerCsiHandler({
                            final: "K"
                        }, (e)=>this.eraseInLine(e, !1)), this._parser.registerCsiHandler({
                            prefix: "?",
                            final: "K"
                        }, (e)=>this.eraseInLine(e, !0)), this._parser.registerCsiHandler({
                            final: "L"
                        }, (e)=>this.insertLines(e)), this._parser.registerCsiHandler({
                            final: "M"
                        }, (e)=>this.deleteLines(e)), this._parser.registerCsiHandler({
                            final: "P"
                        }, (e)=>this.deleteChars(e)), this._parser.registerCsiHandler({
                            final: "S"
                        }, (e)=>this.scrollUp(e)), this._parser.registerCsiHandler({
                            final: "T"
                        }, (e)=>this.scrollDown(e)), this._parser.registerCsiHandler({
                            final: "X"
                        }, (e)=>this.eraseChars(e)), this._parser.registerCsiHandler({
                            final: "Z"
                        }, (e)=>this.cursorBackwardTab(e)), this._parser.registerCsiHandler({
                            final: "`"
                        }, (e)=>this.charPosAbsolute(e)), this._parser.registerCsiHandler({
                            final: "a"
                        }, (e)=>this.hPositionRelative(e)), this._parser.registerCsiHandler({
                            final: "b"
                        }, (e)=>this.repeatPrecedingCharacter(e)), this._parser.registerCsiHandler({
                            final: "c"
                        }, (e)=>this.sendDeviceAttributesPrimary(e)), this._parser.registerCsiHandler({
                            prefix: ">",
                            final: "c"
                        }, (e)=>this.sendDeviceAttributesSecondary(e)), this._parser.registerCsiHandler({
                            final: "d"
                        }, (e)=>this.linePosAbsolute(e)), this._parser.registerCsiHandler({
                            final: "e"
                        }, (e)=>this.vPositionRelative(e)), this._parser.registerCsiHandler({
                            final: "f"
                        }, (e)=>this.hVPosition(e)), this._parser.registerCsiHandler({
                            final: "g"
                        }, (e)=>this.tabClear(e)), this._parser.registerCsiHandler({
                            final: "h"
                        }, (e)=>this.setMode(e)), this._parser.registerCsiHandler({
                            prefix: "?",
                            final: "h"
                        }, (e)=>this.setModePrivate(e)), this._parser.registerCsiHandler({
                            final: "l"
                        }, (e)=>this.resetMode(e)), this._parser.registerCsiHandler({
                            prefix: "?",
                            final: "l"
                        }, (e)=>this.resetModePrivate(e)), this._parser.registerCsiHandler({
                            final: "m"
                        }, (e)=>this.charAttributes(e)), this._parser.registerCsiHandler({
                            final: "n"
                        }, (e)=>this.deviceStatus(e)), this._parser.registerCsiHandler({
                            prefix: "?",
                            final: "n"
                        }, (e)=>this.deviceStatusPrivate(e)), this._parser.registerCsiHandler({
                            intermediates: "!",
                            final: "p"
                        }, (e)=>this.softReset(e)), this._parser.registerCsiHandler({
                            intermediates: " ",
                            final: "q"
                        }, (e)=>this.setCursorStyle(e)), this._parser.registerCsiHandler({
                            final: "r"
                        }, (e)=>this.setScrollRegion(e)), this._parser.registerCsiHandler({
                            final: "s"
                        }, (e)=>this.saveCursor(e)), this._parser.registerCsiHandler({
                            final: "t"
                        }, (e)=>this.windowOptions(e)), this._parser.registerCsiHandler({
                            final: "u"
                        }, (e)=>this.restoreCursor(e)), this._parser.registerCsiHandler({
                            intermediates: "'",
                            final: "}"
                        }, (e)=>this.insertColumns(e)), this._parser.registerCsiHandler({
                            intermediates: "'",
                            final: "~"
                        }, (e)=>this.deleteColumns(e)), this._parser.registerCsiHandler({
                            intermediates: '"',
                            final: "q"
                        }, (e)=>this.selectProtected(e)), this._parser.registerCsiHandler({
                            intermediates: "$",
                            final: "p"
                        }, (e)=>this.requestMode(e, !0)), this._parser.registerCsiHandler({
                            prefix: "?",
                            intermediates: "$",
                            final: "p"
                        }, (e)=>this.requestMode(e, !1)), this._parser.setExecuteHandler(n.C0.BEL, ()=>this.bell()), this._parser.setExecuteHandler(n.C0.LF, ()=>this.lineFeed()), this._parser.setExecuteHandler(n.C0.VT, ()=>this.lineFeed()), this._parser.setExecuteHandler(n.C0.FF, ()=>this.lineFeed()), this._parser.setExecuteHandler(n.C0.CR, ()=>this.carriageReturn()), this._parser.setExecuteHandler(n.C0.BS, ()=>this.backspace()), this._parser.setExecuteHandler(n.C0.HT, ()=>this.tab()), this._parser.setExecuteHandler(n.C0.SO, ()=>this.shiftOut()), this._parser.setExecuteHandler(n.C0.SI, ()=>this.shiftIn()), this._parser.setExecuteHandler(n.C1.IND, ()=>this.index()), this._parser.setExecuteHandler(n.C1.NEL, ()=>this.nextLine()), this._parser.setExecuteHandler(n.C1.HTS, ()=>this.tabSet()), this._parser.registerOscHandler(0, new g.OscHandler((e)=>(this.setTitle(e), this.setIconName(e), !0))), this._parser.registerOscHandler(1, new g.OscHandler((e)=>this.setIconName(e))), this._parser.registerOscHandler(2, new g.OscHandler((e)=>this.setTitle(e))), this._parser.registerOscHandler(4, new g.OscHandler((e)=>this.setOrReportIndexedColor(e))), this._parser.registerOscHandler(8, new g.OscHandler((e)=>this.setHyperlink(e))), this._parser.registerOscHandler(10, new g.OscHandler((e)=>this.setOrReportFgColor(e))), this._parser.registerOscHandler(11, new g.OscHandler((e)=>this.setOrReportBgColor(e))), this._parser.registerOscHandler(12, new g.OscHandler((e)=>this.setOrReportCursorColor(e))), this._parser.registerOscHandler(104, new g.OscHandler((e)=>this.restoreIndexedColor(e))), this._parser.registerOscHandler(110, new g.OscHandler((e)=>this.restoreFgColor(e))), this._parser.registerOscHandler(111, new g.OscHandler((e)=>this.restoreBgColor(e))), this._parser.registerOscHandler(112, new g.OscHandler((e)=>this.restoreCursorColor(e))), this._parser.registerEscHandler({
                            final: "7"
                        }, ()=>this.saveCursor()), this._parser.registerEscHandler({
                            final: "8"
                        }, ()=>this.restoreCursor()), this._parser.registerEscHandler({
                            final: "D"
                        }, ()=>this.index()), this._parser.registerEscHandler({
                            final: "E"
                        }, ()=>this.nextLine()), this._parser.registerEscHandler({
                            final: "H"
                        }, ()=>this.tabSet()), this._parser.registerEscHandler({
                            final: "M"
                        }, ()=>this.reverseIndex()), this._parser.registerEscHandler({
                            final: "="
                        }, ()=>this.keypadApplicationMode()), this._parser.registerEscHandler({
                            final: ">"
                        }, ()=>this.keypadNumericMode()), this._parser.registerEscHandler({
                            final: "c"
                        }, ()=>this.fullReset()), this._parser.registerEscHandler({
                            final: "n"
                        }, ()=>this.setgLevel(2)), this._parser.registerEscHandler({
                            final: "o"
                        }, ()=>this.setgLevel(3)), this._parser.registerEscHandler({
                            final: "|"
                        }, ()=>this.setgLevel(3)), this._parser.registerEscHandler({
                            final: "}"
                        }, ()=>this.setgLevel(2)), this._parser.registerEscHandler({
                            final: "~"
                        }, ()=>this.setgLevel(1)), this._parser.registerEscHandler({
                            intermediates: "%",
                            final: "@"
                        }, ()=>this.selectDefaultCharset()), this._parser.registerEscHandler({
                            intermediates: "%",
                            final: "G"
                        }, ()=>this.selectDefaultCharset());
                        for(const e in o.CHARSETS)this._parser.registerEscHandler({
                            intermediates: "(",
                            final: e
                        }, ()=>this.selectCharset("(" + e)), this._parser.registerEscHandler({
                            intermediates: ")",
                            final: e
                        }, ()=>this.selectCharset(")" + e)), this._parser.registerEscHandler({
                            intermediates: "*",
                            final: e
                        }, ()=>this.selectCharset("*" + e)), this._parser.registerEscHandler({
                            intermediates: "+",
                            final: e
                        }, ()=>this.selectCharset("+" + e)), this._parser.registerEscHandler({
                            intermediates: "-",
                            final: e
                        }, ()=>this.selectCharset("-" + e)), this._parser.registerEscHandler({
                            intermediates: ".",
                            final: e
                        }, ()=>this.selectCharset("." + e)), this._parser.registerEscHandler({
                            intermediates: "/",
                            final: e
                        }, ()=>this.selectCharset("/" + e));
                        this._parser.registerEscHandler({
                            intermediates: "#",
                            final: "8"
                        }, ()=>this.screenAlignmentPattern()), this._parser.setErrorHandler((e)=>(this._logService.error("Parsing error: ", e), e)), this._parser.registerDcsHandler({
                            intermediates: "$",
                            final: "q"
                        }, new m.DcsHandler((e, t)=>this.requestStatusString(e, t)));
                    }
                    _preserveStack(e, t, i, s) {
                        this._parseStack.paused = !0, this._parseStack.cursorStartX = e, this._parseStack.cursorStartY = t, this._parseStack.decodedLength = i, this._parseStack.position = s;
                    }
                    _logSlowResolvingAsync(e) {
                        this._logService.logLevel <= v.LogLevelEnum.WARN && Promise.race([
                            e,
                            new Promise((e, t)=>setTimeout(()=>t("#SLOW_TIMEOUT"), 5e3))
                        ]).catch((e)=>{
                            if ("#SLOW_TIMEOUT" !== e) throw e;
                            console.warn("async parser handler taking longer than 5000 ms");
                        });
                    }
                    _getCurrentLinkId() {
                        return this._curAttrData.extended.urlId;
                    }
                    parse(e, t) {
                        let i, s = this._activeBuffer.x, r = this._activeBuffer.y, n = 0;
                        const o = this._parseStack.paused;
                        if (o) {
                            if (i = this._parser.parse(this._parseBuffer, this._parseStack.decodedLength, t)) return this._logSlowResolvingAsync(i), i;
                            s = this._parseStack.cursorStartX, r = this._parseStack.cursorStartY, this._parseStack.paused = !1, e.length > b && (n = this._parseStack.position + b);
                        }
                        if (this._logService.logLevel <= v.LogLevelEnum.DEBUG && this._logService.debug("parsing data" + ("string" == typeof e ? ` "${e}"` : ` "${Array.prototype.map.call(e, (e)=>String.fromCharCode(e)).join("")}"`), "string" == typeof e ? e.split("").map((e)=>e.charCodeAt(0)) : e), this._parseBuffer.length < e.length && this._parseBuffer.length < b && (this._parseBuffer = new Uint32Array(Math.min(e.length, b))), o || this._dirtyRowTracker.clearRange(), e.length > b) for(let t = n; t < e.length; t += b){
                            const n = t + b < e.length ? t + b : e.length, o = "string" == typeof e ? this._stringDecoder.decode(e.substring(t, n), this._parseBuffer) : this._utf8Decoder.decode(e.subarray(t, n), this._parseBuffer);
                            if (i = this._parser.parse(this._parseBuffer, o)) return this._preserveStack(s, r, o, t), this._logSlowResolvingAsync(i), i;
                        }
                        else if (!o) {
                            const t = "string" == typeof e ? this._stringDecoder.decode(e, this._parseBuffer) : this._utf8Decoder.decode(e, this._parseBuffer);
                            if (i = this._parser.parse(this._parseBuffer, t)) return this._preserveStack(s, r, t, 0), this._logSlowResolvingAsync(i), i;
                        }
                        this._activeBuffer.x === s && this._activeBuffer.y === r || this._onCursorMove.fire();
                        const a = this._dirtyRowTracker.end + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp), h = this._dirtyRowTracker.start + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
                        h < this._bufferService.rows && this._onRequestRefreshRows.fire(Math.min(h, this._bufferService.rows - 1), Math.min(a, this._bufferService.rows - 1));
                    }
                    print(e, t, i) {
                        let s, r;
                        const n = this._charsetService.charset, o = this._optionsService.rawOptions.screenReaderMode, a = this._bufferService.cols, h = this._coreService.decPrivateModes.wraparound, d = this._coreService.modes.insertMode, u = this._curAttrData;
                        let f = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                        this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._activeBuffer.x && i - t > 0 && 2 === f.getWidth(this._activeBuffer.x - 1) && f.setCellFromCodepoint(this._activeBuffer.x - 1, 0, 1, u);
                        let v = this._parser.precedingJoinState;
                        for(let g = t; g < i; ++g){
                            if (s = e[g], s < 127 && n) {
                                const e = n[String.fromCharCode(s)];
                                e && (s = e.charCodeAt(0));
                            }
                            const t = this._unicodeService.charProperties(s, v);
                            r = p.UnicodeService.extractWidth(t);
                            const i = p.UnicodeService.extractShouldJoin(t), m = i ? p.UnicodeService.extractWidth(v) : 0;
                            if (v = t, o && this._onA11yChar.fire((0, c.stringFromCodePoint)(s)), this._getCurrentLinkId() && this._oscLinkService.addLineToLink(this._getCurrentLinkId(), this._activeBuffer.ybase + this._activeBuffer.y), this._activeBuffer.x + r - m > a) {
                                if (h) {
                                    const e = f;
                                    let t = this._activeBuffer.x - m;
                                    for(this._activeBuffer.x = m, this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData(), !0)) : (this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = !0), f = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y), m > 0 && f instanceof l.BufferLine && f.copyCellsFrom(e, t, 0, m, !1); t < a;)e.setCellFromCodepoint(t++, 0, 1, u);
                                } else if (this._activeBuffer.x = a - 1, 2 === r) continue;
                            }
                            if (i && this._activeBuffer.x) {
                                const e = f.getWidth(this._activeBuffer.x - 1) ? 1 : 2;
                                f.addCodepointToCell(this._activeBuffer.x - e, s, r);
                                for(let e = r - m; --e >= 0;)f.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, u);
                            } else if (d && (f.insertCells(this._activeBuffer.x, r - m, this._activeBuffer.getNullCell(u)), 2 === f.getWidth(a - 1) && f.setCellFromCodepoint(a - 1, _.NULL_CELL_CODE, _.NULL_CELL_WIDTH, u)), f.setCellFromCodepoint(this._activeBuffer.x++, s, r, u), r > 0) for(; --r;)f.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, u);
                        }
                        this._parser.precedingJoinState = v, this._activeBuffer.x < a && i - t > 0 && 0 === f.getWidth(this._activeBuffer.x) && !f.hasContent(this._activeBuffer.x) && f.setCellFromCodepoint(this._activeBuffer.x, 0, 1, u), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
                    }
                    registerCsiHandler(e, t) {
                        return "t" !== e.final || e.prefix || e.intermediates ? this._parser.registerCsiHandler(e, t) : this._parser.registerCsiHandler(e, (e)=>!w(e.params[0], this._optionsService.rawOptions.windowOptions) || t(e));
                    }
                    registerDcsHandler(e, t) {
                        return this._parser.registerDcsHandler(e, new m.DcsHandler(t));
                    }
                    registerEscHandler(e, t) {
                        return this._parser.registerEscHandler(e, t);
                    }
                    registerOscHandler(e, t) {
                        return this._parser.registerOscHandler(e, new g.OscHandler(t));
                    }
                    bell() {
                        return this._onRequestBell.fire(), !0;
                    }
                    lineFeed() {
                        return this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._optionsService.rawOptions.convertEol && (this._activeBuffer.x = 0), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows ? this._activeBuffer.y = this._bufferService.rows - 1 : this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = !1, this._activeBuffer.x >= this._bufferService.cols && this._activeBuffer.x--, this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._onLineFeed.fire(), !0;
                    }
                    carriageReturn() {
                        return this._activeBuffer.x = 0, !0;
                    }
                    backspace() {
                        if (!this._coreService.decPrivateModes.reverseWraparound) return this._restrictCursor(), this._activeBuffer.x > 0 && this._activeBuffer.x--, !0;
                        if (this._restrictCursor(this._bufferService.cols), this._activeBuffer.x > 0) this._activeBuffer.x--;
                        else if (0 === this._activeBuffer.x && this._activeBuffer.y > this._activeBuffer.scrollTop && this._activeBuffer.y <= this._activeBuffer.scrollBottom && this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y)?.isWrapped) {
                            this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = !1, this._activeBuffer.y--, this._activeBuffer.x = this._bufferService.cols - 1;
                            const e = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                            e.hasWidth(this._activeBuffer.x) && !e.hasContent(this._activeBuffer.x) && this._activeBuffer.x--;
                        }
                        return this._restrictCursor(), !0;
                    }
                    tab() {
                        if (this._activeBuffer.x >= this._bufferService.cols) return !0;
                        const e = this._activeBuffer.x;
                        return this._activeBuffer.x = this._activeBuffer.nextStop(), this._optionsService.rawOptions.screenReaderMode && this._onA11yTab.fire(this._activeBuffer.x - e), !0;
                    }
                    shiftOut() {
                        return this._charsetService.setgLevel(1), !0;
                    }
                    shiftIn() {
                        return this._charsetService.setgLevel(0), !0;
                    }
                    _restrictCursor(e = this._bufferService.cols - 1) {
                        this._activeBuffer.x = Math.min(e, Math.max(0, this._activeBuffer.x)), this._activeBuffer.y = this._coreService.decPrivateModes.origin ? Math.min(this._activeBuffer.scrollBottom, Math.max(this._activeBuffer.scrollTop, this._activeBuffer.y)) : Math.min(this._bufferService.rows - 1, Math.max(0, this._activeBuffer.y)), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
                    }
                    _setCursor(e, t) {
                        this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._coreService.decPrivateModes.origin ? (this._activeBuffer.x = e, this._activeBuffer.y = this._activeBuffer.scrollTop + t) : (this._activeBuffer.x = e, this._activeBuffer.y = t), this._restrictCursor(), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
                    }
                    _moveCursor(e, t) {
                        this._restrictCursor(), this._setCursor(this._activeBuffer.x + e, this._activeBuffer.y + t);
                    }
                    cursorUp(e) {
                        const t = this._activeBuffer.y - this._activeBuffer.scrollTop;
                        return t >= 0 ? this._moveCursor(0, -Math.min(t, e.params[0] || 1)) : this._moveCursor(0, -(e.params[0] || 1)), !0;
                    }
                    cursorDown(e) {
                        const t = this._activeBuffer.scrollBottom - this._activeBuffer.y;
                        return t >= 0 ? this._moveCursor(0, Math.min(t, e.params[0] || 1)) : this._moveCursor(0, e.params[0] || 1), !0;
                    }
                    cursorForward(e) {
                        return this._moveCursor(e.params[0] || 1, 0), !0;
                    }
                    cursorBackward(e) {
                        return this._moveCursor(-(e.params[0] || 1), 0), !0;
                    }
                    cursorNextLine(e) {
                        return this.cursorDown(e), this._activeBuffer.x = 0, !0;
                    }
                    cursorPrecedingLine(e) {
                        return this.cursorUp(e), this._activeBuffer.x = 0, !0;
                    }
                    cursorCharAbsolute(e) {
                        return this._setCursor((e.params[0] || 1) - 1, this._activeBuffer.y), !0;
                    }
                    cursorPosition(e) {
                        return this._setCursor(e.length >= 2 ? (e.params[1] || 1) - 1 : 0, (e.params[0] || 1) - 1), !0;
                    }
                    charPosAbsolute(e) {
                        return this._setCursor((e.params[0] || 1) - 1, this._activeBuffer.y), !0;
                    }
                    hPositionRelative(e) {
                        return this._moveCursor(e.params[0] || 1, 0), !0;
                    }
                    linePosAbsolute(e) {
                        return this._setCursor(this._activeBuffer.x, (e.params[0] || 1) - 1), !0;
                    }
                    vPositionRelative(e) {
                        return this._moveCursor(0, e.params[0] || 1), !0;
                    }
                    hVPosition(e) {
                        return this.cursorPosition(e), !0;
                    }
                    tabClear(e) {
                        const t = e.params[0];
                        return 0 === t ? delete this._activeBuffer.tabs[this._activeBuffer.x] : 3 === t && (this._activeBuffer.tabs = {}), !0;
                    }
                    cursorForwardTab(e) {
                        if (this._activeBuffer.x >= this._bufferService.cols) return !0;
                        let t = e.params[0] || 1;
                        for(; t--;)this._activeBuffer.x = this._activeBuffer.nextStop();
                        return !0;
                    }
                    cursorBackwardTab(e) {
                        if (this._activeBuffer.x >= this._bufferService.cols) return !0;
                        let t = e.params[0] || 1;
                        for(; t--;)this._activeBuffer.x = this._activeBuffer.prevStop();
                        return !0;
                    }
                    selectProtected(e) {
                        const t = e.params[0];
                        return 1 === t && (this._curAttrData.bg |= 536870912), 2 !== t && 0 !== t || (this._curAttrData.bg &= -536870913), !0;
                    }
                    _eraseInBufferLine(e, t, i, s = !1, r = !1) {
                        const n = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
                        n.replaceCells(t, i, this._activeBuffer.getNullCell(this._eraseAttrData()), r), s && (n.isWrapped = !1);
                    }
                    _resetBufferLine(e, t = !1) {
                        const i = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
                        i && (i.fill(this._activeBuffer.getNullCell(this._eraseAttrData()), t), this._bufferService.buffer.clearMarkers(this._activeBuffer.ybase + e), i.isWrapped = !1);
                    }
                    eraseInDisplay(e, t = !1) {
                        let i;
                        switch(this._restrictCursor(this._bufferService.cols), e.params[0]){
                            case 0:
                                for(i = this._activeBuffer.y, this._dirtyRowTracker.markDirty(i), this._eraseInBufferLine(i++, this._activeBuffer.x, this._bufferService.cols, 0 === this._activeBuffer.x, t); i < this._bufferService.rows; i++)this._resetBufferLine(i, t);
                                this._dirtyRowTracker.markDirty(i);
                                break;
                            case 1:
                                for(i = this._activeBuffer.y, this._dirtyRowTracker.markDirty(i), this._eraseInBufferLine(i, 0, this._activeBuffer.x + 1, !0, t), this._activeBuffer.x + 1 >= this._bufferService.cols && (this._activeBuffer.lines.get(i + 1).isWrapped = !1); i--;)this._resetBufferLine(i, t);
                                this._dirtyRowTracker.markDirty(0);
                                break;
                            case 2:
                                for(i = this._bufferService.rows, this._dirtyRowTracker.markDirty(i - 1); i--;)this._resetBufferLine(i, t);
                                this._dirtyRowTracker.markDirty(0);
                                break;
                            case 3:
                                const e1 = this._activeBuffer.lines.length - this._bufferService.rows;
                                e1 > 0 && (this._activeBuffer.lines.trimStart(e1), this._activeBuffer.ybase = Math.max(this._activeBuffer.ybase - e1, 0), this._activeBuffer.ydisp = Math.max(this._activeBuffer.ydisp - e1, 0), this._onScroll.fire(0));
                        }
                        return !0;
                    }
                    eraseInLine(e, t = !1) {
                        switch(this._restrictCursor(this._bufferService.cols), e.params[0]){
                            case 0:
                                this._eraseInBufferLine(this._activeBuffer.y, this._activeBuffer.x, this._bufferService.cols, 0 === this._activeBuffer.x, t);
                                break;
                            case 1:
                                this._eraseInBufferLine(this._activeBuffer.y, 0, this._activeBuffer.x + 1, !1, t);
                                break;
                            case 2:
                                this._eraseInBufferLine(this._activeBuffer.y, 0, this._bufferService.cols, !0, t);
                        }
                        return this._dirtyRowTracker.markDirty(this._activeBuffer.y), !0;
                    }
                    insertLines(e) {
                        this._restrictCursor();
                        let t = e.params[0] || 1;
                        if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
                        const i = this._activeBuffer.ybase + this._activeBuffer.y, s = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, r = this._bufferService.rows - 1 + this._activeBuffer.ybase - s + 1;
                        for(; t--;)this._activeBuffer.lines.splice(r - 1, 1), this._activeBuffer.lines.splice(i, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
                        return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, !0;
                    }
                    deleteLines(e) {
                        this._restrictCursor();
                        let t = e.params[0] || 1;
                        if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
                        const i = this._activeBuffer.ybase + this._activeBuffer.y;
                        let s;
                        for(s = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, s = this._bufferService.rows - 1 + this._activeBuffer.ybase - s; t--;)this._activeBuffer.lines.splice(i, 1), this._activeBuffer.lines.splice(s, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
                        return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, !0;
                    }
                    insertChars(e) {
                        this._restrictCursor();
                        const t = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                        return t && (t.insertCells(this._activeBuffer.x, e.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), !0;
                    }
                    deleteChars(e) {
                        this._restrictCursor();
                        const t = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                        return t && (t.deleteCells(this._activeBuffer.x, e.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), !0;
                    }
                    scrollUp(e) {
                        let t = e.params[0] || 1;
                        for(; t--;)this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
                        return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
                    }
                    scrollDown(e) {
                        let t = e.params[0] || 1;
                        for(; t--;)this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 0, this._activeBuffer.getBlankLine(l.DEFAULT_ATTR_DATA));
                        return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
                    }
                    scrollLeft(e) {
                        if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
                        const t = e.params[0] || 1;
                        for(let e = this._activeBuffer.scrollTop; e <= this._activeBuffer.scrollBottom; ++e){
                            const i = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
                            i.deleteCells(0, t, this._activeBuffer.getNullCell(this._eraseAttrData())), i.isWrapped = !1;
                        }
                        return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
                    }
                    scrollRight(e) {
                        if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
                        const t = e.params[0] || 1;
                        for(let e = this._activeBuffer.scrollTop; e <= this._activeBuffer.scrollBottom; ++e){
                            const i = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
                            i.insertCells(0, t, this._activeBuffer.getNullCell(this._eraseAttrData())), i.isWrapped = !1;
                        }
                        return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
                    }
                    insertColumns(e) {
                        if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
                        const t = e.params[0] || 1;
                        for(let e = this._activeBuffer.scrollTop; e <= this._activeBuffer.scrollBottom; ++e){
                            const i = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
                            i.insertCells(this._activeBuffer.x, t, this._activeBuffer.getNullCell(this._eraseAttrData())), i.isWrapped = !1;
                        }
                        return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
                    }
                    deleteColumns(e) {
                        if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
                        const t = e.params[0] || 1;
                        for(let e = this._activeBuffer.scrollTop; e <= this._activeBuffer.scrollBottom; ++e){
                            const i = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
                            i.deleteCells(this._activeBuffer.x, t, this._activeBuffer.getNullCell(this._eraseAttrData())), i.isWrapped = !1;
                        }
                        return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
                    }
                    eraseChars(e) {
                        this._restrictCursor();
                        const t = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                        return t && (t.replaceCells(this._activeBuffer.x, this._activeBuffer.x + (e.params[0] || 1), this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), !0;
                    }
                    repeatPrecedingCharacter(e) {
                        const t = this._parser.precedingJoinState;
                        if (!t) return !0;
                        const i = e.params[0] || 1, s = p.UnicodeService.extractWidth(t), r = this._activeBuffer.x - s, n = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).getString(r), o = new Uint32Array(n.length * i);
                        let a = 0;
                        for(let e = 0; e < n.length;){
                            const t = n.codePointAt(e) || 0;
                            o[a++] = t, e += t > 65535 ? 2 : 1;
                        }
                        let h = a;
                        for(let e = 1; e < i; ++e)o.copyWithin(h, 0, a), h += a;
                        return this.print(o, 0, h), !0;
                    }
                    sendDeviceAttributesPrimary(e) {
                        return e.params[0] > 0 || (this._is("xterm") || this._is("rxvt-unicode") || this._is("screen") ? this._coreService.triggerDataEvent(n.C0.ESC + "[?1;2c") : this._is("linux") && this._coreService.triggerDataEvent(n.C0.ESC + "[?6c")), !0;
                    }
                    sendDeviceAttributesSecondary(e) {
                        return e.params[0] > 0 || (this._is("xterm") ? this._coreService.triggerDataEvent(n.C0.ESC + "[>0;276;0c") : this._is("rxvt-unicode") ? this._coreService.triggerDataEvent(n.C0.ESC + "[>85;95;0c") : this._is("linux") ? this._coreService.triggerDataEvent(e.params[0] + "c") : this._is("screen") && this._coreService.triggerDataEvent(n.C0.ESC + "[>83;40003;0c")), !0;
                    }
                    _is(e) {
                        return 0 === (this._optionsService.rawOptions.termName + "").indexOf(e);
                    }
                    setMode(e) {
                        for(let t = 0; t < e.length; t++)switch(e.params[t]){
                            case 4:
                                this._coreService.modes.insertMode = !0;
                                break;
                            case 20:
                                this._optionsService.options.convertEol = !0;
                        }
                        return !0;
                    }
                    setModePrivate(e) {
                        for(let t = 0; t < e.length; t++)switch(e.params[t]){
                            case 1:
                                this._coreService.decPrivateModes.applicationCursorKeys = !0;
                                break;
                            case 2:
                                this._charsetService.setgCharset(0, o.DEFAULT_CHARSET), this._charsetService.setgCharset(1, o.DEFAULT_CHARSET), this._charsetService.setgCharset(2, o.DEFAULT_CHARSET), this._charsetService.setgCharset(3, o.DEFAULT_CHARSET);
                                break;
                            case 3:
                                this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(132, this._bufferService.rows), this._onRequestReset.fire());
                                break;
                            case 6:
                                this._coreService.decPrivateModes.origin = !0, this._setCursor(0, 0);
                                break;
                            case 7:
                                this._coreService.decPrivateModes.wraparound = !0;
                                break;
                            case 12:
                                this._optionsService.options.cursorBlink = !0;
                                break;
                            case 45:
                                this._coreService.decPrivateModes.reverseWraparound = !0;
                                break;
                            case 66:
                                this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = !0, this._onRequestSyncScrollBar.fire();
                                break;
                            case 9:
                                this._coreMouseService.activeProtocol = "X10";
                                break;
                            case 1e3:
                                this._coreMouseService.activeProtocol = "VT200";
                                break;
                            case 1002:
                                this._coreMouseService.activeProtocol = "DRAG";
                                break;
                            case 1003:
                                this._coreMouseService.activeProtocol = "ANY";
                                break;
                            case 1004:
                                this._coreService.decPrivateModes.sendFocus = !0, this._onRequestSendFocus.fire();
                                break;
                            case 1005:
                                this._logService.debug("DECSET 1005 not supported (see #2507)");
                                break;
                            case 1006:
                                this._coreMouseService.activeEncoding = "SGR";
                                break;
                            case 1015:
                                this._logService.debug("DECSET 1015 not supported (see #2507)");
                                break;
                            case 1016:
                                this._coreMouseService.activeEncoding = "SGR_PIXELS";
                                break;
                            case 25:
                                this._coreService.isCursorHidden = !1;
                                break;
                            case 1048:
                                this.saveCursor();
                                break;
                            case 1049:
                                this.saveCursor();
                            case 47:
                            case 1047:
                                this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()), this._coreService.isCursorInitialized = !0, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                                break;
                            case 2004:
                                this._coreService.decPrivateModes.bracketedPasteMode = !0;
                        }
                        return !0;
                    }
                    resetMode(e) {
                        for(let t = 0; t < e.length; t++)switch(e.params[t]){
                            case 4:
                                this._coreService.modes.insertMode = !1;
                                break;
                            case 20:
                                this._optionsService.options.convertEol = !1;
                        }
                        return !0;
                    }
                    resetModePrivate(e) {
                        for(let t = 0; t < e.length; t++)switch(e.params[t]){
                            case 1:
                                this._coreService.decPrivateModes.applicationCursorKeys = !1;
                                break;
                            case 3:
                                this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(80, this._bufferService.rows), this._onRequestReset.fire());
                                break;
                            case 6:
                                this._coreService.decPrivateModes.origin = !1, this._setCursor(0, 0);
                                break;
                            case 7:
                                this._coreService.decPrivateModes.wraparound = !1;
                                break;
                            case 12:
                                this._optionsService.options.cursorBlink = !1;
                                break;
                            case 45:
                                this._coreService.decPrivateModes.reverseWraparound = !1;
                                break;
                            case 66:
                                this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = !1, this._onRequestSyncScrollBar.fire();
                                break;
                            case 9:
                            case 1e3:
                            case 1002:
                            case 1003:
                                this._coreMouseService.activeProtocol = "NONE";
                                break;
                            case 1004:
                                this._coreService.decPrivateModes.sendFocus = !1;
                                break;
                            case 1005:
                                this._logService.debug("DECRST 1005 not supported (see #2507)");
                                break;
                            case 1006:
                            case 1016:
                                this._coreMouseService.activeEncoding = "DEFAULT";
                                break;
                            case 1015:
                                this._logService.debug("DECRST 1015 not supported (see #2507)");
                                break;
                            case 25:
                                this._coreService.isCursorHidden = !0;
                                break;
                            case 1048:
                                this.restoreCursor();
                                break;
                            case 1049:
                            case 47:
                            case 1047:
                                this._bufferService.buffers.activateNormalBuffer(), 1049 === e.params[t] && this.restoreCursor(), this._coreService.isCursorInitialized = !0, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                                break;
                            case 2004:
                                this._coreService.decPrivateModes.bracketedPasteMode = !1;
                        }
                        return !0;
                    }
                    requestMode(e, t) {
                        const i = this._coreService.decPrivateModes, { activeProtocol: s, activeEncoding: r } = this._coreMouseService, o = this._coreService, { buffers: a, cols: h } = this._bufferService, { active: c, alt: l } = a, d = this._optionsService.rawOptions, _ = (e)=>e ? 1 : 2, u = e.params[0];
                        var f, v;
                        return f = u, v = t ? 2 === u ? 4 : 4 === u ? _(o.modes.insertMode) : 12 === u ? 3 : 20 === u ? _(d.convertEol) : 0 : 1 === u ? _(i.applicationCursorKeys) : 3 === u ? d.windowOptions.setWinLines ? 80 === h ? 2 : 132 === h ? 1 : 0 : 0 : 6 === u ? _(i.origin) : 7 === u ? _(i.wraparound) : 8 === u ? 3 : 9 === u ? _("X10" === s) : 12 === u ? _(d.cursorBlink) : 25 === u ? _(!o.isCursorHidden) : 45 === u ? _(i.reverseWraparound) : 66 === u ? _(i.applicationKeypad) : 67 === u ? 4 : 1e3 === u ? _("VT200" === s) : 1002 === u ? _("DRAG" === s) : 1003 === u ? _("ANY" === s) : 1004 === u ? _(i.sendFocus) : 1005 === u ? 4 : 1006 === u ? _("SGR" === r) : 1015 === u ? 4 : 1016 === u ? _("SGR_PIXELS" === r) : 1048 === u ? 1 : 47 === u || 1047 === u || 1049 === u ? _(c === l) : 2004 === u ? _(i.bracketedPasteMode) : 0, o.triggerDataEvent(`${n.C0.ESC}[${t ? "" : "?"}${f};${v}$y`), !0;
                    }
                    _updateAttrColor(e, t, i, s, r) {
                        return 2 === t ? (e |= 50331648, e &= -16777216, e |= f.AttributeData.fromColorRGB([
                            i,
                            s,
                            r
                        ])) : 5 === t && (e &= -50331904, e |= 33554432 | 255 & i), e;
                    }
                    _extractColor(e, t, i) {
                        const s = [
                            0,
                            0,
                            -1,
                            0,
                            0,
                            0
                        ];
                        let r = 0, n = 0;
                        do {
                            if (s[n + r] = e.params[t + n], e.hasSubParams(t + n)) {
                                const i = e.getSubParams(t + n);
                                let o = 0;
                                do 5 === s[1] && (r = 1), s[n + o + 1 + r] = i[o];
                                while (++o < i.length && o + n + 1 + r < s.length);
                                break;
                            }
                            if (5 === s[1] && n + r >= 2 || 2 === s[1] && n + r >= 5) break;
                            s[1] && (r = 1);
                        }while (++n + t < e.length && n + r < s.length);
                        for(let e = 2; e < s.length; ++e)-1 === s[e] && (s[e] = 0);
                        switch(s[0]){
                            case 38:
                                i.fg = this._updateAttrColor(i.fg, s[1], s[3], s[4], s[5]);
                                break;
                            case 48:
                                i.bg = this._updateAttrColor(i.bg, s[1], s[3], s[4], s[5]);
                                break;
                            case 58:
                                i.extended = i.extended.clone(), i.extended.underlineColor = this._updateAttrColor(i.extended.underlineColor, s[1], s[3], s[4], s[5]);
                        }
                        return n;
                    }
                    _processUnderline(e, t) {
                        t.extended = t.extended.clone(), (!~e || e > 5) && (e = 1), t.extended.underlineStyle = e, t.fg |= 268435456, 0 === e && (t.fg &= -268435457), t.updateExtended();
                    }
                    _processSGR0(e) {
                        e.fg = l.DEFAULT_ATTR_DATA.fg, e.bg = l.DEFAULT_ATTR_DATA.bg, e.extended = e.extended.clone(), e.extended.underlineStyle = 0, e.extended.underlineColor &= -67108864, e.updateExtended();
                    }
                    charAttributes(e) {
                        if (1 === e.length && 0 === e.params[0]) return this._processSGR0(this._curAttrData), !0;
                        const t = e.length;
                        let i;
                        const s = this._curAttrData;
                        for(let r = 0; r < t; r++)i = e.params[r], i >= 30 && i <= 37 ? (s.fg &= -50331904, s.fg |= 16777216 | i - 30) : i >= 40 && i <= 47 ? (s.bg &= -50331904, s.bg |= 16777216 | i - 40) : i >= 90 && i <= 97 ? (s.fg &= -50331904, s.fg |= 16777224 | i - 90) : i >= 100 && i <= 107 ? (s.bg &= -50331904, s.bg |= 16777224 | i - 100) : 0 === i ? this._processSGR0(s) : 1 === i ? s.fg |= 134217728 : 3 === i ? s.bg |= 67108864 : 4 === i ? (s.fg |= 268435456, this._processUnderline(e.hasSubParams(r) ? e.getSubParams(r)[0] : 1, s)) : 5 === i ? s.fg |= 536870912 : 7 === i ? s.fg |= 67108864 : 8 === i ? s.fg |= 1073741824 : 9 === i ? s.fg |= 2147483648 : 2 === i ? s.bg |= 134217728 : 21 === i ? this._processUnderline(2, s) : 22 === i ? (s.fg &= -134217729, s.bg &= -134217729) : 23 === i ? s.bg &= -67108865 : 24 === i ? (s.fg &= -268435457, this._processUnderline(0, s)) : 25 === i ? s.fg &= -536870913 : 27 === i ? s.fg &= -67108865 : 28 === i ? s.fg &= -1073741825 : 29 === i ? s.fg &= 2147483647 : 39 === i ? (s.fg &= -67108864, s.fg |= 16777215 & l.DEFAULT_ATTR_DATA.fg) : 49 === i ? (s.bg &= -67108864, s.bg |= 16777215 & l.DEFAULT_ATTR_DATA.bg) : 38 === i || 48 === i || 58 === i ? r += this._extractColor(e, r, s) : 53 === i ? s.bg |= 1073741824 : 55 === i ? s.bg &= -1073741825 : 59 === i ? (s.extended = s.extended.clone(), s.extended.underlineColor = -1, s.updateExtended()) : 100 === i ? (s.fg &= -67108864, s.fg |= 16777215 & l.DEFAULT_ATTR_DATA.fg, s.bg &= -67108864, s.bg |= 16777215 & l.DEFAULT_ATTR_DATA.bg) : this._logService.debug("Unknown SGR attribute: %d.", i);
                        return !0;
                    }
                    deviceStatus(e) {
                        switch(e.params[0]){
                            case 5:
                                this._coreService.triggerDataEvent(`${n.C0.ESC}[0n`);
                                break;
                            case 6:
                                const e1 = this._activeBuffer.y + 1, t = this._activeBuffer.x + 1;
                                this._coreService.triggerDataEvent(`${n.C0.ESC}[${e1};${t}R`);
                        }
                        return !0;
                    }
                    deviceStatusPrivate(e) {
                        if (6 === e.params[0]) {
                            const e = this._activeBuffer.y + 1, t = this._activeBuffer.x + 1;
                            this._coreService.triggerDataEvent(`${n.C0.ESC}[?${e};${t}R`);
                        }
                        return !0;
                    }
                    softReset(e) {
                        return this._coreService.isCursorHidden = !1, this._onRequestSyncScrollBar.fire(), this._activeBuffer.scrollTop = 0, this._activeBuffer.scrollBottom = this._bufferService.rows - 1, this._curAttrData = l.DEFAULT_ATTR_DATA.clone(), this._coreService.reset(), this._charsetService.reset(), this._activeBuffer.savedX = 0, this._activeBuffer.savedY = this._activeBuffer.ybase, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, this._coreService.decPrivateModes.origin = !1, !0;
                    }
                    setCursorStyle(e) {
                        const t = e.params[0] || 1;
                        switch(t){
                            case 1:
                            case 2:
                                this._optionsService.options.cursorStyle = "block";
                                break;
                            case 3:
                            case 4:
                                this._optionsService.options.cursorStyle = "underline";
                                break;
                            case 5:
                            case 6:
                                this._optionsService.options.cursorStyle = "bar";
                        }
                        const i = t % 2 == 1;
                        return this._optionsService.options.cursorBlink = i, !0;
                    }
                    setScrollRegion(e) {
                        const t = e.params[0] || 1;
                        let i;
                        return (e.length < 2 || (i = e.params[1]) > this._bufferService.rows || 0 === i) && (i = this._bufferService.rows), i > t && (this._activeBuffer.scrollTop = t - 1, this._activeBuffer.scrollBottom = i - 1, this._setCursor(0, 0)), !0;
                    }
                    windowOptions(e) {
                        if (!w(e.params[0], this._optionsService.rawOptions.windowOptions)) return !0;
                        const t = e.length > 1 ? e.params[1] : 0;
                        switch(e.params[0]){
                            case 14:
                                2 !== t && this._onRequestWindowsOptionsReport.fire(y.GET_WIN_SIZE_PIXELS);
                                break;
                            case 16:
                                this._onRequestWindowsOptionsReport.fire(y.GET_CELL_SIZE_PIXELS);
                                break;
                            case 18:
                                this._bufferService && this._coreService.triggerDataEvent(`${n.C0.ESC}[8;${this._bufferService.rows};${this._bufferService.cols}t`);
                                break;
                            case 22:
                                0 !== t && 2 !== t || (this._windowTitleStack.push(this._windowTitle), this._windowTitleStack.length > 10 && this._windowTitleStack.shift()), 0 !== t && 1 !== t || (this._iconNameStack.push(this._iconName), this._iconNameStack.length > 10 && this._iconNameStack.shift());
                                break;
                            case 23:
                                0 !== t && 2 !== t || this._windowTitleStack.length && this.setTitle(this._windowTitleStack.pop()), 0 !== t && 1 !== t || this._iconNameStack.length && this.setIconName(this._iconNameStack.pop());
                        }
                        return !0;
                    }
                    saveCursor(e) {
                        return this._activeBuffer.savedX = this._activeBuffer.x, this._activeBuffer.savedY = this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, !0;
                    }
                    restoreCursor(e) {
                        return this._activeBuffer.x = this._activeBuffer.savedX || 0, this._activeBuffer.y = Math.max(this._activeBuffer.savedY - this._activeBuffer.ybase, 0), this._curAttrData.fg = this._activeBuffer.savedCurAttrData.fg, this._curAttrData.bg = this._activeBuffer.savedCurAttrData.bg, this._charsetService.charset = this._savedCharset, this._activeBuffer.savedCharset && (this._charsetService.charset = this._activeBuffer.savedCharset), this._restrictCursor(), !0;
                    }
                    setTitle(e) {
                        return this._windowTitle = e, this._onTitleChange.fire(e), !0;
                    }
                    setIconName(e) {
                        return this._iconName = e, !0;
                    }
                    setOrReportIndexedColor(e) {
                        const t = [], i = e.split(";");
                        for(; i.length > 1;){
                            const e = i.shift(), s = i.shift();
                            if (/^\d+$/.exec(e)) {
                                const i = parseInt(e);
                                if (D(i)) {
                                    if ("?" === s) t.push({
                                        type: 0,
                                        index: i
                                    });
                                    else {
                                        const e = (0, S.parseColor)(s);
                                        e && t.push({
                                            type: 1,
                                            index: i,
                                            color: e
                                        });
                                    }
                                }
                            }
                        }
                        return t.length && this._onColor.fire(t), !0;
                    }
                    setHyperlink(e) {
                        const t = e.split(";");
                        return !(t.length < 2) && (t[1] ? this._createHyperlink(t[0], t[1]) : !t[0] && this._finishHyperlink());
                    }
                    _createHyperlink(e, t) {
                        this._getCurrentLinkId() && this._finishHyperlink();
                        const i = e.split(":");
                        let s;
                        const r = i.findIndex((e)=>e.startsWith("id="));
                        return -1 !== r && (s = i[r].slice(3) || void 0), this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = this._oscLinkService.registerLink({
                            id: s,
                            uri: t
                        }), this._curAttrData.updateExtended(), !0;
                    }
                    _finishHyperlink() {
                        return this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = 0, this._curAttrData.updateExtended(), !0;
                    }
                    _setOrReportSpecialColor(e, t) {
                        const i = e.split(";");
                        for(let e = 0; e < i.length && !(t >= this._specialColors.length); ++e, ++t)if ("?" === i[e]) this._onColor.fire([
                            {
                                type: 0,
                                index: this._specialColors[t]
                            }
                        ]);
                        else {
                            const s = (0, S.parseColor)(i[e]);
                            s && this._onColor.fire([
                                {
                                    type: 1,
                                    index: this._specialColors[t],
                                    color: s
                                }
                            ]);
                        }
                        return !0;
                    }
                    setOrReportFgColor(e) {
                        return this._setOrReportSpecialColor(e, 0);
                    }
                    setOrReportBgColor(e) {
                        return this._setOrReportSpecialColor(e, 1);
                    }
                    setOrReportCursorColor(e) {
                        return this._setOrReportSpecialColor(e, 2);
                    }
                    restoreIndexedColor(e) {
                        if (!e) return this._onColor.fire([
                            {
                                type: 2
                            }
                        ]), !0;
                        const t = [], i = e.split(";");
                        for(let e = 0; e < i.length; ++e)if (/^\d+$/.exec(i[e])) {
                            const s = parseInt(i[e]);
                            D(s) && t.push({
                                type: 2,
                                index: s
                            });
                        }
                        return t.length && this._onColor.fire(t), !0;
                    }
                    restoreFgColor(e) {
                        return this._onColor.fire([
                            {
                                type: 2,
                                index: 256
                            }
                        ]), !0;
                    }
                    restoreBgColor(e) {
                        return this._onColor.fire([
                            {
                                type: 2,
                                index: 257
                            }
                        ]), !0;
                    }
                    restoreCursorColor(e) {
                        return this._onColor.fire([
                            {
                                type: 2,
                                index: 258
                            }
                        ]), !0;
                    }
                    nextLine() {
                        return this._activeBuffer.x = 0, this.index(), !0;
                    }
                    keypadApplicationMode() {
                        return this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = !0, this._onRequestSyncScrollBar.fire(), !0;
                    }
                    keypadNumericMode() {
                        return this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = !1, this._onRequestSyncScrollBar.fire(), !0;
                    }
                    selectDefaultCharset() {
                        return this._charsetService.setgLevel(0), this._charsetService.setgCharset(0, o.DEFAULT_CHARSET), !0;
                    }
                    selectCharset(e) {
                        return 2 !== e.length ? (this.selectDefaultCharset(), !0) : ("/" === e[0] || this._charsetService.setgCharset(C[e[0]], o.CHARSETS[e[1]] || o.DEFAULT_CHARSET), !0);
                    }
                    index() {
                        return this._restrictCursor(), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._restrictCursor(), !0;
                    }
                    tabSet() {
                        return this._activeBuffer.tabs[this._activeBuffer.x] = !0, !0;
                    }
                    reverseIndex() {
                        if (this._restrictCursor(), this._activeBuffer.y === this._activeBuffer.scrollTop) {
                            const e = this._activeBuffer.scrollBottom - this._activeBuffer.scrollTop;
                            this._activeBuffer.lines.shiftElements(this._activeBuffer.ybase + this._activeBuffer.y, e, 1), this._activeBuffer.lines.set(this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.getBlankLine(this._eraseAttrData())), this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
                        } else this._activeBuffer.y--, this._restrictCursor();
                        return !0;
                    }
                    fullReset() {
                        return this._parser.reset(), this._onRequestReset.fire(), !0;
                    }
                    reset() {
                        this._curAttrData = l.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = l.DEFAULT_ATTR_DATA.clone();
                    }
                    _eraseAttrData() {
                        return this._eraseAttrDataInternal.bg &= -67108864, this._eraseAttrDataInternal.bg |= 67108863 & this._curAttrData.bg, this._eraseAttrDataInternal;
                    }
                    setgLevel(e) {
                        return this._charsetService.setgLevel(e), !0;
                    }
                    screenAlignmentPattern() {
                        const e = new u.CellData;
                        e.content = 4194304 | "E".charCodeAt(0), e.fg = this._curAttrData.fg, e.bg = this._curAttrData.bg, this._setCursor(0, 0);
                        for(let t = 0; t < this._bufferService.rows; ++t){
                            const i = this._activeBuffer.ybase + this._activeBuffer.y + t, s = this._activeBuffer.lines.get(i);
                            s && (s.fill(e), s.isWrapped = !1);
                        }
                        return this._dirtyRowTracker.markAllDirty(), this._setCursor(0, 0), !0;
                    }
                    requestStatusString(e, t) {
                        const i = this._bufferService.buffer, s = this._optionsService.rawOptions;
                        return ((e)=>(this._coreService.triggerDataEvent(`${n.C0.ESC}${e}${n.C0.ESC}\\`), !0))('"q' === e ? `P1$r${this._curAttrData.isProtected() ? 1 : 0}"q` : '"p' === e ? 'P1$r61;1"p' : "r" === e ? `P1$r${i.scrollTop + 1};${i.scrollBottom + 1}r` : "m" === e ? "P1$r0m" : " q" === e ? `P1$r${({
                            block: 2,
                            underline: 4,
                            bar: 6
                        })[s.cursorStyle] - (s.cursorBlink ? 1 : 0)} q` : "P0$r");
                    }
                    markRangeDirty(e, t) {
                        this._dirtyRowTracker.markRangeDirty(e, t);
                    }
                }
                t.InputHandler = k;
                let L = class {
                    constructor(e){
                        this._bufferService = e, this.clearRange();
                    }
                    clearRange() {
                        this.start = this._bufferService.buffer.y, this.end = this._bufferService.buffer.y;
                    }
                    markDirty(e) {
                        e < this.start ? this.start = e : e > this.end && (this.end = e);
                    }
                    markRangeDirty(e, t) {
                        e > t && (E = e, e = t, t = E), e < this.start && (this.start = e), t > this.end && (this.end = t);
                    }
                    markAllDirty() {
                        this.markRangeDirty(0, this._bufferService.rows - 1);
                    }
                };
                function D(e) {
                    return 0 <= e && e < 256;
                }
                L = s([
                    r(0, v.IBufferService)
                ], L);
            },
            844: (e, t)=>{
                function i(e) {
                    for (const t of e)t.dispose();
                    e.length = 0;
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getDisposeArrayDisposable = t.disposeArray = t.toDisposable = t.MutableDisposable = t.Disposable = void 0, t.Disposable = class {
                    constructor(){
                        this._disposables = [], this._isDisposed = !1;
                    }
                    dispose() {
                        this._isDisposed = !0;
                        for (const e of this._disposables)e.dispose();
                        this._disposables.length = 0;
                    }
                    register(e) {
                        return this._disposables.push(e), e;
                    }
                    unregister(e) {
                        const t = this._disposables.indexOf(e);
                        -1 !== t && this._disposables.splice(t, 1);
                    }
                }, t.MutableDisposable = class {
                    constructor(){
                        this._isDisposed = !1;
                    }
                    get value() {
                        return this._isDisposed ? void 0 : this._value;
                    }
                    set value(e) {
                        this._isDisposed || e === this._value || (this._value?.dispose(), this._value = e);
                    }
                    clear() {
                        this.value = void 0;
                    }
                    dispose() {
                        this._isDisposed = !0, this._value?.dispose(), this._value = void 0;
                    }
                }, t.toDisposable = function(e) {
                    return {
                        dispose: e
                    };
                }, t.disposeArray = i, t.getDisposeArrayDisposable = function(e) {
                    return {
                        dispose: ()=>i(e)
                    };
                };
            },
            1505: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.FourKeyMap = t.TwoKeyMap = void 0;
                class i {
                    constructor(){
                        this._data = {};
                    }
                    set(e, t, i) {
                        this._data[e] || (this._data[e] = {}), this._data[e][t] = i;
                    }
                    get(e, t) {
                        return this._data[e] ? this._data[e][t] : void 0;
                    }
                    clear() {
                        this._data = {};
                    }
                }
                t.TwoKeyMap = i, t.FourKeyMap = class {
                    constructor(){
                        this._data = new i;
                    }
                    set(e, t, s, r, n) {
                        this._data.get(e, t) || this._data.set(e, t, new i), this._data.get(e, t).set(s, r, n);
                    }
                    get(e, t, i, s) {
                        return this._data.get(e, t)?.get(i, s);
                    }
                    clear() {
                        this._data.clear();
                    }
                };
            },
            6114: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isChromeOS = t.isLinux = t.isWindows = t.isIphone = t.isIpad = t.isMac = t.getSafariVersion = t.isSafari = t.isLegacyEdge = t.isFirefox = t.isNode = void 0, t.isNode = "undefined" != typeof process && "title" in process;
                const i = t.isNode ? "node" : navigator.userAgent, s = t.isNode ? "node" : navigator.platform;
                t.isFirefox = i.includes("Firefox"), t.isLegacyEdge = i.includes("Edge"), t.isSafari = /^((?!chrome|android).)*safari/i.test(i), t.getSafariVersion = function() {
                    if (!t.isSafari) return 0;
                    const e = i.match(/Version\/(\d+)/);
                    return null === e || e.length < 2 ? 0 : parseInt(e[1]);
                }, t.isMac = [
                    "Macintosh",
                    "MacIntel",
                    "MacPPC",
                    "Mac68K"
                ].includes(s), t.isIpad = "iPad" === s, t.isIphone = "iPhone" === s, t.isWindows = [
                    "Windows",
                    "Win16",
                    "Win32",
                    "WinCE"
                ].includes(s), t.isLinux = s.indexOf("Linux") >= 0, t.isChromeOS = /\bCrOS\b/.test(i);
            },
            6106: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.SortedList = void 0;
                let i = 0;
                t.SortedList = class {
                    constructor(e){
                        this._getKey = e, this._array = [];
                    }
                    clear() {
                        this._array.length = 0;
                    }
                    insert(e) {
                        0 !== this._array.length ? (i = this._search(this._getKey(e)), this._array.splice(i, 0, e)) : this._array.push(e);
                    }
                    delete(e) {
                        if (0 === this._array.length) return !1;
                        const t = this._getKey(e);
                        if (void 0 === t) return !1;
                        if (i = this._search(t), -1 === i) return !1;
                        if (this._getKey(this._array[i]) !== t) return !1;
                        do {
                            if (this._array[i] === e) return this._array.splice(i, 1), !0;
                        }while (++i < this._array.length && this._getKey(this._array[i]) === t);
                        return !1;
                    }
                    *getKeyIterator(e) {
                        if (0 !== this._array.length && (i = this._search(e), !(i < 0 || i >= this._array.length) && this._getKey(this._array[i]) === e)) do yield this._array[i];
                        while (++i < this._array.length && this._getKey(this._array[i]) === e);
                    }
                    forEachByKey(e, t) {
                        if (0 !== this._array.length && (i = this._search(e), !(i < 0 || i >= this._array.length) && this._getKey(this._array[i]) === e)) do t(this._array[i]);
                        while (++i < this._array.length && this._getKey(this._array[i]) === e);
                    }
                    values() {
                        return [
                            ...this._array
                        ].values();
                    }
                    _search(e) {
                        let t = 0, i = this._array.length - 1;
                        for(; i >= t;){
                            let s = t + i >> 1;
                            const r = this._getKey(this._array[s]);
                            if (r > e) i = s - 1;
                            else {
                                if (!(r < e)) {
                                    for(; s > 0 && this._getKey(this._array[s - 1]) === e;)s--;
                                    return s;
                                }
                                t = s + 1;
                            }
                        }
                        return t;
                    }
                };
            },
            7226: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DebouncedIdleTask = t.IdleTaskQueue = t.PriorityTaskQueue = void 0;
                const s = i(6114);
                class r {
                    constructor(){
                        this._tasks = [], this._i = 0;
                    }
                    enqueue(e) {
                        this._tasks.push(e), this._start();
                    }
                    flush() {
                        for(; this._i < this._tasks.length;)this._tasks[this._i]() || this._i++;
                        this.clear();
                    }
                    clear() {
                        this._idleCallback && (this._cancelCallback(this._idleCallback), this._idleCallback = void 0), this._i = 0, this._tasks.length = 0;
                    }
                    _start() {
                        this._idleCallback || (this._idleCallback = this._requestCallback(this._process.bind(this)));
                    }
                    _process(e) {
                        this._idleCallback = void 0;
                        let t = 0, i = 0, s = e.timeRemaining(), r = 0;
                        for(; this._i < this._tasks.length;){
                            if (t = Date.now(), this._tasks[this._i]() || this._i++, t = Math.max(1, Date.now() - t), i = Math.max(t, i), r = e.timeRemaining(), 1.5 * i > r) return s - t < -20 && console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(s - t))}ms`), void this._start();
                            s = r;
                        }
                        this.clear();
                    }
                }
                class n extends r {
                    _requestCallback(e) {
                        return setTimeout(()=>e(this._createDeadline(16)));
                    }
                    _cancelCallback(e) {
                        clearTimeout(e);
                    }
                    _createDeadline(e) {
                        const t = Date.now() + e;
                        return {
                            timeRemaining: ()=>Math.max(0, t - Date.now())
                        };
                    }
                }
                t.PriorityTaskQueue = n, t.IdleTaskQueue = !s.isNode && "requestIdleCallback" in window ? class extends r {
                    _requestCallback(e) {
                        return requestIdleCallback(e);
                    }
                    _cancelCallback(e) {
                        cancelIdleCallback(e);
                    }
                } : n, t.DebouncedIdleTask = class {
                    constructor(){
                        this._queue = new t.IdleTaskQueue;
                    }
                    set(e) {
                        this._queue.clear(), this._queue.enqueue(e);
                    }
                    flush() {
                        this._queue.flush();
                    }
                };
            },
            9282: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.updateWindowsModeWrappedState = void 0;
                const s = i(643);
                t.updateWindowsModeWrappedState = function(e) {
                    const t = e.buffer.lines.get(e.buffer.ybase + e.buffer.y - 1), i = t?.get(e.cols - 1), r = e.buffer.lines.get(e.buffer.ybase + e.buffer.y);
                    r && i && (r.isWrapped = i[s.CHAR_DATA_CODE_INDEX] !== s.NULL_CELL_CODE && i[s.CHAR_DATA_CODE_INDEX] !== s.WHITESPACE_CELL_CODE);
                };
            },
            3734: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ExtendedAttrs = t.AttributeData = void 0;
                class i {
                    constructor(){
                        this.fg = 0, this.bg = 0, this.extended = new s;
                    }
                    static toColorRGB(e) {
                        return [
                            e >>> 16 & 255,
                            e >>> 8 & 255,
                            255 & e
                        ];
                    }
                    static fromColorRGB(e) {
                        return (255 & e[0]) << 16 | (255 & e[1]) << 8 | 255 & e[2];
                    }
                    clone() {
                        const e = new i;
                        return e.fg = this.fg, e.bg = this.bg, e.extended = this.extended.clone(), e;
                    }
                    isInverse() {
                        return 67108864 & this.fg;
                    }
                    isBold() {
                        return 134217728 & this.fg;
                    }
                    isUnderline() {
                        return this.hasExtendedAttrs() && 0 !== this.extended.underlineStyle ? 1 : 268435456 & this.fg;
                    }
                    isBlink() {
                        return 536870912 & this.fg;
                    }
                    isInvisible() {
                        return 1073741824 & this.fg;
                    }
                    isItalic() {
                        return 67108864 & this.bg;
                    }
                    isDim() {
                        return 134217728 & this.bg;
                    }
                    isStrikethrough() {
                        return 2147483648 & this.fg;
                    }
                    isProtected() {
                        return 536870912 & this.bg;
                    }
                    isOverline() {
                        return 1073741824 & this.bg;
                    }
                    getFgColorMode() {
                        return 50331648 & this.fg;
                    }
                    getBgColorMode() {
                        return 50331648 & this.bg;
                    }
                    isFgRGB() {
                        return 50331648 == (50331648 & this.fg);
                    }
                    isBgRGB() {
                        return 50331648 == (50331648 & this.bg);
                    }
                    isFgPalette() {
                        return 16777216 == (50331648 & this.fg) || 33554432 == (50331648 & this.fg);
                    }
                    isBgPalette() {
                        return 16777216 == (50331648 & this.bg) || 33554432 == (50331648 & this.bg);
                    }
                    isFgDefault() {
                        return 0 == (50331648 & this.fg);
                    }
                    isBgDefault() {
                        return 0 == (50331648 & this.bg);
                    }
                    isAttributeDefault() {
                        return 0 === this.fg && 0 === this.bg;
                    }
                    getFgColor() {
                        switch(50331648 & this.fg){
                            case 16777216:
                            case 33554432:
                                return 255 & this.fg;
                            case 50331648:
                                return 16777215 & this.fg;
                            default:
                                return -1;
                        }
                    }
                    getBgColor() {
                        switch(50331648 & this.bg){
                            case 16777216:
                            case 33554432:
                                return 255 & this.bg;
                            case 50331648:
                                return 16777215 & this.bg;
                            default:
                                return -1;
                        }
                    }
                    hasExtendedAttrs() {
                        return 268435456 & this.bg;
                    }
                    updateExtended() {
                        this.extended.isEmpty() ? this.bg &= -268435457 : this.bg |= 268435456;
                    }
                    getUnderlineColor() {
                        if (268435456 & this.bg && ~this.extended.underlineColor) switch(50331648 & this.extended.underlineColor){
                            case 16777216:
                            case 33554432:
                                return 255 & this.extended.underlineColor;
                            case 50331648:
                                return 16777215 & this.extended.underlineColor;
                            default:
                                return this.getFgColor();
                        }
                        return this.getFgColor();
                    }
                    getUnderlineColorMode() {
                        return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 & this.extended.underlineColor : this.getFgColorMode();
                    }
                    isUnderlineColorRGB() {
                        return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 == (50331648 & this.extended.underlineColor) : this.isFgRGB();
                    }
                    isUnderlineColorPalette() {
                        return 268435456 & this.bg && ~this.extended.underlineColor ? 16777216 == (50331648 & this.extended.underlineColor) || 33554432 == (50331648 & this.extended.underlineColor) : this.isFgPalette();
                    }
                    isUnderlineColorDefault() {
                        return 268435456 & this.bg && ~this.extended.underlineColor ? 0 == (50331648 & this.extended.underlineColor) : this.isFgDefault();
                    }
                    getUnderlineStyle() {
                        return 268435456 & this.fg ? 268435456 & this.bg ? this.extended.underlineStyle : 1 : 0;
                    }
                    getUnderlineVariantOffset() {
                        return this.extended.underlineVariantOffset;
                    }
                }
                t.AttributeData = i;
                class s {
                    get ext() {
                        return this._urlId ? -469762049 & this._ext | this.underlineStyle << 26 : this._ext;
                    }
                    set ext(e) {
                        this._ext = e;
                    }
                    get underlineStyle() {
                        return this._urlId ? 5 : (469762048 & this._ext) >> 26;
                    }
                    set underlineStyle(e) {
                        this._ext &= -469762049, this._ext |= e << 26 & 469762048;
                    }
                    get underlineColor() {
                        return 67108863 & this._ext;
                    }
                    set underlineColor(e) {
                        this._ext &= -67108864, this._ext |= 67108863 & e;
                    }
                    get urlId() {
                        return this._urlId;
                    }
                    set urlId(e) {
                        this._urlId = e;
                    }
                    get underlineVariantOffset() {
                        const e = (3758096384 & this._ext) >> 29;
                        return e < 0 ? 4294967288 ^ e : e;
                    }
                    set underlineVariantOffset(e) {
                        this._ext &= 536870911, this._ext |= e << 29 & 3758096384;
                    }
                    constructor(e = 0, t = 0){
                        this._ext = 0, this._urlId = 0, this._ext = e, this._urlId = t;
                    }
                    clone() {
                        return new s(this._ext, this._urlId);
                    }
                    isEmpty() {
                        return 0 === this.underlineStyle && 0 === this._urlId;
                    }
                }
                t.ExtendedAttrs = s;
            },
            9092: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Buffer = t.MAX_BUFFER_SIZE = void 0;
                const s = i(6349), r = i(7226), n = i(3734), o = i(8437), a = i(4634), h = i(511), c = i(643), l = i(4863), d = i(7116);
                t.MAX_BUFFER_SIZE = 4294967295, t.Buffer = class {
                    constructor(e, t, i){
                        this._hasScrollback = e, this._optionsService = t, this._bufferService = i, this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.tabs = {}, this.savedY = 0, this.savedX = 0, this.savedCurAttrData = o.DEFAULT_ATTR_DATA.clone(), this.savedCharset = d.DEFAULT_CHARSET, this.markers = [], this._nullCell = h.CellData.fromCharData([
                            0,
                            c.NULL_CELL_CHAR,
                            c.NULL_CELL_WIDTH,
                            c.NULL_CELL_CODE
                        ]), this._whitespaceCell = h.CellData.fromCharData([
                            0,
                            c.WHITESPACE_CELL_CHAR,
                            c.WHITESPACE_CELL_WIDTH,
                            c.WHITESPACE_CELL_CODE
                        ]), this._isClearing = !1, this._memoryCleanupQueue = new r.IdleTaskQueue, this._memoryCleanupPosition = 0, this._cols = this._bufferService.cols, this._rows = this._bufferService.rows, this.lines = new s.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
                    }
                    getNullCell(e) {
                        return e ? (this._nullCell.fg = e.fg, this._nullCell.bg = e.bg, this._nullCell.extended = e.extended) : (this._nullCell.fg = 0, this._nullCell.bg = 0, this._nullCell.extended = new n.ExtendedAttrs), this._nullCell;
                    }
                    getWhitespaceCell(e) {
                        return e ? (this._whitespaceCell.fg = e.fg, this._whitespaceCell.bg = e.bg, this._whitespaceCell.extended = e.extended) : (this._whitespaceCell.fg = 0, this._whitespaceCell.bg = 0, this._whitespaceCell.extended = new n.ExtendedAttrs), this._whitespaceCell;
                    }
                    getBlankLine(e, t) {
                        return new o.BufferLine(this._bufferService.cols, this.getNullCell(e), t);
                    }
                    get hasScrollback() {
                        return this._hasScrollback && this.lines.maxLength > this._rows;
                    }
                    get isCursorInViewport() {
                        const e = this.ybase + this.y - this.ydisp;
                        return e >= 0 && e < this._rows;
                    }
                    _getCorrectBufferLength(e) {
                        if (!this._hasScrollback) return e;
                        const i = e + this._optionsService.rawOptions.scrollback;
                        return i > t.MAX_BUFFER_SIZE ? t.MAX_BUFFER_SIZE : i;
                    }
                    fillViewportRows(e) {
                        if (0 === this.lines.length) {
                            void 0 === e && (e = o.DEFAULT_ATTR_DATA);
                            let t = this._rows;
                            for(; t--;)this.lines.push(this.getBlankLine(e));
                        }
                    }
                    clear() {
                        this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.lines = new s.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
                    }
                    resize(e, t) {
                        const i = this.getNullCell(o.DEFAULT_ATTR_DATA);
                        let s = 0;
                        const r = this._getCorrectBufferLength(t);
                        if (r > this.lines.maxLength && (this.lines.maxLength = r), this.lines.length > 0) {
                            if (this._cols < e) for(let t = 0; t < this.lines.length; t++)s += +this.lines.get(t).resize(e, i);
                            let n = 0;
                            if (this._rows < t) for(let s = this._rows; s < t; s++)this.lines.length < t + this.ybase && (this._optionsService.rawOptions.windowsMode || void 0 !== this._optionsService.rawOptions.windowsPty.backend || void 0 !== this._optionsService.rawOptions.windowsPty.buildNumber ? this.lines.push(new o.BufferLine(e, i)) : this.ybase > 0 && this.lines.length <= this.ybase + this.y + n + 1 ? (this.ybase--, n++, this.ydisp > 0 && this.ydisp--) : this.lines.push(new o.BufferLine(e, i)));
                            else for(let e = this._rows; e > t; e--)this.lines.length > t + this.ybase && (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, this.ydisp++));
                            if (r < this.lines.maxLength) {
                                const e = this.lines.length - r;
                                e > 0 && (this.lines.trimStart(e), this.ybase = Math.max(this.ybase - e, 0), this.ydisp = Math.max(this.ydisp - e, 0), this.savedY = Math.max(this.savedY - e, 0)), this.lines.maxLength = r;
                            }
                            this.x = Math.min(this.x, e - 1), this.y = Math.min(this.y, t - 1), n && (this.y += n), this.savedX = Math.min(this.savedX, e - 1), this.scrollTop = 0;
                        }
                        if (this.scrollBottom = t - 1, this._isReflowEnabled && (this._reflow(e, t), this._cols > e)) for(let t = 0; t < this.lines.length; t++)s += +this.lines.get(t).resize(e, i);
                        this._cols = e, this._rows = t, this._memoryCleanupQueue.clear(), s > .1 * this.lines.length && (this._memoryCleanupPosition = 0, this._memoryCleanupQueue.enqueue(()=>this._batchedMemoryCleanup()));
                    }
                    _batchedMemoryCleanup() {
                        let e = !0;
                        this._memoryCleanupPosition >= this.lines.length && (this._memoryCleanupPosition = 0, e = !1);
                        let t = 0;
                        for(; this._memoryCleanupPosition < this.lines.length;)if (t += this.lines.get(this._memoryCleanupPosition++).cleanupMemory(), t > 100) return !0;
                        return e;
                    }
                    get _isReflowEnabled() {
                        const e = this._optionsService.rawOptions.windowsPty;
                        return e && e.buildNumber ? this._hasScrollback && "conpty" === e.backend && e.buildNumber >= 21376 : this._hasScrollback && !this._optionsService.rawOptions.windowsMode;
                    }
                    _reflow(e, t) {
                        this._cols !== e && (e > this._cols ? this._reflowLarger(e, t) : this._reflowSmaller(e, t));
                    }
                    _reflowLarger(e, t) {
                        const i = (0, a.reflowLargerGetLinesToRemove)(this.lines, this._cols, e, this.ybase + this.y, this.getNullCell(o.DEFAULT_ATTR_DATA));
                        if (i.length > 0) {
                            const s = (0, a.reflowLargerCreateNewLayout)(this.lines, i);
                            (0, a.reflowLargerApplyNewLayout)(this.lines, s.layout), this._reflowLargerAdjustViewport(e, t, s.countRemoved);
                        }
                    }
                    _reflowLargerAdjustViewport(e, t, i) {
                        const s = this.getNullCell(o.DEFAULT_ATTR_DATA);
                        let r = i;
                        for(; r-- > 0;)0 === this.ybase ? (this.y > 0 && this.y--, this.lines.length < t && this.lines.push(new o.BufferLine(e, s))) : (this.ydisp === this.ybase && this.ydisp--, this.ybase--);
                        this.savedY = Math.max(this.savedY - i, 0);
                    }
                    _reflowSmaller(e, t) {
                        const i = this.getNullCell(o.DEFAULT_ATTR_DATA), s = [];
                        let r = 0;
                        for(let n = this.lines.length - 1; n >= 0; n--){
                            let h = this.lines.get(n);
                            if (!h || !h.isWrapped && h.getTrimmedLength() <= e) continue;
                            const c = [
                                h
                            ];
                            for(; h.isWrapped && n > 0;)h = this.lines.get(--n), c.unshift(h);
                            const l = this.ybase + this.y;
                            if (l >= n && l < n + c.length) continue;
                            const d = c[c.length - 1].getTrimmedLength(), _ = (0, a.reflowSmallerGetNewLineLengths)(c, this._cols, e), u = _.length - c.length;
                            let f;
                            f = 0 === this.ybase && this.y !== this.lines.length - 1 ? Math.max(0, this.y - this.lines.maxLength + u) : Math.max(0, this.lines.length - this.lines.maxLength + u);
                            const v = [];
                            for(let e = 0; e < u; e++){
                                const e = this.getBlankLine(o.DEFAULT_ATTR_DATA, !0);
                                v.push(e);
                            }
                            v.length > 0 && (s.push({
                                start: n + c.length + r,
                                newLines: v
                            }), r += v.length), c.push(...v);
                            let p = _.length - 1, g = _[p];
                            0 === g && (p--, g = _[p]);
                            let m = c.length - u - 1, S = d;
                            for(; m >= 0;){
                                const e = Math.min(S, g);
                                if (void 0 === c[p]) break;
                                if (c[p].copyCellsFrom(c[m], S - e, g - e, e, !0), g -= e, 0 === g && (p--, g = _[p]), S -= e, 0 === S) {
                                    m--;
                                    const e = Math.max(m, 0);
                                    S = (0, a.getWrappedLineTrimmedLength)(c, e, this._cols);
                                }
                            }
                            for(let t = 0; t < c.length; t++)_[t] < e && c[t].setCell(_[t], i);
                            let C = u - f;
                            for(; C-- > 0;)0 === this.ybase ? this.y < t - 1 ? (this.y++, this.lines.pop()) : (this.ybase++, this.ydisp++) : this.ybase < Math.min(this.lines.maxLength, this.lines.length + r) - t && (this.ybase === this.ydisp && this.ydisp++, this.ybase++);
                            this.savedY = Math.min(this.savedY + u, this.ybase + t - 1);
                        }
                        if (s.length > 0) {
                            const e = [], t = [];
                            for(let e = 0; e < this.lines.length; e++)t.push(this.lines.get(e));
                            const i = this.lines.length;
                            let n = i - 1, o = 0, a = s[o];
                            this.lines.length = Math.min(this.lines.maxLength, this.lines.length + r);
                            let h = 0;
                            for(let c = Math.min(this.lines.maxLength - 1, i + r - 1); c >= 0; c--)if (a && a.start > n + h) {
                                for(let e = a.newLines.length - 1; e >= 0; e--)this.lines.set(c--, a.newLines[e]);
                                c++, e.push({
                                    index: n + 1,
                                    amount: a.newLines.length
                                }), h += a.newLines.length, a = s[++o];
                            } else this.lines.set(c, t[n--]);
                            let c = 0;
                            for(let t = e.length - 1; t >= 0; t--)e[t].index += c, this.lines.onInsertEmitter.fire(e[t]), c += e[t].amount;
                            const l = Math.max(0, i + r - this.lines.maxLength);
                            l > 0 && this.lines.onTrimEmitter.fire(l);
                        }
                    }
                    translateBufferLineToString(e, t, i = 0, s) {
                        const r = this.lines.get(e);
                        return r ? r.translateToString(t, i, s) : "";
                    }
                    getWrappedRangeForLine(e) {
                        let t = e, i = e;
                        for(; t > 0 && this.lines.get(t).isWrapped;)t--;
                        for(; i + 1 < this.lines.length && this.lines.get(i + 1).isWrapped;)i++;
                        return {
                            first: t,
                            last: i
                        };
                    }
                    setupTabStops(e) {
                        for(null != e ? this.tabs[e] || (e = this.prevStop(e)) : (this.tabs = {}, e = 0); e < this._cols; e += this._optionsService.rawOptions.tabStopWidth)this.tabs[e] = !0;
                    }
                    prevStop(e) {
                        for(null == e && (e = this.x); !this.tabs[--e] && e > 0;);
                        return e >= this._cols ? this._cols - 1 : e < 0 ? 0 : e;
                    }
                    nextStop(e) {
                        for(null == e && (e = this.x); !this.tabs[++e] && e < this._cols;);
                        return e >= this._cols ? this._cols - 1 : e < 0 ? 0 : e;
                    }
                    clearMarkers(e) {
                        this._isClearing = !0;
                        for(let t = 0; t < this.markers.length; t++)this.markers[t].line === e && (this.markers[t].dispose(), this.markers.splice(t--, 1));
                        this._isClearing = !1;
                    }
                    clearAllMarkers() {
                        this._isClearing = !0;
                        for(let e = 0; e < this.markers.length; e++)this.markers[e].dispose(), this.markers.splice(e--, 1);
                        this._isClearing = !1;
                    }
                    addMarker(e) {
                        const t = new l.Marker(e);
                        return this.markers.push(t), t.register(this.lines.onTrim((e)=>{
                            t.line -= e, t.line < 0 && t.dispose();
                        })), t.register(this.lines.onInsert((e)=>{
                            t.line >= e.index && (t.line += e.amount);
                        })), t.register(this.lines.onDelete((e)=>{
                            t.line >= e.index && t.line < e.index + e.amount && t.dispose(), t.line > e.index && (t.line -= e.amount);
                        })), t.register(t.onDispose(()=>this._removeMarker(t))), t;
                    }
                    _removeMarker(e) {
                        this._isClearing || this.markers.splice(this.markers.indexOf(e), 1);
                    }
                };
            },
            8437: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BufferLine = t.DEFAULT_ATTR_DATA = void 0;
                const s = i(3734), r = i(511), n = i(643), o = i(482);
                t.DEFAULT_ATTR_DATA = Object.freeze(new s.AttributeData);
                let a = 0;
                class h {
                    constructor(e, t, i = !1){
                        this.isWrapped = i, this._combined = {}, this._extendedAttrs = {}, this._data = new Uint32Array(3 * e);
                        const s = t || r.CellData.fromCharData([
                            0,
                            n.NULL_CELL_CHAR,
                            n.NULL_CELL_WIDTH,
                            n.NULL_CELL_CODE
                        ]);
                        for(let t = 0; t < e; ++t)this.setCell(t, s);
                        this.length = e;
                    }
                    get(e) {
                        const t = this._data[3 * e + 0], i = 2097151 & t;
                        return [
                            this._data[3 * e + 1],
                            2097152 & t ? this._combined[e] : i ? (0, o.stringFromCodePoint)(i) : "",
                            t >> 22,
                            2097152 & t ? this._combined[e].charCodeAt(this._combined[e].length - 1) : i
                        ];
                    }
                    set(e, t) {
                        this._data[3 * e + 1] = t[n.CHAR_DATA_ATTR_INDEX], t[n.CHAR_DATA_CHAR_INDEX].length > 1 ? (this._combined[e] = t[1], this._data[3 * e + 0] = 2097152 | e | t[n.CHAR_DATA_WIDTH_INDEX] << 22) : this._data[3 * e + 0] = t[n.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | t[n.CHAR_DATA_WIDTH_INDEX] << 22;
                    }
                    getWidth(e) {
                        return this._data[3 * e + 0] >> 22;
                    }
                    hasWidth(e) {
                        return 12582912 & this._data[3 * e + 0];
                    }
                    getFg(e) {
                        return this._data[3 * e + 1];
                    }
                    getBg(e) {
                        return this._data[3 * e + 2];
                    }
                    hasContent(e) {
                        return 4194303 & this._data[3 * e + 0];
                    }
                    getCodePoint(e) {
                        const t = this._data[3 * e + 0];
                        return 2097152 & t ? this._combined[e].charCodeAt(this._combined[e].length - 1) : 2097151 & t;
                    }
                    isCombined(e) {
                        return 2097152 & this._data[3 * e + 0];
                    }
                    getString(e) {
                        const t = this._data[3 * e + 0];
                        return 2097152 & t ? this._combined[e] : 2097151 & t ? (0, o.stringFromCodePoint)(2097151 & t) : "";
                    }
                    isProtected(e) {
                        return 536870912 & this._data[3 * e + 2];
                    }
                    loadCell(e, t) {
                        return a = 3 * e, t.content = this._data[a + 0], t.fg = this._data[a + 1], t.bg = this._data[a + 2], 2097152 & t.content && (t.combinedData = this._combined[e]), 268435456 & t.bg && (t.extended = this._extendedAttrs[e]), t;
                    }
                    setCell(e, t) {
                        2097152 & t.content && (this._combined[e] = t.combinedData), 268435456 & t.bg && (this._extendedAttrs[e] = t.extended), this._data[3 * e + 0] = t.content, this._data[3 * e + 1] = t.fg, this._data[3 * e + 2] = t.bg;
                    }
                    setCellFromCodepoint(e, t, i, s) {
                        268435456 & s.bg && (this._extendedAttrs[e] = s.extended), this._data[3 * e + 0] = t | i << 22, this._data[3 * e + 1] = s.fg, this._data[3 * e + 2] = s.bg;
                    }
                    addCodepointToCell(e, t, i) {
                        let s = this._data[3 * e + 0];
                        2097152 & s ? this._combined[e] += (0, o.stringFromCodePoint)(t) : 2097151 & s ? (this._combined[e] = (0, o.stringFromCodePoint)(2097151 & s) + (0, o.stringFromCodePoint)(t), s &= -2097152, s |= 2097152) : s = t | 4194304, i && (s &= -12582913, s |= i << 22), this._data[3 * e + 0] = s;
                    }
                    insertCells(e, t, i) {
                        if ((e %= this.length) && 2 === this.getWidth(e - 1) && this.setCellFromCodepoint(e - 1, 0, 1, i), t < this.length - e) {
                            const s = new r.CellData;
                            for(let i = this.length - e - t - 1; i >= 0; --i)this.setCell(e + t + i, this.loadCell(e + i, s));
                            for(let s = 0; s < t; ++s)this.setCell(e + s, i);
                        } else for(let t = e; t < this.length; ++t)this.setCell(t, i);
                        2 === this.getWidth(this.length - 1) && this.setCellFromCodepoint(this.length - 1, 0, 1, i);
                    }
                    deleteCells(e, t, i) {
                        if (e %= this.length, t < this.length - e) {
                            const s = new r.CellData;
                            for(let i = 0; i < this.length - e - t; ++i)this.setCell(e + i, this.loadCell(e + t + i, s));
                            for(let e = this.length - t; e < this.length; ++e)this.setCell(e, i);
                        } else for(let t = e; t < this.length; ++t)this.setCell(t, i);
                        e && 2 === this.getWidth(e - 1) && this.setCellFromCodepoint(e - 1, 0, 1, i), 0 !== this.getWidth(e) || this.hasContent(e) || this.setCellFromCodepoint(e, 0, 1, i);
                    }
                    replaceCells(e, t, i, s = !1) {
                        if (s) for(e && 2 === this.getWidth(e - 1) && !this.isProtected(e - 1) && this.setCellFromCodepoint(e - 1, 0, 1, i), t < this.length && 2 === this.getWidth(t - 1) && !this.isProtected(t) && this.setCellFromCodepoint(t, 0, 1, i); e < t && e < this.length;)this.isProtected(e) || this.setCell(e, i), e++;
                        else for(e && 2 === this.getWidth(e - 1) && this.setCellFromCodepoint(e - 1, 0, 1, i), t < this.length && 2 === this.getWidth(t - 1) && this.setCellFromCodepoint(t, 0, 1, i); e < t && e < this.length;)this.setCell(e++, i);
                    }
                    resize(e, t) {
                        if (e === this.length) return 4 * this._data.length * 2 < this._data.buffer.byteLength;
                        const i = 3 * e;
                        if (e > this.length) {
                            if (this._data.buffer.byteLength >= 4 * i) this._data = new Uint32Array(this._data.buffer, 0, i);
                            else {
                                const e = new Uint32Array(i);
                                e.set(this._data), this._data = e;
                            }
                            for(let i = this.length; i < e; ++i)this.setCell(i, t);
                        } else {
                            this._data = this._data.subarray(0, i);
                            const t = Object.keys(this._combined);
                            for(let i = 0; i < t.length; i++){
                                const s = parseInt(t[i], 10);
                                s >= e && delete this._combined[s];
                            }
                            const s = Object.keys(this._extendedAttrs);
                            for(let t = 0; t < s.length; t++){
                                const i = parseInt(s[t], 10);
                                i >= e && delete this._extendedAttrs[i];
                            }
                        }
                        return this.length = e, 4 * i * 2 < this._data.buffer.byteLength;
                    }
                    cleanupMemory() {
                        if (4 * this._data.length * 2 < this._data.buffer.byteLength) {
                            const e = new Uint32Array(this._data.length);
                            return e.set(this._data), this._data = e, 1;
                        }
                        return 0;
                    }
                    fill(e, t = !1) {
                        if (t) for(let t = 0; t < this.length; ++t)this.isProtected(t) || this.setCell(t, e);
                        else {
                            this._combined = {}, this._extendedAttrs = {};
                            for(let t = 0; t < this.length; ++t)this.setCell(t, e);
                        }
                    }
                    copyFrom(e) {
                        this.length !== e.length ? this._data = new Uint32Array(e._data) : this._data.set(e._data), this.length = e.length, this._combined = {};
                        for(const t in e._combined)this._combined[t] = e._combined[t];
                        this._extendedAttrs = {};
                        for(const t in e._extendedAttrs)this._extendedAttrs[t] = e._extendedAttrs[t];
                        this.isWrapped = e.isWrapped;
                    }
                    clone() {
                        const e = new h(0);
                        e._data = new Uint32Array(this._data), e.length = this.length;
                        for(const t in this._combined)e._combined[t] = this._combined[t];
                        for(const t in this._extendedAttrs)e._extendedAttrs[t] = this._extendedAttrs[t];
                        return e.isWrapped = this.isWrapped, e;
                    }
                    getTrimmedLength() {
                        for(let e = this.length - 1; e >= 0; --e)if (4194303 & this._data[3 * e + 0]) return e + (this._data[3 * e + 0] >> 22);
                        return 0;
                    }
                    getNoBgTrimmedLength() {
                        for(let e = this.length - 1; e >= 0; --e)if (4194303 & this._data[3 * e + 0] || 50331648 & this._data[3 * e + 2]) return e + (this._data[3 * e + 0] >> 22);
                        return 0;
                    }
                    copyCellsFrom(e, t, i, s, r) {
                        const n = e._data;
                        if (r) for(let r = s - 1; r >= 0; r--){
                            for(let e = 0; e < 3; e++)this._data[3 * (i + r) + e] = n[3 * (t + r) + e];
                            268435456 & n[3 * (t + r) + 2] && (this._extendedAttrs[i + r] = e._extendedAttrs[t + r]);
                        }
                        else for(let r = 0; r < s; r++){
                            for(let e = 0; e < 3; e++)this._data[3 * (i + r) + e] = n[3 * (t + r) + e];
                            268435456 & n[3 * (t + r) + 2] && (this._extendedAttrs[i + r] = e._extendedAttrs[t + r]);
                        }
                        const o = Object.keys(e._combined);
                        for(let s = 0; s < o.length; s++){
                            const r = parseInt(o[s], 10);
                            r >= t && (this._combined[r - t + i] = e._combined[r]);
                        }
                    }
                    translateToString(e, t, i, s) {
                        t = t ?? 0, i = i ?? this.length, e && (i = Math.min(i, this.getTrimmedLength())), s && (s.length = 0);
                        let r = "";
                        for(; t < i;){
                            const e = this._data[3 * t + 0], i = 2097151 & e, a = 2097152 & e ? this._combined[t] : i ? (0, o.stringFromCodePoint)(i) : n.WHITESPACE_CELL_CHAR;
                            if (r += a, s) for(let e = 0; e < a.length; ++e)s.push(t);
                            t += e >> 22 || 1;
                        }
                        return s && s.push(t), r;
                    }
                }
                t.BufferLine = h;
            },
            4841: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getRangeLength = void 0, t.getRangeLength = function(e, t) {
                    if (e.start.y > e.end.y) throw new Error(`Buffer range end (${e.end.x}, ${e.end.y}) cannot be before start (${e.start.x}, ${e.start.y})`);
                    return t * (e.end.y - e.start.y) + (e.end.x - e.start.x + 1);
                };
            },
            4634: (e, t)=>{
                function i(e, t, i) {
                    if (t === e.length - 1) return e[t].getTrimmedLength();
                    const s = !e[t].hasContent(i - 1) && 1 === e[t].getWidth(i - 1), r = 2 === e[t + 1].getWidth(0);
                    return s && r ? i - 1 : i;
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getWrappedLineTrimmedLength = t.reflowSmallerGetNewLineLengths = t.reflowLargerApplyNewLayout = t.reflowLargerCreateNewLayout = t.reflowLargerGetLinesToRemove = void 0, t.reflowLargerGetLinesToRemove = function(e, t, s, r, n) {
                    const o = [];
                    for(let a = 0; a < e.length - 1; a++){
                        let h = a, c = e.get(++h);
                        if (!c.isWrapped) continue;
                        const l = [
                            e.get(a)
                        ];
                        for(; h < e.length && c.isWrapped;)l.push(c), c = e.get(++h);
                        if (r >= a && r < h) {
                            a += l.length - 1;
                            continue;
                        }
                        let d = 0, _ = i(l, d, t), u = 1, f = 0;
                        for(; u < l.length;){
                            const e = i(l, u, t), r = e - f, o = s - _, a = Math.min(r, o);
                            l[d].copyCellsFrom(l[u], f, _, a, !1), _ += a, _ === s && (d++, _ = 0), f += a, f === e && (u++, f = 0), 0 === _ && 0 !== d && 2 === l[d - 1].getWidth(s - 1) && (l[d].copyCellsFrom(l[d - 1], s - 1, _++, 1, !1), l[d - 1].setCell(s - 1, n));
                        }
                        l[d].replaceCells(_, s, n);
                        let v = 0;
                        for(let e = l.length - 1; e > 0 && (e > d || 0 === l[e].getTrimmedLength()); e--)v++;
                        v > 0 && (o.push(a + l.length - v), o.push(v)), a += l.length - 1;
                    }
                    return o;
                }, t.reflowLargerCreateNewLayout = function(e, t) {
                    const i = [];
                    let s = 0, r = t[s], n = 0;
                    for(let o = 0; o < e.length; o++)if (r === o) {
                        const i = t[++s];
                        e.onDeleteEmitter.fire({
                            index: o - n,
                            amount: i
                        }), o += i - 1, n += i, r = t[++s];
                    } else i.push(o);
                    return {
                        layout: i,
                        countRemoved: n
                    };
                }, t.reflowLargerApplyNewLayout = function(e, t) {
                    const i = [];
                    for(let s = 0; s < t.length; s++)i.push(e.get(t[s]));
                    for(let t = 0; t < i.length; t++)e.set(t, i[t]);
                    e.length = t.length;
                }, t.reflowSmallerGetNewLineLengths = function(e, t, s) {
                    const r = [], n = e.map((s, r)=>i(e, r, t)).reduce((e, t)=>e + t);
                    let o = 0, a = 0, h = 0;
                    for(; h < n;){
                        if (n - h < s) {
                            r.push(n - h);
                            break;
                        }
                        o += s;
                        const c = i(e, a, t);
                        o > c && (o -= c, a++);
                        const l = 2 === e[a].getWidth(o - 1);
                        l && o--;
                        const d = l ? s - 1 : s;
                        r.push(d), h += d;
                    }
                    return r;
                }, t.getWrappedLineTrimmedLength = i;
            },
            5295: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BufferSet = void 0;
                const s = i(8460), r = i(844), n = i(9092);
                class o extends r.Disposable {
                    constructor(e, t){
                        super(), this._optionsService = e, this._bufferService = t, this._onBufferActivate = this.register(new s.EventEmitter), this.onBufferActivate = this._onBufferActivate.event, this.reset(), this.register(this._optionsService.onSpecificOptionChange("scrollback", ()=>this.resize(this._bufferService.cols, this._bufferService.rows))), this.register(this._optionsService.onSpecificOptionChange("tabStopWidth", ()=>this.setupTabStops()));
                    }
                    reset() {
                        this._normal = new n.Buffer(!0, this._optionsService, this._bufferService), this._normal.fillViewportRows(), this._alt = new n.Buffer(!1, this._optionsService, this._bufferService), this._activeBuffer = this._normal, this._onBufferActivate.fire({
                            activeBuffer: this._normal,
                            inactiveBuffer: this._alt
                        }), this.setupTabStops();
                    }
                    get alt() {
                        return this._alt;
                    }
                    get active() {
                        return this._activeBuffer;
                    }
                    get normal() {
                        return this._normal;
                    }
                    activateNormalBuffer() {
                        this._activeBuffer !== this._normal && (this._normal.x = this._alt.x, this._normal.y = this._alt.y, this._alt.clearAllMarkers(), this._alt.clear(), this._activeBuffer = this._normal, this._onBufferActivate.fire({
                            activeBuffer: this._normal,
                            inactiveBuffer: this._alt
                        }));
                    }
                    activateAltBuffer(e) {
                        this._activeBuffer !== this._alt && (this._alt.fillViewportRows(e), this._alt.x = this._normal.x, this._alt.y = this._normal.y, this._activeBuffer = this._alt, this._onBufferActivate.fire({
                            activeBuffer: this._alt,
                            inactiveBuffer: this._normal
                        }));
                    }
                    resize(e, t) {
                        this._normal.resize(e, t), this._alt.resize(e, t), this.setupTabStops(e);
                    }
                    setupTabStops(e) {
                        this._normal.setupTabStops(e), this._alt.setupTabStops(e);
                    }
                }
                t.BufferSet = o;
            },
            511: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.CellData = void 0;
                const s = i(482), r = i(643), n = i(3734);
                class o extends n.AttributeData {
                    constructor(){
                        super(...arguments), this.content = 0, this.fg = 0, this.bg = 0, this.extended = new n.ExtendedAttrs, this.combinedData = "";
                    }
                    static fromCharData(e) {
                        const t = new o;
                        return t.setFromCharData(e), t;
                    }
                    isCombined() {
                        return 2097152 & this.content;
                    }
                    getWidth() {
                        return this.content >> 22;
                    }
                    getChars() {
                        return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? (0, s.stringFromCodePoint)(2097151 & this.content) : "";
                    }
                    getCode() {
                        return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content;
                    }
                    setFromCharData(e) {
                        this.fg = e[r.CHAR_DATA_ATTR_INDEX], this.bg = 0;
                        let t = !1;
                        if (e[r.CHAR_DATA_CHAR_INDEX].length > 2) t = !0;
                        else if (2 === e[r.CHAR_DATA_CHAR_INDEX].length) {
                            const i = e[r.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
                            if (55296 <= i && i <= 56319) {
                                const s = e[r.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                                56320 <= s && s <= 57343 ? this.content = 1024 * (i - 55296) + s - 56320 + 65536 | e[r.CHAR_DATA_WIDTH_INDEX] << 22 : t = !0;
                            } else t = !0;
                        } else this.content = e[r.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | e[r.CHAR_DATA_WIDTH_INDEX] << 22;
                        t && (this.combinedData = e[r.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | e[r.CHAR_DATA_WIDTH_INDEX] << 22);
                    }
                    getAsCharData() {
                        return [
                            this.fg,
                            this.getChars(),
                            this.getWidth(),
                            this.getCode()
                        ];
                    }
                }
                t.CellData = o;
            },
            643: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.WHITESPACE_CELL_CODE = t.WHITESPACE_CELL_WIDTH = t.WHITESPACE_CELL_CHAR = t.NULL_CELL_CODE = t.NULL_CELL_WIDTH = t.NULL_CELL_CHAR = t.CHAR_DATA_CODE_INDEX = t.CHAR_DATA_WIDTH_INDEX = t.CHAR_DATA_CHAR_INDEX = t.CHAR_DATA_ATTR_INDEX = t.DEFAULT_EXT = t.DEFAULT_ATTR = t.DEFAULT_COLOR = void 0, t.DEFAULT_COLOR = 0, t.DEFAULT_ATTR = 256 | t.DEFAULT_COLOR << 9, t.DEFAULT_EXT = 0, t.CHAR_DATA_ATTR_INDEX = 0, t.CHAR_DATA_CHAR_INDEX = 1, t.CHAR_DATA_WIDTH_INDEX = 2, t.CHAR_DATA_CODE_INDEX = 3, t.NULL_CELL_CHAR = "", t.NULL_CELL_WIDTH = 1, t.NULL_CELL_CODE = 0, t.WHITESPACE_CELL_CHAR = " ", t.WHITESPACE_CELL_WIDTH = 1, t.WHITESPACE_CELL_CODE = 32;
            },
            4863: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Marker = void 0;
                const s = i(8460), r = i(844);
                class n {
                    get id() {
                        return this._id;
                    }
                    constructor(e){
                        this.line = e, this.isDisposed = !1, this._disposables = [], this._id = n._nextId++, this._onDispose = this.register(new s.EventEmitter), this.onDispose = this._onDispose.event;
                    }
                    dispose() {
                        this.isDisposed || (this.isDisposed = !0, this.line = -1, this._onDispose.fire(), (0, r.disposeArray)(this._disposables), this._disposables.length = 0);
                    }
                    register(e) {
                        return this._disposables.push(e), e;
                    }
                }
                t.Marker = n, n._nextId = 1;
            },
            7116: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DEFAULT_CHARSET = t.CHARSETS = void 0, t.CHARSETS = {}, t.DEFAULT_CHARSET = t.CHARSETS.B, t.CHARSETS[0] = {
                    "`": "\u25C6",
                    a: "\u2592",
                    b: "\u2409",
                    c: "\u240C",
                    d: "\u240D",
                    e: "\u240A",
                    f: "\xb0",
                    g: "\xb1",
                    h: "\u2424",
                    i: "\u240B",
                    j: "\u2518",
                    k: "\u2510",
                    l: "\u250C",
                    m: "\u2514",
                    n: "\u253C",
                    o: "\u23BA",
                    p: "\u23BB",
                    q: "\u2500",
                    r: "\u23BC",
                    s: "\u23BD",
                    t: "\u251C",
                    u: "\u2524",
                    v: "\u2534",
                    w: "\u252C",
                    x: "\u2502",
                    y: "\u2264",
                    z: "\u2265",
                    "{": "\u03C0",
                    "|": "\u2260",
                    "}": "\xa3",
                    "~": "\xb7"
                }, t.CHARSETS.A = {
                    "#": "\xa3"
                }, t.CHARSETS.B = void 0, t.CHARSETS[4] = {
                    "#": "\xa3",
                    "@": "\xbe",
                    "[": "ij",
                    "\\": "\xbd",
                    "]": "|",
                    "{": "\xa8",
                    "|": "f",
                    "}": "\xbc",
                    "~": "\xb4"
                }, t.CHARSETS.C = t.CHARSETS[5] = {
                    "[": "\xc4",
                    "\\": "\xd6",
                    "]": "\xc5",
                    "^": "\xdc",
                    "`": "\xe9",
                    "{": "\xe4",
                    "|": "\xf6",
                    "}": "\xe5",
                    "~": "\xfc"
                }, t.CHARSETS.R = {
                    "#": "\xa3",
                    "@": "\xe0",
                    "[": "\xb0",
                    "\\": "\xe7",
                    "]": "\xa7",
                    "{": "\xe9",
                    "|": "\xf9",
                    "}": "\xe8",
                    "~": "\xa8"
                }, t.CHARSETS.Q = {
                    "@": "\xe0",
                    "[": "\xe2",
                    "\\": "\xe7",
                    "]": "\xea",
                    "^": "\xee",
                    "`": "\xf4",
                    "{": "\xe9",
                    "|": "\xf9",
                    "}": "\xe8",
                    "~": "\xfb"
                }, t.CHARSETS.K = {
                    "@": "\xa7",
                    "[": "\xc4",
                    "\\": "\xd6",
                    "]": "\xdc",
                    "{": "\xe4",
                    "|": "\xf6",
                    "}": "\xfc",
                    "~": "\xdf"
                }, t.CHARSETS.Y = {
                    "#": "\xa3",
                    "@": "\xa7",
                    "[": "\xb0",
                    "\\": "\xe7",
                    "]": "\xe9",
                    "`": "\xf9",
                    "{": "\xe0",
                    "|": "\xf2",
                    "}": "\xe8",
                    "~": "\xec"
                }, t.CHARSETS.E = t.CHARSETS[6] = {
                    "@": "\xc4",
                    "[": "\xc6",
                    "\\": "\xd8",
                    "]": "\xc5",
                    "^": "\xdc",
                    "`": "\xe4",
                    "{": "\xe6",
                    "|": "\xf8",
                    "}": "\xe5",
                    "~": "\xfc"
                }, t.CHARSETS.Z = {
                    "#": "\xa3",
                    "@": "\xa7",
                    "[": "\xa1",
                    "\\": "\xd1",
                    "]": "\xbf",
                    "{": "\xb0",
                    "|": "\xf1",
                    "}": "\xe7"
                }, t.CHARSETS.H = t.CHARSETS[7] = {
                    "@": "\xc9",
                    "[": "\xc4",
                    "\\": "\xd6",
                    "]": "\xc5",
                    "^": "\xdc",
                    "`": "\xe9",
                    "{": "\xe4",
                    "|": "\xf6",
                    "}": "\xe5",
                    "~": "\xfc"
                }, t.CHARSETS["="] = {
                    "#": "\xf9",
                    "@": "\xe0",
                    "[": "\xe9",
                    "\\": "\xe7",
                    "]": "\xea",
                    "^": "\xee",
                    _: "\xe8",
                    "`": "\xf4",
                    "{": "\xe4",
                    "|": "\xf6",
                    "}": "\xfc",
                    "~": "\xfb"
                };
            },
            2584: (e, t)=>{
                var i, s, r;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.C1_ESCAPED = t.C1 = t.C0 = void 0, function(e) {
                    e.NUL = "\0", e.SOH = "\x01", e.STX = "\x02", e.ETX = "\x03", e.EOT = "\x04", e.ENQ = "\x05", e.ACK = "\x06", e.BEL = "\x07", e.BS = "\b", e.HT = "	", e.LF = "\n", e.VT = "\v", e.FF = "\f", e.CR = "\r", e.SO = "\x0e", e.SI = "\x0f", e.DLE = "\x10", e.DC1 = "\x11", e.DC2 = "\x12", e.DC3 = "\x13", e.DC4 = "\x14", e.NAK = "\x15", e.SYN = "\x16", e.ETB = "\x17", e.CAN = "\x18", e.EM = "\x19", e.SUB = "\x1a", e.ESC = "\x1b", e.FS = "\x1c", e.GS = "\x1d", e.RS = "\x1e", e.US = "\x1f", e.SP = " ", e.DEL = "\x7f";
                }(i || (t.C0 = i = {})), function(e) {
                    e.PAD = "\x80", e.HOP = "\x81", e.BPH = "\x82", e.NBH = "\x83", e.IND = "\x84", e.NEL = "\x85", e.SSA = "\x86", e.ESA = "\x87", e.HTS = "\x88", e.HTJ = "\x89", e.VTS = "\x8a", e.PLD = "\x8b", e.PLU = "\x8c", e.RI = "\x8d", e.SS2 = "\x8e", e.SS3 = "\x8f", e.DCS = "\x90", e.PU1 = "\x91", e.PU2 = "\x92", e.STS = "\x93", e.CCH = "\x94", e.MW = "\x95", e.SPA = "\x96", e.EPA = "\x97", e.SOS = "\x98", e.SGCI = "\x99", e.SCI = "\x9a", e.CSI = "\x9b", e.ST = "\x9c", e.OSC = "\x9d", e.PM = "\x9e", e.APC = "\x9f";
                }(s || (t.C1 = s = {})), function(e) {
                    e.ST = `${i.ESC}\\`;
                }(r || (t.C1_ESCAPED = r = {}));
            },
            7399: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.evaluateKeyboardEvent = void 0;
                const s = i(2584), r = {
                    48: [
                        "0",
                        ")"
                    ],
                    49: [
                        "1",
                        "!"
                    ],
                    50: [
                        "2",
                        "@"
                    ],
                    51: [
                        "3",
                        "#"
                    ],
                    52: [
                        "4",
                        "$"
                    ],
                    53: [
                        "5",
                        "%"
                    ],
                    54: [
                        "6",
                        "^"
                    ],
                    55: [
                        "7",
                        "&"
                    ],
                    56: [
                        "8",
                        "*"
                    ],
                    57: [
                        "9",
                        "("
                    ],
                    186: [
                        ";",
                        ":"
                    ],
                    187: [
                        "=",
                        "+"
                    ],
                    188: [
                        ",",
                        "<"
                    ],
                    189: [
                        "-",
                        "_"
                    ],
                    190: [
                        ".",
                        ">"
                    ],
                    191: [
                        "/",
                        "?"
                    ],
                    192: [
                        "`",
                        "~"
                    ],
                    219: [
                        "[",
                        "{"
                    ],
                    220: [
                        "\\",
                        "|"
                    ],
                    221: [
                        "]",
                        "}"
                    ],
                    222: [
                        "'",
                        '"'
                    ]
                };
                t.evaluateKeyboardEvent = function(e, t, i, n) {
                    const o = {
                        type: 0,
                        cancel: !1,
                        key: void 0
                    }, a = (e.shiftKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.ctrlKey ? 4 : 0) | (e.metaKey ? 8 : 0);
                    switch(e.keyCode){
                        case 0:
                            "UIKeyInputUpArrow" === e.key ? o.key = t ? s.C0.ESC + "OA" : s.C0.ESC + "[A" : "UIKeyInputLeftArrow" === e.key ? o.key = t ? s.C0.ESC + "OD" : s.C0.ESC + "[D" : "UIKeyInputRightArrow" === e.key ? o.key = t ? s.C0.ESC + "OC" : s.C0.ESC + "[C" : "UIKeyInputDownArrow" === e.key && (o.key = t ? s.C0.ESC + "OB" : s.C0.ESC + "[B");
                            break;
                        case 8:
                            o.key = e.ctrlKey ? "\b" : s.C0.DEL, e.altKey && (o.key = s.C0.ESC + o.key);
                            break;
                        case 9:
                            if (e.shiftKey) {
                                o.key = s.C0.ESC + "[Z";
                                break;
                            }
                            o.key = s.C0.HT, o.cancel = !0;
                            break;
                        case 13:
                            o.key = e.altKey ? s.C0.ESC + s.C0.CR : s.C0.CR, o.cancel = !0;
                            break;
                        case 27:
                            o.key = s.C0.ESC, e.altKey && (o.key = s.C0.ESC + s.C0.ESC), o.cancel = !0;
                            break;
                        case 37:
                            if (e.metaKey) break;
                            a ? (o.key = s.C0.ESC + "[1;" + (a + 1) + "D", o.key === s.C0.ESC + "[1;3D" && (o.key = s.C0.ESC + (i ? "b" : "[1;5D"))) : o.key = t ? s.C0.ESC + "OD" : s.C0.ESC + "[D";
                            break;
                        case 39:
                            if (e.metaKey) break;
                            a ? (o.key = s.C0.ESC + "[1;" + (a + 1) + "C", o.key === s.C0.ESC + "[1;3C" && (o.key = s.C0.ESC + (i ? "f" : "[1;5C"))) : o.key = t ? s.C0.ESC + "OC" : s.C0.ESC + "[C";
                            break;
                        case 38:
                            if (e.metaKey) break;
                            a ? (o.key = s.C0.ESC + "[1;" + (a + 1) + "A", i || o.key !== s.C0.ESC + "[1;3A" || (o.key = s.C0.ESC + "[1;5A")) : o.key = t ? s.C0.ESC + "OA" : s.C0.ESC + "[A";
                            break;
                        case 40:
                            if (e.metaKey) break;
                            a ? (o.key = s.C0.ESC + "[1;" + (a + 1) + "B", i || o.key !== s.C0.ESC + "[1;3B" || (o.key = s.C0.ESC + "[1;5B")) : o.key = t ? s.C0.ESC + "OB" : s.C0.ESC + "[B";
                            break;
                        case 45:
                            e.shiftKey || e.ctrlKey || (o.key = s.C0.ESC + "[2~");
                            break;
                        case 46:
                            o.key = a ? s.C0.ESC + "[3;" + (a + 1) + "~" : s.C0.ESC + "[3~";
                            break;
                        case 36:
                            o.key = a ? s.C0.ESC + "[1;" + (a + 1) + "H" : t ? s.C0.ESC + "OH" : s.C0.ESC + "[H";
                            break;
                        case 35:
                            o.key = a ? s.C0.ESC + "[1;" + (a + 1) + "F" : t ? s.C0.ESC + "OF" : s.C0.ESC + "[F";
                            break;
                        case 33:
                            e.shiftKey ? o.type = 2 : e.ctrlKey ? o.key = s.C0.ESC + "[5;" + (a + 1) + "~" : o.key = s.C0.ESC + "[5~";
                            break;
                        case 34:
                            e.shiftKey ? o.type = 3 : e.ctrlKey ? o.key = s.C0.ESC + "[6;" + (a + 1) + "~" : o.key = s.C0.ESC + "[6~";
                            break;
                        case 112:
                            o.key = a ? s.C0.ESC + "[1;" + (a + 1) + "P" : s.C0.ESC + "OP";
                            break;
                        case 113:
                            o.key = a ? s.C0.ESC + "[1;" + (a + 1) + "Q" : s.C0.ESC + "OQ";
                            break;
                        case 114:
                            o.key = a ? s.C0.ESC + "[1;" + (a + 1) + "R" : s.C0.ESC + "OR";
                            break;
                        case 115:
                            o.key = a ? s.C0.ESC + "[1;" + (a + 1) + "S" : s.C0.ESC + "OS";
                            break;
                        case 116:
                            o.key = a ? s.C0.ESC + "[15;" + (a + 1) + "~" : s.C0.ESC + "[15~";
                            break;
                        case 117:
                            o.key = a ? s.C0.ESC + "[17;" + (a + 1) + "~" : s.C0.ESC + "[17~";
                            break;
                        case 118:
                            o.key = a ? s.C0.ESC + "[18;" + (a + 1) + "~" : s.C0.ESC + "[18~";
                            break;
                        case 119:
                            o.key = a ? s.C0.ESC + "[19;" + (a + 1) + "~" : s.C0.ESC + "[19~";
                            break;
                        case 120:
                            o.key = a ? s.C0.ESC + "[20;" + (a + 1) + "~" : s.C0.ESC + "[20~";
                            break;
                        case 121:
                            o.key = a ? s.C0.ESC + "[21;" + (a + 1) + "~" : s.C0.ESC + "[21~";
                            break;
                        case 122:
                            o.key = a ? s.C0.ESC + "[23;" + (a + 1) + "~" : s.C0.ESC + "[23~";
                            break;
                        case 123:
                            o.key = a ? s.C0.ESC + "[24;" + (a + 1) + "~" : s.C0.ESC + "[24~";
                            break;
                        default:
                            if (!e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
                                if (i && !n || !e.altKey || e.metaKey) !i || e.altKey || e.ctrlKey || e.shiftKey || !e.metaKey ? e.key && !e.ctrlKey && !e.altKey && !e.metaKey && e.keyCode >= 48 && 1 === e.key.length ? o.key = e.key : e.key && e.ctrlKey && ("_" === e.key && (o.key = s.C0.US), "@" === e.key && (o.key = s.C0.NUL)) : 65 === e.keyCode && (o.type = 1);
                                else {
                                    const t = r[e.keyCode], i = t?.[e.shiftKey ? 1 : 0];
                                    if (i) o.key = s.C0.ESC + i;
                                    else if (e.keyCode >= 65 && e.keyCode <= 90) {
                                        const t = e.ctrlKey ? e.keyCode - 64 : e.keyCode + 32;
                                        let i = String.fromCharCode(t);
                                        e.shiftKey && (i = i.toUpperCase()), o.key = s.C0.ESC + i;
                                    } else if (32 === e.keyCode) o.key = s.C0.ESC + (e.ctrlKey ? s.C0.NUL : " ");
                                    else if ("Dead" === e.key && e.code.startsWith("Key")) {
                                        let t = e.code.slice(3, 4);
                                        e.shiftKey || (t = t.toLowerCase()), o.key = s.C0.ESC + t, o.cancel = !0;
                                    }
                                }
                            } else e.keyCode >= 65 && e.keyCode <= 90 ? o.key = String.fromCharCode(e.keyCode - 64) : 32 === e.keyCode ? o.key = s.C0.NUL : e.keyCode >= 51 && e.keyCode <= 55 ? o.key = String.fromCharCode(e.keyCode - 51 + 27) : 56 === e.keyCode ? o.key = s.C0.DEL : 219 === e.keyCode ? o.key = s.C0.ESC : 220 === e.keyCode ? o.key = s.C0.FS : 221 === e.keyCode && (o.key = s.C0.GS);
                    }
                    return o;
                };
            },
            482: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Utf8ToUtf32 = t.StringToUtf32 = t.utf32ToString = t.stringFromCodePoint = void 0, t.stringFromCodePoint = function(e) {
                    return e > 65535 ? (e -= 65536, String.fromCharCode(55296 + (e >> 10)) + String.fromCharCode(e % 1024 + 56320)) : String.fromCharCode(e);
                }, t.utf32ToString = function(e, t = 0, i = e.length) {
                    let s = "";
                    for(let r = t; r < i; ++r){
                        let t = e[r];
                        t > 65535 ? (t -= 65536, s += String.fromCharCode(55296 + (t >> 10)) + String.fromCharCode(t % 1024 + 56320)) : s += String.fromCharCode(t);
                    }
                    return s;
                }, t.StringToUtf32 = class {
                    constructor(){
                        this._interim = 0;
                    }
                    clear() {
                        this._interim = 0;
                    }
                    decode(e, t) {
                        const i = e.length;
                        if (!i) return 0;
                        let s = 0, r = 0;
                        if (this._interim) {
                            const i = e.charCodeAt(r++);
                            56320 <= i && i <= 57343 ? t[s++] = 1024 * (this._interim - 55296) + i - 56320 + 65536 : (t[s++] = this._interim, t[s++] = i), this._interim = 0;
                        }
                        for(let n = r; n < i; ++n){
                            const r = e.charCodeAt(n);
                            if (55296 <= r && r <= 56319) {
                                if (++n >= i) return this._interim = r, s;
                                const o = e.charCodeAt(n);
                                56320 <= o && o <= 57343 ? t[s++] = 1024 * (r - 55296) + o - 56320 + 65536 : (t[s++] = r, t[s++] = o);
                            } else 65279 !== r && (t[s++] = r);
                        }
                        return s;
                    }
                }, t.Utf8ToUtf32 = class {
                    constructor(){
                        this.interim = new Uint8Array(3);
                    }
                    clear() {
                        this.interim.fill(0);
                    }
                    decode(e, t) {
                        const i = e.length;
                        if (!i) return 0;
                        let s, r, n, o, a = 0, h = 0, c = 0;
                        if (this.interim[0]) {
                            let s = !1, r = this.interim[0];
                            r &= 192 == (224 & r) ? 31 : 224 == (240 & r) ? 15 : 7;
                            let n, o = 0;
                            for(; (n = 63 & this.interim[++o]) && o < 4;)r <<= 6, r |= n;
                            const h = 192 == (224 & this.interim[0]) ? 2 : 224 == (240 & this.interim[0]) ? 3 : 4, l = h - o;
                            for(; c < l;){
                                if (c >= i) return 0;
                                if (n = e[c++], 128 != (192 & n)) {
                                    c--, s = !0;
                                    break;
                                }
                                this.interim[o++] = n, r <<= 6, r |= 63 & n;
                            }
                            s || (2 === h ? r < 128 ? c-- : t[a++] = r : 3 === h ? r < 2048 || r >= 55296 && r <= 57343 || 65279 === r || (t[a++] = r) : r < 65536 || r > 1114111 || (t[a++] = r)), this.interim.fill(0);
                        }
                        const l = i - 4;
                        let d = c;
                        for(; d < i;){
                            for(; !(!(d < l) || 128 & (s = e[d]) || 128 & (r = e[d + 1]) || 128 & (n = e[d + 2]) || 128 & (o = e[d + 3]));)t[a++] = s, t[a++] = r, t[a++] = n, t[a++] = o, d += 4;
                            if (s = e[d++], s < 128) t[a++] = s;
                            else if (192 == (224 & s)) {
                                if (d >= i) return this.interim[0] = s, a;
                                if (r = e[d++], 128 != (192 & r)) {
                                    d--;
                                    continue;
                                }
                                if (h = (31 & s) << 6 | 63 & r, h < 128) {
                                    d--;
                                    continue;
                                }
                                t[a++] = h;
                            } else if (224 == (240 & s)) {
                                if (d >= i) return this.interim[0] = s, a;
                                if (r = e[d++], 128 != (192 & r)) {
                                    d--;
                                    continue;
                                }
                                if (d >= i) return this.interim[0] = s, this.interim[1] = r, a;
                                if (n = e[d++], 128 != (192 & n)) {
                                    d--;
                                    continue;
                                }
                                if (h = (15 & s) << 12 | (63 & r) << 6 | 63 & n, h < 2048 || h >= 55296 && h <= 57343 || 65279 === h) continue;
                                t[a++] = h;
                            } else if (240 == (248 & s)) {
                                if (d >= i) return this.interim[0] = s, a;
                                if (r = e[d++], 128 != (192 & r)) {
                                    d--;
                                    continue;
                                }
                                if (d >= i) return this.interim[0] = s, this.interim[1] = r, a;
                                if (n = e[d++], 128 != (192 & n)) {
                                    d--;
                                    continue;
                                }
                                if (d >= i) return this.interim[0] = s, this.interim[1] = r, this.interim[2] = n, a;
                                if (o = e[d++], 128 != (192 & o)) {
                                    d--;
                                    continue;
                                }
                                if (h = (7 & s) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & o, h < 65536 || h > 1114111) continue;
                                t[a++] = h;
                            }
                        }
                        return a;
                    }
                };
            },
            225: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.UnicodeV6 = void 0;
                const s = i(1480), r = [
                    [
                        768,
                        879
                    ],
                    [
                        1155,
                        1158
                    ],
                    [
                        1160,
                        1161
                    ],
                    [
                        1425,
                        1469
                    ],
                    [
                        1471,
                        1471
                    ],
                    [
                        1473,
                        1474
                    ],
                    [
                        1476,
                        1477
                    ],
                    [
                        1479,
                        1479
                    ],
                    [
                        1536,
                        1539
                    ],
                    [
                        1552,
                        1557
                    ],
                    [
                        1611,
                        1630
                    ],
                    [
                        1648,
                        1648
                    ],
                    [
                        1750,
                        1764
                    ],
                    [
                        1767,
                        1768
                    ],
                    [
                        1770,
                        1773
                    ],
                    [
                        1807,
                        1807
                    ],
                    [
                        1809,
                        1809
                    ],
                    [
                        1840,
                        1866
                    ],
                    [
                        1958,
                        1968
                    ],
                    [
                        2027,
                        2035
                    ],
                    [
                        2305,
                        2306
                    ],
                    [
                        2364,
                        2364
                    ],
                    [
                        2369,
                        2376
                    ],
                    [
                        2381,
                        2381
                    ],
                    [
                        2385,
                        2388
                    ],
                    [
                        2402,
                        2403
                    ],
                    [
                        2433,
                        2433
                    ],
                    [
                        2492,
                        2492
                    ],
                    [
                        2497,
                        2500
                    ],
                    [
                        2509,
                        2509
                    ],
                    [
                        2530,
                        2531
                    ],
                    [
                        2561,
                        2562
                    ],
                    [
                        2620,
                        2620
                    ],
                    [
                        2625,
                        2626
                    ],
                    [
                        2631,
                        2632
                    ],
                    [
                        2635,
                        2637
                    ],
                    [
                        2672,
                        2673
                    ],
                    [
                        2689,
                        2690
                    ],
                    [
                        2748,
                        2748
                    ],
                    [
                        2753,
                        2757
                    ],
                    [
                        2759,
                        2760
                    ],
                    [
                        2765,
                        2765
                    ],
                    [
                        2786,
                        2787
                    ],
                    [
                        2817,
                        2817
                    ],
                    [
                        2876,
                        2876
                    ],
                    [
                        2879,
                        2879
                    ],
                    [
                        2881,
                        2883
                    ],
                    [
                        2893,
                        2893
                    ],
                    [
                        2902,
                        2902
                    ],
                    [
                        2946,
                        2946
                    ],
                    [
                        3008,
                        3008
                    ],
                    [
                        3021,
                        3021
                    ],
                    [
                        3134,
                        3136
                    ],
                    [
                        3142,
                        3144
                    ],
                    [
                        3146,
                        3149
                    ],
                    [
                        3157,
                        3158
                    ],
                    [
                        3260,
                        3260
                    ],
                    [
                        3263,
                        3263
                    ],
                    [
                        3270,
                        3270
                    ],
                    [
                        3276,
                        3277
                    ],
                    [
                        3298,
                        3299
                    ],
                    [
                        3393,
                        3395
                    ],
                    [
                        3405,
                        3405
                    ],
                    [
                        3530,
                        3530
                    ],
                    [
                        3538,
                        3540
                    ],
                    [
                        3542,
                        3542
                    ],
                    [
                        3633,
                        3633
                    ],
                    [
                        3636,
                        3642
                    ],
                    [
                        3655,
                        3662
                    ],
                    [
                        3761,
                        3761
                    ],
                    [
                        3764,
                        3769
                    ],
                    [
                        3771,
                        3772
                    ],
                    [
                        3784,
                        3789
                    ],
                    [
                        3864,
                        3865
                    ],
                    [
                        3893,
                        3893
                    ],
                    [
                        3895,
                        3895
                    ],
                    [
                        3897,
                        3897
                    ],
                    [
                        3953,
                        3966
                    ],
                    [
                        3968,
                        3972
                    ],
                    [
                        3974,
                        3975
                    ],
                    [
                        3984,
                        3991
                    ],
                    [
                        3993,
                        4028
                    ],
                    [
                        4038,
                        4038
                    ],
                    [
                        4141,
                        4144
                    ],
                    [
                        4146,
                        4146
                    ],
                    [
                        4150,
                        4151
                    ],
                    [
                        4153,
                        4153
                    ],
                    [
                        4184,
                        4185
                    ],
                    [
                        4448,
                        4607
                    ],
                    [
                        4959,
                        4959
                    ],
                    [
                        5906,
                        5908
                    ],
                    [
                        5938,
                        5940
                    ],
                    [
                        5970,
                        5971
                    ],
                    [
                        6002,
                        6003
                    ],
                    [
                        6068,
                        6069
                    ],
                    [
                        6071,
                        6077
                    ],
                    [
                        6086,
                        6086
                    ],
                    [
                        6089,
                        6099
                    ],
                    [
                        6109,
                        6109
                    ],
                    [
                        6155,
                        6157
                    ],
                    [
                        6313,
                        6313
                    ],
                    [
                        6432,
                        6434
                    ],
                    [
                        6439,
                        6440
                    ],
                    [
                        6450,
                        6450
                    ],
                    [
                        6457,
                        6459
                    ],
                    [
                        6679,
                        6680
                    ],
                    [
                        6912,
                        6915
                    ],
                    [
                        6964,
                        6964
                    ],
                    [
                        6966,
                        6970
                    ],
                    [
                        6972,
                        6972
                    ],
                    [
                        6978,
                        6978
                    ],
                    [
                        7019,
                        7027
                    ],
                    [
                        7616,
                        7626
                    ],
                    [
                        7678,
                        7679
                    ],
                    [
                        8203,
                        8207
                    ],
                    [
                        8234,
                        8238
                    ],
                    [
                        8288,
                        8291
                    ],
                    [
                        8298,
                        8303
                    ],
                    [
                        8400,
                        8431
                    ],
                    [
                        12330,
                        12335
                    ],
                    [
                        12441,
                        12442
                    ],
                    [
                        43014,
                        43014
                    ],
                    [
                        43019,
                        43019
                    ],
                    [
                        43045,
                        43046
                    ],
                    [
                        64286,
                        64286
                    ],
                    [
                        65024,
                        65039
                    ],
                    [
                        65056,
                        65059
                    ],
                    [
                        65279,
                        65279
                    ],
                    [
                        65529,
                        65531
                    ]
                ], n = [
                    [
                        68097,
                        68099
                    ],
                    [
                        68101,
                        68102
                    ],
                    [
                        68108,
                        68111
                    ],
                    [
                        68152,
                        68154
                    ],
                    [
                        68159,
                        68159
                    ],
                    [
                        119143,
                        119145
                    ],
                    [
                        119155,
                        119170
                    ],
                    [
                        119173,
                        119179
                    ],
                    [
                        119210,
                        119213
                    ],
                    [
                        119362,
                        119364
                    ],
                    [
                        917505,
                        917505
                    ],
                    [
                        917536,
                        917631
                    ],
                    [
                        917760,
                        917999
                    ]
                ];
                let o;
                t.UnicodeV6 = class {
                    constructor(){
                        if (this.version = "6", !o) {
                            o = new Uint8Array(65536), o.fill(1), o[0] = 0, o.fill(0, 1, 32), o.fill(0, 127, 160), o.fill(2, 4352, 4448), o[9001] = 2, o[9002] = 2, o.fill(2, 11904, 42192), o[12351] = 1, o.fill(2, 44032, 55204), o.fill(2, 63744, 64256), o.fill(2, 65040, 65050), o.fill(2, 65072, 65136), o.fill(2, 65280, 65377), o.fill(2, 65504, 65511);
                            for(let e = 0; e < r.length; ++e)o.fill(0, r[e][0], r[e][1] + 1);
                        }
                    }
                    wcwidth(e) {
                        return e < 32 ? 0 : e < 127 ? 1 : e < 65536 ? o[e] : function(e, t) {
                            let i, s = 0, r = t.length - 1;
                            if (e < t[0][0] || e > t[r][1]) return !1;
                            for(; r >= s;)if (i = s + r >> 1, e > t[i][1]) s = i + 1;
                            else {
                                if (!(e < t[i][0])) return !0;
                                r = i - 1;
                            }
                            return !1;
                        }(e, n) ? 0 : e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141 ? 2 : 1;
                    }
                    charProperties(e, t) {
                        let i = this.wcwidth(e), r = 0 === i && 0 !== t;
                        if (r) {
                            const e = s.UnicodeService.extractWidth(t);
                            0 === e ? r = !1 : e > i && (i = e);
                        }
                        return s.UnicodeService.createPropertyValue(0, i, r);
                    }
                };
            },
            5981: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.WriteBuffer = void 0;
                const s = i(8460), r = i(844);
                class n extends r.Disposable {
                    constructor(e){
                        super(), this._action = e, this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 0, this._isSyncWriting = !1, this._syncCalls = 0, this._didUserInput = !1, this._onWriteParsed = this.register(new s.EventEmitter), this.onWriteParsed = this._onWriteParsed.event;
                    }
                    handleUserInput() {
                        this._didUserInput = !0;
                    }
                    writeSync(e, t) {
                        if (void 0 !== t && this._syncCalls > t) return void (this._syncCalls = 0);
                        if (this._pendingData += e.length, this._writeBuffer.push(e), this._callbacks.push(void 0), this._syncCalls++, this._isSyncWriting) return;
                        let i;
                        for(this._isSyncWriting = !0; i = this._writeBuffer.shift();){
                            this._action(i);
                            const e = this._callbacks.shift();
                            e && e();
                        }
                        this._pendingData = 0, this._bufferOffset = 2147483647, this._isSyncWriting = !1, this._syncCalls = 0;
                    }
                    write(e, t) {
                        if (this._pendingData > 5e7) throw new Error("write data discarded, use flow control to avoid losing data");
                        if (!this._writeBuffer.length) {
                            if (this._bufferOffset = 0, this._didUserInput) return this._didUserInput = !1, this._pendingData += e.length, this._writeBuffer.push(e), this._callbacks.push(t), void this._innerWrite();
                            setTimeout(()=>this._innerWrite());
                        }
                        this._pendingData += e.length, this._writeBuffer.push(e), this._callbacks.push(t);
                    }
                    _innerWrite(e = 0, t = !0) {
                        const i = e || Date.now();
                        for(; this._writeBuffer.length > this._bufferOffset;){
                            const e = this._writeBuffer[this._bufferOffset], s = this._action(e, t);
                            if (s) {
                                const e = (e)=>Date.now() - i >= 12 ? setTimeout(()=>this._innerWrite(0, e)) : this._innerWrite(i, e);
                                return void s.catch((e)=>(queueMicrotask(()=>{
                                        throw e;
                                    }), Promise.resolve(!1))).then(e);
                            }
                            const r = this._callbacks[this._bufferOffset];
                            if (r && r(), this._bufferOffset++, this._pendingData -= e.length, Date.now() - i >= 12) break;
                        }
                        this._writeBuffer.length > this._bufferOffset ? (this._bufferOffset > 50 && (this._writeBuffer = this._writeBuffer.slice(this._bufferOffset), this._callbacks = this._callbacks.slice(this._bufferOffset), this._bufferOffset = 0), setTimeout(()=>this._innerWrite())) : (this._writeBuffer.length = 0, this._callbacks.length = 0, this._pendingData = 0, this._bufferOffset = 0), this._onWriteParsed.fire();
                    }
                }
                t.WriteBuffer = n;
            },
            5941: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.toRgbString = t.parseColor = void 0;
                const i = /^([\da-f])\/([\da-f])\/([\da-f])$|^([\da-f]{2})\/([\da-f]{2})\/([\da-f]{2})$|^([\da-f]{3})\/([\da-f]{3})\/([\da-f]{3})$|^([\da-f]{4})\/([\da-f]{4})\/([\da-f]{4})$/, s = /^[\da-f]+$/;
                function r(e, t) {
                    const i = e.toString(16), s = i.length < 2 ? "0" + i : i;
                    switch(t){
                        case 4:
                            return i[0];
                        case 8:
                            return s;
                        case 12:
                            return (s + s).slice(0, 3);
                        default:
                            return s + s;
                    }
                }
                t.parseColor = function(e) {
                    if (!e) return;
                    let t = e.toLowerCase();
                    if (0 === t.indexOf("rgb:")) {
                        t = t.slice(4);
                        const e = i.exec(t);
                        if (e) {
                            const t = e[1] ? 15 : e[4] ? 255 : e[7] ? 4095 : 65535;
                            return [
                                Math.round(parseInt(e[1] || e[4] || e[7] || e[10], 16) / t * 255),
                                Math.round(parseInt(e[2] || e[5] || e[8] || e[11], 16) / t * 255),
                                Math.round(parseInt(e[3] || e[6] || e[9] || e[12], 16) / t * 255)
                            ];
                        }
                    } else if (0 === t.indexOf("#") && (t = t.slice(1), s.exec(t) && [
                        3,
                        6,
                        9,
                        12
                    ].includes(t.length))) {
                        const e = t.length / 3, i = [
                            0,
                            0,
                            0
                        ];
                        for(let s = 0; s < 3; ++s){
                            const r = parseInt(t.slice(e * s, e * s + e), 16);
                            i[s] = 1 === e ? r << 4 : 2 === e ? r : 3 === e ? r >> 4 : r >> 8;
                        }
                        return i;
                    }
                }, t.toRgbString = function(e, t = 16) {
                    const [i, s, n] = e;
                    return `rgb:${r(i, t)}/${r(s, t)}/${r(n, t)}`;
                };
            },
            5770: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.PAYLOAD_LIMIT = void 0, t.PAYLOAD_LIMIT = 1e7;
            },
            6351: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DcsHandler = t.DcsParser = void 0;
                const s = i(482), r = i(8742), n = i(5770), o = [];
                t.DcsParser = class {
                    constructor(){
                        this._handlers = Object.create(null), this._active = o, this._ident = 0, this._handlerFb = ()=>{}, this._stack = {
                            paused: !1,
                            loopPosition: 0,
                            fallThrough: !1
                        };
                    }
                    dispose() {
                        this._handlers = Object.create(null), this._handlerFb = ()=>{}, this._active = o;
                    }
                    registerHandler(e, t) {
                        void 0 === this._handlers[e] && (this._handlers[e] = []);
                        const i = this._handlers[e];
                        return i.push(t), {
                            dispose: ()=>{
                                const e = i.indexOf(t);
                                -1 !== e && i.splice(e, 1);
                            }
                        };
                    }
                    clearHandler(e) {
                        this._handlers[e] && delete this._handlers[e];
                    }
                    setHandlerFallback(e) {
                        this._handlerFb = e;
                    }
                    reset() {
                        if (this._active.length) for(let e = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e >= 0; --e)this._active[e].unhook(!1);
                        this._stack.paused = !1, this._active = o, this._ident = 0;
                    }
                    hook(e, t) {
                        if (this.reset(), this._ident = e, this._active = this._handlers[e] || o, this._active.length) for(let e = this._active.length - 1; e >= 0; e--)this._active[e].hook(t);
                        else this._handlerFb(this._ident, "HOOK", t);
                    }
                    put(e, t, i) {
                        if (this._active.length) for(let s = this._active.length - 1; s >= 0; s--)this._active[s].put(e, t, i);
                        else this._handlerFb(this._ident, "PUT", (0, s.utf32ToString)(e, t, i));
                    }
                    unhook(e, t = !0) {
                        if (this._active.length) {
                            let i = !1, s = this._active.length - 1, r = !1;
                            if (this._stack.paused && (s = this._stack.loopPosition - 1, i = t, r = this._stack.fallThrough, this._stack.paused = !1), !r && !1 === i) {
                                for(; s >= 0 && (i = this._active[s].unhook(e), !0 !== i); s--)if (i instanceof Promise) return this._stack.paused = !0, this._stack.loopPosition = s, this._stack.fallThrough = !1, i;
                                s--;
                            }
                            for(; s >= 0; s--)if (i = this._active[s].unhook(!1), i instanceof Promise) return this._stack.paused = !0, this._stack.loopPosition = s, this._stack.fallThrough = !0, i;
                        } else this._handlerFb(this._ident, "UNHOOK", e);
                        this._active = o, this._ident = 0;
                    }
                };
                const a = new r.Params;
                a.addParam(0), t.DcsHandler = class {
                    constructor(e){
                        this._handler = e, this._data = "", this._params = a, this._hitLimit = !1;
                    }
                    hook(e) {
                        this._params = e.length > 1 || e.params[0] ? e.clone() : a, this._data = "", this._hitLimit = !1;
                    }
                    put(e, t, i) {
                        this._hitLimit || (this._data += (0, s.utf32ToString)(e, t, i), this._data.length > n.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = !0));
                    }
                    unhook(e) {
                        let t = !1;
                        if (this._hitLimit) t = !1;
                        else if (e && (t = this._handler(this._data, this._params), t instanceof Promise)) return t.then((e)=>(this._params = a, this._data = "", this._hitLimit = !1, e));
                        return this._params = a, this._data = "", this._hitLimit = !1, t;
                    }
                };
            },
            2015: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EscapeSequenceParser = t.VT500_TRANSITION_TABLE = t.TransitionTable = void 0;
                const s = i(844), r = i(8742), n = i(6242), o = i(6351);
                class a {
                    constructor(e){
                        this.table = new Uint8Array(e);
                    }
                    setDefault(e, t) {
                        this.table.fill(e << 4 | t);
                    }
                    add(e, t, i, s) {
                        this.table[t << 8 | e] = i << 4 | s;
                    }
                    addMany(e, t, i, s) {
                        for(let r = 0; r < e.length; r++)this.table[t << 8 | e[r]] = i << 4 | s;
                    }
                }
                t.TransitionTable = a;
                const h = 160;
                t.VT500_TRANSITION_TABLE = function() {
                    const e = new a(4095), t = Array.apply(null, Array(256)).map((e, t)=>t), i = (e, i)=>t.slice(e, i), s = i(32, 127), r = i(0, 24);
                    r.push(25), r.push.apply(r, i(28, 32));
                    const n = i(0, 14);
                    let o;
                    for(o in e.setDefault(1, 0), e.addMany(s, 0, 2, 0), n)e.addMany([
                        24,
                        26,
                        153,
                        154
                    ], o, 3, 0), e.addMany(i(128, 144), o, 3, 0), e.addMany(i(144, 152), o, 3, 0), e.add(156, o, 0, 0), e.add(27, o, 11, 1), e.add(157, o, 4, 8), e.addMany([
                        152,
                        158,
                        159
                    ], o, 0, 7), e.add(155, o, 11, 3), e.add(144, o, 11, 9);
                    return e.addMany(r, 0, 3, 0), e.addMany(r, 1, 3, 1), e.add(127, 1, 0, 1), e.addMany(r, 8, 0, 8), e.addMany(r, 3, 3, 3), e.add(127, 3, 0, 3), e.addMany(r, 4, 3, 4), e.add(127, 4, 0, 4), e.addMany(r, 6, 3, 6), e.addMany(r, 5, 3, 5), e.add(127, 5, 0, 5), e.addMany(r, 2, 3, 2), e.add(127, 2, 0, 2), e.add(93, 1, 4, 8), e.addMany(s, 8, 5, 8), e.add(127, 8, 5, 8), e.addMany([
                        156,
                        27,
                        24,
                        26,
                        7
                    ], 8, 6, 0), e.addMany(i(28, 32), 8, 0, 8), e.addMany([
                        88,
                        94,
                        95
                    ], 1, 0, 7), e.addMany(s, 7, 0, 7), e.addMany(r, 7, 0, 7), e.add(156, 7, 0, 0), e.add(127, 7, 0, 7), e.add(91, 1, 11, 3), e.addMany(i(64, 127), 3, 7, 0), e.addMany(i(48, 60), 3, 8, 4), e.addMany([
                        60,
                        61,
                        62,
                        63
                    ], 3, 9, 4), e.addMany(i(48, 60), 4, 8, 4), e.addMany(i(64, 127), 4, 7, 0), e.addMany([
                        60,
                        61,
                        62,
                        63
                    ], 4, 0, 6), e.addMany(i(32, 64), 6, 0, 6), e.add(127, 6, 0, 6), e.addMany(i(64, 127), 6, 0, 0), e.addMany(i(32, 48), 3, 9, 5), e.addMany(i(32, 48), 5, 9, 5), e.addMany(i(48, 64), 5, 0, 6), e.addMany(i(64, 127), 5, 7, 0), e.addMany(i(32, 48), 4, 9, 5), e.addMany(i(32, 48), 1, 9, 2), e.addMany(i(32, 48), 2, 9, 2), e.addMany(i(48, 127), 2, 10, 0), e.addMany(i(48, 80), 1, 10, 0), e.addMany(i(81, 88), 1, 10, 0), e.addMany([
                        89,
                        90,
                        92
                    ], 1, 10, 0), e.addMany(i(96, 127), 1, 10, 0), e.add(80, 1, 11, 9), e.addMany(r, 9, 0, 9), e.add(127, 9, 0, 9), e.addMany(i(28, 32), 9, 0, 9), e.addMany(i(32, 48), 9, 9, 12), e.addMany(i(48, 60), 9, 8, 10), e.addMany([
                        60,
                        61,
                        62,
                        63
                    ], 9, 9, 10), e.addMany(r, 11, 0, 11), e.addMany(i(32, 128), 11, 0, 11), e.addMany(i(28, 32), 11, 0, 11), e.addMany(r, 10, 0, 10), e.add(127, 10, 0, 10), e.addMany(i(28, 32), 10, 0, 10), e.addMany(i(48, 60), 10, 8, 10), e.addMany([
                        60,
                        61,
                        62,
                        63
                    ], 10, 0, 11), e.addMany(i(32, 48), 10, 9, 12), e.addMany(r, 12, 0, 12), e.add(127, 12, 0, 12), e.addMany(i(28, 32), 12, 0, 12), e.addMany(i(32, 48), 12, 9, 12), e.addMany(i(48, 64), 12, 0, 11), e.addMany(i(64, 127), 12, 12, 13), e.addMany(i(64, 127), 10, 12, 13), e.addMany(i(64, 127), 9, 12, 13), e.addMany(r, 13, 13, 13), e.addMany(s, 13, 13, 13), e.add(127, 13, 0, 13), e.addMany([
                        27,
                        156,
                        24,
                        26
                    ], 13, 14, 0), e.add(h, 0, 2, 0), e.add(h, 8, 5, 8), e.add(h, 6, 0, 6), e.add(h, 11, 0, 11), e.add(h, 13, 13, 13), e;
                }();
                class c extends s.Disposable {
                    constructor(e = t.VT500_TRANSITION_TABLE){
                        super(), this._transitions = e, this._parseStack = {
                            state: 0,
                            handlers: [],
                            handlerPos: 0,
                            transition: 0,
                            chunkPos: 0
                        }, this.initialState = 0, this.currentState = this.initialState, this._params = new r.Params, this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0, this._printHandlerFb = (e, t, i)=>{}, this._executeHandlerFb = (e)=>{}, this._csiHandlerFb = (e, t)=>{}, this._escHandlerFb = (e)=>{}, this._errorHandlerFb = (e)=>e, this._printHandler = this._printHandlerFb, this._executeHandlers = Object.create(null), this._csiHandlers = Object.create(null), this._escHandlers = Object.create(null), this.register((0, s.toDisposable)(()=>{
                            this._csiHandlers = Object.create(null), this._executeHandlers = Object.create(null), this._escHandlers = Object.create(null);
                        })), this._oscParser = this.register(new n.OscParser), this._dcsParser = this.register(new o.DcsParser), this._errorHandler = this._errorHandlerFb, this.registerEscHandler({
                            final: "\\"
                        }, ()=>!0);
                    }
                    _identifier(e, t = [
                        64,
                        126
                    ]) {
                        let i = 0;
                        if (e.prefix) {
                            if (e.prefix.length > 1) throw new Error("only one byte as prefix supported");
                            if (i = e.prefix.charCodeAt(0), i && 60 > i || i > 63) throw new Error("prefix must be in range 0x3c .. 0x3f");
                        }
                        if (e.intermediates) {
                            if (e.intermediates.length > 2) throw new Error("only two bytes as intermediates are supported");
                            for(let t = 0; t < e.intermediates.length; ++t){
                                const s = e.intermediates.charCodeAt(t);
                                if (32 > s || s > 47) throw new Error("intermediate must be in range 0x20 .. 0x2f");
                                i <<= 8, i |= s;
                            }
                        }
                        if (1 !== e.final.length) throw new Error("final must be a single byte");
                        const s = e.final.charCodeAt(0);
                        if (t[0] > s || s > t[1]) throw new Error(`final must be in range ${t[0]} .. ${t[1]}`);
                        return i <<= 8, i |= s, i;
                    }
                    identToString(e) {
                        const t = [];
                        for(; e;)t.push(String.fromCharCode(255 & e)), e >>= 8;
                        return t.reverse().join("");
                    }
                    setPrintHandler(e) {
                        this._printHandler = e;
                    }
                    clearPrintHandler() {
                        this._printHandler = this._printHandlerFb;
                    }
                    registerEscHandler(e, t) {
                        const i = this._identifier(e, [
                            48,
                            126
                        ]);
                        void 0 === this._escHandlers[i] && (this._escHandlers[i] = []);
                        const s = this._escHandlers[i];
                        return s.push(t), {
                            dispose: ()=>{
                                const e = s.indexOf(t);
                                -1 !== e && s.splice(e, 1);
                            }
                        };
                    }
                    clearEscHandler(e) {
                        this._escHandlers[this._identifier(e, [
                            48,
                            126
                        ])] && delete this._escHandlers[this._identifier(e, [
                            48,
                            126
                        ])];
                    }
                    setEscHandlerFallback(e) {
                        this._escHandlerFb = e;
                    }
                    setExecuteHandler(e, t) {
                        this._executeHandlers[e.charCodeAt(0)] = t;
                    }
                    clearExecuteHandler(e) {
                        this._executeHandlers[e.charCodeAt(0)] && delete this._executeHandlers[e.charCodeAt(0)];
                    }
                    setExecuteHandlerFallback(e) {
                        this._executeHandlerFb = e;
                    }
                    registerCsiHandler(e, t) {
                        const i = this._identifier(e);
                        void 0 === this._csiHandlers[i] && (this._csiHandlers[i] = []);
                        const s = this._csiHandlers[i];
                        return s.push(t), {
                            dispose: ()=>{
                                const e = s.indexOf(t);
                                -1 !== e && s.splice(e, 1);
                            }
                        };
                    }
                    clearCsiHandler(e) {
                        this._csiHandlers[this._identifier(e)] && delete this._csiHandlers[this._identifier(e)];
                    }
                    setCsiHandlerFallback(e) {
                        this._csiHandlerFb = e;
                    }
                    registerDcsHandler(e, t) {
                        return this._dcsParser.registerHandler(this._identifier(e), t);
                    }
                    clearDcsHandler(e) {
                        this._dcsParser.clearHandler(this._identifier(e));
                    }
                    setDcsHandlerFallback(e) {
                        this._dcsParser.setHandlerFallback(e);
                    }
                    registerOscHandler(e, t) {
                        return this._oscParser.registerHandler(e, t);
                    }
                    clearOscHandler(e) {
                        this._oscParser.clearHandler(e);
                    }
                    setOscHandlerFallback(e) {
                        this._oscParser.setHandlerFallback(e);
                    }
                    setErrorHandler(e) {
                        this._errorHandler = e;
                    }
                    clearErrorHandler() {
                        this._errorHandler = this._errorHandlerFb;
                    }
                    reset() {
                        this.currentState = this.initialState, this._oscParser.reset(), this._dcsParser.reset(), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0, 0 !== this._parseStack.state && (this._parseStack.state = 2, this._parseStack.handlers = []);
                    }
                    _preserveStack(e, t, i, s, r) {
                        this._parseStack.state = e, this._parseStack.handlers = t, this._parseStack.handlerPos = i, this._parseStack.transition = s, this._parseStack.chunkPos = r;
                    }
                    parse(e, t, i) {
                        let s, r = 0, n = 0, o = 0;
                        if (this._parseStack.state) {
                            if (2 === this._parseStack.state) this._parseStack.state = 0, o = this._parseStack.chunkPos + 1;
                            else {
                                if (void 0 === i || 1 === this._parseStack.state) throw this._parseStack.state = 1, new Error("improper continuation due to previous async handler, giving up parsing");
                                const t = this._parseStack.handlers;
                                let n = this._parseStack.handlerPos - 1;
                                switch(this._parseStack.state){
                                    case 3:
                                        if (!1 === i && n > -1) {
                                            for(; n >= 0 && (s = t[n](this._params), !0 !== s); n--)if (s instanceof Promise) return this._parseStack.handlerPos = n, s;
                                        }
                                        this._parseStack.handlers = [];
                                        break;
                                    case 4:
                                        if (!1 === i && n > -1) {
                                            for(; n >= 0 && (s = t[n](), !0 !== s); n--)if (s instanceof Promise) return this._parseStack.handlerPos = n, s;
                                        }
                                        this._parseStack.handlers = [];
                                        break;
                                    case 6:
                                        if (r = e[this._parseStack.chunkPos], s = this._dcsParser.unhook(24 !== r && 26 !== r, i), s) return s;
                                        27 === r && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
                                        break;
                                    case 5:
                                        if (r = e[this._parseStack.chunkPos], s = this._oscParser.end(24 !== r && 26 !== r, i), s) return s;
                                        27 === r && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
                                }
                                this._parseStack.state = 0, o = this._parseStack.chunkPos + 1, this.precedingJoinState = 0, this.currentState = 15 & this._parseStack.transition;
                            }
                        }
                        for(let i = o; i < t; ++i){
                            switch(r = e[i], n = this._transitions.table[this.currentState << 8 | (r < 160 ? r : h)], n >> 4){
                                case 2:
                                    for(let s = i + 1;; ++s){
                                        if (s >= t || (r = e[s]) < 32 || r > 126 && r < h) {
                                            this._printHandler(e, i, s), i = s - 1;
                                            break;
                                        }
                                        if (++s >= t || (r = e[s]) < 32 || r > 126 && r < h) {
                                            this._printHandler(e, i, s), i = s - 1;
                                            break;
                                        }
                                        if (++s >= t || (r = e[s]) < 32 || r > 126 && r < h) {
                                            this._printHandler(e, i, s), i = s - 1;
                                            break;
                                        }
                                        if (++s >= t || (r = e[s]) < 32 || r > 126 && r < h) {
                                            this._printHandler(e, i, s), i = s - 1;
                                            break;
                                        }
                                    }
                                    break;
                                case 3:
                                    this._executeHandlers[r] ? this._executeHandlers[r]() : this._executeHandlerFb(r), this.precedingJoinState = 0;
                                    break;
                                case 0:
                                    break;
                                case 1:
                                    if (this._errorHandler({
                                        position: i,
                                        code: r,
                                        currentState: this.currentState,
                                        collect: this._collect,
                                        params: this._params,
                                        abort: !1
                                    }).abort) return;
                                    break;
                                case 7:
                                    const o = this._csiHandlers[this._collect << 8 | r];
                                    let a = o ? o.length - 1 : -1;
                                    for(; a >= 0 && (s = o[a](this._params), !0 !== s); a--)if (s instanceof Promise) return this._preserveStack(3, o, a, n, i), s;
                                    a < 0 && this._csiHandlerFb(this._collect << 8 | r, this._params), this.precedingJoinState = 0;
                                    break;
                                case 8:
                                    do switch(r){
                                        case 59:
                                            this._params.addParam(0);
                                            break;
                                        case 58:
                                            this._params.addSubParam(-1);
                                            break;
                                        default:
                                            this._params.addDigit(r - 48);
                                    }
                                    while (++i < t && (r = e[i]) > 47 && r < 60);
                                    i--;
                                    break;
                                case 9:
                                    this._collect <<= 8, this._collect |= r;
                                    break;
                                case 10:
                                    const c = this._escHandlers[this._collect << 8 | r];
                                    let l = c ? c.length - 1 : -1;
                                    for(; l >= 0 && (s = c[l](), !0 !== s); l--)if (s instanceof Promise) return this._preserveStack(4, c, l, n, i), s;
                                    l < 0 && this._escHandlerFb(this._collect << 8 | r), this.precedingJoinState = 0;
                                    break;
                                case 11:
                                    this._params.reset(), this._params.addParam(0), this._collect = 0;
                                    break;
                                case 12:
                                    this._dcsParser.hook(this._collect << 8 | r, this._params);
                                    break;
                                case 13:
                                    for(let s = i + 1;; ++s)if (s >= t || 24 === (r = e[s]) || 26 === r || 27 === r || r > 127 && r < h) {
                                        this._dcsParser.put(e, i, s), i = s - 1;
                                        break;
                                    }
                                    break;
                                case 14:
                                    if (s = this._dcsParser.unhook(24 !== r && 26 !== r), s) return this._preserveStack(6, [], 0, n, i), s;
                                    27 === r && (n |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0;
                                    break;
                                case 4:
                                    this._oscParser.start();
                                    break;
                                case 5:
                                    for(let s = i + 1;; s++)if (s >= t || (r = e[s]) < 32 || r > 127 && r < h) {
                                        this._oscParser.put(e, i, s), i = s - 1;
                                        break;
                                    }
                                    break;
                                case 6:
                                    if (s = this._oscParser.end(24 !== r && 26 !== r), s) return this._preserveStack(5, [], 0, n, i), s;
                                    27 === r && (n |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0;
                            }
                            this.currentState = 15 & n;
                        }
                    }
                }
                t.EscapeSequenceParser = c;
            },
            6242: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.OscHandler = t.OscParser = void 0;
                const s = i(5770), r = i(482), n = [];
                t.OscParser = class {
                    constructor(){
                        this._state = 0, this._active = n, this._id = -1, this._handlers = Object.create(null), this._handlerFb = ()=>{}, this._stack = {
                            paused: !1,
                            loopPosition: 0,
                            fallThrough: !1
                        };
                    }
                    registerHandler(e, t) {
                        void 0 === this._handlers[e] && (this._handlers[e] = []);
                        const i = this._handlers[e];
                        return i.push(t), {
                            dispose: ()=>{
                                const e = i.indexOf(t);
                                -1 !== e && i.splice(e, 1);
                            }
                        };
                    }
                    clearHandler(e) {
                        this._handlers[e] && delete this._handlers[e];
                    }
                    setHandlerFallback(e) {
                        this._handlerFb = e;
                    }
                    dispose() {
                        this._handlers = Object.create(null), this._handlerFb = ()=>{}, this._active = n;
                    }
                    reset() {
                        if (2 === this._state) for(let e = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e >= 0; --e)this._active[e].end(!1);
                        this._stack.paused = !1, this._active = n, this._id = -1, this._state = 0;
                    }
                    _start() {
                        if (this._active = this._handlers[this._id] || n, this._active.length) for(let e = this._active.length - 1; e >= 0; e--)this._active[e].start();
                        else this._handlerFb(this._id, "START");
                    }
                    _put(e, t, i) {
                        if (this._active.length) for(let s = this._active.length - 1; s >= 0; s--)this._active[s].put(e, t, i);
                        else this._handlerFb(this._id, "PUT", (0, r.utf32ToString)(e, t, i));
                    }
                    start() {
                        this.reset(), this._state = 1;
                    }
                    put(e, t, i) {
                        if (3 !== this._state) {
                            if (1 === this._state) for(; t < i;){
                                const i = e[t++];
                                if (59 === i) {
                                    this._state = 2, this._start();
                                    break;
                                }
                                if (i < 48 || 57 < i) return void (this._state = 3);
                                -1 === this._id && (this._id = 0), this._id = 10 * this._id + i - 48;
                            }
                            2 === this._state && i - t > 0 && this._put(e, t, i);
                        }
                    }
                    end(e, t = !0) {
                        if (0 !== this._state) {
                            if (3 !== this._state) {
                                if (1 === this._state && this._start(), this._active.length) {
                                    let i = !1, s = this._active.length - 1, r = !1;
                                    if (this._stack.paused && (s = this._stack.loopPosition - 1, i = t, r = this._stack.fallThrough, this._stack.paused = !1), !r && !1 === i) {
                                        for(; s >= 0 && (i = this._active[s].end(e), !0 !== i); s--)if (i instanceof Promise) return this._stack.paused = !0, this._stack.loopPosition = s, this._stack.fallThrough = !1, i;
                                        s--;
                                    }
                                    for(; s >= 0; s--)if (i = this._active[s].end(!1), i instanceof Promise) return this._stack.paused = !0, this._stack.loopPosition = s, this._stack.fallThrough = !0, i;
                                } else this._handlerFb(this._id, "END", e);
                            }
                            this._active = n, this._id = -1, this._state = 0;
                        }
                    }
                }, t.OscHandler = class {
                    constructor(e){
                        this._handler = e, this._data = "", this._hitLimit = !1;
                    }
                    start() {
                        this._data = "", this._hitLimit = !1;
                    }
                    put(e, t, i) {
                        this._hitLimit || (this._data += (0, r.utf32ToString)(e, t, i), this._data.length > s.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = !0));
                    }
                    end(e) {
                        let t = !1;
                        if (this._hitLimit) t = !1;
                        else if (e && (t = this._handler(this._data), t instanceof Promise)) return t.then((e)=>(this._data = "", this._hitLimit = !1, e));
                        return this._data = "", this._hitLimit = !1, t;
                    }
                };
            },
            8742: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Params = void 0;
                const i = 2147483647;
                class s {
                    static fromArray(e) {
                        const t = new s;
                        if (!e.length) return t;
                        for(let i = Array.isArray(e[0]) ? 1 : 0; i < e.length; ++i){
                            const s = e[i];
                            if (Array.isArray(s)) for(let e = 0; e < s.length; ++e)t.addSubParam(s[e]);
                            else t.addParam(s);
                        }
                        return t;
                    }
                    constructor(e = 32, t = 32){
                        if (this.maxLength = e, this.maxSubParamsLength = t, t > 256) throw new Error("maxSubParamsLength must not be greater than 256");
                        this.params = new Int32Array(e), this.length = 0, this._subParams = new Int32Array(t), this._subParamsLength = 0, this._subParamsIdx = new Uint16Array(e), this._rejectDigits = !1, this._rejectSubDigits = !1, this._digitIsSub = !1;
                    }
                    clone() {
                        const e = new s(this.maxLength, this.maxSubParamsLength);
                        return e.params.set(this.params), e.length = this.length, e._subParams.set(this._subParams), e._subParamsLength = this._subParamsLength, e._subParamsIdx.set(this._subParamsIdx), e._rejectDigits = this._rejectDigits, e._rejectSubDigits = this._rejectSubDigits, e._digitIsSub = this._digitIsSub, e;
                    }
                    toArray() {
                        const e = [];
                        for(let t = 0; t < this.length; ++t){
                            e.push(this.params[t]);
                            const i = this._subParamsIdx[t] >> 8, s = 255 & this._subParamsIdx[t];
                            s - i > 0 && e.push(Array.prototype.slice.call(this._subParams, i, s));
                        }
                        return e;
                    }
                    reset() {
                        this.length = 0, this._subParamsLength = 0, this._rejectDigits = !1, this._rejectSubDigits = !1, this._digitIsSub = !1;
                    }
                    addParam(e) {
                        if (this._digitIsSub = !1, this.length >= this.maxLength) this._rejectDigits = !0;
                        else {
                            if (e < -1) throw new Error("values lesser than -1 are not allowed");
                            this._subParamsIdx[this.length] = this._subParamsLength << 8 | this._subParamsLength, this.params[this.length++] = e > i ? i : e;
                        }
                    }
                    addSubParam(e) {
                        if (this._digitIsSub = !0, this.length) {
                            if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength) this._rejectSubDigits = !0;
                            else {
                                if (e < -1) throw new Error("values lesser than -1 are not allowed");
                                this._subParams[this._subParamsLength++] = e > i ? i : e, this._subParamsIdx[this.length - 1]++;
                            }
                        }
                    }
                    hasSubParams(e) {
                        return (255 & this._subParamsIdx[e]) - (this._subParamsIdx[e] >> 8) > 0;
                    }
                    getSubParams(e) {
                        const t = this._subParamsIdx[e] >> 8, i = 255 & this._subParamsIdx[e];
                        return i - t > 0 ? this._subParams.subarray(t, i) : null;
                    }
                    getSubParamsAll() {
                        const e = {};
                        for(let t = 0; t < this.length; ++t){
                            const i = this._subParamsIdx[t] >> 8, s = 255 & this._subParamsIdx[t];
                            s - i > 0 && (e[t] = this._subParams.slice(i, s));
                        }
                        return e;
                    }
                    addDigit(e) {
                        let t;
                        if (this._rejectDigits || !(t = this._digitIsSub ? this._subParamsLength : this.length) || this._digitIsSub && this._rejectSubDigits) return;
                        const s = this._digitIsSub ? this._subParams : this.params, r = s[t - 1];
                        s[t - 1] = ~r ? Math.min(10 * r + e, i) : e;
                    }
                }
                t.Params = s;
            },
            5741: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.AddonManager = void 0, t.AddonManager = class {
                    constructor(){
                        this._addons = [];
                    }
                    dispose() {
                        for(let e = this._addons.length - 1; e >= 0; e--)this._addons[e].instance.dispose();
                    }
                    loadAddon(e, t) {
                        const i = {
                            instance: t,
                            dispose: t.dispose,
                            isDisposed: !1
                        };
                        this._addons.push(i), t.dispose = ()=>this._wrappedAddonDispose(i), t.activate(e);
                    }
                    _wrappedAddonDispose(e) {
                        if (e.isDisposed) return;
                        let t = -1;
                        for(let i = 0; i < this._addons.length; i++)if (this._addons[i] === e) {
                            t = i;
                            break;
                        }
                        if (-1 === t) throw new Error("Could not dispose an addon that has not been loaded");
                        e.isDisposed = !0, e.dispose.apply(e.instance), this._addons.splice(t, 1);
                    }
                };
            },
            8771: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BufferApiView = void 0;
                const s = i(3785), r = i(511);
                t.BufferApiView = class {
                    constructor(e, t){
                        this._buffer = e, this.type = t;
                    }
                    init(e) {
                        return this._buffer = e, this;
                    }
                    get cursorY() {
                        return this._buffer.y;
                    }
                    get cursorX() {
                        return this._buffer.x;
                    }
                    get viewportY() {
                        return this._buffer.ydisp;
                    }
                    get baseY() {
                        return this._buffer.ybase;
                    }
                    get length() {
                        return this._buffer.lines.length;
                    }
                    getLine(e) {
                        const t = this._buffer.lines.get(e);
                        if (t) return new s.BufferLineApiView(t);
                    }
                    getNullCell() {
                        return new r.CellData;
                    }
                };
            },
            3785: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BufferLineApiView = void 0;
                const s = i(511);
                t.BufferLineApiView = class {
                    constructor(e){
                        this._line = e;
                    }
                    get isWrapped() {
                        return this._line.isWrapped;
                    }
                    get length() {
                        return this._line.length;
                    }
                    getCell(e, t) {
                        if (!(e < 0 || e >= this._line.length)) return t ? (this._line.loadCell(e, t), t) : this._line.loadCell(e, new s.CellData);
                    }
                    translateToString(e, t, i) {
                        return this._line.translateToString(e, t, i);
                    }
                };
            },
            8285: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BufferNamespaceApi = void 0;
                const s = i(8771), r = i(8460), n = i(844);
                class o extends n.Disposable {
                    constructor(e){
                        super(), this._core = e, this._onBufferChange = this.register(new r.EventEmitter), this.onBufferChange = this._onBufferChange.event, this._normal = new s.BufferApiView(this._core.buffers.normal, "normal"), this._alternate = new s.BufferApiView(this._core.buffers.alt, "alternate"), this._core.buffers.onBufferActivate(()=>this._onBufferChange.fire(this.active));
                    }
                    get active() {
                        if (this._core.buffers.active === this._core.buffers.normal) return this.normal;
                        if (this._core.buffers.active === this._core.buffers.alt) return this.alternate;
                        throw new Error("Active buffer is neither normal nor alternate");
                    }
                    get normal() {
                        return this._normal.init(this._core.buffers.normal);
                    }
                    get alternate() {
                        return this._alternate.init(this._core.buffers.alt);
                    }
                }
                t.BufferNamespaceApi = o;
            },
            7975: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ParserApi = void 0, t.ParserApi = class {
                    constructor(e){
                        this._core = e;
                    }
                    registerCsiHandler(e, t) {
                        return this._core.registerCsiHandler(e, (e)=>t(e.toArray()));
                    }
                    addCsiHandler(e, t) {
                        return this.registerCsiHandler(e, t);
                    }
                    registerDcsHandler(e, t) {
                        return this._core.registerDcsHandler(e, (e, i)=>t(e, i.toArray()));
                    }
                    addDcsHandler(e, t) {
                        return this.registerDcsHandler(e, t);
                    }
                    registerEscHandler(e, t) {
                        return this._core.registerEscHandler(e, t);
                    }
                    addEscHandler(e, t) {
                        return this.registerEscHandler(e, t);
                    }
                    registerOscHandler(e, t) {
                        return this._core.registerOscHandler(e, t);
                    }
                    addOscHandler(e, t) {
                        return this.registerOscHandler(e, t);
                    }
                };
            },
            7090: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.UnicodeApi = void 0, t.UnicodeApi = class {
                    constructor(e){
                        this._core = e;
                    }
                    register(e) {
                        this._core.unicodeService.register(e);
                    }
                    get versions() {
                        return this._core.unicodeService.versions;
                    }
                    get activeVersion() {
                        return this._core.unicodeService.activeVersion;
                    }
                    set activeVersion(e) {
                        this._core.unicodeService.activeVersion = e;
                    }
                };
            },
            744: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BufferService = t.MINIMUM_ROWS = t.MINIMUM_COLS = void 0;
                const n = i(8460), o = i(844), a = i(5295), h = i(2585);
                t.MINIMUM_COLS = 2, t.MINIMUM_ROWS = 1;
                let c = t.BufferService = class extends o.Disposable {
                    get buffer() {
                        return this.buffers.active;
                    }
                    constructor(e){
                        super(), this.isUserScrolling = !1, this._onResize = this.register(new n.EventEmitter), this.onResize = this._onResize.event, this._onScroll = this.register(new n.EventEmitter), this.onScroll = this._onScroll.event, this.cols = Math.max(e.rawOptions.cols || 0, t.MINIMUM_COLS), this.rows = Math.max(e.rawOptions.rows || 0, t.MINIMUM_ROWS), this.buffers = this.register(new a.BufferSet(e, this));
                    }
                    resize(e, t) {
                        this.cols = e, this.rows = t, this.buffers.resize(e, t), this._onResize.fire({
                            cols: e,
                            rows: t
                        });
                    }
                    reset() {
                        this.buffers.reset(), this.isUserScrolling = !1;
                    }
                    scroll(e, t = !1) {
                        const i = this.buffer;
                        let s;
                        s = this._cachedBlankLine, s && s.length === this.cols && s.getFg(0) === e.fg && s.getBg(0) === e.bg || (s = i.getBlankLine(e, t), this._cachedBlankLine = s), s.isWrapped = t;
                        const r = i.ybase + i.scrollTop, n = i.ybase + i.scrollBottom;
                        if (0 === i.scrollTop) {
                            const e = i.lines.isFull;
                            n === i.lines.length - 1 ? e ? i.lines.recycle().copyFrom(s) : i.lines.push(s.clone()) : i.lines.splice(n + 1, 0, s.clone()), e ? this.isUserScrolling && (i.ydisp = Math.max(i.ydisp - 1, 0)) : (i.ybase++, this.isUserScrolling || i.ydisp++);
                        } else {
                            const e = n - r + 1;
                            i.lines.shiftElements(r + 1, e - 1, -1), i.lines.set(n, s.clone());
                        }
                        this.isUserScrolling || (i.ydisp = i.ybase), this._onScroll.fire(i.ydisp);
                    }
                    scrollLines(e, t, i) {
                        const s = this.buffer;
                        if (e < 0) {
                            if (0 === s.ydisp) return;
                            this.isUserScrolling = !0;
                        } else e + s.ydisp >= s.ybase && (this.isUserScrolling = !1);
                        const r = s.ydisp;
                        s.ydisp = Math.max(Math.min(s.ydisp + e, s.ybase), 0), r !== s.ydisp && (t || this._onScroll.fire(s.ydisp));
                    }
                };
                t.BufferService = c = s([
                    r(0, h.IOptionsService)
                ], c);
            },
            7994: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.CharsetService = void 0, t.CharsetService = class {
                    constructor(){
                        this.glevel = 0, this._charsets = [];
                    }
                    reset() {
                        this.charset = void 0, this._charsets = [], this.glevel = 0;
                    }
                    setgLevel(e) {
                        this.glevel = e, this.charset = this._charsets[e];
                    }
                    setgCharset(e, t) {
                        this._charsets[e] = t, this.glevel === e && (this.charset = t);
                    }
                };
            },
            1753: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.CoreMouseService = void 0;
                const n = i(2585), o = i(8460), a = i(844), h = {
                    NONE: {
                        events: 0,
                        restrict: ()=>!1
                    },
                    X10: {
                        events: 1,
                        restrict: (e)=>4 !== e.button && 1 === e.action && (e.ctrl = !1, e.alt = !1, e.shift = !1, !0)
                    },
                    VT200: {
                        events: 19,
                        restrict: (e)=>32 !== e.action
                    },
                    DRAG: {
                        events: 23,
                        restrict: (e)=>32 !== e.action || 3 !== e.button
                    },
                    ANY: {
                        events: 31,
                        restrict: (e)=>!0
                    }
                };
                function c(e, t) {
                    let i = (e.ctrl ? 16 : 0) | (e.shift ? 4 : 0) | (e.alt ? 8 : 0);
                    return 4 === e.button ? (i |= 64, i |= e.action) : (i |= 3 & e.button, 4 & e.button && (i |= 64), 8 & e.button && (i |= 128), 32 === e.action ? i |= 32 : 0 !== e.action || t || (i |= 3)), i;
                }
                const l = String.fromCharCode, d = {
                    DEFAULT: (e)=>{
                        const t = [
                            c(e, !1) + 32,
                            e.col + 32,
                            e.row + 32
                        ];
                        return t[0] > 255 || t[1] > 255 || t[2] > 255 ? "" : `[M${l(t[0])}${l(t[1])}${l(t[2])}`;
                    },
                    SGR: (e)=>{
                        const t = 0 === e.action && 4 !== e.button ? "m" : "M";
                        return `[<${c(e, !0)};${e.col};${e.row}${t}`;
                    },
                    SGR_PIXELS: (e)=>{
                        const t = 0 === e.action && 4 !== e.button ? "m" : "M";
                        return `[<${c(e, !0)};${e.x};${e.y}${t}`;
                    }
                };
                let _ = t.CoreMouseService = class extends a.Disposable {
                    constructor(e, t){
                        super(), this._bufferService = e, this._coreService = t, this._protocols = {}, this._encodings = {}, this._activeProtocol = "", this._activeEncoding = "", this._lastEvent = null, this._onProtocolChange = this.register(new o.EventEmitter), this.onProtocolChange = this._onProtocolChange.event;
                        for (const e of Object.keys(h))this.addProtocol(e, h[e]);
                        for (const e of Object.keys(d))this.addEncoding(e, d[e]);
                        this.reset();
                    }
                    addProtocol(e, t) {
                        this._protocols[e] = t;
                    }
                    addEncoding(e, t) {
                        this._encodings[e] = t;
                    }
                    get activeProtocol() {
                        return this._activeProtocol;
                    }
                    get areMouseEventsActive() {
                        return 0 !== this._protocols[this._activeProtocol].events;
                    }
                    set activeProtocol(e) {
                        if (!this._protocols[e]) throw new Error(`unknown protocol "${e}"`);
                        this._activeProtocol = e, this._onProtocolChange.fire(this._protocols[e].events);
                    }
                    get activeEncoding() {
                        return this._activeEncoding;
                    }
                    set activeEncoding(e) {
                        if (!this._encodings[e]) throw new Error(`unknown encoding "${e}"`);
                        this._activeEncoding = e;
                    }
                    reset() {
                        this.activeProtocol = "NONE", this.activeEncoding = "DEFAULT", this._lastEvent = null;
                    }
                    triggerMouseEvent(e) {
                        if (e.col < 0 || e.col >= this._bufferService.cols || e.row < 0 || e.row >= this._bufferService.rows) return !1;
                        if (4 === e.button && 32 === e.action) return !1;
                        if (3 === e.button && 32 !== e.action) return !1;
                        if (4 !== e.button && (2 === e.action || 3 === e.action)) return !1;
                        if (e.col++, e.row++, 32 === e.action && this._lastEvent && this._equalEvents(this._lastEvent, e, "SGR_PIXELS" === this._activeEncoding)) return !1;
                        if (!this._protocols[this._activeProtocol].restrict(e)) return !1;
                        const t = this._encodings[this._activeEncoding](e);
                        return t && ("DEFAULT" === this._activeEncoding ? this._coreService.triggerBinaryEvent(t) : this._coreService.triggerDataEvent(t, !0)), this._lastEvent = e, !0;
                    }
                    explainEvents(e) {
                        return {
                            down: !!(1 & e),
                            up: !!(2 & e),
                            drag: !!(4 & e),
                            move: !!(8 & e),
                            wheel: !!(16 & e)
                        };
                    }
                    _equalEvents(e, t, i) {
                        if (i) {
                            if (e.x !== t.x) return !1;
                            if (e.y !== t.y) return !1;
                        } else {
                            if (e.col !== t.col) return !1;
                            if (e.row !== t.row) return !1;
                        }
                        return e.button === t.button && e.action === t.action && e.ctrl === t.ctrl && e.alt === t.alt && e.shift === t.shift;
                    }
                };
                t.CoreMouseService = _ = s([
                    r(0, n.IBufferService),
                    r(1, n.ICoreService)
                ], _);
            },
            6975: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.CoreService = void 0;
                const n = i(1439), o = i(8460), a = i(844), h = i(2585), c = Object.freeze({
                    insertMode: !1
                }), l = Object.freeze({
                    applicationCursorKeys: !1,
                    applicationKeypad: !1,
                    bracketedPasteMode: !1,
                    origin: !1,
                    reverseWraparound: !1,
                    sendFocus: !1,
                    wraparound: !0
                });
                let d = t.CoreService = class extends a.Disposable {
                    constructor(e, t, i){
                        super(), this._bufferService = e, this._logService = t, this._optionsService = i, this.isCursorInitialized = !1, this.isCursorHidden = !1, this._onData = this.register(new o.EventEmitter), this.onData = this._onData.event, this._onUserInput = this.register(new o.EventEmitter), this.onUserInput = this._onUserInput.event, this._onBinary = this.register(new o.EventEmitter), this.onBinary = this._onBinary.event, this._onRequestScrollToBottom = this.register(new o.EventEmitter), this.onRequestScrollToBottom = this._onRequestScrollToBottom.event, this.modes = (0, n.clone)(c), this.decPrivateModes = (0, n.clone)(l);
                    }
                    reset() {
                        this.modes = (0, n.clone)(c), this.decPrivateModes = (0, n.clone)(l);
                    }
                    triggerDataEvent(e, t = !1) {
                        if (this._optionsService.rawOptions.disableStdin) return;
                        const i = this._bufferService.buffer;
                        t && this._optionsService.rawOptions.scrollOnUserInput && i.ybase !== i.ydisp && this._onRequestScrollToBottom.fire(), t && this._onUserInput.fire(), this._logService.debug(`sending data "${e}"`, ()=>e.split("").map((e)=>e.charCodeAt(0))), this._onData.fire(e);
                    }
                    triggerBinaryEvent(e) {
                        this._optionsService.rawOptions.disableStdin || (this._logService.debug(`sending binary "${e}"`, ()=>e.split("").map((e)=>e.charCodeAt(0))), this._onBinary.fire(e));
                    }
                };
                t.CoreService = d = s([
                    r(0, h.IBufferService),
                    r(1, h.ILogService),
                    r(2, h.IOptionsService)
                ], d);
            },
            9074: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DecorationService = void 0;
                const s = i(8055), r = i(8460), n = i(844), o = i(6106);
                let a = 0, h = 0;
                class c extends n.Disposable {
                    get decorations() {
                        return this._decorations.values();
                    }
                    constructor(){
                        super(), this._decorations = new o.SortedList((e)=>e?.marker.line), this._onDecorationRegistered = this.register(new r.EventEmitter), this.onDecorationRegistered = this._onDecorationRegistered.event, this._onDecorationRemoved = this.register(new r.EventEmitter), this.onDecorationRemoved = this._onDecorationRemoved.event, this.register((0, n.toDisposable)(()=>this.reset()));
                    }
                    registerDecoration(e) {
                        if (e.marker.isDisposed) return;
                        const t = new l(e);
                        if (t) {
                            const e = t.marker.onDispose(()=>t.dispose());
                            t.onDispose(()=>{
                                t && (this._decorations.delete(t) && this._onDecorationRemoved.fire(t), e.dispose());
                            }), this._decorations.insert(t), this._onDecorationRegistered.fire(t);
                        }
                        return t;
                    }
                    reset() {
                        for (const e of this._decorations.values())e.dispose();
                        this._decorations.clear();
                    }
                    *getDecorationsAtCell(e, t, i) {
                        let s = 0, r = 0;
                        for (const n of this._decorations.getKeyIterator(t))s = n.options.x ?? 0, r = s + (n.options.width ?? 1), e >= s && e < r && (!i || (n.options.layer ?? "bottom") === i) && (yield n);
                    }
                    forEachDecorationAtCell(e, t, i, s) {
                        this._decorations.forEachByKey(t, (t)=>{
                            a = t.options.x ?? 0, h = a + (t.options.width ?? 1), e >= a && e < h && (!i || (t.options.layer ?? "bottom") === i) && s(t);
                        });
                    }
                }
                t.DecorationService = c;
                class l extends n.Disposable {
                    get isDisposed() {
                        return this._isDisposed;
                    }
                    get backgroundColorRGB() {
                        return null === this._cachedBg && (this.options.backgroundColor ? this._cachedBg = s.css.toColor(this.options.backgroundColor) : this._cachedBg = void 0), this._cachedBg;
                    }
                    get foregroundColorRGB() {
                        return null === this._cachedFg && (this.options.foregroundColor ? this._cachedFg = s.css.toColor(this.options.foregroundColor) : this._cachedFg = void 0), this._cachedFg;
                    }
                    constructor(e){
                        super(), this.options = e, this.onRenderEmitter = this.register(new r.EventEmitter), this.onRender = this.onRenderEmitter.event, this._onDispose = this.register(new r.EventEmitter), this.onDispose = this._onDispose.event, this._cachedBg = null, this._cachedFg = null, this.marker = e.marker, this.options.overviewRulerOptions && !this.options.overviewRulerOptions.position && (this.options.overviewRulerOptions.position = "full");
                    }
                    dispose() {
                        this._onDispose.fire(), super.dispose();
                    }
                }
            },
            4348: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.InstantiationService = t.ServiceCollection = void 0;
                const s = i(2585), r = i(8343);
                class n {
                    constructor(...e){
                        this._entries = new Map;
                        for (const [t, i] of e)this.set(t, i);
                    }
                    set(e, t) {
                        const i = this._entries.get(e);
                        return this._entries.set(e, t), i;
                    }
                    forEach(e) {
                        for (const [t, i] of this._entries.entries())e(t, i);
                    }
                    has(e) {
                        return this._entries.has(e);
                    }
                    get(e) {
                        return this._entries.get(e);
                    }
                }
                t.ServiceCollection = n, t.InstantiationService = class {
                    constructor(){
                        this._services = new n, this._services.set(s.IInstantiationService, this);
                    }
                    setService(e, t) {
                        this._services.set(e, t);
                    }
                    getService(e) {
                        return this._services.get(e);
                    }
                    createInstance(e, ...t) {
                        const i = (0, r.getServiceDependencies)(e).sort((e, t)=>e.index - t.index), s = [];
                        for (const t of i){
                            const i = this._services.get(t.id);
                            if (!i) throw new Error(`[createInstance] ${e.name} depends on UNKNOWN service ${t.id}.`);
                            s.push(i);
                        }
                        const n = i.length > 0 ? i[0].index : t.length;
                        if (t.length !== n) throw new Error(`[createInstance] First service dependency of ${e.name} at position ${n + 1} conflicts with ${t.length} static arguments`);
                        return new e(...[
                            ...t,
                            ...s
                        ]);
                    }
                };
            },
            7866: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.traceCall = t.setTraceLogger = t.LogService = void 0;
                const n = i(844), o = i(2585), a = {
                    trace: o.LogLevelEnum.TRACE,
                    debug: o.LogLevelEnum.DEBUG,
                    info: o.LogLevelEnum.INFO,
                    warn: o.LogLevelEnum.WARN,
                    error: o.LogLevelEnum.ERROR,
                    off: o.LogLevelEnum.OFF
                };
                let h, c = t.LogService = class extends n.Disposable {
                    get logLevel() {
                        return this._logLevel;
                    }
                    constructor(e){
                        super(), this._optionsService = e, this._logLevel = o.LogLevelEnum.OFF, this._updateLogLevel(), this.register(this._optionsService.onSpecificOptionChange("logLevel", ()=>this._updateLogLevel())), h = this;
                    }
                    _updateLogLevel() {
                        this._logLevel = a[this._optionsService.rawOptions.logLevel];
                    }
                    _evalLazyOptionalParams(e) {
                        for(let t = 0; t < e.length; t++)"function" == typeof e[t] && (e[t] = e[t]());
                    }
                    _log(e, t, i) {
                        this._evalLazyOptionalParams(i), e.call(console, (this._optionsService.options.logger ? "" : "xterm.js: ") + t, ...i);
                    }
                    trace(e, ...t) {
                        this._logLevel <= o.LogLevelEnum.TRACE && this._log(this._optionsService.options.logger?.trace.bind(this._optionsService.options.logger) ?? console.log, e, t);
                    }
                    debug(e, ...t) {
                        this._logLevel <= o.LogLevelEnum.DEBUG && this._log(this._optionsService.options.logger?.debug.bind(this._optionsService.options.logger) ?? console.log, e, t);
                    }
                    info(e, ...t) {
                        this._logLevel <= o.LogLevelEnum.INFO && this._log(this._optionsService.options.logger?.info.bind(this._optionsService.options.logger) ?? console.info, e, t);
                    }
                    warn(e, ...t) {
                        this._logLevel <= o.LogLevelEnum.WARN && this._log(this._optionsService.options.logger?.warn.bind(this._optionsService.options.logger) ?? console.warn, e, t);
                    }
                    error(e, ...t) {
                        this._logLevel <= o.LogLevelEnum.ERROR && this._log(this._optionsService.options.logger?.error.bind(this._optionsService.options.logger) ?? console.error, e, t);
                    }
                };
                t.LogService = c = s([
                    r(0, o.IOptionsService)
                ], c), t.setTraceLogger = function(e) {
                    h = e;
                }, t.traceCall = function(e, t, i) {
                    if ("function" != typeof i.value) throw new Error("not supported");
                    const s = i.value;
                    i.value = function(...e) {
                        if (h.logLevel !== o.LogLevelEnum.TRACE) return s.apply(this, e);
                        h.trace(`GlyphRenderer#${s.name}(${e.map((e)=>JSON.stringify(e)).join(", ")})`);
                        const t = s.apply(this, e);
                        return h.trace(`GlyphRenderer#${s.name} return`, t), t;
                    };
                };
            },
            7302: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.OptionsService = t.DEFAULT_OPTIONS = void 0;
                const s = i(8460), r = i(844), n = i(6114);
                t.DEFAULT_OPTIONS = {
                    cols: 80,
                    rows: 24,
                    cursorBlink: !1,
                    cursorStyle: "block",
                    cursorWidth: 1,
                    cursorInactiveStyle: "outline",
                    customGlyphs: !0,
                    drawBoldTextInBrightColors: !0,
                    documentOverride: null,
                    fastScrollModifier: "alt",
                    fastScrollSensitivity: 5,
                    fontFamily: "courier-new, courier, monospace",
                    fontSize: 15,
                    fontWeight: "normal",
                    fontWeightBold: "bold",
                    ignoreBracketedPasteMode: !1,
                    lineHeight: 1,
                    letterSpacing: 0,
                    linkHandler: null,
                    logLevel: "info",
                    logger: null,
                    scrollback: 1e3,
                    scrollOnUserInput: !0,
                    scrollSensitivity: 1,
                    screenReaderMode: !1,
                    smoothScrollDuration: 0,
                    macOptionIsMeta: !1,
                    macOptionClickForcesSelection: !1,
                    minimumContrastRatio: 1,
                    disableStdin: !1,
                    allowProposedApi: !1,
                    allowTransparency: !1,
                    tabStopWidth: 8,
                    theme: {},
                    rescaleOverlappingGlyphs: !1,
                    rightClickSelectsWord: n.isMac,
                    windowOptions: {},
                    windowsMode: !1,
                    windowsPty: {},
                    wordSeparator: " ()[]{}',\"`",
                    altClickMovesCursor: !0,
                    convertEol: !1,
                    termName: "xterm",
                    cancelEvents: !1,
                    overviewRulerWidth: 0
                };
                const o = [
                    "normal",
                    "bold",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900"
                ];
                class a extends r.Disposable {
                    constructor(e){
                        super(), this._onOptionChange = this.register(new s.EventEmitter), this.onOptionChange = this._onOptionChange.event;
                        const i = {
                            ...t.DEFAULT_OPTIONS
                        };
                        for(const t in e)if (t in i) try {
                            const s = e[t];
                            i[t] = this._sanitizeAndValidateOption(t, s);
                        } catch (e) {
                            console.error(e);
                        }
                        this.rawOptions = i, this.options = {
                            ...i
                        }, this._setupOptions(), this.register((0, r.toDisposable)(()=>{
                            this.rawOptions.linkHandler = null, this.rawOptions.documentOverride = null;
                        }));
                    }
                    onSpecificOptionChange(e, t) {
                        return this.onOptionChange((i)=>{
                            i === e && t(this.rawOptions[e]);
                        });
                    }
                    onMultipleOptionChange(e, t) {
                        return this.onOptionChange((i)=>{
                            -1 !== e.indexOf(i) && t();
                        });
                    }
                    _setupOptions() {
                        const e = (e)=>{
                            if (!(e in t.DEFAULT_OPTIONS)) throw new Error(`No option with key "${e}"`);
                            return this.rawOptions[e];
                        }, i = (e, i)=>{
                            if (!(e in t.DEFAULT_OPTIONS)) throw new Error(`No option with key "${e}"`);
                            i = this._sanitizeAndValidateOption(e, i), this.rawOptions[e] !== i && (this.rawOptions[e] = i, this._onOptionChange.fire(e));
                        };
                        for(const t in this.rawOptions){
                            const s = {
                                get: e.bind(this, t),
                                set: i.bind(this, t)
                            };
                            Object.defineProperty(this.options, t, s);
                        }
                    }
                    _sanitizeAndValidateOption(e, i) {
                        switch(e){
                            case "cursorStyle":
                                if (i || (i = t.DEFAULT_OPTIONS[e]), !function(e) {
                                    return "block" === e || "underline" === e || "bar" === e;
                                }(i)) throw new Error(`"${i}" is not a valid value for ${e}`);
                                break;
                            case "wordSeparator":
                                i || (i = t.DEFAULT_OPTIONS[e]);
                                break;
                            case "fontWeight":
                            case "fontWeightBold":
                                if ("number" == typeof i && 1 <= i && i <= 1e3) break;
                                i = o.includes(i) ? i : t.DEFAULT_OPTIONS[e];
                                break;
                            case "cursorWidth":
                                i = Math.floor(i);
                            case "lineHeight":
                            case "tabStopWidth":
                                if (i < 1) throw new Error(`${e} cannot be less than 1, value: ${i}`);
                                break;
                            case "minimumContrastRatio":
                                i = Math.max(1, Math.min(21, Math.round(10 * i) / 10));
                                break;
                            case "scrollback":
                                if ((i = Math.min(i, 4294967295)) < 0) throw new Error(`${e} cannot be less than 0, value: ${i}`);
                                break;
                            case "fastScrollSensitivity":
                            case "scrollSensitivity":
                                if (i <= 0) throw new Error(`${e} cannot be less than or equal to 0, value: ${i}`);
                                break;
                            case "rows":
                            case "cols":
                                if (!i && 0 !== i) throw new Error(`${e} must be numeric, value: ${i}`);
                                break;
                            case "windowsPty":
                                i = i ?? {};
                        }
                        return i;
                    }
                }
                t.OptionsService = a;
            },
            2660: function(e, t, i) {
                var s = this && this.__decorate || function(e, t, i, s) {
                    var r, n = arguments.length, o = n < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                    else for(var a = e.length - 1; a >= 0; a--)(r = e[a]) && (o = (n < 3 ? r(o) : n > 3 ? r(t, i, o) : r(t, i)) || o);
                    return n > 3 && o && Object.defineProperty(t, i, o), o;
                }, r = this && this.__param || function(e, t) {
                    return function(i, s) {
                        t(i, s, e);
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.OscLinkService = void 0;
                const n = i(2585);
                let o = t.OscLinkService = class {
                    constructor(e){
                        this._bufferService = e, this._nextId = 1, this._entriesWithId = new Map, this._dataByLinkId = new Map;
                    }
                    registerLink(e) {
                        const t = this._bufferService.buffer;
                        if (void 0 === e.id) {
                            const i = t.addMarker(t.ybase + t.y), s = {
                                data: e,
                                id: this._nextId++,
                                lines: [
                                    i
                                ]
                            };
                            return i.onDispose(()=>this._removeMarkerFromLink(s, i)), this._dataByLinkId.set(s.id, s), s.id;
                        }
                        const i = e, s = this._getEntryIdKey(i), r = this._entriesWithId.get(s);
                        if (r) return this.addLineToLink(r.id, t.ybase + t.y), r.id;
                        const n = t.addMarker(t.ybase + t.y), o = {
                            id: this._nextId++,
                            key: this._getEntryIdKey(i),
                            data: i,
                            lines: [
                                n
                            ]
                        };
                        return n.onDispose(()=>this._removeMarkerFromLink(o, n)), this._entriesWithId.set(o.key, o), this._dataByLinkId.set(o.id, o), o.id;
                    }
                    addLineToLink(e, t) {
                        const i = this._dataByLinkId.get(e);
                        if (i && i.lines.every((e)=>e.line !== t)) {
                            const e = this._bufferService.buffer.addMarker(t);
                            i.lines.push(e), e.onDispose(()=>this._removeMarkerFromLink(i, e));
                        }
                    }
                    getLinkData(e) {
                        return this._dataByLinkId.get(e)?.data;
                    }
                    _getEntryIdKey(e) {
                        return `${e.id};;${e.uri}`;
                    }
                    _removeMarkerFromLink(e, t) {
                        const i = e.lines.indexOf(t);
                        -1 !== i && (e.lines.splice(i, 1), 0 === e.lines.length && (void 0 !== e.data.id && this._entriesWithId.delete(e.key), this._dataByLinkId.delete(e.id)));
                    }
                };
                t.OscLinkService = o = s([
                    r(0, n.IBufferService)
                ], o);
            },
            8343: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createDecorator = t.getServiceDependencies = t.serviceRegistry = void 0;
                const i = "di$target", s = "di$dependencies";
                t.serviceRegistry = new Map, t.getServiceDependencies = function(e) {
                    return e[s] || [];
                }, t.createDecorator = function(e) {
                    if (t.serviceRegistry.has(e)) return t.serviceRegistry.get(e);
                    const r = function(e, t, n) {
                        if (3 !== arguments.length) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
                        !function(e, t, r) {
                            t[i] === t ? t[s].push({
                                id: e,
                                index: r
                            }) : (t[s] = [
                                {
                                    id: e,
                                    index: r
                                }
                            ], t[i] = t);
                        }(r, e, n);
                    };
                    return r.toString = ()=>e, t.serviceRegistry.set(e, r), r;
                };
            },
            2585: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.IDecorationService = t.IUnicodeService = t.IOscLinkService = t.IOptionsService = t.ILogService = t.LogLevelEnum = t.IInstantiationService = t.ICharsetService = t.ICoreService = t.ICoreMouseService = t.IBufferService = void 0;
                const s = i(8343);
                var r;
                t.IBufferService = (0, s.createDecorator)("BufferService"), t.ICoreMouseService = (0, s.createDecorator)("CoreMouseService"), t.ICoreService = (0, s.createDecorator)("CoreService"), t.ICharsetService = (0, s.createDecorator)("CharsetService"), t.IInstantiationService = (0, s.createDecorator)("InstantiationService"), function(e) {
                    e[e.TRACE = 0] = "TRACE", e[e.DEBUG = 1] = "DEBUG", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.OFF = 5] = "OFF";
                }(r || (t.LogLevelEnum = r = {})), t.ILogService = (0, s.createDecorator)("LogService"), t.IOptionsService = (0, s.createDecorator)("OptionsService"), t.IOscLinkService = (0, s.createDecorator)("OscLinkService"), t.IUnicodeService = (0, s.createDecorator)("UnicodeService"), t.IDecorationService = (0, s.createDecorator)("DecorationService");
            },
            1480: (e, t, i)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.UnicodeService = void 0;
                const s = i(8460), r = i(225);
                class n {
                    static extractShouldJoin(e) {
                        return 0 != (1 & e);
                    }
                    static extractWidth(e) {
                        return e >> 1 & 3;
                    }
                    static extractCharKind(e) {
                        return e >> 3;
                    }
                    static createPropertyValue(e, t, i = !1) {
                        return (16777215 & e) << 3 | (3 & t) << 1 | (i ? 1 : 0);
                    }
                    constructor(){
                        this._providers = Object.create(null), this._active = "", this._onChange = new s.EventEmitter, this.onChange = this._onChange.event;
                        const e = new r.UnicodeV6;
                        this.register(e), this._active = e.version, this._activeProvider = e;
                    }
                    dispose() {
                        this._onChange.dispose();
                    }
                    get versions() {
                        return Object.keys(this._providers);
                    }
                    get activeVersion() {
                        return this._active;
                    }
                    set activeVersion(e) {
                        if (!this._providers[e]) throw new Error(`unknown Unicode version "${e}"`);
                        this._active = e, this._activeProvider = this._providers[e], this._onChange.fire(e);
                    }
                    register(e) {
                        this._providers[e.version] = e;
                    }
                    wcwidth(e) {
                        return this._activeProvider.wcwidth(e);
                    }
                    getStringCellWidth(e) {
                        let t = 0, i = 0;
                        const s = e.length;
                        for(let r = 0; r < s; ++r){
                            let o = e.charCodeAt(r);
                            if (55296 <= o && o <= 56319) {
                                if (++r >= s) return t + this.wcwidth(o);
                                const i = e.charCodeAt(r);
                                56320 <= i && i <= 57343 ? o = 1024 * (o - 55296) + i - 56320 + 65536 : t += this.wcwidth(i);
                            }
                            const a = this.charProperties(o, i);
                            let h = n.extractWidth(a);
                            n.extractShouldJoin(a) && (h -= n.extractWidth(i)), t += h, i = a;
                        }
                        return t;
                    }
                    charProperties(e, t) {
                        return this._activeProvider.charProperties(e, t);
                    }
                }
                t.UnicodeService = n;
            }
        }, t = {};
        function i(s) {
            var r = t[s];
            if (void 0 !== r) return r.exports;
            var n = t[s] = {
                exports: {}
            };
            return e[s].call(n.exports, n, n.exports, i), n.exports;
        }
        var s = {};
        return (()=>{
            var e = s;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.Terminal = void 0;
            const t = i(9042), r = i(3236), n = i(844), o = i(5741), a = i(8285), h = i(7975), c = i(7090), l = [
                "cols",
                "rows"
            ];
            class d extends n.Disposable {
                constructor(e){
                    super(), this._core = this.register(new r.Terminal(e)), this._addonManager = this.register(new o.AddonManager), this._publicOptions = {
                        ...this._core.options
                    };
                    const t = (e)=>this._core.options[e], i = (e, t)=>{
                        this._checkReadonlyOptions(e), this._core.options[e] = t;
                    };
                    for(const e in this._core.options){
                        const s = {
                            get: t.bind(this, e),
                            set: i.bind(this, e)
                        };
                        Object.defineProperty(this._publicOptions, e, s);
                    }
                }
                _checkReadonlyOptions(e) {
                    if (l.includes(e)) throw new Error(`Option "${e}" can only be set in the constructor`);
                }
                _checkProposedApi() {
                    if (!this._core.optionsService.rawOptions.allowProposedApi) throw new Error("You must set the allowProposedApi option to true to use proposed API");
                }
                get onBell() {
                    return this._core.onBell;
                }
                get onBinary() {
                    return this._core.onBinary;
                }
                get onCursorMove() {
                    return this._core.onCursorMove;
                }
                get onData() {
                    return this._core.onData;
                }
                get onKey() {
                    return this._core.onKey;
                }
                get onLineFeed() {
                    return this._core.onLineFeed;
                }
                get onRender() {
                    return this._core.onRender;
                }
                get onResize() {
                    return this._core.onResize;
                }
                get onScroll() {
                    return this._core.onScroll;
                }
                get onSelectionChange() {
                    return this._core.onSelectionChange;
                }
                get onTitleChange() {
                    return this._core.onTitleChange;
                }
                get onWriteParsed() {
                    return this._core.onWriteParsed;
                }
                get element() {
                    return this._core.element;
                }
                get parser() {
                    return this._parser || (this._parser = new h.ParserApi(this._core)), this._parser;
                }
                get unicode() {
                    return this._checkProposedApi(), new c.UnicodeApi(this._core);
                }
                get textarea() {
                    return this._core.textarea;
                }
                get rows() {
                    return this._core.rows;
                }
                get cols() {
                    return this._core.cols;
                }
                get buffer() {
                    return this._buffer || (this._buffer = this.register(new a.BufferNamespaceApi(this._core))), this._buffer;
                }
                get markers() {
                    return this._checkProposedApi(), this._core.markers;
                }
                get modes() {
                    const e = this._core.coreService.decPrivateModes;
                    let t = "none";
                    switch(this._core.coreMouseService.activeProtocol){
                        case "X10":
                            t = "x10";
                            break;
                        case "VT200":
                            t = "vt200";
                            break;
                        case "DRAG":
                            t = "drag";
                            break;
                        case "ANY":
                            t = "any";
                    }
                    return {
                        applicationCursorKeysMode: e.applicationCursorKeys,
                        applicationKeypadMode: e.applicationKeypad,
                        bracketedPasteMode: e.bracketedPasteMode,
                        insertMode: this._core.coreService.modes.insertMode,
                        mouseTrackingMode: t,
                        originMode: e.origin,
                        reverseWraparoundMode: e.reverseWraparound,
                        sendFocusMode: e.sendFocus,
                        wraparoundMode: e.wraparound
                    };
                }
                get options() {
                    return this._publicOptions;
                }
                set options(e) {
                    for(const t in e)this._publicOptions[t] = e[t];
                }
                blur() {
                    this._core.blur();
                }
                focus() {
                    this._core.focus();
                }
                input(e, t = !0) {
                    this._core.input(e, t);
                }
                resize(e, t) {
                    this._verifyIntegers(e, t), this._core.resize(e, t);
                }
                open(e) {
                    this._core.open(e);
                }
                attachCustomKeyEventHandler(e) {
                    this._core.attachCustomKeyEventHandler(e);
                }
                attachCustomWheelEventHandler(e) {
                    this._core.attachCustomWheelEventHandler(e);
                }
                registerLinkProvider(e) {
                    return this._core.registerLinkProvider(e);
                }
                registerCharacterJoiner(e) {
                    return this._checkProposedApi(), this._core.registerCharacterJoiner(e);
                }
                deregisterCharacterJoiner(e) {
                    this._checkProposedApi(), this._core.deregisterCharacterJoiner(e);
                }
                registerMarker(e = 0) {
                    return this._verifyIntegers(e), this._core.registerMarker(e);
                }
                registerDecoration(e) {
                    return this._checkProposedApi(), this._verifyPositiveIntegers(e.x ?? 0, e.width ?? 0, e.height ?? 0), this._core.registerDecoration(e);
                }
                hasSelection() {
                    return this._core.hasSelection();
                }
                select(e, t, i) {
                    this._verifyIntegers(e, t, i), this._core.select(e, t, i);
                }
                getSelection() {
                    return this._core.getSelection();
                }
                getSelectionPosition() {
                    return this._core.getSelectionPosition();
                }
                clearSelection() {
                    this._core.clearSelection();
                }
                selectAll() {
                    this._core.selectAll();
                }
                selectLines(e, t) {
                    this._verifyIntegers(e, t), this._core.selectLines(e, t);
                }
                dispose() {
                    super.dispose();
                }
                scrollLines(e) {
                    this._verifyIntegers(e), this._core.scrollLines(e);
                }
                scrollPages(e) {
                    this._verifyIntegers(e), this._core.scrollPages(e);
                }
                scrollToTop() {
                    this._core.scrollToTop();
                }
                scrollToBottom() {
                    this._core.scrollToBottom();
                }
                scrollToLine(e) {
                    this._verifyIntegers(e), this._core.scrollToLine(e);
                }
                clear() {
                    this._core.clear();
                }
                write(e, t) {
                    this._core.write(e, t);
                }
                writeln(e, t) {
                    this._core.write(e), this._core.write("\r\n", t);
                }
                paste(e) {
                    this._core.paste(e);
                }
                refresh(e, t) {
                    this._verifyIntegers(e, t), this._core.refresh(e, t);
                }
                reset() {
                    this._core.reset();
                }
                clearTextureAtlas() {
                    this._core.clearTextureAtlas();
                }
                loadAddon(e) {
                    this._addonManager.loadAddon(this, e);
                }
                static get strings() {
                    return t;
                }
                _verifyIntegers(...e) {
                    for (const t of e)if (t === 1 / 0 || isNaN(t) || t % 1 != 0) throw new Error("This API only accepts integers");
                }
                _verifyPositiveIntegers(...e) {
                    for (const t of e)if (t && (t === 1 / 0 || isNaN(t) || t % 1 != 0 || t < 0)) throw new Error("This API only accepts positive integers");
                }
            }
            e.Terminal = d;
        })(), s;
    })());

},{"4ff5810b0c3ba18e":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"bDe1j":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(self, ()=>(()=>{
        "use strict";
        var e = {};
        return (()=>{
            var t = e;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FitAddon = void 0, t.FitAddon = class {
                activate(e) {
                    this._terminal = e;
                }
                dispose() {}
                fit() {
                    const e = this.proposeDimensions();
                    if (!e || !this._terminal || isNaN(e.cols) || isNaN(e.rows)) return;
                    const t = this._terminal._core;
                    this._terminal.rows === e.rows && this._terminal.cols === e.cols || (t._renderService.clear(), this._terminal.resize(e.cols, e.rows));
                }
                proposeDimensions() {
                    if (!this._terminal) return;
                    if (!this._terminal.element || !this._terminal.element.parentElement) return;
                    const e = this._terminal._core, t = e._renderService.dimensions;
                    if (0 === t.css.cell.width || 0 === t.css.cell.height) return;
                    const r = 0 === this._terminal.options.scrollback ? 0 : e.viewport.scrollBarWidth, i = window.getComputedStyle(this._terminal.element.parentElement), o = parseInt(i.getPropertyValue("height")), s = Math.max(0, parseInt(i.getPropertyValue("width"))), n = window.getComputedStyle(this._terminal.element), l = o - (parseInt(n.getPropertyValue("padding-top")) + parseInt(n.getPropertyValue("padding-bottom"))), a = s - (parseInt(n.getPropertyValue("padding-right")) + parseInt(n.getPropertyValue("padding-left"))) - r;
                    return {
                        cols: Math.max(2, Math.floor(a / t.css.cell.width)),
                        rows: Math.max(1, Math.floor(l / t.css.cell.height))
                    };
                }
            };
        })(), e;
    })());

},{}]},["dZI1r","jeorp"], "jeorp", "parcelRequiree6cf")

//# sourceMappingURL=index.b7a05eb9.js.map
