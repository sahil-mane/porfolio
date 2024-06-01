const { user } = require("../models/userModal");
const createError = require("../utils/appError");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async ( req, res, next ) => {

    const {name , email , password} = req.body;
    try{
        const UserExist = await user.findOne({ email });

        if(UserExist)
            {
                return next(new createError('User already exist!',400));
            }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await user.create({
            name ,
            email , 
            password:hashedPassword
        });

        const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '90d',
        });

        res.json({
            status: 'success',
            message:'user registered successfully',
            token,
            user:{
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                password:newUser.password
            }
        });

    } 
    catch(error)
    {
        next(error);
    }
}

//36:21 min:sec