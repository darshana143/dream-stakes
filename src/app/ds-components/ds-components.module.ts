import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSliderComponent } from './common-slider/common-slider.component';
import { CardSliderComponent } from './card-slider/card-slider.component';
import { PopupComponent } from './popup/popup.component';
import {DialogModule} from 'primeng/dialog';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import { SafeHtmlPipe } from '../safe-html.pipe';



@NgModule({
  declarations: [CommonSliderComponent, CardSliderComponent, PopupComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
    DialogModule,
    CheckboxModule,
    RadioButtonModule
  ],
  exports: [
    CommonSliderComponent,
    CardSliderComponent,
    PopupComponent
  ]
})
export class DsComponentsModule { }
