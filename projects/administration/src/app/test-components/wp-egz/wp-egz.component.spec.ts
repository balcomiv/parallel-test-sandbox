import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpEgzComponent } from './wp-egz.component';

describe('WpEgzComponent', () => {
  let component: WpEgzComponent;
  let fixture: ComponentFixture<WpEgzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpEgzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WpEgzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
