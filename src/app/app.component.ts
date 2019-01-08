import { Component } from '@angular/core';
import {SearchService} from './search.service';
import {fadeAnimation} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'Cocktail World';
}
