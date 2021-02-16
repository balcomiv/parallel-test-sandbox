import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YewsEComponent } from './yews-e.component';

describe('YewsEComponent', () => {
  let component: YewsEComponent;
  let fixture: ComponentFixture<YewsEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YewsEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YewsEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
