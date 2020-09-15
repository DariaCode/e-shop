import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private db: AngularFireDatabase,
    private shopCartService: ShoppingCartService
  ) { }

  async addOrder(order) {
    const result = await this.db.list('/orders').push(order);
    this.shopCartService.clearCart(); // TODO maybe should delete it and create a new cart
    console.log("order.service addOrder: ", result);
    return result;
  }

  getOrders() { 
    return this.db.list('/orders').valueChanges();
  }

  getOrdersByUser(userId: string) {
    return this.db.list('/orders', 
    ref => ref.orderByChild('userId').equalTo(userId)).valueChanges();
  }

}
