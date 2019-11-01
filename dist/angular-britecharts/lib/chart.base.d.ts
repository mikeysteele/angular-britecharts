import { OnChanges, EventEmitter, ElementRef, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ChartType } from './chart.types';
export declare class ChartBaseComponent implements OnInit, OnChanges, OnDestroy {
    data: any[] | {
        dataByTopic: [];
    };
    chartConfig: any;
    exportAsImageEvt: Observable<any>;
    loading: boolean;
    ready: EventEmitter<boolean>;
    chartClick: EventEmitter<{
        chart: any;
        data: any;
        coords?: any;
        mouse?: any;
        scatter?: any;
    }>;
    chart: any;
    protected canceller: Subject<any>;
    protected el: HTMLElement;
    protected type: ChartType;
    protected container: any;
    protected selector: string;
    protected clickSelector: string;
    protected tooltipContainerSelector: string;
    tooltip: any;
    tooltipContainer: any;
    private isObject;
    constructor(elementRef: ElementRef);
    ngOnDestroy(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    drawChart(): void;
}
