import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YEUZvComponent } from './yeuzv.component';

describe('YEUZvComponent', () => {
  let component: YEUZvComponent;
  let fixture: ComponentFixture<YEUZvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YEUZvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YEUZvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
