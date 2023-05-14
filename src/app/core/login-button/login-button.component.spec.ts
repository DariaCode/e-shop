import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginButtonComponent } from './login-button.component';
import { AuthService } from '../../shared/services/auth.service';

describe('LoginButtonComponent', () => {
  let component: LoginButtonComponent;
  let fixture: ComponentFixture<LoginButtonComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['login']);

    TestBed.configureTestingModule({
      declarations: [LoginButtonComponent],
      providers: [{ provide: AuthService, useValue: mockAuthService }]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login method of AuthService when login button is clicked', () => {
    const loginButton = fixture.nativeElement.querySelector('.btn');
    loginButton.click();

    expect(mockAuthService.login).toHaveBeenCalled();
  });
});
