import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderdriverRoutingModule } from './orderdriver-routing.module';
import { OrderdriverComponent } from './orderdriver.component';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [OrderdriverComponent],
  imports: [
    CommonModule,
    OrderdriverRoutingModule,
    SharedModule,
    NgxSpinnerModule
  ]
})
export class OrderdriverModule { }
