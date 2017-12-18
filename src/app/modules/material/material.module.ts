import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule,
  MatSnackBarModule, MatCardModule, MatTableModule, MatListModule,
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
    MatTableModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    MatCardModule,
    MatTableModule,
    MatListModule
  ],
  providers:[
  ],
  declarations: [],
})
export class MaterialModule { }
