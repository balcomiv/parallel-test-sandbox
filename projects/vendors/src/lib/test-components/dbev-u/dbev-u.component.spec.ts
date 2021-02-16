import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBevUComponent } from './dbev-u.component';

describe('DBevUComponent', () => {
  let component: DBevUComponent;
  let fixture: ComponentFixture<DBevUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DBevUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DBevUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
