import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],exports:[
    MatButtonModule, 
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule  
  ]
})
export class AppMaterialModule { }
