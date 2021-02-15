import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPveJComponent } from './upve-j.component';

describe('UPveJComponent', () => {
  let component: UPveJComponent;
  let fixture: ComponentFixture<UPveJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UPveJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UPveJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
