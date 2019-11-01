/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        (obj) => !!obj && typeof obj === 'object' && !Array.isArray(obj));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYnJpdGVjaGFydHMvIiwic291cmNlcyI6WyJsaWIvY2hhcnQuYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFnRCxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxLQUFLLFdBQVcsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxNQUFNLE1BQU0saUNBQWlDLENBQUM7QUFDckQsT0FBTyxXQUFXLE1BQU0sc0NBQXNDLENBQUM7QUFDL0QsT0FBTyxPQUFPLE1BQU0sa0NBQWtDLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUE0QjdCLFlBQVksVUFBc0I7UUFyQmpCLFVBQUssR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUMzRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBTTFDLENBQUM7UUFHSyxjQUFTLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFVMUMsYUFBUTs7OztRQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUM7UUFFbEYsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDeEIsSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDMUIsQ0FBQyxTQUFTOzs7UUFB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T0FBTyxFQUFFO3dCQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUzs7Ozt3QkFBQyxDQUFDLEtBQUssRUFBRSxFQUFFOzRCQUNsRSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzNFLENBQUMsRUFBQyxDQUFDO3FCQUNKO3lCQUFNO3dCQUNMLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSTs7Ozt3QkFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUMsQ0FBQztxQkFDcEQ7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSjtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7O21CQTFLQSxLQUFLOzBCQUdMLEtBQUs7K0JBQ0wsS0FBSztzQkFDTCxLQUFLO29CQUNMLE1BQU07eUJBQ04sTUFBTTs7OztJQVBQLGtDQUVFOztJQUNGLHlDQUFpQzs7SUFDakMsOENBQWtEOztJQUNsRCxxQ0FBaUM7O0lBQ2pDLG1DQUE0RTs7SUFDNUUsd0NBTUs7O0lBRUwsbUNBQWtCOzs7OztJQUNsQix1Q0FBa0Q7Ozs7O0lBQ2xELGdDQUEwQjs7Ozs7SUFDMUIsa0NBQTBCOzs7OztJQUMxQix1Q0FBeUI7Ozs7O0lBQ3pCLHNDQUEyQjs7Ozs7SUFDM0IsMkNBQWdDOzs7OztJQUNoQyxzREFBMkM7O0lBRTNDLHFDQUFvQjs7SUFDcEIsOENBQTZCOzs7OztJQUM3QixzQ0FBb0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkNoYW5nZXMsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgU2ltcGxlQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgZDNTZWxlY3Rpb24gZnJvbSAnZDMtc2VsZWN0aW9uJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnYnJpdGVjaGFydHMvZGlzdC91bWQvY29sb3JzLm1pbic7XG5pbXBvcnQgbWluaVRvb2x0aXAgZnJvbSAnYnJpdGVjaGFydHMvZGlzdC91bWQvbWluaVRvb2x0aXAubWluJztcbmltcG9ydCB0b29sdGlwIGZyb20gJ2JyaXRlY2hhcnRzL2Rpc3QvdW1kL3Rvb2x0aXAubWluJztcbmltcG9ydCB7IENoYXJ0VHlwZSwgQ2hhcnRDb25maWcgfSBmcm9tICcuL2NoYXJ0LnR5cGVzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQ2hhcnRCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBhbnlbXSB8IHtcbiAgICBkYXRhQnlUb3BpYzogW11cbiAgfTtcbiAgQElucHV0KCkgcHVibGljIGNoYXJ0Q29uZmlnOiBhbnk7XG4gIEBJbnB1dCgpIHB1YmxpYyBleHBvcnRBc0ltYWdlRXZ0OiBPYnNlcnZhYmxlPGFueT47XG4gIEBJbnB1dCgpIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuO1xuICBAT3V0cHV0KCkgcHVibGljIHJlYWR5OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgY2hhcnRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGNoYXJ0OiBhbnksXG4gICAgZGF0YTogYW55LFxuICAgIGNvb3Jkcz86IGFueSxcbiAgICBtb3VzZT86IGFueSxcbiAgICBzY2F0dGVyPzogYW55XG4gIH0+KCk7XG5cbiAgcHVibGljIGNoYXJ0OiBhbnk7XG4gIHByb3RlY3RlZCBjYW5jZWxsZXI6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gIHByb3RlY3RlZCB0eXBlOiBDaGFydFR5cGU7XG4gIHByb3RlY3RlZCBjb250YWluZXI6IGFueTtcbiAgcHJvdGVjdGVkIHNlbGVjdG9yOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBjbGlja1NlbGVjdG9yOiBzdHJpbmc7XG4gIHByb3RlY3RlZCB0b29sdGlwQ29udGFpbmVyU2VsZWN0b3I6IHN0cmluZztcblxuICBwdWJsaWMgdG9vbHRpcDogYW55O1xuICBwdWJsaWMgdG9vbHRpcENvbnRhaW5lcjogYW55O1xuICBwcml2YXRlIGlzT2JqZWN0ID0gKG9iaikgPT4gISFvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkob2JqKTtcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgyNTApLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5jYW5jZWxsZXIpXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gICAgICB9KTtcbiAgICB0aGlzLmVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuY29udGFpbmVyID0gZDNTZWxlY3Rpb24uc2VsZWN0KHRoaXMuZWwpO1xuICB9XG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbGxlci5uZXh0KCk7XG4gIH1cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV4cG9ydEFzSW1hZ2VFdnQpIHtcbiAgICAgIHRoaXMuZXhwb3J0QXNJbWFnZUV2dC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuY2hhcnQuZXhwb3J0Q2hhcnQoZGF0YS5maWxlbmFtZSwgZGF0YS50aXRsZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmxvYWRpbmcpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmxvYWRpbmcuY3VycmVudFZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJ0LmxvYWRpbmdTdGF0ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgdGhpcy5jb250YWluZXIuaHRtbCh0aGlzLmNoYXJ0LmxvYWRpbmdTdGF0ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlYWR5LmVtaXQodHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmh0bWwoJycpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5jaGFydENvbmZpZyB8fCB0aGlzLnR5cGUgJiYgKGNoYW5nZXMuZGF0YSkpIHtcbiAgICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBkcmF3Q2hhcnQoKTogdm9pZCB7XG4gICAgY29uc3QgY2hhcnRDb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciA9IGQzU2VsZWN0aW9uLnNlbGVjdCh0aGlzLmVsKTtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IGNoYXJ0Q29udGFpbmVyLm5vZGUoKSA/IChjaGFydENvbnRhaW5lci5ub2RlKCkgYXMgYW55KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA6IGZhbHNlO1xuICAgIGNvbnN0IHsgY2hhcnQsIGNoYXJ0Q29uZmlnIH0gPSB0aGlzO1xuICAgIGlmIChjb250YWluZXJXaWR0aCkge1xuICAgICAgLy8gU2V0IHRoZSBjb250YWluZXIgd2lkdGggdG8gYSBzdGFuZGFyIHZhbHVlLiBJZiB3aWR0aCBpcyBwYXNzZWQgaW4gdGhlIHByb3BlcnRpZXMgaXQgaXMgZ29pbmcgdG8gYmVcbiAgICAgIC8vIG92ZXJyaWRlbiBsYXRlci5cbiAgICAgIGNoYXJ0LndpZHRoKGNvbnRhaW5lcldpZHRoKTtcblxuICAgICAgaWYgKGNoYXJ0LnNob3VsZFJldmVyc2VDb2xvckxpc3QgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICBjaGFydC5zaG91bGRSZXZlcnNlQ29sb3JMaXN0KGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzT2JqZWN0KGNoYXJ0Q29uZmlnLnByb3BlcnRpZXMpKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGNoYXJ0Q29uZmlnLnByb3BlcnRpZXMpLmZvckVhY2goKFtvcHRpb24sIHZhbHVlXSkgPT4ge1xuICAgICAgICAgIGlmIChjaGFydFtvcHRpb25dIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGNoYXJ0W29wdGlvbl0odmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBzaXplIG9mIHNvbWUgcHJvcGVydHkgbXVzdCBiZSBzZXQgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5lciB3aWR0aCBpdCBtdXN0IGJlIHNlbnQgaW4gYW5cbiAgICAgIC8vIG9iamVjdCBuYW1lICdzaXplUmVsYXRpdmVUb0NvbnRhaW5lcldpZHRoJyBjb250YWluaW5nIHRoZSBwcm9wZXJ0eSB0byBzZXQgYXMga2V5IGFuZCB0aGUgcmF0aW8gdG8gdGhlXG4gICAgICAvLyBjb250YWluZXIncyB3aWR0aCBhcyB2YWx1ZS5cbiAgICAgIGlmICh0aGlzLmlzT2JqZWN0KGNoYXJ0Q29uZmlnLnNpemVSZWxhdGl2ZVRvQ29udGFpbmVyV2lkdGgpKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGNoYXJ0Q29uZmlnLnNpemVSZWxhdGl2ZVRvQ29udGFpbmVyV2lkdGgpLmZvckVhY2goKFtvcHRpb24sIHZhbHVlXTogW3N0cmluZywgbnVtYmVyXSkgPT4ge1xuICAgICAgICAgIGlmIChjaGFydFtvcHRpb25dIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGNoYXJ0W29wdGlvbl0oY29udGFpbmVyV2lkdGggLyB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXNPYmplY3QoY2hhcnRDb25maWcuY29sb3JzKSkge1xuICAgICAgICBpZiAodHlwZW9mIGNoYXJ0Q29uZmlnLmNvbG9ycy5jb2xvclNjaGVtYSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAoY29sb3JzLmNvbG9yU2NoZW1hc1tjaGFydENvbmZpZy5jb2xvcnMuY29sb3JTY2hlbWFdKSB7XG4gICAgICAgICAgICBpZiAoY2hhcnRDb25maWcuY29sb3JzLnJldmVyc2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY2hhcnQuY29sb3JTY2hlbWEoY29sb3JzLmNvbG9yU2NoZW1hc1tjaGFydENvbmZpZy5jb2xvcnMuY29sb3JTY2hlbWFdLnJldmVyc2UoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjaGFydC5jb2xvclNjaGVtYShjb2xvcnMuY29sb3JTY2hlbWFzW2NoYXJ0Q29uZmlnLmNvbG9ycy5jb2xvclNjaGVtYV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoYXJ0Q29uZmlnLmNvbG9ycy5jb2xvclNjaGVtYSkpIHtcbiAgICAgICAgICBjaGFydC5jb2xvclNjaGVtYShjaGFydENvbmZpZy5jb2xvcnMuY29sb3JTY2hlbWEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoYXJ0Q29udGFpbmVyLmRhdHVtKHRoaXMuZGF0YSkuY2FsbCh0aGlzLmNoYXJ0KTtcblxuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gQ2hhcnRUeXBlLkxpbmUgfHwgdGhpcy50eXBlID09PSBDaGFydFR5cGUuU3RhY2tlZEFyZWEpIHtcbiAgICAgICAgY2hhcnQub24oJ2N1c3RvbURhdGFFbnRyeUNsaWNrJywgKGRhdGEsIGNvb3JkcywgbW91c2UpID0+IHtcbiAgICAgICAgICB0aGlzLmNoYXJ0Q2xpY2suZW1pdCh7IGNoYXJ0LCBkYXRhLCBjb29yZHMsIG1vdXNlIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSBDaGFydFR5cGUuU2NhdHRlclBsb3QpIHtcbiAgICAgICAgdGhpcy5jaGFydC5vbignY3VzdG9tQ2xpY2snLCAoZGF0YSwgY29vcmRzLCBtb3VzZSwgc2NhdHRlcikgPT4ge1xuICAgICAgICAgIHRoaXMuY2hhcnRDbGljay5lbWl0KHsgY2hhcnQsIGRhdGEsIGNvb3JkcywgbW91c2UsIHNjYXR0ZXIgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZDNTZWxlY3Rpb24uc2VsZWN0KHRoaXMuZWwpLnNlbGVjdEFsbCh0aGlzLmNsaWNrU2VsZWN0b3IpLm9uKCdjbGljaycsIChldmVudCkgPT4gdGhpcy5jaGFydENsaWNrLmVtaXQoeyBjaGFydCwgZGF0YTogZXZlbnQgfSkpO1xuICAgICAgfVxuXG5cbiAgICAgIGlmICh0aGlzLmNoYXJ0Q29uZmlnLnRvb2x0aXAgJiYgdGhpcy50b29sdGlwQ29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy50b29sdGlwQ29udGFpbmVyID0gZDNTZWxlY3Rpb24uc2VsZWN0KHRoaXMuZWwpLnNlbGVjdCh0aGlzLnRvb2x0aXBDb250YWluZXJTZWxlY3Rvcik7XG4gICAgICAgIGlmIChbQ2hhcnRUeXBlLkJhciwgQ2hhcnRUeXBlLlN0ZXAsIENoYXJ0VHlwZS5TY2F0dGVyUGxvdF0uaW5kZXhPZih0aGlzLnR5cGUpID4gLTEpIHtcbiAgICAgICAgICB0aGlzLnRvb2x0aXAgPSBtaW5pVG9vbHRpcCgpO1xuICAgICAgICAgIGNoYXJ0Lm9uKCdjdXN0b21Nb3VzZU92ZXInLCB0aGlzLnRvb2x0aXAuc2hvdyk7XG4gICAgICAgICAgY2hhcnQub24oJ2N1c3RvbU1vdXNlTW92ZScsIHRoaXMudG9vbHRpcC51cGRhdGUpO1xuICAgICAgICAgIGNoYXJ0Lm9uKCdjdXN0b21Nb3VzZU91dCcsIHRoaXMudG9vbHRpcC5oaWRlKTtcbiAgICAgICAgICB0aGlzLnRvb2x0aXBDb250YWluZXIuZGF0dW0odGhpcy5kYXRhKS5jYWxsKHRoaXMudG9vbHRpcCk7XG4gICAgICAgIH0gZWxzZSBpZiAoW0NoYXJ0VHlwZS5MaW5lLCBDaGFydFR5cGUuU3RhY2tlZEFyZWEsIENoYXJ0VHlwZS5Hcm91cGVkQmFyLCBDaGFydFR5cGUuU3RhY2tlZEJhcl0uaW5kZXhPZih0aGlzLnR5cGUpID4gLTEpIHtcbiAgICAgICAgICB0aGlzLnRvb2x0aXAgPSB0b29sdGlwKCk7XG5cbiAgICAgICAgICBjaGFydC5vbignY3VzdG9tTW91c2VPdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b29sdGlwLnNob3coKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjaGFydC5vbignY3VzdG9tTW91c2VNb3ZlJywgKGRhdGFQb2ludCwgdG9waWNDb2xvck1hcCwgZGF0YVBvaW50WFBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAudXBkYXRlKGRhdGFQb2ludCwgdG9waWNDb2xvck1hcCwgZGF0YVBvaW50WFBvc2l0aW9uKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjaGFydC5vbignY3VzdG9tTW91c2VPdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAvL3RoaXMudG9vbHRpcC5oaWRlKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLnRvb2x0aXBDb250YWluZXIuZGF0dW0oW10pLmNhbGwodGhpcy50b29sdGlwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc09iamVjdCh0aGlzLmNoYXJ0Q29uZmlnLnRvb2x0aXApKSB7XG4gICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5jaGFydENvbmZpZy50b29sdGlwKS5mb3JFYWNoKChbb3B0aW9uLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRvb2x0aXBbb3B0aW9uXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgIHRoaXMudG9vbHRpcFtvcHRpb25dKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pc09iamVjdChjaGFydENvbmZpZy5ldmVudHMpKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGNoYXJ0Q29uZmlnLmV2ZW50cykuZm9yRWFjaCgoW25hbWUsIHZhbHVlXTogW3N0cmluZywgKGNoYXJ0LCAuLi5hcmdzKSA9PiB2b2lkXSkgPT4ge1xuICAgICAgICAgIGlmIChuYW1lID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0Q2xpY2sucGlwZSh0YWtlVW50aWwodGhpcy5jYW5jZWxsZXIpKS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHZhbHVlKGV2ZW50LmNoYXJ0LCBldmVudC5kYXRhLCBldmVudC5jb29yZHMsIGV2ZW50Lm1vdXNlLCBldmVudC5zY2F0dGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGFydC5vbihuYW1lLCAoLi4uYXJncykgPT4gdmFsdWUoY2hhcnQsIC4uLmFyZ3MpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWFkeS5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=