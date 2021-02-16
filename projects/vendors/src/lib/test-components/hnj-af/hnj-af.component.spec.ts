import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HNjAfComponent } from './hnj-af.component';

describe('HNjAfComponent', () => {
  let component: HNjAfComponent;
  let fixture: ComponentFixture<HNjAfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HNjAfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HNjAfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
