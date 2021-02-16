import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxkNdComponent } from './rxk-nd.component';

describe('RxkNdComponent', () => {
  let component: RxkNdComponent;
  let fixture: ComponentFixture<RxkNdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxkNdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxkNdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
