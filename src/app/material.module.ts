
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatCheckboxModule,} from '@angular/material';
import {MatDatepickerModule,MatDatepickerInput} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';





@NgModule({
  imports: [  
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatMomentDateModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,ReactiveFormsModule

    
    ],
  exports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatSelectModule,
    MatMomentDateModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule,ReactiveFormsModule
  ],
  
})
export class MaterialModule { 
  
}