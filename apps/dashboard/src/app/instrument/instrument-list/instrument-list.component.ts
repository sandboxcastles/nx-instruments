import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Instrument } from '@instruments/api-interfaces';

@Component({
  selector: 'instruments-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.scss']
})
export class InstrumentListComponent {
	@Output() instrumentSelected = new EventEmitter<Instrument>(true);
	@Input() instruments: Instrument[];
}
