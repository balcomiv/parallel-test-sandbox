import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FKTUAComponent } from './f-ktua.component';

describe('FKTUAComponent', () => {
  let component: FKTUAComponent;
  let fixture: ComponentFixture<FKTUAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FKTUAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FKTUAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
