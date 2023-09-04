import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutSummaryComponent } from './checkout-summary.component';
import { ShoppingCart } from '../../shared/models/shopping-cart';

describe('CheckoutSummaryComponent', () => {
  let component: CheckoutSummaryComponent;
  let fixture: ComponentFixture<CheckoutSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutSummaryComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutSummaryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the shopping cart details', () => {
    const shoppingCart: ShoppingCart = {
      items: [
        {
          item: { title: 'Item 1', price: 10, category: 'Category 1', imageUrl: 'image-url-1' },
          quantity: 2,
          totalPrice: 20,
        },
        {
          item: { title: 'Item 2', price: 15, category: 'Category 2', imageUrl: 'image-url-2' },
          quantity: 1,
          totalPrice: 15,
        },
      ],
      itemsMap: {},
      totalItemsCount: 3,
      totalPrice: 35
    };

    component.shoppingCart = shoppingCart;
    fixture.detectChanges();

    const cardBodyElement = fixture.nativeElement.querySelector('.card-body');
    expect(cardBodyElement).toBeTruthy();

    const itemCountElement = fixture.nativeElement.querySelector('.badge');
    expect(itemCountElement.textContent.trim()).toBe('3');

    const itemElements = fixture.nativeElement.querySelectorAll('.list-group-item');
    expect(itemElements.length).toBe(3);
    expect(itemElements[0].textContent.trim()).toBe('2 x Item 1  $20.00');
    expect(itemElements[1].textContent.trim()).toBe('1 x Item 2  $15.00');

    const totalPriceElement = fixture.nativeElement.querySelector('.font-weight-bold');
    expect(totalPriceElement.textContent.trim()).toBe('Total  $35.00');
  });

  it('should not display anything when shopping cart is undefined', () => {
    const itemCountElement = fixture.nativeElement.querySelector('.badge');
    expect(itemCountElement).toBeNull();

    const totalPriceElement = fixture.nativeElement.querySelector('.list-group-item.font-weight-bold .float-right');
    expect(totalPriceElement).toBeNull();
  });
});
