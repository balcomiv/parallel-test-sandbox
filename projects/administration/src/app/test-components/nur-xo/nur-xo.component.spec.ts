import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurXoComponent } from './nur-xo.component';

describe('NurXoComponent', () => {
  let component: NurXoComponent;
  let fixture: ComponentFixture<NurXoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurXoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurXoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
