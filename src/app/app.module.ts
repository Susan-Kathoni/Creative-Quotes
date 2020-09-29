import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { QuoteInputFormComponent } from './quote-input-form/quote-input-form.component';



@NgModule({
  declarations: [AppComponent, QuoteComponent, QuotesDetailsComponent, DateCountPipe, GoalFormComponent, QuoteInputFormComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
