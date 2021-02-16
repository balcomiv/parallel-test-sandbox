import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KijqIComponent } from './kijq-i.component';

describe('KijqIComponent', () => {
  let component: KijqIComponent;
  let fixture: ComponentFixture<KijqIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KijqIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KijqIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
