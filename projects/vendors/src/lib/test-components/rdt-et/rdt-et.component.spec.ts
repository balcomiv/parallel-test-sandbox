import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDtEtComponent } from './rdt-et.component';

describe('RDtEtComponent', () => {
  let component: RDtEtComponent;
  let fixture: ComponentFixture<RDtEtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RDtEtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RDtEtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
