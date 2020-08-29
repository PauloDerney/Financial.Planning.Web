import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/pages/dashboard',     title: 'Dashboard',         icon:'nc-chart-pie-36',       class: '' },
    { path: '/pages/bills',     title: 'Gasto',         icon:'nc-bag-16',       class: '' },
    { path: '/pages/revenues',         title: 'Receita',             icon:'nc-money-coins',    class: '' },
    { path: '/pages/budgets',     title: 'Orçamento',         icon:'nc-calendar-60',       class: '' },
    { path: '/pages/cash-flow',          title: 'Fluxo de Caixa',              icon:'nc-bank',      class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
