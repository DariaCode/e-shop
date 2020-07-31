import { Component, OnInit, OnDestroy } from '@angular/core';
// https://rxjs-dev.firebaseapp.com/api/index/class/Subscription
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../../shared/models/shopping-cart';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  cart;
  cartSubscription: Subscription;

  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    const cart$ = await this.shoppingCartService.getCart();
    this.cartSubscription = cart$.subscribe(cart => {
      this.cart = cart;
      console.log("checkout",this.cart);
    }) 
  }

  ngOnDestroy(){
    this.cartSubscription.unsubscribe();
  }

}
