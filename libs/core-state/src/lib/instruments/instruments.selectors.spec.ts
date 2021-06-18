import { Instrument, InstrumentType } from '@instruments/api-interfaces';
import { initialState, instrumentsAdapter, InstrumentsPartialState } from './instruments.reducer';
import * as InstrumentsSelectors from './instruments.selectors';

const mockInstrument: Instrument = {
	title: 'mock',
	type: InstrumentType.Other
} as Instrument;

describe('Instruments Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getInstrumentId = (instrument: Instrument) => instrument.id;
  const createInstrument = (id: string) =>
    ({
			...mockInstrument,
      id
    } as Instrument);

  let state: InstrumentsPartialState;

  beforeEach(() => {
    state = {
      instrument: instrumentsAdapter.setAll(
        [
          createInstrument('PRODUCT-AAA'),
          createInstrument('PRODUCT-BBB'),
          createInstrument('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Instruments Selectors', () => {
    it('getAllInstruments() should return the list of Instruments', () => {
      const results = InstrumentsSelectors.getAllInstruments(state);
      const selId = getInstrumentId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = InstrumentsSelectors.getSelectedInstrument(state) as Instrument;
      const selId = getInstrumentId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getInstrumentsLoaded() should return the current 'loaded' status", () => {
      const result = InstrumentsSelectors.getInstrumentsLoaded(state);

      expect(result).toBe(true);
    });

    it("getInstrumentsError() should return the current 'error' state", () => {
      const result = InstrumentsSelectors.getInstrumentsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
