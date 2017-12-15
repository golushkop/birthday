import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './components/default/default.component';
import { RouterModule } from "@angular/router";
import { defaultRoutes } from "./default.module.routes";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(defaultRoutes),
    SharedModule
  ],
  declarations: [DefaultComponent]
})
export class DefaultModule { }
