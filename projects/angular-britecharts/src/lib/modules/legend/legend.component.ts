import { Component, OnInit, ElementRef } from '@angular/core';
import { ChartBaseComponent } from '../../chart.base';
import chart from 'britecharts/dist/umd/legend.min';
import { ChartType } from '../../chart.types';

@Component({
  selector: 'brite-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss']
})
export class LegendComponent extends ChartBaseComponent {
  public chart = chart();
  protected selector = '.britechart-legend';
  protected clickSelector = '.legend-entry';
  protected type = ChartType.Legend;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

}
