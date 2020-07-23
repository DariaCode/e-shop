import { Component, OnInit, OnDestroy } from '@angular/core';
// https://rxjs-dev.firebaseapp.com/api/index/class/Subscription
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

  constructor() { }

  ngOnInit() {
    // TODO add!
  }

  ngOnDestroy(){
    this.cartSubscription.unsubscribe();
  }

}
