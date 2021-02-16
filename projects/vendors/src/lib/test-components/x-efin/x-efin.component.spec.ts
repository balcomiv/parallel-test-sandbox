import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XEFinComponent } from './x-efin.component';

describe('XEFinComponent', () => {
  let component: XEFinComponent;
  let fixture: ComponentFixture<XEFinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XEFinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XEFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
