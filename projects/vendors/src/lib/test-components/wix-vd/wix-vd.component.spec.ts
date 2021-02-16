import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WIxVDComponent } from './wix-vd.component';

describe('WIxVDComponent', () => {
  let component: WIxVDComponent;
  let fixture: ComponentFixture<WIxVDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WIxVDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WIxVDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
