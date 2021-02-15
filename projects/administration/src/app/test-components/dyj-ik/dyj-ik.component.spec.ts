import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DYjIkComponent } from './dyj-ik.component';

describe('DYjIkComponent', () => {
  let component: DYjIkComponent;
  let fixture: ComponentFixture<DYjIkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DYjIkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DYjIkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
