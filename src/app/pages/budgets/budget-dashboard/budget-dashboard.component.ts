import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js';

@Component({
  selector: 'app-budget-dashboard',
  templateUrl: './budget-dashboard.component.html',
  styleUrls: ['./budget-dashboard.component.scss']
})
export class BudgetDashboardComponent implements OnInit {

  rows = [];
  revenueRows = [];

  canvasChartRevenueBill: any;
  ctxRevenueBill;
  chartRevenueBill;

  canvasChartOverview: any;
  ctxOverview;
  chartOverview;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadData();
    this.loadRevenueData();
    this.generateChartRevenueBill();
    this.generateChartOverView();
  }

  loadData() {
    this.rows = [
      {
        name: 'Fatura XX/XX NuBank XXXX',
        dueDate: new Date(),
        amount: 548.26,
        amountPaid: 789.56
      }
    ]
  }

  loadRevenueData() {
    this.revenueRows = [
      {
        name: 'Pagamento Google',
        entryDate: new Date(),
        amount: 78948.46,
        status: 'Nota Pendente'
      }
    ];
  }

  pay() {
    this.router.navigate(['pages/payments/add'])
  }

  generateChartRevenueBill() {
    this.canvasChartRevenueBill = document.getElementById('chartRevenueBill');
      this.ctxRevenueBill = this.canvasChartRevenueBill.getContext('2d');
      this.chartRevenueBill = new Chart(this.ctxRevenueBill, {
        type: 'pie',
        data: {
          labels: [1, 2, 3, 4],
          datasets: [{
            label: "Emails",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: [
              '#e3e3e3',
              '#4acccd',
              '#fcc468',
              '#ef8157'
            ],
            borderWidth: 0,
            data: [342, 480, 530, 120]
          }]
        },

        options: {

          legend: {
            display: false
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
                zeroLineColor: "transparent",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent"
              },
              ticks: {
                display: false,
              }
            }]
          },
        }
      });
  }

  
  generateChartOverView() {
    this.canvasChartOverview = document.getElementById('chartOverview');
      this.ctxOverview = this.canvasChartOverview.getContext('2d');
      this.chartOverview = new Chart(this.ctxOverview, {
        type: 'pie',
        data: {
          labels: [1, 2],
          datasets: [{
            label: "Emails",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: [
              '#d93524',
              '#4acccd'
            ],
            borderWidth: 0,
            data: [342, 480]
          }]
        },

        options: {

          legend: {
            display: false
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
                zeroLineColor: "transparent",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent"
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
