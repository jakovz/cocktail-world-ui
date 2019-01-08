import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() results = [];
  show_cocktail = false;
  show_meal = false;
  cocktail = '';
  meal = '';

  constructor() {
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

  showCocktail(cocktail: string) {
    this.cocktail = cocktail;
    this.show_cocktail = true;
  }

  showMeal(meal: string) {
    this.meal = meal;
    this.show_meal = true;
    this.show_cocktail = false;
  }

  onBack() {
    if (this.show_cocktail === true) {
      this.show_cocktail = false;
    } else if (this.show_meal === true) {
      this.show_meal = false;
    } else {
      window.history.back();
    }
  }
}
