import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './ui-containers/top-bar/top-bar.component';
import { LeftPanalComponent } from './ui-containers/left-panal/left-panal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    LeftPanalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
