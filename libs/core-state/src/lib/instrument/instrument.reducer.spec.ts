import { InstrumentEntity } from './instrument.models';
import * as InstrumentActions from './instrument.actions';
import { State, initialState, reducer } from './instrument.reducer';

describe('Instrument Reducer', () => {
  const createInstrumentEntity = (id: string, name = ''): InstrumentEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Instrument actions', () => {
    it('loadInstrumentSuccess should return set the list of known Instrument', () => {
      const instrument = [
        createInstrumentEntity('PRODUCT-AAA'),
        createInstrumentEntity('PRODUCT-zzz'),
      ];
      const action = InstrumentActions.loadInstrumentSuccess({ instrument });

      const result: State = reducer(initialState, action);

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
