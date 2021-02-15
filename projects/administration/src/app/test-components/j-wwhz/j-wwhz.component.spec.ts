import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JWWHZComponent } from './j-wwhz.component';

describe('JWWHZComponent', () => {
  let component: JWWHZComponent;
  let fixture: ComponentFixture<JWWHZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JWWHZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JWWHZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
