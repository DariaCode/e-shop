import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// https://ng-bootstrap.github.io/#/home
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
// My modules:
import { CoreModule } from './core/core.module';
import { SharedModule }  from './shared/shared.module';
import { ShopModule } from './shop/shop.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    SharedModule,
    ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
