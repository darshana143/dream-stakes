import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSliderComponent } from './common-slider/common-slider.component';
import { CardSliderComponent } from './card-slider/card-slider.component';



@NgModule({
  declarations: [CommonSliderComponent, CardSliderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonSliderComponent,
    CardSliderComponent
  ]
})
export class DsComponentsModule { }
