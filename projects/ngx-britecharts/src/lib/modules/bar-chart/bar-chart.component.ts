import { Component, ElementRef } from '@angular/core';
import { ChartBaseComponent } from '../../chart.base';
import chart from 'britecharts/dist/umd/bar.min';
import { ChartType } from '../../chart.types';
@Component({
  selector: 'brite-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent extends ChartBaseComponent {
  public chart = chart();
  protected selector = '.bar-chart';
  protected clickSelector = '.bar-chart .bar';
  protected tooltipContainerSelector = '.bar-chart .metadata-group';
  protected type = ChartType.Bar;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

}
