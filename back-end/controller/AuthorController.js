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
exports.getAuthorById = exports.getAllAuthors = void 0;
const AuthorService_1 = require("../service/AuthorService");
const authorService = new AuthorService_1.AuthorService();
const getAllAuthors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authors = yield authorService.getAllAuthors();
    res.json(authors);
});
exports.getAllAuthors = getAllAuthors;
const getAuthorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const author = yield authorService.getAuthorById(Number(req.params.id));
    res.json(author);
});
exports.getAuthorById = getAuthorById;
