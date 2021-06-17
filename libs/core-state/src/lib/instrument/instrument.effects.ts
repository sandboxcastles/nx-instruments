import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as InstrumentFeature from './instrument.reducer';
import * as InstrumentActions from './instrument.actions';

@Injectable()
export class InstrumentEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InstrumentActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return InstrumentActions.loadInstrumentSuccess({ instrument: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return InstrumentActions.loadInstrumentFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
