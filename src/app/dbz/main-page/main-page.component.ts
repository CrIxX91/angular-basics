import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Roshi',
    poder: 50
  }

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  // AddNewCharacter(character: Personaje) {
  //   this.personajes.push(character);
  // }

  // constructor(private dbzService: DbzService) { }
  constructor() { }

}
