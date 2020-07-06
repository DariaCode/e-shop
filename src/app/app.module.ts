import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemComponent } from './components/item/item.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    NavbarComponent,
    ItemComponent,
    AddItemComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FlashMessagesModule.forRoot(),
    AppRoutingModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
