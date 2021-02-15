import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCXLqComponent } from './bcxlq.component';

describe('BCXLqComponent', () => {
  let component: BCXLqComponent;
  let fixture: ComponentFixture<BCXLqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BCXLqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BCXLqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
