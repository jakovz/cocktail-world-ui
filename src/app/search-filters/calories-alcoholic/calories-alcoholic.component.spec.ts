import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesAlcoholicComponent } from './calories-alcoholic.component';

describe('CaloriesAlcoholicComponent', () => {
  let component: CaloriesAlcoholicComponent;
  let fixture: ComponentFixture<CaloriesAlcoholicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriesAlcoholicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriesAlcoholicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
