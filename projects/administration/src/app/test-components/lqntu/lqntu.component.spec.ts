import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LqntuComponent } from './lqntu.component';

describe('LqntuComponent', () => {
  let component: LqntuComponent;
  let fixture: ComponentFixture<LqntuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LqntuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LqntuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
