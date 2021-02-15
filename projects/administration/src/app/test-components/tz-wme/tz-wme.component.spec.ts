import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzWmeComponent } from './tz-wme.component';

describe('TzWmeComponent', () => {
  let component: TzWmeComponent;
  let fixture: ComponentFixture<TzWmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzWmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TzWmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
