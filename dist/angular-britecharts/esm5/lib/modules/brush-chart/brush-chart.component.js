/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
import chart from 'britecharts/dist/umd/brush.min';
import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';
var BrushChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BrushChartComponent, _super);
    function BrushChartComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.chart = chart();
        _this.selector = '.brush-chart';
        _this.type = ChartType.Brush;
        return _this;
    }
    BrushChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'brite-brush-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .brush-chart .brush-area{fill:#eff2f5}:host ::ng-deep .brush-chart rect.brush-rect.selection{fill-opacity:.08;stroke-linejoin:round}:host ::ng-deep .brush-chart rect.brush-rect.handle{fill:#00d8d2;width:.2rem}:host ::ng-deep .brush-chart .axis path{display:none}"]
                }] }
    ];
    /** @nocollapse */
    BrushChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return BrushChartComponent;
}(ChartBaseComponent));
export { BrushChartComponent };
if (false) {
    /** @type {?} */
    BrushChartComponent.prototype.chart;
    /**
     * @type {?}
     * @protected
     */
    BrushChartComponent.prototype.selector;
    /**
     * @type {?}
     * @protected
     */
    BrushChartComponent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJ1c2gtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1icml0ZWNoYXJ0cy8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2JydXNoLWNoYXJ0L2JydXNoLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sS0FBSyxNQUFNLGdDQUFnQyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU5QztJQUt5QywrQ0FBa0I7SUFNekQsNkJBQVksVUFBc0I7UUFBbEMsWUFDRSxrQkFBTSxVQUFVLENBQUMsU0FDbEI7UUFOTSxXQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDYixjQUFRLEdBQUcsY0FBYyxDQUFDO1FBQzFCLFVBQUksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDOztJQUlqQyxDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsWUFBMkM7O2lCQUU1Qzs7OztnQkFUbUIsVUFBVTs7SUFvQjlCLDBCQUFDO0NBQUEsQUFmRCxDQUt5QyxrQkFBa0IsR0FVMUQ7U0FWWSxtQkFBbUI7OztJQUU5QixvQ0FBdUI7Ozs7O0lBQ3ZCLHVDQUFvQzs7Ozs7SUFDcEMsbUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgY2hhcnQgZnJvbSAnYnJpdGVjaGFydHMvZGlzdC91bWQvYnJ1c2gubWluJztcbmltcG9ydCB7IENoYXJ0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NoYXJ0LmJhc2UnO1xuaW1wb3J0IHsgQ2hhcnRUeXBlIH0gZnJvbSAnLi4vLi4vY2hhcnQudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicml0ZS1icnVzaC1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9icnVzaC1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JydXNoLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnJ1c2hDaGFydENvbXBvbmVudCBleHRlbmRzIENoYXJ0QmFzZUNvbXBvbmVudCB7XG5cbiAgcHVibGljIGNoYXJ0ID0gY2hhcnQoKTtcbiAgcHJvdGVjdGVkIHNlbGVjdG9yID0gJy5icnVzaC1jaGFydCc7XG4gIHByb3RlY3RlZCB0eXBlID0gQ2hhcnRUeXBlLkJydXNoO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmKTtcbiAgfVxuXG59XG4iXX0=