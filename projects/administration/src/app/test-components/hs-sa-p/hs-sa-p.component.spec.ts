import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsSaPComponent } from './hs-sa-p.component';

describe('HsSaPComponent', () => {
  let component: HsSaPComponent;
  let fixture: ComponentFixture<HsSaPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsSaPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsSaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
