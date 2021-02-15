import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqzwvComponent } from './pqzwv.component';

describe('PqzwvComponent', () => {
  let component: PqzwvComponent;
  let fixture: ComponentFixture<PqzwvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PqzwvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PqzwvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
