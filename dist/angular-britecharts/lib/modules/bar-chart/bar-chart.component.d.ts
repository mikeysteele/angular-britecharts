import { ElementRef } from '@angular/core';
import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';
export declare class BarChartComponent extends ChartBaseComponent {
    chart: any;
    protected selector: string;
    protected clickSelector: string;
    protected tooltipContainerSelector: string;
    protected type: ChartType;
    constructor(elementRef: ElementRef);
}
