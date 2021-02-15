import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YGrKZComponent } from './y-gr-kz.component';

describe('YGrKZComponent', () => {
  let component: YGrKZComponent;
  let fixture: ComponentFixture<YGrKZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YGrKZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YGrKZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
