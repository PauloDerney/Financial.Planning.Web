import { Routes } from '@angular/router';
import { CashFlowDashboardComponent } from './cash-flow-dashboard/cash-flow-dashboard.component';
import { CashFlowDetailComponent } from './cash-flow-detail/cash-flow-detail.component';

export const CashFlowRoutes: Routes = [
    {
      path: '',
      component: CashFlowDashboardComponent
    },
    {
        path: ':id',
        component: CashFlowDetailComponent
    }
  ];
