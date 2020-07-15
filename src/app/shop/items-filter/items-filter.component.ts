import { Component, OnInit, Input } from '@angular/core';
import { FilterService } from '../../shared/services/filter.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-items-filter',
  templateUrl: './items-filter.component.html',
  styleUrls: ['./items-filter.component.scss']
})
export class ItemsFilterComponent implements OnInit {
  categories$; 
  // Decorator that marks a class field as an input property 
  // and supplies configuration metadata.
  // https://angular.io/api/core/Input 
  @Input('filteredCategory') filteredCategory;
  
  constructor(private filterService: FilterService) { 
    this.categories$ = this.filterService.getAll()
    .subscribe(category => { this.categories$ = category});
  }

  ngOnInit(): void {
  }

}
