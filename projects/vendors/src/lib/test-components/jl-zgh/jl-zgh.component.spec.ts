import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JlZGHComponent } from './jl-zgh.component';

describe('JlZGHComponent', () => {
  let component: JlZGHComponent;
  let fixture: ComponentFixture<JlZGHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JlZGHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JlZGHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
