import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './ui-containers/top-bar/top-bar.component';
import { LeftPanalComponent } from './ui-containers/left-panal/left-panal.component';
import { DsComponentsModule } from './ds-components/ds-components.module';
import { EnterScreenComponent } from './enter-screen/enter-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RightPanalComponent } from './ui-containers/right-panal/right-panal.component';

// -------------------------------- PrimeNG ----------------------------------------
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    LeftPanalComponent,
    EnterScreenComponent,
    DashboardComponent,
    RightPanalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    DsComponentsModule,
    DropdownModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
