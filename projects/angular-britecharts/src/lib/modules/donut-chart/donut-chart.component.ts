import { Component, OnInit, SimpleChanges, OnChanges, ElementRef } from '@angular/core';
import chart from 'britecharts/dist/umd/charts/donut.min';
import { ChartBaseComponent } from '../../chart.base';
import { Subject } from 'rxjs';
import { ChartType } from '../../chart.types';

@Component({
  selector: 'brite-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent extends ChartBaseComponent {
  public chart = chart();
  public selector = '.donut-chart';
  public clickSelector = '.donut-chart .arc';
  protected type = ChartType.Donut;
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

}
