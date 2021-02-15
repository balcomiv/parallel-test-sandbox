import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PERaXComponent } from './pera-x.component';

describe('PERaXComponent', () => {
  let component: PERaXComponent;
  let fixture: ComponentFixture<PERaXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PERaXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PERaXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
