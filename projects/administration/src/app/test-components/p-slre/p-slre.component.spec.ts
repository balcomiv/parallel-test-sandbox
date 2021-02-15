import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSLReComponent } from './p-slre.component';

describe('PSLReComponent', () => {
  let component: PSLReComponent;
  let fixture: ComponentFixture<PSLReComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PSLReComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PSLReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
