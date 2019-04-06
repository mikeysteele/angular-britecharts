import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupedBarChartComponent } from './grouped-bar-chart.component';

@NgModule({
  declarations: [GroupedBarChartComponent],
  exports: [GroupedBarChartComponent],
  imports: [
    CommonModule
  ]
})
export class GroupedBarChartModule { }
