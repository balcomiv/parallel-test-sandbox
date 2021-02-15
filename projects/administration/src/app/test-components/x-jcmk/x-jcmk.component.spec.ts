import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XJCMkComponent } from './x-jcmk.component';

describe('XJCMkComponent', () => {
  let component: XJCMkComponent;
  let fixture: ComponentFixture<XJCMkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XJCMkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XJCMkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
