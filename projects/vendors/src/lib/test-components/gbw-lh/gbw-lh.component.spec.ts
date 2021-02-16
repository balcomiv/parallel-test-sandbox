import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GBwLHComponent } from './gbw-lh.component';

describe('GBwLHComponent', () => {
  let component: GBwLHComponent;
  let fixture: ComponentFixture<GBwLHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GBwLHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GBwLHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
