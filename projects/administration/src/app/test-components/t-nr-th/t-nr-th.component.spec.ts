import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TNrTHComponent } from './t-nr-th.component';

describe('TNrTHComponent', () => {
  let component: TNrTHComponent;
  let fixture: ComponentFixture<TNrTHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TNrTHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TNrTHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
