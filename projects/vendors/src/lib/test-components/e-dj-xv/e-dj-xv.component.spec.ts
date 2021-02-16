import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDjXvComponent } from './e-dj-xv.component';

describe('EDjXvComponent', () => {
  let component: EDjXvComponent;
  let fixture: ComponentFixture<EDjXvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDjXvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EDjXvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
