import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Instrument } from '@instruments/api-interfaces';

@Component({
  selector: 'instruments-instrument-create',
  templateUrl: './instrument-create.component.html',
  styleUrls: ['./instrument-create.component.scss']
})
export class InstrumentCreateComponent implements OnInit {
	@Output() instrumentCreated = new EventEmitter<Instrument>(true);
	@ViewChild('titleInput') titleInput: ElementRef<HTMLInputElement>;
	formBuilder: FormBuilder;
	formGroup: FormGroup;
	ngOnInit(): void {
		this.formBuilder = new FormBuilder();
		this.createFormGroup();
	}
	createFormGroup(): void {
		this.formGroup = this.formBuilder.group({
			title: ['', Validators.required],
			type: ['', Validators.required]
		})
	}

	updateType(typeValue: string): void {
			this.formGroup?.get('type')?.patchValue(typeValue);
	}

	addInstrument(): void {
		this.instrumentCreated.emit(this.formGroup.value);
		this.createFormGroup();
		// this.focusElement(this.titleInput);
		this.focusElement(this.titleInput);
	}

	focusElement(input: ElementRef<HTMLElement>): void {
		input?.nativeElement.focus();
	}
}
