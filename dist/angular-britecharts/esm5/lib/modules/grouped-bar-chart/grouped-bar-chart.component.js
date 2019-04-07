/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
import { ChartBaseComponent } from '../../chart.base';
import chart from 'britecharts/dist/umd/groupedBar.min';
import { ChartType } from '../../chart.types';
var GroupedBarChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GroupedBarChartComponent, _super);
    function GroupedBarChartComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.chart = chart();
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
export { GroupedBarChartComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBlZC1iYXItY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1icml0ZWNoYXJ0cy8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2dyb3VwZWQtYmFyLWNoYXJ0L2dyb3VwZWQtYmFyLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sS0FBSyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QztJQUs4QyxvREFBa0I7SUFPOUQsa0NBQVksVUFBc0I7UUFBbEMsWUFDRSxrQkFBTSxVQUFVLENBQUMsU0FDbEI7UUFSTSxXQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDYixjQUFRLEdBQUcsY0FBYyxDQUFDO1FBQzFCLG1CQUFhLEdBQUcsbUJBQW1CLENBQUM7UUFDcEMsOEJBQXdCLEdBQUcsOEJBQThCLENBQUM7UUFDMUQsVUFBSSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUM7O0lBSXRDLENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxZQUFpRDs7aUJBRWxEOzs7O2dCQVIyQixVQUFVOztJQW9CdEMsK0JBQUM7Q0FBQSxBQWhCRCxDQUs4QyxrQkFBa0IsR0FXL0Q7U0FYWSx3QkFBd0I7OztJQUNuQyx5Q0FBdUI7Ozs7O0lBQ3ZCLDRDQUFvQzs7Ozs7SUFDcEMsaURBQThDOzs7OztJQUM5Qyw0REFBb0U7Ozs7O0lBQ3BFLHdDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jaGFydC5iYXNlJztcbmltcG9ydCBjaGFydCBmcm9tICdicml0ZWNoYXJ0cy9kaXN0L3VtZC9ncm91cGVkQmFyLm1pbic7XG5pbXBvcnQgeyBDaGFydFR5cGUgfSBmcm9tICcuLi8uLi9jaGFydC50eXBlcyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicml0ZS1ncm91cGVkLWJhci1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9ncm91cGVkLWJhci1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dyb3VwZWQtYmFyLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR3JvdXBlZEJhckNoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQ2hhcnRCYXNlQ29tcG9uZW50IHtcbiAgcHVibGljIGNoYXJ0ID0gY2hhcnQoKTtcbiAgcHJvdGVjdGVkIHNlbGVjdG9yID0gJy5ncm91cGVkLWJhcic7XG4gIHByb3RlY3RlZCBjbGlja1NlbGVjdG9yID0gJy5ncm91cGVkLWJhciAuYmFyJztcbiAgcHJvdGVjdGVkIHRvb2x0aXBDb250YWluZXJTZWxlY3RvciA9ICcuZ3JvdXBlZC1iYXIgLm1ldGFkYXRhLWdyb3VwJztcbiAgcHJvdGVjdGVkIHR5cGUgPSBDaGFydFR5cGUuR3JvdXBlZEJhcjtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZik7XG4gIH1cblxufVxuIl19