import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZECPcComponent } from './zecpc.component';

describe('ZECPcComponent', () => {
  let component: ZECPcComponent;
  let fixture: ComponentFixture<ZECPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZECPcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZECPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
