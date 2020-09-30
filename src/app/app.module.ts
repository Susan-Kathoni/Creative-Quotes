import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { DateCountPipe } from './date-count.pipe';
import { QuoteInputFormComponent } from './quote-input-form/quote-input-form.component';


import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, QuoteComponent, QuotesDetailsComponent, DateCountPipe, QuoteInputFormComponent, QuoteInputFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }




