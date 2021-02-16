import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KkVjZComponent } from './kk-vj-z.component';

describe('KkVjZComponent', () => {
  let component: KkVjZComponent;
  let fixture: ComponentFixture<KkVjZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KkVjZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KkVjZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
