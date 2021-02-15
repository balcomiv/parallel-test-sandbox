import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NTpkPComponent } from './ntpk-p.component';

describe('NTpkPComponent', () => {
  let component: NTpkPComponent;
  let fixture: ComponentFixture<NTpkPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NTpkPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NTpkPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
