import { Component, OnInit, ElementRef } from '@angular/core';
import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';
import chart from 'britecharts/dist/umd/sparkline.min';

@Component({
  selector: 'brite-sparkline-chart',
  templateUrl: './sparkline-chart.component.html',
  styleUrls: ['./sparkline-chart.component.scss']
})
export class SparklineChartComponent extends ChartBaseComponent {

  public chart = chart();
  protected selector = '.spark-line';
  protected type = ChartType.Sparkline;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

}
