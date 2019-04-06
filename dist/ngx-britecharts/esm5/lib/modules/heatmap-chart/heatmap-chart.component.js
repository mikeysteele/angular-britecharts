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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhdG1hcC1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYnJpdGVjaGFydHMvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9oZWF0bWFwLWNoYXJ0L2hlYXRtYXAtY2hhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxLQUFLLE1BQU0sa0NBQWtDLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTlDO0lBSzJDLGlEQUFrQjtJQU8zRCwrQkFBWSxVQUFzQjtRQUFsQyxZQUNFLGtCQUFNLFVBQVUsQ0FBQyxTQUNsQjtRQVBNLFdBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUNoQixjQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLG1CQUFhLEdBQUcsZUFBZSxDQUFDO1FBQzdCLFVBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDOztJQUluQyxDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsWUFBNkM7O2lCQUU5Qzs7OztnQkFUMkIsVUFBVTs7SUFxQnRDLDRCQUFDO0NBQUEsQUFoQkQsQ0FLMkMsa0JBQWtCLEdBVzVEO1NBWFkscUJBQXFCOzs7SUFFaEMsc0NBQXVCOztJQUN2Qix5Q0FBNkI7O0lBQzdCLDhDQUF1Qzs7Ozs7SUFDdkMscUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBjaGFydCBmcm9tICdicml0ZWNoYXJ0cy9kaXN0L3VtZC9oZWF0bWFwLm1pbic7XG5pbXBvcnQgeyBDaGFydEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jaGFydC5iYXNlJztcbmltcG9ydCB7IENoYXJ0VHlwZSB9IGZyb20gJy4uLy4uL2NoYXJ0LnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnJpdGUtaGVhdG1hcC1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWF0bWFwLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhdG1hcC1jaGFydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhlYXRtYXBDaGFydENvbXBvbmVudCBleHRlbmRzIENoYXJ0QmFzZUNvbXBvbmVudCB7XG5cbiAgcHVibGljIGNoYXJ0ID0gY2hhcnQoKTtcbiAgcHVibGljIHNlbGVjdG9yID0gJy5oZWF0bWFwJztcbiAgcHVibGljIGNsaWNrU2VsZWN0b3IgPSAnLmhlYXRtYXAgLmJveCc7XG4gIHByb3RlY3RlZCB0eXBlID0gQ2hhcnRUeXBlLkhlYXRtYXA7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYpO1xuICB9XG5cbn1cbiJdfQ==