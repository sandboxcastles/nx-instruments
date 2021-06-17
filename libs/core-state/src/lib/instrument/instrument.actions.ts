import { createAction, props } from '@ngrx/store';
import { InstrumentEntity } from './instrument.models';

export const init = createAction('[Instrument Page] Init');

export const loadInstrumentSuccess = createAction(
  '[Instrument/API] Load Instrument Success',
  props<{ instrument: InstrumentEntity[] }>()
);

export const loadInstrumentFailure = createAction(
  '[Instrument/API] Load Instrument Failure',
  props<{ error: any }>()
);
