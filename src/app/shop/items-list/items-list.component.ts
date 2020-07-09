import { Component, OnInit, OnDestroy } from '@angular/core';
// https://rxjs-dev.firebaseapp.com/guide/subscription
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// My models:
import { Item } from '../../shared/models/item';
import { ShoppingCart } from '../../shared/models/shopping-cart';
// My services:
import { ItemService } from '../../shared/services/item.service';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
// https://angular.io/guide/lifecycle-hooks
export class ItemsListComponent implements OnInit, OnDestroy {
  // Properties:
  items: Item[] = [];
  filteredItems: Item[];
  cart: ShoppingCart;
  category: string;
  subscription: Subscription;

  constructor(
    //private route: ActivatedRoute,
    private itemService: ItemService,
    private shoppingCartService: ShoppingCartService
  ) { }

  async ngOnInit() {
    this.subscription = (await this.shoppingCartService.getCart())
      .subscribe(cart => {
        let temp: any;
        this.cart = new ShoppingCart(temp);
      });

    // https://rxjs-dev.firebaseapp.com/api/operators/switchMap
    this.itemService.getAll()  
      .pipe(switchMap(items => {
        let temp: any[];
        temp = items;
        this.items =
      }))
  }

  ngOnDestroy() {

  }
}
