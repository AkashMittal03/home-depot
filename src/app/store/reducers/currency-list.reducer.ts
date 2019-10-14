import * as fromCurrencyList from '../actions/currency-list.action';
import { CurrencyList } from 'src/app/models/currency-list.model';

export interface CurrencyListState {
    data: CurrencyList,
    loaded: boolean,
    loading: boolean
}

export const initialState = {
    data: Object.create({}),
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromCurrencyList.CURRENCYLISTACTION
): CurrencyListState {
    switch(action.type) {
        case fromCurrencyList.GET_CURRENCY_LIST: {
            return {
                ...state,
                loading: true,
            };
        }

        case fromCurrencyList.GET_CURRENCY_LIST_SUCCESS: {
            const data = action.playload;
            return {
                ...state,
                loading: false,
                loaded: true,
                data
            };
        }

        case fromCurrencyList.GET_CURRENCY_LIST_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
                
            };
        }
    }
    return state;
}

export const getCurrentListLoading = (state: CurrencyListState) => state.loading;
export const getCurrentListLoaded = (state: CurrencyListState) => state.loaded;
export const getCurrentList = (state: CurrencyListState) => state.data;
