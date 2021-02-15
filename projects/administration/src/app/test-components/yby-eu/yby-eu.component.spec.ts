import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YbyEuComponent } from './yby-eu.component';

describe('YbyEuComponent', () => {
  let component: YbyEuComponent;
  let fixture: ComponentFixture<YbyEuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YbyEuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YbyEuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
