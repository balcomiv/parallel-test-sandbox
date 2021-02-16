import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TgNOiComponent } from './tg-noi.component';

describe('TgNOiComponent', () => {
  let component: TgNOiComponent;
  let fixture: ComponentFixture<TgNOiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TgNOiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TgNOiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
