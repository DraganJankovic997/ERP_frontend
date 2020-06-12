import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlijentEditComponent } from './klijent-edit.component';

describe('KlijentEditComponent', () => {
  let component: KlijentEditComponent;
  let fixture: ComponentFixture<KlijentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlijentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlijentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
