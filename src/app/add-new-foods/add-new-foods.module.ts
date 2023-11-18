import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AddNewFoodsPageRoutingModule } from './add-new-foods-routing.module';

import { AddNewFoodsPage } from './add-new-foods.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AddNewFoodsPageRoutingModule
  ],
  declarations: [AddNewFoodsPage]
})
export class AddNewFoodsPageModule {}
