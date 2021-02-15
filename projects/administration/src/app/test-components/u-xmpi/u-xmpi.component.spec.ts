import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UXMPIComponent } from './u-xmpi.component';

describe('UXMPIComponent', () => {
  let component: UXMPIComponent;
  let fixture: ComponentFixture<UXMPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UXMPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UXMPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
