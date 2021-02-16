import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CGnyPComponent } from './cgny-p.component';

describe('CGnyPComponent', () => {
  let component: CGnyPComponent;
  let fixture: ComponentFixture<CGnyPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CGnyPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CGnyPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
