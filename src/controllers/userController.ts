import { Request, Response } from 'express';
import { User } from '../models/User';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, type, password } = req.body;
    const user = await User.create({ name, email, type, password });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email, password } });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
