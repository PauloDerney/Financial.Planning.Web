import Chart from 'chart.js';

export class ChartPieBuilder {

    private canvas: any;
    private context: any;
    private chartId: string;
    // Todo: Implement logic for generate random color on demand
    private colors = ['#162701', '#aa17c0', '#ebf21f', '#453854', '#99dccb', '#2a44da', '#7f522b', 
                      '#e468d0', '#f5ce84', '#bfae63', '#99dccb', '#64d831','blue', 'green', 'black', 'orange', 'purple', 'brown', 'chartreuse', 'magenta'];

    constructor(chartHtmlId: string) {
        this.chartId = chartHtmlId;
    }

    public build(labels: string[], values: string[] | number[]) {
        this.canvas = document.getElementById(this.chartId);
        this.context = this.canvas.getContext('2d');
        const chart = new Chart(this.context, {
          type: 'pie',
          data: {
            labels: labels,
            datasets: [{
              label: '',
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: this.colors.slice(0, labels.length),
              borderWidth: 0,
              data: values
            }]
          },

          options: {

            legend: {
              display: true
            },

            pieceLabel: {
              render: 'percentage',
              fontColor: ['white'],
              precision: 2
            },

            tooltips: {
              enabled: true
            },

            scales: {
              yAxes: [{

                ticks: {
                  display: false
                },
                gridLines: {
                  drawBorder: false,
                  zeroLineColor: 'transparent',
                  color: 'rgba(255,255,255,0.05)'
                }

              }],

              xAxes: [{
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: 'rgba(255,255,255,0.1)',
                  zeroLineColor: 'transparent'
                },
                ticks: {
                  display: false,
                }
              }]
            },
          }
        });
    }
}
