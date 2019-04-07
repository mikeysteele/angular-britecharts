import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegendComponent } from './legend.component';

@NgModule({
  declarations: [LegendComponent],
  exports: [LegendComponent],
  imports: [
    CommonModule
  ]
})
export class LegendModule { }
