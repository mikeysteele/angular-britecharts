import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeatmapChartComponent } from './heatmap-chart.component';

@NgModule({
  declarations: [HeatmapChartComponent],
  exports: [HeatmapChartComponent],
  imports: [
    CommonModule
  ]
})
export class HeatmapChartModule { }
