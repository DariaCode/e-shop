import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private firebase: AngularFireDatabase,
    private shopCartService: ShoppingCartService
  ) { }

  async addOrder(order) {
    const result = await this.firebase.list('/orders').push(order);
    this.shopCartService.clearCart(); // TODO maybe should delete and create a new cart
    console.log("order.service addOrder: ", result);
    return result;
  }

  // TODO getOrder and getOrderByUser

}
