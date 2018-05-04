import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GregistrationComponent } from './gregistration.component';

describe('GregistrationComponent', () => {
  let component: GregistrationComponent;
  let fixture: ComponentFixture<GregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
