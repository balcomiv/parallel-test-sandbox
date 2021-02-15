import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdVGQComponent } from './gd-vgq.component';

describe('GdVGQComponent', () => {
  let component: GdVGQComponent;
  let fixture: ComponentFixture<GdVGQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdVGQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GdVGQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
