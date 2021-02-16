import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CBUXmComponent } from './c-buxm.component';

describe('CBUXmComponent', () => {
  let component: CBUXmComponent;
  let fixture: ComponentFixture<CBUXmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CBUXmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CBUXmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
