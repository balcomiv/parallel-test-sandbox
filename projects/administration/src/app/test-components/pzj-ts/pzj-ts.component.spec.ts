import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PZjTsComponent } from './pzj-ts.component';

describe('PZjTsComponent', () => {
  let component: PZjTsComponent;
  let fixture: ComponentFixture<PZjTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PZjTsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PZjTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
