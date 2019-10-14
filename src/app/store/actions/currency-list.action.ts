import { Action } from '@ngrx/store';

import { CurrencyList } from '../../models/currency-list.model';

// Get Currenct List
export const GET_CURRENCY_LIST = '[APP] Get Currency List';
export const GET_CURRENCY_LIST_FAIL = '[APP] Get Currency List Fail';
export const GET_CURRENCY_LIST_SUCCESS = '[APP] Get Currency List Success';

export class GetCurrencyList implements Action {
    readonly type = GET_CURRENCY_LIST;
}

export class GetCurrencyListFail implements Action {
    readonly type = GET_CURRENCY_LIST_FAIL;
    constructor(public playload: any) { }
}

export class GetCurrencyListSuccess implements Action {
    readonly type = GET_CURRENCY_LIST_SUCCESS;
    constructor(public playload: CurrencyList) { }
}

export type CURRENCYLISTACTION = GetCurrencyList | GetCurrencyListFail | GetCurrencyListSuccess;
