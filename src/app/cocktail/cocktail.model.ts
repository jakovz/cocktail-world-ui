import {Params} from '@angular/router';

export class CocktailModel {
  category: string;
  cocktail_name: string;
  glass: string;
  instructions: string;
  img_link: string;
  ingredients: string[];
  measures: string[];

  constructor(params: Params) {
    this.category = params['category'];
    this.cocktail_name = params['name'];
    this.img_link = params['drink_img_url'];
    this.glass = params['glass_type'];
    // let i = 1;
    this.instructions = params['instructions'];
    // while (params['strIngredient' + i] !== '') {
    //  i++;
    // }
    // this.ingredients = new Array(i);
    // this.measures = new Array(i);
    // let j = 1;
    // while (j < i) {
    //  this.ingredients.push(params['strIngredient' + j]);
    //  this.measures.push(params['strMeasure' + j]);
    //  j++;
    // }
  }

}
