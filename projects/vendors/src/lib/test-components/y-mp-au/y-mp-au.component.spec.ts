import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YMpAuComponent } from './y-mp-au.component';

describe('YMpAuComponent', () => {
  let component: YMpAuComponent;
  let fixture: ComponentFixture<YMpAuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YMpAuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YMpAuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
