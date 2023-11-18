import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenueDashboardRoutingModule } from './venue-dashboard-routing.module';
import { VenueDashboardComponent } from './venue-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  imports: [
    CommonModule,
    VenueDashboardRoutingModule,
    SharedModule,
    NgxSkeletonLoaderModule
  ],
  declarations: [VenueDashboardComponent]
})
export class VenueDashboardModule { } 
