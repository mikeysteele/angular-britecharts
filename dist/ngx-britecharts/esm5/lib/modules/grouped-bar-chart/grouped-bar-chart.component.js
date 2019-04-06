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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBlZC1iYXItY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJyaXRlY2hhcnRzLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvZ3JvdXBlZC1iYXItY2hhcnQvZ3JvdXBlZC1iYXItY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxLQUFLLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDO0lBSzhDLG9EQUFrQjtJQU85RCxrQ0FBWSxVQUFzQjtRQUFsQyxZQUNFLGtCQUFNLFVBQVUsQ0FBQyxTQUNsQjtRQVJNLFdBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUNiLGNBQVEsR0FBRyxjQUFjLENBQUM7UUFDMUIsbUJBQWEsR0FBRyxtQkFBbUIsQ0FBQztRQUNwQyw4QkFBd0IsR0FBRyw4QkFBOEIsQ0FBQztRQUMxRCxVQUFJLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQzs7SUFJdEMsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFlBQWlEOztpQkFFbEQ7Ozs7Z0JBUjJCLFVBQVU7O0lBb0J0QywrQkFBQztDQUFBLEFBaEJELENBSzhDLGtCQUFrQixHQVcvRDtTQVhZLHdCQUF3Qjs7O0lBQ25DLHlDQUF1Qjs7Ozs7SUFDdkIsNENBQW9DOzs7OztJQUNwQyxpREFBOEM7Ozs7O0lBQzlDLDREQUFvRTs7Ozs7SUFDcEUsd0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NoYXJ0LmJhc2UnO1xuaW1wb3J0IGNoYXJ0IGZyb20gJ2JyaXRlY2hhcnRzL2Rpc3QvdW1kL2dyb3VwZWRCYXIubWluJztcbmltcG9ydCB7IENoYXJ0VHlwZSB9IGZyb20gJy4uLy4uL2NoYXJ0LnR5cGVzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JyaXRlLWdyb3VwZWQtYmFyLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dyb3VwZWQtYmFyLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ3JvdXBlZC1iYXItY2hhcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHcm91cGVkQmFyQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBDaGFydEJhc2VDb21wb25lbnQge1xuICBwdWJsaWMgY2hhcnQgPSBjaGFydCgpO1xuICBwcm90ZWN0ZWQgc2VsZWN0b3IgPSAnLmdyb3VwZWQtYmFyJztcbiAgcHJvdGVjdGVkIGNsaWNrU2VsZWN0b3IgPSAnLmdyb3VwZWQtYmFyIC5iYXInO1xuICBwcm90ZWN0ZWQgdG9vbHRpcENvbnRhaW5lclNlbGVjdG9yID0gJy5ncm91cGVkLWJhciAubWV0YWRhdGEtZ3JvdXAnO1xuICBwcm90ZWN0ZWQgdHlwZSA9IENoYXJ0VHlwZS5Hcm91cGVkQmFyO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmKTtcbiAgfVxuXG59XG4iXX0=