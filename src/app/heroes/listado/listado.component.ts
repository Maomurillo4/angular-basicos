import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  
  heroes: string[] = ['Jinx', 'Ashe', 'Jhin', 'Zeri', 'Kaisa'];
  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    
  }
}
