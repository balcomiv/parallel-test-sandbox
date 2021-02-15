import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VwNmSComponent } from './vw-nm-s.component';

describe('VwNmSComponent', () => {
  let component: VwNmSComponent;
  let fixture: ComponentFixture<VwNmSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VwNmSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VwNmSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
