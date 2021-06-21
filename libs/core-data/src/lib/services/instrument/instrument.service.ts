import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Instrument } from '@instruments/api-interfaces';
import { Observable } from 'rxjs';
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
		return this.http.get<Instrument[]>(this.getUrl());
	}

	createInstrument(instrument: Instrument): Observable<Instrument> {
		return this.http.post<Instrument>(this.getUrl(), instrument);
	}

	updateInstrument(id: string, instrument: Instrument): Observable<Instrument> {
		return this.http.put<Instrument>(`${this.getUrlWithId(id)}`, instrument);
	}

	deleteInstrument(id: string): Observable<{ id: string }> {
		return this.http.delete<{ id: string }>(`${this.getUrlWithId(id)}`);
	}

	private getUrl() {
		return `${this.API_INSTRUMENT_URL}/${this.MODEL}`;
	}

	private getUrlWithId(id: string): string {
		return `${this.getUrl()}/${id}`;
	}
}
