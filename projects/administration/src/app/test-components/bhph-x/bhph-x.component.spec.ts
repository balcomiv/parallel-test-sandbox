import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhphXComponent } from './bhph-x.component';

describe('BhphXComponent', () => {
  let component: BhphXComponent;
  let fixture: ComponentFixture<BhphXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhphXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BhphXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
