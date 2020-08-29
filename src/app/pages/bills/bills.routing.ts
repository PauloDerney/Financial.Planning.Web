import { Routes } from '@angular/router';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillAddComponent } from './bill-add/bill-add.component';

export const BillsRoutes: Routes = [
    {
      path: '',
      component: BillListComponent
    },
    {
        path: 'add',
        component: BillAddComponent
    }
  ];
