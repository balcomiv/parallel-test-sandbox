import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KDVzKComponent } from './k-dvz-k.component';

describe('KDVzKComponent', () => {
  let component: KDVzKComponent;
  let fixture: ComponentFixture<KDVzKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KDVzKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KDVzKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
