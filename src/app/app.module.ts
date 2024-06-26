import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoccerListComponent } from './soccer-list/soccer-list.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { SoccerstoreAboutComponent } from './soccerstore-about/soccerstore-about.component';
import { SoccerstoreSoccerwearComponent } from './soccerstore-soccerwear/soccerstore-soccerwear.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SoccerListComponent,
    CartComponent,
    SoccerstoreAboutComponent,
    SoccerstoreSoccerwearComponent,
    InputIntegerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
