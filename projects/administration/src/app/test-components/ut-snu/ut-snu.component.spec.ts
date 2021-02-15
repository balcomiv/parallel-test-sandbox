import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtSNuComponent } from './ut-snu.component';

describe('UtSNuComponent', () => {
  let component: UtSNuComponent;
  let fixture: ComponentFixture<UtSNuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtSNuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtSNuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
