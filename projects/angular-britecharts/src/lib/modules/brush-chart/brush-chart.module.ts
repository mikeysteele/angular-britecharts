import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrushChartComponent } from './brush-chart.component';

@NgModule({
  declarations: [BrushChartComponent],
  exports: [BrushChartComponent],
  imports: [
    CommonModule
  ]
})
export class BrushChartModule { }
