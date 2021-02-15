import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpZKKComponent } from './hp-zkk.component';

describe('HpZKKComponent', () => {
  let component: HpZKKComponent;
  let fixture: ComponentFixture<HpZKKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpZKKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpZKKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
