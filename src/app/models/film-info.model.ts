import { ActorInfo } from "./actor-info.model";

export class FilmInfo {
  title: string;
  synopsis: string;
  releaseDate: Date;
  actors: Array<ActorInfo>;
  imgUrl: string;
  
  constructor(title: string, synopsis: string, imgUrl: string, releaseDate: Date, actors: Array<ActorInfo>) {
    this.title = title;
    this.synopsis = synopsis;
    this.imgUrl = imgUrl;
    this.releaseDate = releaseDate;
    this.actors = actors;
  }
}