const jwt = require('jsonwebtoken');

const { promisify } = require('util');
const auth = require('../../config/auth');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ error: 'User not authorized' });

  const [, token] = authorization.split(' ');

  try {
    const { id } = await promisify(jwt.verify)(token, auth.secret_admin);
    req.adminId = id;
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
