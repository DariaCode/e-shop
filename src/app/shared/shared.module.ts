import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// My components:
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemQuantityComponent } from './item-quantity/item-quantity.component';
// My services:
import { ItemService } from './services/item.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { FilterService } from './services/filter.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    ItemCardComponent,
    ItemQuantityComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ItemService,
    ShoppingCartService,
    FilterService,
    UserService
  ],
  exports: [
    ItemCardComponent,
    ItemQuantityComponent
  ]
})
export class SharedModule { }
