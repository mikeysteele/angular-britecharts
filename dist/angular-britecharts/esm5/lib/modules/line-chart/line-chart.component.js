/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import chart from 'britecharts/src/charts/line.js';
import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';
var LineChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LineChartComponent, _super);
    function LineChartComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.chart = chart();
        _this.chartClick = new EventEmitter();
        _this.tooltipContainerSelector = '.line-chart .metadata-group .hover-marker';
        _this.selector = '.line-chart';
        _this.type = ChartType.Line;
        _this.chart.on('customDataEntryClick', (/**
         * @param {?} event
         * @param {?} data
         * @param {?} mouse
         * @return {?}
         */
        function (event, data, mouse) {
            _this.chartClick.emit({ chart: _this.chart, event: event, data: data, mouse: mouse });
        }));
        return _this;
    }
    LineChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'brite-line-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .line-chart .data-point-mark{fill:#fff}:host ::ng-deep .line-chart .topic .line{fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}:host ::ng-deep .line-chart .x.axis path,:host ::ng-deep .line-chart .y.axis path{display:none}:host ::ng-deep .line-chart .month-axis path{display:none}:host ::ng-deep .line-chart .masking-rectangle{fill:#fff}"]
                }] }
    ];
    /** @nocollapse */
    LineChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    LineChartComponent.propDecorators = {
        chartClick: [{ type: Output }]
    };
    return LineChartComponent;
}(ChartBaseComponent));
export { LineChartComponent };
if (false) {
    /** @type {?} */
    LineChartComponent.prototype.chart;
    /** @type {?} */
    LineChartComponent.prototype.chartClick;
    /**
     * @type {?}
     * @protected
     */
    LineChartComponent.prototype.tooltipContainerSelector;
    /**
     * @type {?}
     * @protected
     */
    LineChartComponent.prototype.selector;
    /**
     * @type {?}
     * @protected
     */
    LineChartComponent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJyaXRlY2hhcnRzLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvbGluZS1jaGFydC9saW5lLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxLQUFLLE1BQU0sZ0NBQWdDLENBQUM7QUFFbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTlDO0lBS3dDLDhDQUFrQjtJQVl4RCw0QkFBWSxVQUFzQjtRQUFsQyxZQUNFLGtCQUFNLFVBQVUsQ0FBQyxTQUlsQjtRQWhCTSxXQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDTixnQkFBVSxHQUFHLElBQUksWUFBWSxFQUsxQyxDQUFDO1FBQ0ssOEJBQXdCLEdBQUcsMkNBQTJDLENBQUM7UUFDdkUsY0FBUSxHQUFHLGFBQWEsQ0FBQztRQUN6QixVQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUk5QixLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxzQkFBc0I7Ozs7OztRQUFFLFVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLO1lBQ3ZELEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxPQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUMsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsRUFBQyxDQUFDOztJQUNMLENBQUM7O2dCQXRCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsWUFBMEM7O2lCQUUzQzs7OztnQkFWbUIsVUFBVTs7OzZCQWEzQixNQUFNOztJQWlCVCx5QkFBQztDQUFBLEFBeEJELENBS3dDLGtCQUFrQixHQW1CekQ7U0FuQlksa0JBQWtCOzs7SUFDN0IsbUNBQXVCOztJQUN2Qix3Q0FLSzs7Ozs7SUFDTCxzREFBaUY7Ozs7O0lBQ2pGLHNDQUFtQzs7Ozs7SUFDbkMsa0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGNoYXJ0IGZyb20gJ2JyaXRlY2hhcnRzL3NyYy9jaGFydHMvbGluZS5qcyc7XG5cbmltcG9ydCB7IENoYXJ0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NoYXJ0LmJhc2UnO1xuaW1wb3J0IHsgQ2hhcnRUeXBlIH0gZnJvbSAnLi4vLi4vY2hhcnQudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicml0ZS1saW5lLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpbmUtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saW5lLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGluZUNoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQ2hhcnRCYXNlQ29tcG9uZW50IHtcbiAgcHVibGljIGNoYXJ0ID0gY2hhcnQoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBjaGFydENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgY2hhcnQ6IGFueSxcbiAgICBldmVudDogYW55LFxuICAgIGRhdGE6IGFueSxcbiAgICBtb3VzZTogYW55XG4gIH0+KCk7XG4gIHByb3RlY3RlZCB0b29sdGlwQ29udGFpbmVyU2VsZWN0b3IgPSAnLmxpbmUtY2hhcnQgLm1ldGFkYXRhLWdyb3VwIC5ob3Zlci1tYXJrZXInO1xuICBwcm90ZWN0ZWQgc2VsZWN0b3IgPSAnLmxpbmUtY2hhcnQnO1xuICBwcm90ZWN0ZWQgdHlwZSA9IENoYXJ0VHlwZS5MaW5lO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmKTtcbiAgICB0aGlzLmNoYXJ0Lm9uKCdjdXN0b21EYXRhRW50cnlDbGljaycsIChldmVudCwgZGF0YSwgbW91c2UpID0+IHtcbiAgICAgIHRoaXMuY2hhcnRDbGljay5lbWl0KHtjaGFydDogdGhpcy5jaGFydCwgZXZlbnQsIGRhdGEsIG1vdXNlfSk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19