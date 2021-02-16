import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WzrqAComponent } from './wzrq-a.component';

describe('WzrqAComponent', () => {
  let component: WzrqAComponent;
  let fixture: ComponentFixture<WzrqAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WzrqAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WzrqAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
