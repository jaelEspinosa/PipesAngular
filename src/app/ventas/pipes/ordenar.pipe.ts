import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes:Heroe[], ordenarPor: string = 'sin valor'):Heroe[]  {

   switch ( ordenarPor) {
     case 'nombre' :
        return heroes.sort((x, y) => x.nombre.localeCompare(y.nombre));
     case 'vuela':
        return heroes.sort((x, y) => x.vuela > y.vuela ? 1 : -1);
     case 'color':
        return heroes.sort((x, y) => x.color > y.color ? 1 : -1);
     default:
        return heroes;
   }

  }

}


