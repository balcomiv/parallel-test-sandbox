import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfTeQComponent } from './pf-te-q.component';

describe('PfTeQComponent', () => {
  let component: PfTeQComponent;
  let fixture: ComponentFixture<PfTeQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfTeQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfTeQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
