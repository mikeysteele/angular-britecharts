/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Input, Output, EventEmitter } from '@angular/core';
import { Observable, fromEvent, Subject } from 'rxjs';
import * as d3Selection from 'd3-selection';
import colors from 'britecharts/dist/umd/colors.min';
import miniTooltip from 'britecharts/dist/umd/miniTooltip.min';
import tooltip from 'britecharts/dist/umd/tooltip.min';
import { ChartType } from './chart.types';
import { debounceTime, takeUntil } from 'rxjs/operators';
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
        function (obj) { return !!obj && typeof obj === 'object' && !Array.isArray(obj); });
        fromEvent(window, 'resize')
            .pipe(debounceTime(250), takeUntil(this.canceller)).subscribe((/**
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
                    var _b = tslib_1.__read(_a, 2), option = _b[0], value = _b[1];
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
                    var _b = tslib_1.__read(_a, 2), option = _b[0], value = _b[1];
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
                        var _b = tslib_1.__read(_a, 2), option = _b[0], value = _b[1];
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
                    var _b = tslib_1.__read(_a, 2), name = _b[0], value = _b[1];
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
                        chart.on(name, (/**
                         * @param {...?} args
                         * @return {?}
                         */
                        function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            return value.apply(void 0, tslib_1.__spread([chart], args));
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
export { ChartBaseComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYnJpdGVjaGFydHMvIiwic291cmNlcyI6WyJsaWIvY2hhcnQuYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBYSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBZ0QsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sS0FBSyxXQUFXLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sTUFBTSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JELE9BQU8sV0FBVyxNQUFNLHNDQUFzQyxDQUFDO0FBQy9ELE9BQU8sT0FBTyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RDtJQTRCRSw0QkFBWSxVQUFzQjtRQUFsQyxpQkFVQztRQS9CZ0IsVUFBSyxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzNELGVBQVUsR0FBRyxJQUFJLFlBQVksRUFNMUMsQ0FBQztRQUdLLGNBQVMsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQVUxQyxhQUFROzs7O1FBQUcsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDLENBQUMsR0FBRyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQXZELENBQXVELEVBQUM7UUFFbEYsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDeEIsSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDMUIsQ0FBQyxTQUFTOzs7UUFBQztZQUNWLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDLEVBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFDTSx3Q0FBVzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBQ00scUNBQVE7OztJQUFmO1FBQUEsaUJBTUM7UUFMQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsSUFBSTtnQkFDbEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRU0sd0NBQVc7Ozs7SUFBbEIsVUFBbUIsT0FBc0I7UUFDdkMsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7Z0JBQ2hDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLFlBQVksUUFBUSxFQUFFO29CQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7aUJBQ2hEO2dCQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixPQUFPO2FBQ1I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDekI7U0FDRjtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7SUFDTSxzQ0FBUzs7O0lBQWhCO1FBQUEsaUJBeUdDOztZQXhHTyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7O1lBQzdELGNBQWMsR0FBRyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsY0FBYyxDQUFDLElBQUksRUFBRSxFQUFPLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSztRQUM3RyxJQUFBLFNBQTZCLEVBQTNCLGdCQUFLLEVBQUUsNEJBQW9CO1FBQ25DLElBQUksY0FBYyxFQUFFO1lBQ2xCLHFHQUFxRztZQUNyRyxtQkFBbUI7WUFDbkIsS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUU1QixJQUFJLEtBQUssQ0FBQyxzQkFBc0IsWUFBWSxRQUFRLEVBQUU7Z0JBQ3BELEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQztZQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQyxFQUFlO3dCQUFmLDBCQUFlLEVBQWQsY0FBTSxFQUFFLGFBQUs7b0JBQzVELElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLFFBQVEsRUFBRTt3QkFDckMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN0QjtnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNKO1lBRUQsaUdBQWlHO1lBQ2pHLHdHQUF3RztZQUN4Ryw4QkFBOEI7WUFDOUIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFO2dCQUMzRCxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQyxFQUFpQzt3QkFBakMsMEJBQWlDLEVBQWhDLGNBQU0sRUFBRSxhQUFLO29CQUM5RSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxRQUFRLEVBQUU7d0JBQ3JDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUM7cUJBQ3ZDO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEtBQUssUUFBUSxFQUFFO29CQUN0RCxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTt3QkFDdkQsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7NEJBQ3ZDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7eUJBQ2xGOzZCQUFNOzRCQUNMLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7eUJBQ3hFO3FCQUNGO2lCQUNGO3FCQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUN4RCxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ25EO2FBQ0Y7WUFFRCxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWpELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLFdBQVcsRUFBRTtnQkFDdkUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxzQkFBc0I7Ozs7OztnQkFBRSxVQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSztvQkFDbkQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZELENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxXQUFXLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGFBQWE7Ozs7Ozs7Z0JBQUUsVUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPO29CQUN4RCxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztnQkFDaEUsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPOzs7O2dCQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBNUMsQ0FBNEMsRUFBQyxDQUFDO2FBQ2hJO1lBR0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7Z0JBQzFGLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ2xGLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxFQUFFLENBQUM7b0JBQzdCLEtBQUssQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0MsS0FBSyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNqRCxLQUFLLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzNEO3FCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDdEgsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQUUsQ0FBQztvQkFFekIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUI7OztvQkFBRTt3QkFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQyxFQUFDLENBQUM7b0JBQ0gsS0FBSyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUI7Ozs7OztvQkFBRSxVQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsa0JBQWtCO3dCQUN2RSxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBQ3BFLENBQUMsRUFBQyxDQUFDO29CQUNILEtBQUssQ0FBQyxFQUFFLENBQUMsZ0JBQWdCOzs7b0JBQUU7d0JBQ3pCLHNCQUFzQjtvQkFDeEIsQ0FBQyxFQUFDLENBQUM7b0JBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNwRDtnQkFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU87Ozs7b0JBQUMsVUFBQyxFQUFlOzRCQUFmLDBCQUFlLEVBQWQsY0FBTSxFQUFFLGFBQUs7d0JBQzlELElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxRQUFRLEVBQUU7NEJBQzVDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQzdCO29CQUNILENBQUMsRUFBQyxDQUFDO2lCQUNKO2FBQ0Y7WUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsRUFBaUQ7d0JBQWpELDBCQUFpRCxFQUFoRCxZQUFJLEVBQUUsYUFBSztvQkFDdEQsSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO3dCQUNwQixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7Ozt3QkFBQyxVQUFDLEtBQUs7NEJBQzlELEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDM0UsQ0FBQyxFQUFDLENBQUM7cUJBQ0o7eUJBQU07d0JBQ0wsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJOzs7O3dCQUFFOzRCQUFDLGNBQU87aUNBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztnQ0FBUCx5QkFBTzs7NEJBQUssT0FBQSxLQUFLLGlDQUFDLEtBQUssR0FBSyxJQUFJO3dCQUFwQixDQUFxQixFQUFDLENBQUM7cUJBQ3BEO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7O3VCQTFLQSxLQUFLOzhCQUdMLEtBQUs7bUNBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLE1BQU07NkJBQ04sTUFBTTs7SUFvS1QseUJBQUM7Q0FBQSxBQTVLRCxJQTRLQztTQTVLWSxrQkFBa0I7OztJQUM3QixrQ0FFRTs7SUFDRix5Q0FBaUM7O0lBQ2pDLDhDQUFrRDs7SUFDbEQscUNBQWlDOztJQUNqQyxtQ0FBNEU7O0lBQzVFLHdDQU1LOztJQUVMLG1DQUFrQjs7Ozs7SUFDbEIsdUNBQWtEOzs7OztJQUNsRCxnQ0FBMEI7Ozs7O0lBQzFCLGtDQUEwQjs7Ozs7SUFDMUIsdUNBQXlCOzs7OztJQUN6QixzQ0FBMkI7Ozs7O0lBQzNCLDJDQUFnQzs7Ozs7SUFDaEMsc0RBQTJDOztJQUUzQyxxQ0FBb0I7O0lBQ3BCLDhDQUE2Qjs7Ozs7SUFDN0Isc0NBQW9GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25DaGFuZ2VzLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIFNpbXBsZUNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIGQzU2VsZWN0aW9uIGZyb20gJ2QzLXNlbGVjdGlvbic7XG5pbXBvcnQgY29sb3JzIGZyb20gJ2JyaXRlY2hhcnRzL2Rpc3QvdW1kL2NvbG9ycy5taW4nO1xuaW1wb3J0IG1pbmlUb29sdGlwIGZyb20gJ2JyaXRlY2hhcnRzL2Rpc3QvdW1kL21pbmlUb29sdGlwLm1pbic7XG5pbXBvcnQgdG9vbHRpcCBmcm9tICdicml0ZWNoYXJ0cy9kaXN0L3VtZC90b29sdGlwLm1pbic7XG5pbXBvcnQgeyBDaGFydFR5cGUsIENoYXJ0Q29uZmlnIH0gZnJvbSAnLi9jaGFydC50eXBlcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIENoYXJ0QmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwdWJsaWMgZGF0YTogYW55W10gfCB7XG4gICAgZGF0YUJ5VG9waWM6IFtdXG4gIH07XG4gIEBJbnB1dCgpIHB1YmxpYyBjaGFydENvbmZpZzogYW55O1xuICBASW5wdXQoKSBwdWJsaWMgZXhwb3J0QXNJbWFnZUV2dDogT2JzZXJ2YWJsZTxhbnk+O1xuICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZzogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHB1YmxpYyByZWFkeTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcHVibGljIGNoYXJ0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBjaGFydDogYW55LFxuICAgIGRhdGE6IGFueSxcbiAgICBjb29yZHM/OiBhbnksXG4gICAgbW91c2U/OiBhbnksXG4gICAgc2NhdHRlcj86IGFueVxuICB9PigpO1xuXG4gIHB1YmxpYyBjaGFydDogYW55O1xuICBwcm90ZWN0ZWQgY2FuY2VsbGVyOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBwcm90ZWN0ZWQgdHlwZTogQ2hhcnRUeXBlO1xuICBwcm90ZWN0ZWQgY29udGFpbmVyOiBhbnk7XG4gIHByb3RlY3RlZCBzZWxlY3Rvcjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgY2xpY2tTZWxlY3Rvcjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgdG9vbHRpcENvbnRhaW5lclNlbGVjdG9yOiBzdHJpbmc7XG5cbiAgcHVibGljIHRvb2x0aXA6IGFueTtcbiAgcHVibGljIHRvb2x0aXBDb250YWluZXI6IGFueTtcbiAgcHJpdmF0ZSBpc09iamVjdCA9IChvYmopID0+ICEhb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KG9iaik7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMjUwKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuY2FuY2VsbGVyKVxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmRyYXdDaGFydCgpO1xuICAgICAgfSk7XG4gICAgdGhpcy5lbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGQzU2VsZWN0aW9uLnNlbGVjdCh0aGlzLmVsKTtcbiAgfVxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxsZXIubmV4dCgpO1xuICB9XG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5leHBvcnRBc0ltYWdlRXZ0KSB7XG4gICAgICB0aGlzLmV4cG9ydEFzSW1hZ2VFdnQuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmNoYXJ0LmV4cG9ydENoYXJ0KGRhdGEuZmlsZW5hbWUsIGRhdGEudGl0bGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5sb2FkaW5nKSB7XG4gICAgICBpZiAoY2hhbmdlcy5sb2FkaW5nLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5jaGFydC5sb2FkaW5nU3RhdGUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyLmh0bWwodGhpcy5jaGFydC5sb2FkaW5nU3RhdGUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWFkeS5lbWl0KHRydWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5odG1sKCcnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuY2hhcnRDb25maWcgfHwgdGhpcy50eXBlICYmIChjaGFuZ2VzLmRhdGEpKSB7XG4gICAgICB0aGlzLmRyYXdDaGFydCgpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZHJhd0NoYXJ0KCk6IHZvaWQge1xuICAgIGNvbnN0IGNoYXJ0Q29udGFpbmVyID0gdGhpcy5jb250YWluZXIgPSBkM1NlbGVjdGlvbi5zZWxlY3QodGhpcy5lbCk7XG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjaGFydENvbnRhaW5lci5ub2RlKCkgPyAoY2hhcnRDb250YWluZXIubm9kZSgpIGFzIGFueSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggOiBmYWxzZTtcbiAgICBjb25zdCB7IGNoYXJ0LCBjaGFydENvbmZpZyB9ID0gdGhpcztcbiAgICBpZiAoY29udGFpbmVyV2lkdGgpIHtcbiAgICAgIC8vIFNldCB0aGUgY29udGFpbmVyIHdpZHRoIHRvIGEgc3RhbmRhciB2YWx1ZS4gSWYgd2lkdGggaXMgcGFzc2VkIGluIHRoZSBwcm9wZXJ0aWVzIGl0IGlzIGdvaW5nIHRvIGJlXG4gICAgICAvLyBvdmVycmlkZW4gbGF0ZXIuXG4gICAgICBjaGFydC53aWR0aChjb250YWluZXJXaWR0aCk7XG5cbiAgICAgIGlmIChjaGFydC5zaG91bGRSZXZlcnNlQ29sb3JMaXN0IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgY2hhcnQuc2hvdWxkUmV2ZXJzZUNvbG9yTGlzdChmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc09iamVjdChjaGFydENvbmZpZy5wcm9wZXJ0aWVzKSkge1xuICAgICAgICBPYmplY3QuZW50cmllcyhjaGFydENvbmZpZy5wcm9wZXJ0aWVzKS5mb3JFYWNoKChbb3B0aW9uLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICBpZiAoY2hhcnRbb3B0aW9uXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBjaGFydFtvcHRpb25dKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgc2l6ZSBvZiBzb21lIHByb3BlcnR5IG11c3QgYmUgc2V0IHJlbGF0aXZlIHRvIHRoZSBjb250YWluZXIgd2lkdGggaXQgbXVzdCBiZSBzZW50IGluIGFuXG4gICAgICAvLyBvYmplY3QgbmFtZSAnc2l6ZVJlbGF0aXZlVG9Db250YWluZXJXaWR0aCcgY29udGFpbmluZyB0aGUgcHJvcGVydHkgdG8gc2V0IGFzIGtleSBhbmQgdGhlIHJhdGlvIHRvIHRoZVxuICAgICAgLy8gY29udGFpbmVyJ3Mgd2lkdGggYXMgdmFsdWUuXG4gICAgICBpZiAodGhpcy5pc09iamVjdChjaGFydENvbmZpZy5zaXplUmVsYXRpdmVUb0NvbnRhaW5lcldpZHRoKSkge1xuICAgICAgICBPYmplY3QuZW50cmllcyhjaGFydENvbmZpZy5zaXplUmVsYXRpdmVUb0NvbnRhaW5lcldpZHRoKS5mb3JFYWNoKChbb3B0aW9uLCB2YWx1ZV06IFtzdHJpbmcsIG51bWJlcl0pID0+IHtcbiAgICAgICAgICBpZiAoY2hhcnRbb3B0aW9uXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBjaGFydFtvcHRpb25dKGNvbnRhaW5lcldpZHRoIC8gdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzT2JqZWN0KGNoYXJ0Q29uZmlnLmNvbG9ycykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGFydENvbmZpZy5jb2xvcnMuY29sb3JTY2hlbWEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKGNvbG9ycy5jb2xvclNjaGVtYXNbY2hhcnRDb25maWcuY29sb3JzLmNvbG9yU2NoZW1hXSkge1xuICAgICAgICAgICAgaWYgKGNoYXJ0Q29uZmlnLmNvbG9ycy5yZXZlcnNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGNoYXJ0LmNvbG9yU2NoZW1hKGNvbG9ycy5jb2xvclNjaGVtYXNbY2hhcnRDb25maWcuY29sb3JzLmNvbG9yU2NoZW1hXS5yZXZlcnNlKCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hhcnQuY29sb3JTY2hlbWEoY29sb3JzLmNvbG9yU2NoZW1hc1tjaGFydENvbmZpZy5jb2xvcnMuY29sb3JTY2hlbWFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjaGFydENvbmZpZy5jb2xvcnMuY29sb3JTY2hlbWEpKSB7XG4gICAgICAgICAgY2hhcnQuY29sb3JTY2hlbWEoY2hhcnRDb25maWcuY29sb3JzLmNvbG9yU2NoZW1hKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaGFydENvbnRhaW5lci5kYXR1bSh0aGlzLmRhdGEpLmNhbGwodGhpcy5jaGFydCk7XG5cbiAgICAgIGlmICh0aGlzLnR5cGUgPT09IENoYXJ0VHlwZS5MaW5lIHx8IHRoaXMudHlwZSA9PT0gQ2hhcnRUeXBlLlN0YWNrZWRBcmVhKSB7XG4gICAgICAgIGNoYXJ0Lm9uKCdjdXN0b21EYXRhRW50cnlDbGljaycsIChkYXRhLCBjb29yZHMsIG1vdXNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGFydENsaWNrLmVtaXQoeyBjaGFydCwgZGF0YSwgY29vcmRzLCBtb3VzZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gQ2hhcnRUeXBlLlNjYXR0ZXJQbG90KSB7XG4gICAgICAgIHRoaXMuY2hhcnQub24oJ2N1c3RvbUNsaWNrJywgKGRhdGEsIGNvb3JkcywgbW91c2UsIHNjYXR0ZXIpID0+IHtcbiAgICAgICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdCh7IGNoYXJ0LCBkYXRhLCBjb29yZHMsIG1vdXNlLCBzY2F0dGVyIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGQzU2VsZWN0aW9uLnNlbGVjdCh0aGlzLmVsKS5zZWxlY3RBbGwodGhpcy5jbGlja1NlbGVjdG9yKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHRoaXMuY2hhcnRDbGljay5lbWl0KHsgY2hhcnQsIGRhdGE6IGV2ZW50IH0pKTtcbiAgICAgIH1cblxuXG4gICAgICBpZiAodGhpcy5jaGFydENvbmZpZy50b29sdGlwICYmIHRoaXMudG9vbHRpcENvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMudG9vbHRpcENvbnRhaW5lciA9IGQzU2VsZWN0aW9uLnNlbGVjdCh0aGlzLmVsKS5zZWxlY3QodGhpcy50b29sdGlwQ29udGFpbmVyU2VsZWN0b3IpO1xuICAgICAgICBpZiAoW0NoYXJ0VHlwZS5CYXIsIENoYXJ0VHlwZS5TdGVwLCBDaGFydFR5cGUuU2NhdHRlclBsb3RdLmluZGV4T2YodGhpcy50eXBlKSA+IC0xKSB7XG4gICAgICAgICAgdGhpcy50b29sdGlwID0gbWluaVRvb2x0aXAoKTtcbiAgICAgICAgICBjaGFydC5vbignY3VzdG9tTW91c2VPdmVyJywgdGhpcy50b29sdGlwLnNob3cpO1xuICAgICAgICAgIGNoYXJ0Lm9uKCdjdXN0b21Nb3VzZU1vdmUnLCB0aGlzLnRvb2x0aXAudXBkYXRlKTtcbiAgICAgICAgICBjaGFydC5vbignY3VzdG9tTW91c2VPdXQnLCB0aGlzLnRvb2x0aXAuaGlkZSk7XG4gICAgICAgICAgdGhpcy50b29sdGlwQ29udGFpbmVyLmRhdHVtKHRoaXMuZGF0YSkuY2FsbCh0aGlzLnRvb2x0aXApO1xuICAgICAgICB9IGVsc2UgaWYgKFtDaGFydFR5cGUuTGluZSwgQ2hhcnRUeXBlLlN0YWNrZWRBcmVhLCBDaGFydFR5cGUuR3JvdXBlZEJhciwgQ2hhcnRUeXBlLlN0YWNrZWRCYXJdLmluZGV4T2YodGhpcy50eXBlKSA+IC0xKSB7XG4gICAgICAgICAgdGhpcy50b29sdGlwID0gdG9vbHRpcCgpO1xuXG4gICAgICAgICAgY2hhcnQub24oJ2N1c3RvbU1vdXNlT3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcC5zaG93KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY2hhcnQub24oJ2N1c3RvbU1vdXNlTW92ZScsIChkYXRhUG9pbnQsIHRvcGljQ29sb3JNYXAsIGRhdGFQb2ludFhQb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy50b29sdGlwLnVwZGF0ZShkYXRhUG9pbnQsIHRvcGljQ29sb3JNYXAsIGRhdGFQb2ludFhQb3NpdGlvbik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY2hhcnQub24oJ2N1c3RvbU1vdXNlT3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgLy90aGlzLnRvb2x0aXAuaGlkZSgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy50b29sdGlwQ29udGFpbmVyLmRhdHVtKFtdKS5jYWxsKHRoaXMudG9vbHRpcCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNPYmplY3QodGhpcy5jaGFydENvbmZpZy50b29sdGlwKSkge1xuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuY2hhcnRDb25maWcudG9vbHRpcCkuZm9yRWFjaCgoW29wdGlvbiwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50b29sdGlwW29wdGlvbl0gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICB0aGlzLnRvb2x0aXBbb3B0aW9uXSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXNPYmplY3QoY2hhcnRDb25maWcuZXZlbnRzKSkge1xuICAgICAgICBPYmplY3QuZW50cmllcyhjaGFydENvbmZpZy5ldmVudHMpLmZvckVhY2goKFtuYW1lLCB2YWx1ZV06IFtzdHJpbmcsIChjaGFydCwgLi4uYXJncykgPT4gdm9pZF0pID0+IHtcbiAgICAgICAgICBpZiAobmFtZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgdGhpcy5jaGFydENsaWNrLnBpcGUodGFrZVVudGlsKHRoaXMuY2FuY2VsbGVyKSkuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICAgICAgICB2YWx1ZShldmVudC5jaGFydCwgZXZlbnQuZGF0YSwgZXZlbnQuY29vcmRzLCBldmVudC5tb3VzZSwgZXZlbnQuc2NhdHRlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hhcnQub24obmFtZSwgKC4uLmFyZ3MpID0+IHZhbHVlKGNoYXJ0LCAuLi5hcmdzKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVhZHkuZW1pdCh0cnVlKTtcbiAgICB9XG4gIH1cbn1cblxuIl19