import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentTypeSelectorComponent } from './instrument-type-selector.component';

describe('InstrumentTypeSelectorComponent', () => {
  let component: InstrumentTypeSelectorComponent;
  let fixture: ComponentFixture<InstrumentTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentTypeSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
