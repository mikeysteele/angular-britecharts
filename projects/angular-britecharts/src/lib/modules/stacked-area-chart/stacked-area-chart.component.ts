import { Component, ElementRef } from '@angular/core';
import chart from 'britecharts/dist/umd/charts/stackedArea.min';
import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';

@Component({
  selector: 'brite-stacked-area-chart',
  templateUrl: './stacked-area-chart.component.html',
  styleUrls: ['./stacked-area-chart.component.scss']
})
export class StackedAreaChartComponent extends ChartBaseComponent {

  public chart = chart();
  protected selector = '.stacked-area';
  protected tooltipContainerSelector = '.stacked-area .metadata-group .vertical-marker-container';
  protected type = ChartType.StackedArea;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

}
