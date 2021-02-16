import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SEcKDComponent } from './sec-kd.component';

describe('SEcKDComponent', () => {
  let component: SEcKDComponent;
  let fixture: ComponentFixture<SEcKDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SEcKDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SEcKDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
