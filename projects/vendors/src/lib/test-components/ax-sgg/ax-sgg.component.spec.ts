import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxSGgComponent } from './ax-sgg.component';

describe('AxSGgComponent', () => {
  let component: AxSGgComponent;
  let fixture: ComponentFixture<AxSGgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxSGgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AxSGgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
