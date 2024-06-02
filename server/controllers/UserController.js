const { user } = require("../models/userModal");

// get normal user
exports.getUser = async (req, res , next) => {
  try {
    const User = await user.findOne().select("-password -email");
    if (!User) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, User });
  } catch (error) {
    res.status(500).json({success : false , message : error.message });
  }
};

//get admin user
// 1:03:23 hr min sec
