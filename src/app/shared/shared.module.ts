import {NgModule} from '@angular/core';
import { PetListItemComponent } from './pet-list-item/pet-list-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        PetListItemComponent,
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        PetListItemComponent,
        HeaderComponent,
        FooterComponent
    ]
})

export class SharedModule { }
