import { Component, OnInit } from '@angular/core';
// Observables are lazy Push collections of multiple values.
import { Observable } from 'rxjs';

import { AppUser } from '../../shared/models/user';
import { ShoppingCart } from '../../shared/models/shopping-cart';

import { ShoppingCartService } from '../../shared/services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // Navbar that automatically collapses at the lg (large) breakpoint.
  public isCollapsed = true;
  appUser: AppUser;
  shopCart: ShoppingCart; // TODO check it! Observable<ShoppingCart>;

  constructor(
    private shoppingCartService: ShoppingCartService) { }

  async ngOnInit() {
    const cartItems = await this.shoppingCartService.getCart();
    cartItems.subscribe( data => {
      this.shopCart=data;
    })
  }

}
