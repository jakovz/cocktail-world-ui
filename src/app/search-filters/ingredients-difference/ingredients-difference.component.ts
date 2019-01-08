import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../search.service';
import {HttpParams} from '@angular/common/http';
import {SearchFiltersComponent} from '../search-filters.component';

@Component({
  selector: 'app-ingredients-difference',
  templateUrl: './ingredients-difference.component.html',
  styleUrls: ['./ingredients-difference.component.css']
})
export class IngredientsDifferenceComponent extends SearchFiltersComponent implements OnInit {
  different_drinks = null;
  ingredients_in_drink = null;
  show_results = false;
  results = [];

  constructor(searchService: SearchService) {
    super(searchService);
  }

  ngOnInit() {
  }

  onSearch() {
    this.show_results = true;
    let params = new HttpParams();
    params = params.set('different_drinks', JSON.stringify(this.different_drinks));
    params = params.set('ingredients_in_drink', JSON.stringify(this.ingredients_in_drink));
    this.searchService.getResutls('ingredients_difference', params).subscribe((data) => {
      this.results = JSON.parse(data['ingredients']);
      if (this.results == null || this.results.length === 0) {
        this.results = null;
      }
      this.searchService.clearAll();
    }, (err) => {
      console.log(err);
      this.results = null;
    });
  }


  counter(i: number) {
    return new Array(Math.ceil(i));
  }

  exists(data) {
    if (typeof data !== 'undefined') {
      return true;
    }
    return false;
  }
}
