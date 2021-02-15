import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JbVUwComponent } from './jb-vuw.component';

describe('JbVUwComponent', () => {
  let component: JbVUwComponent;
  let fixture: ComponentFixture<JbVUwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JbVUwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JbVUwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
