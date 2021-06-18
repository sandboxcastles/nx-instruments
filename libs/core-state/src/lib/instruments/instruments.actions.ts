import { createAction, props } from '@ngrx/store';
import { InstrumentEntity } from './instruments.models';
import { Instrument } from '@instruments/api-interfaces';

export const init = createAction('[Instruments Page] Init');

export const loadInstruments = createAction(
	'[Instruments] Load Instruments'
);


export const loadInstrumentsSuccess = createAction(
  '[Instruments/API] Load Instruments Success',
  props<{ instruments: Instrument[] }>()
);

export const loadInstrumentsFailure = createAction(
  '[Instruments/API] Load Instruments Failure',
  props<{ error: any }>()
);

export const selectInstrument = createAction(
	'[Instruments] Select Instrument',
	props<{ selectedId: string; }>()
);

export const createInstrument = createAction(
	'[Instruments] Create Instrument',
	props<{ instrument: Instrument }>()
);

export const createInstrumentSuccess = createAction(
	'[Instruments] Create Instrument Success',
	props<{ instrument: Instrument }>()
);

export const createInstrumentFailure = createAction(
	'[Instruments] Create Instrument Failure',
	props<{ error: any }>()
);

export const updateInstrument = createAction(
	'[Instruments] Update Instrument',
	props<{ id: string; instrument: Instrument }>()
);

export const updateInstrumentSuccess = createAction(
	'[Instruments] Update Instrument Success',
	props<{ instrument: Instrument }>()
);

export const updateInstrumentFailure = createAction(
	'[Instruments] Update Instrument Failure',
	props<{ error: any }>()
);

export const deleteInstrument = createAction(
	'[Instruments] Delete Instrument',
	props<{ id: string }>()
);

export const deleteInstrumentSuccess = createAction(
	'[Instruments] Delete Instrument Success',
	props<{ id: string }>()
);

export const deleteInstrumentFailure = createAction(
	'[Instruments] Delete Instrument Failure',
	props<{ error: any }>()
);

