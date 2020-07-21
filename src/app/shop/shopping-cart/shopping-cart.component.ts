import { Component, OnInit } from '@angular/core';
import { Item } from '../../shared/models/item';
import { ShoppingCart } from '../../shared/models/shopping-cart';
import { ShoppingCartItem } from '../../shared/models/shopping-cart-item';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  // Properties:
  cart: ShoppingCart;
  // shoppingCart: ShoppingCart; 
  cartCounter: number;

  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    const cartItems = await this.shoppingCartService.getCart();
    cartItems.subscribe( data => {
      this.cart = data;
      this.cartCounter = this.cart.totalItemsCount;
      console.log("shopping cart component: ", this.cart, data);
    });
  }

  itemTotalPrice(item: any): number {
    return item.price*item.quantity ;
  }

  cartTotalPrice(cart: ShoppingCart): number {
    let total = 0;
    for ( let itemId in cart.items) {
      total += this.itemTotalPrice(cart.items[itemId]);
    }
    return total;
  }

  clearCart() {
    this.shoppingCartService.clearCart();
  }
 
  getQuantity(item: Item) {
    if(!this.cart) {return 0;}
    const itemQ = this.cart.itemsMap[item.key];
    return itemQ ? itemQ.quantity: 0;
  }
  
}
