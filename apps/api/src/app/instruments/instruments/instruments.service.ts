import { Instrument } from '@instruments/api-interfaces';
import { HttpService, Injectable } from '@nestjs/common';
import { from, Observable, of } from 'rxjs';
import { map, mapTo, tap } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { AxiosResponse } from 'axios';

// const initialInstruments = [{ id: uuidv4(), title: 'Tenor Sax', type: InstrumentType.Woodwind }, { id: uuidv4(), title: 'PRS Custom Limited 22', type: InstrumentType.String}];

@Injectable()
export class InstrumentsService {
	constructor(private http: HttpService) {}
	instruments: Instrument[];
	getInstruments(): Observable<Instrument[]> {
		return this.getData(this.http.get('http://localhost:3000/instruments'));
	}
	getInstrument(id: string): Observable<Instrument> {
		return this.getData(this.http.get(`http://localhost:3000/instruments/${id}`));
	}
	createInstrument(instrument: Instrument): Observable<Instrument> {
		const newInstrument: Instrument = {
			...instrument,
			id: uuidv4()
		};
		this.http.get('').pipe(map(res => res.data))
		return this.getData<Instrument>(this.http.post('http://localhost:3000/instruments', newInstrument));
	}
	//TODO: Not the best way to do this, probably...
	updateInstrument(id: string, instrument: Instrument): Observable<Instrument> {
		return this.getData(this.http.put(`http://localhost:3000/instruments/${id}`, instrument));
	}
	deleteInstrument(id: string): Observable<{ id: string }> {
		return this.getData(this.http.delete(`http://localhost:3000/instruments/${id}`)).pipe(mapTo({ id }));
	}

	private getData<T>(res$: Observable<AxiosResponse<T>>): Observable<T> {
		return res$.pipe(map(res => res.data));
	}
}
