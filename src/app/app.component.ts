import { Component } from '@angular/core';
import { PetOptions } from './pet/pet.options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'academia-dev-frontend';

  lostPets: PetOptions[]=[{
    name: 'Roberto',
    description: 'Descrição do pet'
  },{
    name: 'Robertoso',
    description: 'Descrição do pet'
  },{
    name: 'Adolfo',
    description: 'Descrição do pet'
  },{
    name: 'Rogério',
    description: 'Descrição do pet'
  }]
  
  adoptionPets: PetOptions[]=[{
    name: 'Romário',
    description: 'Descrição do pet'
  },{
    name: 'Adão',
    description: 'Descrição do pet'
  }]
}
