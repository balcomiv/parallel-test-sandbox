import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLUghComponent } from './p-lugh.component';

describe('PLUghComponent', () => {
  let component: PLUghComponent;
  let fixture: ComponentFixture<PLUghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PLUghComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PLUghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
