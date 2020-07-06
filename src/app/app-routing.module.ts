import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { AddItemComponent } from './components/add-item/add-item.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'add-item', component: AddItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
