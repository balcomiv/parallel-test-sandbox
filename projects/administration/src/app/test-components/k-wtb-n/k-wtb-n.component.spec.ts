import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KWtbNComponent } from './k-wtb-n.component';

describe('KWtbNComponent', () => {
  let component: KWtbNComponent;
  let fixture: ComponentFixture<KWtbNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KWtbNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KWtbNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
