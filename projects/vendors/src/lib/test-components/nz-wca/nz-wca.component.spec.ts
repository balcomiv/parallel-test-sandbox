import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzWCaComponent } from './nz-wca.component';

describe('NzWCaComponent', () => {
  let component: NzWCaComponent;
  let fixture: ComponentFixture<NzWCaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NzWCaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NzWCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
