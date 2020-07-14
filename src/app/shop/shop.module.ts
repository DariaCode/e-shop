import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// My components:
import { ItemsListComponent } from './items-list/items-list.component';

@NgModule({
  declarations: [
    ItemsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'items', component: ItemsListComponent}
    ])
  ]
})
export class ShopModule { }
