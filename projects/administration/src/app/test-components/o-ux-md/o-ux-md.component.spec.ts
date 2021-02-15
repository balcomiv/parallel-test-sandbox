import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OUxMdComponent } from './o-ux-md.component';

describe('OUxMdComponent', () => {
  let component: OUxMdComponent;
  let fixture: ComponentFixture<OUxMdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OUxMdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OUxMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
