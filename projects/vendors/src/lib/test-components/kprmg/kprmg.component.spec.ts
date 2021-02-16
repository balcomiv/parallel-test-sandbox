import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KprmgComponent } from './kprmg.component';

describe('KprmgComponent', () => {
  let component: KprmgComponent;
  let fixture: ComponentFixture<KprmgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KprmgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KprmgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
