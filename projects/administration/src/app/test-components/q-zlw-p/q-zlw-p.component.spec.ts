import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QZlwPComponent } from './q-zlw-p.component';

describe('QZlwPComponent', () => {
  let component: QZlwPComponent;
  let fixture: ComponentFixture<QZlwPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QZlwPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QZlwPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
