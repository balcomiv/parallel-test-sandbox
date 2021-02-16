import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrcwNComponent } from './urcw-n.component';

describe('UrcwNComponent', () => {
  let component: UrcwNComponent;
  let fixture: ComponentFixture<UrcwNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrcwNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrcwNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
