import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'academia-dev-frontend';
  lostPets=[{
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
  adoptionPets=[{
    name: 'Romário',
    description: 'Descrição do pet'
  },{
    name: 'Adão',
    description: 'Descrição do pet'
  }]
}
