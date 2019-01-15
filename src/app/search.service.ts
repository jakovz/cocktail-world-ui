import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  SERVER_URL = 'http://delta-tomcat-vm.cs.tau.ac.il:30875';
  selected_search_ingredients = [];
  selected_search_filters = [];

  constructor(private http: HttpClient) {
  }


  getResutls(query, params) {
    return this.http.get(this.SERVER_URL + '/' + query, {params: params});
  }

  clearAll() {
    this.selected_search_filters = [];
    this.selected_search_ingredients = [];
  }
}
