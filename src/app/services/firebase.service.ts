import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  items: Observable<any[]>;

  constructor(private firestore: AngularFirestore) { }

  getItems(){
    this.items = this.firestore.collection('items').valueChanges();
    return this.items;
 }
}

interface Item{
  $id?: string;
  name?: string;
  price?:number;
}
