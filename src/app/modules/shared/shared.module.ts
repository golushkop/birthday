import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material/material.module";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PopoverDirective } from './directives/popover.directive';
import { CityAutocompleteFormComponent } from './components/city-autocomplete-form/city-autocomplete-form.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PopoverDirective,
    CityAutocompleteFormComponent
  ],
  exports: [
    MaterialModule,
    FormsModule,
    PopoverDirective,
    CityAutocompleteFormComponent,
    ReactiveFormsModule
  ],
  entryComponents: [],
  schemas: []
})
export class SharedModule {
   static forRoot(): ModuleWithProviders {
     return {
       ngModule: SharedModule,
       providers: [
         PopoverDirective,
         CityAutocompleteFormComponent
       ]
     }
   }
}
