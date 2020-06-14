import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoziloAddComponent } from './vozilo-add.component';

describe('VoziloAddComponent', () => {
  let component: VoziloAddComponent;
  let fixture: ComponentFixture<VoziloAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoziloAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoziloAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
