const cloudinary = require("cloudinary");

cloudinary.v2.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

exports.generateSignature = async (req , res ) => {
    const {public_id} = req.query;

    const signature = await cloudinary.v2.utils.api_sign_request({
        public_id,
        timestamp: Math.floor((new Date().getTime() + 31536000000) /1000),
    },
    process.env.CLOUD_API_SECRET
);

return res.status(200).json({ signature });
};