/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
import chart from 'britecharts/dist/umd/step.min';
import { ChartType } from '../../chart.types';
import { ChartBaseComponent } from '../../chart.base';
var StepChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StepChartComponent, _super);
    function StepChartComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.chart = chart();
        _this.selector = '.step-chart';
        _this.clickSelector = '.step-chart .step';
        _this.tooltipContainerSelector = '.step-chart .metadata-group';
        _this.type = ChartType.Step;
        return _this;
    }
    StepChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'brite-step-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .step-chart .step{fill:#8fdad8;stroke-width:0;shape-rendering:crispEdges}:host ::ng-deep .step-chart .step:hover{fill:#39c2c9}:host ::ng-deep .step-chart .axis path{display:none}:host ::ng-deep .step-chart .tick line{display:none}"]
                }] }
    ];
    /** @nocollapse */
    StepChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return StepChartComponent;
}(ChartBaseComponent));
export { StepChartComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJyaXRlY2hhcnRzLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvc3RlcC1jaGFydC9zdGVwLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sS0FBSyxNQUFNLCtCQUErQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV0RDtJQUt3Qyw4Q0FBa0I7SUFPeEQsNEJBQVksVUFBc0I7UUFBbEMsWUFDRSxrQkFBTSxVQUFVLENBQUMsU0FDbEI7UUFQTSxXQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDYixjQUFRLEdBQUcsYUFBYSxDQUFDO1FBQ3pCLG1CQUFhLEdBQUcsbUJBQW1CLENBQUM7UUFDcEMsOEJBQXdCLEdBQUcsNkJBQTZCLENBQUM7UUFDekQsVUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7O0lBR2hDLENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixZQUEwQzs7aUJBRTNDOzs7O2dCQVRtQixVQUFVOztJQXFCOUIseUJBQUM7Q0FBQSxBQWhCRCxDQUt3QyxrQkFBa0IsR0FXekQ7U0FYWSxrQkFBa0I7OztJQUU3QixtQ0FBdUI7Ozs7O0lBQ3ZCLHNDQUFtQzs7Ozs7SUFDbkMsMkNBQThDOzs7OztJQUM5QyxzREFBbUU7Ozs7O0lBQ25FLGtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGNoYXJ0IGZyb20gJ2JyaXRlY2hhcnRzL2Rpc3QvdW1kL3N0ZXAubWluJztcbmltcG9ydCB7IENoYXJ0VHlwZSB9IGZyb20gJy4uLy4uL2NoYXJ0LnR5cGVzJztcbmltcG9ydCB7IENoYXJ0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NoYXJ0LmJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicml0ZS1zdGVwLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXAtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RlcENoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQ2hhcnRCYXNlQ29tcG9uZW50IHtcblxuICBwdWJsaWMgY2hhcnQgPSBjaGFydCgpO1xuICBwcm90ZWN0ZWQgc2VsZWN0b3IgPSAnLnN0ZXAtY2hhcnQnO1xuICBwcm90ZWN0ZWQgY2xpY2tTZWxlY3RvciA9ICcuc3RlcC1jaGFydCAuc3RlcCc7XG4gIHByb3RlY3RlZCB0b29sdGlwQ29udGFpbmVyU2VsZWN0b3IgPSAnLnN0ZXAtY2hhcnQgLm1ldGFkYXRhLWdyb3VwJztcbiAgcHJvdGVjdGVkIHR5cGUgPSBDaGFydFR5cGUuU3RlcDtcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYpO1xuICB9XG5cbn1cbiJdfQ==