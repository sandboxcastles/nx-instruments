import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { InstrumentEffects } from './instrument.effects';
import * as InstrumentActions from './instrument.actions';

describe('InstrumentEffects', () => {
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
      actions = hot('-a-|', { a: InstrumentActions.init() });

      const expected = hot('-a-|', {
        a: InstrumentActions.loadInstrumentSuccess({ instrument: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
