import * as fromCurrencyList from './currency-list.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
    currencyList: fromCurrencyList.CurrencyListState
}

export const reducers: ActionReducerMap<AppState> = {
    currencyList: fromCurrencyList.reducer
}

export const getAppState = createFeatureSelector<AppState>('app');

// Currency List State
export const getCurrencyListState = createSelector(
    getAppState,
    (state: AppState) => state.currencyList
);

export const getCurrentList = createSelector(getCurrencyListState, fromCurrencyList.getCurrentList);
export const getCurrentListLoaded = createSelector(getCurrencyListState, fromCurrencyList.getCurrentListLoaded);
export const getCurrentListLoading = createSelector(getCurrencyListState, fromCurrencyList.getCurrentListLoading);