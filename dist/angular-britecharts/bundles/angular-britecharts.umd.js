(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('d3-selection'), require('britecharts/dist/umd/colors.min'), require('britecharts/dist/umd/miniTooltip.min'), require('britecharts/dist/umd/tooltip.min'), require('rxjs/operators'), require('@angular/common'), require('britecharts/dist/umd/bar.min'), require('britecharts/dist/umd/donut.min'), require('britecharts/dist/umd/legend.min'), require('britecharts/dist/umd/line.min'), require('britecharts/dist/umd/groupedBar.min'), require('britecharts/dist/umd/scatterPlot.min'), require('britecharts/dist/umd/brush.min'), require('britecharts/dist/umd/bullet.min'), require('britecharts/dist/umd/heatmap.min'), require('britecharts/dist/umd/sparkline.min'), require('britecharts/dist/umd/stackedArea.min'), require('britecharts/dist/umd/stackedBar.min'), require('britecharts/dist/umd/step.min')) :
    typeof define === 'function' && define.amd ? define('angular-britecharts', ['exports', '@angular/core', 'rxjs', 'd3-selection', 'britecharts/dist/umd/colors.min', 'britecharts/dist/umd/miniTooltip.min', 'britecharts/dist/umd/tooltip.min', 'rxjs/operators', '@angular/common', 'britecharts/dist/umd/bar.min', 'britecharts/dist/umd/donut.min', 'britecharts/dist/umd/legend.min', 'britecharts/dist/umd/line.min', 'britecharts/dist/umd/groupedBar.min', 'britecharts/dist/umd/scatterPlot.min', 'britecharts/dist/umd/brush.min', 'britecharts/dist/umd/bullet.min', 'britecharts/dist/umd/heatmap.min', 'britecharts/dist/umd/sparkline.min', 'britecharts/dist/umd/stackedArea.min', 'britecharts/dist/umd/stackedBar.min', 'britecharts/dist/umd/step.min'], factory) :
    (global = global || self, factory(global['angular-britecharts'] = {}, global.ng.core, global.rxjs, global.d3Selection, global.colors, global.miniTooltip, global.tooltip, global.rxjs.operators, global.ng.common, global.chart, global.chart$1, global.chart$2, global.chart$3, global.chart$4, global.chart$5, global.chart$6, global.chart$7, global.chart$8, global.chart$9, global.chart$a, global.chart$b, global.chart$c));
}(this, (function (exports, core, rxjs, d3Selection, colors, miniTooltip, tooltip, operators, common, chart, chart$1, chart$2, chart$3, chart$4, chart$5, chart$6, chart$7, chart$8, chart$9, chart$a, chart$b, chart$c) { 'use strict';

    colors = colors && colors.hasOwnProperty('default') ? colors['default'] : colors;
    miniTooltip = miniTooltip && miniTooltip.hasOwnProperty('default') ? miniTooltip['default'] : miniTooltip;
    tooltip = tooltip && tooltip.hasOwnProperty('default') ? tooltip['default'] : tooltip;
    chart = chart && chart.hasOwnProperty('default') ? chart['default'] : chart;
    chart$1 = chart$1 && chart$1.hasOwnProperty('default') ? chart$1['default'] : chart$1;
    chart$2 = chart$2 && chart$2.hasOwnProperty('default') ? chart$2['default'] : chart$2;
    chart$3 = chart$3 && chart$3.hasOwnProperty('default') ? chart$3['default'] : chart$3;
    chart$4 = chart$4 && chart$4.hasOwnProperty('default') ? chart$4['default'] : chart$4;
    chart$5 = chart$5 && chart$5.hasOwnProperty('default') ? chart$5['default'] : chart$5;
    chart$6 = chart$6 && chart$6.hasOwnProperty('default') ? chart$6['default'] : chart$6;
    chart$7 = chart$7 && chart$7.hasOwnProperty('default') ? chart$7['default'] : chart$7;
    chart$8 = chart$8 && chart$8.hasOwnProperty('default') ? chart$8['default'] : chart$8;
    chart$9 = chart$9 && chart$9.hasOwnProperty('default') ? chart$9['default'] : chart$9;
    chart$a = chart$a && chart$a.hasOwnProperty('default') ? chart$a['default'] : chart$a;
    chart$b = chart$b && chart$b.hasOwnProperty('default') ? chart$b['default'] : chart$b;
    chart$c = chart$c && chart$c.hasOwnProperty('default') ? chart$c['default'] : chart$c;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ChartType = {
        Bar: 'bar',
        Brush: 'brush',
        Bullet: 'bullet',
        Donut: 'donut',
        GroupedBar: 'groupedBar',
        Heatmap: 'headmap',
        Legend: 'legend',
        Line: 'line',
        ScatterPlot: 'scatterPlot',
        Sparkline: 'sparkline',
        StackedArea: 'stackedArea',
        StackedBar: 'stackedBar',
        Step: 'step',
    };
    /** @enum {string} */
    var ChartGrid = {
        Horizontal: 'horizontal',
        Vertical: 'vertical',
        Full: 'full',
    };
    /** @enum {string} */
    var ChartDateLabel = {
        FullDate: 'fullDate',
    };
    /** @enum {string} */
    var ChartLineCurve = {
        Basis: 'basis',
        Linear: 'linear',
    };
    /**
     * @record
     */
    function ChartProperties() { }
    if (false) {
        /** @type {?|undefined} */
        ChartProperties.prototype.aspectRatio;
        /** @type {?|undefined} */
        ChartProperties.prototype.dateLabel;
        /** @type {?|undefined} */
        ChartProperties.prototype.lineCurve;
        /** @type {?|undefined} */
        ChartProperties.prototype.grid;
        /** @type {?} */
        ChartProperties.prototype.margin;
    }
    /**
     * @record
     */
    function ChartEvents() { }
    if (false) {
        /** @type {?|undefined} */
        ChartEvents.prototype.click;
    }
    /**
     * @record
     */
    function ChartConfig() { }
    if (false) {
        /** @type {?|undefined} */
        ChartConfig.prototype.properties;
        /** @type {?|undefined} */
        ChartConfig.prototype.events;
        /** @type {?|undefined} */
        ChartConfig.prototype.click;
        /** @type {?|undefined} */
        ChartConfig.prototype.colors;
        /** @type {?|undefined} */
        ChartConfig.prototype.sizeRelativeToContainerWidth;
        /** @type {?|undefined} */
        ChartConfig.prototype.tooltip;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChartBaseComponent = /** @class */ (function () {
        function ChartBaseComponent(elementRef) {
            var _this = this;
            this.ready = new core.EventEmitter();
            this.chartClick = new core.EventEmitter();
            this.canceller = new rxjs.Subject();
            this.isObject = (/**
             * @param {?} obj
             * @return {?}
             */
            function (obj) { return !!obj && typeof obj === 'object' && !Array.isArray(obj); });
            rxjs.fromEvent(window, 'resize')
                .pipe(operators.debounceTime(250), operators.takeUntil(this.canceller)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.drawChart();
            }));
            this.el = elementRef.nativeElement;
            this.container = d3Selection.select(this.el);
        }
        /**
         * @return {?}
         */
        ChartBaseComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.canceller.next();
        };
        /**
         * @return {?}
         */
        ChartBaseComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.exportAsImageEvt) {
                this.exportAsImageEvt.subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    _this.chart.exportChart(data.filename, data.title);
                }));
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        ChartBaseComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.loading) {
                if (changes.loading.currentValue) {
                    if (this.chart.loadingState instanceof Function) {
                        this.container.html(this.chart.loadingState());
                    }
                    this.ready.emit(true);
                    return;
                }
                else {
                    this.container.html('');
                }
            }
            if (this.chartConfig || this.type && (changes.data)) {
                this.drawChart();
            }
        };
        /**
         * @return {?}
         */
        ChartBaseComponent.prototype.drawChart = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var chartContainer = this.container = d3Selection.select(this.el);
            /** @type {?} */
            var containerWidth = chartContainer.node() ? ((/** @type {?} */ (chartContainer.node()))).getBoundingClientRect().width : false;
            var _a = this, chart = _a.chart, chartConfig = _a.chartConfig;
            if (containerWidth) {
                // Set the container width to a standar value. If width is passed in the properties it is going to be
                // overriden later.
                chart.width(containerWidth);
                if (chart.shouldReverseColorList instanceof Function) {
                    chart.shouldReverseColorList(false);
                }
                if (this.isObject(chartConfig.properties)) {
                    Object.entries(chartConfig.properties).forEach((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    function (_a) {
                        var _b = __read(_a, 2), option = _b[0], value = _b[1];
                        if (chart[option] instanceof Function) {
                            chart[option](value);
                        }
                    }));
                }
                // If the size of some property must be set relative to the container width it must be sent in an
                // object name 'sizeRelativeToContainerWidth' containing the property to set as key and the ratio to the
                // container's width as value.
                if (this.isObject(chartConfig.sizeRelativeToContainerWidth)) {
                    Object.entries(chartConfig.sizeRelativeToContainerWidth).forEach((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    function (_a) {
                        var _b = __read(_a, 2), option = _b[0], value = _b[1];
                        if (chart[option] instanceof Function) {
                            chart[option](containerWidth / value);
                        }
                    }));
                }
                if (this.isObject(chartConfig.colors)) {
                    if (typeof chartConfig.colors.colorSchema === 'string') {
                        if (colors.colorSchemas[chartConfig.colors.colorSchema]) {
                            if (chartConfig.colors.reverse === true) {
                                chart.colorSchema(colors.colorSchemas[chartConfig.colors.colorSchema].reverse());
                            }
                            else {
                                chart.colorSchema(colors.colorSchemas[chartConfig.colors.colorSchema]);
                            }
                        }
                    }
                    else if (Array.isArray(chartConfig.colors.colorSchema)) {
                        chart.colorSchema(chartConfig.colors.colorSchema);
                    }
                }
                chartContainer.datum(this.data).call(this.chart);
                if (this.type === ChartType.Line || this.type === ChartType.StackedArea) {
                    chart.on('customDataEntryClick', (/**
                     * @param {?} data
                     * @param {?} coords
                     * @param {?} mouse
                     * @return {?}
                     */
                    function (data, coords, mouse) {
                        _this.chartClick.emit({ chart: chart, data: data, coords: coords, mouse: mouse });
                    }));
                }
                else if (this.type === ChartType.ScatterPlot) {
                    this.chart.on('customClick', (/**
                     * @param {?} data
                     * @param {?} coords
                     * @param {?} mouse
                     * @param {?} scatter
                     * @return {?}
                     */
                    function (data, coords, mouse, scatter) {
                        _this.chartClick.emit({ chart: chart, data: data, coords: coords, mouse: mouse, scatter: scatter });
                    }));
                }
                else {
                    d3Selection.select(this.el).selectAll(this.clickSelector).on('click', (/**
                     * @param {?} event
                     * @return {?}
                     */
                    function (event) { return _this.chartClick.emit({ chart: chart, data: event }); }));
                }
                if (this.chartConfig.tooltip && this.tooltipContainerSelector) {
                    this.tooltipContainer = d3Selection.select(this.el).select(this.tooltipContainerSelector);
                    if ([ChartType.Bar, ChartType.Step, ChartType.ScatterPlot].indexOf(this.type) > -1) {
                        this.tooltip = miniTooltip();
                        chart.on('customMouseOver', this.tooltip.show);
                        chart.on('customMouseMove', this.tooltip.update);
                        chart.on('customMouseOut', this.tooltip.hide);
                        this.tooltipContainer.datum(this.data).call(this.tooltip);
                    }
                    else if ([ChartType.Line, ChartType.StackedArea, ChartType.GroupedBar, ChartType.StackedBar].indexOf(this.type) > -1) {
                        this.tooltip = tooltip();
                        chart.on('customMouseOver', (/**
                         * @return {?}
                         */
                        function () {
                            _this.tooltip.show();
                        }));
                        chart.on('customMouseMove', (/**
                         * @param {?} dataPoint
                         * @param {?} topicColorMap
                         * @param {?} dataPointXPosition
                         * @return {?}
                         */
                        function (dataPoint, topicColorMap, dataPointXPosition) {
                            _this.tooltip.update(dataPoint, topicColorMap, dataPointXPosition);
                        }));
                        chart.on('customMouseOut', (/**
                         * @return {?}
                         */
                        function () {
                            //this.tooltip.hide();
                        }));
                        this.tooltipContainer.datum([]).call(this.tooltip);
                    }
                    if (this.isObject(this.chartConfig.tooltip)) {
                        Object.entries(this.chartConfig.tooltip).forEach((/**
                         * @param {?} __0
                         * @return {?}
                         */
                        function (_a) {
                            var _b = __read(_a, 2), option = _b[0], value = _b[1];
                            if (_this.tooltip[option] instanceof Function) {
                                _this.tooltip[option](value);
                            }
                        }));
                    }
                }
                if (this.isObject(chartConfig.events)) {
                    Object.entries(chartConfig.events).forEach((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    function (_a) {
                        var _b = __read(_a, 2), name = _b[0], value = _b[1];
                        if (name === 'click') {
                            _this.chartClick.pipe(operators.takeUntil(_this.canceller)).subscribe((/**
                             * @param {?} event
                             * @return {?}
                             */
                            function (event) {
                                value(event.chart, event.data, event.coords, event.mouse, event.scatter);
                            }));
                        }
                        else {
                            chart.on(name, (/**
                             * @param {...?} args
                             * @return {?}
                             */
                            function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return value.apply(void 0, __spread([chart], args));
                            }));
                        }
                    }));
                }
                this.ready.emit(true);
            }
        };
        ChartBaseComponent.propDecorators = {
            data: [{ type: core.Input }],
            chartConfig: [{ type: core.Input }],
            exportAsImageEvt: [{ type: core.Input }],
            loading: [{ type: core.Input }],
            ready: [{ type: core.Output }],
            chartClick: [{ type: core.Output }]
        };
        return ChartBaseComponent;
    }());
    if (false) {
        /** @type {?} */
        ChartBaseComponent.prototype.data;
        /** @type {?} */
        ChartBaseComponent.prototype.chartConfig;
        /** @type {?} */
        ChartBaseComponent.prototype.exportAsImageEvt;
        /** @type {?} */
        ChartBaseComponent.prototype.loading;
        /** @type {?} */
        ChartBaseComponent.prototype.ready;
        /** @type {?} */
        ChartBaseComponent.prototype.chartClick;
        /** @type {?} */
        ChartBaseComponent.prototype.chart;
        /**
         * @type {?}
         * @protected
         */
        ChartBaseComponent.prototype.canceller;
        /**
         * @type {?}
         * @protected
         */
        ChartBaseComponent.prototype.el;
        /**
         * @type {?}
         * @protected
         */
        ChartBaseComponent.prototype.type;
        /**
         * @type {?}
         * @protected
         */
        ChartBaseComponent.prototype.container;
        /**
         * @type {?}
         * @protected
         */
        ChartBaseComponent.prototype.selector;
        /**
         * @type {?}
         * @protected
         */
        ChartBaseComponent.prototype.clickSelector;
        /**
         * @type {?}
         * @protected
         */
        ChartBaseComponent.prototype.tooltipContainerSelector;
        /** @type {?} */
        ChartBaseComponent.prototype.tooltip;
        /** @type {?} */
        ChartBaseComponent.prototype.tooltipContainer;
        /**
         * @type {?}
         * @private
         */
        ChartBaseComponent.prototype.isObject;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BarChartComponent = /** @class */ (function (_super) {
        __extends(BarChartComponent, _super);
        function BarChartComponent(elementRef) {
            var _this = _super.call(this, elementRef) || this;
            _this.chart = chart();
            _this.selector = '.bar-chart';
            _this.clickSelector = '.bar-chart .bar';
            _this.tooltipContainerSelector = '.bar-chart .metadata-group';
            _this.type = ChartType.Bar;
            return _this;
        }
        BarChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'brite-bar-chart',
                        template: "",
                        styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .bar-chart .bar{shape-rendering:crispEdges}:host ::ng-deep .bar-chart .y-axis-group .tick text{font-size:14px}:host ::ng-deep .bar-chart .axis path{display:none}:host ::ng-deep .bar-chart .tick line{display:none}:host ::ng-deep .bar-chart .adjust-upwards{transform:translate(0,-10px)}:host ::ng-deep .bar-chart .percentage-label{fill:#666a73}"]
                    }] }
        ];
        /** @nocollapse */
        BarChartComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        return BarChartComponent;
    }(ChartBaseComponent));
    if (false) {
        /** @type {?} */
        BarChartComponent.prototype.chart;
        /**
         * @type {?}
         * @protected
         */
        BarChartComponent.prototype.selector;
        /**
         * @type {?}
         * @protected
         */
        BarChartComponent.prototype.clickSelector;
        /**
         * @type {?}
         * @protected
         */
        BarChartComponent.prototype.tooltipContainerSelector;
        /**
         * @type {?}
         * @protected
         */
        BarChartComponent.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BarChartModule = /** @class */ (function () {
        function BarChartModule() {
        }
        BarChartModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BarChartComponent],
                        exports: [BarChartComponent],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return BarChartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DonutChartComponent = /** @class */ (function (_super) {
        __extends(DonutChartComponent, _super);
        function DonutChartComponent(elementRef) {
            var _this = _super.call(this, elementRef) || this;
            _this.chart = chart$1();
            _this.selector = '.donut-chart';
            _this.clickSelector = '.donut-chart .arc';
            _this.type = ChartType.Donut;
            return _this;
        }
        DonutChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'brite-donut-chart',
                        template: "",
                        styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}"]
                    }] }
        ];
        /** @nocollapse */
        DonutChartComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        return DonutChartComponent;
    }(ChartBaseComponent));
    if (false) {
        /** @type {?} */
        DonutChartComponent.prototype.chart;
        /** @type {?} */
        DonutChartComponent.prototype.selector;
        /** @type {?} */
        DonutChartComponent.prototype.clickSelector;
        /**
         * @type {?}
         * @protected
         */
        DonutChartComponent.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DonutChartModule = /** @class */ (function () {
        function DonutChartModule() {
        }
        DonutChartModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [DonutChartComponent],
                        exports: [DonutChartComponent],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DonutChartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LegendComponent = /** @class */ (function (_super) {
        __extends(LegendComponent, _super);
        function LegendComponent(elementRef) {
            var _this = _super.call(this, elementRef) || this;
            _this.chart = chart$2();
            _this.selector = '.britechart-legend';
            _this.clickSelector = '.legend-entry';
            _this.type = ChartType.Legend;
            return _this;
        }
        LegendComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'brite-legend',
                        template: "",
                        styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}"]
                    }] }
        ];
        /** @nocollapse */
        LegendComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        return LegendComponent;
    }(ChartBaseComponent));
    if (false) {
        /** @type {?} */
        LegendComponent.prototype.chart;
        /**
         * @type {?}
         * @protected
         */
        LegendComponent.prototype.selector;
        /**
         * @type {?}
         * @protected
         */
        LegendComponent.prototype.clickSelector;
        /**
         * @type {?}
         * @protected
         */
        LegendComponent.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LegendModule = /** @class */ (function () {
        function LegendModule() {
        }
        LegendModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [LegendComponent],
                        exports: [LegendComponent],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return LegendModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LineChartComponent = /** @class */ (function (_super) {
        __extends(LineChartComponent, _super);
        function LineChartComponent(elementRef) {
            var _this = _super.call(this, elementRef) || this;
            _this.chart = chart$3();
            _this.chartClick = new core.EventEmitter();
            _this.tooltipContainerSelector = '.line-chart .metadata-group .hover-marker';
            _this.selector = '.line-chart';
            _this.type = ChartType.Line;
            _this.chart.on('customDataEntryClick', (/**
             * @param {?} event
             * @param {?} data
             * @param {?} mouse
             * @return {?}
             */
            function (event, data, mouse) {
                _this.chartClick.emit({ chart: _this.chart, event: event, data: data, mouse: mouse });
            }));
            return _this;
        }
        LineChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'brite-line-chart',
                        template: "",
                        styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .line-chart .data-point-mark{fill:#fff}:host ::ng-deep .line-chart .topic .line{fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}:host ::ng-deep .line-chart .x.axis path,:host ::ng-deep .line-chart .y.axis path{display:none}:host ::ng-deep .line-chart .month-axis path{display:none}:host ::ng-deep .line-chart .masking-rectangle{fill:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        LineChartComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        LineChartComponent.propDecorators = {
            chartClick: [{ type: core.Output }]
        };
        return LineChartComponent;
    }(ChartBaseComponent));
    if (false) {
        /** @type {?} */
        LineChartComponent.prototype.chart;
        /** @type {?} */
        LineChartComponent.prototype.chartClick;
        /**
         * @type {?}
         * @protected
         */
        LineChartComponent.prototype.tooltipContainerSelector;
        /**
         * @type {?}
         * @protected
         */
        LineChartComponent.prototype.selector;
        /**
         * @type {?}
         * @protected
         */
        LineChartComponent.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LineChartModule = /** @class */ (function () {
        function LineChartModule() {
        }
        LineChartModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [LineChartComponent],
                        exports: [LineChartComponent],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return LineChartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GroupedBarChartComponent = /** @class */ (function (_super) {
        __extends(GroupedBarChartComponent, _super);
        function GroupedBarChartComponent(elementRef) {
            var _this = _super.call(this, elementRef) || this;
            _this.chart = chart$4();
            _this.selector = '.grouped-bar';
            _this.clickSelector = '.grouped-bar .bar';
            _this.tooltipContainerSelector = '.grouped-bar .metadata-group';
            _this.type = ChartType.GroupedBar;
            return _this;
        }
        GroupedBarChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'brite-grouped-bar-chart',
                        template: "",
                        styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .grouped-bar .x-axis-group path,:host ::ng-deep .grouped-bar .y-axis-group path{display:none}:host ::ng-deep .grouped-bar .y-axis-group .tick text{font-size:14px}:host ::ng-deep .grouped-bar .tick line{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        GroupedBarChartComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        return GroupedBarChartComponent;
    }(ChartBaseComponent));
    if (false) {
        /** @type {?} */
        GroupedBarChartComponent.prototype.chart;
        /**
         * @type {?}
         * @protected
         */
        GroupedBarChartComponent.prototype.selector;
        /**
         * @type {?}
         * @protected
         */
        GroupedBarChartComponent.prototype.clickSelector;
        /**
         * @type {?}
         * @protected
         */
        GroupedBarChartComponent.prototype.tooltipContainerSelector;
        /**
         * @type {?}
         * @protected
         */
        GroupedBarChartComponent.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GroupedBarChartModule = /** @class */ (function () {
        function GroupedBarChartModule() {
        }
        GroupedBarChartModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [GroupedBarChartComponent],
                        exports: [GroupedBarChartComponent],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return GroupedBarChartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScatterPlotChartComponent = /** @class */ (function (_super) {
        __extends(ScatterPlotChartComponent, _super);
        function ScatterPlotChartComponent(elementRef) {
            var _this = _super.call(this, elementRef) || this;
            _this.chart = chart$5();
            _this.tooltipContainerSelector = '.scatter-plot .metadata-group';
            _this.selector = '.scatter-plot';
            _this.type = ChartType.ScatterPlot;
            return _this;
        }
        ScatterPlotChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'brite-scatter-plot-chart',
                        template: "",
                        styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .scatter-plot .y-axis-group .tick line{display:none}:host ::ng-deep .scatter-plot .y-axis-group .axis path{display:none}:host ::ng-deep .scatter-plot .x.axis path{display:none}:host ::ng-deep .scatter-plot .data-point-highlighter{stroke-width:1.2}"]
                    }] }
        ];
        /** @nocollapse */
        ScatterPlotChartComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        return ScatterPlotChartComponent;
    }(ChartBaseComponent));
    if (false) {
        /** @type {?} */
        ScatterPlotChartComponent.prototype.chart;
        /**
         * @type {?}
         * @protected
         */
        ScatterPlotChartComponent.prototype.tooltipContainerSelector;
        /**
         * @type {?}
         * @protected
         */
        ScatterPlotChartComponent.prototype.selector;
        /**
         * @type {?}
         * @protected
         */
        ScatterPlotChartComponent.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScatterPlotChartModule = /** @class */ (function () {
        function ScatterPlotChartModule() {
        }
        ScatterPlotChartModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ScatterPlotChartComponent],
                        exports: [ScatterPlotChartComponent],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return ScatterPlotChartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BrushChartComponent = /** @class */ (function (_super) {
        __extends(BrushChartComponent, _super);
        function BrushChartComponent(elementRef) {
            var _this = _super.call(this, elementRef) || this;
            _this.chart = chart$6();
            _this.selector = '.brush-chart';
            _this.type = ChartType.Brush;
            return _this;
        }
        BrushChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'brite-brush-chart',
                        template: "",
                        styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .brush-chart .brush-area{fill:#eff2f5}:host ::ng-deep .brush-chart rect.brush-rect.selection{fill-opacity:.08;stroke-linejoin:round}:host ::ng-deep .brush-chart rect.brush-rect.handle{fill:#00d8d2;width:.2rem}:host ::ng-deep .brush-chart .axis path{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        BrushChartComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        return BrushChartComponent;
    }(ChartBaseComponent));
    if (false) {
        /** @type {?} */
        BrushChartComponent.prototype.chart;
        /**
         * @type {?}
         * @protected
         */
        BrushChartComponent.prototype.selector;
        /**
         * @type {?}
         * @protected
         */
        BrushChartComponent.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BrushChartModule = /** @class */ (function () {
        function BrushChartModule() {
        }
        BrushChartModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BrushChartComponent],
                        exports: [BrushChartComponent],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return BrushChartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BulletChartComponent = /** @class */ (function (_super) {
        __extends(BulletChartComponent, _super);
        function BulletChartComponent(elementRef) {
            var _this = _super.call(this, elementRef) || this;
            _this.chart = chart$7();
            _this.selector = '.bullet-chart';
            _this.clickSelector = '.bullet-chart .range, .bullet-chart .measure, .bullet-chart .marker-line';
            _this.type = ChartType.Bullet;
            return _this;
        }
        BulletChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'brite-bullet-chart',
                        template: "",
                        styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .bullet-chart .marker-line{shape-rendering:crispEdges}:host ::ng-deep .bullet-chart .axis-group path{display:none}:host ::ng-deep .bullet-chart .bullet-title{font-size:16px}"]
                    }] }
        ];
        /** @nocollapse */
        BulletChartComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        return BulletChartComponent;
    }(ChartBaseComponent));
    if (false) {
        /** @type {?} */
        BulletChartComponent.prototype.chart;
        /** @type {?} */
        BulletChartComponent.prototype.selector;
        /** @type {?} */
        BulletChartComponent.prototype.clickSelector;
        /**
         * @type {?}
         * @protected
         */
        BulletChartComponent.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BulletChartModule = /** @class */ (function () {
        function BulletChartModule() {
        }
        BulletChartModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BulletChartComponent],
                        exports: [BulletChartComponent],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return BulletChartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HeatmapChartComponent = /** @class */ (function (_super) {
        __extends(HeatmapChartComponent, _super);
        function HeatmapChartComponent(elementRef) {
            var _this = _super.call(this, elementRef) || this;
            _this.chart = chart$8();
            _this.selector = '.heatmap';
            _this.clickSelector = '.heatmap .box';
            _this.type = ChartType.Heatmap;
            return _this;
        }
        HeatmapChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'brite-heatmap-chart',
                        template: "",
                        styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}"]
                    }] }
        ];
        /** @nocollapse */
        HeatmapChartComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        return HeatmapChartComponent;
    }(ChartBaseComponent));
    if (false) {
        /** @type {?} */
        HeatmapChartComponent.prototype.chart;
        /** @type {?} */
        HeatmapChartComponent.prototype.selector;
        /** @type {?} */
        HeatmapChartComponent.prototype.clickSelector;
        /**
         * @type {?}
         * @protected
         */
        HeatmapChartComponent.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HeatmapChartModule = /** @class */ (function () {
        function HeatmapChartModule() {
        }
        HeatmapChartModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [HeatmapChartComponent],
                        exports: [HeatmapChartComponent],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return HeatmapChartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SparklineChartComponent = /** @class */ (function (_super) {
        __extends(SparklineChartComponent, _super);
        function SparklineChartComponent(elementRef) {
            var _this = _super.call(this, elementRef) || this;
            _this.chart = chart$9();
            _this.selector = '.spark-line';
            _this.type = ChartType.Sparkline;
            return _this;
        }
        SparklineChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'brite-sparkline-chart',
                        template: "",
                        styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .sparkline{stroke:#adb0b6;stroke-width:1;fill:none;stroke-linecap:round;stroke-linejoin:round}:host ::ng-deep .sparkline .line{stroke-width:2}:host ::ng-deep .sparkline .sparkline-circle{fill:#ff584c;stroke-width:0;display:none}:host ::ng-deep .sparkline .sparkline-area{stroke:none}"]
                    }] }
        ];
        /** @nocollapse */
        SparklineChartComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        return SparklineChartComponent;
    }(ChartBaseComponent));
    if (false) {
        /** @type {?} */
        SparklineChartComponent.prototype.chart;
        /**
         * @type {?}
         * @protected
         */
        SparklineChartComponent.prototype.selector;
        /**
         * @type {?}
         * @protected
         */
        SparklineChartComponent.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SparkLineChartModule = /** @class */ (function () {
        function SparkLineChartModule() {
        }
        SparkLineChartModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [SparklineChartComponent],
                        exports: [SparklineChartComponent],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return SparkLineChartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StackedAreaChartComponent = /** @class */ (function (_super) {
        __extends(StackedAreaChartComponent, _super);
        function StackedAreaChartComponent(elementRef) {
            var _this = _super.call(this, elementRef) || this;
            _this.chart = chart$a();
            _this.selector = '.stacked-area';
            _this.tooltipContainerSelector = '.stacked-area .metadata-group .vertical-marker-container';
            _this.type = ChartType.StackedArea;
            return _this;
        }
        StackedAreaChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'brite-stacked-area-chart',
                        template: "",
                        styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .stacked-area .dot{display:none}:host ::ng-deep .stacked-area .y-axis-group path{display:none}:host ::ng-deep .stacked-area .x-axis-group path{display:none}:host ::ng-deep .stacked-area .area-outline{shape-rendering:geometricPrecision;fill:none;stroke-width:1.2}:host ::ng-deep .stacked-area .data-point-highlighter{stroke-width:1.2}:host ::ng-deep .stacked-area .empty-data-line{stroke-width:2px;stroke-linecap:round}"]
                    }] }
        ];
        /** @nocollapse */
        StackedAreaChartComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        return StackedAreaChartComponent;
    }(ChartBaseComponent));
    if (false) {
        /** @type {?} */
        StackedAreaChartComponent.prototype.chart;
        /**
         * @type {?}
         * @protected
         */
        StackedAreaChartComponent.prototype.selector;
        /**
         * @type {?}
         * @protected
         */
        StackedAreaChartComponent.prototype.tooltipContainerSelector;
        /**
         * @type {?}
         * @protected
         */
        StackedAreaChartComponent.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StackedAreaChartModule = /** @class */ (function () {
        function StackedAreaChartModule() {
        }
        StackedAreaChartModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [StackedAreaChartComponent],
                        exports: [StackedAreaChartComponent],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return StackedAreaChartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StackedBarChartComponent = /** @class */ (function (_super) {
        __extends(StackedBarChartComponent, _super);
        function StackedBarChartComponent(elementRef) {
            var _this = _super.call(this, elementRef) || this;
            _this.chart = chart$b();
            _this.selector = '.stacked-bar';
            _this.tooltipContainerSelector = '.stacked-bar .metadata-group';
            _this.type = ChartType.StackedBar;
            return _this;
        }
        StackedBarChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'brite-stacked-bar-chart',
                        template: "",
                        styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .stacked-bar .x-axis-group path,:host ::ng-deep .stacked-bar .y-axis-group path{display:none}:host ::ng-deep .stacked-bar .y-axis-group .tick text{font-size:14px}:host ::ng-deep .stacked-bar .tick line{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        StackedBarChartComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        return StackedBarChartComponent;
    }(ChartBaseComponent));
    if (false) {
        /** @type {?} */
        StackedBarChartComponent.prototype.chart;
        /**
         * @type {?}
         * @protected
         */
        StackedBarChartComponent.prototype.selector;
        /**
         * @type {?}
         * @protected
         */
        StackedBarChartComponent.prototype.tooltipContainerSelector;
        /**
         * @type {?}
         * @protected
         */
        StackedBarChartComponent.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StackedBarChartModule = /** @class */ (function () {
        function StackedBarChartModule() {
        }
        StackedBarChartModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [StackedBarChartComponent],
                        exports: [StackedBarChartComponent],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return StackedBarChartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StepChartComponent = /** @class */ (function (_super) {
        __extends(StepChartComponent, _super);
        function StepChartComponent(elementRef) {
            var _this = _super.call(this, elementRef) || this;
            _this.chart = chart$c();
            _this.selector = '.step-chart';
            _this.clickSelector = '.step-chart .step';
            _this.tooltipContainerSelector = '.step-chart .metadata-group';
            _this.type = ChartType.Step;
            return _this;
        }
        StepChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'brite-step-chart',
                        template: "",
                        styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .step-chart .step{fill:#8fdad8;stroke-width:0;shape-rendering:crispEdges}:host ::ng-deep .step-chart .step:hover{fill:#39c2c9}:host ::ng-deep .step-chart .axis path{display:none}:host ::ng-deep .step-chart .tick line{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        StepChartComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        return StepChartComponent;
    }(ChartBaseComponent));
    if (false) {
        /** @type {?} */
        StepChartComponent.prototype.chart;
        /**
         * @type {?}
         * @protected
         */
        StepChartComponent.prototype.selector;
        /**
         * @type {?}
         * @protected
         */
        StepChartComponent.prototype.clickSelector;
        /**
         * @type {?}
         * @protected
         */
        StepChartComponent.prototype.tooltipContainerSelector;
        /**
         * @type {?}
         * @protected
         */
        StepChartComponent.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StepChartModule = /** @class */ (function () {
        function StepChartModule() {
        }
        StepChartModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [StepChartComponent],
                        exports: [StepChartComponent],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return StepChartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChartModule = /** @class */ (function () {
        function ChartModule() {
        }
        ChartModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            BarChartModule,
                            BrushChartModule,
                            BulletChartModule,
                            DonutChartModule,
                            GroupedBarChartModule,
                            HeatmapChartModule,
                            LegendModule,
                            LineChartModule,
                            ScatterPlotChartModule,
                            SparkLineChartModule,
                            StackedAreaChartModule,
                            StackedBarChartModule,
                            StepChartModule
                        ],
                        exports: [
                            BarChartModule,
                            BrushChartModule,
                            BulletChartModule,
                            DonutChartModule,
                            GroupedBarChartModule,
                            HeatmapChartModule,
                            LegendModule,
                            LineChartModule,
                            ScatterPlotChartModule,
                            SparkLineChartModule,
                            StackedAreaChartModule,
                            StackedBarChartModule,
                            StepChartModule
                        ]
                    },] }
        ];
        return ChartModule;
    }());

    exports.BarChartComponent = BarChartComponent;
    exports.BarChartModule = BarChartModule;
    exports.BrushChartComponent = BrushChartComponent;
    exports.BrushChartModule = BrushChartModule;
    exports.BulletChartComponent = BulletChartComponent;
    exports.BulletChartModule = BulletChartModule;
    exports.ChartBaseComponent = ChartBaseComponent;
    exports.ChartDateLabel = ChartDateLabel;
    exports.ChartGrid = ChartGrid;
    exports.ChartLineCurve = ChartLineCurve;
    exports.ChartModule = ChartModule;
    exports.ChartType = ChartType;
    exports.DonutChartComponent = DonutChartComponent;
    exports.DonutChartModule = DonutChartModule;
    exports.GroupedBarChartComponent = GroupedBarChartComponent;
    exports.GroupedBarChartModule = GroupedBarChartModule;
    exports.HeatmapChartComponent = HeatmapChartComponent;
    exports.HeatmapChartModule = HeatmapChartModule;
    exports.LegendComponent = LegendComponent;
    exports.LegendModule = LegendModule;
    exports.LineChartComponent = LineChartComponent;
    exports.LineChartModule = LineChartModule;
    exports.ScatterPlotChartComponent = ScatterPlotChartComponent;
    exports.ScatterPlotChartModule = ScatterPlotChartModule;
    exports.SparkLineChartModule = SparkLineChartModule;
    exports.SparklineChartComponent = SparklineChartComponent;
    exports.StackedAreaChartComponent = StackedAreaChartComponent;
    exports.StackedAreaChartModule = StackedAreaChartModule;
    exports.StackedBarChartComponent = StackedBarChartComponent;
    exports.StackedBarChartModule = StackedBarChartModule;
    exports.StepChartComponent = StepChartComponent;
    exports.StepChartModule = StepChartModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-britecharts.umd.js.map
