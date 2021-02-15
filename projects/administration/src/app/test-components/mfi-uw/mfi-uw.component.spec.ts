import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MFiUwComponent } from './mfi-uw.component';

describe('MFiUwComponent', () => {
  let component: MFiUwComponent;
  let fixture: ComponentFixture<MFiUwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MFiUwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MFiUwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
