import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MKPhKComponent } from './mkph-k.component';

describe('MKPhKComponent', () => {
  let component: MKPhKComponent;
  let fixture: ComponentFixture<MKPhKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MKPhKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MKPhKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
