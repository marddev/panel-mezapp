import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { FoodsPageRoutingModule } from './foods-routing.module';

import { FoodsPage } from './foods.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FoodsPageRoutingModule
  ],
  declarations: [FoodsPage]
})
export class FoodsPageModule {}
