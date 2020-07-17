import { Component, Input } from '@angular/core';
// My models:
import { Item } from '../models/item';
import { ShoppingCart } from '../models/shopping-cart';
// My services:
import { ShoppingCartService } from '../services/shopping-cart.service';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
// TODO find how to defind components 
export class ItemCardComponent {
  // Decorator that marks a class field as an input property 
  // and supplies configuration metadata.
  // https://angular.io/api/core/Input 
  @Input('item') item: Item;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  addToCart() {
    console.log("item-card.component addToCard(): ", this.item, this.showActions, this.shoppingCart);
    this.shoppingCartService.addToCart(this.item);
  }
 // TODO check if need it here
  getQuantity() {
    if (!this.shoppingCart) { return 0; }
    const cartItem = this.shoppingCart.itemsMap[this.item.key];
    console.log("item-cart.component getQty: ", cartItem, this.shoppingCart, this.item);
    return cartItem ? cartItem.quantity : 0;
  }

}
