import { Component, Input } from '@angular/core';
import { ShoppingCart } from '../../shared/models/shopping-cart';

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.scss']
})
export class CheckoutSummaryComponent {

  @Input('shopping-cart') shoppingCart: ShoppingCart;

}
