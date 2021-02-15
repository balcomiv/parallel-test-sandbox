import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DNnBdComponent } from './d-nn-bd.component';

describe('DNnBdComponent', () => {
  let component: DNnBdComponent;
  let fixture: ComponentFixture<DNnBdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DNnBdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DNnBdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
