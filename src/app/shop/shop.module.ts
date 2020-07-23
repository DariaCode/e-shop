import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// My modules: 
import { SharedModule } from '../shared/shared.module';
// My components:
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsFilterComponent } from './items-filter/items-filter.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
// My services: 
import { AuthGuardService } from '../shared/services/auth-guard.service';

@NgModule({
  declarations: [
    ItemsListComponent,
    ItemsFilterComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'items', component: ItemsListComponent},
      { path: 'shopping-cart', component: ShoppingCartComponent}
    ])
  ]
})
export class ShopModule { }
