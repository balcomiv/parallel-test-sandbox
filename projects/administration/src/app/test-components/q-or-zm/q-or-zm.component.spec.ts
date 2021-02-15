import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QOrZMComponent } from './q-or-zm.component';

describe('QOrZMComponent', () => {
  let component: QOrZMComponent;
  let fixture: ComponentFixture<QOrZMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QOrZMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QOrZMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
