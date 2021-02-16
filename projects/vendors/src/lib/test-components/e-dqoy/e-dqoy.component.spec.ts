import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDQOyComponent } from './e-dqoy.component';

describe('EDQOyComponent', () => {
  let component: EDQOyComponent;
  let fixture: ComponentFixture<EDQOyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDQOyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EDQOyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
