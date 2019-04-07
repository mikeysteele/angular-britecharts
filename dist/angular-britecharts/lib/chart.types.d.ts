export declare enum ChartType {
    Bar = "bar",
    Brush = "brush",
    Bullet = "bullet",
    Donut = "donut",
    GroupedBar = "groupedBar",
    Heatmap = "headmap",
    Legend = "legend",
    Line = "line",
    ScatterPlot = "scatterPlot",
    Sparkline = "sparkline",
    StackedArea = "stackedArea",
    StackedBar = "stackedBar",
    Step = "step"
}
export declare enum ChartGrid {
    Horizontal = "horizontal",
    Vertical = "vertical",
    Full = "full"
}
export declare enum ChartDateLabel {
    FullDate = "fullDate"
}
export declare enum ChartLineCurve {
    Basis = "basis",
    Linear = "linear"
}
export interface ChartProperties {
    aspectRatio?: number;
    dateLabel?: ChartDateLabel;
    lineCurve?: ChartLineCurve;
    grid?: ChartGrid;
    margin: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
}
export interface ChartEvents {
    click?: (chart: any, data: any) => {};
}
export interface ChartConfig {
    properties?: ChartProperties;
    events?: ChartEvents;
    click?: (chart: any, ...args: any[]) => {};
    colors?: {
        colorSchema: string | string[];
        reverse?: boolean;
    };
    sizeRelativeToContainerWidth?: any;
    tooltip?: boolean | any;
}
