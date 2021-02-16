import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HzHARComponent } from './hz-har.component';

describe('HzHARComponent', () => {
  let component: HzHARComponent;
  let fixture: ComponentFixture<HzHARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HzHARComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HzHARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
