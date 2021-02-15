import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YjcSqComponent } from './yjc-sq.component';

describe('YjcSqComponent', () => {
  let component: YjcSqComponent;
  let fixture: ComponentFixture<YjcSqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YjcSqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YjcSqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
