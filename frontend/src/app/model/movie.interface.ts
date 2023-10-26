import Gender from "./gender.interface";

export default interface Movie {
  id?: number;
  name: string;
  synopsis: string;
  trailer: string;
  releaseDate: string;
  boxOffice: string;
  poster?: string;
  createdAt?: Date;
  updatedAt?: Date;
  gender: Gender;
  fullPath?: string;
}
