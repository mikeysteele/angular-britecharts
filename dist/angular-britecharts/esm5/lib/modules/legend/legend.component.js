/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYnJpdGVjaGFydHMvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlcy9sZWdlbmQvbGVnZW5kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sS0FBSyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU5QztJQUtxQywyQ0FBa0I7SUFNckQseUJBQVksVUFBc0I7UUFBbEMsWUFDRSxrQkFBTSxVQUFVLENBQUMsU0FDbEI7UUFQTSxXQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDYixjQUFRLEdBQUcsb0JBQW9CLENBQUM7UUFDaEMsbUJBQWEsR0FBRyxlQUFlLENBQUM7UUFDaEMsVUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7O0lBSWxDLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsWUFBc0M7O2lCQUV2Qzs7OztnQkFUMkIsVUFBVTs7SUFvQnRDLHNCQUFDO0NBQUEsQUFmRCxDQUtxQyxrQkFBa0IsR0FVdEQ7U0FWWSxlQUFlOzs7SUFDMUIsZ0NBQXVCOzs7OztJQUN2QixtQ0FBMEM7Ozs7O0lBQzFDLHdDQUEwQzs7Ozs7SUFDMUMsK0JBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NoYXJ0LmJhc2UnO1xuaW1wb3J0IGNoYXJ0IGZyb20gJ2JyaXRlY2hhcnRzL2Rpc3QvdW1kL2xlZ2VuZC5taW4nO1xuaW1wb3J0IHsgQ2hhcnRUeXBlIH0gZnJvbSAnLi4vLi4vY2hhcnQudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicml0ZS1sZWdlbmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGVnZW5kLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGVnZW5kLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGVnZW5kQ29tcG9uZW50IGV4dGVuZHMgQ2hhcnRCYXNlQ29tcG9uZW50IHtcbiAgcHVibGljIGNoYXJ0ID0gY2hhcnQoKTtcbiAgcHJvdGVjdGVkIHNlbGVjdG9yID0gJy5icml0ZWNoYXJ0LWxlZ2VuZCc7XG4gIHByb3RlY3RlZCBjbGlja1NlbGVjdG9yID0gJy5sZWdlbmQtZW50cnknO1xuICBwcm90ZWN0ZWQgdHlwZSA9IENoYXJ0VHlwZS5MZWdlbmQ7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYpO1xuICB9XG5cbn1cbiJdfQ==