import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/User.js";
import { verifyToken } from '../middleware/auth.js';

//registration 
export const register = async(req, res) => {

    try {

        const{
            firstName,
            lastName,
            email,
            password
        } = req.body

        const salt = await bcrypt.genSalt()

        const passwordHash = await bycrypt.hash(password, salt)

        
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash
        })


        
        //201 = smthn has been created
        res.status(201).json(savedUser)

    }catch(err){
        console.log(err.message)
        res.status(500).json({error: err.message})
    }
}

//login function
export const login = async(req, res) => {
    try {

        const{
            email,
            password
        } = req.body

        const user = await User.findOne({email: email});

        if(!user){return res.status(400).json({msg: "User does not exist"})}
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });


        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        delete user.password;
        res.status(200).json({ token, user });
    }catch(err){
        console.log(err.message)
        res.status(500).json({error: err.message})
  
    }
}