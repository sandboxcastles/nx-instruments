import * as InstrumentsActions from './instruments.actions';
import { InstrumentsState, initialState, reducer } from './instruments.reducer';
import { Instrument } from '@instruments/api-interfaces';

describe('Instruments Reducer', () => {
  const createInstrument = (id: string): Instrument => ({
    id,
    title: 'mock'
  }) as Instrument;

  describe('valid Instruments actions', () => {
    it('loadInstrumentsSuccess should return set the list of known Instruments', () => {
      const instruments = [
        createInstrument('PRODUCT-AAA'),
        createInstrument('PRODUCT-zzz'),
      ];
      const action = InstrumentsActions.loadInstrumentsSuccess({ instruments });

      const result: InstrumentsState = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
