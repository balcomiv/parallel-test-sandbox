import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClBComponent } from './my-cl-b.component';

describe('MyClBComponent', () => {
  let component: MyClBComponent;
  let fixture: ComponentFixture<MyClBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyClBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
