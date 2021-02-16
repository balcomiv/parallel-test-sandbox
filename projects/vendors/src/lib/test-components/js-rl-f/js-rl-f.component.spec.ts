import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsRlFComponent } from './js-rl-f.component';

describe('JsRlFComponent', () => {
  let component: JsRlFComponent;
  let fixture: ComponentFixture<JsRlFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsRlFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsRlFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
