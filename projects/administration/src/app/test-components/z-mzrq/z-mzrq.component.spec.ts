import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZMzrqComponent } from './z-mzrq.component';

describe('ZMzrqComponent', () => {
  let component: ZMzrqComponent;
  let fixture: ComponentFixture<ZMzrqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZMzrqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZMzrqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
