import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revenue-list',
  templateUrl: './revenue-list.component.html',
  styleUrls: ['./revenue-list.component.scss']
})
export class RevenueListComponent implements OnInit {

  rows = [];

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {

    this.rows = [
      {
        name: 'Pagamento Empresa XPTO',
        amount: 1765.99,
        entryDate: new Date(),
        invoiceRequired: 'Sim',
        type: 'Receita Fixa'
      }
    ];
  }

}
