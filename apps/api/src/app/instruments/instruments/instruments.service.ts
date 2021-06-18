import { Instrument, InstrumentType } from '@instruments/api-interfaces';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

const initialInstruments = [{ id: uuidv4(), title: 'Tenor Sax', type: InstrumentType.Woodwind }, { id: uuidv4(), title: 'PRS Custom Limited 22', type: InstrumentType.String}];

@Injectable()
export class InstrumentsService {
	instruments = initialInstruments;
	getInstruments(): Instrument[] {
		return this.instruments;
	}
	getInstrument(id: string): Instrument {
		return this.instruments.find(instrument => instrument.id === id);
	}
	createInstrument(instrument: Instrument): Instrument {
		const newInstrument: Instrument = {
			...instrument,
			id: uuidv4()
		};
		this.instruments = [...this.instruments, newInstrument];
		return newInstrument;
	}
	//TODO: Not the best way to do this, probably...
	updateInstrument(id: string, instrument: Instrument): Instrument {
		const existingInstrumentIndex = this.instruments.findIndex(ins => ins.id === id);
		if (existingInstrumentIndex > -1) {
			const existingInstrument = {...this.instruments[existingInstrumentIndex], ...instrument, id};
			this.instruments[existingInstrumentIndex] = existingInstrument;
			return existingInstrument;
		}
		return null;
	}
	deleteInstrument(id: string): { id: string; } {
		const filteredInstruments = this.instruments.filter(instrument => instrument.id !== id);
		if (filteredInstruments.length === this.instruments.length) {
			return null;
		}
		this.instruments = filteredInstruments;
		return { id };
	}
}
