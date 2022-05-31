import { Component, OnInit, VERSION } from '@angular/core';
import { ActorInfo } from './models/actor-info.model';
import { FilmInfo } from './models/film-info.model';
import { GetFilmService } from './services/get-film.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  movies: FilmInfo[];

  constructor(private filmService: GetFilmService){  }

  ngOnInit() {

    this.filmService.getFilms().subscribe( response => {
      console.log(response);
    })

    this.movies = [
      new FilmInfo(
        'Avatar',
        "Je suis le synopsis d'Avatar",
        'https://m.media-amazon.com/images/I/615Yl386WYL._AC_SY606_.jpg',
        new Date(),
        new Array<ActorInfo>(
          new ActorInfo('Acteur1', 'URL', new Date()),
          new ActorInfo('Acteur2', 'URL', new Date()),
          new ActorInfo('Acteur3', 'URL', new Date())
        )
      ),
      new FilmInfo(
        'Titanic',
        'Je suis le synopsis de Titanic',
        'https://m.media-amazon.com/images/I/71-B0aUFxYL._AC_SY606_.jpg',
        new Date(),
        new Array<ActorInfo>(
          new ActorInfo('Acteur1', 'URL', new Date()),
          new ActorInfo('Acteur2', 'URL', new Date()),
          new ActorInfo('Acteur3', 'URL', new Date())
        )
      ),
    ];
  }
}
