const cloudinary = require("cloudinary");

cloudinary.v2.config({
    cloud_name : "dchitmmmx",
    api_key: "638525411819457",
    api_secret:"-frjg7W1RirISADR48Of5-flGyo",
});

exports.generateSignature = async (req , res ) => {
    const {public_id} = req.query;

    const signature = await cloudinary.v2.utils.api_sign_request({
        public_id,
        timestamp: Math.floor((new Date().getTime() + 31536000000) /1000),
    },
    "-frjg7W1RirISADR48Of5-flGyo"
);

return res.status(200).json({ signature });
};