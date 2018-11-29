/**
 * Angular-Imports
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Module-Imports
 */
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
