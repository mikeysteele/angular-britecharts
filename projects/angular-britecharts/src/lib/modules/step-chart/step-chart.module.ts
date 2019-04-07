import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepChartComponent } from './step-chart.component';

@NgModule({
  declarations: [StepChartComponent],
  exports: [StepChartComponent],
  imports: [
    CommonModule
  ]
})
export class StepChartModule { }
