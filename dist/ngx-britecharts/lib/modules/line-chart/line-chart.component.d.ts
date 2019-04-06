import { ElementRef, EventEmitter } from '@angular/core';
import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';
export declare class LineChartComponent extends ChartBaseComponent {
    chart: any;
    chartClick: EventEmitter<{
        chart: any;
        event: any;
        data: any;
        mouse: any;
    }>;
    protected tooltipContainerSelector: string;
    protected selector: string;
    protected type: ChartType;
    constructor(elementRef: ElementRef);
}
