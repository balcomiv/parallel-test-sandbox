import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GgiVkComponent } from './ggi-vk.component';

describe('GgiVkComponent', () => {
  let component: GgiVkComponent;
  let fixture: ComponentFixture<GgiVkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GgiVkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GgiVkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
