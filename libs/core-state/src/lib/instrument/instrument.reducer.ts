import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as InstrumentActions from './instrument.actions';
import { InstrumentEntity } from './instrument.models';

export const INSTRUMENT_FEATURE_KEY = 'instrument';

export interface State extends EntityState<InstrumentEntity> {
  selectedId?: string | number; // which Instrument record has been selected
  loaded: boolean; // has the Instrument list been loaded
  error?: string | null; // last known error (if any)
}

export interface InstrumentPartialState {
  readonly [INSTRUMENT_FEATURE_KEY]: State;
}

export const instrumentAdapter: EntityAdapter<InstrumentEntity> = createEntityAdapter<InstrumentEntity>();

export const initialState: State = instrumentAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const instrumentReducer = createReducer(
  initialState,
  on(InstrumentActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(InstrumentActions.loadInstrumentSuccess, (state, { instrument }) =>
    instrumentAdapter.setAll(instrument, { ...state, loaded: true })
  ),
  on(InstrumentActions.loadInstrumentFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return instrumentReducer(state, action);
}
