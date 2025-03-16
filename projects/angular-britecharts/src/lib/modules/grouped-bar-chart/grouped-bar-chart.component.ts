import { Component, OnInit, ElementRef } from '@angular/core';
import { ChartBaseComponent } from '../../chart.base';
import chart from 'britecharts/dist/umd/charts/groupedBar.min';
import { ChartType } from '../../chart.types';
@Component({
  selector: 'brite-grouped-bar-chart',
  templateUrl: './grouped-bar-chart.component.html',
  styleUrls: ['./grouped-bar-chart.component.scss']
})
export class GroupedBarChartComponent extends ChartBaseComponent {
  public chart = chart();
  protected selector = '.grouped-bar';
  protected clickSelector = '.grouped-bar .bar';
  protected tooltipContainerSelector = '.grouped-bar .metadata-group';
  protected type = ChartType.GroupedBar;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

}
