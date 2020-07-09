import { Component, OnInit } from '@angular/core';

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
export class ItemsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
