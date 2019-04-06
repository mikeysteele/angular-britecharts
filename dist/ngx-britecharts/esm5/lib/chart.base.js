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
        function (obj) { return !!obj && typeof obj === 'object'; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1icml0ZWNoYXJ0cy8iLCJzb3VyY2VzIjpbImxpYi9jaGFydC5iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFhLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFnRCxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxLQUFLLFdBQVcsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxNQUFNLE1BQU0saUNBQWlDLENBQUM7QUFDckQsT0FBTyxXQUFXLE1BQU0sc0NBQXNDLENBQUM7QUFDL0QsT0FBTyxPQUFPLE1BQU0sa0NBQWtDLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpEO0lBNEJFLDRCQUFZLFVBQXNCO1FBQWxDLGlCQVVDO1FBL0JnQixVQUFLLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDM0QsZUFBVSxHQUFHLElBQUksWUFBWSxFQU0xQyxDQUFDO1FBR0ssY0FBUyxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBVTFDLGFBQVE7Ozs7UUFBRyxVQUFDLEdBQUcsSUFBSyxPQUFBLENBQUMsQ0FBQyxHQUFHLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFoQyxDQUFnQyxFQUFDO1FBRTNELFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO2FBQ3hCLElBQUksQ0FDSCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQzFCLENBQUMsU0FBUzs7O1FBQUM7WUFDVixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxFQUFDLENBQUM7UUFDTCxJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBQ00sd0NBQVc7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUNNLHFDQUFROzs7SUFBZjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7WUFBQyxVQUFBLElBQUk7Z0JBQ2xDLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BELENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVNLHdDQUFXOzs7O0lBQWxCLFVBQW1CLE9BQXNCO1FBQ3ZDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO2dCQUNoQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxZQUFZLFFBQVEsRUFBRTtvQkFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2lCQUNoRDtnQkFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsT0FBTzthQUNSO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3pCO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7O0lBQ00sc0NBQVM7OztJQUFoQjtRQUFBLGlCQXlHQzs7WUF4R08sY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOztZQUM3RCxjQUFjLEdBQUcsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLGNBQWMsQ0FBQyxJQUFJLEVBQUUsRUFBTyxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUs7UUFDN0csSUFBQSxTQUE2QixFQUEzQixnQkFBSyxFQUFFLDRCQUFvQjtRQUNuQyxJQUFJLGNBQWMsRUFBRTtZQUNsQixxR0FBcUc7WUFDckcsbUJBQW1CO1lBQ25CLEtBQUssQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFNUIsSUFBSSxLQUFLLENBQUMsc0JBQXNCLFlBQVksUUFBUSxFQUFFO2dCQUNwRCxLQUFLLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDckM7WUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsRUFBZTt3QkFBZiwwQkFBZSxFQUFkLGNBQU0sRUFBRSxhQUFLO29CQUM1RCxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxRQUFRLEVBQUU7d0JBQ3JDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDdEI7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSjtZQUVELGlHQUFpRztZQUNqRyx3R0FBd0c7WUFDeEcsOEJBQThCO1lBQzlCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsNEJBQTRCLENBQUMsRUFBRTtnQkFDM0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUMsRUFBaUM7d0JBQWpDLDBCQUFpQyxFQUFoQyxjQUFNLEVBQUUsYUFBSztvQkFDOUUsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksUUFBUSxFQUFFO3dCQUNyQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDO3FCQUN2QztnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNKO1lBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDckMsSUFBSSxPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxLQUFLLFFBQVEsRUFBRTtvQkFDdEQsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7d0JBQ3ZELElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFOzRCQUN2QyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO3lCQUNsRjs2QkFBTTs0QkFDTCxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3lCQUN4RTtxQkFDRjtpQkFDRjtxQkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDeEQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUNuRDthQUNGO1lBRUQsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVqRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3ZFLEtBQUssQ0FBQyxFQUFFLENBQUMsc0JBQXNCOzs7Ozs7Z0JBQUUsVUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUs7b0JBQ25ELEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsV0FBVyxFQUFFO2dCQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxhQUFhOzs7Ozs7O2dCQUFFLFVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTztvQkFDeEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLENBQUM7Z0JBQ2hFLENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTzs7OztnQkFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQTVDLENBQTRDLEVBQUMsQ0FBQzthQUNoSTtZQUdELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFO2dCQUM3RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUMxRixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUNsRixJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsRUFBRSxDQUFDO29CQUM3QixLQUFLLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQy9DLEtBQUssQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDakQsS0FBSyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM5QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMzRDtxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ3RILElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUFFLENBQUM7b0JBRXpCLEtBQUssQ0FBQyxFQUFFLENBQUMsaUJBQWlCOzs7b0JBQUU7d0JBQzFCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3RCLENBQUMsRUFBQyxDQUFDO29CQUNILEtBQUssQ0FBQyxFQUFFLENBQUMsaUJBQWlCOzs7Ozs7b0JBQUUsVUFBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLGtCQUFrQjt3QkFDdkUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO29CQUNwRSxDQUFDLEVBQUMsQ0FBQztvQkFDSCxLQUFLLENBQUMsRUFBRSxDQUFDLGdCQUFnQjs7O29CQUFFO3dCQUN6QixzQkFBc0I7b0JBQ3hCLENBQUMsRUFBQyxDQUFDO29CQUVILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDcEQ7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPOzs7O29CQUFDLFVBQUMsRUFBZTs0QkFBZiwwQkFBZSxFQUFkLGNBQU0sRUFBRSxhQUFLO3dCQUM5RCxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksUUFBUSxFQUFFOzRCQUM1QyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUM3QjtvQkFDSCxDQUFDLEVBQUMsQ0FBQztpQkFDSjthQUNGO1lBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDckMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTzs7OztnQkFBQyxVQUFDLEVBQWlEO3dCQUFqRCwwQkFBaUQsRUFBaEQsWUFBSSxFQUFFLGFBQUs7b0JBQ3RELElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTt3QkFDcEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7d0JBQUMsVUFBQyxLQUFLOzRCQUM5RCxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzNFLENBQUMsRUFBQyxDQUFDO3FCQUNKO3lCQUFNO3dCQUNMLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSTs7Ozt3QkFBRTs0QkFBQyxjQUFPO2lDQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87Z0NBQVAseUJBQU87OzRCQUFLLE9BQUEsS0FBSyxpQ0FBQyxLQUFLLEdBQUssSUFBSTt3QkFBcEIsQ0FBcUIsRUFBQyxDQUFDO3FCQUNwRDtnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNKO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzt1QkExS0EsS0FBSzs4QkFHTCxLQUFLO21DQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxNQUFNOzZCQUNOLE1BQU07O0lBb0tULHlCQUFDO0NBQUEsQUE1S0QsSUE0S0M7U0E1S1ksa0JBQWtCOzs7SUFDN0Isa0NBRUU7O0lBQ0YseUNBQWlDOztJQUNqQyw4Q0FBa0Q7O0lBQ2xELHFDQUFpQzs7SUFDakMsbUNBQTRFOztJQUM1RSx3Q0FNSzs7SUFFTCxtQ0FBa0I7Ozs7O0lBQ2xCLHVDQUFrRDs7Ozs7SUFDbEQsZ0NBQTBCOzs7OztJQUMxQixrQ0FBMEI7Ozs7O0lBQzFCLHVDQUF5Qjs7Ozs7SUFDekIsc0NBQTJCOzs7OztJQUMzQiwyQ0FBZ0M7Ozs7O0lBQ2hDLHNEQUEyQzs7SUFFM0MscUNBQW9COztJQUNwQiw4Q0FBNkI7Ozs7O0lBQzdCLHNDQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uQ2hhbmdlcywgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBTaW1wbGVDaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyBkM1NlbGVjdGlvbiBmcm9tICdkMy1zZWxlY3Rpb24nO1xuaW1wb3J0IGNvbG9ycyBmcm9tICdicml0ZWNoYXJ0cy9kaXN0L3VtZC9jb2xvcnMubWluJztcbmltcG9ydCBtaW5pVG9vbHRpcCBmcm9tICdicml0ZWNoYXJ0cy9kaXN0L3VtZC9taW5pVG9vbHRpcC5taW4nO1xuaW1wb3J0IHRvb2x0aXAgZnJvbSAnYnJpdGVjaGFydHMvZGlzdC91bWQvdG9vbHRpcC5taW4nO1xuaW1wb3J0IHsgQ2hhcnRUeXBlLCBDaGFydENvbmZpZyB9IGZyb20gJy4vY2hhcnQudHlwZXMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBDaGFydEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHVibGljIGRhdGE6IGFueVtdIHwge1xuICAgIGRhdGFCeVRvcGljOiBbXVxuICB9O1xuICBASW5wdXQoKSBwdWJsaWMgY2hhcnRDb25maWc6IGFueTtcbiAgQElucHV0KCkgcHVibGljIGV4cG9ydEFzSW1hZ2VFdnQ6IE9ic2VydmFibGU8YW55PjtcbiAgQElucHV0KCkgcHVibGljIGxvYWRpbmc6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBwdWJsaWMgcmVhZHk6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBjaGFydENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgY2hhcnQ6IGFueSxcbiAgICBkYXRhOiBhbnksXG4gICAgY29vcmRzPzogYW55LFxuICAgIG1vdXNlPzogYW55LFxuICAgIHNjYXR0ZXI/OiBhbnlcbiAgfT4oKTtcblxuICBwdWJsaWMgY2hhcnQ6IGFueTtcbiAgcHJvdGVjdGVkIGNhbmNlbGxlcjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJvdGVjdGVkIHR5cGU6IENoYXJ0VHlwZTtcbiAgcHJvdGVjdGVkIGNvbnRhaW5lcjogYW55O1xuICBwcm90ZWN0ZWQgc2VsZWN0b3I6IHN0cmluZztcbiAgcHJvdGVjdGVkIGNsaWNrU2VsZWN0b3I6IHN0cmluZztcbiAgcHJvdGVjdGVkIHRvb2x0aXBDb250YWluZXJTZWxlY3Rvcjogc3RyaW5nO1xuXG4gIHB1YmxpYyB0b29sdGlwOiBhbnk7XG4gIHB1YmxpYyB0b29sdGlwQ29udGFpbmVyOiBhbnk7XG4gIHByaXZhdGUgaXNPYmplY3QgPSAob2JqKSA9PiAhIW9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgyNTApLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5jYW5jZWxsZXIpXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gICAgICB9KTtcbiAgICB0aGlzLmVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuY29udGFpbmVyID0gZDNTZWxlY3Rpb24uc2VsZWN0KHRoaXMuZWwpO1xuICB9XG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbGxlci5uZXh0KCk7XG4gIH1cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV4cG9ydEFzSW1hZ2VFdnQpIHtcbiAgICAgIHRoaXMuZXhwb3J0QXNJbWFnZUV2dC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuY2hhcnQuZXhwb3J0Q2hhcnQoZGF0YS5maWxlbmFtZSwgZGF0YS50aXRsZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmxvYWRpbmcpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmxvYWRpbmcuY3VycmVudFZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJ0LmxvYWRpbmdTdGF0ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgdGhpcy5jb250YWluZXIuaHRtbCh0aGlzLmNoYXJ0LmxvYWRpbmdTdGF0ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlYWR5LmVtaXQodHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmh0bWwoJycpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5jaGFydENvbmZpZyB8fCB0aGlzLnR5cGUgJiYgKGNoYW5nZXMuZGF0YSkpIHtcbiAgICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBkcmF3Q2hhcnQoKTogdm9pZCB7XG4gICAgY29uc3QgY2hhcnRDb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciA9IGQzU2VsZWN0aW9uLnNlbGVjdCh0aGlzLmVsKTtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IGNoYXJ0Q29udGFpbmVyLm5vZGUoKSA/IChjaGFydENvbnRhaW5lci5ub2RlKCkgYXMgYW55KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA6IGZhbHNlO1xuICAgIGNvbnN0IHsgY2hhcnQsIGNoYXJ0Q29uZmlnIH0gPSB0aGlzO1xuICAgIGlmIChjb250YWluZXJXaWR0aCkge1xuICAgICAgLy8gU2V0IHRoZSBjb250YWluZXIgd2lkdGggdG8gYSBzdGFuZGFyIHZhbHVlLiBJZiB3aWR0aCBpcyBwYXNzZWQgaW4gdGhlIHByb3BlcnRpZXMgaXQgaXMgZ29pbmcgdG8gYmVcbiAgICAgIC8vIG92ZXJyaWRlbiBsYXRlci5cbiAgICAgIGNoYXJ0LndpZHRoKGNvbnRhaW5lcldpZHRoKTtcblxuICAgICAgaWYgKGNoYXJ0LnNob3VsZFJldmVyc2VDb2xvckxpc3QgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICBjaGFydC5zaG91bGRSZXZlcnNlQ29sb3JMaXN0KGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzT2JqZWN0KGNoYXJ0Q29uZmlnLnByb3BlcnRpZXMpKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGNoYXJ0Q29uZmlnLnByb3BlcnRpZXMpLmZvckVhY2goKFtvcHRpb24sIHZhbHVlXSkgPT4ge1xuICAgICAgICAgIGlmIChjaGFydFtvcHRpb25dIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGNoYXJ0W29wdGlvbl0odmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBzaXplIG9mIHNvbWUgcHJvcGVydHkgbXVzdCBiZSBzZXQgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5lciB3aWR0aCBpdCBtdXN0IGJlIHNlbnQgaW4gYW5cbiAgICAgIC8vIG9iamVjdCBuYW1lICdzaXplUmVsYXRpdmVUb0NvbnRhaW5lcldpZHRoJyBjb250YWluaW5nIHRoZSBwcm9wZXJ0eSB0byBzZXQgYXMga2V5IGFuZCB0aGUgcmF0aW8gdG8gdGhlXG4gICAgICAvLyBjb250YWluZXIncyB3aWR0aCBhcyB2YWx1ZS5cbiAgICAgIGlmICh0aGlzLmlzT2JqZWN0KGNoYXJ0Q29uZmlnLnNpemVSZWxhdGl2ZVRvQ29udGFpbmVyV2lkdGgpKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGNoYXJ0Q29uZmlnLnNpemVSZWxhdGl2ZVRvQ29udGFpbmVyV2lkdGgpLmZvckVhY2goKFtvcHRpb24sIHZhbHVlXTogW3N0cmluZywgbnVtYmVyXSkgPT4ge1xuICAgICAgICAgIGlmIChjaGFydFtvcHRpb25dIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGNoYXJ0W29wdGlvbl0oY29udGFpbmVyV2lkdGggLyB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXNPYmplY3QoY2hhcnRDb25maWcuY29sb3JzKSkge1xuICAgICAgICBpZiAodHlwZW9mIGNoYXJ0Q29uZmlnLmNvbG9ycy5jb2xvclNjaGVtYSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAoY29sb3JzLmNvbG9yU2NoZW1hc1tjaGFydENvbmZpZy5jb2xvcnMuY29sb3JTY2hlbWFdKSB7XG4gICAgICAgICAgICBpZiAoY2hhcnRDb25maWcuY29sb3JzLnJldmVyc2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY2hhcnQuY29sb3JTY2hlbWEoY29sb3JzLmNvbG9yU2NoZW1hc1tjaGFydENvbmZpZy5jb2xvcnMuY29sb3JTY2hlbWFdLnJldmVyc2UoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjaGFydC5jb2xvclNjaGVtYShjb2xvcnMuY29sb3JTY2hlbWFzW2NoYXJ0Q29uZmlnLmNvbG9ycy5jb2xvclNjaGVtYV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoYXJ0Q29uZmlnLmNvbG9ycy5jb2xvclNjaGVtYSkpIHtcbiAgICAgICAgICBjaGFydC5jb2xvclNjaGVtYShjaGFydENvbmZpZy5jb2xvcnMuY29sb3JTY2hlbWEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoYXJ0Q29udGFpbmVyLmRhdHVtKHRoaXMuZGF0YSkuY2FsbCh0aGlzLmNoYXJ0KTtcblxuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gQ2hhcnRUeXBlLkxpbmUgfHwgdGhpcy50eXBlID09PSBDaGFydFR5cGUuU3RhY2tlZEFyZWEpIHtcbiAgICAgICAgY2hhcnQub24oJ2N1c3RvbURhdGFFbnRyeUNsaWNrJywgKGRhdGEsIGNvb3JkcywgbW91c2UpID0+IHtcbiAgICAgICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdCh7IGNoYXJ0LCBkYXRhLCBjb29yZHMsIG1vdXNlIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSBDaGFydFR5cGUuU2NhdHRlclBsb3QpIHtcbiAgICAgICAgdGhpcy5jaGFydC5vbignY3VzdG9tQ2xpY2snLCAoZGF0YSwgY29vcmRzLCBtb3VzZSwgc2NhdHRlcikgPT4ge1xuICAgICAgICAgIHRoaXMuY2hhcnRDbGljay5lbWl0KHsgY2hhcnQsIGRhdGEsIGNvb3JkcywgbW91c2UsIHNjYXR0ZXIgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZDNTZWxlY3Rpb24uc2VsZWN0KHRoaXMuZWwpLnNlbGVjdEFsbCh0aGlzLmNsaWNrU2VsZWN0b3IpLm9uKCdjbGljaycsIChldmVudCkgPT4gdGhpcy5jaGFydENsaWNrLmVtaXQoeyBjaGFydCwgZGF0YTogZXZlbnQgfSkpO1xuICAgICAgfVxuXG5cbiAgICAgIGlmICh0aGlzLmNoYXJ0Q29uZmlnLnRvb2x0aXAgJiYgdGhpcy50b29sdGlwQ29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy50b29sdGlwQ29udGFpbmVyID0gZDNTZWxlY3Rpb24uc2VsZWN0KHRoaXMuZWwpLnNlbGVjdCh0aGlzLnRvb2x0aXBDb250YWluZXJTZWxlY3Rvcik7XG4gICAgICAgIGlmIChbQ2hhcnRUeXBlLkJhciwgQ2hhcnRUeXBlLlN0ZXAsIENoYXJ0VHlwZS5TY2F0dGVyUGxvdF0uaW5kZXhPZih0aGlzLnR5cGUpID4gLTEpIHtcbiAgICAgICAgICB0aGlzLnRvb2x0aXAgPSBtaW5pVG9vbHRpcCgpO1xuICAgICAgICAgIGNoYXJ0Lm9uKCdjdXN0b21Nb3VzZU92ZXInLCB0aGlzLnRvb2x0aXAuc2hvdyk7XG4gICAgICAgICAgY2hhcnQub24oJ2N1c3RvbU1vdXNlTW92ZScsIHRoaXMudG9vbHRpcC51cGRhdGUpO1xuICAgICAgICAgIGNoYXJ0Lm9uKCdjdXN0b21Nb3VzZU91dCcsIHRoaXMudG9vbHRpcC5oaWRlKTtcbiAgICAgICAgICB0aGlzLnRvb2x0aXBDb250YWluZXIuZGF0dW0odGhpcy5kYXRhKS5jYWxsKHRoaXMudG9vbHRpcCk7XG4gICAgICAgIH0gZWxzZSBpZiAoW0NoYXJ0VHlwZS5MaW5lLCBDaGFydFR5cGUuU3RhY2tlZEFyZWEsIENoYXJ0VHlwZS5Hcm91cGVkQmFyLCBDaGFydFR5cGUuU3RhY2tlZEJhcl0uaW5kZXhPZih0aGlzLnR5cGUpID4gLTEpIHtcbiAgICAgICAgICB0aGlzLnRvb2x0aXAgPSB0b29sdGlwKCk7XG5cbiAgICAgICAgICBjaGFydC5vbignY3VzdG9tTW91c2VPdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b29sdGlwLnNob3coKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjaGFydC5vbignY3VzdG9tTW91c2VNb3ZlJywgKGRhdGFQb2ludCwgdG9waWNDb2xvck1hcCwgZGF0YVBvaW50WFBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAudXBkYXRlKGRhdGFQb2ludCwgdG9waWNDb2xvck1hcCwgZGF0YVBvaW50WFBvc2l0aW9uKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjaGFydC5vbignY3VzdG9tTW91c2VPdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAvL3RoaXMudG9vbHRpcC5oaWRlKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLnRvb2x0aXBDb250YWluZXIuZGF0dW0oW10pLmNhbGwodGhpcy50b29sdGlwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc09iamVjdCh0aGlzLmNoYXJ0Q29uZmlnLnRvb2x0aXApKSB7XG4gICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5jaGFydENvbmZpZy50b29sdGlwKS5mb3JFYWNoKChbb3B0aW9uLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRvb2x0aXBbb3B0aW9uXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgIHRoaXMudG9vbHRpcFtvcHRpb25dKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pc09iamVjdChjaGFydENvbmZpZy5ldmVudHMpKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGNoYXJ0Q29uZmlnLmV2ZW50cykuZm9yRWFjaCgoW25hbWUsIHZhbHVlXTogW3N0cmluZywgKGNoYXJ0LCAuLi5hcmdzKSA9PiB2b2lkXSkgPT4ge1xuICAgICAgICAgIGlmIChuYW1lID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0Q2xpY2sucGlwZSh0YWtlVW50aWwodGhpcy5jYW5jZWxsZXIpKS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHZhbHVlKGV2ZW50LmNoYXJ0LCBldmVudC5kYXRhLCBldmVudC5jb29yZHMsIGV2ZW50Lm1vdXNlLCBldmVudC5zY2F0dGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGFydC5vbihuYW1lLCAoLi4uYXJncykgPT4gdmFsdWUoY2hhcnQsIC4uLmFyZ3MpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWFkeS5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=