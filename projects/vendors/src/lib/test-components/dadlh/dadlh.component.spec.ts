import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAdlhComponent } from './dadlh.component';

describe('DAdlhComponent', () => {
  let component: DAdlhComponent;
  let fixture: ComponentFixture<DAdlhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAdlhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DAdlhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
