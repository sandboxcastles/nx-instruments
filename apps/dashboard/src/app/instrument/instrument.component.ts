import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Instrument, InstrumentType } from '@instruments/api-interfaces';

import { InstrumentsFacade } from '@instruments/core-state';
import { Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'instruments-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss']
})
export class InstrumentComponent implements OnDestroy, OnInit {
	destroy$ = new Subject();
	formBuilder: FormBuilder;
	formArray: FormArray;
	instruments$ = this.instrumentsStore.allInstruments$.pipe(tap(instruments => this.buildFormArray(instruments)));
	selectedInstrument$ = this.instrumentsStore.selectedInstrument$;

  constructor(public instrumentsStore: InstrumentsFacade) {
		this.formBuilder = new FormBuilder();
		this.formArray = this.formBuilder.array([]);
	}

  ngOnInit(): void {
		this.reset();
		// this.instrumentsStore.mutations$.pipe(takeUntil(this.destroy$)).subscribe(() => this.reset());
  }

	buildFormArray(instruments: Instrument[]): void {
		this.formArray = this.formBuilder.array(instruments);
	}

	deleteInstrument(id: string | null): void {
		if (id) {
			this.instrumentsStore.deleteInstrument(id);
		}
	}

	selectInstrument(instrument: Instrument): void {
		if (instrument.id) {
			this.instrumentsStore.selectInstrument(instrument.id);
		}
	}
	createInstrument(instrument: Instrument): void {
		this.instrumentsStore.createInstrument(instrument);
	}
	updateInstrument(instrument: Instrument): void {
		this.instrumentsStore.updateInstrument(instrument.id as string, instrument);
	}

	reset() {
		this.instrumentsStore.loadInstruments();
		this.instrumentsStore.selectInstrument('');
	}

	ngOnDestroy(): void {
		this.destroy$.next();
	}
}
