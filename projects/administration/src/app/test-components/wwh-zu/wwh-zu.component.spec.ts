import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwhZUComponent } from './wwh-zu.component';

describe('WwhZUComponent', () => {
  let component: WwhZUComponent;
  let fixture: ComponentFixture<WwhZUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwhZUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WwhZUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
