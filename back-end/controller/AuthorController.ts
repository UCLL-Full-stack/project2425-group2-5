import { Request, Response } from 'express'; // Importing the types
import { AuthorService } from '../service/AuthorService';

const authorService = new AuthorService();

export const getAllAuthors = async (req: Request, res: Response): Promise<void> => {
  const authors = await authorService.getAllAuthors();
  res.json(authors);
};

export const getAuthorById = async (req: Request, res: Response): Promise<void> => {
  const author = await authorService.getAuthorById(Number(req.params.id));
  res.json(author);
};
