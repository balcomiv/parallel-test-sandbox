import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NFDBIComponent } from './n-fdbi.component';

describe('NFDBIComponent', () => {
  let component: NFDBIComponent;
  let fixture: ComponentFixture<NFDBIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NFDBIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NFDBIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
