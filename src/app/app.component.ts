import { Component, ViewChild, ElementRef } from '@angular/core';
import { ExchangeRateService } from './services/exchange-rate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('originalCurrency', {static: false}) originalCurrency: ElementRef;
  @ViewChild('targetCurrency', {static: false}) targetCurrency: ElementRef;

  title = 'home-depot';

  currencyList = ['CAD', 'USD', 'EUR'];
  amountToConvert = '0.00';
  convertedAmount = '0.00';
  alertShown = false;

  constructor(private exchangeRate: ExchangeRateService) {
  }

  // Function used to convert the currency amount to desired currency
  convertCurrency() {
    const pattern = new RegExp(/^[0-9\.]+[0-9]?$/);
    if (!pattern.test(this.amountToConvert) && this.amountToConvert) {
      alert('Please enter valid number.');
      this.alertShown = true;
    } else {
      this.alertShown = false;
      console.log(this.amountToConvert, this.convertedAmount);
      this.exchangeRate.callExchangeRate().subscribe(data => {
        // adding base converter to the list
        data.rates['EUR'] = 1;
        console.log(data.rates, this.targetCurrency.nativeElement.value, this.originalCurrency.nativeElement.value, 
          data.rates[this.targetCurrency.nativeElement.value], data.rates[this.originalCurrency.nativeElement.value]);
        this.convertedAmount = ((data.rates[this.targetCurrency.nativeElement.value]/data.rates[this.originalCurrency.nativeElement.value]) * parseInt(this.amountToConvert, 10))
                                .toFixed(2);
      })
    }
  }
}
