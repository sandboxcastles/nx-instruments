import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Instrument } from '@instruments/api-interfaces';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Ports } from '../../config/ports';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
	//TODO: update this to be more correct
	private API_INSTRUMENT_URL = `http://localhost:${Ports.apiPort}/api`;
	private MODEL = 'instruments';

  constructor(private http: HttpClient) { }

	getInstruments(): Observable<Instrument[]> {
		// Make Data call to next api here.
		// return of([]);
		return this.http.get<Instrument[]>(this.getUrl());
	}

	createInstrument(instrument: Instrument): Observable<Instrument> {
		// const newInstrument: Instrument = {
		// 	...instrument,
		// 	id: uuidv4()
		// }
		// return of(newInstrument);
		return this.http.post<Instrument>(this.getUrl(), instrument);
	}

	updateInstrument(id: string, instrument: Instrument): Observable<Instrument> {
		// return of({...instrument, id});
		return this.http.put<Instrument>(`${this.getUrlWithId(id)}`, instrument);
	}

	deleteInstrument(id: string): Observable<{ id: string }> {
		// return of({ id });
		return this.http.delete<{ id: string }>(`${this.getUrlWithId(id)}`);
	}

	private getUrl() {
		return `${this.API_INSTRUMENT_URL}/${this.MODEL}`;
	}

	private getUrlWithId(id: string): string {
		return `${this.getUrl()}/${id}`;
	}
}
