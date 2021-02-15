import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjyMjComponent } from './ujy-mj.component';

describe('UjyMjComponent', () => {
  let component: UjyMjComponent;
  let fixture: ComponentFixture<UjyMjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UjyMjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UjyMjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
