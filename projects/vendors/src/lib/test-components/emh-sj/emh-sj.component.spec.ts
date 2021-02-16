import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmhSJComponent } from './emh-sj.component';

describe('EmhSJComponent', () => {
  let component: EmhSJComponent;
  let fixture: ComponentFixture<EmhSJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmhSJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmhSJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
