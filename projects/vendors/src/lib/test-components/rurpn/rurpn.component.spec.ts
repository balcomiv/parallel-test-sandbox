import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RurpnComponent } from './rurpn.component';

describe('RurpnComponent', () => {
  let component: RurpnComponent;
  let fixture: ComponentFixture<RurpnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RurpnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RurpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
