import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OUAanComponent } from './ouaan.component';

describe('OUAanComponent', () => {
  let component: OUAanComponent;
  let fixture: ComponentFixture<OUAanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OUAanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OUAanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
