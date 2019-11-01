/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Output, EventEmitter } from '@angular/core';
import { ChartBaseComponent } from '../../chart.base';
import chart from 'britecharts/dist/umd/line.min';
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
                styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .line-chart .data-point-mark{fill:#fff}:host ::ng-deep .line-chart .topic .line{fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}:host ::ng-deep .line-chart .x.axis path,:host ::ng-deep .line-chart .y.axis path{display:none}:host ::ng-deep .line-chart .month-axis path{display:none}:host ::ng-deep .line-chart .masking-rectangle{fill:#fff}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJyaXRlY2hhcnRzLyIsInNvdXJjZXMiOlsibGliL21vZHVsZXMvbGluZS1jaGFydC9saW5lLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RCxPQUFPLEtBQUssTUFBTSwrQkFBK0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPOUMsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGtCQUFrQjs7OztJQVl4RCxZQUFZLFVBQXNCO1FBQ2hDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQVpiLFVBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUNOLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFLMUMsQ0FBQztRQUNLLDZCQUF3QixHQUFHLDJDQUEyQyxDQUFDO1FBQ3ZFLGFBQVEsR0FBRyxhQUFhLENBQUM7UUFDekIsU0FBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFJOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsc0JBQXNCOzs7Ozs7UUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFlBQTBDOzthQUUzQzs7OztZQVRtQixVQUFVOzs7eUJBWTNCLE1BQU07Ozs7SUFEUCxtQ0FBdUI7O0lBQ3ZCLHdDQUtLOzs7OztJQUNMLHNEQUFpRjs7Ozs7SUFDakYsc0NBQW1DOzs7OztJQUNuQyxrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY2hhcnQuYmFzZSc7XG5pbXBvcnQgY2hhcnQgZnJvbSAnYnJpdGVjaGFydHMvZGlzdC91bWQvbGluZS5taW4nO1xuaW1wb3J0IHsgQ2hhcnRUeXBlIH0gZnJvbSAnLi4vLi4vY2hhcnQudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdicml0ZS1saW5lLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpbmUtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saW5lLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGluZUNoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQ2hhcnRCYXNlQ29tcG9uZW50IHtcbiAgcHVibGljIGNoYXJ0ID0gY2hhcnQoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBjaGFydENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgY2hhcnQ6IGFueSxcbiAgICBldmVudDogYW55LFxuICAgIGRhdGE6IGFueSxcbiAgICBtb3VzZTogYW55XG4gIH0+KCk7XG4gIHByb3RlY3RlZCB0b29sdGlwQ29udGFpbmVyU2VsZWN0b3IgPSAnLmxpbmUtY2hhcnQgLm1ldGFkYXRhLWdyb3VwIC5ob3Zlci1tYXJrZXInO1xuICBwcm90ZWN0ZWQgc2VsZWN0b3IgPSAnLmxpbmUtY2hhcnQnO1xuICBwcm90ZWN0ZWQgdHlwZSA9IENoYXJ0VHlwZS5MaW5lO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50UmVmKTtcbiAgICB0aGlzLmNoYXJ0Lm9uKCdjdXN0b21EYXRhRW50cnlDbGljaycsIChldmVudCwgZGF0YSwgbW91c2UpID0+IHtcbiAgICAgIHRoaXMuY2hhcnRDbGljay5lbWl0KHtjaGFydDogdGhpcy5jaGFydCwgZXZlbnQsIGRhdGEsIG1vdXNlfSk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19