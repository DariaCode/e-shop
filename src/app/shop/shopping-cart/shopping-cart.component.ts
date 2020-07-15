import { Component, OnInit } from '@angular/core';
import { Item } from '../../shared/models/item';
import { ShoppingCart } from '../../shared/models/shopping-cart';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  // Properties:
  cart: ShoppingCart = new ShoppingCart(null);
  shoppingCart: ShoppingCart;
  cartCounter: number;

  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    const cart$ = await this.shoppingCartService.getCart();
    console.log("shopping cart component getCart: ", cart$);
  }

  clearCart() {
    this.shoppingCartService.clearCart();
  }
 
}
