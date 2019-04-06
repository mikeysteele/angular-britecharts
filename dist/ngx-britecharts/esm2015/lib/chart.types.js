/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ChartType = {
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
const ChartGrid = {
    Horizontal: 'horizontal',
    Vertical: 'vertical',
    Full: 'full',
};
export { ChartGrid };
/** @enum {string} */
const ChartDateLabel = {
    FullDate: 'fullDate',
};
export { ChartDateLabel };
/** @enum {string} */
const ChartLineCurve = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQudHlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYnJpdGVjaGFydHMvIiwic291cmNlcyI6WyJsaWIvY2hhcnQudHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQ0UsS0FBTSxLQUFLO0lBQ1gsT0FBUSxPQUFPO0lBQ2YsUUFBUyxRQUFRO0lBQ2pCLE9BQVEsT0FBTztJQUNmLFlBQWEsWUFBWTtJQUN6QixTQUFVLFNBQVM7SUFDbkIsUUFBUyxRQUFRO0lBQ2pCLE1BQU8sTUFBTTtJQUNiLGFBQWMsYUFBYTtJQUMzQixXQUFZLFdBQVc7SUFDdkIsYUFBYyxhQUFhO0lBQzNCLFlBQWEsWUFBWTtJQUN6QixNQUFPLE1BQU07Ozs7O0lBSWIsWUFBYSxZQUFZO0lBQ3pCLFVBQVcsVUFBVTtJQUNyQixNQUFPLE1BQU07Ozs7O0lBSWIsVUFBVyxVQUFVOzs7OztJQUlyQixPQUFRLE9BQU87SUFDZixRQUFTLFFBQVE7Ozs7OztBQUduQixxQ0FXQzs7O0lBVkMsc0NBQXFCOztJQUNyQixvQ0FBMkI7O0lBQzNCLG9DQUEyQjs7SUFDM0IsK0JBQWlCOztJQUNqQixpQ0FLRTs7Ozs7QUFFSixpQ0FFQzs7O0lBREMsNEJBQXNDOzs7OztBQUd4QyxpQ0FVQzs7O0lBVEMsaUNBQTZCOztJQUM3Qiw2QkFBcUI7O0lBQ3JCLDRCQUEyQzs7SUFDM0MsNkJBR0U7O0lBQ0YsbURBQW1DOztJQUNuQyw4QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBDaGFydFR5cGUge1xuICBCYXIgPSAnYmFyJyxcbiAgQnJ1c2ggPSAnYnJ1c2gnLFxuICBCdWxsZXQgPSAnYnVsbGV0JyxcbiAgRG9udXQgPSAnZG9udXQnLFxuICBHcm91cGVkQmFyID0gJ2dyb3VwZWRCYXInLFxuICBIZWF0bWFwID0gJ2hlYWRtYXAnLFxuICBMZWdlbmQgPSAnbGVnZW5kJyxcbiAgTGluZSA9ICdsaW5lJyxcbiAgU2NhdHRlclBsb3QgPSAnc2NhdHRlclBsb3QnLFxuICBTcGFya2xpbmUgPSAnc3BhcmtsaW5lJyxcbiAgU3RhY2tlZEFyZWEgPSAnc3RhY2tlZEFyZWEnLFxuICBTdGFja2VkQmFyID0gJ3N0YWNrZWRCYXInLFxuICBTdGVwID0gJ3N0ZXAnXG59XG5cbmV4cG9ydCBlbnVtIENoYXJ0R3JpZCB7XG4gIEhvcml6b250YWwgPSAnaG9yaXpvbnRhbCcsXG4gIFZlcnRpY2FsID0gJ3ZlcnRpY2FsJyxcbiAgRnVsbCA9ICdmdWxsJ1xufVxuXG5leHBvcnQgZW51bSBDaGFydERhdGVMYWJlbCB7XG4gIEZ1bGxEYXRlID0gJ2Z1bGxEYXRlJyxcbn1cblxuZXhwb3J0IGVudW0gQ2hhcnRMaW5lQ3VydmUge1xuICBCYXNpcyA9ICdiYXNpcycsXG4gIExpbmVhciA9ICdsaW5lYXInXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnRQcm9wZXJ0aWVzIHtcbiAgYXNwZWN0UmF0aW8/OiBudW1iZXI7XG4gIGRhdGVMYWJlbD86IENoYXJ0RGF0ZUxhYmVsO1xuICBsaW5lQ3VydmU/OiBDaGFydExpbmVDdXJ2ZTtcbiAgZ3JpZD86IENoYXJ0R3JpZDtcbiAgbWFyZ2luOiB7XG4gICAgdG9wPzogbnVtYmVyO1xuICAgIHJpZ2h0PzogbnVtYmVyO1xuICAgIGJvdHRvbT86IG51bWJlcjtcbiAgICBsZWZ0PzogbnVtYmVyO1xuICB9O1xufVxuZXhwb3J0IGludGVyZmFjZSBDaGFydEV2ZW50cyB7XG4gIGNsaWNrPzogKGNoYXJ0OiBhbnksIGRhdGE6IGFueSkgPT4ge307XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnRDb25maWcge1xuICBwcm9wZXJ0aWVzPzogQ2hhcnRQcm9wZXJ0aWVzO1xuICBldmVudHM/OiBDaGFydEV2ZW50cztcbiAgY2xpY2s/OiAoY2hhcnQ6IGFueSwgLi4uYXJnczogYW55W10pID0+IHt9O1xuICBjb2xvcnM/OiB7XG4gICAgY29sb3JTY2hlbWE6IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIHJldmVyc2U/OiBib29sZWFuXG4gIH07XG4gIHNpemVSZWxhdGl2ZVRvQ29udGFpbmVyV2lkdGg/OiBhbnk7XG4gIHRvb2x0aXA/OiBib29sZWFuIHwgYW55O1xufVxuIl19