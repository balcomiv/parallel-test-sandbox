import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnAgrComponent } from './sn-agr.component';

describe('SnAgrComponent', () => {
  let component: SnAgrComponent;
  let fixture: ComponentFixture<SnAgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnAgrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnAgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
