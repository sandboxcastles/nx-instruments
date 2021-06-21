import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'instruments-form-control-dropdown',
  templateUrl: './form-control-dropdown.component.html',
  styleUrls: ['./form-control-dropdown.component.scss']
})
export class FormControlDropdownComponent implements OnChanges {
	@Input() control: AbstractControl;
	@Input() options: { options: any[], defaultOption?: any } = { options: [] };
	@Output() change = new EventEmitter<string>(true);
	allOptions: any[] = [];

	ngOnChanges(sc: SimpleChanges): void {
		if (sc.options) {
			this.allOptions = this.options.defaultOption ? [this.options.defaultOption, ... this.options.options] : this.options.options;
		}
	}
}
