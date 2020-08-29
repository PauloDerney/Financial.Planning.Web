import { Routes } from '@angular/router';
import { RevenueListComponent } from './revenue-list/revenue-list.component';
import { RevenueAddComponent } from './revenue-add/revenue-add.component';

export const RevenuesRoutes: Routes = [
    {
      path: '',
      component: RevenueListComponent
    },
    {
        path: 'add',
        component: RevenueAddComponent
    }
  ];
