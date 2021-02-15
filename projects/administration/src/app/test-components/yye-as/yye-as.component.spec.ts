import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YyeASComponent } from './yye-as.component';

describe('YyeASComponent', () => {
  let component: YyeASComponent;
  let fixture: ComponentFixture<YyeASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YyeASComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YyeASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
