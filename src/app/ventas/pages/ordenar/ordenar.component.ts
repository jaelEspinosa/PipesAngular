import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/api-interface';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';
import { ApiService } from '../../../shared/api.service';



@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
  this.getCharacters()
  }


  enMayusculas: boolean = false
  valorOrdenar: string ='sin valor'
  characters:Result[] = [];

  heroes: Heroe[] = [
    {
      nombre:'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre:'Spiderman',
      vuela: false,
      color: Color.rojo

    },
    {
      nombre:'Arrow',
      vuela: false,
      color: Color.verde
    },
    {
      nombre:'Batman',
      vuela: false,
      color: Color.negro
    },
  ]

toggleMay(){
  this.enMayusculas = !this.enMayusculas
}

ordenarPor(valor: string) {
  this.valorOrdenar = valor
}

getCharacters () {
  this.apiService.getCharacters()
  .subscribe({
    next: res =>{
      this.characters = res.results
      console.log(this.characters);


    },
  error: (error)=>{
    this.characters = []
    console.log('huvo un error',error)
  }
  })

}

}
