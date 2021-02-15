import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfoIgComponent } from './sfo-ig.component';

describe('SfoIgComponent', () => {
  let component: SfoIgComponent;
  let fixture: ComponentFixture<SfoIgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfoIgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfoIgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
