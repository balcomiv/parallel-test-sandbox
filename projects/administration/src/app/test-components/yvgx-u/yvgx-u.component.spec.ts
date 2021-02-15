import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YvgxUComponent } from './yvgx-u.component';

describe('YvgxUComponent', () => {
  let component: YvgxUComponent;
  let fixture: ComponentFixture<YvgxUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YvgxUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YvgxUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
