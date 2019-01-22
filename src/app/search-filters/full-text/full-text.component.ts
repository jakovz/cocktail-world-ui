import {Component, OnInit} from '@angular/core';
import {SearchFiltersComponent} from '../search-filters.component';
import {SearchService} from '../../search.service';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-full-text',
  templateUrl: './full-text.component.html',
  styleUrls: ['./full-text.component.css']
})
export class FullTextComponent extends SearchFiltersComponent implements OnInit {
  search_query = '';
  results = [];
  cocktail = '';
  is_cocktail = false;
  is_meal = false;
  show_cocktail = false;

  constructor(searchService: SearchService) {
    super(searchService);
  }

  ngOnInit() {
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

  onSearch() {
    this.show_results = true;
    let params = new HttpParams();
    params = params.set('query', JSON.stringify(this.search_query));
    this.searchService.getResutls('full_text_search', params).subscribe((data) => {
      this.results = JSON.parse(data['drinks']);
      if (this.results.length === 0) {
        this.results = null;
      }
      this.searchService.clearAll();
    }, (err) => {
      console.log(err);
      this.results = null;
    });
  }

  showCocktail(cocktail: string) {
    let params = new HttpParams();
    this.cocktail = cocktail;
    params = params.set('drink_name', JSON.stringify(this.cocktail));
    this.searchService.getResutls('drink', params).subscribe((data) => {
      this.is_cocktail = JSON.parse(data['drink']).length !== 0;
      this.is_meal = JSON.parse(data['drink']).length === 0;
    });
    this.show_cocktail = true;
    this.show_results = false;
  }

  onBack() {
    if (this.show_cocktail === true) {
      this.show_cocktail = false;
      this.show_results = true;
    } else if (this.show_results === true) {
      this.show_results = false;
    } else {
      window.history.back();
    }
  }
}
