import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BqKRyComponent } from './bq-kry.component';

describe('BqKRyComponent', () => {
  let component: BqKRyComponent;
  let fixture: ComponentFixture<BqKRyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BqKRyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BqKRyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
