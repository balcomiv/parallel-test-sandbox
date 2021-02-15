import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfDJtComponent } from './if-djt.component';

describe('IfDJtComponent', () => {
  let component: IfDJtComponent;
  let fixture: ComponentFixture<IfDJtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfDJtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfDJtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
