// src/app/servico-clima.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicoClimaService {

  constructor(private http: HttpClient) { }

  getClimaGoiânia() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-16.6799&lon=-49.255&appid=8da03ce6ee28167eacb1df32e8b14590';
    return this.http.get(url);
  }

  getClimaSãoPaulo() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-23.5489&lon=-46.6388&appid=8da03ce6ee28167eacb1df32e8b14590';
    return this.http.get(url);
  }

}
