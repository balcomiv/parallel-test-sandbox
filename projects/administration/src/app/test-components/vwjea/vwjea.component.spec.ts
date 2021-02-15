import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VWjeaComponent } from './vwjea.component';

describe('VWjeaComponent', () => {
  let component: VWjeaComponent;
  let fixture: ComponentFixture<VWjeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VWjeaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VWjeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
