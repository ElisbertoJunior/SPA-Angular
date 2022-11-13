import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CompAtributesComponent } from './comp-atributes/comp-atributes.component';

//componentes
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CompAtributesComponent
  ],
  // bibliotecas
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
