import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilmInfoComponent } from './film-info/film-info.component';
import { ActorsTileComponent } from './actors-tile/actors-tile.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FilmInfoComponent, ActorsTileComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
