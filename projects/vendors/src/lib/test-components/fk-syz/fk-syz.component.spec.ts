import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FkSYZComponent } from './fk-syz.component';

describe('FkSYZComponent', () => {
  let component: FkSYZComponent;
  let fixture: ComponentFixture<FkSYZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FkSYZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FkSYZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
