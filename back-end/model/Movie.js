"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
class Movie {
    constructor(id, title, authorId, tags) {
        this.id = id;
        this.title = title;
        this.authorId = authorId;
        this.tags = tags;
    }
    static fromPrisma(prismaMovie) {
        return new Movie(prismaMovie.id, prismaMovie.title, prismaMovie.authorId, prismaMovie.tags);
    }
}
exports.Movie = Movie;
