import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopostsComponent } from './autoposts.component';

describe('AutopostsComponent', () => {
  let component: AutopostsComponent;
  let fixture: ComponentFixture<AutopostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutopostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutopostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
