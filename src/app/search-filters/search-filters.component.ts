import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {FilterModel} from '../filter.model';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent implements OnInit {
  show_results = false;
  results = [];

  constructor(protected searchService: SearchService) {
  }

  ngOnInit() {
  }

  onBack() {
    if (this.show_results === true) {
      this.searchService.clearAll();
      this.show_results = false;
      this.results = [];

    } else {
      window.history.back();
    }
  }
}
