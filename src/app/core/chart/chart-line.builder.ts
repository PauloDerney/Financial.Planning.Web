import Chart from 'chart.js';

export interface IChartLineData {
    label: string;
    values?: any[];
}

export class ChartLineBuilder {

    private chartId;
    private labels: string[];
    private chartData: any[] = [];

    // Todo: Implement logic for generate random color on demand
    private colors = ['#162701', '#aa17c0', '#ebf21f', '#453854', '#99dccb', '#2a44da', '#7f522b', 
                      '#e468d0', '#f5ce84', '#bfae63', '#99dccb', '#64d831', 'blue', 'green', 'black', 'orange', 'purple', 'brown', 'chartreuse', 'magenta'];


    constructor(chartHtmlId: string) {
        this.chartId = chartHtmlId;
    }

    buildChartLabels(chartLabels: string[]): ChartLineBuilder {
        this.labels = chartLabels;
        return this;
    }

    buildChartData(chartLineData: IChartLineData[]): ChartLineBuilder {
        chartLineData.forEach((dataItem, index) => {
            this.chartData.push({
                data: dataItem.values,
                label: dataItem.label,
                fill: false,
                borderColor: this.colors[index],
                backgroundColor: 'transparent',
                pointBorderColor: this.colors[index],
                pointRadius: 4,
                pointHoverRadius: 4,
                pointBorderWidth: 8
              })
        });

        return this;
    }

    public build() {

      const canvas = document.getElementById(this.chartId);

      const chartData = {
        labels: this.labels,
        datasets: this.chartData
      };

      const chartOptions = {
        legend: {
          display: true,
          position: 'top'
        }
      };

      const lineChart = new Chart(canvas, {
        type: 'line',
        hover: false,
        data: chartData,
        options: chartOptions
      });
    }
}
