import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmBAIComponent } from './hm-bai.component';

describe('HmBAIComponent', () => {
  let component: HmBAIComponent;
  let fixture: ComponentFixture<HmBAIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmBAIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HmBAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
