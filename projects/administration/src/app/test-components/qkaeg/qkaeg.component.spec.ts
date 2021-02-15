import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QKAEGComponent } from './qkaeg.component';

describe('QKAEGComponent', () => {
  let component: QKAEGComponent;
  let fixture: ComponentFixture<QKAEGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QKAEGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QKAEGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
