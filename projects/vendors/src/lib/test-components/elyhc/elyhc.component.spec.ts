import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELYHCComponent } from './elyhc.component';

describe('ELYHCComponent', () => {
  let component: ELYHCComponent;
  let fixture: ComponentFixture<ELYHCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELYHCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ELYHCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
