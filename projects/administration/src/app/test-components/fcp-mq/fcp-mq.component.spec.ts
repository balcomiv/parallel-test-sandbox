import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcpMqComponent } from './fcp-mq.component';

describe('FcpMqComponent', () => {
  let component: FcpMqComponent;
  let fixture: ComponentFixture<FcpMqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcpMqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FcpMqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
