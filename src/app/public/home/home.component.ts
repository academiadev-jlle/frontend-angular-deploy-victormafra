import { Component, OnInit } from '@angular/core';
import { PetOptions } from 'src/app/shared/pet-list-item/pet-list-item.options';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lostPets: PetOptions[] = [{
    name: 'Roberto',
    description: 'Descrição do pet'
  }, {
    name: 'Robertoso',
    description: 'Descrição do pet'
  }, {
    name: 'Adolfo',
    description: 'Descrição do pet'
  }, {
    name: 'Rogério',
    description: 'Descrição do pet'
  }];

  adoptionPets: PetOptions[] = [{
    name: 'Romário',
    description: 'Descrição do pet'
  }, {
    name: 'Adão',
    description: 'Descrição do pet'
  }];

  constructor() { }

  ngOnInit() {
  }

}
