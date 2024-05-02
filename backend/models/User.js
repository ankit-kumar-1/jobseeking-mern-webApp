import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'pease provide your name'],
        minLength: [3, 'name must contain atleast 3 characters'],
        maxLength: [20, 'name can not exceed 30 characters'],
    },
    email: {
        type: String,
        required: [true, 'please provide your email'],
        validate: [validator.isEmail, 'please provide valid email'],
    },
    phone: {
        type: Number,
        required: [true, 'please provide your phone number'],
    },
    password: {
        type: String,
        required: [true, 'please provide your password'],
        minLength: [8, 'password must contain atleast 8 characters'],
        maxLength: [20, 'password can not exceed 20 characters'],
        select: false,
    },
    role: {
        type: String,
        required: [true, 'please provide your role'],
        enum: ['Jobseeker', 'Employer'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

//HASHING PASSWORD

userSchema.pre('save', async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

//comparing password

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

//generating jwt token

userSchema.methods.geJWTToken = async function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
}

export const User = mongoose.model("User", userSchema);