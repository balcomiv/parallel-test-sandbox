import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GSogWComponent } from './g-sog-w.component';

describe('GSogWComponent', () => {
  let component: GSogWComponent;
  let fixture: ComponentFixture<GSogWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GSogWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GSogWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
