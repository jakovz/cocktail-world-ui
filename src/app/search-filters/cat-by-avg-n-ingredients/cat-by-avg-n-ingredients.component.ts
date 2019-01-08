import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../search.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SearchFiltersComponent} from '../search-filters.component';

@Component({
  selector: 'app-cat-by-avg-n-ingredients',
  templateUrl: './cat-by-avg-n-ingredients.component.html',
  styleUrls: ['./cat-by-avg-n-ingredients.component.css']
})
export class CatByAvgNIngredientsComponent extends SearchFiltersComponent implements OnInit {
  allowed_categories = [];
  added_categories = [];
  glass_types = [];
  already_exist = false;
  current_category = '';
  unvalid_category = false;
  AUTOCOMPLETE_LENGTH = 4;
  autocomplete_options = [];
  show_filters = false;
  glass_type = '';


  constructor(searchService: SearchService, private http: HttpClient) {
    super(searchService);
  }

  ngOnInit() {
    this.getCocktailCategories().subscribe((data) => {
      this.allowed_categories = data['allowed_cocktail_categories'];
    });
  }

  getCocktailCategories() {
    return this.http.get(this.searchService.SERVER_URL + '/' + 'cocktail_categories');
  }

  onAddCategory() {
    if (this.added_categories.includes(this.current_category)) {
      this.already_exist = true;
    } else if (!this.allowed_categories.includes(this.current_category)) {
      this.unvalid_category = true;
    } else {
      this.already_exist = false;
      this.unvalid_category = false;
      this.added_categories.push(this.current_category);
    }
    this.current_category = '';
  }

  get_autocomplete_options(word: string) {
    var autocomplete_ingredients = [];
    let counter = this.AUTOCOMPLETE_LENGTH; // The number of autocomplete results allowed
    for (var i = 0; i < this.allowed_categories.length; i++) {
      if (this.allowed_categories[i].includes(word)) {
        autocomplete_ingredients.push(this.allowed_categories[i]);
        counter--;
      }
      if (counter === 0) {
        break;
      }
    }
    return autocomplete_ingredients;
  }

  update_autocomplete() {
    if (this.current_category === '') {
      this.autocomplete_options = [];
    } else {
      this.autocomplete_options = this.get_autocomplete_options(this.current_category);
    }
  }

  update_category_from_autocomplete(option: string) {
    this.current_category = option;
    this.autocomplete_options = [];
  }

  getAddedSearchCategories() {
    return this.added_categories;
  }

  deleteSearchCategory(category) {
    return this.added_categories.splice(this.added_categories.indexOf(category), 1);
  }

  onSearch() {
    this.show_results = true;
    let params = new HttpParams();
    params = params.set('categories', JSON.stringify(this.added_categories));
    this.searchService.getResutls('categories_by_average_number_of_ingredients', params).subscribe((data) => {
      this.results = JSON.parse(data['categories']);
      if (this.results.length === 0) {
        this.results = null;
      }
      this.searchService.clearAll();
    }, (err) => {
      console.log(err);
      this.results = null;
    });
  }
}
