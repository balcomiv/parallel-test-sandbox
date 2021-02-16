import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhywgComponent } from './ahywg.component';

describe('AhywgComponent', () => {
  let component: AhywgComponent;
  let fixture: ComponentFixture<AhywgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhywgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhywgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
