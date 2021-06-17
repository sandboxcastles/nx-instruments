import { InstrumentEntity } from './instrument.models';
import {
  instrumentAdapter,
  InstrumentPartialState,
  initialState,
} from './instrument.reducer';
import * as InstrumentSelectors from './instrument.selectors';

describe('Instrument Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getInstrumentId = (it: InstrumentEntity) => it.id;
  const createInstrumentEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as InstrumentEntity);

  let state: InstrumentPartialState;

  beforeEach(() => {
    state = {
      instrument: instrumentAdapter.setAll(
        [
          createInstrumentEntity('PRODUCT-AAA'),
          createInstrumentEntity('PRODUCT-BBB'),
          createInstrumentEntity('PRODUCT-CCC'),
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

  describe('Instrument Selectors', () => {
    it('getAllInstrument() should return the list of Instrument', () => {
      const results = InstrumentSelectors.getAllInstrument(state);
      const selId = getInstrumentId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = InstrumentSelectors.getSelected(state) as InstrumentEntity;
      const selId = getInstrumentId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getInstrumentLoaded() should return the current 'loaded' status", () => {
      const result = InstrumentSelectors.getInstrumentLoaded(state);

      expect(result).toBe(true);
    });

    it("getInstrumentError() should return the current 'error' state", () => {
      const result = InstrumentSelectors.getInstrumentError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
