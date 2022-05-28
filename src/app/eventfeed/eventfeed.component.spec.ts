import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventfeedComponent } from './eventfeed.component';

describe('EventfeedComponent', () => {
  let component: EventfeedComponent;
  let fixture: ComponentFixture<EventfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventfeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
