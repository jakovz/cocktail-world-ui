import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../search.service';
import {FilterModel} from '../../filter.model';
import {HttpParams} from '@angular/common/http';
import {SearchFiltersComponent} from '../search-filters.component';

@Component({
  selector: 'app-calories-alcoholic',
  templateUrl: './calories-alcoholic.component.html',
  styleUrls: ['./calories-alcoholic.component.css']
})
export class CaloriesAlcoholicComponent extends SearchFiltersComponent implements OnInit {
  show_results = false;
  results = [];
  filter_type = 'alcoholic';
  range_from = '';
  range_to = '';

  constructor(searchService: SearchService) {
    super(searchService);
  }

  ngOnInit() {
  }

  onChangeType(filter_type) {
    this.filter_type = filter_type;
  }

  onSearch() {
    this.show_results = true;
    let params = new HttpParams();
    params = params.set('alcoholic', JSON.stringify(this.filter_type));
    params = params.set('range_from', JSON.stringify(this.range_from));
    params = params.set('range_to', JSON.stringify(this.range_to));
    this.searchService.getResutls('calories_alcoholic', params).subscribe((data) => {
      this.results = JSON.parse(data['drinks']);
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
