import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyQVVComponent } from './dy-qvv.component';

describe('DyQVVComponent', () => {
  let component: DyQVVComponent;
  let fixture: ComponentFixture<DyQVVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyQVVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DyQVVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
