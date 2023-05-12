import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let linkElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display menu items', () => {
    const menuItems = fixture.debugElement.queryAll(By.css('.menu a'));

    expect(menuItems.length).toBe(5);
    expect(menuItems[0].nativeElement.textContent).toBe('Home Page');
    expect(menuItems[1].nativeElement.textContent).toBe('Products');
    expect(menuItems[2].nativeElement.textContent).toBe('Account');
    expect(menuItems[3].nativeElement.textContent).toBe('Cart');
    expect(menuItems[4].nativeElement.textContent).toBe('Contact');
  });

  it('should display newsletter form', () => {
    const form = fixture.debugElement.query(By.css('form.inputGroup'));
    const newsletterTitle = form.query(By.css('h5'));
    const newsletterText = form.query(By.css('p'));
    const emailInput = form.query(By.css('input[type="text"]'));
    const signUpButton = form.query(By.css('a.btn#myBtn'));

    expect(form).toBeTruthy();
    expect(newsletterTitle.nativeElement.textContent).toBe(' Newsletter ');
    expect(newsletterText.nativeElement.textContent).toContain('Subscribe to receive updates');
    expect(emailInput.nativeElement.getAttribute('placeholder')).toBe('Your email');
    expect(signUpButton.nativeElement.textContent).toBe('Sign up');
  });

  it('should display copyright text with link', () => {
    const link = fixture.debugElement.query(By.css('div.py-3 a#link'));

    expect(link.nativeElement.getAttribute('href')).toBe('https://dariacode.dev/');
    expect(link.nativeElement.textContent).toContain('DariaCode');
  });

});
