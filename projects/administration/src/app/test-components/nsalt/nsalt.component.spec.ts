import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NSAltComponent } from './nsalt.component';

describe('NSAltComponent', () => {
  let component: NSAltComponent;
  let fixture: ComponentFixture<NSAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NSAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NSAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
