import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LkPbLComponent } from './lk-pb-l.component';

describe('LkPbLComponent', () => {
  let component: LkPbLComponent;
  let fixture: ComponentFixture<LkPbLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LkPbLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LkPbLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
