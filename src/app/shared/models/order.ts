import { ShoppingCart } from './shopping-cart';

export class Order {
  // https://www.typescriptlang.org/docs/handbook/classes.html
  // Properties:
  orderDate: number;
  item: any[];

  constructor(
    public userId: string, 
    public shipping: any, 
    shopCart: ShoppingCart) {

      this. orderDate = new Date().getTime(); // TODO check why getTime???

      this.item = shopCart.items.map(i => {
        return {
          item: {
            title: i.item.title,
            price: i.item.price,
            imageUrl: i.item.imageUrl
          },
          quantity: i.quantity,
          totalPrice: i.totalPrice,
        };
      });
  }
}