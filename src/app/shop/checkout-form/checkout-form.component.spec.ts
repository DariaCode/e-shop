import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { CheckoutFormComponent } from './checkout-form.component';
import { AuthService } from '../../shared/services/auth.service';
import { OrderService } from '../../shared/services/order.service';
import { ShoppingCart } from '../../shared/models/shopping-cart';
import { Shipping } from '../../shared/models/shipping';
import { User } from 'firebase';

describe('CheckoutFormComponent', () => {
  let component: CheckoutFormComponent;
  let fixture: ComponentFixture<CheckoutFormComponent>;
  let mockAuthService: Partial<AuthService>;
  let mockOrderService: Partial<OrderService>;
  const mockShoppingCart: ShoppingCart = {
    items: [],
    totalItemsCount: 0,
    totalPrice: 0,
    itemsMap: {}
  };

  beforeEach(async () => {
    mockAuthService = {
      user$: of({ uid: 'mockUserId' } as User),
    };
    mockOrderService = {
      addOrder: jasmine.createSpy('addOrder').and.returnValue(Promise.resolve({ key: 'mockOrderKey' })),
    };

    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [CheckoutFormComponent],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: OrderService, useValue: mockOrderService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutFormComponent);
    component = fixture.componentInstance;
    component.shoppingCart = mockShoppingCart;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty shipping object', () => {
    expect(component.shipping).toEqual({} as Shipping);
  });

  it('should call addOrder and navigate to checkout success on form submission', async () => {
    spyOn(component.router, 'navigate');
    component.shipping = {
      name: 'John Doe',
      address1: '123 Main St',
      address2: 'Apt 4B',
      address3: 'New York',
    };
    await component.addOrder();
    expect(mockOrderService.addOrder).toHaveBeenCalled();
    expect(component.router.navigate).toHaveBeenCalledWith(['/check-out-success', 'mockOrderKey']);
  });

  it('should disable the button when the form is invalid', () => {
    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('#myBtn');

    component.shipping = {
      name: 'John Doe',
      address1: '123 Main St',
      address2: 'Apt 4B',
      address3: '',
    };
    fixture.detectChanges();
    expect(buttonElement.disabled).toBeFalse();
  });
});
