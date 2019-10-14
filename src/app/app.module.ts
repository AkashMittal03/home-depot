import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, effects } from '../app/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    CommonModule,   
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('app', reducers),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
