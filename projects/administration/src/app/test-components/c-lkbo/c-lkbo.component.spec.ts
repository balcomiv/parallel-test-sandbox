import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLKBoComponent } from './c-lkbo.component';

describe('CLKBoComponent', () => {
  let component: CLKBoComponent;
  let fixture: ComponentFixture<CLKBoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CLKBoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CLKBoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
