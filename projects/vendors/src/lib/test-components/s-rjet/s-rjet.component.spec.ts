import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SRjetComponent } from './s-rjet.component';

describe('SRjetComponent', () => {
  let component: SRjetComponent;
  let fixture: ComponentFixture<SRjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SRjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SRjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
