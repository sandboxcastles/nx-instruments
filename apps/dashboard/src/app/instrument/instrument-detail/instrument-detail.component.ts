import { EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Instrument } from '@instruments/api-interfaces';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'instruments-instrument-detail',
  templateUrl: './instrument-detail.component.html',
  styleUrls: ['./instrument-detail.component.scss']
})
export class InstrumentDetailComponent implements OnChanges {
	formBuilder: FormBuilder = new FormBuilder();
	formGroup: FormGroup;
	@Input() instrument: Instrument;
	@Output() instrumentUpdated = new EventEmitter<Instrument>(true);
	@Output() instrumentDeleted = new EventEmitter<string | null>(true);

	ngOnChanges(sc: SimpleChanges): void {
		if (sc.instrument) {
			this.initializeForm();
		}
	}

	initializeForm(): void {
		this.formGroup = this.formBuilder.group({
			id: [this.instrument.id, Validators.required],
			title: [this.instrument.title, Validators.required],
			type: [this.instrument.type, Validators.required]
		});
	}

	updateType(typeValue: string): void {
		this.formGroup?.get('type')?.patchValue(typeValue);
		this.formGroup.markAsDirty();
	}
}
