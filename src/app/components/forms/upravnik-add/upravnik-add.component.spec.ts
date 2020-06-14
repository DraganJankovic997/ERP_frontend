import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpravnikAddComponent } from './upravnik-add.component';

describe('UpravnikAddComponent', () => {
  let component: UpravnikAddComponent;
  let fixture: ComponentFixture<UpravnikAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpravnikAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpravnikAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
