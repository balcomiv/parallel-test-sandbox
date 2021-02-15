import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AQEMCComponent } from './a-qemc.component';

describe('AQEMCComponent', () => {
  let component: AQEMCComponent;
  let fixture: ComponentFixture<AQEMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AQEMCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AQEMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
