import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScatterPlotChartComponent } from './scatter-plot-chart.component';

@NgModule({
  declarations: [ScatterPlotChartComponent],
  exports: [ScatterPlotChartComponent],
  imports: [
    CommonModule
  ]
})
export class ScatterPlotChartModule { }
