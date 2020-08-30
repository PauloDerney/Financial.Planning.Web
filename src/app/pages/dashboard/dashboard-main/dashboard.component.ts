import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ConfigurationService } from '../configuration.service';
import { ChartPieBuilder } from 'app/core/chart/chart-pie.builder';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{

  public canvas : any;
  public canvasYear: any;
  public ctx;
  public ctxYear;
  public chartColor;
  public chartCategoryGeneral;
  public chartCategoryYear;
  public chartHours;

  dashboardData = {};

  constructor (private configurationService: ConfigurationService) { }

    ngOnInit() {

      this.configurationService.getDashboardInfo()
      .subscribe((response) => {

        this.dashboardData = response;

        new ChartPieBuilder('chartCategoryYear')
        .build(response.historyByCategoryYear.categories, response.historyByCategoryYear.values);

        new ChartPieBuilder('chartCategoryMonth')
        .build(response.historyByCategoryMonth.categories, response.historyByCategoryMonth.values);

      });

      var speedCanvas = document.getElementById("speedChart");

      var speedData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: this.getDataValueMainGraphic()
      };

      var chartOptions = {
        legend: {
          display: false,
          position: 'top'
        }
      };

      var lineChart = new Chart(speedCanvas, {
        type: 'line',
        hover: false,
        data: speedData,
        options: chartOptions
      });
    }

    getDataValueMainGraphic() {

      return [
        {
          data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
          fill: false,
          borderColor: '#fbc658',
          backgroundColor: 'transparent',
          pointBorderColor: '#fbc658',
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8
        },
        {
          data: [800, 1500, 3000, 3478, 5452, 3452, 1235, 4895, 7852, 4520, 5789, 4568],
          fill: false,
          borderColor: '#51CACF',
          backgroundColor: 'transparent',
          pointBorderColor: '#51CACF',
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8
        }
      ]
    }
}
