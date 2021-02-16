import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DHTNAComponent } from './d-htna.component';

describe('DHTNAComponent', () => {
  let component: DHTNAComponent;
  let fixture: ComponentFixture<DHTNAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DHTNAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DHTNAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
