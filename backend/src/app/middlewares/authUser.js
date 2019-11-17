import jwt from 'jsonwebtoken';

import { promisify } from 'util';
import auth from '../../config/auth';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ error: 'User not authorized' });

  const [, token] = authorization.split(' ');

  try {
    const { id } = await promisify(jwt.verify)(token, auth.secret_user);

    req.userId = id;

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
