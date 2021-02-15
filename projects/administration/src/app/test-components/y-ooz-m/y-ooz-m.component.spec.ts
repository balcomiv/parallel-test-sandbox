import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YOOzMComponent } from './y-ooz-m.component';

describe('YOOzMComponent', () => {
  let component: YOOzMComponent;
  let fixture: ComponentFixture<YOOzMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YOOzMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YOOzMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
