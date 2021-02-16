import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtevUComponent } from './ntev-u.component';

describe('NtevUComponent', () => {
  let component: NtevUComponent;
  let fixture: ComponentFixture<NtevUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtevUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NtevUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
