/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
import chart from 'britecharts/dist/umd/heatmap.min';
import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';
var HeatmapChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(HeatmapChartComponent, _super);
    function HeatmapChartComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.chart = chart();
        _this.selector = '.heatmap';
        _this.clickSelector = '.heatmap .box';
        _this.type = ChartType.Heatmap;
        return _this;
    }
    HeatmapChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'brite-heatmap-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}"]
                }] }
    ];
    /** @nocollapse */
    HeatmapChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return HeatmapChartComponent;
}(ChartBaseComponent));
export { HeatmapChartComponent };
if (false) {
    /** @type {?} */
    HeatmapChartComponent.prototype.chart;
    /** @type {?} */
    HeatmapChartComponent.prototype.selector;
    /** @type {?} */
    HeatmapChartComponent.prototype.clickSelector;
    /**
     * @type {?}
     * @protected
     */
    HeatmapChartComponent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhdG1hcC1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJyaXRlY2hhcnRzLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvaGVhdG1hcC1jaGFydC9oZWF0bWFwLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sS0FBSyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU5QztJQUsyQyxpREFBa0I7SUFPM0QsK0JBQVksVUFBc0I7UUFBbEMsWUFDRSxrQkFBTSxVQUFVLENBQUMsU0FDbEI7UUFQTSxXQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDaEIsY0FBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixtQkFBYSxHQUFHLGVBQWUsQ0FBQztRQUM3QixVQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQzs7SUFJbkMsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFlBQTZDOztpQkFFOUM7Ozs7Z0JBVDJCLFVBQVU7O0lBcUJ0Qyw0QkFBQztDQUFBLEFBaEJELENBSzJDLGtCQUFrQixHQVc1RDtTQVhZLHFCQUFxQjs7O0lBRWhDLHNDQUF1Qjs7SUFDdkIseUNBQTZCOztJQUM3Qiw4Q0FBdUM7Ozs7O0lBQ3ZDLHFDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgY2hhcnQgZnJvbSAnYnJpdGVjaGFydHMvZGlzdC91bWQvaGVhdG1hcC5taW4nO1xuaW1wb3J0IHsgQ2hhcnRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY2hhcnQuYmFzZSc7XG5pbXBvcnQgeyBDaGFydFR5cGUgfSBmcm9tICcuLi8uLi9jaGFydC50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JyaXRlLWhlYXRtYXAtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhdG1hcC1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlYXRtYXAtY2hhcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIZWF0bWFwQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBDaGFydEJhc2VDb21wb25lbnQge1xuXG4gIHB1YmxpYyBjaGFydCA9IGNoYXJ0KCk7XG4gIHB1YmxpYyBzZWxlY3RvciA9ICcuaGVhdG1hcCc7XG4gIHB1YmxpYyBjbGlja1NlbGVjdG9yID0gJy5oZWF0bWFwIC5ib3gnO1xuICBwcm90ZWN0ZWQgdHlwZSA9IENoYXJ0VHlwZS5IZWF0bWFwO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmKTtcbiAgfVxuXG59XG4iXX0=