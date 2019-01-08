import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  @Input() meals = [];

  constructor() {
  }

  ngOnInit() {
  }

  exists(data) {
    if (typeof data !== 'undefined') {
      return true;
    }
    return false;
  }

  counter(i: number) {
    return new Array(Math.ceil(i));
  }
}
