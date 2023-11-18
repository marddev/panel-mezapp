import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VenueDashboardComponent} from './venue-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: VenueDashboardComponent,
    data: {
      breadcrumb: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenueDashboardRoutingModule { }
