import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    MatGridListModule,
    MatCardModule,

  ]
})
export class PagesModule { }
