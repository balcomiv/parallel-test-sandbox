import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WHItcComponent } from './whitc.component';

describe('WHItcComponent', () => {
  let component: WHItcComponent;
  let fixture: ComponentFixture<WHItcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WHItcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WHItcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
