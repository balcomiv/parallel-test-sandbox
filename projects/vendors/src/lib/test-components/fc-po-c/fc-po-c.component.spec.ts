import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcPoCComponent } from './fc-po-c.component';

describe('FcPoCComponent', () => {
  let component: FcPoCComponent;
  let fixture: ComponentFixture<FcPoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcPoCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FcPoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
