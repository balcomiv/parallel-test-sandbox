import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YRHudComponent } from './y-rhud.component';

describe('YRHudComponent', () => {
  let component: YRHudComponent;
  let fixture: ComponentFixture<YRHudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YRHudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YRHudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
