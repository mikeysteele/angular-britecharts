/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
import { ChartBaseComponent } from '../../chart.base';
import chart from 'britecharts/dist/umd/legend.min';
import { ChartType } from '../../chart.types';
var LegendComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LegendComponent, _super);
    function LegendComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.chart = chart();
        _this.selector = '.britechart-legend';
        _this.clickSelector = '.legend-entry';
        _this.type = ChartType.Legend;
        return _this;
    }
    LegendComponent.decorators = [
        { type: Component, args: [{
                    selector: 'brite-legend',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}"]
                }] }
    ];
    /** @nocollapse */
    LegendComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return LegendComponent;
}(ChartBaseComponent));
export { LegendComponent };
if (false) {
    /** @type {?} */
    LegendComponent.prototype.chart;
    /**
     * @type {?}
     * @protected
     */
    LegendComponent.prototype.selector;
    /**
     * @type {?}
     * @protected
     */
    LegendComponent.prototype.clickSelector;
    /**
     * @type {?}
     * @protected
     */
    LegendComponent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1icml0ZWNoYXJ0cy8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2xlZ2VuZC9sZWdlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxLQUFLLE1BQU0saUNBQWlDLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTlDO0lBS3FDLDJDQUFrQjtJQU1yRCx5QkFBWSxVQUFzQjtRQUFsQyxZQUNFLGtCQUFNLFVBQVUsQ0FBQyxTQUNsQjtRQVBNLFdBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUNiLGNBQVEsR0FBRyxvQkFBb0IsQ0FBQztRQUNoQyxtQkFBYSxHQUFHLGVBQWUsQ0FBQztRQUNoQyxVQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQzs7SUFJbEMsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixZQUFzQzs7aUJBRXZDOzs7O2dCQVQyQixVQUFVOztJQW9CdEMsc0JBQUM7Q0FBQSxBQWZELENBS3FDLGtCQUFrQixHQVV0RDtTQVZZLGVBQWU7OztJQUMxQixnQ0FBdUI7Ozs7O0lBQ3ZCLG1DQUEwQzs7Ozs7SUFDMUMsd0NBQTBDOzs7OztJQUMxQywrQkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY2hhcnQuYmFzZSc7XG5pbXBvcnQgY2hhcnQgZnJvbSAnYnJpdGVjaGFydHMvZGlzdC91bWQvbGVnZW5kLm1pbic7XG5pbXBvcnQgeyBDaGFydFR5cGUgfSBmcm9tICcuLi8uLi9jaGFydC50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JyaXRlLWxlZ2VuZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sZWdlbmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sZWdlbmQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMZWdlbmRDb21wb25lbnQgZXh0ZW5kcyBDaGFydEJhc2VDb21wb25lbnQge1xuICBwdWJsaWMgY2hhcnQgPSBjaGFydCgpO1xuICBwcm90ZWN0ZWQgc2VsZWN0b3IgPSAnLmJyaXRlY2hhcnQtbGVnZW5kJztcbiAgcHJvdGVjdGVkIGNsaWNrU2VsZWN0b3IgPSAnLmxlZ2VuZC1lbnRyeSc7XG4gIHByb3RlY3RlZCB0eXBlID0gQ2hhcnRUeXBlLkxlZ2VuZDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZik7XG4gIH1cblxufVxuIl19