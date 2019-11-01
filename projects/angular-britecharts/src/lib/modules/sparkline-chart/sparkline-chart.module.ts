import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparklineChartComponent } from './sparkline-chart.component';

@NgModule({
  declarations: [SparklineChartComponent],
  exports: [SparklineChartComponent],
  imports: [
    CommonModule
  ]
})
export class SparkLineChartModule { }
