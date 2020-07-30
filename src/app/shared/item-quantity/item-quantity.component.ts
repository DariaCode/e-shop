import { Component, Input } from '@angular/core';
import { Item } from '../models/item';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-item-quantity',
  templateUrl: './item-quantity.component.html',
  styleUrls: ['./item-quantity.component.scss']
})
export class ItemQuantityComponent {

  @Input('item') item: Item;
  @Input('shopping-cart') shoppingCart; 

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    console.log("itemQuantity component: ",this.item, this.shoppingCart)
    this.cartService.addToCart(this.item);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.item);
  }
  
  getQuantity() {
    if (!this.shoppingCart) { return 0; }
    const itemQ = this.shoppingCart.itemsMap[this.item.key];
    return itemQ ? itemQ.quantity : 0;
 }
 
}
