import { Instrument } from '@instruments/api-interfaces';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InstrumentsService } from './instruments.service';

@Controller('instruments')
export class InstrumentsController {
	constructor(private instrumentService: InstrumentsService) {}
	@Get()
	getInstruments(): Instrument[] {
		return this.instrumentService.getInstruments();
	}

	@Get(':id')
	getInstrument(@Param('id') id: string): Instrument {
		return this.instrumentService.getInstrument(id);
	}

	@Post()
	createInstrument(@Body() instrument: Instrument): Instrument {
		return this.instrumentService.createInstrument(instrument);
	}
	@Put(':id')
	updateInstrument(@Param('id') id: string, @Body() instrument: Instrument): Instrument {
		return this.instrumentService.updateInstrument(id, instrument);
	}

	@Delete(':id')
	deleteInstrument(@Param('id') id: string): { id: string; } {
		return this.instrumentService.deleteInstrument(id);
	}
}
