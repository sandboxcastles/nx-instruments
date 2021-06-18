import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { InstrumentEffects } from './instruments.effects';
import * as InstrumentsActions from './instruments.actions';

describe('InstrumentsEffects', () => {
  let actions: Observable<any>;
  let effects: InstrumentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        InstrumentEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(InstrumentEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: InstrumentsActions.init() });

      const expected = hot('-a-|', {
        a: InstrumentsActions.loadInstrumentsSuccess({ instruments: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
