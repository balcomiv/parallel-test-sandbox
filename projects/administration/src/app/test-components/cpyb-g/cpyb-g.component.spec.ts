import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpybGComponent } from './cpyb-g.component';

describe('CpybGComponent', () => {
  let component: CpybGComponent;
  let fixture: ComponentFixture<CpybGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpybGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpybGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
