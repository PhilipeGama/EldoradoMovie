import Gender from "./gender.interface";

export default interface Movie {
        id?: number;
        name: string;
        synopsis: string;
        releaseDate: string;
        boxOffice: number;
        poster?: string;
        createdAt?: Date;
        updatedAt?: Date;
        gender: Gender;
        full_path?: string;
}
