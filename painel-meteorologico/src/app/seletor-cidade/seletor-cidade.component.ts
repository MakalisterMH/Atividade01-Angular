import { Component } from '@angular/core';
import { ServicoClimaService } from '../servico-clima.service';


@Component({
  selector: 'app-seletor-cidade',
  templateUrl: './seletor-cidade.component.html',
  styleUrls: ['./seletor-cidade.component.css']
})
export class SeletorCidadeComponent {
  nomeCidade: string = '';
  dadosClima: any;
  mostrarDetalhes: boolean = false; // Variável para controlar a exibição dos detalhes

  constructor(private servicoClima: ServicoClimaService) {}

  buscarClima() {
    if (this.nomeCidade.toLowerCase() === 'goiânia') {
      this.servicoClima.getClimaGoiânia().subscribe(
        (data) => {
          this.dadosClima = data;
        },
      );
    }
    if (this.nomeCidade.toLowerCase() === 'são paulo') {
      this.servicoClima.getClimaSãoPaulo().subscribe(
        (data) => {
          this.dadosClima = data;
        },
      );
    } else {
    }
  }

  mostrarDetalhe() {
    this.mostrarDetalhes = true; // Exibir detalhes do clima quando o botão "Detalhes" é clicado
  }



  formatarData(timestamp: number): string {
    return new Date(timestamp * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
}



