import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CocktailsComponent} from './cocktails/cocktails.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchFiltersComponent} from './search-filters/search-filters.component';
import {CocktailComponent} from './cocktail/cocktail.component';
import {IngredientComponent} from './ingredient/ingredient.component';
import {MainComponent} from './main/main.component';
import {MealsComponent} from './meals/meals.component';
import {CaloriesAlcoholicComponent} from './search-filters/calories-alcoholic/calories-alcoholic.component';
import {SearchResultsComponent} from './search-results/search-results.component';
import {AmountByGlassAndCategoriesComponent} from './search-filters/amount-by-glass-and-categories/amount-by-glass-and-categories.component';
import { IngredientsDifferenceComponent } from './search-filters/ingredients-difference/ingredients-difference.component';
import { MostUsedNonAlcoholicComponent } from './search-filters/most-used-non-alcoholic/most-used-non-alcoholic.component';
import { CatByAvgNIngredientsComponent } from './search-filters/cat-by-avg-n-ingredients/cat-by-avg-n-ingredients.component';
import { MadeEasyByCatComponent } from './search-filters/made-easy-by-cat/made-easy-by-cat.component';
import { FullTextComponent } from './search-filters/full-text/full-text.component';
import { CommonIngredientsComponent } from './search-filters/common-ingredients/common-ingredients.component';
import { MealComponent } from './meal/meal.component';
declare var jquery:any;
declare var $ :any;


const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'calories_alcoholic', component: CaloriesAlcoholicComponent},
  {path: 'cocktail_amount_by_glass_categories', component: AmountByGlassAndCategoriesComponent},
  {path: 'ingredients_difference', component: IngredientsDifferenceComponent},
  {path: 'most_used_non_alcoholic', component: MostUsedNonAlcoholicComponent},
  {path: 'categories_by_average_number_of_ingredients', component: CatByAvgNIngredientsComponent},
  {path: 'easy_to_make_from_category', component: MadeEasyByCatComponent},
  {path: 'full_text_search', component: FullTextComponent},
  {path: 'common_ingredients', component: CommonIngredientsComponent},
  {path: 'cocktail/:cocktail_name', component: CocktailComponent},
  {path: 'ingredient/:ingredient_name', component: IngredientComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CocktailsComponent,
    SearchFiltersComponent,
    CocktailComponent,
    IngredientComponent,
    MainComponent,
    MealsComponent,
    CaloriesAlcoholicComponent,
    SearchResultsComponent,
    AmountByGlassAndCategoriesComponent,
    IngredientsDifferenceComponent,
    MostUsedNonAlcoholicComponent,
    CatByAvgNIngredientsComponent,
    MadeEasyByCatComponent,
    FullTextComponent,
    CommonIngredientsComponent,
    MealComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
