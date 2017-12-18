import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routing } from "./app.module.routes";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./modules/shared/shared.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot()
  ],
  providers: [
    BrowserAnimationsModule
  ],
  bootstrap: [
    AppComponent
  ],

})
export class AppModule { }
