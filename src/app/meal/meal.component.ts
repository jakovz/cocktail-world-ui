import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {MealModel} from './meal.model';
import {CocktailModel} from '../cocktail/cocktail.model';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  meal: MealModel;
  @Input() meal_name = '';

  constructor(private searchService: SearchService, private http: HttpClient) {
  }

  ngOnInit() {
    this.getMeal();
  }

  getMeal() {
    let params = new HttpParams();
    params = params.set('meal_name', JSON.stringify(this.meal_name));
    this.searchService.getResutls('meal', params).subscribe((data) => {
      this.meal = new MealModel(JSON.parse(data['meal'])[0]);
      this.searchService.clearAll();
    }, (err) => {
      console.log(err);
      this.meal = null;
    });
  }
}
