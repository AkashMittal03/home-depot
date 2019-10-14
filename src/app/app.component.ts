import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../app/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('originalCurrency', {static: false}) originalCurrency: ElementRef;
  @ViewChild('targetCurrency', {static: false}) targetCurrency: ElementRef;

  title = 'home-depot';
  currencyList = ['CAD', 'USD', 'EUR'];
  amountToConvert = '0.00';
  convertedAmount = '0.00';
  alertShown = false;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    // Dispatching Action to get currency list
    this.store.dispatch(new fromStore.GetCurrencyList());
  }

  // Function used to convert the currency amount to desired currency
  convertCurrency() {
    const pattern = new RegExp(/^[0-9\.]+[0-9]?$/);
    if (!pattern.test(this.amountToConvert) && this.amountToConvert) {
      alert('Please enter valid number.');
      this.alertShown = true;
    } else {
      this.alertShown = false;
      this.store.select(fromStore.getCurrentList).subscribe(data => {
        // adding base converter to the list
        data.rates['EUR'] = 1;
        this.convertedAmount = ((data.rates[this.targetCurrency.nativeElement.value]
          /data.rates[this.originalCurrency.nativeElement.value]) * parseInt(this.amountToConvert, 10))
          .toFixed(2);
          if (!this.amountToConvert) {
            this.convertedAmount = '0.00';
          }
      })
    }
  }

  // Function used to show modal on click of Disclaimer link
  showDisclaimerDetails() { 
    alert("This tool is used for currency conversion within CAD, USD, EUR currencies.\n" +
      "Usage: Please select the original currency and then choose your desired currency. Now, type in the required amount " +
      "in first column to see the converted amount.");
  } 
}
