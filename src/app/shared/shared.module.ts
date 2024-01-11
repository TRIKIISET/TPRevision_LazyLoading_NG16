import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImmPipe } from './imm.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ImmPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    ImmPipe,
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[]
})
export class SharedModule { }
