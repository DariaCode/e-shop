import { Component, OnInit } from '@angular/core';
// Observables are lazy Push collections of multiple values.
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // Navbar that automatically collapses at the lg (large) breakpoint.
  public isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
