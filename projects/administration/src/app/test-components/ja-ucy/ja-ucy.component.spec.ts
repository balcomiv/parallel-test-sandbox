import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaUcyComponent } from './ja-ucy.component';

describe('JaUcyComponent', () => {
  let component: JaUcyComponent;
  let fixture: ComponentFixture<JaUcyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaUcyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JaUcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
