import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// My components:
import { ItemCardComponent } from './item-card/item-card.component';
// My services:
import { ItemService } from './services/item.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { FilterService } from './services/filter.service';


@NgModule({
  declarations: [
    ItemCardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ItemService,
    ShoppingCartService,
    FilterService
  ],
  exports: [
    ItemCardComponent,
  ]
})
export class SharedModule { }
