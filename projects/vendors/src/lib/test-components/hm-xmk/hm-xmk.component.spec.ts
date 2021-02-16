import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmXMKComponent } from './hm-xmk.component';

describe('HmXMKComponent', () => {
  let component: HmXMKComponent;
  let fixture: ComponentFixture<HmXMKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmXMKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HmXMKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
