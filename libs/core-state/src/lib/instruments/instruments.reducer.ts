import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as InstrumentsActions from './instruments.actions';
import { InstrumentEntity } from './instruments.models';
import { Instrument } from '@instruments/api-interfaces';

export const INSTRUMENTS_FEATURE_KEY = 'instrument';

export interface InstrumentsState extends EntityState<Instrument> {
  selectedId?: string | number; // which Instrument record has been selected
  loaded: boolean; // has the Instrument list been loaded
  error?: string | null; // last known error (if any)
}

export interface InstrumentsPartialState {
  readonly [INSTRUMENTS_FEATURE_KEY]: InstrumentsState;
}

export const instrumentsAdapter: EntityAdapter<Instrument> = createEntityAdapter<Instrument>();

export const initialState: InstrumentsState = instrumentsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const onFailure = (state: InstrumentsState, { error }: any) => ({ ...state, error });

export const instrumentsReducer = createReducer(
  initialState,
  on(InstrumentsActions.init, (state) => ({ ...state, loaded: false, error: null, })),
	on(InstrumentsActions.loadInstruments, (state) => ({ ...state, loaded: false, error: null })),
  on(InstrumentsActions.loadInstrumentsSuccess, (state, { instruments }) => instrumentsAdapter.setAll(instruments, { ...state, loaded: true })),
  on(InstrumentsActions.loadInstrumentsFailure, onFailure),
	on(InstrumentsActions.selectInstrument, (state, { selectedId }) => ({ ...state, selectedId })),
	on(InstrumentsActions.createInstrumentSuccess, (state, { instrument }) => instrumentsAdapter.addOne(instrument, state)),
	on(InstrumentsActions.createInstrumentFailure, onFailure),
	on(InstrumentsActions.updateInstrumentSuccess, (state, { instrument }) => instrumentsAdapter.updateOne({ id: instrument.id as string, changes: instrument }, state)),
	on(InstrumentsActions.updateInstrumentFailure, onFailure),
	on(InstrumentsActions.deleteInstrumentSuccess, (state, { id }) => instrumentsAdapter.removeOne(id, state)),
	on(InstrumentsActions.deleteInstrumentFailure, onFailure),
);

export function reducer(state: InstrumentsState | undefined, action: Action) {
  return instrumentsReducer(state, action);
}
