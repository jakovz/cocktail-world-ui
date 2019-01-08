import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatByAvgNIngredientsComponent } from './cat-by-avg-n-ingredients.component';

describe('CatByAvgNIngredientsComponent', () => {
  let component: CatByAvgNIngredientsComponent;
  let fixture: ComponentFixture<CatByAvgNIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatByAvgNIngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatByAvgNIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
