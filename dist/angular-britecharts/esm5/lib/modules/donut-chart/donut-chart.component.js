/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
import chart from 'britecharts/dist/umd/donut.min';
import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';
var DonutChartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DonutChartComponent, _super);
    function DonutChartComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.chart = chart();
        _this.selector = '.donut-chart';
        _this.clickSelector = '.donut-chart .arc';
        _this.type = ChartType.Donut;
        return _this;
    }
    DonutChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'brite-donut-chart',
                    template: "",
                    styles: [":host{display:block}:host ::ng-deep .britechart{font-family:Karla,sans-serif;-webkit-font-smoothing:antialiased}:host ::ng-deep .select-disable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host ::ng-deep .bar-load-state .chart-filter,:host ::ng-deep .donut-load-state .chart-filter,:host ::ng-deep .line-load-state .chart-filter,:host ::ng-deep .stacked-area-load-state .chart-filter{will-change:transform;-webkit-animation:1.5s linear infinite forwards swipe;animation:1.5s linear infinite forwards swipe}@-webkit-keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@keyframes swipe{from{transform:translateX(-100%)}to{transform:translateX(100%)}}:host ::ng-deep .horizontal-grid-line,:host ::ng-deep .vertical-grid-line{fill:none;shape-rendering:crispEdges;stroke:#eff2f5;stroke-width:1;stroke-dasharray:4,4}:host ::ng-deep .extended-x-line,:host ::ng-deep .extended-y-line{fill:none;shape-rendering:crispEdges;stroke:#d2d6df;stroke-width:1}:host ::ng-deep .tick line{fill:none;stroke:#adb0b6;stroke-width:1;shape-rendering:crispEdges}:host ::ng-deep .tick text{font-size:1rem;fill:#666a73;padding:12px}:host ::ng-deep .x-axis-label,:host ::ng-deep .y-axis-label{font-size:1rem;fill:#adb0b6}:host ::ng-deep .vertical-marker-container .vertical-marker{stroke:#d2d6df;stroke-width:1;fill:none}:host ::ng-deep .vertical-marker-container .data-point-highlighter{fill:#fff;stroke-width:2}:host ::ng-deep .tooltip-background{fill:rgba(255,255,255,.97);stroke:#d2d6df;stroke-width:1;border-radius:2px}:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-circle,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-name,:host ::ng-deep .britechart-legend .legend-entry.is-faded .legend-entry-value{opacity:.97;transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;opacity:.2}"]
                }] }
    ];
    /** @nocollapse */
    DonutChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return DonutChartComponent;
}(ChartBaseComponent));
export { DonutChartComponent };
if (false) {
    /** @type {?} */
    DonutChartComponent.prototype.chart;
    /** @type {?} */
    DonutChartComponent.prototype.selector;
    /** @type {?} */
    DonutChartComponent.prototype.clickSelector;
    /**
     * @type {?}
     * @protected
     */
    DonutChartComponent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9udXQtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1icml0ZWNoYXJ0cy8iLCJzb3VyY2VzIjpbImxpYi9tb2R1bGVzL2RvbnV0LWNoYXJ0L2RvbnV0LWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9DLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RixPQUFPLEtBQUssTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFOUM7SUFLeUMsK0NBQWtCO0lBS3pELDZCQUFZLFVBQXNCO1FBQWxDLFlBQ0Usa0JBQU0sVUFBVSxDQUFDLFNBQ2xCO1FBTk0sV0FBSyxHQUFHLEtBQUssRUFBRSxDQUFDO1FBQ2hCLGNBQVEsR0FBRyxjQUFjLENBQUM7UUFDMUIsbUJBQWEsR0FBRyxtQkFBbUIsQ0FBQztRQUNqQyxVQUFJLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQzs7SUFHakMsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFlBQTJDOztpQkFFNUM7Ozs7Z0JBVnFELFVBQVU7O0lBb0JoRSwwQkFBQztDQUFBLEFBZEQsQ0FLeUMsa0JBQWtCLEdBUzFEO1NBVFksbUJBQW1COzs7SUFDOUIsb0NBQXVCOztJQUN2Qix1Q0FBaUM7O0lBQ2pDLDRDQUEyQzs7Ozs7SUFDM0MsbUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGNoYXJ0IGZyb20gJ2JyaXRlY2hhcnRzL2Rpc3QvdW1kL2RvbnV0Lm1pbic7XG5pbXBvcnQgeyBDaGFydEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jaGFydC5iYXNlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENoYXJ0VHlwZSB9IGZyb20gJy4uLy4uL2NoYXJ0LnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnJpdGUtZG9udXQtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZG9udXQtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kb251dC1jaGFydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERvbnV0Q2hhcnRDb21wb25lbnQgZXh0ZW5kcyBDaGFydEJhc2VDb21wb25lbnQge1xuICBwdWJsaWMgY2hhcnQgPSBjaGFydCgpO1xuICBwdWJsaWMgc2VsZWN0b3IgPSAnLmRvbnV0LWNoYXJ0JztcbiAgcHVibGljIGNsaWNrU2VsZWN0b3IgPSAnLmRvbnV0LWNoYXJ0IC5hcmMnO1xuICBwcm90ZWN0ZWQgdHlwZSA9IENoYXJ0VHlwZS5Eb251dDtcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYpO1xuICB9XG5cbn1cbiJdfQ==