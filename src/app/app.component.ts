import { Component } from '@angular/core';
import { ExchangeRateService } from './services/exchange-rate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'home-depot';

  currencyList = ['CAD', 'USD', 'EUR'];
  amountToConvert = '0.00';
  convertedAmount = '0.00';
  originalCurrency = this.currencyList[0];
  targetCurrency = this.currencyList[1];

  constructor(private exchangeRate: ExchangeRateService) {
  }

  // Function used to convert the currency amount to desired currency
  convertCurrency(type, value) {
    const pattern = new RegExp(/[0-9]+.?[0-9]?[0-9]?/);
    console.log(this.amountToConvert);
    
    if (!pattern.test(this.amountToConvert)) {
      alert('Please enter valid number.');
    } else {
      if (type === 'originalCurrency') {
        this.amountToConvert = value;
      } else {
        this.convertCurrency = value;
      }
      console.log(this.amountToConvert, this.convertedAmount);
      this.exchangeRate.callExchangeRate().subscribe(data => {
        // adding base converter to the list
        data.rates['EUR'] = 1;
        console.log(data.rates, data.rates[this.targetCurrency], data.rates[this.originalCurrency]);
        this.convertedAmount = ((data.rates[this.targetCurrency]/data.rates[this.originalCurrency]) * parseInt(this.amountToConvert, 10))
                                .toFixed(2);
      })
    }
  }
}
