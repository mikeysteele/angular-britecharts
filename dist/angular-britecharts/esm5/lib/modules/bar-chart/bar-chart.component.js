/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
import { ChartBaseComponent } from '../../chart.base';
import chart from 'britecharts/dist/umd/bar.min';
import { ChartType } from '../../chart.types';
var BarChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BarChartComponent, _super);
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
export { BarChartComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYnJpdGVjaGFydHMvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9iYXItY2hhcnQvYmFyLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sS0FBSyxNQUFNLDhCQUE4QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QztJQUt1Qyw2Q0FBa0I7SUFPdkQsMkJBQVksVUFBc0I7UUFBbEMsWUFDRSxrQkFBTSxVQUFVLENBQUMsU0FDbEI7UUFSTSxXQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDYixjQUFRLEdBQUcsWUFBWSxDQUFDO1FBQ3hCLG1CQUFhLEdBQUcsaUJBQWlCLENBQUM7UUFDbEMsOEJBQXdCLEdBQUcsNEJBQTRCLENBQUM7UUFDeEQsVUFBSSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7O0lBSS9CLENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixZQUF5Qzs7aUJBRTFDOzs7O2dCQVJtQixVQUFVOztJQW9COUIsd0JBQUM7Q0FBQSxBQWhCRCxDQUt1QyxrQkFBa0IsR0FXeEQ7U0FYWSxpQkFBaUI7OztJQUM1QixrQ0FBdUI7Ozs7O0lBQ3ZCLHFDQUFrQzs7Ozs7SUFDbEMsMENBQTRDOzs7OztJQUM1QyxxREFBa0U7Ozs7O0lBQ2xFLGlDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY2hhcnQuYmFzZSc7XG5pbXBvcnQgY2hhcnQgZnJvbSAnYnJpdGVjaGFydHMvZGlzdC91bWQvYmFyLm1pbic7XG5pbXBvcnQgeyBDaGFydFR5cGUgfSBmcm9tICcuLi8uLi9jaGFydC50eXBlcyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicml0ZS1iYXItY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFyLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFyLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmFyQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBDaGFydEJhc2VDb21wb25lbnQge1xuICBwdWJsaWMgY2hhcnQgPSBjaGFydCgpO1xuICBwcm90ZWN0ZWQgc2VsZWN0b3IgPSAnLmJhci1jaGFydCc7XG4gIHByb3RlY3RlZCBjbGlja1NlbGVjdG9yID0gJy5iYXItY2hhcnQgLmJhcic7XG4gIHByb3RlY3RlZCB0b29sdGlwQ29udGFpbmVyU2VsZWN0b3IgPSAnLmJhci1jaGFydCAubWV0YWRhdGEtZ3JvdXAnO1xuICBwcm90ZWN0ZWQgdHlwZSA9IENoYXJ0VHlwZS5CYXI7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYpO1xuICB9XG5cbn1cbiJdfQ==