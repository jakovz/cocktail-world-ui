import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  available_queries = {
    'calories_alcoholic': 'Cocktails and Meals by calories range',
    'cocktail_amount_by_glass_categories': 'Alcoholic results by glass type and categories',
    'ingredients_difference': 'Ingredients by appearance in drinks',
    'most_used_non_alcoholic': 'Most used glass type by non alcoholic drinks',
    'categories_by_average_number_of_ingredients': 'Cocktail categories by average number of ingredients',
    'easy_to_make_from_category': 'Easy to make results and meals by category',
    'full_text_search': 'Full text search',
    'common_ingredients': 'Number of common ingredients of results and meals'
  };
  query_keys = Object.keys(this.available_queries);

  selected_query = 'calories_alcoholic';

  constructor(private searchService: SearchService, private http: HttpClient) {
  }

  ngOnInit() {

  }

  onSelectQuery(new_query) {
    this.selected_query = new_query;
  }

}
