import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GAMnSComponent } from './gamn-s.component';

describe('GAMnSComponent', () => {
  let component: GAMnSComponent;
  let fixture: ComponentFixture<GAMnSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GAMnSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GAMnSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
