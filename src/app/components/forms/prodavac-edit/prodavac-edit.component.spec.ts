import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdavacEditComponent } from './prodavac-edit.component';

describe('ProdavacEditComponent', () => {
  let component: ProdavacEditComponent;
  let fixture: ComponentFixture<ProdavacEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdavacEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdavacEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
