import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPgMOComponent } from './epg-mo.component';

describe('EPgMOComponent', () => {
  let component: EPgMOComponent;
  let fixture: ComponentFixture<EPgMOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EPgMOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EPgMOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
