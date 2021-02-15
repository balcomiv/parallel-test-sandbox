import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGJMBComponent } from './n-gjmb.component';

describe('NGJMBComponent', () => {
  let component: NGJMBComponent;
  let fixture: ComponentFixture<NGJMBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NGJMBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NGJMBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
