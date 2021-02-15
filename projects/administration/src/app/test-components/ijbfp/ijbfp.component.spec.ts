import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IJBFpComponent } from './ijbfp.component';

describe('IJBFpComponent', () => {
  let component: IJBFpComponent;
  let fixture: ComponentFixture<IJBFpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IJBFpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IJBFpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
