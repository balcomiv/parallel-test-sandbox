import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpqTHComponent } from './xpq-th.component';

describe('XpqTHComponent', () => {
  let component: XpqTHComponent;
  let fixture: ComponentFixture<XpqTHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XpqTHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XpqTHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
