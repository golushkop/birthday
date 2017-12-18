import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindBdayComponent } from './components/find-bday/find-bday.component';
import { RouterModule } from "@angular/router";
import { birthdayRoutes } from "./birthday.module.routes";
import { UserCardComponent } from './components/user-card/user-card.component';
import { GetPostBirthdayDataService } from "./services/get-post-birthday-data.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(birthdayRoutes),
    SharedModule
  ],
  declarations: [
    FindBdayComponent,
    UserCardComponent
  ],
  providers: [
    GetPostBirthdayDataService,
    UserCardComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BirthdayModule { }
