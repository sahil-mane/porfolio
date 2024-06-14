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
        expiresIn:"15m"
       });

       res.cookie("token",newToken,{
        path:"/",
        httpOnly:true,
        expires: new Date(Date.now()+15*60*1000),
        sameSite:"lax"
       });

       req.user = user;
       

       return res.status(200).json({success:true,message:"User is logged in"})
        
    } catch (error) {
       
        return res.status(401).json({success:false, message: "Invalid token or token expired" });   
    }    
}