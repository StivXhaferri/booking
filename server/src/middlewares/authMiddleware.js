import jwt from 'jsonwebtoken'
import User from '../models/User.js'


const authenticateToken = async (req, res, next) => {
    try {
      const token = req.headers['authorization'];
  
      if (!token) {
        return res.status(401).json('Not authenticated: Token missing');
      }
  
      const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET_KEY);
      const user = await User.findById(decoded.userId);
  
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }
  
      req.user = user;
      next();
    } catch (error) {
      console.error('Authentication error:', error);
      return res.status(401).json({ message: 'Authentication failed' });
    }
  };
  
  export default authenticateToken;