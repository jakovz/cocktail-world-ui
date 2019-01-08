import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchService} from '../../search.service';
import {SearchFiltersComponent} from '../search-filters.component';

@Component({
  selector: 'app-most-used-non-alcoholic',
  templateUrl: './most-used-non-alcoholic.component.html',
  styleUrls: ['./most-used-non-alcoholic.component.css']
})
export class MostUsedNonAlcoholicComponent extends SearchFiltersComponent implements OnInit {
  glass_img_path = '';
  glass_name = '';
  results = [];
  cocktail = '';
  show_cocktail = false;
  show_results = true;


  constructor(private http: HttpClient, searchService: SearchService) {
    super(searchService);
  }

  ngOnInit() {
    this.getMostUsedGlass().subscribe((data) => {
      this.glass_name = data['glass'];
      this.results = JSON.parse(data['drinks']);
    });
  }

  getMostUsedGlass() {
    return this.http.get(this.searchService.SERVER_URL + '/most_used_non_alcoholic');
  }

  counter(i: number) {
    return new Array(Math.ceil(i));
  }

  showCocktail(cocktail: string) {
    this.cocktail = cocktail;
    this.show_cocktail = true;
    this.show_results = false;
  }

  exists(data) {
    if (typeof data !== 'undefined') {
      return true;
    }
    return false;
  }

  onBack() {
    if (this.show_cocktail === true) {
      this.show_cocktail = false;
      this.show_results = true;
    } else {
      window.history.back();
    }
  }
}
