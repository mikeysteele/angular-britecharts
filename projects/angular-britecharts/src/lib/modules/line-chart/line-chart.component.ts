import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import chart from 'britecharts/src/charts/line.js';

import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';

@Component({
  selector: 'brite-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent extends ChartBaseComponent {
  public chart = chart();
  @Output() public chartClick = new EventEmitter<{
    chart: any,
    event: any,
    data: any,
    mouse: any
  }>();
  protected tooltipContainerSelector = '.line-chart .metadata-group .hover-marker';
  protected selector = '.line-chart';
  protected type = ChartType.Line;

  constructor(elementRef: ElementRef) {
    super(elementRef);
    this.chart.on('customDataEntryClick', (event, data, mouse) => {
      this.chartClick.emit({chart: this.chart, event, data, mouse});
    });
  }

}
