import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YnBUEComponent } from './yn-bue.component';

describe('YnBUEComponent', () => {
  let component: YnBUEComponent;
  let fixture: ComponentFixture<YnBUEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YnBUEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YnBUEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
