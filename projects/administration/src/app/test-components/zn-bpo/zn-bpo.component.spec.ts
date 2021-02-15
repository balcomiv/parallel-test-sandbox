import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZnBPoComponent } from './zn-bpo.component';

describe('ZnBPoComponent', () => {
  let component: ZnBPoComponent;
  let fixture: ComponentFixture<ZnBPoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZnBPoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZnBPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
