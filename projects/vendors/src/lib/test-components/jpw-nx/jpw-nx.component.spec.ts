import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpwNxComponent } from './jpw-nx.component';

describe('JpwNxComponent', () => {
  let component: JpwNxComponent;
  let fixture: ComponentFixture<JpwNxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JpwNxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JpwNxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
