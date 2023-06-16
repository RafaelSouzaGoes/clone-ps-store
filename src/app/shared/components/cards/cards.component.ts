import { Component, Input } from '@angular/core';
import { IProduto } from 'src/app/models/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.less'],
})
export class CardsComponent {
  @Input() produtos!: IProduto ;
hovered: any;



}
