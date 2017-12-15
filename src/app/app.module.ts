import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routing } from "./app.module.routes";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [
    BrowserAnimationsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
