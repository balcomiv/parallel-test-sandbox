import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbAumComponent } from './sb-aum.component';

describe('SbAumComponent', () => {
  let component: SbAumComponent;
  let fixture: ComponentFixture<SbAumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbAumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbAumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
