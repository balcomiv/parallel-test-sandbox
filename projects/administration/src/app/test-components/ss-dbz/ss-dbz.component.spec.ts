import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsDBZComponent } from './ss-dbz.component';

describe('SsDBZComponent', () => {
  let component: SsDBZComponent;
  let fixture: ComponentFixture<SsDBZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsDBZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsDBZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
