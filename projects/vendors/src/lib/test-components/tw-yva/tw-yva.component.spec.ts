import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwYVAComponent } from './tw-yva.component';

describe('TwYVAComponent', () => {
  let component: TwYVAComponent;
  let fixture: ComponentFixture<TwYVAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwYVAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwYVAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
