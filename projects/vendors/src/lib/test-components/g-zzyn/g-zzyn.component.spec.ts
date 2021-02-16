import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GZZYnComponent } from './g-zzyn.component';

describe('GZZYnComponent', () => {
  let component: GZZYnComponent;
  let fixture: ComponentFixture<GZZYnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GZZYnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GZZYnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
