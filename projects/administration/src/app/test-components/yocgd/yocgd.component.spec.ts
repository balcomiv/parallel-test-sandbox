import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YOcgdComponent } from './yocgd.component';

describe('YOcgdComponent', () => {
  let component: YOcgdComponent;
  let fixture: ComponentFixture<YOcgdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YOcgdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YOcgdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
