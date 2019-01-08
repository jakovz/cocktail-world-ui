import {Params} from '@angular/router';

export class MealModel {
  category: string;
  meal_name: string;
  area: string;
  instructions: string;
  img_link: string;
  youtube_link: string;
  ingredients: string[];
  measures: string[];

  constructor(params: Params) {
    this.category = params['category'];
    this.meal_name = params['name'];
    this.img_link = params['meal_img_url'];
    this.area = params['area'];
    // this.youtube_link = params['youtube_video_url'].split('watch?v=').join( 'embed/');
    this.youtube_link = params['youtube_video_url'];
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
