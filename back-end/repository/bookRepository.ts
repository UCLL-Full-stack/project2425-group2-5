import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class BookRepository {
  async getBooksByAuthorId(authorId: number) {
    return prisma.book.findMany({
      where: { authorId },
      include: { tags: true },
    });
  }

  async createBook(title: string, authorId: number) {
    return prisma.book.create({
      data: {
        title,
        author: { connect: { id: authorId } },
      },
    });
  }
}
