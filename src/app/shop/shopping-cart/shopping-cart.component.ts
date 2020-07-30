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
  cartCounter: number;

  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    const cartItems = await this.shoppingCartService.getCart();
    cartItems.subscribe( temp => {
      // const data: any[] = temp.items;
      this.cart = temp;
      this.cartCounter = this.cart.totalItemsCount;
      console.log("shopping cart component: ", this.cart,this.cartCounter);
    });
  }

  clearCart() {
    this.shoppingCartService.clearCart();
  }
  
}
