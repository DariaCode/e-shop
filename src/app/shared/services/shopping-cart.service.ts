import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
// hhttps://rxjs-dev.firebaseapp.com/api/operators/
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// My models:
import { Item } from '../models/item';
import { ShoppingCartItem } from '../models/shopping-cart-item';
import { ShoppingCart } from '../models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private firebase: AngularFireDatabase) { }

  // Methods:
  async getCart(): Promise<Observable<ShoppingCart>> {
    const cartId = await this.getOrCreateCartId();
    return this.firebase.object('/shopping-carts/' + cartId).snapshotChanges()
    .pipe(map(cart => {
      return new ShoppingCart(cart.payload.exportVal().items)
    }));
  }

  // Function for getCart(), updateItem(), clearCart().
  private async getOrCreateCartId() {
    const cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  // Function for getCart().
  private create() {
    return this.firebase.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  addToCart(item: Item) {
    this.updateItem(item, 1);
  }

  removeFromCart(item: Item) {
    this.updateItem(item, -1);
  }

  private async updateItem(item: Item, change: number) {
    const cartId = await this.getOrCreateCartId();
    const cartItem = this.getItem(cartId, item.key);

  // TODO snapshotChanges() vs valueChanges()
    cartItem.snapshotChanges().pipe(take(1))
    .subscribe(data => {
      const quantity = (data.payload.child('/quantity').val() || 0) + change;
      // const quantity = (data ? (data.quantity || 0) : 0) + change;
      console.log("shopping cart service: quantity: ", 
      data.payload.child('/quantity').val(), "+", change, "=",
      quantity)

      if (quantity === 0) {
        cartItem.remove();
      } else {
        cartItem.update({
          // key: item.key,
          // title: item.title,
          // price: item.price,
          // imageUrl: item.imageUrl,
          // category: item.category,
          item,
          quantity
        })
      }
    }) 
  }
  // Function for updateItem().
  private getItem(cartId: string, itemId: string) {
    return this.firebase.object('/shopping-carts/' + cartId + '/items/' + itemId);
  }

  async clearCart() {
    const cartId = await this.getOrCreateCartId();
    this.firebase.object('/shopping-carts/' + cartId + '/items').remove();
  }
}
