import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const UserSchema = new mongoose.Schema(
    {
        first_name:{
            type:String,
            required:true
        },
        last_name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required: true,
            unique: true,
            match:[
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              ],
        },
        password:{
            type:String,
            required:true,
        },
        isAdmin:{
            type: Boolean,
            required: true,
            default: false
        },
        resetPasswordToken: String,
        resetPasswordExpires: Date,

    }
);


UserSchema.pre('save', async function (next) {
    try{
        if(!this.isModified('password')){
            return next();
        }
        const hashedPassword = await bcrypt.hash(this.password , 10);
        this.password = hashedPassword;
        return next
    }catch(error){
       console.log(error)
    }
})


UserSchema.methods.comparePassword = async function (candidatePassword){
    try{
        return await bcrypt.compare(candidatePassword, this.password)
    }catch(error){
        throw new Error(err)
    }
}


const User = mongoose.model('User', UserSchema);

export default User