import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HnKsbComponent } from './hn-ksb.component';

describe('HnKsbComponent', () => {
  let component: HnKsbComponent;
  let fixture: ComponentFixture<HnKsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HnKsbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HnKsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
