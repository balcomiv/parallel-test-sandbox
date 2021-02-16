import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QyoIPComponent } from './qyo-ip.component';

describe('QyoIPComponent', () => {
  let component: QyoIPComponent;
  let fixture: ComponentFixture<QyoIPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QyoIPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QyoIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
