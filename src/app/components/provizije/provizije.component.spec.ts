import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvizijeComponent } from './provizije.component';

describe('ProvizijeComponent', () => {
  let component: ProvizijeComponent;
  let fixture: ComponentFixture<ProvizijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvizijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvizijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
