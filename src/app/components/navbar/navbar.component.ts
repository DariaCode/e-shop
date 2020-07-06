import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AngularFireAuth,
    public flashMessage:FlashMessagesService
    ) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
    this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
  }
}
