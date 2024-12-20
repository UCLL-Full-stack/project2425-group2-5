"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorService = void 0;
const authorRepository_1 = require("../repository/authorRepository");
const Author_1 = require("../model/Author");
class AuthorService {
    constructor() {
        this.authorRepository = new authorRepository_1.AuthorRepository();
    }
    getAllAuthors() {
        return __awaiter(this, void 0, void 0, function* () {
            const authors = yield this.authorRepository.getAllAuthors();
            return authors.map(Author_1.Author.fromPrisma);
        });
    }
    getAuthorById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const author = yield this.authorRepository.getAuthorById(id);
            return Author_1.Author.fromPrisma(author);
        });
    }
    createAuthor(name) {
        return __awaiter(this, void 0, void 0, function* () {
            // Add business logic and validation here
            const newAuthor = yield this.authorRepository.createAuthor(name);
            return Author_1.Author.fromPrisma(newAuthor);
        });
    }
}
exports.AuthorService = AuthorService;
