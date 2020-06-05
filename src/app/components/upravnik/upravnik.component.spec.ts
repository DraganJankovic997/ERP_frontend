import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpravnikComponent } from './upravnik.component';

describe('UpravnikComponent', () => {
  let component: UpravnikComponent;
  let fixture: ComponentFixture<UpravnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpravnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpravnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
