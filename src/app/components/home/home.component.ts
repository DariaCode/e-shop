import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public auth: AngularFireAuth, 
    public flashMessage:FlashMessagesService) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

}
