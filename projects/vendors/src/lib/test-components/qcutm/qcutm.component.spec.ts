import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QCUtmComponent } from './qcutm.component';

describe('QCUtmComponent', () => {
  let component: QCUtmComponent;
  let fixture: ComponentFixture<QCUtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QCUtmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QCUtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
