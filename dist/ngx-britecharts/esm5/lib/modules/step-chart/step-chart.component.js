/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .step-chart .step{fill:#8fdad8;stroke-width:0;shape-rendering:crispEdges}:host ::ng-deep .step-chart .step:hover{fill:#39c2c9}:host ::ng-deep .step-chart .axis path{display:none}:host ::ng-deep .step-chart .tick line{display:none}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYnJpdGVjaGFydHMvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9zdGVwLWNoYXJ0L3N0ZXAtY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxLQUFLLE1BQU0sK0JBQStCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXREO0lBS3dDLDhDQUFrQjtJQU94RCw0QkFBWSxVQUFzQjtRQUFsQyxZQUNFLGtCQUFNLFVBQVUsQ0FBQyxTQUNsQjtRQVBNLFdBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUNiLGNBQVEsR0FBRyxhQUFhLENBQUM7UUFDekIsbUJBQWEsR0FBRyxtQkFBbUIsQ0FBQztRQUNwQyw4QkFBd0IsR0FBRyw2QkFBNkIsQ0FBQztRQUN6RCxVQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQzs7SUFHaEMsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFlBQTBDOztpQkFFM0M7Ozs7Z0JBVG1CLFVBQVU7O0lBcUI5Qix5QkFBQztDQUFBLEFBaEJELENBS3dDLGtCQUFrQixHQVd6RDtTQVhZLGtCQUFrQjs7O0lBRTdCLG1DQUF1Qjs7Ozs7SUFDdkIsc0NBQW1DOzs7OztJQUNuQywyQ0FBOEM7Ozs7O0lBQzlDLHNEQUFtRTs7Ozs7SUFDbkUsa0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgY2hhcnQgZnJvbSAnYnJpdGVjaGFydHMvZGlzdC91bWQvc3RlcC5taW4nO1xuaW1wb3J0IHsgQ2hhcnRUeXBlIH0gZnJvbSAnLi4vLi4vY2hhcnQudHlwZXMnO1xuaW1wb3J0IHsgQ2hhcnRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY2hhcnQuYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JyaXRlLXN0ZXAtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcC1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0ZXAtY2hhcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGVwQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBDaGFydEJhc2VDb21wb25lbnQge1xuXG4gIHB1YmxpYyBjaGFydCA9IGNoYXJ0KCk7XG4gIHByb3RlY3RlZCBzZWxlY3RvciA9ICcuc3RlcC1jaGFydCc7XG4gIHByb3RlY3RlZCBjbGlja1NlbGVjdG9yID0gJy5zdGVwLWNoYXJ0IC5zdGVwJztcbiAgcHJvdGVjdGVkIHRvb2x0aXBDb250YWluZXJTZWxlY3RvciA9ICcuc3RlcC1jaGFydCAubWV0YWRhdGEtZ3JvdXAnO1xuICBwcm90ZWN0ZWQgdHlwZSA9IENoYXJ0VHlwZS5TdGVwO1xuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZik7XG4gIH1cblxufVxuIl19