import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KwbdvComponent } from './kwbdv.component';

describe('KwbdvComponent', () => {
  let component: KwbdvComponent;
  let fixture: ComponentFixture<KwbdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KwbdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KwbdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
