import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindBdayComponent } from './components/find-bday/find-bday.component';
import { RouterModule } from "@angular/router";
import { birthdayRoutes } from "./birthday.module.routes";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(birthdayRoutes),
    SharedModule
  ],
  declarations: [FindBdayComponent]
})
export class BirthdayModule { }
