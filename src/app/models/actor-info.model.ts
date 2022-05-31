export class ActorInfo {
  name: string;
  dateOfBirth: Date;
  imgUrl: string;
  
  constructor(name: string, imgUrl: string, dateOfBirth: Date) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.dateOfBirth = dateOfBirth;
  }
}