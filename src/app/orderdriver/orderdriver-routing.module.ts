import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderdriverComponent } from './orderdriver.component';


const routes: Routes = [
  {
    path: '',
    component: OrderdriverComponent,
    data: {
      breadcrumb: 'Order Driver'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderdriverRoutingModule { }
