import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private firebase: AngularFireDatabase) { }

  getAll() {
    return this.firebase.list('categories', ref => ref.orderByChild('name'))
    .snapshotChanges();
  }
}
