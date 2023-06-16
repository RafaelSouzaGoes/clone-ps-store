import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduto, produtos } from '../models/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: IProduto[] = produtos;

  constructor() { }

  getAll(): Observable<IProduto[]> {
    return of(this.produtos);
  }
}
