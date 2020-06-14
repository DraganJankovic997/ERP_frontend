import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdavacAddComponent } from './prodavac-add.component';

describe('ProdavacAddComponent', () => {
  let component: ProdavacAddComponent;
  let fixture: ComponentFixture<ProdavacAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdavacAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdavacAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
