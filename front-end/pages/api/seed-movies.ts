import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Check if movies already exist
    const existingMovies = await prisma.movie.findMany();
    if (existingMovies.length > 0) {
      return res.status(200).json({ message: 'Movies already seeded' });
    }

    // Seed movies
    const movies = [
      { title: 'Inception', genre: 'Sci-Fi', releaseYear: 2010 },
      { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
      { title: 'Interstellar', genre: 'Sci-Fi', releaseYear: 2014 },
    ];

    const createdMovies = await prisma.movie.createMany({ data: movies });
    return res.status(201).json({ success: true, count: createdMovies.count });
  } catch (error) {
    console.error('Error in seed-movies handler:', error);
    return res.status(500).json({ error: 'Failed to seed movies' });
  }
}
