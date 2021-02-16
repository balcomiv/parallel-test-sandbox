import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BWXJqComponent } from './b-wxjq.component';

describe('BWXJqComponent', () => {
  let component: BWXJqComponent;
  let fixture: ComponentFixture<BWXJqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BWXJqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BWXJqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
