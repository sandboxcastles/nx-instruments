import { Instrument } from '@instruments/api-interfaces';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InstrumentsService } from './instruments.service';

@Controller('instruments')
export class InstrumentsController {
	constructor(private instrumentService: InstrumentsService) {}
	@Get()
	getInstruments(): Observable<Instrument[]> {
		return this.instrumentService.getInstruments();
	}

	@Get(':id')
	getInstrument(@Param('id') id: string): Observable<Instrument> {
		return this.instrumentService.getInstrument(id);
	}

	@Post()
	createInstrument(@Body() instrument: Instrument): Observable<Instrument> {
		return this.instrumentService.createInstrument(instrument);
	}
	@Put(':id')
	updateInstrument(@Param('id') id: string, @Body() instrument: Instrument): Observable<Instrument> {
		return this.instrumentService.updateInstrument(id, instrument);
	}

	@Delete(':id')
	deleteInstrument(@Param('id') id: string): Observable<{ id: string; }> {
		return this.instrumentService.deleteInstrument(id);
	}
}
