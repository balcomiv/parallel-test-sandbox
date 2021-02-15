import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvSEwComponent } from './kv-sew.component';

describe('KvSEwComponent', () => {
  let component: KvSEwComponent;
  let fixture: ComponentFixture<KvSEwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvSEwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KvSEwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
