import { Component, ElementRef } from '@angular/core';
import chart from 'britecharts/dist/umd/stackedBar.min';
import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';

@Component({
  selector: 'brite-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss']
})
export class StackedBarChartComponent extends ChartBaseComponent {

  public chart = chart();
  protected selector = '.stacked-bar';
  protected tooltipContainerSelector = '.stacked-bar .metadata-group';
  protected type = ChartType.StackedBar;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

}
