import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NSBUoComponent } from './n-sbuo.component';

describe('NSBUoComponent', () => {
  let component: NSBUoComponent;
  let fixture: ComponentFixture<NSBUoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NSBUoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NSBUoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
