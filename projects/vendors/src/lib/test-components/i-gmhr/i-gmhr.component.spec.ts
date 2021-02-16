import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IGMhrComponent } from './i-gmhr.component';

describe('IGMhrComponent', () => {
  let component: IGMhrComponent;
  let fixture: ComponentFixture<IGMhrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IGMhrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IGMhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
