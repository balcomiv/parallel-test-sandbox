import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JIxxwComponent } from './j-ixxw.component';

describe('JIxxwComponent', () => {
  let component: JIxxwComponent;
  let fixture: ComponentFixture<JIxxwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JIxxwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JIxxwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
