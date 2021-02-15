import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwpuRComponent } from './swpu-r.component';

describe('SwpuRComponent', () => {
  let component: SwpuRComponent;
  let fixture: ComponentFixture<SwpuRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwpuRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwpuRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
