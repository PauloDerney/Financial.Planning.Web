import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-cash-flow-dashboard',
  templateUrl: './cash-flow-dashboard.component.html',
  styleUrls: ['./cash-flow-dashboard.component.scss']
})
export class CashFlowDashboardComponent implements OnInit {
  
  colors = ['blue', 'green', 'black', 'orange', 'purple', 'brown', 'chartreuse', 'magenta'];
  cashFlow = [];

  constructor() { }

  ngOnInit(): void {
    this.configureChartCashFlow();
    this.loadBriefCashFlow();
  }

  loadBriefCashFlow() {

    this.cashFlow = [
      {
        name: 'C/C Caixa',
        amount: 789.56,
        lastUpdate: new Date(),
        icon: 'fa fa-university'
      },
      {
        name: 'C/C NuBank PF',
        amount: 789.56,
        lastUpdate: new Date(),
        icon: 'fa fa-mobile'
      },
      {
        name: 'C/C NuBank PJ',
        amount: -1800,
        lastUpdate: new Date(),
        icon: 'fa fa-id-card-o'
      },
      {
        name: 'C/C Santander',
        amount: 789.56,
        lastUpdate: new Date(),
        icon: 'fa fa-bank'
      },
      {
        name: 'Investido Nubank',
        amount: 789.56,
        lastUpdate: new Date(),
        icon: 'fa fa-line-chart'
      },
      {
        name: 'Outros',
        amount: 789.56,
        lastUpdate: new Date(),
        icon: 'fa fa-list'
      },
      {
        name: 'Dinheiro Físico',
        amount: 789.56,
        lastUpdate: new Date(),
        icon: 'fa fa-money'
      },
      {
        name: 'TOTAL',
        amount: 7889.56,
        lastUpdate: new Date(),
        icon: 'fa fa-plus'
      },
    ]
  }

  getDataChartCashFlow() {
    return [
      {
        name: 'C/C NuConta PF',
        amounts: [100, 456, 300, 400, 500, 600, 700, 678, null, null]
      },
      {
        name: 'C/C NuConta PF',
        amounts: [100, 345, 300, 400, 500, 789, 700, 800, null, null]
      },
      {
        name: 'C/C NuConta PF',
        amounts: [100, 200, 345, 400, 500, 456, 700, 800, null, null]
      },
      {
        name: 'C/C NuConta PF',
        amounts: [100, 200, 300, 400, 500, 600, 345, 789, null, null]
      },
      {
        name: 'C/C NuConta PF',
        amounts: [100, 200, 345, 400, 500, 600, 700, 800, null, null]
      },
      {
        name: 'C/C NuConta PF',
        amounts: [100, 200, 300, 400, 500, 345, 700, 575, null, null]
      },
      {
        name: 'C/C NuConta PF',
        amounts: [100, 456, 345, 400, 789, 600, 700, 800, null, null]
      },
      {
        name: 'C/C NuConta PF',
        amounts: [100, 567, 300, 400, 500, 789, 700, 346, null, null]
      }
    ]
  }

  configureChartCashFlow() {
    
    var speedCanvas = document.getElementById("speedChart");

    var speedData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: this.getDataValueMainGraphic()
    };

    var chartOptions = {
      legend: {
        display: true,
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

    let chartData = [];
    const items = this.getDataChartCashFlow();

    for (let index = 0; index < items.length; index++) {
      const item = items[index];

      chartData.push({
        data: item.amounts,
        label: item.name,
        fill: false,
        borderColor: this.colors[index],
        backgroundColor: 'transparent',
        pointBorderColor: this.colors[0],
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      });
    }

    return chartData;
  }
}
