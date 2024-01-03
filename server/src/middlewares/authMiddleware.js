import jwt from 'jsonwebtoken'
import User from '../models/User.js'


const authenticateToken = async ( req, res , next) => {
    try{
        const token = req.headers['authorization'];
        if(!token){
            return res.status(401).json('Not authenticated')
        }

        const decoded = jwt.verify(token , process.env.JWT_SECRET_KEY);
        const user = await User.findById(decoded.userId);
        if(!user){
            return res.status(401).json({message: 'User not found'})
        }

        req.user = user;
        next();

    }catch(error){
        return res.status(401).json({message: error.message})
    }
}


export default authenticateToken;