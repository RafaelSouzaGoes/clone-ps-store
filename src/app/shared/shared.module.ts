import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar'



import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardsComponent,

  ],
})
export class SharedModule { }
