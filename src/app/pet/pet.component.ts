import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html'
})
export class PetComponent{
  @Input() name;
  @Input() description = 'Um animal dócil que foi perdido no centreventos';
  photo = "https://thenypost.files.wordpress.com/2018/05/180516-woman-mauled-by-angry-wiener-dogs-feature.jpg?quality=90&strip=all&w=200&h=200&crop=1";
}
