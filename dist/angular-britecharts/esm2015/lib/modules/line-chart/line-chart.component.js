/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import chart from 'britecharts/src/charts/line.js';
import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';
export class LineChartComponent extends ChartBaseComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.chart = chart();
        this.chartClick = new EventEmitter();
        this.tooltipContainerSelector = '.line-chart .metadata-group .hover-marker';
        this.selector = '.line-chart';
        this.type = ChartType.Line;
        this.chart.on('customDataEntryClick', (/**
         * @param {?} event
         * @param {?} data
         * @param {?} mouse
         * @return {?}
         */
        (event, data, mouse) => {
            this.chartClick.emit({ chart: this.chart, event, data, mouse });
        }));
    }
}
LineChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'brite-line-chart',
                template: "",
                styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .line-chart .data-point-mark{fill:#fff}:host ::ng-deep .line-chart .topic .line{fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}:host ::ng-deep .line-chart .x.axis path,:host ::ng-deep .line-chart .y.axis path{display:none}:host ::ng-deep .line-chart .month-axis path{display:none}:host ::ng-deep .line-chart .masking-rectangle{fill:#fff}"]
            }] }
];
/** @nocollapse */
LineChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
LineChartComponent.propDecorators = {
    chartClick: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJyaXRlY2hhcnRzLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvbGluZS1jaGFydC9saW5lLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEtBQUssTUFBTSxnQ0FBZ0MsQ0FBQztBQUVuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPOUMsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGtCQUFrQjs7OztJQVl4RCxZQUFZLFVBQXNCO1FBQ2hDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQVpiLFVBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUNOLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFLMUMsQ0FBQztRQUNLLDZCQUF3QixHQUFHLDJDQUEyQyxDQUFDO1FBQ3ZFLGFBQVEsR0FBRyxhQUFhLENBQUM7UUFDekIsU0FBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFJOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsc0JBQXNCOzs7Ozs7UUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFlBQTBDOzthQUUzQzs7OztZQVZtQixVQUFVOzs7eUJBYTNCLE1BQU07Ozs7SUFEUCxtQ0FBdUI7O0lBQ3ZCLHdDQUtLOzs7OztJQUNMLHNEQUFpRjs7Ozs7SUFDakYsc0NBQW1DOzs7OztJQUNuQyxrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgY2hhcnQgZnJvbSAnYnJpdGVjaGFydHMvc3JjL2NoYXJ0cy9saW5lLmpzJztcblxuaW1wb3J0IHsgQ2hhcnRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY2hhcnQuYmFzZSc7XG5pbXBvcnQgeyBDaGFydFR5cGUgfSBmcm9tICcuLi8uLi9jaGFydC50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JyaXRlLWxpbmUtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGluZS1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaW5lQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBDaGFydEJhc2VDb21wb25lbnQge1xuICBwdWJsaWMgY2hhcnQgPSBjaGFydCgpO1xuICBAT3V0cHV0KCkgcHVibGljIGNoYXJ0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBjaGFydDogYW55LFxuICAgIGV2ZW50OiBhbnksXG4gICAgZGF0YTogYW55LFxuICAgIG1vdXNlOiBhbnlcbiAgfT4oKTtcbiAgcHJvdGVjdGVkIHRvb2x0aXBDb250YWluZXJTZWxlY3RvciA9ICcubGluZS1jaGFydCAubWV0YWRhdGEtZ3JvdXAgLmhvdmVyLW1hcmtlcic7XG4gIHByb3RlY3RlZCBzZWxlY3RvciA9ICcubGluZS1jaGFydCc7XG4gIHByb3RlY3RlZCB0eXBlID0gQ2hhcnRUeXBlLkxpbmU7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYpO1xuICAgIHRoaXMuY2hhcnQub24oJ2N1c3RvbURhdGFFbnRyeUNsaWNrJywgKGV2ZW50LCBkYXRhLCBtb3VzZSkgPT4ge1xuICAgICAgdGhpcy5jaGFydENsaWNrLmVtaXQoe2NoYXJ0OiB0aGlzLmNoYXJ0LCBldmVudCwgZGF0YSwgbW91c2V9KTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=