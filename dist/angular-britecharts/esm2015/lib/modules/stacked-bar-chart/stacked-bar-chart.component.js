/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
import chart from 'britecharts/dist/umd/stackedbar.min';
import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';
export class StackedBarChartComponent extends ChartBaseComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.chart = chart();
        this.selector = '.stacked-bar';
        this.tooltipContainerSelector = '.stacked-bar .metadata-group';
        this.type = ChartType.StackedBar;
    }
}
StackedBarChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'brite-stacked-bar-chart',
                template: "",
                styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes swipe{from{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}:host ::ng-deep .stacked-bar .x-axis-group path,:host ::ng-deep .stacked-bar .y-axis-group path{display:none}:host ::ng-deep .stacked-bar .y-axis-group .tick text{font-size:14px}:host ::ng-deep .stacked-bar .tick line{display:none}"]
            }] }
];
/** @nocollapse */
StackedBarChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /** @type {?} */
    StackedBarChartComponent.prototype.chart;
    /**
     * @type {?}
     * @protected
     */
    StackedBarChartComponent.prototype.selector;
    /**
     * @type {?}
     * @protected
     */
    StackedBarChartComponent.prototype.tooltipContainerSelector;
    /**
     * @type {?}
     * @protected
     */
    StackedBarChartComponent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2tlZC1iYXItY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1icml0ZWNoYXJ0cy8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL3N0YWNrZWQtYmFyLWNoYXJ0L3N0YWNrZWQtYmFyLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxLQUFLLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTzlDLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxrQkFBa0I7Ozs7SUFPOUQsWUFBWSxVQUFzQjtRQUNoQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFOYixVQUFLLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDYixhQUFRLEdBQUcsY0FBYyxDQUFDO1FBQzFCLDZCQUF3QixHQUFHLDhCQUE4QixDQUFDO1FBQzFELFNBQUksR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDO0lBSXRDLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxZQUFpRDs7YUFFbEQ7Ozs7WUFUbUIsVUFBVTs7OztJQVk1Qix5Q0FBdUI7Ozs7O0lBQ3ZCLDRDQUFvQzs7Ozs7SUFDcEMsNERBQW9FOzs7OztJQUNwRSx3Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBjaGFydCBmcm9tICdicml0ZWNoYXJ0cy9kaXN0L3VtZC9zdGFja2VkYmFyLm1pbic7XG5pbXBvcnQgeyBDaGFydEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jaGFydC5iYXNlJztcbmltcG9ydCB7IENoYXJ0VHlwZSB9IGZyb20gJy4uLy4uL2NoYXJ0LnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnJpdGUtc3RhY2tlZC1iYXItY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RhY2tlZC1iYXItY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGFja2VkLWJhci1jaGFydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0YWNrZWRCYXJDaGFydENvbXBvbmVudCBleHRlbmRzIENoYXJ0QmFzZUNvbXBvbmVudCB7XG5cbiAgcHVibGljIGNoYXJ0ID0gY2hhcnQoKTtcbiAgcHJvdGVjdGVkIHNlbGVjdG9yID0gJy5zdGFja2VkLWJhcic7XG4gIHByb3RlY3RlZCB0b29sdGlwQ29udGFpbmVyU2VsZWN0b3IgPSAnLnN0YWNrZWQtYmFyIC5tZXRhZGF0YS1ncm91cCc7XG4gIHByb3RlY3RlZCB0eXBlID0gQ2hhcnRUeXBlLlN0YWNrZWRCYXI7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYpO1xuICB9XG5cbn1cbiJdfQ==