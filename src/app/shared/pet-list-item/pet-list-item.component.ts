import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pet-list-item',
  templateUrl: './pet-list-item.component.html'
})
export class PetListItemComponent {
  @Input() name;
  @Input() description = 'Um animal dócil que foi perdido no centreventos';
  // tslint:disable-next-line:max-line-length
  photo = 'https://thenypost.files.wordpress.com/2018/05/180516-woman-mauled-by-angry-wiener-dogs-feature.jpg?quality=90&strip=all&w=200&h=200&crop=1';
}
