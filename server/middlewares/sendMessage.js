const { createTransport } = require("nodemailer");

const sendMessage = async (userMsg) => {
    // important things to know is createTransport and sendMail

    // setting up transporter
    const transporter = createTransport({
        service:"gmail",
        auth : {
            user: process.env.APP_EMAIL,
            pass: process.env.APP_PASSWORD,
        },
    });

    // Sending the message
    const sendMessage = await transporter.sendMail({
        from : process.env.APP_EMAIL,
        to : process.env.APP_EMAIL,
        subject : "New Message from Portfolio Site",
        text: userMsg,
    });

    return sendMessage;
};

module.exports = {sendMessage}