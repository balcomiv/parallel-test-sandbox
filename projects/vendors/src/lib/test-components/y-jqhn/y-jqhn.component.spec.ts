import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YJQHNComponent } from './y-jqhn.component';

describe('YJQHNComponent', () => {
  let component: YJQHNComponent;
  let fixture: ComponentFixture<YJQHNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YJQHNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YJQHNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
