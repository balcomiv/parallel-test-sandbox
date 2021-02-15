import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBucDComponent } from './sbuc-d.component';

describe('SBucDComponent', () => {
  let component: SBucDComponent;
  let fixture: ComponentFixture<SBucDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SBucDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SBucDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
