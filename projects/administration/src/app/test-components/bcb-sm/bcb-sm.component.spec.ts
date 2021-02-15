import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcbSmComponent } from './bcb-sm.component';

describe('BcbSmComponent', () => {
  let component: BcbSmComponent;
  let fixture: ComponentFixture<BcbSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcbSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BcbSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
