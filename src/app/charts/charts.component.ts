import { Component, ViewChild } from '@angular/core';
import { BarChartData } from './data/BarChartData';
import { BrushChartData } from './data/BrushChartData';
import { BulletChartData } from './data/BulletChartData';
import { DonutChartData } from './data/DonutChartData';
import { GroupedBarChartData } from './data/GroupedBarData';
import { HeatmapChartData } from './data/HeatmapChartData';
import { HorizontalStackedBarChartData } from './data/HorizontalStackedBarChartData';
import { LineChartData } from './data/LineChartData';
import { ScatterPlotChartData } from './data/ScatterPlotChartData';
import { SparklineChartData } from './data/SparklineChartData';
import { StackedAreaChartData } from './data/StackedAreaChartData';
import { StepChartData } from './data/StepChartData';
import {
  BarChartComponent,
  LineChartComponent,
  DonutChartComponent,
  BulletChartComponent,
  LegendComponent,
  BrushChartComponent,
  StackedAreaChartComponent,
  GroupedBarChartComponent,
  StackedBarChartComponent,
  SparklineChartComponent
} from 'projects/ngx-britecharts/src/public_api';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html'
})
export class AppComponent {
  @ViewChild('barChart') barChart: BarChartComponent;
  @ViewChild('horizontalBarChart') horizontalBarChart: BarChartComponent;
  @ViewChild('lineChart') lineChart: LineChartComponent;
  @ViewChild('donutChart') donutChart: DonutChartComponent;
  @ViewChild('donutLegendChart') donutLegendChart: LegendComponent;
  @ViewChild('brushChart') brushChart: BrushChartComponent;
  @ViewChild('stackedAreaChart') stackedAreaChart: StackedAreaChartComponent;
  @ViewChild('stackedBarChart') stackedBarChart: StackedBarChartComponent;
  @ViewChild('groupedBarChart') groupedBarChart: GroupedBarChartComponent;
  @ViewChild('horizontalStackedBarChart') horizontalStackedBarChart: StackedBarChartComponent;
  @ViewChild('bulletChart1') bulletChart1: BulletChartComponent;
  @ViewChild('bulletChart2') bulletChart2: BulletChartComponent;
  @ViewChild('bulletChart3') bulletChart3: BulletChartComponent;
  @ViewChild('heatmapChart') heatmapChart: HeatmapChartData;
  @ViewChild('sparklineChart') sparklineChart: SparklineChartComponent;

  private barChartDataGen: BarChartData = new BarChartData();
  private bulletChartDataGen: BulletChartData = new BulletChartData();
  private lineChartDataGen: LineChartData = new LineChartData();
  private donutChartDataGen: DonutChartData = new DonutChartData();
  private brushChartDataGen: BrushChartData = new BrushChartData();
  private stepChartDataGen: StepChartData = new StepChartData();
  private stackedAreaChartDataGen: StackedAreaChartData = new StackedAreaChartData();
  private grouppedBarChartDataGen: GroupedBarChartData = new GroupedBarChartData();
  private horizontalStackedBarChartDataGen: HorizontalStackedBarChartData = new HorizontalStackedBarChartData();
  private scatterPlotChartDataGen: ScatterPlotChartData = new ScatterPlotChartData();
  private heatmapChartDataGen: HeatmapChartData = new HeatmapChartData();
  private sparklineChartDataGen: SparklineChartData = new SparklineChartData();

  // barChart
  public firstBarChartData = this.barChartDataGen.getLetterBarChartData();
  public firstBarChartConfig = {
    properties: {
      hasPercentage: true,
      enableLabels: false,
      labelsNumberFormat: '.0%',
      height: 300
    },
    tooltip: {},
    loading: false
  };

  // horizontalBarChart
  public horizontalBarChartData = this.barChartDataGen.getHorizontalBarChartData();
  public horizontalBarChartConfig = {
    properties: {
      isHorizontal: true,
      isAnimated: true,
      margin: {
        left: 120,
        right: 20,
        top: 20,
        bottom: 30
      },
      yAxisPaddingBetweenChart: 30,
      height: 300,
      percentageAxisToMaxRatio: 1.3,
    },
    colors: {
      colorSchema: 'britecharts'
    },
    click: this.onDemoChartClick,
    tooltip: {}
  };

  // lineChart
  public lineChartData = this.lineChartDataGen.geLineChartData();
  public lineChartConfig = {
    properties: {
      isAnimated: true,
      aspectRatio: 0.5,
      grid: 'horizontal',
      tooltipThreshold: 600,
      margin: {
        top: 60,
        bottom: 50,
        left: 50,
        right: 30
      },
      dateLabel: 'fullDate',
    },
    tooltip: {
      valueLabel: 'value',
      title: 'Quantity Sold',
    },
    loading: false
  };

  // donutChart and donutLegendChart
  public donutChartData = this.donutChartDataGen.getDonutChartData();
  public donutChartConfig = {
    properties: {
      isAnimated: true,
      highlightSliceById: 2,
    },
    sizeRelativeToContainerWidth: {
      width: 1,
      height: 1,
      externalRadius: 2.5,
      internalRadius: 5
    },
    click: this.onDemoChartClick,
    events: {
      customMouseOver: (chart, data) => {
        this.donutLegendChart.chart.highlight(data.data['id']);
      },
      customMouseOut: (chart, demo) => {
        this.donutLegendChart.chart.clearHighlight();
      }
    }
  };
  public donutLegendChartConfig = {
    properties: {
      height: 200,
      numberFormat: 's'
    },
    click: this.onDemoChartClick
  };

  // brushChart
  public brushChartDates: any = {
    start: undefined,
    end: undefined
  };
  public brushChartData = this.brushChartDataGen.getBrushChartData();
  public brushChartConfig = {
    properties: {
      height: 150,
    },
    events: {
      customBrushStart: (chart, brushExtent) => {
        this.brushChartDates.start = brushExtent[0];
        this.brushChartDates.end = brushExtent[1];
      },
      customBrushEnd: (chart, brushExtent) => {
        this.brushChartDates.start = brushExtent[0];
        this.brushChartDates.end = brushExtent[1];
        this.filterLineChartData();
      }
    }
  };

  // stepChart
  public stepChartData = this.stepChartDataGen.getStepChartData();
  public stepChartConfig = {
    properties: {
      height: 300,
      xAxisLabel: 'Meal Type',
      xAxisLabelOffset: 45,
      yAxisLabel: 'Quantity',
      yAxisLabelOffset: -50,
      margin: {
        top: 40,
        right: 40,
        bottom: 50,
        left: 80
      }
    },
    tooltip: {}
  };

  // stackedAreaChart
  public stackedAreaChartData = this.stackedAreaChartDataGen.getStackedAreaChartData();
  public stackedAreaChartConfig = {
    properties: {
      isAnimated: true,
      tooltipThreshold: 600,
      dateLabel: 'dateUTC',
      valueLabel: 'views',
      grid: 'horizontal',
    },
    tooltip: {
      valueLabel: 'views',
      topicLabel: 'values',
      title: 'Testing tooltip',
    }
  };

  // gruppedBarChart
  public groupedBarChartData = this.grouppedBarChartDataGen.getGroupedBarChartData();
  public groupedBarChartConfig = {
    properties: {
      tooltipThreshold: 600,
      grid: 'horizontal',
      isAnimated: true,
      groupLabel: 'stack',
      nameLabel: 'date',
      valueLabel: 'views'
    },
    tooltip: {
      topicLabel: 'values',
      dateLabel: 'key',
      nameLabel: 'stack',
      title: 'Testing tooltip',
    }
  };

  // horizontalStackedBarChart
  public horizontalStackedBarChartData = this.horizontalStackedBarChartDataGen.getHorizontalStackedBarChartData();
  public horizontalStackedBarChartConfig = {
    properties: {
      tooltipThreshold: 600,
      grid: 'horizontal',
      isAnimated: true,
      stackLabel: 'stack',
      nameLabel: 'date',
      valueLabel: 'views',
      betweenBarsPadding: 0.3
    },
    tooltip: {
      topicLabel: 'values',
      dateLabel: 'key',
      nameLabel: 'stack',
      title: 'Testing tooltip',
    }
  };

  // scatterPlotChart
  public scatterPlotChartData = this.scatterPlotChartDataGen.getScatterPlotChartData();
  public scatterPlotChartConfig = {
    properties: {
      aspectRatio: 0.7,
      circleOpacity: 0.6,
      hasTrendline: true,
      grid: 'horizontal',
      xAxisLabel: 'Temperature (C)',
      margin: {
        left: 60,
        bottom: 50
      },
      yAxisLabel: 'Ice Cream Sales',
      yAxisFormat: '$',
      xAxisFormat: '.1f'
    },
    click: this.onDemoScatterPlotChartClick,
    tooltip: {
      valueLabel: 'y',
      nameLabel: 'x',
      numberFormat: '$',
      title: 'Temperature (C)'
    }
  };

  // bulletChart
  public bulletChartData1 = this.bulletChartDataGen.getBulletDataCpuUsageChartData()[0];
  public bulletChartData2 = this.bulletChartDataGen.getBulletDataCpuUsageChartData()[1];
  public bulletChartData3 = this.bulletChartDataGen.getBulletDataCpuUsageChartData()[2];

  public bulletChartConfig = {
    properties: {
      height: 150,
    },
  };

  // heatmapChart
  public heatmapChartData = this.heatmapChartDataGen.getHeatmapWeeklyChartData();
  public heatmapChartConfig = {
    properties: {
      height: 250
    },
  };

  // sparklineChart
  public sparklineChartData = this.sparklineChartDataGen.getSparklineChartData();
  public sparklineChartConfig = {
    properties: {
      dateLabel: 'dateUTC',
      isAnimated: true,
      duration: 2500
    },
    sizeRelativeToContainerWidth: {
      height: 4,
    },
  };

  // Functions
  public exportBarChartClick() {
    this.barChart.chart.exportChart('Exported bar chart.png', 'Chart title');
  }

  public onDemoChartClick({ chart, data }) {
  console.log(data);
}

  public onDemoLineChartClick({ chart, data, coords, mouse }) {
  console.log(data, coords, mouse);
}

  public onDemoScatterPlotChartClick({chart, data, coords, mouse, scatter}) {
  console.log(data, coords, mouse, scatter);
}

  private filterLineChartData() {
  if (this.brushChartDates.start == null && this.brushChartDates.end == null) {
    this.lineChart.data = this.lineChartDataGen.geLineChartData() as any;
    this.lineChart.drawChart();
  } else {
    const iDate = new Date(this.brushChartDates.start);
    const eDate = new Date(this.brushChartDates.end);

    const data: any = {};
    data['dataByDate'] = [];
    data['dataByTopic'] = [];

    for (const d of this.lineChartData['dataByDate']) {
      const aDate = new Date(d['date']);
      if (iDate <= aDate && aDate <= eDate) {
        data['dataByDate'].push(d);
      }
    }

    for (const t of this.lineChartData['dataByTopic']) {
      const newTopic = {};
      newTopic['topic'] = t['topic'];
      newTopic['topicName'] = t['topicName'];
      newTopic['dates'] = [];
      for (const d of t['dates']) {
        const aDate = new Date(d['date']);
        if (iDate <= aDate && aDate <= eDate) {
          newTopic['dates'].push({
            'date': aDate,
            'value': d['value'],
            'fullDate': d['date']
          });
        }
      }
      data['dataByTopic'].push(newTopic);
    }

    this.lineChart.data = data;
    this.lineChart.drawChart();
  }
}

}
