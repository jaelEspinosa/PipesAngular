import { Component } from '@angular/core';
import { resolve } from 'dns';
import { interval } from 'rxjs'
@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
  'masculino': 'invitarlo',
  'femenino' : 'invitarla'
}

 cambiarUser() {
  if(this.nombre === 'Susana'){
    this.nombre = 'Antonio'
    this.genero = 'masculino'
    return
  }
  this.nombre = 'Susana';
  this.genero = 'femenino';
 }


  //i18nPlural
  clientes: string[]= ['Maria', 'Pedro', 'Yolanda', 'Juan']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1' : 'tenemos un cliente esperando',
    'other' : 'tenemos # clientes esperando'
  }


  // keyValue Pipe

  persona = {
    nombre : 'jaelEspinosa',
    edad: 52,
    direccion: 'Pto. Sta. Maria'

  }

  // json Pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Spiderman',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },

  ];

  // async Pipe

  miObservable = interval(1000)

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('Tenemos data de promesa')
    }, 3500)
  })


  addUser(valor: number){
    if(valor === 1 ) this.clientes.push('pepe')

    if(this.clientes.length <= 0 ) return

    if(valor ===-1 ) this.clientes.pop()
  }
}
