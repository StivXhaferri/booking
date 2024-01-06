import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import authenticateToken from '../middlewares/authMiddleware.js'
import verifyToken from '../middlewares/tokenMiddleware.js'



const router = express.Router();

router.get('/dashboard', authenticateToken, async (req, res) => {
    try {
      
      return res.status(200).json({ message: 'Authenticated user accessing dashboard' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });

export default router

