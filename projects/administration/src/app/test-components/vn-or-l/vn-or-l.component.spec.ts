import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VnOrLComponent } from './vn-or-l.component';

describe('VnOrLComponent', () => {
  let component: VnOrLComponent;
  let fixture: ComponentFixture<VnOrLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VnOrLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VnOrLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
