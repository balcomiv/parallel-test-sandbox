import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAOjSComponent } from './faoj-s.component';

describe('FAOjSComponent', () => {
  let component: FAOjSComponent;
  let fixture: ComponentFixture<FAOjSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAOjSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FAOjSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
