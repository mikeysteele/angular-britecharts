import { Component, OnInit, ElementRef } from '@angular/core';
import chart from 'britecharts/dist/umd/scatterPlot.min';
import { ChartType } from '../../chart.types';
import { ChartBaseComponent } from '../../chart.base';

@Component({
  selector: 'brite-scatter-plot-chart',
  templateUrl: './scatter-plot-chart.component.html',
  styleUrls: ['./scatter-plot-chart.component.scss']
})
export class ScatterPlotChartComponent extends ChartBaseComponent {
  public chart = chart();
  protected tooltipContainerSelector = '.scatter-plot .metadata-group';
  protected selector = '.scatter-plot';
  protected type = ChartType.ScatterPlot;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

}
