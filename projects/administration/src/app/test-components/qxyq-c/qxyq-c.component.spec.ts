import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QXYqCComponent } from './qxyq-c.component';

describe('QXYqCComponent', () => {
  let component: QXYqCComponent;
  let fixture: ComponentFixture<QXYqCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QXYqCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QXYqCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
