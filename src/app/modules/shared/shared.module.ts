import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material/material.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  declarations: [
  ],
  exports: [
    MaterialModule,
    FormsModule
  ],
  entryComponents: []
})
export class SharedModule {
   static forRoot(): ModuleWithProviders {
     return {
       ngModule: SharedModule,
       providers: []
     }
   }
}
