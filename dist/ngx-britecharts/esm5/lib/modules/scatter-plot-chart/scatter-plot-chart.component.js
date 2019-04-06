/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
import chart from 'britecharts/dist/umd/scatterPlot.min';
import { ChartType } from '../../chart.types';
import { ChartBaseComponent } from '../../chart.base';
var ScatterPlotChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ScatterPlotChartComponent, _super);
    function ScatterPlotChartComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.chart = chart();
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
export { ScatterPlotChartComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhdHRlci1wbG90LWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1icml0ZWNoYXJ0cy8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL3NjYXR0ZXItcGxvdC1jaGFydC9zY2F0dGVyLXBsb3QtY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxLQUFLLE1BQU0sc0NBQXNDLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXREO0lBSytDLHFEQUFrQjtJQU0vRCxtQ0FBWSxVQUFzQjtRQUFsQyxZQUNFLGtCQUFNLFVBQVUsQ0FBQyxTQUNsQjtRQVBNLFdBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUNiLDhCQUF3QixHQUFHLCtCQUErQixDQUFDO1FBQzNELGNBQVEsR0FBRyxlQUFlLENBQUM7UUFDM0IsVUFBSSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7O0lBSXZDLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxZQUFrRDs7aUJBRW5EOzs7O2dCQVQyQixVQUFVOztJQW9CdEMsZ0NBQUM7Q0FBQSxBQWZELENBSytDLGtCQUFrQixHQVVoRTtTQVZZLHlCQUF5Qjs7O0lBQ3BDLDBDQUF1Qjs7Ozs7SUFDdkIsNkRBQXFFOzs7OztJQUNyRSw2Q0FBcUM7Ozs7O0lBQ3JDLHlDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgY2hhcnQgZnJvbSAnYnJpdGVjaGFydHMvZGlzdC91bWQvc2NhdHRlclBsb3QubWluJztcbmltcG9ydCB7IENoYXJ0VHlwZSB9IGZyb20gJy4uLy4uL2NoYXJ0LnR5cGVzJztcbmltcG9ydCB7IENoYXJ0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NoYXJ0LmJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicml0ZS1zY2F0dGVyLXBsb3QtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2NhdHRlci1wbG90LWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2NhdHRlci1wbG90LWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2NhdHRlclBsb3RDaGFydENvbXBvbmVudCBleHRlbmRzIENoYXJ0QmFzZUNvbXBvbmVudCB7XG4gIHB1YmxpYyBjaGFydCA9IGNoYXJ0KCk7XG4gIHByb3RlY3RlZCB0b29sdGlwQ29udGFpbmVyU2VsZWN0b3IgPSAnLnNjYXR0ZXItcGxvdCAubWV0YWRhdGEtZ3JvdXAnO1xuICBwcm90ZWN0ZWQgc2VsZWN0b3IgPSAnLnNjYXR0ZXItcGxvdCc7XG4gIHByb3RlY3RlZCB0eXBlID0gQ2hhcnRUeXBlLlNjYXR0ZXJQbG90O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmKTtcbiAgfVxuXG59XG4iXX0=