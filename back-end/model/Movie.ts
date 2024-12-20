import { Tag } from "@prisma/client";

export class Movie {
    id: number;
    title: string;
    authorId: number;
    tags: Tag[];
  
    constructor(id: number, title: string, authorId: number, tags: Tag[]) {
      this.id = id;
      this.title = title;
      this.authorId = authorId;
      this.tags = tags;
    }
  
    static fromPrisma(prismaMovie: any): Movie {
      return new Movie(
        prismaMovie.id,
        prismaMovie.title,
        prismaMovie.authorId,
        prismaMovie.tags
      );
    }
  }
  