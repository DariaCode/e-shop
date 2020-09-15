import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { DataTableModule } from 'angular7-data-table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './shop/items-list/items-list.component';
import { LoginButtonComponent } from './core/login-button/login-button.component';
// https://ng-bootstrap.github.io/#/home
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
// My modules:
import { CoreModule } from './core/core.module';
import { SharedModule }  from './shared/shared.module';
import { ShopModule } from './shop/shop.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CoreModule,
    SharedModule,
    ShopModule,
    AdminModule,
    DataTableModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: ItemsListComponent },
      { path: 'login', component: LoginButtonComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
