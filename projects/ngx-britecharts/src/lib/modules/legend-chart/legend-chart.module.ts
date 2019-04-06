import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegendChartComponent } from './legend-chart.component';

@NgModule({
  declarations: [LegendChartComponent],
  exports: [LegendChartComponent],
  imports: [
    CommonModule
  ]
})
export class LegendChartModule { }
