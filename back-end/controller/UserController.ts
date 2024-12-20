import { Request, Response } from 'express';
import { User } from '../model/User';

export const createUser = (req: Request, res: Response): void => {
    const { id, name, email } = req.body;
    const user = new User(id, name, email);
    res.status(201).send(user);
};