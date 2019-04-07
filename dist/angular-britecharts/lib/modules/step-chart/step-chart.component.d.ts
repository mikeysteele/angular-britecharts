import { ElementRef } from '@angular/core';
import { ChartType } from '../../chart.types';
import { ChartBaseComponent } from '../../chart.base';
export declare class StepChartComponent extends ChartBaseComponent {
    chart: any;
    protected selector: string;
    protected clickSelector: string;
    protected tooltipContainerSelector: string;
    protected type: ChartType;
    constructor(elementRef: ElementRef);
}
