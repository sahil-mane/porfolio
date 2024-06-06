const { sendMessage } = require("../middlewares/sendMessage");

exports.contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const userMsg = `Name : ${name}\nEmail: ${email}\nMessage : ${message}`;
    const sendMessage = await sendMessage(userMsg);

    if (!sendMessage) 
    {
      return res
        .status(400)
        .json({ success: false, message: "Message not sent" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
