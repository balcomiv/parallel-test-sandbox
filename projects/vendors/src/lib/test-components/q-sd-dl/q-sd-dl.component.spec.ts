import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QSdDLComponent } from './q-sd-dl.component';

describe('QSdDLComponent', () => {
  let component: QSdDLComponent;
  let fixture: ComponentFixture<QSdDLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QSdDLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QSdDLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
