import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LELiwComponent } from './leliw.component';

describe('LELiwComponent', () => {
  let component: LELiwComponent;
  let fixture: ComponentFixture<LELiwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LELiwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LELiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
