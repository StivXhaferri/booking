import jwt, { verify } from 'jsonwebtoken'


const verifyToken = (req , res , next) => {
    const token = req.headers.authorization;


    if(!token){
        return res.status(401).json({message : "Unauthorized"})
    }

    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
    }catch(error){
        return res.status(401).json({message: "Invalid Token"})
    }
}


export default verifyToken