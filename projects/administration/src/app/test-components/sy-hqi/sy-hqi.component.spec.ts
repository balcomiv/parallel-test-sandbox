import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyHqiComponent } from './sy-hqi.component';

describe('SyHqiComponent', () => {
  let component: SyHqiComponent;
  let fixture: ComponentFixture<SyHqiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyHqiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyHqiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
