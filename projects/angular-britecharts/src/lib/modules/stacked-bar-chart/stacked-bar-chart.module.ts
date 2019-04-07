import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackedBarChartComponent } from './stacked-bar-chart.component';

@NgModule({
  declarations: [StackedBarChartComponent],
  exports: [StackedBarChartComponent],
  imports: [
    CommonModule
  ]
})
export class StackedBarChartModule { }
