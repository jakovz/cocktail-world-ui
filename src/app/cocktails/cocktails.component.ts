import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {
  @Input() cocktails = [];

  constructor(private http: HttpClient) {
  }

  counter(i: number) {
    return new Array(Math.ceil(i));
  }

  ngOnInit() {
  }

  exists(data) {
    if (typeof data !== 'undefined') {
      return true;
    }
    return false;
  }

}
