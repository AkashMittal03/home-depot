import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import * as currencyListActions from '../actions/currency-list.action';
import * as fromServices from '../../services/exchange-rate.service';
import { of } from 'rxjs';

@Injectable()
export class CurrencyListEffects {

    constructor(
        private actions$: Actions,
        private exchangeRateService: fromServices.ExchangeRateService
    ) {}

    // Effect returns the success/failure action based on response
    @Effect()
    getCurrentList$ = this.actions$.pipe(
        ofType(currencyListActions.GET_CURRENCY_LIST),
        switchMap(() => {
            return this.exchangeRateService.callExchangeRate()
            .pipe(
                map((response) => new currencyListActions.GetCurrencyListSuccess(response)),
                catchError(error => of(new currencyListActions.GetCurrencyListFail(error)))
            )
        })
    );
}
