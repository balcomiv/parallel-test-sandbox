import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QgrkMComponent } from './qgrk-m.component';

describe('QgrkMComponent', () => {
  let component: QgrkMComponent;
  let fixture: ComponentFixture<QgrkMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QgrkMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QgrkMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
