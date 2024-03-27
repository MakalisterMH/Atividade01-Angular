import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalhes-clima',
  templateUrl: './detalhes-clima.component.html',
  styleUrls: ['./detalhes-clima.component.css']
})
export class DetalhesClimaComponent {
  
  @Input() dadosClima: any; // Receberá os dados do clima

  constructor() { }
}
