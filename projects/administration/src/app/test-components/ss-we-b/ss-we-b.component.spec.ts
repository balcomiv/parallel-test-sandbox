import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsWeBComponent } from './ss-we-b.component';

describe('SsWeBComponent', () => {
  let component: SsWeBComponent;
  let fixture: ComponentFixture<SsWeBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsWeBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsWeBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
