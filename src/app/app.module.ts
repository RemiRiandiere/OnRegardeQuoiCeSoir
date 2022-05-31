import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilmInfoComponent } from './film-info/film-info.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FilmInfoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
