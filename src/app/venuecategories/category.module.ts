import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CategoryPageRoutingModule } from './category-routing.module';

import { CategoryPage } from './category.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CategoryPageRoutingModule
  ],
  declarations: [CategoryPage]
})
export class CategoryPageModule {}
