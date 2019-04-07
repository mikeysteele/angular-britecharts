import { ElementRef } from '@angular/core';
import { ChartType } from '../../chart.types';
import { ChartBaseComponent } from '../../chart.base';
export declare class ScatterPlotChartComponent extends ChartBaseComponent {
    chart: any;
    protected tooltipContainerSelector: string;
    protected selector: string;
    protected type: ChartType;
    constructor(elementRef: ElementRef);
}
