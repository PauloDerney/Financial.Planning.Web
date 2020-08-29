import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevenueListComponent } from './revenue-list/revenue-list.component';
import { RevenueAddComponent } from './revenue-add/revenue-add.component';
import { RevenuesRoutes } from './revenues.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RevenueListComponent, RevenueAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(RevenuesRoutes)
  ]
})
export class RevenuesModule { }
