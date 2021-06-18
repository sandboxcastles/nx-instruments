import { Params } from "@angular/router";
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from "@ngrx/store";
import * as fromInstruments from './instruments/instruments.reducer';

export interface RouterStateUrl {
	url: string;
	queryParams: Params;
	params: Params;
}

export interface AppState {
	router: fromRouter.RouterReducerState<RouterStateUrl>;
	[fromInstruments.INSTRUMENTS_FEATURE_KEY]: fromInstruments.InstrumentsState;
}

export const reducers: ActionReducerMap<AppState> = {
	router: fromRouter.routerReducer,
	[fromInstruments.INSTRUMENTS_FEATURE_KEY]: fromInstruments.instrumentsReducer
}
