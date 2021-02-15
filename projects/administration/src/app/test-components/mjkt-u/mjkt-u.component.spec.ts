import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MJKtUComponent } from './mjkt-u.component';

describe('MJKtUComponent', () => {
  let component: MJKtUComponent;
  let fixture: ComponentFixture<MJKtUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MJKtUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MJKtUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
