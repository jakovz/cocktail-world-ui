import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {stringify} from 'querystring';
import {CocktailModel} from './cocktail.model';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {
  cocktail: CocktailModel;
  @Input() cocktail_name = '';
  cocktail_ingredients = [];

  constructor(private searchService: SearchService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getDrink();
    this.getDrinkIngredients();
  }

  getDrink() {
    let params = new HttpParams();
    params = params.set('drink_name', JSON.stringify(this.cocktail_name));
    this.searchService.getResutls('drink', params).subscribe((data) => {
      this.cocktail = new CocktailModel(JSON.parse(data['drink'])[0]);
      this.searchService.clearAll();
    }, (err) => {
      console.log(err);
      this.cocktail = null;
    });
  }

  getDrinkIngredients() {
    let params = new HttpParams();
    params = params.set('cocktail_name', JSON.stringify(this.cocktail_name));
    this.searchService.getResutls('cocktail_ingredients', params).subscribe((data) => {
      this.cocktail_ingredients = data['cocktail_ingredients'];
      this.searchService.clearAll();
    }, (err) => {
      console.log(err);
      this.cocktail = null;
    });
  }
}
