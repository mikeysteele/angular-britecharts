import { Component, ElementRef } from '@angular/core';
import chart from 'britecharts/dist/umd/charts/brush.min';
import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';

@Component({
  selector: 'brite-brush-chart',
  templateUrl: './brush-chart.component.html',
  styleUrls: ['./brush-chart.component.scss']
})
export class BrushChartComponent extends ChartBaseComponent {

  public chart = chart();
  protected selector = '.brush-chart';
  protected type = ChartType.Brush;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

}
