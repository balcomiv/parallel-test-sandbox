import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QzSBBComponent } from './qz-sbb.component';

describe('QzSBBComponent', () => {
  let component: QzSBBComponent;
  let fixture: ComponentFixture<QzSBBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QzSBBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QzSBBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
