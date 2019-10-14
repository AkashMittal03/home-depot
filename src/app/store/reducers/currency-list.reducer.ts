import * as fromCurrencyList from '../actions/currency-list.action';
import { CurrencyList } from 'src/app/models/currency-list.model';

export interface CurrencyListState {
    data: CurrencyList
}

export const initialState = {
    data: Object.create({}),
};

export function reducer(
    state = initialState,
    action: fromCurrencyList.CURRENCYLISTACTION
): CurrencyListState {
    switch(action.type) {
        case fromCurrencyList.GET_CURRENCY_LIST: {
            return {
                ...state,
            };
        }

        case fromCurrencyList.GET_CURRENCY_LIST_SUCCESS: {
            const data = action.playload;
            return {
                ...state,
                data
            };
        }

        case fromCurrencyList.GET_CURRENCY_LIST_FAIL: {
            return {
                ...state
            };
        }
    }
    return state;
}

export const getCurrentList = (state: CurrencyListState) => state.data;
