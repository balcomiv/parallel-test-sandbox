import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MQrcyComponent } from './m-qrcy.component';

describe('MQrcyComponent', () => {
  let component: MQrcyComponent;
  let fixture: ComponentFixture<MQrcyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MQrcyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MQrcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
