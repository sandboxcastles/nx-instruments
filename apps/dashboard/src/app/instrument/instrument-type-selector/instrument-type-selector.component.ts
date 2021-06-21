import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'instruments-instrument-type-selector',
  templateUrl: './instrument-type-selector.component.html',
  styleUrls: ['./instrument-type-selector.component.scss']
})
export class InstrumentTypeSelectorComponent {

	@Input() control: AbstractControl;
	@Output() change = new EventEmitter<string>(true);
	options = {
		defaultOption: { text: '-- Select And Instrument Type --', value: '', disabled: true },
		options: [
			{ text: 'Brass', value: 'brass' },
			{ text: 'String', value: 'string' },
			{ text: 'Woodwind', value: 'woodwind' },
			{ text: 'Percussion', value: 'percussion' },
			{ text: 'Other', value: 'other' },
		]
	};

}
