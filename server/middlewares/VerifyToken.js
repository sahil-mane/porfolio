const jwt = require("jsonwebtoken");
const { User } = require("../models/userModal");

exports.verifyToken = async(req , res , next) => {
    // get token from cookies
    const { token } = req.cookies;

    try {
        // if token not found 
        if(!token)
            {
                return res.status(401).json({
                    success:false ,
                    message : "Please login to access this resource"
                });
            }

        //verification of token
        const user =jwt.verify(token,process.env.JWT_SECRET);

        //adding user id to req object
        req.id = user.id;

        // to proceed furthur
        next();        
    } catch (error) {
        return res
        .status(401)
        .json({success: false, message: "Invalid token  or token expired"})
    }

}