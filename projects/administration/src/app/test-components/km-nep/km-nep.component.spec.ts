import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmNEpComponent } from './km-nep.component';

describe('KmNEpComponent', () => {
  let component: KmNEpComponent;
  let fixture: ComponentFixture<KmNEpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KmNEpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KmNEpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
