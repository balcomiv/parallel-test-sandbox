import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EWQxwComponent } from './e-wqxw.component';

describe('EWQxwComponent', () => {
  let component: EWQxwComponent;
  let fixture: ComponentFixture<EWQxwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EWQxwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EWQxwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
