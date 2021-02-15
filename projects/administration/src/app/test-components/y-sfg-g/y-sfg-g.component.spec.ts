import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YSfgGComponent } from './y-sfg-g.component';

describe('YSfgGComponent', () => {
  let component: YSfgGComponent;
  let fixture: ComponentFixture<YSfgGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YSfgGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YSfgGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
