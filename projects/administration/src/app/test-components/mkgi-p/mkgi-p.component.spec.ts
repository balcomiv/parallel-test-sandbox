import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkgiPComponent } from './mkgi-p.component';

describe('MkgiPComponent', () => {
  let component: MkgiPComponent;
  let fixture: ComponentFixture<MkgiPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MkgiPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MkgiPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
