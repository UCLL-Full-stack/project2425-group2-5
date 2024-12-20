import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AuthorRepository {
  async getAllAuthors() {
    return prisma.author.findMany({
      include: { books: true },
    });
  }

  async getAuthorById(id: number) {
    return prisma.author.findUnique({
      where: { id },
      include: { books: true },
    });
  }

  async createAuthor(name: string) {
    return prisma.author.create({
      data: { name },
    });
  }
}
