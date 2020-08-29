import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CashFlowDashboardComponent } from './cash-flow-dashboard/cash-flow-dashboard.component';
import { CashFlowDetailComponent } from './cash-flow-detail/cash-flow-detail.component';
import { CashFlowRoutes } from './cash-flow.routing';

@NgModule({
  declarations: [CashFlowDashboardComponent, CashFlowDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CashFlowRoutes)
  ]
})
export class CashFlowModule { }
