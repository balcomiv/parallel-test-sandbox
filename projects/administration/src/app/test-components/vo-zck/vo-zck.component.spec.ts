import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoZCKComponent } from './vo-zck.component';

describe('VoZCKComponent', () => {
  let component: VoZCKComponent;
  let fixture: ComponentFixture<VoZCKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoZCKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoZCKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
