import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-informacao-clima',
  templateUrl: './informacao-clima.component.html',
  styleUrl: './informacao-clima.component.css'
})
export class InformacaoClimaComponent {

  @Input() dadosClima: any;

}
