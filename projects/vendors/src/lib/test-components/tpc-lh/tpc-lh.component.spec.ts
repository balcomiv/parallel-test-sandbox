import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPcLhComponent } from './tpc-lh.component';

describe('TPcLhComponent', () => {
  let component: TPcLhComponent;
  let fixture: ComponentFixture<TPcLhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TPcLhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TPcLhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
