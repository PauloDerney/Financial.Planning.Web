import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillAddComponent } from './bill-add/bill-add.component';
import { RouterModule } from '@angular/router';
import { BillsRoutes } from './bills.routing';

@NgModule({
  declarations: [
    BillAddComponent,
    BillListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BillsRoutes)
  ]
})
export class BillsModule { }
