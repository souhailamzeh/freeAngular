import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BountysComponent } from './bountys.component';

describe('BountysComponent', () => {
  let component: BountysComponent;
  let fixture: ComponentFixture<BountysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BountysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BountysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
