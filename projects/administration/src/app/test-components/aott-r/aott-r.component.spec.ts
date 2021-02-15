import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AottRComponent } from './aott-r.component';

describe('AottRComponent', () => {
  let component: AottRComponent;
  let fixture: ComponentFixture<AottRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AottRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AottRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
