import { NextApiRequest, NextApiResponse } from 'next';

// Predefined users and roles
const users = [
  { username: 'frans', password: 'frans123', role: 'lecturer' },
  { username: 'jan', password: 'jan123', role: 'student' },
  { username: 'frits', password: 'frits123', role: 'guest' },
  { username: 'admin', password: 'admin123', role: 'admin' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Find user by username
    const user = users.find(user => user.username === username);

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Check password
    if (user.password !== password) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    // Return the role of the user
    return res.status(200).json({ role: user.role });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
