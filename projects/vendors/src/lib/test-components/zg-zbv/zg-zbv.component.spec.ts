import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZgZBvComponent } from './zg-zbv.component';

describe('ZgZBvComponent', () => {
  let component: ZgZBvComponent;
  let fixture: ComponentFixture<ZgZBvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZgZBvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZgZBvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
