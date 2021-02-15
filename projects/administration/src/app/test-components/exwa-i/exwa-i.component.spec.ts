import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExwaIComponent } from './exwa-i.component';

describe('ExwaIComponent', () => {
  let component: ExwaIComponent;
  let fixture: ComponentFixture<ExwaIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExwaIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExwaIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
