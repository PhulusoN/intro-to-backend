import mongoose, { Schema, Document } from 'mongoose';

const userSchema = new Schema(
    {
        username: {
            type:String,
            required: true,
            unique:true,
            trim:true, // trims white spaces
            minLenght:1,
            maxLenght:30,
        },
        password:{
            type:String,
            required:true,
            minLenght:6,
            maxLenght:50,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
        },
        timestamps:true,
    }
);

export const User = mongoose.model('User', userSchema);
