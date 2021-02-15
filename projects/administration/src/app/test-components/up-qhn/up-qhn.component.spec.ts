import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpQHnComponent } from './up-qhn.component';

describe('UpQHnComponent', () => {
  let component: UpQHnComponent;
  let fixture: ComponentFixture<UpQHnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpQHnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpQHnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
