import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items:any;

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getItems().subscribe(items => {
      console.log("ITEMS ",items);
      this.items = items;
    })
  }
}
