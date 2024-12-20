import { Movie } from "./Movie";

/* import { Movie } from "@prisma/client";
 */
export class Author {
    id: number;
    name: string;
    movies: Movie[];
  
    constructor(id: number, name: string, movies: Movie[]) {
      this.id = id;
      this.name = name;
      this.movies = movies;
    }
  
    static fromPrisma(prismaAuthor: any): Author {
      return new Author(prismaAuthor.id, prismaAuthor.name, prismaAuthor.movies);
    }
  }
  