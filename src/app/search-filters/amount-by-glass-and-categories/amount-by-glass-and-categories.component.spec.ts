import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountByGlassAndCategoriesComponent } from './amount-by-glass-and-categories.component';

describe('AmountByGlassAndCategoriesComponent', () => {
  let component: AmountByGlassAndCategoriesComponent;
  let fixture: ComponentFixture<AmountByGlassAndCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountByGlassAndCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountByGlassAndCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
