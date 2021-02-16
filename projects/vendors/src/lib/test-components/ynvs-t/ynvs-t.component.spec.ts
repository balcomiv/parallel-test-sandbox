import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YnvsTComponent } from './ynvs-t.component';

describe('YnvsTComponent', () => {
  let component: YnvsTComponent;
  let fixture: ComponentFixture<YnvsTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YnvsTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YnvsTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
