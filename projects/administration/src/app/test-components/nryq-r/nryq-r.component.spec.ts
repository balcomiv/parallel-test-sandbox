import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NRYqRComponent } from './nryq-r.component';

describe('NRYqRComponent', () => {
  let component: NRYqRComponent;
  let fixture: ComponentFixture<NRYqRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NRYqRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NRYqRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
