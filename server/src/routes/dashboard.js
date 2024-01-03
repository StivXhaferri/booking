import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import authenticateToken from '../middlewares/authMiddleware.js'
import verifyToken from '../middlewares/tokenMiddleware.js'



const router = express.Router();



