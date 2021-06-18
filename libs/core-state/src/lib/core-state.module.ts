import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootStoreConfig, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromInstruments from './instruments/instruments.reducer';
import { InstrumentEffects } from './instruments/instruments.effects';
import { HttpClientModule } from '@angular/common/http';
import { CoreDataModule } from '@instruments/core-data';
import { reducers } from '.';

const STORE_NAME = 'instruments-store';
const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictActionSerializability: true,
    strictStateImmutability: true,
    strictStateSerializability: true,
  },
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(
      reducers,
			storeConfig
    ),
    EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({ maxAge: 25, name: STORE_NAME }),
    StoreModule.forFeature(
      fromInstruments.INSTRUMENTS_FEATURE_KEY,
      fromInstruments.reducer
    ),
    EffectsModule.forFeature([InstrumentEffects]),
		HttpClientModule,
		CoreDataModule
  ],
})
export class CoreStateModule {}
