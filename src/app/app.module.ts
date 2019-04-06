import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent as ChartsComponent } from './charts/charts.component';

import { ChartModule } from '../../projects/ngx-britecharts/src/lib/chart.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    ChartsComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
