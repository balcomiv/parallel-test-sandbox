import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuGpWComponent } from './fu-gp-w.component';

describe('FuGpWComponent', () => {
  let component: FuGpWComponent;
  let fixture: ComponentFixture<FuGpWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuGpWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuGpWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
