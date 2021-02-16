import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbNuUComponent } from './db-nu-u.component';

describe('DbNuUComponent', () => {
  let component: DbNuUComponent;
  let fixture: ComponentFixture<DbNuUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbNuUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbNuUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
