/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, Output, EventEmitter } from '@angular/core';
import { Observable, fromEvent, Subject } from 'rxjs';
import * as d3Selection from 'd3-selection';
import colors from 'britecharts/dist/umd/colors.min';
import miniTooltip from 'britecharts/dist/umd/miniTooltip.min';
import tooltip from 'britecharts/dist/umd/tooltip.min';
import { ChartType } from './chart.types';
import { debounceTime, takeUntil } from 'rxjs/operators';
export class ChartBaseComponent {
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
        (obj) => !!obj && typeof obj === 'object');
        fromEvent(window, 'resize')
            .pipe(debounceTime(250), takeUntil(this.canceller)).subscribe((/**
         * @return {?}
         */
        () => {
            this.drawChart();
        }));
        this.el = elementRef.nativeElement;
        this.container = d3Selection.select(this.el);
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
        const chartContainer = this.container = d3Selection.select(this.el);
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
                d3Selection.select(this.el).selectAll(this.clickSelector).on('click', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => this.chartClick.emit({ chart, data: event })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1icml0ZWNoYXJ0cy8iLCJzb3VyY2VzIjpbImxpYi9jaGFydC5iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWEsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWdELE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEtBQUssV0FBVyxNQUFNLGNBQWMsQ0FBQztBQUM1QyxPQUFPLE1BQU0sTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRCxPQUFPLFdBQVcsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRCxPQUFPLE9BQU8sTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsTUFBTSxPQUFPLGtCQUFrQjs7OztJQTRCN0IsWUFBWSxVQUFzQjtRQXJCakIsVUFBSyxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzNELGVBQVUsR0FBRyxJQUFJLFlBQVksRUFNMUMsQ0FBQztRQUdLLGNBQVMsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQVUxQyxhQUFROzs7O1FBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFDO1FBRTNELFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO2FBQ3hCLElBQUksQ0FDSCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQzFCLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsRUFBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUNNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBQ00sUUFBUTtRQUNiLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BELENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVNLFdBQVcsQ0FBQyxPQUFzQjtRQUN2QyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTtnQkFDaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksWUFBWSxRQUFRLEVBQUU7b0JBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztpQkFDaEQ7Z0JBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RCLE9BQU87YUFDUjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN6QjtTQUNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7OztJQUNNLFNBQVM7O2NBQ1IsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOztjQUM3RCxjQUFjLEdBQUcsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLGNBQWMsQ0FBQyxJQUFJLEVBQUUsRUFBTyxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUs7Y0FDN0csRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSTtRQUNuQyxJQUFJLGNBQWMsRUFBRTtZQUNsQixxR0FBcUc7WUFDckcsbUJBQW1CO1lBQ25CLEtBQUssQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFNUIsSUFBSSxLQUFLLENBQUMsc0JBQXNCLFlBQVksUUFBUSxFQUFFO2dCQUNwRCxLQUFLLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDckM7WUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtvQkFDakUsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksUUFBUSxFQUFFO3dCQUNyQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3RCO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFFRCxpR0FBaUc7WUFDakcsd0dBQXdHO1lBQ3hHLDhCQUE4QjtZQUM5QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLEVBQUU7Z0JBQzNELE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLDRCQUE0QixDQUFDLENBQUMsT0FBTzs7OztnQkFBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBbUIsRUFBRSxFQUFFO29CQUNyRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxRQUFRLEVBQUU7d0JBQ3JDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUM7cUJBQ3ZDO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEtBQUssUUFBUSxFQUFFO29CQUN0RCxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTt3QkFDdkQsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7NEJBQ3ZDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7eUJBQ2xGOzZCQUFNOzRCQUNMLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7eUJBQ3hFO3FCQUNGO2lCQUNGO3FCQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUN4RCxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ25EO2FBQ0Y7WUFFRCxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWpELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLFdBQVcsRUFBRTtnQkFDdkUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxzQkFBc0I7Ozs7OztnQkFBRSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDdkQsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLFdBQVcsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsYUFBYTs7Ozs7OztnQkFBRSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO29CQUM1RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRSxDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU87Ozs7Z0JBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7YUFDaEk7WUFHRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDMUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDbEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLEVBQUUsQ0FBQztvQkFDN0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMvQyxLQUFLLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2pELEtBQUssQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDM0Q7cUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUN0SCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBRSxDQUFDO29CQUV6QixLQUFLLENBQUMsRUFBRSxDQUFDLGlCQUFpQjs7O29CQUFFLEdBQUcsRUFBRTt3QkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQyxFQUFDLENBQUM7b0JBQ0gsS0FBSyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUI7Ozs7OztvQkFBRSxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsRUFBRTt3QkFDM0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO29CQUNwRSxDQUFDLEVBQUMsQ0FBQztvQkFDSCxLQUFLLENBQUMsRUFBRSxDQUFDLGdCQUFnQjs7O29CQUFFLEdBQUcsRUFBRTt3QkFDOUIsc0JBQXNCO29CQUN4QixDQUFDLEVBQUMsQ0FBQztvQkFFSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3BEO2dCQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUMzQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTzs7OztvQkFBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7d0JBQ25FLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxRQUFRLEVBQUU7NEJBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQzdCO29CQUNILENBQUMsRUFBQyxDQUFDO2lCQUNKO2FBQ0Y7WUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFxQyxFQUFFLEVBQUU7b0JBQy9GLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTt3QkFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7d0JBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTs0QkFDbEUsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUMzRSxDQUFDLEVBQUMsQ0FBQztxQkFDSjt5QkFBTTt3QkFDTCxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUk7Ozs7d0JBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFDLENBQUM7cUJBQ3BEO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7OzttQkExS0EsS0FBSzswQkFHTCxLQUFLOytCQUNMLEtBQUs7c0JBQ0wsS0FBSztvQkFDTCxNQUFNO3lCQUNOLE1BQU07Ozs7SUFQUCxrQ0FFRTs7SUFDRix5Q0FBaUM7O0lBQ2pDLDhDQUFrRDs7SUFDbEQscUNBQWlDOztJQUNqQyxtQ0FBNEU7O0lBQzVFLHdDQU1LOztJQUVMLG1DQUFrQjs7Ozs7SUFDbEIsdUNBQWtEOzs7OztJQUNsRCxnQ0FBMEI7Ozs7O0lBQzFCLGtDQUEwQjs7Ozs7SUFDMUIsdUNBQXlCOzs7OztJQUN6QixzQ0FBMkI7Ozs7O0lBQzNCLDJDQUFnQzs7Ozs7SUFDaEMsc0RBQTJDOztJQUUzQyxxQ0FBb0I7O0lBQ3BCLDhDQUE2Qjs7Ozs7SUFDN0Isc0NBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25DaGFuZ2VzLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIFNpbXBsZUNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIGQzU2VsZWN0aW9uIGZyb20gJ2QzLXNlbGVjdGlvbic7XG5pbXBvcnQgY29sb3JzIGZyb20gJ2JyaXRlY2hhcnRzL2Rpc3QvdW1kL2NvbG9ycy5taW4nO1xuaW1wb3J0IG1pbmlUb29sdGlwIGZyb20gJ2JyaXRlY2hhcnRzL2Rpc3QvdW1kL21pbmlUb29sdGlwLm1pbic7XG5pbXBvcnQgdG9vbHRpcCBmcm9tICdicml0ZWNoYXJ0cy9kaXN0L3VtZC90b29sdGlwLm1pbic7XG5pbXBvcnQgeyBDaGFydFR5cGUsIENoYXJ0Q29uZmlnIH0gZnJvbSAnLi9jaGFydC50eXBlcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIENoYXJ0QmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwdWJsaWMgZGF0YTogYW55W10gfCB7XG4gICAgZGF0YUJ5VG9waWM6IFtdXG4gIH07XG4gIEBJbnB1dCgpIHB1YmxpYyBjaGFydENvbmZpZzogYW55O1xuICBASW5wdXQoKSBwdWJsaWMgZXhwb3J0QXNJbWFnZUV2dDogT2JzZXJ2YWJsZTxhbnk+O1xuICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZzogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHB1YmxpYyByZWFkeTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcHVibGljIGNoYXJ0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBjaGFydDogYW55LFxuICAgIGRhdGE6IGFueSxcbiAgICBjb29yZHM/OiBhbnksXG4gICAgbW91c2U/OiBhbnksXG4gICAgc2NhdHRlcj86IGFueVxuICB9PigpO1xuXG4gIHB1YmxpYyBjaGFydDogYW55O1xuICBwcm90ZWN0ZWQgY2FuY2VsbGVyOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBwcm90ZWN0ZWQgdHlwZTogQ2hhcnRUeXBlO1xuICBwcm90ZWN0ZWQgY29udGFpbmVyOiBhbnk7XG4gIHByb3RlY3RlZCBzZWxlY3Rvcjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgY2xpY2tTZWxlY3Rvcjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgdG9vbHRpcENvbnRhaW5lclNlbGVjdG9yOiBzdHJpbmc7XG5cbiAgcHVibGljIHRvb2x0aXA6IGFueTtcbiAgcHVibGljIHRvb2x0aXBDb250YWluZXI6IGFueTtcbiAgcHJpdmF0ZSBpc09iamVjdCA9IChvYmopID0+ICEhb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDI1MCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmNhbmNlbGxlcilcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5kcmF3Q2hhcnQoKTtcbiAgICAgIH0pO1xuICAgIHRoaXMuZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5jb250YWluZXIgPSBkM1NlbGVjdGlvbi5zZWxlY3QodGhpcy5lbCk7XG4gIH1cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsbGVyLm5leHQoKTtcbiAgfVxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZXhwb3J0QXNJbWFnZUV2dCkge1xuICAgICAgdGhpcy5leHBvcnRBc0ltYWdlRXZ0LnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgdGhpcy5jaGFydC5leHBvcnRDaGFydChkYXRhLmZpbGVuYW1lLCBkYXRhLnRpdGxlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubG9hZGluZykge1xuICAgICAgaWYgKGNoYW5nZXMubG9hZGluZy5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcnQubG9hZGluZ1N0YXRlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lci5odG1sKHRoaXMuY2hhcnQubG9hZGluZ1N0YXRlKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVhZHkuZW1pdCh0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuaHRtbCgnJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmNoYXJ0Q29uZmlnIHx8IHRoaXMudHlwZSAmJiAoY2hhbmdlcy5kYXRhKSkge1xuICAgICAgdGhpcy5kcmF3Q2hhcnQoKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGRyYXdDaGFydCgpOiB2b2lkIHtcbiAgICBjb25zdCBjaGFydENvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyID0gZDNTZWxlY3Rpb24uc2VsZWN0KHRoaXMuZWwpO1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY2hhcnRDb250YWluZXIubm9kZSgpID8gKGNoYXJ0Q29udGFpbmVyLm5vZGUoKSBhcyBhbnkpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDogZmFsc2U7XG4gICAgY29uc3QgeyBjaGFydCwgY2hhcnRDb25maWcgfSA9IHRoaXM7XG4gICAgaWYgKGNvbnRhaW5lcldpZHRoKSB7XG4gICAgICAvLyBTZXQgdGhlIGNvbnRhaW5lciB3aWR0aCB0byBhIHN0YW5kYXIgdmFsdWUuIElmIHdpZHRoIGlzIHBhc3NlZCBpbiB0aGUgcHJvcGVydGllcyBpdCBpcyBnb2luZyB0byBiZVxuICAgICAgLy8gb3ZlcnJpZGVuIGxhdGVyLlxuICAgICAgY2hhcnQud2lkdGgoY29udGFpbmVyV2lkdGgpO1xuXG4gICAgICBpZiAoY2hhcnQuc2hvdWxkUmV2ZXJzZUNvbG9yTGlzdCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgIGNoYXJ0LnNob3VsZFJldmVyc2VDb2xvckxpc3QoZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNPYmplY3QoY2hhcnRDb25maWcucHJvcGVydGllcykpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY2hhcnRDb25maWcucHJvcGVydGllcykuZm9yRWFjaCgoW29wdGlvbiwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgaWYgKGNoYXJ0W29wdGlvbl0gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgY2hhcnRbb3B0aW9uXSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIHNpemUgb2Ygc29tZSBwcm9wZXJ0eSBtdXN0IGJlIHNldCByZWxhdGl2ZSB0byB0aGUgY29udGFpbmVyIHdpZHRoIGl0IG11c3QgYmUgc2VudCBpbiBhblxuICAgICAgLy8gb2JqZWN0IG5hbWUgJ3NpemVSZWxhdGl2ZVRvQ29udGFpbmVyV2lkdGgnIGNvbnRhaW5pbmcgdGhlIHByb3BlcnR5IHRvIHNldCBhcyBrZXkgYW5kIHRoZSByYXRpbyB0byB0aGVcbiAgICAgIC8vIGNvbnRhaW5lcidzIHdpZHRoIGFzIHZhbHVlLlxuICAgICAgaWYgKHRoaXMuaXNPYmplY3QoY2hhcnRDb25maWcuc2l6ZVJlbGF0aXZlVG9Db250YWluZXJXaWR0aCkpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY2hhcnRDb25maWcuc2l6ZVJlbGF0aXZlVG9Db250YWluZXJXaWR0aCkuZm9yRWFjaCgoW29wdGlvbiwgdmFsdWVdOiBbc3RyaW5nLCBudW1iZXJdKSA9PiB7XG4gICAgICAgICAgaWYgKGNoYXJ0W29wdGlvbl0gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgY2hhcnRbb3B0aW9uXShjb250YWluZXJXaWR0aCAvIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pc09iamVjdChjaGFydENvbmZpZy5jb2xvcnMpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hhcnRDb25maWcuY29sb3JzLmNvbG9yU2NoZW1hID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmIChjb2xvcnMuY29sb3JTY2hlbWFzW2NoYXJ0Q29uZmlnLmNvbG9ycy5jb2xvclNjaGVtYV0pIHtcbiAgICAgICAgICAgIGlmIChjaGFydENvbmZpZy5jb2xvcnMucmV2ZXJzZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBjaGFydC5jb2xvclNjaGVtYShjb2xvcnMuY29sb3JTY2hlbWFzW2NoYXJ0Q29uZmlnLmNvbG9ycy5jb2xvclNjaGVtYV0ucmV2ZXJzZSgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNoYXJ0LmNvbG9yU2NoZW1hKGNvbG9ycy5jb2xvclNjaGVtYXNbY2hhcnRDb25maWcuY29sb3JzLmNvbG9yU2NoZW1hXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY2hhcnRDb25maWcuY29sb3JzLmNvbG9yU2NoZW1hKSkge1xuICAgICAgICAgIGNoYXJ0LmNvbG9yU2NoZW1hKGNoYXJ0Q29uZmlnLmNvbG9ycy5jb2xvclNjaGVtYSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2hhcnRDb250YWluZXIuZGF0dW0odGhpcy5kYXRhKS5jYWxsKHRoaXMuY2hhcnQpO1xuXG4gICAgICBpZiAodGhpcy50eXBlID09PSBDaGFydFR5cGUuTGluZSB8fCB0aGlzLnR5cGUgPT09IENoYXJ0VHlwZS5TdGFja2VkQXJlYSkge1xuICAgICAgICBjaGFydC5vbignY3VzdG9tRGF0YUVudHJ5Q2xpY2snLCAoZGF0YSwgY29vcmRzLCBtb3VzZSkgPT4ge1xuICAgICAgICAgIHRoaXMuY2hhcnRDbGljay5lbWl0KHsgY2hhcnQsIGRhdGEsIGNvb3JkcywgbW91c2UgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09IENoYXJ0VHlwZS5TY2F0dGVyUGxvdCkge1xuICAgICAgICB0aGlzLmNoYXJ0Lm9uKCdjdXN0b21DbGljaycsIChkYXRhLCBjb29yZHMsIG1vdXNlLCBzY2F0dGVyKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGFydENsaWNrLmVtaXQoeyBjaGFydCwgZGF0YSwgY29vcmRzLCBtb3VzZSwgc2NhdHRlciB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkM1NlbGVjdGlvbi5zZWxlY3QodGhpcy5lbCkuc2VsZWN0QWxsKHRoaXMuY2xpY2tTZWxlY3Rvcikub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB0aGlzLmNoYXJ0Q2xpY2suZW1pdCh7IGNoYXJ0LCBkYXRhOiBldmVudCB9KSk7XG4gICAgICB9XG5cblxuICAgICAgaWYgKHRoaXMuY2hhcnRDb25maWcudG9vbHRpcCAmJiB0aGlzLnRvb2x0aXBDb250YWluZXJTZWxlY3Rvcikge1xuICAgICAgICB0aGlzLnRvb2x0aXBDb250YWluZXIgPSBkM1NlbGVjdGlvbi5zZWxlY3QodGhpcy5lbCkuc2VsZWN0KHRoaXMudG9vbHRpcENvbnRhaW5lclNlbGVjdG9yKTtcbiAgICAgICAgaWYgKFtDaGFydFR5cGUuQmFyLCBDaGFydFR5cGUuU3RlcCwgQ2hhcnRUeXBlLlNjYXR0ZXJQbG90XS5pbmRleE9mKHRoaXMudHlwZSkgPiAtMSkge1xuICAgICAgICAgIHRoaXMudG9vbHRpcCA9IG1pbmlUb29sdGlwKCk7XG4gICAgICAgICAgY2hhcnQub24oJ2N1c3RvbU1vdXNlT3ZlcicsIHRoaXMudG9vbHRpcC5zaG93KTtcbiAgICAgICAgICBjaGFydC5vbignY3VzdG9tTW91c2VNb3ZlJywgdGhpcy50b29sdGlwLnVwZGF0ZSk7XG4gICAgICAgICAgY2hhcnQub24oJ2N1c3RvbU1vdXNlT3V0JywgdGhpcy50b29sdGlwLmhpZGUpO1xuICAgICAgICAgIHRoaXMudG9vbHRpcENvbnRhaW5lci5kYXR1bSh0aGlzLmRhdGEpLmNhbGwodGhpcy50b29sdGlwKTtcbiAgICAgICAgfSBlbHNlIGlmIChbQ2hhcnRUeXBlLkxpbmUsIENoYXJ0VHlwZS5TdGFja2VkQXJlYSwgQ2hhcnRUeXBlLkdyb3VwZWRCYXIsIENoYXJ0VHlwZS5TdGFja2VkQmFyXS5pbmRleE9mKHRoaXMudHlwZSkgPiAtMSkge1xuICAgICAgICAgIHRoaXMudG9vbHRpcCA9IHRvb2x0aXAoKTtcblxuICAgICAgICAgIGNoYXJ0Lm9uKCdjdXN0b21Nb3VzZU92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAuc2hvdygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNoYXJ0Lm9uKCdjdXN0b21Nb3VzZU1vdmUnLCAoZGF0YVBvaW50LCB0b3BpY0NvbG9yTWFwLCBkYXRhUG9pbnRYUG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcC51cGRhdGUoZGF0YVBvaW50LCB0b3BpY0NvbG9yTWFwLCBkYXRhUG9pbnRYUG9zaXRpb24pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNoYXJ0Lm9uKCdjdXN0b21Nb3VzZU91dCcsICgpID0+IHtcbiAgICAgICAgICAgIC8vdGhpcy50b29sdGlwLmhpZGUoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMudG9vbHRpcENvbnRhaW5lci5kYXR1bShbXSkuY2FsbCh0aGlzLnRvb2x0aXApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzT2JqZWN0KHRoaXMuY2hhcnRDb25maWcudG9vbHRpcCkpIHtcbiAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLmNoYXJ0Q29uZmlnLnRvb2x0aXApLmZvckVhY2goKFtvcHRpb24sIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudG9vbHRpcFtvcHRpb25dIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgdGhpcy50b29sdGlwW29wdGlvbl0odmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzT2JqZWN0KGNoYXJ0Q29uZmlnLmV2ZW50cykpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY2hhcnRDb25maWcuZXZlbnRzKS5mb3JFYWNoKChbbmFtZSwgdmFsdWVdOiBbc3RyaW5nLCAoY2hhcnQsIC4uLmFyZ3MpID0+IHZvaWRdKSA9PiB7XG4gICAgICAgICAgaWYgKG5hbWUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnRDbGljay5waXBlKHRha2VVbnRpbCh0aGlzLmNhbmNlbGxlcikpLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgdmFsdWUoZXZlbnQuY2hhcnQsIGV2ZW50LmRhdGEsIGV2ZW50LmNvb3JkcywgZXZlbnQubW91c2UsIGV2ZW50LnNjYXR0ZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoYXJ0Lm9uKG5hbWUsICguLi5hcmdzKSA9PiB2YWx1ZShjaGFydCwgLi4uYXJncykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlYWR5LmVtaXQodHJ1ZSk7XG4gICAgfVxuICB9XG59XG5cbiJdfQ==