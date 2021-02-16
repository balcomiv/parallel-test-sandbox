import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YxHrhComponent } from './yx-hrh.component';

describe('YxHrhComponent', () => {
  let component: YxHrhComponent;
  let fixture: ComponentFixture<YxHrhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YxHrhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YxHrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
