import { fromEvent, Subject } from 'rxjs';
import { select } from 'd3-selection';
import colors from 'britecharts/dist/umd/colors.min';
import miniTooltip from 'britecharts/dist/umd/miniTooltip.min';
import tooltip from 'britecharts/dist/umd/tooltip.min';
import { debounceTime, takeUntil } from 'rxjs/operators';
import chart from 'britecharts/dist/umd/bar.min';
import chart$1 from 'britecharts/dist/umd/donut.min';
import chart$2 from 'britecharts/dist/umd/legend.min';
import chart$3 from 'britecharts/dist/umd/line.min';
import chart$4 from 'britecharts/dist/umd/groupedBar.min';
import chart$5 from 'britecharts/dist/umd/scatterPlot.min';
import chart$6 from 'britecharts/dist/umd/brush.min';
import chart$7 from 'britecharts/dist/umd/bullet.min';
import chart$8 from 'britecharts/dist/umd/heatmap.min';
import chart$9 from 'britecharts/dist/umd/sparkline.min';
import chart$a from 'britecharts/dist/umd/stackedArea.min';
import chart$b from 'britecharts/dist/umd/stackedbar.min';
import { CommonModule } from '@angular/common';
import { __extends, __read, __spread } from 'tslib';
import { Input, Output, EventEmitter, Component, ElementRef, NgModule } from '@angular/core';
import chart$c from 'britecharts/dist/umd/step.min';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChartBaseComponent = /** @class */ (function () {
    function ChartBaseComponent(elementRef) {
        var _this = this;
        this.ready = new EventEmitter();
        this.chartClick = new EventEmitter();
        this.canceller = new Subject();
        this.isObject = (/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) { return !!obj && typeof obj === 'object'; });
        fromEvent(window, 'resize')
            .pipe(debounceTime(250), takeUntil(this.canceller)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.drawChart();
        }));
        this.el = elementRef.nativeElement;
        this.container = select(this.el);
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
        var chartContainer = this.container = select(this.el);
        /** @type {?} */
        var containerWidth = chartContainer.node() ? ((/** @type {?} */ (chartContainer.node()))).getBoundingClientRect().width : false;
        var _a = this, chart$$1 = _a.chart, chartConfig = _a.chartConfig;
        if (containerWidth) {
            // Set the container width to a standar value. If width is passed in the properties it is going to be
            // overriden later.
            chart$$1.width(containerWidth);
            if (chart$$1.shouldReverseColorList instanceof Function) {
                chart$$1.shouldReverseColorList(false);
            }
            if (this.isObject(chartConfig.properties)) {
                Object.entries(chartConfig.properties).forEach((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var _b = __read(_a, 2), option = _b[0], value = _b[1];
                    if (chart$$1[option] instanceof Function) {
                        chart$$1[option](value);
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
                    if (chart$$1[option] instanceof Function) {
                        chart$$1[option](containerWidth / value);
                    }
                }));
            }
            if (this.isObject(chartConfig.colors)) {
                if (typeof chartConfig.colors.colorSchema === 'string') {
                    if (colors.colorSchemas[chartConfig.colors.colorSchema]) {
                        if (chartConfig.colors.reverse === true) {
                            chart$$1.colorSchema(colors.colorSchemas[chartConfig.colors.colorSchema].reverse());
                        }
                        else {
                            chart$$1.colorSchema(colors.colorSchemas[chartConfig.colors.colorSchema]);
                        }
                    }
                }
                else if (Array.isArray(chartConfig.colors.colorSchema)) {
                    chart$$1.colorSchema(chartConfig.colors.colorSchema);
                }
            }
            chartContainer.datum(this.data).call(this.chart);
            if (this.type === ChartType.Line || this.type === ChartType.StackedArea) {
                chart$$1.on('customDataEntryClick', (/**
                 * @param {?} data
                 * @param {?} coords
                 * @param {?} mouse
                 * @return {?}
                 */
                function (data, coords, mouse) {
                    _this.chartClick.emit({ chart: chart$$1, data: data, coords: coords, mouse: mouse });
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
                    _this.chartClick.emit({ chart: chart$$1, data: data, coords: coords, mouse: mouse, scatter: scatter });
                }));
            }
            else {
                select(this.el).selectAll(this.clickSelector).on('click', (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) { return _this.chartClick.emit({ chart: chart$$1, data: event }); }));
            }
            if (this.chartConfig.tooltip && this.tooltipContainerSelector) {
                this.tooltipContainer = select(this.el).select(this.tooltipContainerSelector);
                if ([ChartType.Bar, ChartType.Step, ChartType.ScatterPlot].indexOf(this.type) > -1) {
                    this.tooltip = miniTooltip();
                    chart$$1.on('customMouseOver', this.tooltip.show);
                    chart$$1.on('customMouseMove', this.tooltip.update);
                    chart$$1.on('customMouseOut', this.tooltip.hide);
                    this.tooltipContainer.datum(this.data).call(this.tooltip);
                }
                else if ([ChartType.Line, ChartType.StackedArea, ChartType.GroupedBar, ChartType.StackedBar].indexOf(this.type) > -1) {
                    this.tooltip = tooltip();
                    chart$$1.on('customMouseOver', (/**
                     * @return {?}
                     */
                    function () {
                        _this.tooltip.show();
                    }));
                    chart$$1.on('customMouseMove', (/**
                     * @param {?} dataPoint
                     * @param {?} topicColorMap
                     * @param {?} dataPointXPosition
                     * @return {?}
                     */
                    function (dataPoint, topicColorMap, dataPointXPosition) {
                        _this.tooltip.update(dataPoint, topicColorMap, dataPointXPosition);
                    }));
                    chart$$1.on('customMouseOut', (/**
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
                        _this.chartClick.pipe(takeUntil(_this.canceller)).subscribe((/**
                         * @param {?} event
                         * @return {?}
                         */
                        function (event) {
                            value(event.chart, event.data, event.coords, event.mouse, event.scatter);
                        }));
                    }
                    else {
                        chart$$1.on(name, (/**
                         * @param {...?} args
                         * @return {?}
                         */
                        function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            return value.apply(void 0, __spread([chart$$1], args));
                        }));
                    }
                }));
            }
            this.ready.emit(true);
        }
    };
    ChartBaseComponent.propDecorators = {
        data: [{ type: Input }],
        chartConfig: [{ type: Input }],
        exportAsImageEvt: [{ type: Input }],
        loading: [{ type: Input }],
        ready: [{ type: Output }],
        chartClick: [{ type: Output }]
    };
    return ChartBaseComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: Component, args: [{
                    selector: 'brite-bar-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .bar-chart .bar{shape-rendering:crispEdges}:host ::ng-deep .bar-chart .y-axis-group .tick text{font-size:14px}:host ::ng-deep .bar-chart .axis path{display:none}:host ::ng-deep .bar-chart .tick line{display:none}:host ::ng-deep .bar-chart .adjust-upwards{-webkit-transform:translate(0,-10px);transform:translate(0,-10px)}:host ::ng-deep .bar-chart .percentage-label{fill:#666a73}"]
                }] }
    ];
    /** @nocollapse */
    BarChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return BarChartComponent;
}(ChartBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BarChartModule = /** @class */ (function () {
    function BarChartModule() {
    }
    BarChartModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BarChartComponent],
                    exports: [BarChartComponent],
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return BarChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: Component, args: [{
                    selector: 'brite-donut-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}"]
                }] }
    ];
    /** @nocollapse */
    DonutChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return DonutChartComponent;
}(ChartBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DonutChartModule = /** @class */ (function () {
    function DonutChartModule() {
    }
    DonutChartModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DonutChartComponent],
                    exports: [DonutChartComponent],
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DonutChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: Component, args: [{
                    selector: 'brite-legend',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}"]
                }] }
    ];
    /** @nocollapse */
    LegendComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return LegendComponent;
}(ChartBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LegendModule = /** @class */ (function () {
    function LegendModule() {
    }
    LegendModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [LegendComponent],
                    exports: [LegendComponent],
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return LegendModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LineChartComponent = /** @class */ (function (_super) {
    __extends(LineChartComponent, _super);
    function LineChartComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.chart = chart$3();
        _this.chartClick = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'brite-line-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .line-chart .data-point-mark{fill:#fff}:host ::ng-deep .line-chart .topic .line{fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}:host ::ng-deep .line-chart .x.axis path,:host ::ng-deep .line-chart .y.axis path{display:none}:host ::ng-deep .line-chart .month-axis path{display:none}:host ::ng-deep .line-chart .masking-rectangle{fill:#fff}"]
                }] }
    ];
    /** @nocollapse */
    LineChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    LineChartComponent.propDecorators = {
        chartClick: [{ type: Output }]
    };
    return LineChartComponent;
}(ChartBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LineChartModule = /** @class */ (function () {
    function LineChartModule() {
    }
    LineChartModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [LineChartComponent],
                    exports: [LineChartComponent],
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return LineChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: Component, args: [{
                    selector: 'brite-grouped-bar-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .grouped-bar .x-axis-group path,:host ::ng-deep .grouped-bar .y-axis-group path{display:none}:host ::ng-deep .grouped-bar .y-axis-group .tick text{font-size:14px}:host ::ng-deep .grouped-bar .tick line{display:none}"]
                }] }
    ];
    /** @nocollapse */
    GroupedBarChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return GroupedBarChartComponent;
}(ChartBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GroupedBarChartModule = /** @class */ (function () {
    function GroupedBarChartModule() {
    }
    GroupedBarChartModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [GroupedBarChartComponent],
                    exports: [GroupedBarChartComponent],
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return GroupedBarChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: Component, args: [{
                    selector: 'brite-scatter-plot-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .scatter-plot .y-axis-group .tick line{display:none}:host ::ng-deep .scatter-plot .y-axis-group .axis path{display:none}:host ::ng-deep .scatter-plot .x.axis path{display:none}:host ::ng-deep .scatter-plot .data-point-highlighter{stroke-width:1.2}"]
                }] }
    ];
    /** @nocollapse */
    ScatterPlotChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ScatterPlotChartComponent;
}(ChartBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScatterPlotChartModule = /** @class */ (function () {
    function ScatterPlotChartModule() {
    }
    ScatterPlotChartModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ScatterPlotChartComponent],
                    exports: [ScatterPlotChartComponent],
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return ScatterPlotChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: Component, args: [{
                    selector: 'brite-brush-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .brush-chart .brush-area{fill:#eff2f5}:host ::ng-deep .brush-chart rect.brush-rect.selection{fill-opacity:.08;stroke-linejoin:round}:host ::ng-deep .brush-chart rect.brush-rect.handle{fill:#00d8d2;width:.2rem}:host ::ng-deep .brush-chart .axis path{display:none}"]
                }] }
    ];
    /** @nocollapse */
    BrushChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return BrushChartComponent;
}(ChartBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BrushChartModule = /** @class */ (function () {
    function BrushChartModule() {
    }
    BrushChartModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BrushChartComponent],
                    exports: [BrushChartComponent],
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return BrushChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: Component, args: [{
                    selector: 'brite-bullet-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .bullet-chart .marker-line{shape-rendering:crispEdges}:host ::ng-deep .bullet-chart .axis-group path{display:none}:host ::ng-deep .bullet-chart .bullet-title{font-size:16px}"]
                }] }
    ];
    /** @nocollapse */
    BulletChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return BulletChartComponent;
}(ChartBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BulletChartModule = /** @class */ (function () {
    function BulletChartModule() {
    }
    BulletChartModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BulletChartComponent],
                    exports: [BulletChartComponent],
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return BulletChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: Component, args: [{
                    selector: 'brite-heatmap-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}"]
                }] }
    ];
    /** @nocollapse */
    HeatmapChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return HeatmapChartComponent;
}(ChartBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeatmapChartModule = /** @class */ (function () {
    function HeatmapChartModule() {
    }
    HeatmapChartModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [HeatmapChartComponent],
                    exports: [HeatmapChartComponent],
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return HeatmapChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: Component, args: [{
                    selector: 'brite-sparkline-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .sparkline{stroke:#adb0b6;stroke-width:1;fill:none;stroke-linecap:round;stroke-linejoin:round}:host ::ng-deep .sparkline .line{stroke-width:2}:host ::ng-deep .sparkline .sparkline-circle{fill:#ff584c;stroke-width:0;display:none}:host ::ng-deep .sparkline .sparkline-area{stroke:none}"]
                }] }
    ];
    /** @nocollapse */
    SparklineChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return SparklineChartComponent;
}(ChartBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SparkLineChartModule = /** @class */ (function () {
    function SparkLineChartModule() {
    }
    SparkLineChartModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SparklineChartComponent],
                    exports: [SparklineChartComponent],
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return SparkLineChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: Component, args: [{
                    selector: 'brite-stacked-area-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .stacked-area .dot{display:none}:host ::ng-deep .stacked-area .y-axis-group path{display:none}:host ::ng-deep .stacked-area .x-axis-group path{display:none}:host ::ng-deep .stacked-area .area-outline{shape-rendering:geometricPrecision;fill:none;stroke-width:1.2}:host ::ng-deep .stacked-area .data-point-highlighter{stroke-width:1.2}:host ::ng-deep .stacked-area .empty-data-line{stroke-width:2px;stroke-linecap:round}"]
                }] }
    ];
    /** @nocollapse */
    StackedAreaChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return StackedAreaChartComponent;
}(ChartBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StackedAreaChartModule = /** @class */ (function () {
    function StackedAreaChartModule() {
    }
    StackedAreaChartModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [StackedAreaChartComponent],
                    exports: [StackedAreaChartComponent],
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return StackedAreaChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: Component, args: [{
                    selector: 'brite-stacked-bar-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .stacked-bar .x-axis-group path,:host ::ng-deep .stacked-bar .y-axis-group path{display:none}:host ::ng-deep .stacked-bar .y-axis-group .tick text{font-size:14px}:host ::ng-deep .stacked-bar .tick line{display:none}"]
                }] }
    ];
    /** @nocollapse */
    StackedBarChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return StackedBarChartComponent;
}(ChartBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StackedBarChartModule = /** @class */ (function () {
    function StackedBarChartModule() {
    }
    StackedBarChartModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [StackedBarChartComponent],
                    exports: [StackedBarChartComponent],
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return StackedBarChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: Component, args: [{
                    selector: 'brite-step-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .step-chart .step{fill:#8fdad8;stroke-width:0;shape-rendering:crispEdges}:host ::ng-deep .step-chart .step:hover{fill:#39c2c9}:host ::ng-deep .step-chart .axis path{display:none}:host ::ng-deep .step-chart .tick line{display:none}"]
                }] }
    ];
    /** @nocollapse */
    StepChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return StepChartComponent;
}(ChartBaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StepChartModule = /** @class */ (function () {
    function StepChartModule() {
    }
    StepChartModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [StepChartComponent],
                    exports: [StepChartComponent],
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return StepChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChartModule = /** @class */ (function () {
    function ChartModule() {
    }
    ChartModule.decorators = [
        { type: NgModule, args: [{
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ChartBaseComponent, ChartModule, ChartType, ChartGrid, ChartDateLabel, ChartLineCurve, BarChartModule, BrushChartModule, BulletChartModule, DonutChartModule, GroupedBarChartModule, HeatmapChartModule, LegendModule, LineChartModule, ScatterPlotChartModule, SparkLineChartModule, StackedAreaChartModule, StackedBarChartModule, StepChartModule, BarChartComponent, BrushChartComponent, BulletChartComponent, DonutChartComponent, GroupedBarChartComponent, HeatmapChartComponent, LegendComponent, LineChartComponent, ScatterPlotChartComponent, SparklineChartComponent, StackedAreaChartComponent, StackedBarChartComponent, StepChartComponent as ɵa };

//# sourceMappingURL=ngx-britecharts.js.map