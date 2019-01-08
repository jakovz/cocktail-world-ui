import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../search.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SearchFiltersComponent} from '../search-filters.component';

@Component({
  selector: 'app-made-easy-by-cat',
  templateUrl: './made-easy-by-cat.component.html',
  styleUrls: ['./made-easy-by-cat.component.css']
})
export class MadeEasyByCatComponent extends SearchFiltersComponent implements OnInit {
  allowed_cocktail_categories = [];
  allowed_meal_categories = [];
  added_cocktail_categories = [];
  added_meal_categories = [];
  cocktail_already_exist = false;
  meal_already_exist = false;
  current_cocktail_category = '';
  current_meal_category = '';
  invalid_cocktail_category = false;
  invalid_meal_category = false;
  AUTOCOMPLETE_LENGTH = 4;
  cocktail_autocomplete_options = [];
  meal_autocomplete_options = [];


  constructor(searchService: SearchService, private http: HttpClient) {
    super(searchService);
  }

  ngOnInit() {
    this.getCocktailCategories().subscribe((data) => {
      this.allowed_cocktail_categories = data['allowed_cocktail_categories'];
    }, (err) => {
      this.allowed_cocktail_categories = [];
    });
    this.getMealCategories().subscribe((data) => {
      this.allowed_meal_categories = data['allowed_meal_categories'];
    }, (err) => {
      this.allowed_meal_categories = [];
    });
  }

  getCocktailCategories() {
    return this.http.get(this.searchService.SERVER_URL + '/' + 'cocktail_categories');
  }

  getMealCategories() {
    return this.http.get(this.searchService.SERVER_URL + '/' + 'meal_categories');
  }

  onCocktailAddCategory() {
    if (this.added_cocktail_categories.includes(this.current_cocktail_category)) {
      this.cocktail_already_exist = true;
      this.cocktail_autocomplete_options = [];
    } else if (!this.allowed_cocktail_categories.includes(this.current_cocktail_category)) {
      this.invalid_cocktail_category = true;
      this.cocktail_autocomplete_options = [];
    } else {
      this.cocktail_already_exist = false;
      this.invalid_cocktail_category = false;
      this.added_cocktail_categories.push(this.current_cocktail_category);
    }
    this.current_cocktail_category = '';
  }

  onMealAddCategory() {
    if (this.added_meal_categories.includes(this.current_meal_category)) {
      this.meal_already_exist = true;
      this.meal_autocomplete_options = [];
    } else if (!this.allowed_meal_categories.includes(this.current_meal_category)) {
      this.invalid_meal_category = true;
      this.meal_autocomplete_options = [];
    } else {
      this.meal_already_exist = false;
      this.invalid_meal_category = false;
      this.added_meal_categories.push(this.current_meal_category);
    }
    this.current_meal_category = '';
  }

  get_cocktail_autocomplete_options(word: string) {
    var autocomplete_options = [];
    let counter = 4; // The number of autocomplete results allowed
    for (var i = 0; i < this.allowed_cocktail_categories.length; i++) {
      /* TODO: should be changed to a constant length */
      if (this.allowed_cocktail_categories[i].includes(word)) {
        autocomplete_options.push(this.allowed_cocktail_categories[i]);
        counter--;
      }
      if (counter === 0) {
        break;
      }
    }
    return autocomplete_options;
  }

  get_meal_autocomplete_options(word: string) {
    var autocomplete_ingredients = [];
    let counter = 4; // The number of autocomplete results allowed
    for (var i = 0; i < this.allowed_meal_categories.length; i++) {
      /* TODO: should be changed to a constant length */
      if (this.allowed_meal_categories[i].includes(word)) {
        autocomplete_ingredients.push(this.allowed_meal_categories[i]);
        counter--;
      }
      if (counter === 0) {
        break;
      }
    }
    return autocomplete_ingredients;
  }

  update_cocktail_autocomplete() {
    if (this.current_cocktail_category === '') {
      this.cocktail_autocomplete_options = [];
    } else {
      this.cocktail_autocomplete_options = this.get_cocktail_autocomplete_options(this.current_cocktail_category);
    }
  }

  update_meal_autocomplete() {
    if (this.current_meal_category === '') {
      this.meal_autocomplete_options = [];
    } else {
      this.meal_autocomplete_options = this.get_meal_autocomplete_options(this.current_meal_category);
    }
  }

  update_cocktail_category_from_autocomplete(option: string) {
    this.current_cocktail_category = option;
    this.cocktail_autocomplete_options = [];
  }

  update_meal_category_from_autocomplete(option: string) {
    this.current_meal_category = option;
    this.meal_autocomplete_options = [];
  }

  getAddedCocktailSearchCategories() {
    return this.added_cocktail_categories;
  }

  getAddedMealSearchCategories() {
    return this.added_meal_categories;
  }

  deleteCocktailSearchCategory(category) {
    return this.added_cocktail_categories.splice(this.added_cocktail_categories.indexOf(category), 1);
  }

  deleteMealSearchCategory(category) {
    return this.added_cocktail_categories.splice(this.added_cocktail_categories.indexOf(category), 1);
  }

  onSearch() {
    this.show_results = true;
    let params = new HttpParams();
    params = params.set('cocktail_categories', JSON.stringify(this.added_cocktail_categories));
    params = params.set('meal_categories', JSON.stringify(this.added_meal_categories));
    this.searchService.getResutls('easy_to_make_from_category', params).subscribe((data) => {
      this.results = JSON.parse(data['drinks_meals']);
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
