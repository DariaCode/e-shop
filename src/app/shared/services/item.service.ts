import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
// hhttps://rxjs-dev.firebaseapp.com/api/operators/map
import { map } from 'rxjs/operators';

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
  getAll() { // TODO find a source with explanation
    console.log( "ItemSrvices.getAll: ", this.firebase.list('/items').snapshotChanges())
    return this.firebase.list('/items').snapshotChanges()
    .pipe(map(action => action
      .map(a => {
        const id = a.payload.key;
        const data = a.payload.val();
        return data;
      })));
  }

  create(item) {
    return this.firebase.list('/products').push(item);
  }

  get(itemId) {
    return this.firebase.object('/products/' + itemId);
  }

  update(itemId, item) {
    return this.firebase.object('/products/' + itemId).update(item);
  }

}