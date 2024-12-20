import { AuthorRepository } from '../repository/authorRepository';
import { Author } from '../model/Author';

export class AuthorService {
  private authorRepository = new AuthorRepository();

  async getAllAuthors() {
    const authors = await this.authorRepository.getAllAuthors();
    return authors.map(Author.fromPrisma);
  }

  async getAuthorById(id: number) {
    const author = await this.authorRepository.getAuthorById(id);
    return Author.fromPrisma(author);
  }

  async createAuthor(name: string) {
    // Add business logic and validation here
    const newAuthor = await this.authorRepository.createAuthor(name);
    return Author.fromPrisma(newAuthor);
  }
}
