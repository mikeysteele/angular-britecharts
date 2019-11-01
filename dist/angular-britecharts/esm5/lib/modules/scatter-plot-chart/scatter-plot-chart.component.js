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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhdHRlci1wbG90LWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYnJpdGVjaGFydHMvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9zY2F0dGVyLXBsb3QtY2hhcnQvc2NhdHRlci1wbG90LWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sS0FBSyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV0RDtJQUsrQyxxREFBa0I7SUFNL0QsbUNBQVksVUFBc0I7UUFBbEMsWUFDRSxrQkFBTSxVQUFVLENBQUMsU0FDbEI7UUFQTSxXQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDYiw4QkFBd0IsR0FBRywrQkFBK0IsQ0FBQztRQUMzRCxjQUFRLEdBQUcsZUFBZSxDQUFDO1FBQzNCLFVBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDOztJQUl2QyxDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsWUFBa0Q7O2lCQUVuRDs7OztnQkFUMkIsVUFBVTs7SUFvQnRDLGdDQUFDO0NBQUEsQUFmRCxDQUsrQyxrQkFBa0IsR0FVaEU7U0FWWSx5QkFBeUI7OztJQUNwQywwQ0FBdUI7Ozs7O0lBQ3ZCLDZEQUFxRTs7Ozs7SUFDckUsNkNBQXFDOzs7OztJQUNyQyx5Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGNoYXJ0IGZyb20gJ2JyaXRlY2hhcnRzL2Rpc3QvdW1kL3NjYXR0ZXJQbG90Lm1pbic7XG5pbXBvcnQgeyBDaGFydFR5cGUgfSBmcm9tICcuLi8uLi9jaGFydC50eXBlcyc7XG5pbXBvcnQgeyBDaGFydEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jaGFydC5iYXNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnJpdGUtc2NhdHRlci1wbG90LWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NjYXR0ZXItcGxvdC1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NjYXR0ZXItcGxvdC1jaGFydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNjYXR0ZXJQbG90Q2hhcnRDb21wb25lbnQgZXh0ZW5kcyBDaGFydEJhc2VDb21wb25lbnQge1xuICBwdWJsaWMgY2hhcnQgPSBjaGFydCgpO1xuICBwcm90ZWN0ZWQgdG9vbHRpcENvbnRhaW5lclNlbGVjdG9yID0gJy5zY2F0dGVyLXBsb3QgLm1ldGFkYXRhLWdyb3VwJztcbiAgcHJvdGVjdGVkIHNlbGVjdG9yID0gJy5zY2F0dGVyLXBsb3QnO1xuICBwcm90ZWN0ZWQgdHlwZSA9IENoYXJ0VHlwZS5TY2F0dGVyUGxvdDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZik7XG4gIH1cblxufVxuIl19