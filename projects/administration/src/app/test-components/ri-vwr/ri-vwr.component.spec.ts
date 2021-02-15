import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiVWRComponent } from './ri-vwr.component';

describe('RiVWRComponent', () => {
  let component: RiVWRComponent;
  let fixture: ComponentFixture<RiVWRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiVWRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiVWRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
