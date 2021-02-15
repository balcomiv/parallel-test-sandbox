import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RwSwlComponent } from './rw-swl.component';

describe('RwSwlComponent', () => {
  let component: RwSwlComponent;
  let fixture: ComponentFixture<RwSwlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RwSwlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RwSwlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
