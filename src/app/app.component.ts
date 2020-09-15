import { Component } from '@angular/core';
import { Router } from '@angular/router';
// My services: 
import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor(private userService: UserService, private auth: AuthService, router: Router) {
    auth.user$.subscribe(user => {
      if(!user) return;

      userService.add(user);

      let returnUrl = localStorage.getItem('returnUrl');
      if(!returnUrl) return;

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    })
  }

}
