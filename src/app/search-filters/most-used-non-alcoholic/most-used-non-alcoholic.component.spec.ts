import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostUsedNonAlcoholicComponent } from './most-used-non-alcoholic.component';

describe('MostUsedNonAlcoholicComponent', () => {
  let component: MostUsedNonAlcoholicComponent;
  let fixture: ComponentFixture<MostUsedNonAlcoholicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostUsedNonAlcoholicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostUsedNonAlcoholicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
