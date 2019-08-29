webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-visualizer></app-visualizer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizer_visualizer_component__ = __webpack_require__("../../../../../src/app/visualizer/visualizer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_ace_editor__ = __webpack_require__("../../../../ng2-ace-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__visualizer_visualizer_component__["a" /* VisualizerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ng2_ace_editor__["a" /* AceEditorModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/visualizer/default-text.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CODE_STUB; });
var CODE_STUB = "\nfunction fibonacci(recur, n) {\n    if(n <= 2) return 1\n    // make recursive calls with recur(...args)\n    return recur(n - 1) + recur(n - 2)\n}\n\n// export your function\nentrypoint = fibonacci\n";


/***/ }),

/***/ "../../../../../src/app/visualizer/visualizer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n\n  <div id=\"main-wrapper\">\n\n    <div id=\"code-panel\">\n\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input type=\"text\" #argStringInput class=\"form-control\" name=\"\" placeholder=\"Enter JS Arguments..\" [(ngModel)]=\"args\">\n          <span class=\"input-group-btn\">\n            <button (click)=\"submitCode(argStringInput.value, text)\" type=\"submit\" class=\"btn btn-primary\">\n              <i class=\"icon wb-upload\"></i> Submit Code </button>\n          </span>\n        </div>\n      </div>\n\n      <div ace-editor\n           [(text)]=\"text\"\n           mode=\"javascript\"\n           style=\"height: 600px; font-size: 16px\">\n      </div>\n\n      <div class=\"example\">\n        <button (click)=\"saveSnippet()\" type=\"button\" class=\"btn btn-primary\">\n          <i class=\"icon fa-save\"></i> Save Snippet</button>\n\n        <button (click)=\"loadSnippet()\" type=\"button\" class=\"btn btn-primary\">\n          <i class=\"icon fa-folder-open\"></i> Load Snippet</button>\n      </div>\n    </div>\n\n    <div id=\"viz-panel\">\n\n      <div id=\"viz-wrapper\">\n\n        <div id=\"graph-panel\">\n          <div id=\"graph-canvas\" style=\"height: 100% !important;\"></div>\n        </div>\n\n        <div id=\"controls-panel\">\n\n          <div id=\"player-speed\">\n            <input type=\"number\" [(ngModel)]=\"speed\" class=\"form-control player-speed-input\">\n          </div>\n\n          <div id=\"controls-wrapper\">\n\n\n            <button *ngIf=\"shouldShowPlayButton()\" (click)=\"play()\" type=\"button\" class=\"btn btn-floating btn-success\" title=\"play\">\n              <i class=\"icon fa-play\"></i></button>\n\n            <button *ngIf=\"player?.playing\" (click)=\"player.pause()\" type=\"button\" class=\"btn btn-floating btn-danger\" title=\"stop\">\n              <i class=\"icon fa-pause\"></i></button>\n\n            <button *ngIf=\"player\" (click)=\"player.startOver()\" type=\"button\" class=\"btn btn-floating btn-warning\" title=\"start over\">\n              <i class=\"icon fa-refresh\"></i></button>\n\n            <button *ngIf=\"player\" (click)=\"player.back()\" type=\"button\" class=\"btn btn-floating btn-primary\" title=\"step backward\">\n              <i class=\"icon fa-angle-double-left\"></i></button>\n\n            <button *ngIf=\"player\" (click)=\"player.forward()\" type=\"button\" class=\"btn btn-floating btn-primary\" title=\"step forward\">\n              <i class=\"icon fa-angle-double-right\"></i></button>\n\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n\n\n  <!--<div class=\"container-fluid\">\n\n    <div class=\"row\">\n\n      <div class=\"col-4\">\n      </div>\n\n      <div class=\"col-8\">\n\n        <div style=\"background: white\">\n\n          <div id=\"visualizer-container\" style=\"height: 700px;\"></div>\n\n          <div style=\"display: flex; justify-content: center; padding: 10px\">\n            <button (click)=\"player.play()\" type=\"button\" class=\"btn btn-floating btn-success\" title=\"play\">\n              <i class=\"icon fa-play\"></i></button>\n\n            <button (click)=\"player.pause()\" type=\"button\" class=\"btn btn-floating btn-danger\" title=\"stop\">\n              <i class=\"icon fa-pause\"></i></button>\n\n            <button (click)=\"player.back()\" type=\"button\" class=\"btn btn-floating btn-danger\" title=\"step backward\">\n              <i class=\"icon fa-angle-double-left\"></i></button>\n\n            <button (click)=\"player.forward()\" type=\"button\" class=\"btn btn-floating btn-primary\" title=\"step forward\">\n              <i class=\"icon fa-angle-double-right\"></i></button>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n  </div>-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/visualizer/visualizer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n  margin: 0;\n  padding: 0; }\n\n.page {\n  height: 100%; }\n\n#visualizer-container {\n  max-width: 100% !important; }\n\n#main-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  min-height: 100%; }\n\n/* LAYER ONE */\n\n#code-panel {\n  -ms-flex-preferred-size: 30%;\n      flex-basis: 30%;\n  background: #535f7d;\n  height: 100%;\n  padding: 20px;\n  min-width: 500px; }\n\n#viz-panel {\n  -ms-flex-preferred-size: 70%;\n      flex-basis: 70%;\n  background: \"black\";\n  height: 100%; }\n\n#viz-wrapper {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n#graph-panel {\n  background: \"black\";\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: 100px; }\n\n#controls-panel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px;\n  background: #3e4b60; }\n\n#player-speed {\n  max-width: 100px;\n  margin-top: auto;\n  margin-bottom: auto; }\n\n#controls-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 5;\n      -ms-flex-positive: 5;\n          flex-grow: 5;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n#controls-wrapper button {\n    margin-right: 10px;\n    margin-left: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/visualizer/visualizer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_app_graph_AppGraph__ = __webpack_require__("../../../../../src/lib/app-graph/AppGraph.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_video_player_VideoPlayer__ = __webpack_require__("../../../../../src/lib/video-player/VideoPlayer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_recursiviz_FrameStream__ = __webpack_require__("../../../../../src/lib/recursiviz/FrameStream.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_recursiviz_TreeSpy__ = __webpack_require__("../../../../../src/lib/recursiviz/TreeSpy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_recursiviz_RecursiViz__ = __webpack_require__("../../../../../src/lib/recursiviz/RecursiViz.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__default_text__ = __webpack_require__("../../../../../src/app/visualizer/default-text.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VisualizerComponent = /** @class */ (function () {
    function VisualizerComponent() {
        this.text = __WEBPACK_IMPORTED_MODULE_7__default_text__["a" /* CODE_STUB */];
        this.args = '[ 5 ]';
        this._speed = 200;
    }
    Object.defineProperty(VisualizerComponent.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value;
            if (this.player !== undefined) {
                this.player.speed = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    VisualizerComponent.prototype.ngOnInit = function () {
    };
    VisualizerComponent.prototype.play = function () {
        if (this.player === undefined) {
            this.submitCode();
            return;
        }
        this.player.play();
    };
    VisualizerComponent.prototype.initPlayer = function () {
        var _this = this;
        this.player = new __WEBPACK_IMPORTED_MODULE_2__lib_video_player_VideoPlayer__["a" /* VideoPlayer */](new __WEBPACK_IMPORTED_MODULE_1__lib_app_graph_AppGraph__["a" /* AppGraph */]('graph-canvas'));
        this.player.speed = this.speed;
        var fs = new __WEBPACK_IMPORTED_MODULE_3__lib_recursiviz_FrameStream__["a" /* FrameStream */]();
        var ts = new __WEBPACK_IMPORTED_MODULE_4__lib_recursiviz_TreeSpy__["a" /* TreeSpy */](fs);
        this.rv = new __WEBPACK_IMPORTED_MODULE_5__lib_recursiviz_RecursiViz__["a" /* RecursiViz */](ts);
        fs.frames$.subscribe(function (frame) { return _this.player.addFrame(frame); });
    };
    VisualizerComponent.prototype.submitCode = function () {
        var argString = this.args;
        var codeString = this.text;
        this.initPlayer();
        if (argString.trim() === '') {
            argString = '[]';
        }
        var entrypoint;
        eval(codeString);
        var _args = eval(argString);
        if (!entrypoint) {
            return alert('No function exported!');
        }
        if (!Array.isArray(_args)) {
            return alert('Invalid args!');
        }
        this.rv.visualize(entrypoint, _args);
        this.player.play();
    };
    VisualizerComponent.prototype.saveSnippet = function () {
        var key = prompt('Enter the snippet key: ');
        localStorage[key] = this.text;
        alert('Saved!');
    };
    VisualizerComponent.prototype.loadSnippet = function () {
        var key = prompt('Enter the snippet key: ');
        var snippet = localStorage[key];
        if (!snippet) {
            return alert('No snippet found!');
        }
        this.text = snippet;
    };
    VisualizerComponent.prototype.shouldShowPlayButton = function () {
        if (this.player === undefined)
            return true;
        return !this.player.playing;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('editor'),
        __metadata("design:type", Object)
    ], VisualizerComponent.prototype, "editor", void 0);
    VisualizerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-visualizer',
            template: __webpack_require__("../../../../../src/app/visualizer/visualizer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/visualizer/visualizer.component.scss")]
        })
    ], VisualizerComponent);
    return VisualizerComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/lib/app-graph/AppGraph.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppGraph; });
var treeOptions = {
    edges: {
        smooth: {
            type: 'cubicBezier',
            forceDirection: 'vertical',
            roundness: 0.4
        }
    },
    layout: {
        hierarchical: {
            direction: 'UD'
        }
    },
    physics: false
};
var AppGraph = /** @class */ (function () {
    function AppGraph(containerID) {
        this.data = {
            nodes: new vis.DataSet(),
            edges: new vis.DataSet()
        };
        this.networkGraph = new vis.Network(document.getElementById(containerID), this.data, treeOptions);
    }
    AppGraph.prototype.dispatch = function (event) {
        switch (event.type) {
            case 'create':
                this.data.nodes.add(event.node);
                if (event.edge)
                    this.data.edges.add(event.edge);
                break;
            case 'edit':
                this.data.nodes.update(event.node);
                break;
        }
    };
    AppGraph.prototype.undo = function (event) {
        switch (event.type) {
            case 'create':
                this.data.nodes.remove(event.node.id);
                if (event.edge)
                    this.data.edges.remove(event.edge.id);
                break;
            case 'edit':
                this.data.nodes.update(event.old);
                break;
        }
    };
    return AppGraph;
}());



/***/ }),

/***/ "../../../../../src/lib/recursiviz/FrameStream.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrameStream; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var FrameStream = /** @class */ (function () {
    function FrameStream() {
        this.changes$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.frames$ = this.changes$
            .asObservable()
            .map(this.convertToGraph);
    }
    // TODO: recursive copy
    FrameStream.prototype.convertToGraph = function (data) {
        return __assign({}, data);
    };
    return FrameStream;
}());



/***/ }),

/***/ "../../../../../src/lib/recursiviz/RecursiViz.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecursiViz; });
var RecursiViz = /** @class */ (function () {
    function RecursiViz(treeSpy) {
        this.treeSpy = treeSpy;
    }
    RecursiViz.prototype.visualize = function (myRecursiveFunction) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.func = myRecursiveFunction;
        this.recurse.apply(this, args);
    };
    RecursiViz.prototype.recurse = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var node = this.treeSpy.onCall({ args: args });
        var result = this.func.apply(this, [this.recurse.bind(this)].concat(args));
        this.treeSpy.onEval({ node: node, value: result });
        return result;
    };
    return RecursiViz;
}());



/***/ }),

/***/ "../../../../../src/lib/recursiviz/TreeSpy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeSpy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var id = 0;
var edgeId = 0;
function createNode(node, edge) {
    return {
        type: 'create',
        node: node,
        edge: edge
    };
}
function editNode(old, node) {
    return {
        type: 'edit',
        old: old,
        node: node
    };
}
var TreeSpy = /** @class */ (function () {
    function TreeSpy(frameStream) {
        this.frameStream = frameStream;
        this.callStack = [];
    }
    TreeSpy.prototype.onCall = function (_a) {
        var args = _a.args;
        var node = this.defaultNode(args.join(', '));
        var edge = this.makeParentEdge(node);
        this.callStack.push(node.id);
        this.frameStream.changes$.next(createNode(node, edge));
        return node;
    };
    TreeSpy.prototype.onEval = function (_a) {
        var node = _a.node, value = _a.value;
        var old = __assign({}, node);
        var newNode = __assign({}, node);
        newNode.label += ' => ' + value;
        newNode.color = {
            background: 'lightgreen',
            border: 'black'
        };
        this.frameStream.changes$.next(editNode(old, newNode));
        this.callStack.pop();
    };
    TreeSpy.prototype.defaultNode = function (label) {
        return {
            id: ++id,
            level: this.callStack.length,
            color: {
                background: 'pink',
                border: 'black'
            },
            shape: 'box',
            label: label
        };
    };
    TreeSpy.prototype.makeParentEdge = function (node) {
        if (this.callStack.length <= 0)
            return;
        return {
            id: ++edgeId,
            from: this.callStack[this.callStack.length - 1],
            to: node.id
        };
    };
    return TreeSpy;
}());



/***/ }),

/***/ "../../../../../src/lib/video-player/VideoPlayer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");


var VideoPlayer = /** @class */ (function () {
    function VideoPlayer(graph) {
        this.graph = graph;
        this.speed = 200;
        this.playDirection = 1;
        this.curFrame = 0;
        this.frames = [];
    }
    VideoPlayer.prototype.addFrame = function (frame) {
        this.frames.push(frame);
        if (this.frames.length === 1)
            this.forward();
    };
    VideoPlayer.prototype.clearFrames = function () {
        this.frames = [];
        this.curFrame = 0;
    };
    VideoPlayer.prototype.play = function () {
        this.playDirection = 1;
        this.animate();
    };
    VideoPlayer.prototype.startOver = function () {
        while (this.curFrame > 1)
            this.back();
    };
    VideoPlayer.prototype.rewind = function () {
        this.playDirection = -1;
        this.animate();
    };
    VideoPlayer.prototype.pause = function () {
        this.playing = false;
    };
    VideoPlayer.prototype.animate = function () {
        var _this = this;
        if (this.playing)
            return;
        this.playing = true;
        Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_interval__["a" /* interval */])(this.speed)
            .takeWhile(function (_) { return _this.playing; })
            .subscribe(function (_) {
            if (_this.playDirection > 0)
                _this.forward();
            else
                _this.back();
            if (_this.curFrame === 1 || _this.curFrame === _this.frames.length)
                _this.playing = false;
        });
    };
    VideoPlayer.prototype.forward = function () {
        if (this.curFrame === this.frames.length)
            return;
        event = this.frames[this.curFrame++];
        this.graph.dispatch(event);
    };
    VideoPlayer.prototype.back = function () {
        if (this.curFrame <= 1)
            return;
        event = this.frames[--this.curFrame];
        this.graph.undo(event);
    };
    return VideoPlayer;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ace_builds_webpack_resolver__ = __webpack_require__("../../../../ace-builds/webpack-resolver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ace_builds_webpack_resolver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ace_builds_webpack_resolver__);




// Needed to resolve ace editor themes and modes.

if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map