import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadeEasyByCatComponent } from './made-easy-by-cat.component';

describe('MadeEasyByCatComponent', () => {
  let component: MadeEasyByCatComponent;
  let fixture: ComponentFixture<MadeEasyByCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadeEasyByCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadeEasyByCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
