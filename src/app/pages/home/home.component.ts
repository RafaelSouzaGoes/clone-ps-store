import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/models/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {
  produtos!: IProduto[];

  constructor(private ProdutosService: ProdutosService) {}

  ngOnInit() {
    this.buscarProdutos();
  }

  buscarProdutos() {
    this.ProdutosService.getAll().subscribe((produtos: IProduto[]) => {
      this.produtos = produtos;
    });
  }
}
