/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
import chart from 'britecharts/dist/umd/bullet.min';
import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';
var BulletChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BulletChartComponent, _super);
    function BulletChartComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.chart = chart();
        _this.selector = '.bullet-chart';
        _this.clickSelector = '.bullet-chart .range, .bullet-chart .measure, .bullet-chart .marker-line';
        _this.type = ChartType.Bullet;
        return _this;
    }
    BulletChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'brite-bullet-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .bullet-chart .marker-line{shape-rendering:crispEdges}:host ::ng-deep .bullet-chart .axis-group path{display:none}:host ::ng-deep .bullet-chart .bullet-title{font-size:16px}"]
                }] }
    ];
    /** @nocollapse */
    BulletChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return BulletChartComponent;
}(ChartBaseComponent));
export { BulletChartComponent };
if (false) {
    /** @type {?} */
    BulletChartComponent.prototype.chart;
    /** @type {?} */
    BulletChartComponent.prototype.selector;
    /** @type {?} */
    BulletChartComponent.prototype.clickSelector;
    /**
     * @type {?}
     * @protected
     */
    BulletChartComponent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsbGV0LWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYnJpdGVjaGFydHMvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9idWxsZXQtY2hhcnQvYnVsbGV0LWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sS0FBSyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU5QztJQUswQyxnREFBa0I7SUFPMUQsOEJBQVksVUFBc0I7UUFBbEMsWUFDRSxrQkFBTSxVQUFVLENBQUMsU0FDbEI7UUFQTSxXQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDaEIsY0FBUSxHQUFHLGVBQWUsQ0FBQztRQUMzQixtQkFBYSxHQUFHLDBFQUEwRSxDQUFDO1FBQ3hGLFVBQUksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDOztJQUlsQyxDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsWUFBNEM7O2lCQUU3Qzs7OztnQkFUbUIsVUFBVTs7SUFvQjlCLDJCQUFDO0NBQUEsQUFmRCxDQUswQyxrQkFBa0IsR0FVM0Q7U0FWWSxvQkFBb0I7OztJQUUvQixxQ0FBdUI7O0lBQ3ZCLHdDQUFrQzs7SUFDbEMsNkNBQWtHOzs7OztJQUNsRyxvQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBjaGFydCBmcm9tICdicml0ZWNoYXJ0cy9kaXN0L3VtZC9idWxsZXQubWluJztcbmltcG9ydCB7IENoYXJ0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NoYXJ0LmJhc2UnO1xuaW1wb3J0IHsgQ2hhcnRUeXBlIH0gZnJvbSAnLi4vLi4vY2hhcnQudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicml0ZS1idWxsZXQtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnVsbGV0LWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnVsbGV0LWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnVsbGV0Q2hhcnRDb21wb25lbnQgZXh0ZW5kcyBDaGFydEJhc2VDb21wb25lbnQge1xuXG4gIHB1YmxpYyBjaGFydCA9IGNoYXJ0KCk7XG4gIHB1YmxpYyBzZWxlY3RvciA9ICcuYnVsbGV0LWNoYXJ0JztcbiAgcHVibGljIGNsaWNrU2VsZWN0b3IgPSAnLmJ1bGxldC1jaGFydCAucmFuZ2UsIC5idWxsZXQtY2hhcnQgLm1lYXN1cmUsIC5idWxsZXQtY2hhcnQgLm1hcmtlci1saW5lJztcbiAgcHJvdGVjdGVkIHR5cGUgPSBDaGFydFR5cGUuQnVsbGV0O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmKTtcbiAgfVxufVxuIl19