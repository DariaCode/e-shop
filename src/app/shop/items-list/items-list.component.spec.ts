import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Subscription, of } from 'rxjs';
import { ShoppingCart } from '../../shared/models/shopping-cart';
import { ItemService } from '../../shared/services/item.service';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { ItemsListComponent } from './items-list.component';

describe('ItemsListComponent', () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;
  let mockActivatedRoute: any;
  let mockItemService: any;
  let mockShoppingCartService: any;

  beforeEach(() => {
    mockActivatedRoute = {
      queryParamMap: of({
        get: (key: string) => {
          if (key === 'category') {
            return 'test category';
          }
        },
      }),
    };

    mockItemService = {
      getAll: () => of([
        {key: '1', name: 'item1', category: 'test category', price: 10},
        {key: '2', name: 'item2', category: 'other category', price: 20},
      ]),
    };

    mockShoppingCartService = {
      getCart: () => of(new ShoppingCart({})),
    };

    TestBed.configureTestingModule({
      declarations: [ItemsListComponent],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: ItemService, useValue: mockItemService},
        {provide: ShoppingCartService, useValue: mockShoppingCartService},
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    // initialize the subscription property
    component.subscription = new Subscription();
    fixture.detectChanges();

  });

  afterEach(() => {
    // unsubscribe to prevent memory leaks
    component.subscription.unsubscribe();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch items on init', async () => {
    fixture.detectChanges(); // Trigger ngOnInit
    await fixture.whenStable();

    expect(component.items.length).toEqual(2);
  });

  it('should set category from query params', async () => {
    fixture.detectChanges(); // Trigger ngOnInit
    await fixture.whenStable();

    expect(component.category).toBe('test category');
  });

  it('should filter items by category', async () => {
    fixture.detectChanges(); // Trigger ngOnInit
    await fixture.whenStable();

    expect(component.filteredItems.length).toBe(1);
    expect(component.filteredItems[0].key).toBe('1');
  });

  it('should set cart on init', async () => {
    fixture.detectChanges(); // Trigger ngOnInit
    await fixture.whenStable();

    expect(component.cart).toBeDefined();
  });

  it('should unsubscribe on destroy', () => {
    spyOn(component.subscription, 'unsubscribe').and.callThrough();
    component.ngOnDestroy();

    expect(component.subscription.unsubscribe).toHaveBeenCalled();
  });
});
