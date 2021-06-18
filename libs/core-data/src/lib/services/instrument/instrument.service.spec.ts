import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Instrument } from '@instruments/api-interfaces';
import exp = require('node:constants');

import { tap } from 'rxjs/operators';

import { InstrumentService } from './instrument.service';

//TODO: Test each http call in service!!!

describe('InstrumentService', () => {
  let httpTestingController: HttpTestingController;
  let service: InstrumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule]});
		httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(InstrumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

	it('should add a new instrument', (done) => {
		const mock = {} as Instrument;
		service.createInstrument(mock)
			.subscribe((instrument: Instrument) => {
				expect(instrument.title).toBeUndefined();
				expect(instrument.type).toBeUndefined();
				expect(instrument.id).toBeTruthy();
				done();
			});
		httpTestingController.verify();
	})
})
