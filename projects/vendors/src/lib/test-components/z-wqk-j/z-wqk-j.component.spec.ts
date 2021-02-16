import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZWqkJComponent } from './z-wqk-j.component';

describe('ZWqkJComponent', () => {
  let component: ZWqkJComponent;
  let fixture: ComponentFixture<ZWqkJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZWqkJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZWqkJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
