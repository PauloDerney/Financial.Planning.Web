import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss']
})
export class BillListComponent implements OnInit {

  rows = [];

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }


  loadData() {
    this.rows = [
      {
        name: 'CPFL',
        type: 'Despesa Fixa',
        expenseType: 'Gastos Doméstico',
        amount: 89.35,
        active: 'Sim'
      }
    ]
  }

}
