import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereventRegistrationComponent } from './userevent-registration.component';

describe('UsereventRegistrationComponent', () => {
  let component: UsereventRegistrationComponent;
  let fixture: ComponentFixture<UsereventRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsereventRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsereventRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
