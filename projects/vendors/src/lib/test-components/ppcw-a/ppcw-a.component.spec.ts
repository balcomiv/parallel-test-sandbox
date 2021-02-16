import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPCwAComponent } from './ppcw-a.component';

describe('PPCwAComponent', () => {
  let component: PPCwAComponent;
  let fixture: ComponentFixture<PPCwAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PPCwAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PPCwAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
