import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyJIMComponent } from './py-jim.component';

describe('PyJIMComponent', () => {
  let component: PyJIMComponent;
  let fixture: ComponentFixture<PyJIMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyJIMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyJIMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
