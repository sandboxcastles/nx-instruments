import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  INSTRUMENT_FEATURE_KEY,
  State,
  instrumentAdapter,
} from './instrument.reducer';

// Lookup the 'Instrument' feature state managed by NgRx
export const getInstrumentState = createFeatureSelector<State>(
  INSTRUMENT_FEATURE_KEY
);

const { selectAll, selectEntities } = instrumentAdapter.getSelectors();

export const getInstrumentLoaded = createSelector(
  getInstrumentState,
  (state: State) => state.loaded
);

export const getInstrumentError = createSelector(
  getInstrumentState,
  (state: State) => state.error
);

export const getAllInstrument = createSelector(
  getInstrumentState,
  (state: State) => selectAll(state)
);

export const getInstrumentEntities = createSelector(
  getInstrumentState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getInstrumentState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getInstrumentEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
