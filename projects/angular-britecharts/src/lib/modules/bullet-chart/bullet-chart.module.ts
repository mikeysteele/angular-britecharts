import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletChartComponent } from './bullet-chart.component';

@NgModule({
  declarations: [BulletChartComponent],
  exports: [BulletChartComponent],
  imports: [
    CommonModule
  ]
})
export class BulletChartModule { }
