import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  ingredient = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.ingredient = this.route.snapshot['cocktail'];
    this.route.params.subscribe(
      (params: Params) => {
        this.ingredient = params['cocktail'];
      }
    );
  }

}
