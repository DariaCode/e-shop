import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
// import 'rxjs/add/observable/of';

import { AppUser } from '../models/user';
import { UserService  } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // $ sign https://angular.io/guide/rx-library#naming-conventions-for-observables
  user$: Observable<firebase.User>;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute
  ) {
    this.user$ = afAuth.authState;
   }

   get appUser$(): Observable<AppUser> {
     return this.user$.pipe(switchMap(user => {
       if(user) return this.userService.get(user.uid).valueChanges();

       return of(null);
     }))
   }

   login() {
     // TODO reac about googleAuth
     let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
     localStorage.setItem('returnUrl', returnUrl);

     this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
   }

   logout() {
     this.afAuth.signOut();
   }

}
