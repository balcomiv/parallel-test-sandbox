import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YZAsBComponent } from './yzas-b.component';

describe('YZAsBComponent', () => {
  let component: YZAsBComponent;
  let fixture: ComponentFixture<YZAsBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YZAsBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YZAsBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
