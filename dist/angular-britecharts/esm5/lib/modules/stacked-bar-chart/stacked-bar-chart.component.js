/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
import chart from 'britecharts/dist/umd/stackedbar.min';
import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';
var StackedBarChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StackedBarChartComponent, _super);
    function StackedBarChartComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.chart = chart();
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
export { StackedBarChartComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2tlZC1iYXItY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1icml0ZWNoYXJ0cy8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL3N0YWNrZWQtYmFyLWNoYXJ0L3N0YWNrZWQtYmFyLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sS0FBSyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU5QztJQUs4QyxvREFBa0I7SUFPOUQsa0NBQVksVUFBc0I7UUFBbEMsWUFDRSxrQkFBTSxVQUFVLENBQUMsU0FDbEI7UUFQTSxXQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDYixjQUFRLEdBQUcsY0FBYyxDQUFDO1FBQzFCLDhCQUF3QixHQUFHLDhCQUE4QixDQUFDO1FBQzFELFVBQUksR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDOztJQUl0QyxDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsWUFBaUQ7O2lCQUVsRDs7OztnQkFUbUIsVUFBVTs7SUFxQjlCLCtCQUFDO0NBQUEsQUFoQkQsQ0FLOEMsa0JBQWtCLEdBVy9EO1NBWFksd0JBQXdCOzs7SUFFbkMseUNBQXVCOzs7OztJQUN2Qiw0Q0FBb0M7Ozs7O0lBQ3BDLDREQUFvRTs7Ozs7SUFDcEUsd0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgY2hhcnQgZnJvbSAnYnJpdGVjaGFydHMvZGlzdC91bWQvc3RhY2tlZGJhci5taW4nO1xuaW1wb3J0IHsgQ2hhcnRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY2hhcnQuYmFzZSc7XG5pbXBvcnQgeyBDaGFydFR5cGUgfSBmcm9tICcuLi8uLi9jaGFydC50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JyaXRlLXN0YWNrZWQtYmFyLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YWNrZWQtYmFyLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RhY2tlZC1iYXItY2hhcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGFja2VkQmFyQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBDaGFydEJhc2VDb21wb25lbnQge1xuXG4gIHB1YmxpYyBjaGFydCA9IGNoYXJ0KCk7XG4gIHByb3RlY3RlZCBzZWxlY3RvciA9ICcuc3RhY2tlZC1iYXInO1xuICBwcm90ZWN0ZWQgdG9vbHRpcENvbnRhaW5lclNlbGVjdG9yID0gJy5zdGFja2VkLWJhciAubWV0YWRhdGEtZ3JvdXAnO1xuICBwcm90ZWN0ZWQgdHlwZSA9IENoYXJ0VHlwZS5TdGFja2VkQmFyO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmKTtcbiAgfVxuXG59XG4iXX0=