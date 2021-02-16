import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZPrGGComponent } from './zpr-gg.component';

describe('ZPrGGComponent', () => {
  let component: ZPrGGComponent;
  let fixture: ComponentFixture<ZPrGGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZPrGGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZPrGGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
