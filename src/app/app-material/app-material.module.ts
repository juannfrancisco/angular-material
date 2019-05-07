import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],exports:[
    MatButtonModule, 
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule  
  ]
})
export class AppMaterialModule { }
