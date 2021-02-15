import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocBCComponent } from './soc-bc.component';

describe('SocBCComponent', () => {
  let component: SocBCComponent;
  let fixture: ComponentFixture<SocBCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocBCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocBCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
