import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackedAreaChartComponent } from './stacked-area-chart.component';

@NgModule({
  declarations: [StackedAreaChartComponent],
  exports: [StackedAreaChartComponent],
  imports: [
    CommonModule
  ]
})
export class StackedAreaChartModule { }
