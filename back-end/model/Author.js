"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
class Author {
    constructor(id, name, books) {
        this.id = id;
        this.name = name;
        this.books = books;
    }
    static fromPrisma(prismaAuthor) {
        return new Author(prismaAuthor.id, prismaAuthor.name, prismaAuthor.books);
    }
}
exports.Author = Author;
