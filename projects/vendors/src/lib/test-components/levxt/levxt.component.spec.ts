import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LEVxtComponent } from './levxt.component';

describe('LEVxtComponent', () => {
  let component: LEVxtComponent;
  let fixture: ComponentFixture<LEVxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LEVxtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LEVxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
