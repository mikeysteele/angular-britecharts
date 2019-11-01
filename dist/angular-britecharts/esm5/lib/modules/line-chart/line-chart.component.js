/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import chart from 'britecharts/dist/umd/line.min';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJyaXRlY2hhcnRzLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvbGluZS1jaGFydC9saW5lLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxLQUFLLE1BQU0sK0JBQStCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTlDO0lBS3dDLDhDQUFrQjtJQVl4RCw0QkFBWSxVQUFzQjtRQUFsQyxZQUNFLGtCQUFNLFVBQVUsQ0FBQyxTQUlsQjtRQWhCTSxXQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDTixnQkFBVSxHQUFHLElBQUksWUFBWSxFQUsxQyxDQUFDO1FBQ0ssOEJBQXdCLEdBQUcsMkNBQTJDLENBQUM7UUFDdkUsY0FBUSxHQUFHLGFBQWEsQ0FBQztRQUN6QixVQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUk5QixLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxzQkFBc0I7Ozs7OztRQUFFLFVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLO1lBQ3ZELEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxPQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUMsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsRUFBQyxDQUFDOztJQUNMLENBQUM7O2dCQXRCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsWUFBMEM7O2lCQUUzQzs7OztnQkFWbUIsVUFBVTs7OzZCQWEzQixNQUFNOztJQWlCVCx5QkFBQztDQUFBLEFBeEJELENBS3dDLGtCQUFrQixHQW1CekQ7U0FuQlksa0JBQWtCOzs7SUFDN0IsbUNBQXVCOztJQUN2Qix3Q0FLSzs7Ozs7SUFDTCxzREFBaUY7Ozs7O0lBQ2pGLHNDQUFtQzs7Ozs7SUFDbkMsa0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGNoYXJ0IGZyb20gJ2JyaXRlY2hhcnRzL2Rpc3QvdW1kL2xpbmUubWluJztcblxuaW1wb3J0IHsgQ2hhcnRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY2hhcnQuYmFzZSc7XG5pbXBvcnQgeyBDaGFydFR5cGUgfSBmcm9tICcuLi8uLi9jaGFydC50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JyaXRlLWxpbmUtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGluZS1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaW5lQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBDaGFydEJhc2VDb21wb25lbnQge1xuICBwdWJsaWMgY2hhcnQgPSBjaGFydCgpO1xuICBAT3V0cHV0KCkgcHVibGljIGNoYXJ0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBjaGFydDogYW55LFxuICAgIGV2ZW50OiBhbnksXG4gICAgZGF0YTogYW55LFxuICAgIG1vdXNlOiBhbnlcbiAgfT4oKTtcbiAgcHJvdGVjdGVkIHRvb2x0aXBDb250YWluZXJTZWxlY3RvciA9ICcubGluZS1jaGFydCAubWV0YWRhdGEtZ3JvdXAgLmhvdmVyLW1hcmtlcic7XG4gIHByb3RlY3RlZCBzZWxlY3RvciA9ICcubGluZS1jaGFydCc7XG4gIHByb3RlY3RlZCB0eXBlID0gQ2hhcnRUeXBlLkxpbmU7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYpO1xuICAgIHRoaXMuY2hhcnQub24oJ2N1c3RvbURhdGFFbnRyeUNsaWNrJywgKGV2ZW50LCBkYXRhLCBtb3VzZSkgPT4ge1xuICAgICAgdGhpcy5jaGFydENsaWNrLmVtaXQoe2NoYXJ0OiB0aGlzLmNoYXJ0LCBldmVudCwgZGF0YSwgbW91c2V9KTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=