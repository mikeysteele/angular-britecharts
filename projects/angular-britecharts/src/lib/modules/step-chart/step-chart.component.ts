import { Component, ElementRef } from '@angular/core';
import chart from 'britecharts/dist/umd/step.min';
import { ChartType } from '../../chart.types';
import { ChartBaseComponent } from '../../chart.base';

@Component({
  selector: 'brite-step-chart',
  templateUrl: './step-chart.component.html',
  styleUrls: ['./step-chart.component.scss']
})
export class StepChartComponent extends ChartBaseComponent {

  public chart = chart();
  protected selector = '.step-chart';
  protected clickSelector = '.step-chart .step';
  protected tooltipContainerSelector = '.step-chart .metadata-group';
  protected type = ChartType.Step;
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

}
