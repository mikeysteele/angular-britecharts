import { Component, ElementRef } from '@angular/core';
import chart from 'britecharts/dist/umd/charts/bullet.min';
import { ChartBaseComponent } from '../../chart.base';
import { ChartType } from '../../chart.types';

@Component({
  selector: 'brite-bullet-chart',
  templateUrl: './bullet-chart.component.html',
  styleUrls: ['./bullet-chart.component.scss']
})
export class BulletChartComponent extends ChartBaseComponent {

  public chart = chart();
  public selector = '.bullet-chart';
  public clickSelector = '.bullet-chart .range, .bullet-chart .measure, .bullet-chart .marker-line';
  protected type = ChartType.Bullet;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}
