import { ShoppingCartItem } from './shopping-cart-item';
import { Item } from './item';

export class ShoppingCart {
  // https://www.typescriptlang.org/docs/handbook/classes.html
  // Property:
  items: ShoppingCartItem[] = [];
  // In TypeScript, each member is public by default.
  constructor(public itemsMap: { [itemId: string]: ShoppingCartItem}) {
    this.itemsMap = itemsMap || {};

    for (let itemId in itemsMap) {
      let cartItem = itemsMap[itemId];
      console.log("shopping-cart model: ", itemId, cartItem)
      // this.items.push(new ShoppingCartItem(cartItem.item, cartItem.quantity));
      this.items.push(cartItem);
      console.log("shopping-cart model: ", this.items);
    }
  }
  // Methods:
  get totalPrice(): number {
    let total = 0;
    for ( let itemId in this.items) { // TODO check items vs itemsMap
      // totalPrice from ShoppingCartItem class (price * quantity).
      total += this.items[itemId].totalPrice;
    }
    return total;
  }

  get totalItemsCount(): number {
    let total = 0;
    for ( let itemId in this.itemsMap) { // TODO check items vs itemsMap
      total += this.itemsMap[itemId].quantity;
    }
    return total;
  }

  getQuantity(item: Item) {
    let itemQ = this.itemsMap[item.key];
    // console.log("shopping-cart.ts getQty: ", this.itemsMap[item.key], itemQ)
    return itemQ ? itemQ.quantity : 0; 
  }

}