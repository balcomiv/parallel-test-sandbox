import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDRrHComponent } from './vdrr-h.component';

describe('VDRrHComponent', () => {
  let component: VDRrHComponent;
  let fixture: ComponentFixture<VDRrHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VDRrHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VDRrHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
