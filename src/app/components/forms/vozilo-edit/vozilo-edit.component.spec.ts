import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoziloEditComponent } from './vozilo-edit.component';

describe('VoziloEditComponent', () => {
  let component: VoziloEditComponent;
  let fixture: ComponentFixture<VoziloEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoziloEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoziloEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
