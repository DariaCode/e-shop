import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { OrderService } from '../../shared/services/order.service';

import { ShoppingCart } from '../../shared/models/shopping-cart';
import { Order } from '../../shared/models/order';


@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit, OnDestroy {

  @Input('shopping-cart') shoppingCart: ShoppingCart;
  shipping = {};
  userSubscription: Subscription;
  userId;

  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService
  ) { }

  async addOrder() {
    let order = new Order(this.userId, this.shipping, this.shoppingCart);
    const result = await this.orderService.addOrder(order);
    console.log("checkout-form addOrder ", result.key, result)
    // TODO this.router.navigate(['/order-success', result.key]);
  }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
