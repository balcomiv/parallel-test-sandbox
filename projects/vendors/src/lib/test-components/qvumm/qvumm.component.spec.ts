import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QVUMmComponent } from './qvumm.component';

describe('QVUMmComponent', () => {
  let component: QVUMmComponent;
  let fixture: ComponentFixture<QVUMmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QVUMmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QVUMmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
