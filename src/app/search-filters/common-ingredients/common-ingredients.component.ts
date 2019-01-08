import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SearchFiltersComponent} from '../search-filters.component';
import {SearchService} from '../../search.service';

@Component({
  selector: 'app-common-ingredients',
  templateUrl: './common-ingredients.component.html',
  styleUrls: ['./common-ingredients.component.css']
})
export class CommonIngredientsComponent extends SearchFiltersComponent implements OnInit {
  common_ingredients = '';

  constructor(searchService: SearchService, private http: HttpClient) {
    super(searchService);
  }

  ngOnInit() {
  }

  onSearch() {
    this.show_results = true;
    let params = new HttpParams();
    params = params.set('common_ingredients', JSON.stringify(this.common_ingredients));
    this.searchService.getResutls('common_ingredients', params).subscribe((data) => {
      this.results = JSON.parse(data['common_ingredients']);
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
