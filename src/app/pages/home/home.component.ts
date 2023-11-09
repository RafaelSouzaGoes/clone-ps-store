import { Component, OnInit } from '@angular/core';
import { IProduto } from 'src/app/models/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  produtos!: IProduto[];

  cols!: number;

  gridByBreakpoint = {
    xl: 4,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1,
  };

  constructor(
    private ProdutosService: ProdutosService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.setupBreakpointObserver();
    this.buscarProdutos();
  }

  private setupBreakpointObserver() {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(
        map((result) => this.getColsByBreakpoint(result)),
        distinctUntilChanged()
      )
      .subscribe((cols) => {
        this.cols = cols;
      });
  }

  getColsByBreakpoint(result: any): number {
    if (result.matches) {
      if (result.breakpoints[Breakpoints.XSmall]) {
        return this.gridByBreakpoint.xs;
      }
      if (result.breakpoints[Breakpoints.Small]) {
        return this.gridByBreakpoint.sm;
      }
      if (result.breakpoints[Breakpoints.Medium]) {
        return this.gridByBreakpoint.md;
      }
      if (result.breakpoints[Breakpoints.Large]) {
        return this.gridByBreakpoint.lg;
      }
      if (result.breakpoints[Breakpoints.XLarge]) {
        return this.gridByBreakpoint.xl;
      }
    }
    return 4;
  }

  buscarProdutos() {
    this.ProdutosService.getAll().subscribe((produtos: IProduto[]) => {
      this.produtos = produtos;
    });
  }
}
