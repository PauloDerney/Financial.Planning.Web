import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard-main/dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ConfigurationService } from './configuration.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    NgbModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    ConfigurationService
  ]
})

export class DashboardModule {}
