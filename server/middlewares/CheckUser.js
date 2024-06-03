const jwt = require("jsonwebtoken");

exports.checkUser = (req ,res ,next) =>{
    try {
        const {token} = req.cookies;
        // check if token is not present
    if(!token){
        return res.status(401).json({ success:false,message: "please login first"});
        }

        // verify token
       const user =  jwt.verify(token,process.env.JWT_SECRET);

       //clear the previous token
       res.clearCookie("token");

       // creating a new token
       const newToken = jwt.sign({id:user.id},process.env.JWT_SECRET,{
        expiresIn:"30s"
       });

       res.cookie("token",newToken,{
        path:"/",
        httpOnly:true,
        expiresIn: new Date(Date,now()+1000*30),
        sameSite:"lax"
       });

       return res.status(200).json({success:true,message:"USer is logged in",user})
        
    } catch (error) {
        return res.status(401).json({success:false, message: "Invalid token or token expired" });   
    }    
}