import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// My components:
import { ItemsListComponent } from './items-list/items-list.component';

@NgModule({
  declarations: [
    ItemsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShopModule { }
