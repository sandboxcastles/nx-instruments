import { Get, Injectable, Param } from '@nestjs/common';
import { Instrument } from '@instruments/api-interfaces';

const instruments: Instrument[] = [];

@Injectable()
export class AppService {
	getInstruments(): Instrument[] {
		return instruments;
	}

	getInstrument(id: string): Instrument {
		return instruments.find(instrument => instrument.id === id);
	}
}
