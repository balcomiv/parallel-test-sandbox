import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McryiComponent } from './mcryi.component';

describe('McryiComponent', () => {
  let component: McryiComponent;
  let fixture: ComponentFixture<McryiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McryiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McryiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
