import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbgTgComponent } from './fbg-tg.component';

describe('FbgTgComponent', () => {
  let component: FbgTgComponent;
  let fixture: ComponentFixture<FbgTgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbgTgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbgTgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
