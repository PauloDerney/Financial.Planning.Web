import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'pages/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'pages',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'bills',
        loadChildren: () => import('./pages/bills/bills.module').then(m => m.BillsModule)
      },
      {
        path: 'budgets',
        loadChildren: () => import('./pages/budgets/budgets.module').then(m => m.BudgetsModule)
      },
      {
        path: 'revenues',
        loadChildren: () => import('./pages/revenues/revenues.module').then(m => m.RevenuesModule)
      },
      {
        path: 'cash-flow',
        loadChildren: () => import('./pages/cash-flow/cash-flow.module').then(m => m.CashFlowModule)
      }
    ]
  }
]
