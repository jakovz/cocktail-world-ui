import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonIngredientsComponent } from './common-ingredients.component';

describe('CommonIngredientsComponent', () => {
  let component: CommonIngredientsComponent;
  let fixture: ComponentFixture<CommonIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonIngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
