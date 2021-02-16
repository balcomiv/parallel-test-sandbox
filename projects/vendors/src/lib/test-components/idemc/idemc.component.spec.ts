import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDEmcComponent } from './idemc.component';

describe('IDEmcComponent', () => {
  let component: IDEmcComponent;
  let fixture: ComponentFixture<IDEmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IDEmcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IDEmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
