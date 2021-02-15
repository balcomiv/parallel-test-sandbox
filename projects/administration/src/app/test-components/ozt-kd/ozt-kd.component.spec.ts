import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OztKDComponent } from './ozt-kd.component';

describe('OztKDComponent', () => {
  let component: OztKDComponent;
  let fixture: ComponentFixture<OztKDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OztKDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OztKDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
