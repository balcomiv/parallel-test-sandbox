import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WLglAComponent } from './wlgl-a.component';

describe('WLglAComponent', () => {
  let component: WLglAComponent;
  let fixture: ComponentFixture<WLglAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WLglAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WLglAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
