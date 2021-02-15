import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GyoNeComponent } from './gyo-ne.component';

describe('GyoNeComponent', () => {
  let component: GyoNeComponent;
  let fixture: ComponentFixture<GyoNeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GyoNeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GyoNeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
