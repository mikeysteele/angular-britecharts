import { NgModule } from '@angular/core';
import { BarChartModule } from './modules/bar-chart/bar-chart.module';
import { DonutChartModule } from './modules/donut-chart/donut-chart.module';
import { LegendChartModule } from './modules/legend-chart/legend-chart.module';
import { LineChartModule } from './modules/line-chart/line-chart.module';
import { GroupedBarChartModule } from './modules/grouped-bar-chart/grouped-bar-chart.module';
import { ScatterPlotChartModule } from './modules/scatter-plot-chart/scatter-plot-chart.module';
import { BrushChartModule } from './modules/brush-chart/brush-chart.module';
import { BulletChartModule } from './modules/bullet-chart/bullet-chart.module';
import { HeatmapChartModule } from './modules/heatmap-chart/heatmap-chart.module';
import { SparkLineChartModule } from './modules/sparkline-chart/sparkline-chart.module';
import { StackedAreaChartModule } from './modules/stacked-area-chart/stacked-area-chart.module';
import { StackedBarChartModule } from './modules/stacked-bar-chart/stacked-bar-chart.module';
import { StepChartModule } from './modules/step-chart/step-chart.module';

@NgModule({
  imports: [
    BarChartModule,
    BrushChartModule,
    BulletChartModule,
    DonutChartModule,
    GroupedBarChartModule,
    HeatmapChartModule,
    LegendChartModule,
    LineChartModule,
    ScatterPlotChartModule,
    SparkLineChartModule,
    StackedAreaChartModule,
    StackedBarChartModule,
    StepChartModule
  ],
  exports: [
    BarChartModule,
    BrushChartModule,
    BulletChartModule,
    DonutChartModule,
    GroupedBarChartModule,
    HeatmapChartModule,
    LegendChartModule,
    LineChartModule,
    ScatterPlotChartModule,
    SparkLineChartModule,
    StackedAreaChartModule,
    StackedBarChartModule,
    StepChartModule
  ]
})
export class ChartModule { }
