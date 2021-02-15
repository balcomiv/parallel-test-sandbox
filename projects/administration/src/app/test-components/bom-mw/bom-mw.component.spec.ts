import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomMWComponent } from './bom-mw.component';

describe('BomMWComponent', () => {
  let component: BomMWComponent;
  let fixture: ComponentFixture<BomMWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BomMWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BomMWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
