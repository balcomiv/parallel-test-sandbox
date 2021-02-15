import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwxulComponent } from './cwxul.component';

describe('CwxulComponent', () => {
  let component: CwxulComponent;
  let fixture: ComponentFixture<CwxulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CwxulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CwxulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
