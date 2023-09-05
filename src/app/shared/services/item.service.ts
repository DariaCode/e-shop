import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
// https://rxjs-dev.firebaseapp.com/api/operators/map
import { map } from 'rxjs/operators';
import { Item } from '../models/item';

// To define a class as a service in Angular, use the @Injectable() decorator 
// to provide the metadata that allows Angular to inject it into
// a component as a dependency.
@Injectable({
  // When you provide the service at the root level, Angular creates a single, 
  // shared instance of HeroService and injects it into 
  // any class that asks for it.
  providedIn: 'root'
})
export class ItemService {

  constructor(private firebase: AngularFireDatabase) { }

  // Methods:
  getAll() { 
    return this.firebase.list('items').snapshotChanges()
    .pipe(map(action => action
      .map(a => ({key: a.payload.key, ...(a.payload.val() as Item)})
      )));
  }

  create(item) {
    return this.firebase.list('/items').push(item);
  }

  get(itemId) {
    return this.firebase.object('/items/' + itemId);
  }

  update(itemId, item) {
    return this.firebase.object('/items/' + itemId).update(item);
  }

  delete(itemId) {
    return this.firebase.object('/items/' + itemId).remove();
  }

}
