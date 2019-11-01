/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ChartType = {
    Bar: 'bar',
    Brush: 'brush',
    Bullet: 'bullet',
    Donut: 'donut',
    GroupedBar: 'groupedBar',
    Heatmap: 'headmap',
    Legend: 'legend',
    Line: 'line',
    ScatterPlot: 'scatterPlot',
    Sparkline: 'sparkline',
    StackedArea: 'stackedArea',
    StackedBar: 'stackedBar',
    Step: 'step',
};
export { ChartType };
/** @enum {string} */
var ChartGrid = {
    Horizontal: 'horizontal',
    Vertical: 'vertical',
    Full: 'full',
};
export { ChartGrid };
/** @enum {string} */
var ChartDateLabel = {
    FullDate: 'fullDate',
};
export { ChartDateLabel };
/** @enum {string} */
var ChartLineCurve = {
    Basis: 'basis',
    Linear: 'linear',
};
export { ChartLineCurve };
/**
 * @record
 */
export function ChartProperties() { }
if (false) {
    /** @type {?|undefined} */
    ChartProperties.prototype.aspectRatio;
    /** @type {?|undefined} */
    ChartProperties.prototype.dateLabel;
    /** @type {?|undefined} */
    ChartProperties.prototype.lineCurve;
    /** @type {?|undefined} */
    ChartProperties.prototype.grid;
    /** @type {?} */
    ChartProperties.prototype.margin;
}
/**
 * @record
 */
export function ChartEvents() { }
if (false) {
    /** @type {?|undefined} */
    ChartEvents.prototype.click;
}
/**
 * @record
 */
export function ChartConfig() { }
if (false) {
    /** @type {?|undefined} */
    ChartConfig.prototype.properties;
    /** @type {?|undefined} */
    ChartConfig.prototype.events;
    /** @type {?|undefined} */
    ChartConfig.prototype.click;
    /** @type {?|undefined} */
    ChartConfig.prototype.colors;
    /** @type {?|undefined} */
    ChartConfig.prototype.sizeRelativeToContainerWidth;
    /** @type {?|undefined} */
    ChartConfig.prototype.tooltip;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQudHlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJyaXRlY2hhcnRzLyIsInNvdXJjZXMiOlsibGliL2NoYXJ0LnR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUNFLEtBQU0sS0FBSztJQUNYLE9BQVEsT0FBTztJQUNmLFFBQVMsUUFBUTtJQUNqQixPQUFRLE9BQU87SUFDZixZQUFhLFlBQVk7SUFDekIsU0FBVSxTQUFTO0lBQ25CLFFBQVMsUUFBUTtJQUNqQixNQUFPLE1BQU07SUFDYixhQUFjLGFBQWE7SUFDM0IsV0FBWSxXQUFXO0lBQ3ZCLGFBQWMsYUFBYTtJQUMzQixZQUFhLFlBQVk7SUFDekIsTUFBTyxNQUFNOzs7OztJQUliLFlBQWEsWUFBWTtJQUN6QixVQUFXLFVBQVU7SUFDckIsTUFBTyxNQUFNOzs7OztJQUliLFVBQVcsVUFBVTs7Ozs7SUFJckIsT0FBUSxPQUFPO0lBQ2YsUUFBUyxRQUFROzs7Ozs7QUFHbkIscUNBV0M7OztJQVZDLHNDQUFxQjs7SUFDckIsb0NBQTJCOztJQUMzQixvQ0FBMkI7O0lBQzNCLCtCQUFpQjs7SUFDakIsaUNBS0U7Ozs7O0FBRUosaUNBRUM7OztJQURDLDRCQUFzQzs7Ozs7QUFHeEMsaUNBVUM7OztJQVRDLGlDQUE2Qjs7SUFDN0IsNkJBQXFCOztJQUNyQiw0QkFBMkM7O0lBQzNDLDZCQUdFOztJQUNGLG1EQUFtQzs7SUFDbkMsOEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gQ2hhcnRUeXBlIHtcbiAgQmFyID0gJ2JhcicsXG4gIEJydXNoID0gJ2JydXNoJyxcbiAgQnVsbGV0ID0gJ2J1bGxldCcsXG4gIERvbnV0ID0gJ2RvbnV0JyxcbiAgR3JvdXBlZEJhciA9ICdncm91cGVkQmFyJyxcbiAgSGVhdG1hcCA9ICdoZWFkbWFwJyxcbiAgTGVnZW5kID0gJ2xlZ2VuZCcsXG4gIExpbmUgPSAnbGluZScsXG4gIFNjYXR0ZXJQbG90ID0gJ3NjYXR0ZXJQbG90JyxcbiAgU3BhcmtsaW5lID0gJ3NwYXJrbGluZScsXG4gIFN0YWNrZWRBcmVhID0gJ3N0YWNrZWRBcmVhJyxcbiAgU3RhY2tlZEJhciA9ICdzdGFja2VkQmFyJyxcbiAgU3RlcCA9ICdzdGVwJ1xufVxuXG5leHBvcnQgZW51bSBDaGFydEdyaWQge1xuICBIb3Jpem9udGFsID0gJ2hvcml6b250YWwnLFxuICBWZXJ0aWNhbCA9ICd2ZXJ0aWNhbCcsXG4gIEZ1bGwgPSAnZnVsbCdcbn1cblxuZXhwb3J0IGVudW0gQ2hhcnREYXRlTGFiZWwge1xuICBGdWxsRGF0ZSA9ICdmdWxsRGF0ZScsXG59XG5cbmV4cG9ydCBlbnVtIENoYXJ0TGluZUN1cnZlIHtcbiAgQmFzaXMgPSAnYmFzaXMnLFxuICBMaW5lYXIgPSAnbGluZWFyJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0UHJvcGVydGllcyB7XG4gIGFzcGVjdFJhdGlvPzogbnVtYmVyO1xuICBkYXRlTGFiZWw/OiBDaGFydERhdGVMYWJlbDtcbiAgbGluZUN1cnZlPzogQ2hhcnRMaW5lQ3VydmU7XG4gIGdyaWQ/OiBDaGFydEdyaWQ7XG4gIG1hcmdpbjoge1xuICAgIHRvcD86IG51bWJlcjtcbiAgICByaWdodD86IG51bWJlcjtcbiAgICBib3R0b20/OiBudW1iZXI7XG4gICAgbGVmdD86IG51bWJlcjtcbiAgfTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnRFdmVudHMge1xuICBjbGljaz86IChjaGFydDogYW55LCBkYXRhOiBhbnkpID0+IHt9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0Q29uZmlnIHtcbiAgcHJvcGVydGllcz86IENoYXJ0UHJvcGVydGllcztcbiAgZXZlbnRzPzogQ2hhcnRFdmVudHM7XG4gIGNsaWNrPzogKGNoYXJ0OiBhbnksIC4uLmFyZ3M6IGFueVtdKSA9PiB7fTtcbiAgY29sb3JzPzoge1xuICAgIGNvbG9yU2NoZW1hOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICByZXZlcnNlPzogYm9vbGVhblxuICB9O1xuICBzaXplUmVsYXRpdmVUb0NvbnRhaW5lcldpZHRoPzogYW55O1xuICB0b29sdGlwPzogYm9vbGVhbiB8IGFueTtcbn1cbiJdfQ==