import { EventEmitter, Input, Output, Component, ElementRef, NgModule } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { select } from 'd3-selection';
import colors from 'britecharts/dist/umd/colors.min';
import miniTooltip from 'britecharts/dist/umd/miniTooltip.min';
import tooltip from 'britecharts/dist/umd/tooltip.min';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import chart from 'britecharts/dist/umd/bar.min';
import chart$1 from 'britecharts/dist/umd/donut.min';
import chart$2 from 'britecharts/dist/umd/legend.min';
import chart$3 from 'britecharts/src/charts/line.js';
import chart$4 from 'britecharts/dist/umd/groupedBar.min';
import chart$5 from 'britecharts/dist/umd/scatterPlot.min';
import chart$6 from 'britecharts/dist/umd/brush.min';
import chart$7 from 'britecharts/dist/umd/bullet.min';
import chart$8 from 'britecharts/dist/umd/heatmap.min';
import chart$9 from 'britecharts/dist/umd/sparkline.min';
import chart$a from 'britecharts/dist/umd/stackedArea.min';
import chart$b from 'britecharts/dist/umd/stackedBar.min';
import chart$c from 'britecharts/dist/umd/step.min';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ChartType = {
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
const ChartGrid = {
    Horizontal: 'horizontal',
    Vertical: 'vertical',
    Full: 'full',
};
/** @enum {string} */
const ChartDateLabel = {
    FullDate: 'fullDate',
};
/** @enum {string} */
const ChartLineCurve = {
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
class ChartBaseComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.ready = new EventEmitter();
        this.chartClick = new EventEmitter();
        this.canceller = new Subject();
        this.isObject = (/**
         * @param {?} obj
         * @return {?}
         */
        (obj) => !!obj && typeof obj === 'object' && !Array.isArray(obj));
        fromEvent(window, 'resize')
            .pipe(debounceTime(250), takeUntil(this.canceller)).subscribe((/**
         * @return {?}
         */
        () => {
            this.drawChart();
        }));
        this.el = elementRef.nativeElement;
        this.container = select(this.el);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.canceller.next();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.exportAsImageEvt) {
            this.exportAsImageEvt.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                this.chart.exportChart(data.filename, data.title);
            }));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
    /**
     * @return {?}
     */
    drawChart() {
        /** @type {?} */
        const chartContainer = this.container = select(this.el);
        /** @type {?} */
        const containerWidth = chartContainer.node() ? ((/** @type {?} */ (chartContainer.node()))).getBoundingClientRect().width : false;
        const { chart, chartConfig } = this;
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
                ([option, value]) => {
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
                ([option, value]) => {
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
                (data, coords, mouse) => {
                    this.chartClick.emit({ chart, data, coords, mouse });
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
                (data, coords, mouse, scatter) => {
                    this.chartClick.emit({ chart, data, coords, mouse, scatter });
                }));
            }
            else {
                select(this.el).selectAll(this.clickSelector).on('click', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => this.chartClick.emit({ chart, data: event })));
            }
            if (this.chartConfig.tooltip && this.tooltipContainerSelector) {
                this.tooltipContainer = select(this.el).select(this.tooltipContainerSelector);
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
                    () => {
                        this.tooltip.show();
                    }));
                    chart.on('customMouseMove', (/**
                     * @param {?} dataPoint
                     * @param {?} topicColorMap
                     * @param {?} dataPointXPosition
                     * @return {?}
                     */
                    (dataPoint, topicColorMap, dataPointXPosition) => {
                        this.tooltip.update(dataPoint, topicColorMap, dataPointXPosition);
                    }));
                    chart.on('customMouseOut', (/**
                     * @return {?}
                     */
                    () => {
                        //this.tooltip.hide();
                    }));
                    this.tooltipContainer.datum([]).call(this.tooltip);
                }
                if (this.isObject(this.chartConfig.tooltip)) {
                    Object.entries(this.chartConfig.tooltip).forEach((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    ([option, value]) => {
                        if (this.tooltip[option] instanceof Function) {
                            this.tooltip[option](value);
                        }
                    }));
                }
            }
            if (this.isObject(chartConfig.events)) {
                Object.entries(chartConfig.events).forEach((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ([name, value]) => {
                    if (name === 'click') {
                        this.chartClick.pipe(takeUntil(this.canceller)).subscribe((/**
                         * @param {?} event
                         * @return {?}
                         */
                        (event) => {
                            value(event.chart, event.data, event.coords, event.mouse, event.scatter);
                        }));
                    }
                    else {
                        chart.on(name, (/**
                         * @param {...?} args
                         * @return {?}
                         */
                        (...args) => value(chart, ...args)));
                    }
                }));
            }
            this.ready.emit(true);
        }
    }
}
ChartBaseComponent.propDecorators = {
    data: [{ type: Input }],
    chartConfig: [{ type: Input }],
    exportAsImageEvt: [{ type: Input }],
    loading: [{ type: Input }],
    ready: [{ type: Output }],
    chartClick: [{ type: Output }]
};
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
if (!window) {
    window = window || (/** @type {?} */ ({}));
}
if (!navigator) {
    navigator = window.navigator || (/** @type {?} */ ({}));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BarChartComponent extends ChartBaseComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.chart = chart();
        this.selector = '.bar-chart';
        this.clickSelector = '.bar-chart .bar';
        this.tooltipContainerSelector = '.bar-chart .metadata-group';
        this.type = ChartType.Bar;
    }
}
BarChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'brite-bar-chart',
                template: "",
                styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .bar-chart .bar{shape-rendering:crispEdges}:host ::ng-deep .bar-chart .y-axis-group .tick text{font-size:14px}:host ::ng-deep .bar-chart .axis path{display:none}:host ::ng-deep .bar-chart .tick line{display:none}:host ::ng-deep .bar-chart .adjust-upwards{transform:translate(0,-10px)}:host ::ng-deep .bar-chart .percentage-label{fill:#666a73}"]
            }] }
];
/** @nocollapse */
BarChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
class BarChartModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DonutChartComponent extends ChartBaseComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.chart = chart$1();
        this.selector = '.donut-chart';
        this.clickSelector = '.donut-chart .arc';
        this.type = ChartType.Donut;
    }
}
DonutChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'brite-donut-chart',
                template: "",
                styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}"]
            }] }
];
/** @nocollapse */
DonutChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
class DonutChartModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LegendComponent extends ChartBaseComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.chart = chart$2();
        this.selector = '.britechart-legend';
        this.clickSelector = '.legend-entry';
        this.type = ChartType.Legend;
    }
}
LegendComponent.decorators = [
    { type: Component, args: [{
                selector: 'brite-legend',
                template: "",
                styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}"]
            }] }
];
/** @nocollapse */
LegendComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
class LegendModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LineChartComponent extends ChartBaseComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.chart = chart$3();
        this.chartClick = new EventEmitter();
        this.tooltipContainerSelector = '.line-chart .metadata-group .hover-marker';
        this.selector = '.line-chart';
        this.type = ChartType.Line;
        this.chart.on('customDataEntryClick', (/**
         * @param {?} event
         * @param {?} data
         * @param {?} mouse
         * @return {?}
         */
        (event, data, mouse) => {
            this.chartClick.emit({ chart: this.chart, event, data, mouse });
        }));
    }
}
LineChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'brite-line-chart',
                template: "",
                styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .line-chart .data-point-mark{fill:#fff}:host ::ng-deep .line-chart .topic .line{fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}:host ::ng-deep .line-chart .x.axis path,:host ::ng-deep .line-chart .y.axis path{display:none}:host ::ng-deep .line-chart .month-axis path{display:none}:host ::ng-deep .line-chart .masking-rectangle{fill:#fff}"]
            }] }
];
/** @nocollapse */
LineChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
LineChartComponent.propDecorators = {
    chartClick: [{ type: Output }]
};
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
class LineChartModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GroupedBarChartComponent extends ChartBaseComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.chart = chart$4();
        this.selector = '.grouped-bar';
        this.clickSelector = '.grouped-bar .bar';
        this.tooltipContainerSelector = '.grouped-bar .metadata-group';
        this.type = ChartType.GroupedBar;
    }
}
GroupedBarChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'brite-grouped-bar-chart',
                template: "",
                styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .grouped-bar .x-axis-group path,:host ::ng-deep .grouped-bar .y-axis-group path{display:none}:host ::ng-deep .grouped-bar .y-axis-group .tick text{font-size:14px}:host ::ng-deep .grouped-bar .tick line{display:none}"]
            }] }
];
/** @nocollapse */
GroupedBarChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
class GroupedBarChartModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScatterPlotChartComponent extends ChartBaseComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.chart = chart$5();
        this.tooltipContainerSelector = '.scatter-plot .metadata-group';
        this.selector = '.scatter-plot';
        this.type = ChartType.ScatterPlot;
    }
}
ScatterPlotChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'brite-scatter-plot-chart',
                template: "",
                styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .scatter-plot .y-axis-group .tick line{display:none}:host ::ng-deep .scatter-plot .y-axis-group .axis path{display:none}:host ::ng-deep .scatter-plot .x.axis path{display:none}:host ::ng-deep .scatter-plot .data-point-highlighter{stroke-width:1.2}"]
            }] }
];
/** @nocollapse */
ScatterPlotChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
class ScatterPlotChartModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BrushChartComponent extends ChartBaseComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.chart = chart$6();
        this.selector = '.brush-chart';
        this.type = ChartType.Brush;
    }
}
BrushChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'brite-brush-chart',
                template: "",
                styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .brush-chart .brush-area{fill:#eff2f5}:host ::ng-deep .brush-chart rect.brush-rect.selection{fill-opacity:.08;stroke-linejoin:round}:host ::ng-deep .brush-chart rect.brush-rect.handle{fill:#00d8d2;width:.2rem}:host ::ng-deep .brush-chart .axis path{display:none}"]
            }] }
];
/** @nocollapse */
BrushChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
class BrushChartModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BulletChartComponent extends ChartBaseComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.chart = chart$7();
        this.selector = '.bullet-chart';
        this.clickSelector = '.bullet-chart .range, .bullet-chart .measure, .bullet-chart .marker-line';
        this.type = ChartType.Bullet;
    }
}
BulletChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'brite-bullet-chart',
                template: "",
                styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .bullet-chart .marker-line{shape-rendering:crispEdges}:host ::ng-deep .bullet-chart .axis-group path{display:none}:host ::ng-deep .bullet-chart .bullet-title{font-size:16px}"]
            }] }
];
/** @nocollapse */
BulletChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
class BulletChartModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeatmapChartComponent extends ChartBaseComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.chart = chart$8();
        this.selector = '.heatmap';
        this.clickSelector = '.heatmap .box';
        this.type = ChartType.Heatmap;
    }
}
HeatmapChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'brite-heatmap-chart',
                template: "",
                styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}"]
            }] }
];
/** @nocollapse */
HeatmapChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
class HeatmapChartModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SparklineChartComponent extends ChartBaseComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.chart = chart$9();
        this.selector = '.spark-line';
        this.type = ChartType.Sparkline;
    }
}
SparklineChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'brite-sparkline-chart',
                template: "",
                styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .sparkline{stroke:#adb0b6;stroke-width:1;fill:none;stroke-linecap:round;stroke-linejoin:round}:host ::ng-deep .sparkline .line{stroke-width:2}:host ::ng-deep .sparkline .sparkline-circle{fill:#ff584c;stroke-width:0;display:none}:host ::ng-deep .sparkline .sparkline-area{stroke:none}"]
            }] }
];
/** @nocollapse */
SparklineChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
class SparkLineChartModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StackedAreaChartComponent extends ChartBaseComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.chart = chart$a();
        this.selector = '.stacked-area';
        this.tooltipContainerSelector = '.stacked-area .metadata-group .vertical-marker-container';
        this.type = ChartType.StackedArea;
    }
}
StackedAreaChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'brite-stacked-area-chart',
                template: "",
                styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .stacked-area .dot{display:none}:host ::ng-deep .stacked-area .y-axis-group path{display:none}:host ::ng-deep .stacked-area .x-axis-group path{display:none}:host ::ng-deep .stacked-area .area-outline{shape-rendering:geometricPrecision;fill:none;stroke-width:1.2}:host ::ng-deep .stacked-area .data-point-highlighter{stroke-width:1.2}:host ::ng-deep .stacked-area .empty-data-line{stroke-width:2px;stroke-linecap:round}"]
            }] }
];
/** @nocollapse */
StackedAreaChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
class StackedAreaChartModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StackedBarChartComponent extends ChartBaseComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.chart = chart$b();
        this.selector = '.stacked-bar';
        this.tooltipContainerSelector = '.stacked-bar .metadata-group';
        this.type = ChartType.StackedBar;
    }
}
StackedBarChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'brite-stacked-bar-chart',
                template: "",
                styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .stacked-bar .x-axis-group path,:host ::ng-deep .stacked-bar .y-axis-group path{display:none}:host ::ng-deep .stacked-bar .y-axis-group .tick text{font-size:14px}:host ::ng-deep .stacked-bar .tick line{display:none}"]
            }] }
];
/** @nocollapse */
StackedBarChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
class StackedBarChartModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StepChartComponent extends ChartBaseComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.chart = chart$c();
        this.selector = '.step-chart';
        this.clickSelector = '.step-chart .step';
        this.tooltipContainerSelector = '.step-chart .metadata-group';
        this.type = ChartType.Step;
    }
}
StepChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'brite-step-chart',
                template: "",
                styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .step-chart .step{fill:#8fdad8;stroke-width:0;shape-rendering:crispEdges}:host ::ng-deep .step-chart .step:hover{fill:#39c2c9}:host ::ng-deep .step-chart .axis path{display:none}:host ::ng-deep .step-chart .tick line{display:none}"]
            }] }
];
/** @nocollapse */
StepChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
class StepChartModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChartModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BarChartComponent, BarChartModule, BrushChartComponent, BrushChartModule, BulletChartComponent, BulletChartModule, ChartBaseComponent, ChartDateLabel, ChartGrid, ChartLineCurve, ChartModule, ChartType, DonutChartComponent, DonutChartModule, GroupedBarChartComponent, GroupedBarChartModule, HeatmapChartComponent, HeatmapChartModule, LegendComponent, LegendModule, LineChartComponent, LineChartModule, ScatterPlotChartComponent, ScatterPlotChartModule, SparkLineChartModule, SparklineChartComponent, StackedAreaChartComponent, StackedAreaChartModule, StackedBarChartComponent, StackedBarChartModule, StepChartComponent, StepChartModule };
//# sourceMappingURL=angular-britecharts.js.map
