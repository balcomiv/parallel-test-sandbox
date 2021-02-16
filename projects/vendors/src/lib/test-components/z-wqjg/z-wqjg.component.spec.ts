import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZWqjgComponent } from './z-wqjg.component';

describe('ZWqjgComponent', () => {
  let component: ZWqjgComponent;
  let fixture: ComponentFixture<ZWqjgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZWqjgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZWqjgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
