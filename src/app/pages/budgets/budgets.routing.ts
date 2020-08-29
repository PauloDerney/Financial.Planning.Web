import { Routes } from '@angular/router';
import { PaymentAddComponent } from './payment-add/payment-add.component';
import { BudgetDashboardComponent } from './budget-dashboard/budget-dashboard.component';

export const BudgetsRoutes: Routes = [
    {
      path: '',
      component: BudgetDashboardComponent
    },
    {
        path: 'add',
        component: PaymentAddComponent
    }
  ];
