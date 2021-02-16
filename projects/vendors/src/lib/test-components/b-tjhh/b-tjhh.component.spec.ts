import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTJHhComponent } from './b-tjhh.component';

describe('BTJHhComponent', () => {
  let component: BTJHhComponent;
  let fixture: ComponentFixture<BTJHhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BTJHhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BTJHhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
