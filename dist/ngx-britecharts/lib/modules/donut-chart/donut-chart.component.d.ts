import { ElementRef } from '@angular/core';
import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';
export declare class DonutChartComponent extends ChartBaseComponent {
    chart: any;
    selector: string;
    clickSelector: string;
    protected type: ChartType;
    constructor(elementRef: ElementRef);
}
