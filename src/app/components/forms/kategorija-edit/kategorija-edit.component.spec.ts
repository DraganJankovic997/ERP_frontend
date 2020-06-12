import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijaEditComponent } from './kategorija-edit.component';

describe('KategorijaEditComponent', () => {
  let component: KategorijaEditComponent;
  let fixture: ComponentFixture<KategorijaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorijaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
