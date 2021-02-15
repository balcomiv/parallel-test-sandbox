import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuCNkComponent } from './su-cnk.component';

describe('SuCNkComponent', () => {
  let component: SuCNkComponent;
  let fixture: ComponentFixture<SuCNkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuCNkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuCNkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
