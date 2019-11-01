import { Component, OnInit, ElementRef } from '@angular/core';
import chart from 'britecharts/dist/umd/heatmap.min';
import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';

@Component({
  selector: 'brite-heatmap-chart',
  templateUrl: './heatmap-chart.component.html',
  styleUrls: ['./heatmap-chart.component.scss']
})
export class HeatmapChartComponent extends ChartBaseComponent {

  public chart = chart();
  public selector = '.heatmap';
  public clickSelector = '.heatmap .box';
  protected type = ChartType.Heatmap;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

}
