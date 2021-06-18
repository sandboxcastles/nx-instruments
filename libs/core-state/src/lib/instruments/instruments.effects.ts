import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';

import { InstrumentService } from '@instruments/core-data';

import * as InstrumentsFeature from './instruments.reducer';
import * as InstrumentsActions from './instruments.actions';
import { map } from 'rxjs/operators';
import { Instrument, InstrumentType } from '@instruments/api-interfaces';

@Injectable()
export class InstrumentEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InstrumentsActions.init),
      fetch({
        run: () => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return InstrumentsActions.loadInstrumentsSuccess({ instruments: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return InstrumentsActions.loadInstrumentsFailure({ error });
        },
      })
    )
  );

	loadInstruments$ = createEffect(() =>
		this.actions$.pipe(
			ofType(InstrumentsActions.loadInstruments),
			fetch({
				run: () =>
					this.service.getInstruments()
						.pipe(
							map((instruments: Instrument[]) => InstrumentsActions.loadInstrumentsSuccess({ instruments }))
						),
				onError: (_, error) => InstrumentsActions.loadInstrumentsFailure({ error })
			})
			// switchMap(() => this.service.getInstruments()),
			// map((instruments: Instrument[]) => InstrumentsActions.loadInstrumentsSuccess({ instruments })),
			// catchError(error => of(InstrumentsActions.loadInstrumentsFailure({ error })))
		)
	);

	createInstrument$ = createEffect(() =>
			this.actions$.pipe(
				ofType(InstrumentsActions.createInstrument),
				pessimisticUpdate({
					run: ({ instrument }) => this.service.createInstrument(instrument)
						.pipe(
							map((instrument) => InstrumentsActions.createInstrumentSuccess({ instrument }))
						),
						onError: (_, error) => InstrumentsActions.createInstrumentFailure({ error })
				})
			)
	);

	updateInstrument$ = createEffect(() =>
			this.actions$.pipe(
				ofType(InstrumentsActions.updateInstrument),
				pessimisticUpdate({
					run: ({ id, instrument }) => this.service.updateInstrument(id, instrument)
						.pipe(
							map((instrument) => InstrumentsActions.updateInstrumentSuccess({ instrument }))
						),
						onError: (_, error) => InstrumentsActions.updateInstrumentFailure({ error })
				})
			)
	);

	deleteInstrument$ = createEffect(() =>
			this.actions$.pipe(
				ofType(InstrumentsActions.deleteInstrument),
				pessimisticUpdate({
					run: (({ id}) => this.service.deleteInstrument(id)
						.pipe(
							map(({ id }) => InstrumentsActions.deleteInstrumentSuccess({ id })))
						),
						onError: (_, error) => InstrumentsActions.deleteInstrumentFailure({ error })
				})
			)
	);

  constructor(private actions$: Actions, private service: InstrumentService) {}
}
