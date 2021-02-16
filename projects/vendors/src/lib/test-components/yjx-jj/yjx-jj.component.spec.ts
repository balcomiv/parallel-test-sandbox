import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YjxJJComponent } from './yjx-jj.component';

describe('YjxJJComponent', () => {
  let component: YjxJJComponent;
  let fixture: ComponentFixture<YjxJJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YjxJJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YjxJJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
