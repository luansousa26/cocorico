import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatSnackBarModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatExpansionModule,
  MatTabsModule
      } from '@angular/material';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatAutocompleteModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTabsModule
  ],
  declarations: []
})
export class MaterialModule { }
