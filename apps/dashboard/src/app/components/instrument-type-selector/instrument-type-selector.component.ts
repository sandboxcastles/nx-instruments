import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'instruments-instrument-type-selector',
  templateUrl: './instrument-type-selector.component.html',
  styleUrls: ['./instrument-type-selector.component.scss']
})
export class InstrumentTypeSelectorComponent {
	@Input() control: AbstractControl;
	@Output() change = new EventEmitter<string>(true);
}
