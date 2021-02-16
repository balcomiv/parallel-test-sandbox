import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YGSIGComponent } from './ygsig.component';

describe('YGSIGComponent', () => {
  let component: YGSIGComponent;
  let fixture: ComponentFixture<YGSIGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YGSIGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YGSIGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
