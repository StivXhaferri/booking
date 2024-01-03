import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import authenticateToken from '../middlewares/authMiddleware.js'


const router = express.Router();

router.post('/register', async (req , res) => {
    try{
        const {first_name , last_name , email , password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "User already exists"});

        }
        const newUser = new User({ first_name , last_name , email , password});
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });


    }catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
      return
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });

  } catch (err) {
    console.error('Error during signin:', err); 
    res.status(500).json({ message: 'Error logging in' });
  }
});

router.get('/profile', authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

export default router;