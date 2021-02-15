import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FqWmSComponent } from './fq-wm-s.component';

describe('FqWmSComponent', () => {
  let component: FqWmSComponent;
  let fixture: ComponentFixture<FqWmSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FqWmSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FqWmSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
