import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsDifferenceComponent } from './ingredients-difference.component';

describe('IngredientsDifferenceComponent', () => {
  let component: IngredientsDifferenceComponent;
  let fixture: ComponentFixture<IngredientsDifferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsDifferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
