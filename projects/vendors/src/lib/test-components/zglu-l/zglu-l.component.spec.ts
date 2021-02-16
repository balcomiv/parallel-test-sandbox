import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZGluLComponent } from './zglu-l.component';

describe('ZGluLComponent', () => {
  let component: ZGluLComponent;
  let fixture: ComponentFixture<ZGluLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZGluLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZGluLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
