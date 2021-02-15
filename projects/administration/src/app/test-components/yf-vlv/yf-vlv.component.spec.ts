import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YfVlvComponent } from './yf-vlv.component';

describe('YfVlvComponent', () => {
  let component: YfVlvComponent;
  let fixture: ComponentFixture<YfVlvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YfVlvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YfVlvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
