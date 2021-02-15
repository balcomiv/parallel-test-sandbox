import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpoDWComponent } from './hpo-dw.component';

describe('HpoDWComponent', () => {
  let component: HpoDWComponent;
  let fixture: ComponentFixture<HpoDWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpoDWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpoDWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
