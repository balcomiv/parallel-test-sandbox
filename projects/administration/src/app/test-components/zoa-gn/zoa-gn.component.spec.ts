import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoaGnComponent } from './zoa-gn.component';

describe('ZoaGnComponent', () => {
  let component: ZoaGnComponent;
  let fixture: ComponentFixture<ZoaGnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoaGnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoaGnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
