/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
import chart from 'britecharts/dist/umd/stackedArea.min';
import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';
var StackedAreaChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StackedAreaChartComponent, _super);
    function StackedAreaChartComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.chart = chart();
        _this.selector = '.stacked-area';
        _this.tooltipContainerSelector = '.stacked-area .metadata-group .vertical-marker-container';
        _this.type = ChartType.StackedArea;
        return _this;
    }
    StackedAreaChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'brite-stacked-area-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .stacked-area .dot{display:none}:host ::ng-deep .stacked-area .y-axis-group path{display:none}:host ::ng-deep .stacked-area .x-axis-group path{display:none}:host ::ng-deep .stacked-area .area-outline{shape-rendering:geometricPrecision;fill:none;stroke-width:1.2}:host ::ng-deep .stacked-area .data-point-highlighter{stroke-width:1.2}:host ::ng-deep .stacked-area .empty-data-line{stroke-width:2px;stroke-linecap:round}"]
                }] }
    ];
    /** @nocollapse */
    StackedAreaChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return StackedAreaChartComponent;
}(ChartBaseComponent));
export { StackedAreaChartComponent };
if (false) {
    /** @type {?} */
    StackedAreaChartComponent.prototype.chart;
    /**
     * @type {?}
     * @protected
     */
    StackedAreaChartComponent.prototype.selector;
    /**
     * @type {?}
     * @protected
     */
    StackedAreaChartComponent.prototype.tooltipContainerSelector;
    /**
     * @type {?}
     * @protected
     */
    StackedAreaChartComponent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2tlZC1hcmVhLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYnJpdGVjaGFydHMvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9zdGFja2VkLWFyZWEtY2hhcnQvc3RhY2tlZC1hcmVhLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sS0FBSyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU5QztJQUsrQyxxREFBa0I7SUFPL0QsbUNBQVksVUFBc0I7UUFBbEMsWUFDRSxrQkFBTSxVQUFVLENBQUMsU0FDbEI7UUFQTSxXQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDYixjQUFRLEdBQUcsZUFBZSxDQUFDO1FBQzNCLDhCQUF3QixHQUFHLDBEQUEwRCxDQUFDO1FBQ3RGLFVBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDOztJQUl2QyxDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsWUFBa0Q7O2lCQUVuRDs7OztnQkFUbUIsVUFBVTs7SUFxQjlCLGdDQUFDO0NBQUEsQUFoQkQsQ0FLK0Msa0JBQWtCLEdBV2hFO1NBWFkseUJBQXlCOzs7SUFFcEMsMENBQXVCOzs7OztJQUN2Qiw2Q0FBcUM7Ozs7O0lBQ3JDLDZEQUFnRzs7Ozs7SUFDaEcseUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgY2hhcnQgZnJvbSAnYnJpdGVjaGFydHMvZGlzdC91bWQvc3RhY2tlZEFyZWEubWluJztcbmltcG9ydCB7IENoYXJ0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NoYXJ0LmJhc2UnO1xuaW1wb3J0IHsgQ2hhcnRUeXBlIH0gZnJvbSAnLi4vLi4vY2hhcnQudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicml0ZS1zdGFja2VkLWFyZWEtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RhY2tlZC1hcmVhLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RhY2tlZC1hcmVhLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RhY2tlZEFyZWFDaGFydENvbXBvbmVudCBleHRlbmRzIENoYXJ0QmFzZUNvbXBvbmVudCB7XG5cbiAgcHVibGljIGNoYXJ0ID0gY2hhcnQoKTtcbiAgcHJvdGVjdGVkIHNlbGVjdG9yID0gJy5zdGFja2VkLWFyZWEnO1xuICBwcm90ZWN0ZWQgdG9vbHRpcENvbnRhaW5lclNlbGVjdG9yID0gJy5zdGFja2VkLWFyZWEgLm1ldGFkYXRhLWdyb3VwIC52ZXJ0aWNhbC1tYXJrZXItY29udGFpbmVyJztcbiAgcHJvdGVjdGVkIHR5cGUgPSBDaGFydFR5cGUuU3RhY2tlZEFyZWE7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYpO1xuICB9XG5cbn1cbiJdfQ==