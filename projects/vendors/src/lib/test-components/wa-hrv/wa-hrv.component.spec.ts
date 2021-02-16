import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaHRVComponent } from './wa-hrv.component';

describe('WaHRVComponent', () => {
  let component: WaHRVComponent;
  let fixture: ComponentFixture<WaHRVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaHRVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaHRVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
