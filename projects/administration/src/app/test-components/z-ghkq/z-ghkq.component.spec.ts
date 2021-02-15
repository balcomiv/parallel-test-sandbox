import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZGHkqComponent } from './z-ghkq.component';

describe('ZGHkqComponent', () => {
  let component: ZGHkqComponent;
  let fixture: ComponentFixture<ZGHkqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZGHkqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZGHkqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
