import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XdoJaComponent } from './xdo-ja.component';

describe('XdoJaComponent', () => {
  let component: XdoJaComponent;
  let fixture: ComponentFixture<XdoJaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XdoJaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XdoJaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
