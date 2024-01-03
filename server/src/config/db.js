import mongoose from 'mongoose'


const connectDB = async () => {
    try{
        mongoose.connect(process.env.MONGODB_URI);
        console.log('Database connected successfully');
    }catch(error){
        console.log('Failed to connect', error);
    }
} 

export default connectDB