import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThkdQComponent } from './thkd-q.component';

describe('ThkdQComponent', () => {
  let component: ThkdQComponent;
  let fixture: ComponentFixture<ThkdQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThkdQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThkdQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
