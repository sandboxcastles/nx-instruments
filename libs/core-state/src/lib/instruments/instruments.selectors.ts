import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  INSTRUMENTS_FEATURE_KEY,
  InstrumentsState,
  instrumentsAdapter,
} from './instruments.reducer';

// Lookup the 'Instrument' feature state managed by NgRx
export const getInstrumentsState = createFeatureSelector<InstrumentsState>(
  INSTRUMENTS_FEATURE_KEY
);

const { selectAll, selectEntities } = instrumentsAdapter.getSelectors();

export const getInstrumentsLoaded = createSelector(
  getInstrumentsState,
  (state: InstrumentsState) => state.loaded
);

export const getInstrumentsError = createSelector(
  getInstrumentsState,
  (state: InstrumentsState) => state.error
);

export const getInstrument = (id: string) => createSelector(
	getInstrumentEntities,
	(instrumentEntities) => instrumentEntities[id] ?? undefined
);

export const getAllInstruments = createSelector(
  getInstrumentsState,
  (state: InstrumentsState) => selectAll(state)
);

export const getInstrumentEntities = createSelector(
  getInstrumentsState,
  (state: InstrumentsState) => selectEntities(state)
);

export const getSelectedInstrumentId = createSelector(
  getInstrumentsState,
  (state: InstrumentsState) => state.selectedId
);

export const getSelectedInstrument = createSelector(
  getInstrumentEntities,
  getSelectedInstrumentId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
