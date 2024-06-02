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

exports.login = async ( req,res,next ) => {
    try{
    const {email , password} = req.body;

    const user = await user.findOne({email});
      
    // Checking if user exists
    if(!user)
        {
            return next(new createError('User not found!',400));
        }

    // checking if password matches    
    const IsPasswordValid = await bcrypt.compare(password , user.password);
    
    // if password does not match
    if(!IsPasswordValid)
        {
            return next(new createError('Invalid Credential', 401));
        }

    // creating a token    
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET,{
        expiresIn:'30s'
    });

    // check if "token cookie exists"
    
    // sending token in cookie exists in the request
    const existingToken = req.cookie.token;

    if(existingToken)
        {
            //clear the existing token cookie
            res.clearCookie("token");
        }

    // cookie("cookie_name",cookie_data ,optional)
    res.cookie("token",token, {
        path:"/",
        httpOnly:true, // client side js cannot access the cookie
        expiresIn: new Date(Date.now() + 1000* 30), // expires in 30s
        sameSite:"lax",        
    });

    res.json({
        status:'success',
        message:'user logged in successfully',
        token,
        user:{
            _id: user._id,
            name: user.name,
            email: user.email,
            password:user.password
        } 
    })
    } 
    catch (error)
    {
        next(error);
    }

}

exports.logout = async (req , res , next) => {
    try{
        res.clearCookie("token");
        res.json({
            status:'success',
            message:'user logged out successfully'
            });
    } catch(error)
    {
        next(error);
    }
}
//36:21 min:sec