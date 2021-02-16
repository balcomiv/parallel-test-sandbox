import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsjDTComponent } from './nsj-dt.component';

describe('NsjDTComponent', () => {
  let component: NsjDTComponent;
  let fixture: ComponentFixture<NsjDTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsjDTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NsjDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
