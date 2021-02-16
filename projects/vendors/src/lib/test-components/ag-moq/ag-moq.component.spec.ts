import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgMOQComponent } from './ag-moq.component';

describe('AgMOQComponent', () => {
  let component: AgMOQComponent;
  let fixture: ComponentFixture<AgMOQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgMOQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgMOQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
