import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpravnikEditComponent } from './upravnik-edit.component';

describe('UpravnikEditComponent', () => {
  let component: UpravnikEditComponent;
  let fixture: ComponentFixture<UpravnikEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpravnikEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpravnikEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
