import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DEKxKComponent } from './dekx-k.component';

describe('DEKxKComponent', () => {
  let component: DEKxKComponent;
  let fixture: ComponentFixture<DEKxKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DEKxKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DEKxKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
