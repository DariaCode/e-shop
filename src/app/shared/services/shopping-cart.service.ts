import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
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
    // TODO check the source! object, exportVal, payload
    return this.firebase.object('/shopping-carts/' + cartId).snapshotChanges()
    .pipe(map(x => new ShoppingCart(x.payload.exportVal().items)));
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
  // TODO check if it should be private or public?
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

    cartItem
    .valueChanges()
    .pipe(take(1)) // TODO find what it means!
    .subscribe( (data: ShoppingCartItem) => {
      const quantity = (data ? (data.quantity || 0) : 0) + change;

      if (!quantity) {
        cartItem.remove();
      } else {
        cartItem.update({
          title: item.title,
          price: item.price,
          imageUrl: item.imageUrl,
          quantity
        })
      }
      }
    )
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
