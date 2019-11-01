import { OnChanges, Input, Output, EventEmitter, ElementRef, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { Observable, fromEvent, Subject } from 'rxjs';
import * as d3Selection from 'd3-selection';
import colors from 'britecharts/dist/umd/colors.min';
import miniTooltip from 'britecharts/dist/umd/miniTooltip.min';
import tooltip from 'britecharts/dist/umd/tooltip.min';
import { ChartType, ChartConfig } from './chart.types';
import { debounceTime, takeUntil } from 'rxjs/operators';

export class ChartBaseComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public data: any[] | {
    dataByTopic: []
  };
  @Input() public chartConfig: any;
  @Input() public exportAsImageEvt: Observable<any>;
  @Input() public loading: boolean;
  @Output() public ready: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public chartClick = new EventEmitter<{
    chart: any,
    data: any,
    coords?: any,
    mouse?: any,
    scatter?: any
  }>();

  public chart: any;
  protected canceller: Subject<any> = new Subject();
  protected el: HTMLElement;
  protected type: ChartType;
  protected container: any;
  protected selector: string;
  protected clickSelector: string;
  protected tooltipContainerSelector: string;

  public tooltip: any;
  public tooltipContainer: any;
  private isObject = (obj) => !!obj && typeof obj === 'object' && !Array.isArray(obj);
  constructor(elementRef: ElementRef) {
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(250),
        takeUntil(this.canceller)
      ).subscribe(() => {
        this.drawChart();
      });
    this.el = elementRef.nativeElement;
    this.container = d3Selection.select(this.el);
  }
  public ngOnDestroy(): void {
    this.canceller.next();
  }
  public ngOnInit(): void {
    if (this.exportAsImageEvt) {
      this.exportAsImageEvt.subscribe(data => {
        this.chart.exportChart(data.filename, data.title);
      });
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.loading) {
      if (changes.loading.currentValue) {
        if (this.chart.loadingState instanceof Function) {
          this.container.html(this.chart.loadingState());
        }
        this.ready.emit(true);
        return;
      } else {
        this.container.html('');
      }
    }
    if (this.chartConfig || this.type && (changes.data)) {
      this.drawChart();
    }
  }
  public drawChart(): void {
    const chartContainer = this.container = d3Selection.select(this.el);
    const containerWidth = chartContainer.node() ? (chartContainer.node() as any).getBoundingClientRect().width : false;
    const { chart, chartConfig } = this;
    if (containerWidth) {
      // Set the container width to a standar value. If width is passed in the properties it is going to be
      // overriden later.
      chart.width(containerWidth);

      if (chart.shouldReverseColorList instanceof Function) {
        chart.shouldReverseColorList(false);
      }
      if (this.isObject(chartConfig.properties)) {
        Object.entries(chartConfig.properties).forEach(([option, value]) => {
          if (chart[option] instanceof Function) {
            chart[option](value);
          }
        });
      }

      // If the size of some property must be set relative to the container width it must be sent in an
      // object name 'sizeRelativeToContainerWidth' containing the property to set as key and the ratio to the
      // container's width as value.
      if (this.isObject(chartConfig.sizeRelativeToContainerWidth)) {
        Object.entries(chartConfig.sizeRelativeToContainerWidth).forEach(([option, value]: [string, number]) => {
          if (chart[option] instanceof Function) {
            chart[option](containerWidth / value);
          }
        });
      }

      if (this.isObject(chartConfig.colors)) {
        if (typeof chartConfig.colors.colorSchema === 'string') {
          if (colors.colorSchemas[chartConfig.colors.colorSchema]) {
            if (chartConfig.colors.reverse === true) {
              chart.colorSchema(colors.colorSchemas[chartConfig.colors.colorSchema].reverse());
            } else {
              chart.colorSchema(colors.colorSchemas[chartConfig.colors.colorSchema]);
            }
          }
        } else if (Array.isArray(chartConfig.colors.colorSchema)) {
          chart.colorSchema(chartConfig.colors.colorSchema);
        }
      }

      chartContainer.datum(this.data).call(this.chart);

      if (this.type === ChartType.Line || this.type === ChartType.StackedArea) {
        chart.on('customDataEntryClick', (data, coords, mouse) => {
          this.chartClick.emit({ chart, data, coords, mouse });
        });
      } else if (this.type === ChartType.ScatterPlot) {
        this.chart.on('customClick', (data, coords, mouse, scatter) => {
          this.chartClick.emit({ chart, data, coords, mouse, scatter });
        });
      } else {
        d3Selection.select(this.el).selectAll(this.clickSelector).on('click', (event) => this.chartClick.emit({ chart, data: event }));
      }


      if (this.chartConfig.tooltip && this.tooltipContainerSelector) {
        this.tooltipContainer = d3Selection.select(this.el).select(this.tooltipContainerSelector);
        if ([ChartType.Bar, ChartType.Step, ChartType.ScatterPlot].indexOf(this.type) > -1) {
          this.tooltip = miniTooltip();
          chart.on('customMouseOver', this.tooltip.show);
          chart.on('customMouseMove', this.tooltip.update);
          chart.on('customMouseOut', this.tooltip.hide);
          this.tooltipContainer.datum(this.data).call(this.tooltip);
        } else if ([ChartType.Line, ChartType.StackedArea, ChartType.GroupedBar, ChartType.StackedBar].indexOf(this.type) > -1) {
          this.tooltip = tooltip();

          chart.on('customMouseOver', () => {
            this.tooltip.show();
          });
          chart.on('customMouseMove', (dataPoint, topicColorMap, dataPointXPosition) => {
            this.tooltip.update(dataPoint, topicColorMap, dataPointXPosition);
          });
          chart.on('customMouseOut', () => {
            //this.tooltip.hide();
          });

          this.tooltipContainer.datum([]).call(this.tooltip);
        }
        if (this.isObject(this.chartConfig.tooltip)) {
          Object.entries(this.chartConfig.tooltip).forEach(([option, value]) => {
            if (this.tooltip[option] instanceof Function) {
              this.tooltip[option](value);
            }
          });
        }
      }

      if (this.isObject(chartConfig.events)) {
        Object.entries(chartConfig.events).forEach(([name, value]: [string, (chart, ...args) => void]) => {
          if (name === 'click') {
            this.chartClick.pipe(takeUntil(this.canceller)).subscribe((event) => {
              value(event.chart, event.data, event.coords, event.mouse, event.scatter);
            });
          } else {
            chart.on(name, (...args) => value(chart, ...args));
          }
        });
      }
      this.ready.emit(true);
    }
  }
}

