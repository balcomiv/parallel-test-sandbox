import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrqlDComponent } from './grql-d.component';

describe('GrqlDComponent', () => {
  let component: GrqlDComponent;
  let fixture: ComponentFixture<GrqlDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrqlDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrqlDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
