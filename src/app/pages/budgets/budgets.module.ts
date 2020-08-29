import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentAddComponent } from './payment-add/payment-add.component';
import { RouterModule } from '@angular/router';
import { BudgetDashboardComponent } from './budget-dashboard/budget-dashboard.component';
import { BudgetsRoutes } from './budgets.routing';

@NgModule({
  declarations: [PaymentAddComponent, BudgetDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BudgetsRoutes)
  ]
})
export class BudgetsModule { }
