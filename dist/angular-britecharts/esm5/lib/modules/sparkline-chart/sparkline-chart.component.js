/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';
import chart from 'britecharts/dist/umd/sparkline.min';
var SparklineChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SparklineChartComponent, _super);
    function SparklineChartComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.chart = chart();
        _this.selector = '.spark-line';
        _this.type = ChartType.Sparkline;
        return _this;
    }
    SparklineChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'brite-sparkline-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .sparkline{stroke:#adb0b6;stroke-width:1;fill:none;stroke-linecap:round;stroke-linejoin:round}:host ::ng-deep .sparkline .line{stroke-width:2}:host ::ng-deep .sparkline .sparkline-circle{fill:#ff584c;stroke-width:0;display:none}:host ::ng-deep .sparkline .sparkline-area{stroke:none}"]
                }] }
    ];
    /** @nocollapse */
    SparklineChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return SparklineChartComponent;
}(ChartBaseComponent));
export { SparklineChartComponent };
if (false) {
    /** @type {?} */
    SparklineChartComponent.prototype.chart;
    /**
     * @type {?}
     * @protected
     */
    SparklineChartComponent.prototype.selector;
    /**
     * @type {?}
     * @protected
     */
    SparklineChartComponent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhcmtsaW5lLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYnJpdGVjaGFydHMvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9zcGFya2xpbmUtY2hhcnQvc3BhcmtsaW5lLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEtBQUssTUFBTSxvQ0FBb0MsQ0FBQztBQUV2RDtJQUs2QyxtREFBa0I7SUFNN0QsaUNBQVksVUFBc0I7UUFBbEMsWUFDRSxrQkFBTSxVQUFVLENBQUMsU0FDbEI7UUFOTSxXQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDYixjQUFRLEdBQUcsYUFBYSxDQUFDO1FBQ3pCLFVBQUksR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDOztJQUlyQyxDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsWUFBK0M7O2lCQUVoRDs7OztnQkFUMkIsVUFBVTs7SUFvQnRDLDhCQUFDO0NBQUEsQUFmRCxDQUs2QyxrQkFBa0IsR0FVOUQ7U0FWWSx1QkFBdUI7OztJQUVsQyx3Q0FBdUI7Ozs7O0lBQ3ZCLDJDQUFtQzs7Ozs7SUFDbkMsdUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NoYXJ0LmJhc2UnO1xuaW1wb3J0IHsgQ2hhcnRUeXBlIH0gZnJvbSAnLi4vLi4vY2hhcnQudHlwZXMnO1xuaW1wb3J0IGNoYXJ0IGZyb20gJ2JyaXRlY2hhcnRzL2Rpc3QvdW1kL3NwYXJrbGluZS5taW4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicml0ZS1zcGFya2xpbmUtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3BhcmtsaW5lLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3BhcmtsaW5lLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3BhcmtsaW5lQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBDaGFydEJhc2VDb21wb25lbnQge1xuXG4gIHB1YmxpYyBjaGFydCA9IGNoYXJ0KCk7XG4gIHByb3RlY3RlZCBzZWxlY3RvciA9ICcuc3BhcmstbGluZSc7XG4gIHByb3RlY3RlZCB0eXBlID0gQ2hhcnRUeXBlLlNwYXJrbGluZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZik7XG4gIH1cblxufVxuIl19