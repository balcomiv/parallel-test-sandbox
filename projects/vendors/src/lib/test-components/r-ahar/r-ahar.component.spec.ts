import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RAHarComponent } from './r-ahar.component';

describe('RAHarComponent', () => {
  let component: RAHarComponent;
  let fixture: ComponentFixture<RAHarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RAHarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RAHarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
