import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JKURpComponent } from './j-kurp.component';

describe('JKURpComponent', () => {
  let component: JKURpComponent;
  let fixture: ComponentFixture<JKURpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JKURpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JKURpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
