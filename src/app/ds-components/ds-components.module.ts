import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSliderComponent } from './common-slider/common-slider.component';
import { CardSliderComponent } from './card-slider/card-slider.component';
import { PopupComponent } from './popup/popup.component';
import {DialogModule} from 'primeng/dialog';



@NgModule({
  declarations: [CommonSliderComponent, CardSliderComponent, PopupComponent],
  imports: [
    CommonModule,
    DialogModule
  ],
  exports: [
    CommonSliderComponent,
    CardSliderComponent,
    PopupComponent
  ]
})
export class DsComponentsModule { }
