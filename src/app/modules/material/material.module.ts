import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule,
  MatSnackBarModule, MatCardModule, MatTableModule,
} from '@angular/material';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    CommonModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    MatCardModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    MatCardModule,
    MatTableModule
  ],
  providers:[
  ],
  declarations: [],
})
export class MaterialModule { }
