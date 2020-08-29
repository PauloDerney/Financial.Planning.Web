import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-cash-flow-detail',
  templateUrl: './cash-flow-detail.component.html',
  styleUrls: ['./cash-flow-detail.component.scss']
})
export class CashFlowDetailComponent implements OnInit {

  transactions = [];
  revenueData = {};

  constructor() { }

  ngOnInit(): void {
    this.revenueData = this.getDataChartCashFlow();
    this.configureChartCashFlow();
    this.findTransactions(null);
  }

  getDataChartCashFlow() {
    return {
        name: 'C/C NuConta PF',
        amounts: [100, 456, 300, 400, 500, 600, 700, 678, null, null],
        amount: 452.48,
        lastTransactionDate: new Date()
      }
  }

  findTransactions(referenceDate) {
    this.transactions = [
      {
        name: 'Pagamento Conta X',
        operator: '-',
        operationValue: 34,
        oldValue: 150.12,
        amountUpdated: 116.12,
        operationDate: new Date()
      },
      {
        name: 'Receita Y',
        operator: '+',
        operationValue: 50.12,
        oldValue: 100.00,
        amountUpdated: 150.12,
        operationDate: new Date()
      },
      {
        name: 'Receita XPTO',
        operator: '+',
        operationValue: 100,
        oldValue: 0,
        amountUpdated: 100,
        operationDate: new Date()
      }
    ]
  }

  configureChartCashFlow() {
    
    var flowChart = document.getElementById("flowChart");

    var speedData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: this.getDataValueMainGraphic(this.revenueData)
    };

    var chartOptions = {
      legend: {
        display: true,
        position: 'top'
      }
    };

    var lineChart = new Chart(flowChart, {
      type: 'line',
      hover: false,
      data: speedData,
      options: chartOptions
    });
  }

  getDataValueMainGraphic(item: any) {

    return [{
      data: item.amounts,
      label: item.name,
      fill: false,
      borderColor: 'green',
      backgroundColor: 'transparent',
      pointBorderColor: 'green',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8
    }];
  }
}
