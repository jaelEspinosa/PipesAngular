import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'jose antonio'
  nombreUpper: string = 'JOSE ANTONIO'
  nombreCompleto: string = 'jOSe antONio'

  fecha: Date = new Date();
}
