import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[]=['Spiderman', 'Hulk','Thor','Batman']
  heroeBorrado:string=''

  borrarHeroe(){
    this.heroeBorrado=this.heroes.shift()||'';
  }
}
